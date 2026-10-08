<?php
require_once __DIR__ . '/../config/db.php';
$isDbConnected = Database::isConnected();
$categories = Database::getCategories();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FIR SPORT SHOP | Elite Football Boots, Cricket Bats, Smart Gadgets & Performance Gear</title>
    <meta name="description" content="Shop pro-grade football boots, mastercrafted English willow cricket bats, smart biometric sports gadgets, and performance compression gear at FIR Sport Shop. Engineered for champions.">
    <meta name="theme-color" content="#08090f">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome 6 Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Main Style -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="fir-dark-theme theme-volt">

    <!-- Ambient Glowing Background Aura Orbs (Interactive Parallax) -->
    <div class="ambient-glow orb-1" id="ambientOrb1"></div>
    <div class="ambient-glow orb-2" id="ambientOrb2"></div>
    <div class="ambient-glow orb-3" id="ambientOrb3"></div>

    <!-- Announcement Bar -->
    <div class="announcement-bar">
        <div class="announcement-container">
            <div class="announcement-item">
                <span class="badge-pulse"></span>
                <span>⚡ <strong>MATCH DAY SPECIAL:</strong> USE CODE <strong class="code-highlight">CHAMPION20</strong> FOR 20% OFF ALL GEAR</span>
            </div>
            <div class="announcement-right">
                <span class="perk-pill"><i class="fa-solid fa-plane-departure"></i> Free Express Shipping Over $150</span>
                <span class="perk-pill"><i class="fa-solid fa-shield-check"></i> 100% Pro-Grade Guarantee</span>
                <div class="db-status-pill" id="dbStatusPill" title="Database Status: <?= $isDbConnected ? 'MySQL Connected' : 'Auto Mock Fallback Active' ?>">
                    <span class="status-dot <?= $isDbConnected ? 'connected' : 'mock-active' ?>"></span>
                    <span><?= $isDbConnected ? 'MySQL Live' : 'Demo Mode' ?></span>
                    <?php if (!$isDbConnected): ?>
                    <button class="btn-setup-db" onclick="window.setupFIRDatabase()" title="Click to initialize MySQL database">Sync DB</button>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

    <!-- Glassmorphic Header Navigation -->
    <header class="main-header" id="mainHeader">
        <div class="header-container">
            <!-- Brand Logo -->
            <a href="index.php" class="brand-logo">
                <div class="logo-mark">
                    <span class="logo-lightning"><i class="fa-solid fa-bolt-lightning"></i></span>
                </div>
                <div class="logo-text">
                    <span class="brand-name">FIR<span class="brand-accent">SPORTS</span></span>
                    <span class="brand-tagline">PRO PERFORMANCE GEAR</span>
                </div>
            </a>

            <!-- Navigation Links -->
            <nav class="nav-menu" id="navMenu">
                <a href="#hero" class="nav-link active"><i class="fa-solid fa-house"></i> Home</a>
                <a href="#categories" class="nav-link"><i class="fa-solid fa-layer-group"></i> Gear Hub</a>
                <a href="#featured" class="nav-link"><i class="fa-solid fa-fire"></i> Pro Locker</a>
                <a href="#gadgets-tech" class="nav-link"><i class="fa-solid fa-microchip"></i> Telemetry Lab</a>
                <a href="#compare" class="nav-link"><i class="fa-solid fa-sliders"></i> Pro Matrix</a>
            </nav>

            <!-- Search & Actions -->
            <div class="header-actions">
                <!-- Search Trigger Input -->
                <div class="search-box-wrapper">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" id="liveSearchInput" placeholder="Search boots, bats, sensors..." autocomplete="off">
                    <button class="clear-search-btn" id="clearSearchBtn" style="display:none;"><i class="fa-solid fa-xmark"></i></button>
                    <!-- Live Search Dropdown -->
                    <div class="search-results-dropdown" id="searchResultsDropdown"></div>
                </div>

                <!-- Theme Accent Picker -->
                <div class="theme-picker-wrapper">
                    <button class="action-btn theme-picker-btn" id="themePickerBtn" title="Switch Theme Accent" aria-label="Theme Color">
                        <i class="fa-solid fa-palette"></i>
                    </button>
                    <div class="theme-dropdown" id="themeDropdown">
                        <button class="theme-option active" data-theme="theme-volt" title="Volt Lime">
                            <span class="theme-dot dot-volt"></span> Volt
                        </button>
                        <button class="theme-option" data-theme="theme-cyan" title="Cyber Cyan">
                            <span class="theme-dot dot-cyan"></span> Cyan
                        </button>
                        <button class="theme-option" data-theme="theme-orange" title="Hyper Crimson">
                            <span class="theme-dot dot-orange"></span> Orange
                        </button>
                    </div>
                </div>

                <!-- Track Order Button -->
                <button class="action-btn track-order-btn" id="trackOrderTriggerBtn" title="Track Live Order" onclick="window.openTrackOrderModal()">
                    <i class="fa-solid fa-truck-fast"></i>
                    <span class="track-label">Track</span>
                </button>

                <!-- Wishlist Icon -->
                <button class="action-btn wishlist-btn" id="wishlistTriggerBtn" title="Your Wishlist">
                    <i class="fa-regular fa-heart"></i>
                    <span class="badge-count" id="wishlistCount">0</span>
                </button>

                <!-- Cart Drawer Trigger Button -->
                <button class="action-btn cart-trigger-btn" id="cartTriggerBtn" title="Shopping Cart">
                    <div class="cart-icon-wrap">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="badge-count" id="cartCount">0</span>
                    </div>
                    <div class="cart-label-wrap">
                        <span class="cart-label">Bag Total</span>
                        <span class="cart-val" id="cartHeaderTotal">$0.00</span>
                    </div>
                </button>

                <!-- Mobile Menu Hamburger -->
                <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Mobile Menu">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
