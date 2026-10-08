<?php
/**
 * FIR SPORT SHOP - Database Configuration & Mock Fallback Handler
 * Connects to MySQL when available, or seamlessly serves seeded mock data
 * so the shop interface runs flawlessly anytime.
 */

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'fir_sports');

class Database {
    private static $pdo = null;
    private static $connected = false;

    public static function getConnection() {
        if (self::$pdo !== null) {
            return self::$pdo;
        }

        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            self::$pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_TIMEOUT => 2
            ]);
            self::$connected = true;
            return self::$pdo;
        } catch (PDOException $e) {
            self::$connected = false;
            return null;
        }
    }

    public static function isConnected() {
        if (self::$pdo === null) {
            self::getConnection();
        }
        return self::$connected;
    }

    public static function getCategories() {
        $db = self::getConnection();
        if ($db) {
            try {
                $stmt = $db->query("SELECT * FROM categories ORDER BY id ASC");
                return $stmt->fetchAll();
            } catch (Exception $e) {
                // Fallback to mock data if table doesn't exist yet
            }
        }

        // High quality mock data
        return [
            [
                'id' => 1,
                'name' => 'Football Boots',
                'slug' => 'football-boots',
                'badge' => 'Trending',
                'description' => 'Elite FG/AG studs, dynamic volt acceleration & textured speed weave.',
                'icon' => 'futbol',
                'count' => 24
            ],
            [
                'id' => 2,
                'name' => 'Cricket Bats & Gear',
                'slug' => 'cricket-bats',
                'badge' => 'Grade 1+ Willow',
                'description' => 'Mastercrafted English Willow, massive 40mm power contours & carbon canes.',
                'icon' => 'baseball-bat-ball',
                'count' => 18
            ],
            [
                'id' => 3,
                'name' => 'Smart Sports Gadgets',
                'slug' => 'sports-gadgets',
                'badge' => 'Next-Gen AI',
                'description' => 'Real-time GPS telemetry pods, impact radars & smart biometric wearables.',
                'icon' => 'microchip',
                'count' => 32
            ],
            [
                'id' => 4,
                'name' => 'Performance Gear',
                'slug' => 'performance-gear',
                'badge' => 'High Output',
                'description' => 'Compression recovery wear, smart agility gear & match-grade accessories.',
                'icon' => 'dumbbell',
                'count' => 45
            ]
        ];
    }

    public static function getProducts($category_id = null, $featured_only = false) {
        $db = self::getConnection();
        if ($db) {
            try {
                $sql = "SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id";
                $conditions = [];
                $params = [];

                if ($category_id) {
                    $conditions[] = "p.category_id = ?";
                    $params[] = $category_id;
                }
                if ($featured_only) {
                    $conditions[] = "p.is_featured = 1";
                }

                if (!empty($conditions)) {
                    $sql .= " WHERE " . implode(" AND ", $conditions);
                }

                $sql .= " ORDER BY p.id ASC";
                $stmt = $db->prepare($sql);
                $stmt->execute($params);
                $products = $stmt->fetchAll();
                
                // Decode JSON specs and variants if present
                foreach ($products as &$p) {
                    if (isset($p['specs_json']) && is_string($p['specs_json'])) {
                        $p['specs'] = json_decode($p['specs_json'], true);
                    }
                    if (isset($p['variants_json']) && is_string($p['variants_json'])) {
                        $p['variants'] = json_decode($p['variants_json'], true);
                    }
                }
                return $products;
            } catch (Exception $e) {
                // Fallback below
            }
        }

        // Built-in catalog with high-res imagery & full specifications
        $mock = [
            [
                'id' => 1,
                'category_id' => 1,
                'category_name' => 'Football Boots',
                'name' => 'FIR Aurora Fusion Pro Elite Boot',
                'slug' => 'fir-aurora-fusion-pro-boot',
                'tag' => 'NEW RELEASE',
                'price' => 279.99,
                'original_price' => 329.99,
                'rating' => 5.0,
                'reviews_count' => 84,
                'image' => 'assets/images/hero_boot.jpg',
                'short_desc' => 'Dual-density carbon fiber speed frame, dynamic volt stud propulsion & ACC tactile strike zone.',
                'description' => 'The FIR Aurora Fusion Pro is engineered for relentless wingers and playmakers. Featuring an ultra-lightweight carbon fiber chassis, dynamic ankle collar, and biometric chevron studs that bite into the pitch for instantaneous directional shifts.',
                'specs' => [
                    'Weight' => '178 Grams',
                    'Upper' => 'Dynamic Knit + ACC Tactile Matrix',
                    'Outsole' => 'Full-Length 3K Carbon Spine',
                    'Ground' => 'Firm Ground / Modern 4G Artificial Turf',
                    'Grip Tech' => 'Nano-Textured Strike Pad'
                ],
                'variants' => ['US 8 / EU 41', 'US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45', 'US 12 / EU 46'],
                'is_featured' => 1,
                'is_trending' => 1,
                'stock' => 15
            ],
            [
                'id' => 2,
                'category_id' => 2,
                'category_name' => 'Cricket Bats & Gear',
                'name' => 'FIR Verve Kookaburra Edition English Willow',
                'slug' => 'fir-verve-kookaburra-edition-bat',
                'tag' => 'PRO GRADE 1+',
                'price' => 449.00,
                'original_price' => 520.00,
                'rating' => 4.9,
                'reviews_count' => 62,
                'image' => 'assets/images/hero_bat.jpg',
                'short_desc' => 'Selected unbleached English Willow with massive 41mm power edges and holographic laser decals.',
                'description' => 'Hand-pressed and sculpted for explosive power hitters. The FIR Verve delivers exceptional rebound coefficient with a mid-to-low sweet spot engineered for white ball and red ball dominance. Includes premium carbon grip sleeve.',
                'specs' => [
                    'Blade Quality' => 'Grade 1+ Hand-Selected English Willow',
                    'Edge Profile' => '41mm Monster Power Contour',
                    'Weight' => '2lb 8.5oz (1145g)',
                    'Grains' => '9 to 12 Pristine Straight Grains',
                    'Handle' => '12-Piece Cane with Dual Carbon Rods'
                ],
                'variants' => ['SH 2lb 7oz (Light Pick-up)', 'SH 2lb 8.5oz (Balanced Master)', 'SH 2lb 10oz (Monster Power)'],
                'is_featured' => 1,
                'is_trending' => 1,
                'stock' => 12
            ],
            [
                'id' => 3,
                'category_id' => 3,
                'category_name' => 'Smart Sports Gadgets',
                'name' => 'FIR Apex Telemetry GPS Sensor Pod',
                'slug' => 'fir-apex-telemetry-gps-pod',
                'tag' => 'SMART TECH',
                'price' => 189.50,
                'original_price' => 240.00,
                'rating' => 4.9,
                'reviews_count' => 115,
                'image' => 'assets/images/hero_gadget.jpg',
                'short_desc' => 'FIFA & ICC approved athletic tracker transmitting sprint velocity, G-force impact and heart telemetry.',
                'description' => 'Unlock elite athletic intelligence. The FIR Apex Pod clips directly into your training vest, recording 1000Hz biometric telemetry: max sprint speed, high metabolic load distance, acceleration bursts, and player fatigue indicators.',
                'specs' => [
                    'Sensors' => '9-Axis IMU + Multi-GNSS 10Hz GPS',
                    'Battery Life' => '16 Hours Continuous Match Play',
                    'Connectivity' => 'Bluetooth 5.3 BLE + Real-time Cloud Sync',
                    'Water Resistance' => 'IP68 Military Submersible',
                    'Weight' => 'Only 28 Grams (Ultra Featherweight)'
                ],
                'variants' => ['Solo Pod + Chest Vest (M)', 'Solo Pod + Chest Vest (L)', 'Pro Pod + Dual Vests & Dock'],
                'is_featured' => 1,
                'is_trending' => 1,
                'stock' => 35
            ],
            [
                'id' => 4,
                'category_id' => 1,
                'category_name' => 'Football Boots',
                'name' => 'FIR Phantom Agility Cyber Stride Boot',
                'slug' => 'fir-phantom-agility-cyber-boot',
                'tag' => 'SPEED EDITION',
                'price' => 229.00,
                'original_price' => 269.00,
                'rating' => 4.8,
                'reviews_count' => 54,
                'image' => 'assets/images/hero_boot.jpg',
                'short_desc' => 'Asymmetric micro-lace system with sticky cyber grip zones for pinpoint passes and curling strikes.',
                'description' => 'Engineered for tactical maestros. Features targeted high-friction silicone ribs along the instep for vicious curve and swerve on dead-ball deliveries.',
                'specs' => [
                    'Weight' => '184 Grams',
                    'Upper' => 'CyberRib Textured Microfiber',
                    'Outsole' => 'Aerodynamic Agility Frame',
                    'Studs' => 'Hexagonal Multi-Directional Studs',
                    'Insole' => 'Shock-Absorbing Poron Cushioning'
                ],
                'variants' => ['US 8.5 / EU 42', 'US 9.5 / EU 43', 'US 10.5 / EU 44.5', 'US 11.5 / EU 45.5'],
                'is_featured' => 1,
                'is_trending' => 0,
                'stock' => 18
            ],
            [
                'id' => 5,
                'category_id' => 2,
                'category_name' => 'Cricket Bats & Gear',
                'name' => 'FIR Titanium Stance Smart Bat Sensor Cap',
                'slug' => 'fir-stance-smart-bat-sensor',
                'tag' => 'AI IOT GADGET',
                'price' => 139.99,
                'original_price' => 179.99,
                'rating' => 4.8,
                'reviews_count' => 77,
                'image' => 'assets/images/hero_gadget.jpg',
                'short_desc' => 'Mounts directly to bat handle; calculates bat speed at impact, backlift angle & 3D wagon wheels.',
                'description' => 'Transforms any traditional cricket bat into an AI-powered smart bat. View your batting stroke trajectory in 3D, check bat speed at point of impact, and analyze timing against fast bowlers.',
                'specs' => [
                    'Mounting' => 'Universal Silicone Grip Lock Cap',
                    'Sensors' => 'High-Speed Dual Gyros + Accelerometer',
                    'Battery' => 'Up to 10 Hours Active Net Practice',
                    'App Compatibility' => 'iOS & Android FIR Coach Pro',
                    'Weight' => '14 Grams (Zero Impact on Balance)'
                ],
                'variants' => ['Single Sensor Cap', 'Duo Pack (Match & Practice)'],
                'is_featured' => 1,
                'is_trending' => 1,
                'stock' => 40
            ],
            [
                'id' => 6,
                'category_id' => 3,
                'category_name' => 'Smart Sports Gadgets',
                'name' => 'FIR Cyber Match Pulse Official Smart Ball',
                'slug' => 'fir-cyber-pulse-match-ball',
                'tag' => 'SMART BALL',
                'price' => 159.00,
                'original_price' => 199.00,
                'rating' => 4.9,
                'reviews_count' => 39,
                'image' => 'assets/images/hero_boot.jpg',
                'short_desc' => 'Embedded wireless sensor measures shot speed (km/h), spin revolutions (RPM), and flight trajectory.',
                'description' => 'The world’s most advanced training match ball. Built to official FIFA Quality Pro specifications with an embedded shock-isolated sensor cluster that syncs kick power and flight curves instantly to your smartphone.',
                'specs' => [
                    'Certification' => 'FIFA Quality Pro Match Standard',
                    'Data Tracked' => 'Shot Speed, Ball Spin (RPM), Curvature, Flight Arc',
                    'Charging' => 'Qi Inductive Wireless Base (Included)',
                    'Battery' => '24 Hours Standby / 6 Hours Match Play',
                    'Construction' => '32-Panel Thermal Bonded Textured PU'
                ],
                'variants' => ['Size 5 (Official Match)', 'Size 4 (Youth Academy)'],
                'is_featured' => 1,
                'is_trending' => 0,
                'stock' => 22
            ],
            [
                'id' => 7,
                'category_id' => 4,
                'category_name' => 'Performance Gear',
                'name' => 'FIR AeroCompress Pro Athletic Recovery Tights',
                'slug' => 'fir-aerocompress-pro-recovery-tights',
                'tag' => 'RECOVERY TECH',
                'price' => 89.00,
                'original_price' => 115.00,
                'rating' => 4.9,
                'reviews_count' => 58,
                'image' => 'assets/images/hero_boot.jpg',
                'short_desc' => 'Medical-grade 20-30 mmHg zoned gradient compression accelerating muscle lactic clearance.',
                'description' => 'Engineered for high-intensity athletes. Accelerates blood flow and oxygenation, reduces post-match delayed onset muscle soreness (DOMS), and provides 360-degree joint stabilization.',
                'specs' => [
                    'Compression' => 'Graduated 20-30 mmHg',
                    'Fabric' => '4-Way CyberStretch Spandex',
                    'Ventilation' => 'Laser-Perforated Behind Knees',
                    'Recovery Time' => 'Reduces DOMS by 38%'
                ],
                'variants' => ['Small (S)', 'Medium (M)', 'Large (L)', 'XL Pro'],
                'is_featured' => 1,
                'is_trending' => 1,
                'stock' => 30
            ],
            [
                'id' => 8,
                'category_id' => 4,
                'category_name' => 'Performance Gear',
                'name' => 'FIR HyperAgility Pro Speed Ladder & Cone Matrix',
                'slug' => 'fir-hyperagility-pro-speed-ladder-matrix',
                'tag' => 'SPEED DRILLS',
                'price' => 65.00,
                'original_price' => 85.00,
                'rating' => 4.8,
                'reviews_count' => 42,
                'image' => 'assets/images/hero_gadget.jpg',
                'short_desc' => '6-meter tangle-free rigid rung agility ladder with 10 high-visibility flexible training markers.',
                'description' => 'The fundamental training kit for pro footwork, quickness, and multi-directional acceleration. Built with shatter-resistant nylon rungs and all-weather turf anchors.',
                'specs' => [
                    'Length' => '6.0 Meters (12 Rungs)',
                    'Markers' => '10 Flexible EVA Cones',
                    'Carry Case' => 'Waterproof Cordura Duffle',
                    'Surface' => 'Grass / Turf / Hardwood'
                ],
                'variants' => ['Pro 6m Kit', 'Elite 10m Dual Kit'],
                'is_featured' => 1,
                'is_trending' => 0,
                'stock' => 45
            ],
            [
                'id' => 9,
                'category_id' => 2,
                'category_name' => 'Cricket Bats & Gear',
                'name' => 'FIR CarbonFlex Pro Test Match Batting Gloves',
                'slug' => 'fir-carbonflex-pro-batting-gloves',
                'tag' => 'PRO PROTECTION',
                'price' => 95.00,
                'original_price' => 120.00,
                'rating' => 4.9,
                'reviews_count' => 67,
                'image' => 'assets/images/hero_bat.jpg',
                'short_desc' => 'Shark-tooth high-density foam with carbon fiber shield inserts across lead fingers.',
                'description' => 'Engineered to withstand 150 km/h bouncers. Features premium Pittards sheepskin leather palm for silky grip and airflow ventilation gussets.',
                'specs' => [
                    'Palm' => 'Premium Pittards Sheepskin',
                    'Protection' => 'Multi-Section High-Density Foam + Carbon Fiber',
                    'Thumb' => '2-Piece Curved Armor',
                    'Wrist' => '50mm Double-Sided Towel Band'
                ],
                'variants' => ["Men's Right Hand", "Men's Left Hand", "Youth Right Hand"],
                'is_featured' => 1,
                'is_trending' => 1,
                'stock' => 28
            ]
        ];

        if ($category_id) {
            $mock = array_filter($mock, function($item) use ($category_id) {
                return $item['category_id'] == $category_id;
            });
        }

        return array_values($mock);
    }

    public static function getOrderByNumber($orderNumber) {
        $db = self::getConnection();
        if ($db) {
            try {
                $stmt = $db->prepare("SELECT * FROM orders WHERE order_number = ? LIMIT 1");
                $stmt->execute([$orderNumber]);
                $order = $stmt->fetch();
                if ($order) {
                    $itemStmt = $db->prepare("SELECT oi.*, p.name, p.image FROM order_items oi JOIN products p ON oi.product_id = p.id WHERE oi.order_id = ?");
                    $itemStmt->execute([$order['id']]);
                    $order['items'] = $itemStmt->fetchAll();
                    return $order;
                }
            } catch (Exception $e) {}
        }
        return null;
    }

    public static function getProductReviews($productId) {
        $db = self::getConnection();
        if ($db) {
            try {
                $stmt = $db->prepare("SELECT * FROM reviews WHERE product_id = ? ORDER BY id DESC");
                $stmt->execute([$productId]);
                return $stmt->fetchAll();
            } catch (Exception $e) {}
        }

        // Mock reviews fallback
        $mockReviews = [
            1 => [
                ['author_name' => 'Julian Vance', 'author_role' => 'Pro Midfielder • European League', 'rating' => 5, 'comment' => 'The Aurora Fusion boots are hands down the lightest cleats I have worn in 8 professional seasons. The carbon soleplate recoil on sprint breaks is unbelievable.']
            ],
            2 => [
                ['author_name' => 'Kavish Fernando', 'author_role' => 'Top-Order Batsman • Premier Club', 'rating' => 5, 'comment' => 'Picked up the FIR Verve Kookaburra Edition English Willow. The 41mm profile has zero ping vibration, and the balance pick-up feels 2 ounces lighter than it weighs.']
            ],
            3 => [
                ['author_name' => 'Dr. Elena Rostova', 'author_role' => 'Head of Sports Science', 'rating' => 5, 'comment' => 'Our academy uses the FIR Apex GPS Pods for our entire squad. Tracking high-speed running and sprint loads in real-time has cut hamstring injuries by over 40%.']
            ]
        ];
        return $mockReviews[$productId] ?? [];
    }

    public static function addReview($productId, $name, $role, $rating, $comment) {
        $db = self::getConnection();
        if ($db) {
            try {
                $stmt = $db->prepare("INSERT INTO reviews (product_id, author_name, author_role, rating, comment) VALUES (?, ?, ?, ?, ?)");
                return $stmt->execute([$productId, $name, $role, $rating, $comment]);
            } catch (Exception $e) {}
        }
        return true;
    }
}
