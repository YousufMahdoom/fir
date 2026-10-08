<?php
/**
 * FIR SPORT SHOP - Automated Database Setup & Migration Script
 * Run this in browser (http://localhost/FIR/setup_db.php) or CLI to automatically create
 * the database, migrate schema, and seed the tables.
 */
header('Content-Type: application/json');

$host = 'localhost';
$user = 'root';
$pass = '';
$dbName = 'fir_sports';

try {
    // 1. Connect without db name to create database if not exists
    $pdo = new PDO("mysql:host=$host;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbName` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$dbName`");

    // 2. Add columns if missing from earlier versions
    try {
        $cols = $pdo->query("SHOW COLUMNS FROM `products` LIKE 'variants_json'")->fetchAll();
        if (empty($cols)) {
            $pdo->exec("ALTER TABLE `products` ADD COLUMN `variants_json` JSON AFTER `specs_json`");
        }
    } catch (Exception $e) {}

    try {
        $orderCols = $pdo->query("SHOW COLUMNS FROM `order_items` LIKE 'variant'")->fetchAll();
        if (empty($orderCols)) {
            $pdo->exec("ALTER TABLE `order_items` ADD COLUMN `variant` VARCHAR(100) DEFAULT NULL AFTER `product_id`");
        }
    } catch (Exception $e) {}

    // 3. Read and execute SQL file
    $sqlFile = __DIR__ . '/database/fir_sports.sql';
    if (!file_exists($sqlFile)) {
        echo json_encode(['success' => false, 'message' => 'SQL file not found at: ' . $sqlFile]);
        exit;
    }

    $sql = file_get_contents($sqlFile);
    $pdo->exec($sql);

    echo json_encode([
        'success' => true,
        'message' => 'FIR Sport Shop database & tables initialized and seeded successfully!',
        'database' => $dbName
    ]);
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'MySQL Connection Error: ' . $e->getMessage() . '. Please ensure MySQL is started in XAMPP Control Panel.'
    ]);
}
