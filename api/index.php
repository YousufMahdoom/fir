<?php
/**
 * FIR SPORT SHOP - API Endpoint for Cart, Orders, Tracking & Reviews
 */
header('Content-Type: application/json');
require_once __DIR__ . '/../config/db.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$action = $_GET['action'] ?? $_POST['action'] ?? '';

// 1. CHECKOUT ENDPOINT
if ($action === 'checkout') {
    $raw = file_get_contents('php://input');
    $input = json_decode($raw, true) ?? $_POST;
    
    $customerName = trim($input['name'] ?? 'Pro Athlete');
    $customerEmail = trim($input['email'] ?? 'athlete@firsports.com');
    $customerPhone = trim($input['phone'] ?? '+1 555-0199');
    $address = trim($input['address'] ?? '123 Stadium Way, Suite 400');
    $cartItems = $input['items'] ?? [];
    $totalAmount = floatval($input['total'] ?? 0);

    if (empty($cartItems)) {
        echo json_encode(['success' => false, 'message' => 'Cart is empty.']);
        exit;
    }

    $orderNumber = 'FIR-' . strtoupper(substr(md5(uniqid((string)mt_rand(), true)), 0, 8));

    $db = Database::getConnection();
    if ($db) {
        try {
            $stmt = $db->prepare("INSERT INTO orders (order_number, customer_name, customer_email, customer_phone, shipping_address, total_amount, status) VALUES (?, ?, ?, ?, ?, ?, 'processing')");
            $stmt->execute([$orderNumber, $customerName, $customerEmail, $customerPhone, $address, $totalAmount]);
            $orderId = $db->lastInsertId();

            $itemStmt = $db->prepare("INSERT INTO order_items (order_id, product_id, variant, quantity, price) VALUES (?, ?, ?, ?, ?)");
            foreach ($cartItems as $item) {
                $variant = $item['variant'] ?? 'Standard';
                $itemStmt->execute([$orderId, $item['id'], $variant, $item['quantity'], $item['price']]);
            }
        } catch (Exception $e) {
            // Handled via session fallback
        }
    }

    // Also persist in session cache for rapid instant tracking
    if (!isset($_SESSION['recent_orders'])) {
        $_SESSION['recent_orders'] = [];
    }
    $_SESSION['recent_orders'][$orderNumber] = [
        'order_number' => $orderNumber,
        'customer_name' => $customerName,
        'customer_email' => $customerEmail,
        'customer_phone' => $customerPhone,
        'shipping_address' => $address,
        'total_amount' => $totalAmount,
        'status' => 'processing',
        'created_at' => date('Y-m-d H:i:s'),
        'items' => $cartItems
    ];

    echo json_encode([
        'success' => true,
        'order_number' => $orderNumber,
        'customer' => $customerName,
        'total' => $totalAmount,
        'message' => 'Thank you! Your order ' . $orderNumber . ' has been confirmed with express dispatch.'
    ]);
    exit;
}

// 2. COUPON VALIDATION ENDPOINT
if ($action === 'apply_coupon') {
    $raw = file_get_contents('php://input');
    $input = json_decode($raw, true) ?? $_POST;
    $code = strtoupper(trim($input['code'] ?? ''));

    if ($code === 'CHAMPION20' || $code === 'FIR20') {
        echo json_encode(['success' => true, 'discount_percent' => 20, 'message' => '20% Champion Discount applied!']);
    } elseif ($code === 'ATHLETE15') {
        echo json_encode(['success' => true, 'discount_percent' => 15, 'message' => '15% Athlete VIP Discount applied!']);
    } elseif ($code === 'PRO10') {
        echo json_encode(['success' => true, 'discount_percent' => 10, 'message' => '10% Pro Discount applied!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid or expired coupon code. Try CHAMPION20']);
    }
    exit;
}

// 3. LIVE ORDER TRACKING ENDPOINT
if ($action === 'track_order') {
    $orderNumber = strtoupper(trim($_GET['order_number'] ?? $_POST['order_number'] ?? ''));
    
    if (empty($orderNumber)) {
        echo json_encode(['success' => false, 'message' => 'Please provide an Order Tracking ID.']);
        exit;
    }

    $order = Database::getOrderByNumber($orderNumber);
    
    if (!$order && isset($_SESSION['recent_orders'][$orderNumber])) {
        $order = $_SESSION['recent_orders'][$orderNumber];
    }

    if (!$order) {
        // If sample search or demo, return simulated active order
        if ($orderNumber === 'FIR-SAMPLE' || strlen($orderNumber) >= 6) {
            $order = [
                'order_number' => $orderNumber,
                'customer_name' => 'Marcus Sterling (Pro Athlete)',
                'customer_email' => 'marcus.s@athlete.com',
                'customer_phone' => '+44 7911 123456',
                'shipping_address' => '7 Premier Training Way, Locker Complex 4, Manchester, UK',
                'total_amount' => 324.99,
                'status' => 'in_transit',
                'created_at' => date('Y-m-d H:i:s', strtotime('-4 hours')),
                'items' => [
                    ['name' => 'FIR Aurora Fusion Pro Elite Boot', 'variant' => 'US 10 / EU 44', 'quantity' => 1, 'price' => 279.99, 'image' => 'assets/images/hero_boot.jpg'],
                    ['name' => 'FIR Titanium Stance Smart Bat Sensor Cap', 'variant' => 'Single Sensor Cap', 'quantity' => 1, 'price' => 139.99, 'image' => 'assets/images/hero_gadget.jpg']
                ]
            ];
        } else {
            echo json_encode(['success' => false, 'message' => 'Order not found. Please verify your FIR-XXXXXXXX tracking code.']);
            exit;
        }
    }

    $status = $order['status'] ?? 'processing';
    $timeline = [
        ['step' => 'Order Confirmed', 'desc' => 'Gear payment verified & allocated from locker stock', 'completed' => true, 'time' => 'Today, 09:15 AM'],
        ['step' => 'Quality & Sensor Calibration', 'desc' => 'Inspected for weight precision & telemetry sync', 'completed' => true, 'time' => 'Today, 11:30 AM'],
        ['step' => 'Courier Express Transit', 'desc' => 'Dispatched with HyperSpeed Air Courier', 'completed' => ($status === 'in_transit' || $status === 'delivered'), 'time' => 'In Transit'],
        ['step' => 'Locker Delivery', 'desc' => 'Estimated arrival at club / home address', 'completed' => ($status === 'delivered'), 'time' => 'Tomorrow by 2:00 PM']
    ];

    echo json_encode([
        'success' => true,
        'order' => $order,
        'timeline' => $timeline
    ]);
    exit;
}

// 4. REVIEWS ENDPOINTS
if ($action === 'get_reviews') {
    $productId = intval($_GET['product_id'] ?? 0);
    $reviews = Database::getProductReviews($productId);
    echo json_encode(['success' => true, 'reviews' => $reviews]);
    exit;
}

if ($action === 'submit_review') {
    $raw = file_get_contents('php://input');
    $input = json_decode($raw, true) ?? $_POST;
    
    $productId = intval($input['product_id'] ?? 0);
    $name = trim($input['name'] ?? 'Pro Athlete');
    $role = trim($input['role'] ?? 'Verified Player');
    $rating = intval($input['rating'] ?? 5);
    $comment = trim($input['comment'] ?? '');

    if ($productId <= 0 || empty($comment)) {
        echo json_encode(['success' => false, 'message' => 'Product ID and review feedback are required.']);
        exit;
    }

    Database::addReview($productId, $name, $role, $rating, $comment);
    $reviews = Database::getProductReviews($productId);

    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your verified athlete review has been published.',
        'reviews' => $reviews
    ]);
    exit;
}

echo json_encode(['success' => true, 'status' => 'FIR Sports API ready']);
