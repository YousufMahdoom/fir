-- FIR SPORT SHOP Database Schema
-- Version 2.0 - High-Impact Pro Release

CREATE DATABASE IF NOT EXISTS `fir_sports` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `fir_sports`;

-- Categories Table
CREATE TABLE IF NOT EXISTS `categories` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL UNIQUE,
    `description` TEXT,
    `badge` VARCHAR(50) DEFAULT 'Popular',
    `icon` VARCHAR(50) DEFAULT 'trophy',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Products Table
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `category_id` INT NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `slug` VARCHAR(150) NOT NULL UNIQUE,
    `tag` VARCHAR(50) DEFAULT 'PRO EDITION',
    `price` DECIMAL(10,2) NOT NULL,
    `original_price` DECIMAL(10,2) DEFAULT NULL,
    `rating` DECIMAL(2,1) DEFAULT 4.9,
    `reviews_count` INT DEFAULT 48,
    `image` VARCHAR(255) NOT NULL,
    `short_desc` VARCHAR(255),
    `description` TEXT,
    `specs_json` JSON,
    `variants_json` JSON,
    `is_featured` TINYINT(1) DEFAULT 1,
    `is_trending` TINYINT(1) DEFAULT 0,
    `stock` INT DEFAULT 25,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Orders Table
CREATE TABLE IF NOT EXISTS `orders` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_number` VARCHAR(50) NOT NULL UNIQUE,
    `customer_name` VARCHAR(100) NOT NULL,
    `customer_email` VARCHAR(120) NOT NULL,
    `customer_phone` VARCHAR(30),
    `shipping_address` TEXT NOT NULL,
    `total_amount` DECIMAL(10,2) NOT NULL,
    `status` ENUM('pending', 'processing', 'in_transit', 'delivered', 'cancelled') DEFAULT 'processing',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Order Items Table
CREATE TABLE IF NOT EXISTS `order_items` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_id` INT NOT NULL,
    `product_id` INT NOT NULL,
    `variant` VARCHAR(100) DEFAULT NULL,
    `quantity` INT NOT NULL DEFAULT 1,
    `price` DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Reviews Table
CREATE TABLE IF NOT EXISTS `reviews` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `product_id` INT NOT NULL,
    `author_name` VARCHAR(100) NOT NULL,
    `author_role` VARCHAR(100) DEFAULT 'Verified Athlete',
    `rating` INT NOT NULL DEFAULT 5,
    `comment` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Categories
INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `badge`, `icon`) VALUES
(1, 'Football Boots', 'football-boots', 'Pro FG/AG studs, ultra-light carbon weave and precision strike control.', 'Trending', 'futbol'),
(2, 'Cricket Bats & Gear', 'cricket-bats', 'Handcrafted Grade 1+ English Willow bats, test match pads and gloves.', 'Best Seller', 'baseball-bat-ball'),
(3, 'Smart Sports Gadgets', 'sports-gadgets', 'GPS telemetry vests, velocity radars, smart balls and athletic biometrics.', 'Next-Gen', 'microchip'),
(4, 'Performance Gear', 'performance-gear', 'Graduated compression wear, agility ladders, and match recovery gear.', 'Essential', 'dumbbell')
ON DUPLICATE KEY UPDATE `name`=VALUES(`name`), `slug`=VALUES(`slug`), `description`=VALUES(`description`);

-- Seed Products
INSERT INTO `products` (`id`, `category_id`, `name`, `slug`, `tag`, `price`, `original_price`, `rating`, `reviews_count`, `image`, `short_desc`, `description`, `specs_json`, `variants_json`, `is_featured`, `is_trending`, `stock`) VALUES
(1, 1, 'FIR Aurora Fusion Pro Elite Boot', 'fir-aurora-fusion-pro-boot', 'NEW RELEASE', 279.99, 329.99, 5.0, 84, 'assets/images/hero_boot.jpg', 'Engineered with carbon fiber chassis, dynamic volt stud propulsion & micro-textured grip strike zone.', 'The FIR Aurora Fusion Pro is designed for high-velocity playmakers. Featuring dual-density carbon fiber speed frames, aerodynamic knit collar, and biometric traction studs that bite into turf for instantaneous directional acceleration.', '{"Weight": "178g", "Upper": "Knit Matrix + NanoGrip", "Chassis": "Full-Length 3K Carbon", "Studs": "Hybrid FG/AG Volt Blade", "Fit": "Adaptive Dynamic Collar"}', '["US 8 / EU 41", "US 9 / EU 42.5", "US 10 / EU 44", "US 11 / EU 45", "US 12 / EU 46"]', 1, 1, 15),

(2, 2, 'FIR Verve Kookaburra Edition Willow Bat', 'fir-verve-kookaburra-edition-bat', 'PRO GRADE 1+', 449.00, 520.00, 4.9, 62, 'assets/images/hero_bat.jpg', 'Mastercrafted selected English Willow with massive 40mm power edges and holographic laser chrome.', 'Hand-pressed by elite master bat makers, the FIR Verve delivers explosive rebound energy. Featuring a high-swell sweet spot, feather-light pick up balance, and counter-balanced carbon flex handle for maximum boundary clearing power.', '{"Willow": "Grade 1+ English Willow", "Grains": "9-12 Straight Grains", "Edge Profile": "41mm Power Contour", "Weight": "2lb 8oz (1134g)", "Handle": "Semi-Oval Carbon Cane Matrix"}', '["SH 2lb 7oz (Light Pick-up)", "SH 2lb 8.5oz (Balanced Master)", "SH 2lb 10oz (Monster Power)"]', 1, 1, 12),

(3, 3, 'FIR Apex Telemetry GPS Sensor Pod', 'fir-apex-telemetry-gps-pod', 'SMART TECH', 189.50, 240.00, 4.9, 115, 'assets/images/hero_gadget.jpg', 'Real-time FIFA/ICC approved athletic tracker measuring sprint velocity, G-force impact and heart telemetry.', 'Upgrade your training with pro-level telemetry. The FIR Apex Pod clips seamlessly into training vests, transmitting live 1000Hz motion data, top speed sprints, heat maps, and muscular fatigue indexes straight to iOS/Android.', '{"Sensors": "9-Axis IMU + 10Hz GNSS GPS", "Battery": "16 Hours Active Match", "Connectivity": "Bluetooth 5.3 + Live Telemetry", "Waterproof": "IP68 Submersible", "Weight": "28 Grams"}', '["Solo Pod + Chest Vest (M)", "Solo Pod + Chest Vest (L)", "Pro Pod + Dual Vests & Dock"]', 1, 1, 35),

(4, 1, 'FIR Phantom Strike Cyber Boot', 'fir-phantom-strike-cyber-boot', 'BEST SELLER', 219.00, 259.00, 4.8, 59, 'assets/images/hero_boot.jpg', 'Precision micro-embossed strike zones for curling free kicks and explosive 360 rotational agility.', 'Dominate set pieces and tight spaces. The Phantom Strike features sticky ACC grip dots and an asymmetric lacing system for clean strike surface contact on the ball.', '{"Weight": "192g", "Upper": "GripControl Pro Synthetic", "Chassis": "TPU Agility Rib", "Studs": "Rotational Chevron Studs", "Fit": "Low-cut Anatomical Lock"}', '["US 8.5 / EU 42", "US 9.5 / EU 43", "US 10.5 / EU 44.5", "US 11.5 / EU 45.5"]', 1, 0, 20),

(5, 2, 'FIR Titanium Stance Smart Bat Sensor', 'fir-stance-smart-bat-sensor', 'INNOVATION', 129.99, 169.99, 4.8, 43, 'assets/images/hero_gadget.jpg', 'Silicone bat-top sensor capturing bat speed, swing angles, impact timing, and 3D wagon wheel analysis.', 'Mounts to the top of any cricket bat grip without altering weight or balance. Delivers instant 3D shot recreation, bat speed radar, and power metrics to your coach in real-time.', '{"Battery Life": "8 Hours Match Play", "Memory": "Stores up to 500 shots offline", "Mount": "Universal Grip Cap Lock", "Weight": "14 grams", "Sync": "Bluetooth Low Energy 5.2"}', '["Single Sensor Cap", "Duo Pack (Match & Practice)"]', 1, 1, 50),

(6, 3, 'FIR Smart Cyber Velocity Match Ball', 'fir-smart-velocity-match-ball', 'HOT GADGET', 145.00, 185.00, 4.9, 38, 'assets/images/hero_boot.jpg', 'Embedded microchip records ball kick speed, spin rate, curve trajectory and shot arc in real-time.', 'FIFA Quality Pro certified soccer ball embedded with a central shock-absorbed telemetry node. Wireless inductive charging in the included carry cradle.', '{"Certification": "FIFA Quality Pro", "Charging": "Qi Wireless Cradle", "Data": "Kicking MPH, RPM Spin, Flight Curve", "Casing": "Thermal Bonded Textured PU", "Battery": "20 Hours Continuous Play"}', '["Size 5 (Official Match)", "Size 4 (Youth Academy)"]', 1, 0, 18),

(7, 4, 'FIR AeroCompress Pro Recovery Tights', 'fir-aerocompress-pro-recovery-tights', 'RECOVERY TECH', 89.00, 115.00, 4.9, 58, 'assets/images/hero_boot.jpg', 'Medical-grade 20-30 mmHg zoned gradient compression accelerating muscle lactic clearance.', 'Engineered for high-intensity athletes. Accelerates blood flow and oxygenation, reduces post-match delayed onset muscle soreness (DOMS), and provides 360-degree joint stabilization.', '{"Compression": "Graduated 20-30 mmHg", "Fabric": "4-Way CyberStretch Spandex", "Ventilation": "Laser-Perforated Behind Knees", "Recovery Time": "Reduces DOMS by 38%"}', '["Small (S)", "Medium (M)", "Large (L)", "XL Pro"]', 1, 1, 30),

(8, 4, 'FIR HyperAgility Pro Speed Ladder & Cone Matrix', 'fir-hyperagility-pro-speed-ladder-matrix', 'SPEED DRILLS', 65.00, 85.00, 4.8, 42, 'assets/images/hero_gadget.jpg', '6-meter tangle-free rigid rung agility ladder with 10 high-visibility flexible training markers.', 'The fundamental training kit for pro footwork, quickness, and multi-directional acceleration. Built with shatter-resistant nylon rungs and all-weather turf anchors.', '{"Length": "6.0 Meters (12 Rungs)", "Markers": "10 Flexible EVA Cones", "Carry Case": "Waterproof Cordura Duffle", "Surface": "Grass / Turf / Hardwood"}', '["Pro 6m Kit", "Elite 10m Dual Kit"]', 1, 0, 45),

(9, 2, 'FIR CarbonFlex Pro Test Match Batting Gloves', 'fir-carbonflex-pro-batting-gloves', 'PRO PROTECTION', 95.00, 120.00, 4.9, 67, 'assets/images/hero_bat.jpg', 'Shark-tooth high-density foam with carbon fiber shield inserts across lead fingers.', 'Engineered to withstand 150 km/h bouncers. Features premium Pittards sheepskin leather palm for silky grip and airflow ventilation gussets.', '{"Palm": "Premium Pittards Sheepskin", "Protection": "Multi-Section High-Density Foam + Carbon Fiber", "Thumb": "2-Piece Curved Armor", "Wrist": "50mm Double-Sided Towel Band"}', '["Men\'s Right Hand", "Men\'s Left Hand", "Youth Right Hand"]', 1, 1, 28)
ON DUPLICATE KEY UPDATE `name`=VALUES(`name`), `price`=VALUES(`price`), `specs_json`=VALUES(`specs_json`), `variants_json`=VALUES(`variants_json`);

-- Seed Reviews
INSERT INTO `reviews` (`product_id`, `author_name`, `author_role`, `rating`, `comment`) VALUES
(1, 'Julian Vance', 'Pro Midfielder • European League', 5, 'The Aurora Fusion boots are hands down the lightest cleats I have worn in 8 professional seasons. The carbon soleplate recoil on sprint breaks is unbelievable.'),
(2, 'Kavish Fernando', 'Top-Order Batsman • Premier Club', 5, 'Picked up the FIR Verve Kookaburra Edition English Willow. The 41mm profile has zero ping vibration, and the balance pick-up feels 2 ounces lighter than it weighs.'),
(3, 'Dr. Elena Rostova', 'Head of Sports Science • Pro Athletic Institute', 5, 'Our academy uses the FIR Apex GPS Pods for our entire squad. Tracking high-speed running and sprint loads in real-time has cut hamstring injuries by over 40%.'),
(7, 'Marcus Sterling', 'Sprint Coach • National Athletics', 5, 'The 20-30 mmHg compression in these recovery tights cleared my squad’s lactic stiffness after back-to-back 90-minute fixtures. Must-have gear.')
ON DUPLICATE KEY UPDATE `comment`=VALUES(`comment`);
