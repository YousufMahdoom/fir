/**
 * FIR SPORT SHOP - Main JavaScript
 * 100% Static & Git Deployable Architecture
 * 
 * Featuring:
 * 1. Self-contained static product & reviews database (Zero backend dependency)
 * 2. 3D Mouse Parallax & Dynamic Ambient Glow Orbs
 * 3. Hero Interactive Gear Switcher (Boots, Bats, Gadgets)
 * 4. 3D Card Hover Tilts
 * 5. Persistent Wishlist Drawer with State Synchronization
 * 6. Multi-Variant Engine (Shoe Sizes, Bat Weights, Kit Bundles)
 * 7. Real-Time Catalog Filter Toolbar (Price chips, Category tabs, Dynamic Sorting)
 * 8. Live Satellite Order Tracking Modal (Instant local lookup & live simulation)
 * 9. Quick View Modal with Variant Selector & Athlete Reviews System
 * 10. Interactive Telemetry Drill Simulator (Sprint, Batting, Curveball, Recovery)
 * 11. Cyberpunk Neon Accent Switcher (Volt Lime, Cyber Cyan, Hyper Crimson)
 * 12. Shopping Cart Drawer with Progress Shipping Meter
 * 13. Express Checkout with Local Storage Persistence
 */

(function () {
    'use strict';

    // ==================== 1. STATIC EMBEDDED DATASET ====================
    const STATIC_CATEGORIES = [
        { id: 1, name: "Football Boots", slug: "football-boots", badge: "Trending #1", icon: "futbol", count: 24 },
        { id: 2, name: "Cricket Bats & Gear", slug: "cricket-bats", badge: "Grade 1+ Willow", icon: "baseball-bat-ball", count: 18 },
        { id: 3, name: "Smart Sports Gadgets", slug: "sports-gadgets", badge: "Next-Gen AI", icon: "microchip", count: 32 },
        { id: 4, name: "Performance Gear", slug: "performance-gear", badge: "High Output", icon: "dumbbell", count: 45 }
    ];

    const STATIC_PRODUCTS = [
        {
            id: 1,
            category_id: 1,
            category_name: "Football Boots",
            name: "FIR Aurora Fusion Pro Elite Boot",
            slug: "fir-aurora-fusion-pro-boot",
            tag: "NEW RELEASE",
            price: 279.99,
            original_price: 329.99,
            rating: 5.0,
            reviews_count: 84,
            image: "assets/images/hero_boot.jpg",
            short_desc: "Dual-density carbon fiber speed frame, dynamic volt stud propulsion & ACC tactile strike zone.",
            description: "The FIR Aurora Fusion Pro is engineered for relentless wingers and playmakers. Featuring an ultra-lightweight carbon fiber chassis, dynamic ankle collar, and biometric chevron studs that bite into the pitch for instantaneous directional shifts.",
            specs: {
                "Weight": "178 Grams",
                "Upper": "Dynamic Knit + ACC Tactile Matrix",
                "Outsole": "Full-Length 3K Carbon Spine",
                "Ground": "Firm Ground / Modern 4G Artificial Turf",
                "Grip Tech": "Nano-Textured Strike Pad"
            },
            variants: ["US 8 / EU 41", "US 9 / EU 42.5", "US 10 / EU 44", "US 11 / EU 45", "US 12 / EU 46"],
            is_featured: 1,
            is_trending: 1,
            stock: 15
        },
        {
            id: 2,
            category_id: 2,
            category_name: "Cricket Bats & Gear",
            name: "FIR Verve Kookaburra Edition English Willow",
            slug: "fir-verve-kookaburra-edition-bat",
            tag: "PRO GRADE 1+",
            price: 449.00,
            original_price: 520.00,
            rating: 4.9,
            reviews_count: 62,
            image: "assets/images/hero_bat.jpg",
            short_desc: "Selected unbleached English Willow with massive 41mm power edges and holographic laser decals.",
            description: "Hand-pressed and sculpted for explosive power hitters. The FIR Verve delivers exceptional rebound coefficient with a mid-to-low sweet spot engineered for white ball and red ball dominance. Includes premium carbon grip sleeve.",
            specs: {
                "Blade Quality": "Grade 1+ Hand-Selected English Willow",
                "Edge Profile": "41mm Monster Power Contour",
                "Weight": "2lb 8.5oz (1145g)",
                "Grains": "9 to 12 Pristine Straight Grains",
                "Handle": "12-Piece Cane with Dual Carbon Rods"
            },
            variants: ["SH 2lb 7oz (Light Pick-up)", "SH 2lb 8.5oz (Balanced Master)", "SH 2lb 10oz (Monster Power)"],
            is_featured: 1,
            is_trending: 1,
            stock: 12
        },
        {
            id: 3,
            category_id: 3,
            category_name: "Smart Sports Gadgets",
            name: "FIR Apex Telemetry GPS Sensor Pod",
            slug: "fir-apex-telemetry-gps-pod",
            tag: "SMART TECH",
            price: 189.50,
            original_price: 240.00,
            rating: 4.9,
            reviews_count: 115,
            image: "assets/images/hero_gadget.jpg",
            short_desc: "FIFA & ICC approved athletic tracker transmitting sprint velocity, G-force impact and heart telemetry.",
            description: "Unlock elite athletic intelligence. The FIR Apex Pod clips directly into your training vest, recording 1000Hz biometric telemetry: max sprint speed, high metabolic load distance, acceleration bursts, and player fatigue indicators.",
            specs: {
                "Sensors": "9-Axis IMU + Multi-GNSS 10Hz GPS",
                "Battery Life": "16 Hours Continuous Match Play",
                "Connectivity": "Bluetooth 5.3 BLE + Real-time Cloud Sync",
                "Water Resistance": "IP68 Military Submersible",
                "Weight": "Only 28 Grams (Ultra Featherweight)"
            },
            variants: ["Solo Pod + Chest Vest (M)", "Solo Pod + Chest Vest (L)", "Pro Pod + Dual Vests & Dock"],
            is_featured: 1,
            is_trending: 1,
            stock: 35
        },
        {
            id: 4,
            category_id: 1,
            category_name: "Football Boots",
            name: "FIR Phantom Agility Cyber Stride Boot",
            slug: "fir-phantom-agility-cyber-boot",
            tag: "SPEED EDITION",
            price: 229.00,
            original_price: 269.00,
            rating: 4.8,
            reviews_count: 54,
            image: "assets/images/hero_boot.jpg",
            short_desc: "Asymmetric micro-lace system with sticky cyber grip zones for pinpoint passes and curling strikes.",
            description: "Engineered for tactical maestros. Features targeted high-friction silicone ribs along the instep for vicious curve and swerve on dead-ball deliveries.",
            specs: {
                "Weight": "184 Grams",
                "Upper": "CyberRib Textured Microfiber",
                "Outsole": "Aerodynamic Agility Frame",
                "Studs": "Hexagonal Multi-Directional Studs",
                "Insole": "Shock-Absorbing Poron Cushioning"
            },
            variants: ["US 8.5 / EU 42", "US 9.5 / EU 43", "US 10.5 / EU 44.5", "US 11.5 / EU 45.5"],
            is_featured: 1,
            is_trending: 0,
            stock: 18
        },
        {
            id: 5,
            category_id: 2,
            category_name: "Cricket Bats & Gear",
            name: "FIR Titanium Stance Smart Bat Sensor Cap",
            slug: "fir-stance-smart-bat-sensor",
            tag: "AI IOT GADGET",
            price: 139.99,
            original_price: 179.99,
            rating: 4.8,
            reviews_count: 77,
            image: "assets/images/hero_gadget.jpg",
            short_desc: "Mounts directly to bat handle; calculates bat speed at impact, backlift angle & 3D wagon wheels.",
            description: "Transforms any traditional cricket bat into an AI-powered smart bat. View your batting stroke trajectory in 3D, check bat speed at point of impact, and analyze timing against fast bowlers.",
            specs: {
                "Mounting": "Universal Silicone Grip Lock Cap",
                "Sensors": "High-Speed Dual Gyros + Accelerometer",
                "Battery": "Up to 10 Hours Active Net Practice",
                "App Compatibility": "iOS & Android FIR Coach Pro",
                "Weight": "14 Grams (Zero Impact on Balance)"
            },
            variants: ["Single Sensor Cap", "Duo Pack (Match & Practice)"],
            is_featured: 1,
            is_trending: 1,
            stock: 40
        },
        {
            id: 6,
            category_id: 3,
            category_name: "Smart Sports Gadgets",
            name: "FIR Cyber Match Pulse Official Smart Ball",
            slug: "fir-cyber-pulse-match-ball",
            tag: "SMART BALL",
            price: 159.00,
            original_price: 199.00,
            rating: 4.9,
            reviews_count: 39,
            image: "assets/images/hero_boot.jpg",
            short_desc: "Embedded wireless sensor measures shot speed (km/h), spin revolutions (RPM), and flight trajectory.",
            description: "The world’s most advanced training match ball. Built to official FIFA Quality Pro specifications with an embedded shock-isolated sensor cluster that syncs kick power and flight curves instantly to your smartphone.",
            specs: {
                "Certification": "FIFA Quality Pro Match Standard",
                "Data Tracked": "Shot Speed, Ball Spin (RPM), Curvature, Flight Arc",
                "Charging": "Qi Inductive Wireless Base (Included)",
                "Battery": "24 Hours Standby / 6 Hours Match Play",
                "Construction": "32-Panel Thermal Bonded Textured PU"
            },
            variants: ["Size 5 (Official Match)", "Size 4 (Youth Academy)"],
            is_featured: 1,
            is_trending: 0,
            stock: 22
        },
        {
            id: 7,
            category_id: 4,
            category_name: "Performance Gear",
            name: "FIR AeroCompress Pro Athletic Recovery Tights",
            slug: "fir-aerocompress-pro-recovery-tights",
            tag: "RECOVERY TECH",
            price: 89.00,
            original_price: 115.00,
            rating: 4.9,
            reviews_count: 58,
            image: "assets/images/hero_boot.jpg",
            short_desc: "Medical-grade 20-30 mmHg zoned gradient compression accelerating muscle lactic clearance.",
            description: "Engineered for high-intensity athletes. Accelerates blood flow and oxygenation, reduces post-match delayed onset muscle soreness (DOMS), and provides 360-degree joint stabilization.",
            specs: {
                "Compression": "Graduated 20-30 mmHg",
                "Fabric": "4-Way CyberStretch Spandex",
                "Ventilation": "Laser-Perforated Behind Knees",
                "Recovery Time": "Reduces DOMS by 38%"
            },
            variants: ["Small (S)", "Medium (M)", "Large (L)", "XL Pro"],
            is_featured: 1,
            is_trending: 1,
            stock: 30
        },
        {
            id: 8,
            category_id: 4,
            category_name: "Performance Gear",
            name: "FIR HyperAgility Pro Speed Ladder & Cone Matrix",
            slug: "fir-hyperagility-pro-speed-ladder-matrix",
            tag: "SPEED DRILLS",
            price: 65.00,
            original_price: 85.00,
            rating: 4.8,
            reviews_count: 42,
            image: "assets/images/hero_gadget.jpg",
            short_desc: "6-meter tangle-free rigid rung agility ladder with 10 high-visibility flexible training markers.",
            description: "The fundamental training kit for pro footwork, quickness, and multi-directional acceleration. Built with shatter-resistant nylon rungs and all-weather turf anchors.",
            specs: {
                "Length": "6.0 Meters (12 Rungs)",
                "Markers": "10 Flexible EVA Cones",
                "Carry Case": "Waterproof Cordura Duffle",
                "Surface": "Grass / Turf / Hardwood"
            },
            variants: ["Pro 6m Kit", "Elite 10m Dual Kit"],
            is_featured: 1,
            is_trending: 0,
            stock: 45
        },
        {
            id: 9,
            category_id: 2,
            category_name: "Cricket Bats & Gear",
            name: "FIR CarbonFlex Pro Test Match Batting Gloves",
            slug: "fir-carbonflex-pro-batting-gloves",
            tag: "PRO PROTECTION",
            price: 95.00,
            original_price: 120.00,
            rating: 4.9,
            reviews_count: 67,
            image: "assets/images/hero_bat.jpg",
            short_desc: "Shark-tooth high-density foam with carbon fiber shield inserts across lead fingers.",
            description: "Engineered to withstand 150 km/h bouncers. Features premium Pittards sheepskin leather palm for silky grip and airflow ventilation gussets.",
            specs: {
                "Palm": "Premium Pittards Sheepskin",
                "Protection": "Multi-Section High-Density Foam + Carbon Fiber",
                "Thumb": "2-Piece Curved Armor",
                "Wrist": "50mm Double-Sided Towel Band"
            },
            variants: ["Men's Right Hand", "Men's Left Hand", "Youth Right Hand"],
            is_featured: 1,
            is_trending: 1,
            stock: 28
        }
    ];

    const DEFAULT_REVIEWS = {
        1: [
            { author_name: "Julian Vance", author_role: "Pro Midfielder • European League", rating: 5, comment: "The Aurora Fusion boots are hands down the lightest cleats I have worn in 8 professional seasons. The carbon soleplate recoil on sprint breaks is unbelievable." },
            { author_name: "Mateo Silva", author_role: "Winger • Tier 1 Academy", rating: 5, comment: "Incredible touch and lockdown. Stud configuration delivers instant bite into 4G artificial pitches without ankle torque." }
        ],
        2: [
            { author_name: "Kavish Fernando", author_role: "Top-Order Batsman • Premier Club", rating: 5, comment: "Picked up the FIR Verve Kookaburra Edition English Willow. The 41mm profile has zero ping vibration, and the balance pick-up feels 2 ounces lighter than it weighs." },
            { author_name: "Alistair Cook-Evans", author_role: "County Cricket Opener", rating: 5, comment: "Pristine 11 straight grains on the face. Boundary clearing power off the toe is unmatched." }
        ],
        3: [
            { author_name: "Dr. Elena Rostova", author_role: "Head of Sports Science • Pro Athletic Institute", rating: 5, comment: "Our academy uses the FIR Apex GPS Pods for our entire squad. Tracking high-speed running and sprint loads in real-time has cut hamstring injuries by over 40%." }
        ],
        4: [
            { author_name: "Lucas Brand", author_role: "Playmaker • Division 2 Pro", rating: 5, comment: "The sticky micro-rib textured instep makes curling free kicks effortless. Superior lock and lightweight agility." }
        ],
        5: [
            { author_name: "Siddharth Malhotra", author_role: "High-Performance Batting Coach", rating: 5, comment: "The bat sensor syncs 3D bat swing angle within milliseconds. Essential telemetry tool for modern T20 power batting." }
        ],
        6: [
            { author_name: "Coach Andrea", author_role: "UEFA A License Coach", rating: 5, comment: "Embedded microchip delivers live kick velocity and RPM spin rates right to the tablet during dead-ball practice." }
        ],
        7: [
            { author_name: "Marcus Sterling", author_role: "Sprint Coach • National Athletics", rating: 5, comment: "The 20-30 mmHg compression cleared squad lactic stiffness after back-to-back 90-minute fixtures. Must-have recovery gear." }
        ],
        8: [
            { author_name: "Tariq Jones", author_role: "Speed & Conditioning Specialist", rating: 5, comment: "Heavy-duty shatterproof rungs that stay fixed on turf. The marker cones are flexible and stand up to cleat impact." }
        ],
        9: [
            { author_name: "Bennet Hughes", author_role: "First-Class Wicketkeeper/Batsman", rating: 5, comment: "Pittards leather palm gives extraordinary feel. Took multiple 145km/h hits directly to the gloves without finger sting." }
        ]
    };

    // Ensure global availability
    window.FIR_PRODUCTS = STATIC_PRODUCTS;
    window.FIR_CATEGORIES = STATIC_CATEGORIES;

    // ==================== 2. STATE VARIABLES ====================
    let cart = JSON.parse(localStorage.getItem('fir_cart') || '[]');
    let wishlist = JSON.parse(localStorage.getItem('fir_wishlist') || '[]');
    let userOrders = JSON.parse(localStorage.getItem('fir_user_orders') || '{}');
    let userReviews = JSON.parse(localStorage.getItem('fir_user_reviews') || '{}');
    let activeDiscount = 0; // percentage
    let currentHeroMode = 'boot';
    let activeDrill = 'sprint';
    let currentQuickViewProduct = null;
    let selectedQuickViewVariant = null;
    let currentOrderNumberForSuccess = null;

    // Filter & Sort State
    let catalogFilterState = {
        category: 'all',
        priceRange: 'all',
        sortBy: 'featured',
        searchQuery: ''
    };

    // Hero Gear Configurations
    const heroGearConfigs = {
        boot: {
            title: 'FIR Aurora Fusion Pro Elite',
            price: '$279.99',
            originalPrice: '$329.99',
            image: 'assets/images/hero_boot.jpg',
            label1: 'Sprint Velocity',
            val1: '35.4 KM/H',
            label2: 'Impact Acceleration',
            val2: '14.8 G-FORCE',
            ctaText: 'EXPLORE BOOTS COLLECTION',
            ctaLink: '#featured',
            primaryId: 1
        },
        bat: {
            title: 'FIR Verve Kookaburra Edition Willow',
            price: '$449.00',
            originalPrice: '$520.00',
            image: 'assets/images/hero_bat.jpg',
            label1: 'Sweetspot Ping',
            val1: '98.4% ENERGY',
            label2: 'Bat Swing Speed',
            val2: '138 KM/H',
            ctaText: 'EXPLORE CRICKET BATS',
            ctaLink: '#featured',
            primaryId: 2
        },
        gadget: {
            title: 'FIR Apex Telemetry GPS Pod',
            price: '$189.50',
            originalPrice: '$240.00',
            image: 'assets/images/hero_gadget.jpg',
            label1: 'GNSS Satellite Lock',
            val1: '10Hz MULTI-GPS',
            label2: 'Cardio Metabolic Load',
            val2: 'HIGH (89%)',
            ctaText: 'EXPLORE SMART GADGETS',
            ctaLink: '#gadgets-tech',
            primaryId: 3
        }
    };

    // Telemetry Drills Configurations
    const telemetryDrills = {
        sprint: {
            label: '<i class="fa-solid fa-satellite"></i> SPRINT ACCELERATION TELEMETRY',
            status: 'CONNECTED • 1000Hz',
            title1: 'TOP SPRINT SPEED', val1: 35.8, unit1: 'KM/H', fill1: '92%',
            title2: 'MAX IMPACT FORCE', val2: 15.6, unit2: 'G-FORCE', fill2: '78%',
            title3: 'STRIDE FREQUENCY', val3: 4.8, unit3: 'STEPS/SEC', fill3: '86%',
            title4: 'METABOLIC POWER', val4: '58.4', unit4: 'W/KG', fill4: '89%'
        },
        bat: {
            label: '<i class="fa-solid fa-baseball-bat-ball"></i> BOUNDARY STRIKE IMPACT TELEMETRY',
            status: 'IMPACT RADAR ACTIVE',
            title1: 'BAT IMPACT SPEED', val1: 144, unit1: 'KM/H', fill1: '96%',
            title2: 'SWEET SPOT REBOUND', val2: '99.2', unit2: '% COEFFICIENT', fill2: '99%',
            title3: 'BACKLIFT ANGLE', val3: '42.5', unit3: 'DEGREES', fill3: '70%',
            title4: 'EXIT VELOCITY', val4: '162', unit4: 'KM/H', fill4: '94%'
        },
        ball: {
            label: '<i class="fa-solid fa-futbol"></i> BALL TRAJECTORY & SPIN MATRIX',
            status: 'QI SENSOR SYNCED',
            title1: 'KICK VELOCITY', val1: 114, unit1: 'KM/H', fill1: '85%',
            title2: 'REVOLUTIONS PER MIN', val2: '2,840', unit2: 'RPM', fill2: '94%',
            title3: 'AERODYNAMIC CURVE', val3: '3.4', unit3: 'METERS', fill3: '80%',
            title4: 'FLIGHT DURATION', val4: '1.24', unit4: 'SECONDS', fill4: '65%'
        },
        recovery: {
            label: '<i class="fa-solid fa-heart-pulse"></i> HIGH-LOAD STAMINA & COMPRESSION FLUX',
            status: 'LACTIC CLEARANCE ACTIVE',
            title1: 'HEART RATE PEAK', val1: 182, unit1: 'BPM', fill1: '88%',
            title2: 'MUSCLE OXYGENATION', val2: '84.5', unit2: '% SmO2', fill2: '85%',
            title3: 'DOMS RECOVERY ACCEL', val3: '+38', unit3: '% FASTER', fill3: '90%',
            title4: 'STABILIZATION LOAD', val4: '28.5', unit4: 'MMHG', fill4: '92%'
        }
    };

    // ==================== 3. DOM READY INITIALIZATION ====================
    document.addEventListener('DOMContentLoaded', () => {
        initMouseParallax();
        init3DCardTilt();
        initHeaderScroll();
        initLiveSearch();
        initCountdown();
        initSocialProofTicker();
        initLiveTelemetrySimulator();
        initThemeSwitcher();
        initWishlistDrawer();
        initTrackOrderModal();
        populateSavedCheckoutData();
        renderCartUI();
        updateWishlistCount();
        syncWishlistButtons();
    });

    // ==================== 4. 3D MOUSE PARALLAX ENGINE ====================
    function initMouseParallax() {
        const heroSection = document.getElementById('hero');
        const tiltWrap = document.getElementById('heroTiltWrap');
        const hud1 = document.getElementById('hudMetric1');
        const hud2 = document.getElementById('hudMetric2');
        const hud3 = document.getElementById('hudMetric3');
        const orb1 = document.getElementById('ambientOrb1');
        const orb2 = document.getElementById('ambientOrb2');

        if (!heroSection || !tiltWrap) return;

        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;

        heroSection.addEventListener('mouseleave', () => {
            targetX = 0;
            targetY = 0;
        });

        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            targetX = (e.clientX - rect.left) / rect.width - 0.5;
            targetY = (e.clientY - rect.top) / rect.height - 0.5;
        });

        function animateParallax() {
            mouseX += (targetX - mouseX) * 0.08;
            mouseY += (targetY - mouseY) * 0.08;

            const rotateX = -mouseY * 26;
            const rotateY = mouseX * 28;
            tiltWrap.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            if (hud1) hud1.style.transform = `translate3d(${mouseX * 35}px, ${mouseY * 35}px, 60px)`;
            if (hud2) hud2.style.transform = `translate3d(${mouseX * -40}px, ${mouseY * -40}px, 80px)`;
            if (hud3) hud3.style.transform = `translate3d(${mouseX * 25}px, ${mouseY * 20}px, 45px)`;

            if (orb1) orb1.style.transform = `translate(${mouseX * 60}px, ${mouseY * 60}px)`;
            if (orb2) orb2.style.transform = `translate(${-mouseX * 50}px, ${-mouseY * 50}px)`;

            requestAnimationFrame(animateParallax);
        }
        animateParallax();
    }

    // ==================== 5. HERO GEAR SWITCHER ====================
    window.switchHeroGear = function (mode) {
        if (!heroGearConfigs[mode]) return;
        currentHeroMode = mode;

        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        const cfg = heroGearConfigs[mode];
        const heroImg = document.getElementById('heroMainImg');
        const hudTitle = document.getElementById('hudGearTitle');
        const hudPrice = document.getElementById('hudPrice');
        const hudLabel1 = document.getElementById('hudLabel1');
        const hudVal1 = document.getElementById('hudValue1');
        const hudLabel2 = document.getElementById('hudLabel2');
        const hudVal2 = document.getElementById('hudValue2');
        const ctaBtn = document.getElementById('heroPrimaryCta');

        if (heroImg) {
            heroImg.style.opacity = '0';
            heroImg.style.transform = 'scale(0.92) rotate(-5deg)';
            setTimeout(() => {
                heroImg.src = cfg.image;
                heroImg.style.opacity = '1';
                heroImg.style.transform = 'scale(1) rotate(0deg)';
            }, 250);
        }

        if (hudTitle) hudTitle.textContent = cfg.title;
        if (hudPrice) hudPrice.textContent = cfg.price;
        if (hudLabel1) hudLabel1.textContent = cfg.label1;
        if (hudVal1) hudVal1.textContent = cfg.val1;
        if (hudLabel2) hudLabel2.textContent = cfg.label2;
        if (hudVal2) hudVal2.textContent = cfg.val2;

        if (ctaBtn) {
            ctaBtn.querySelector('span').textContent = cfg.ctaText;
            ctaBtn.setAttribute('href', cfg.ctaLink);
        }
    };

    window.addFeaturedHeroItem = function () {
        const cfg = heroGearConfigs[currentHeroMode];
        window.openQuickView(cfg.primaryId);
    };

    // ==================== 6. 3D CARD TILT ON PRODUCT CARDS ====================
    function init3DCardTilt() {
        const cards = document.querySelectorAll('.product-card .card-inner');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = -((y - centerY) / centerY) * 10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }

    // ==================== 7. HEADER SCROLL & MOBILE DRAWER ====================
    function initHeaderScroll() {
        const header = document.getElementById('mainHeader');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 40) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });
        }

        const toggleBtn = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = navMenu.classList.toggle('mobile-open');
                toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
                document.body.style.overflow = isOpen ? 'hidden' : '';
            });

            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('mobile-open');
                    toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                    document.body.style.overflow = '';
                });
            });

            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                    if (navMenu.classList.contains('mobile-open')) {
                        navMenu.classList.remove('mobile-open');
                        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                        document.body.style.overflow = '';
                    }
                }
            });
        }
    }

    // ==================== 8. LIVE SEARCH AUTOCOMPLETE ====================
    function initLiveSearch() {
        const searchInput = document.getElementById('liveSearchInput');
        const dropdown = document.getElementById('searchResultsDropdown');
        const clearBtn = document.getElementById('clearSearchBtn');

        if (!searchInput || !dropdown) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            catalogFilterState.searchQuery = query;

            if (query.length > 0 && clearBtn) clearBtn.style.display = 'block';
            else if (clearBtn) clearBtn.style.display = 'none';

            if (query.length < 2) {
                dropdown.classList.remove('active');
                dropdown.innerHTML = '';
                applyCatalogFilters();
                return;
            }

            const matches = STATIC_PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(query) || 
                (p.short_desc && p.short_desc.toLowerCase().includes(query)) ||
                (p.category_name && p.category_name.toLowerCase().includes(query))
            );

            if (matches.length === 0) {
                dropdown.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:0.85rem;">No sports gear found matching "${query}"</div>`;
            } else {
                dropdown.innerHTML = matches.map(p => `
                    <div class="search-item" onclick="window.openQuickView(${p.id})">
                        <img src="${p.image}" class="search-thumb" alt="${p.name}">
                        <div class="search-meta">
                            <h5>${p.name}</h5>
                            <span>$${parseFloat(p.price).toFixed(2)}</span>
                        </div>
                    </div>
                `).join('');
            }
            dropdown.classList.add('active');
            applyCatalogFilters();
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                dropdown.classList.remove('active');
                clearBtn.style.display = 'none';
                catalogFilterState.searchQuery = '';
                const mobInput = document.getElementById('mobileSearchInput');
                if (mobInput) mobInput.value = '';
                applyCatalogFilters();
            });
        }

        const mobileSearchInput = document.getElementById('mobileSearchInput');
        if (mobileSearchInput) {
            mobileSearchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim().toLowerCase();
                catalogFilterState.searchQuery = query;
                if (searchInput) searchInput.value = query;
                applyCatalogFilters();
            });

            mobileSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const navMenu = document.getElementById('navMenu');
                    if (navMenu) navMenu.classList.remove('mobile-open');
                    const feat = document.getElementById('featured');
                    if (feat) feat.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    // ==================== 9. COUNTDOWN & SOCIAL PROOF ====================
    function initCountdown() {
        let totalSeconds = 9 * 3600 + 42 * 60 + 18;
        const cdHours = document.getElementById('cdHours');
        const cdMins = document.getElementById('cdMins');
        const cdSecs = document.getElementById('cdSecs');

        setInterval(() => {
            if (totalSeconds > 0) totalSeconds--;
            else totalSeconds = 24 * 3600;

            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;

            if (cdHours) cdHours.textContent = String(h).padStart(2, '0');
            if (cdMins) cdMins.textContent = String(m).padStart(2, '0');
            if (cdSecs) cdSecs.textContent = String(s).padStart(2, '0');
        }, 1000);
    }

    function initSocialProofTicker() {
        const toast = document.getElementById('socialProofToast');
        const msg = document.getElementById('proofMsg');
        if (!toast || !msg) return;

        const mockPurchases = [
            '🔥 <strong>Marcus R.</strong> from Manchester just purchased <strong>FIR Aurora Fusion Boots</strong>',
            '🏏 <strong>Liam K.</strong> from Melbourne just ordered <strong>FIR Verve Willow Bat (2lb 8.5oz)</strong>',
            '📡 <strong>Coach Diego</strong> from Madrid bought <strong>2x FIR Apex Telemetry Pods</strong>',
            '🏃 <strong>Sarah L.</strong> from Munich just ordered <strong>FIR AeroCompress Pro Tights (M)</strong>',
            '⚡ <strong>Siddharth M.</strong> from Mumbai just purchased <strong>Stance Smart Bat Sensor</strong>',
            '⚽ <strong>Kylian T.</strong> from Paris just ordered <strong>FIR Cyber Velocity Match Ball</strong>'
        ];

        let index = 0;
        setInterval(() => {
            msg.innerHTML = mockPurchases[index % mockPurchases.length];
            toast.classList.add('active');
            index++;

            setTimeout(() => {
                toast.classList.remove('active');
            }, 6000);
        }, 16000);
    }

    // ==================== 10. INTERACTIVE TELEMETRY DRILLS ====================
    window.setTelemetryDrill = function (drillType, btn) {
        if (!telemetryDrills[drillType]) return;
        activeDrill = drillType;

        document.querySelectorAll('.drill-pill').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        const cfg = telemetryDrills[drillType];
        const headerLabel = document.getElementById('drillHeaderLabel');
        const liveStatus = document.getElementById('liveTagStatus');
        const t1 = document.getElementById('metricTitle1');
        const v1 = document.getElementById('liveSpeed');
        const u1 = document.getElementById('metricUnit1');
        const f1 = document.getElementById('barFill1');

        const t2 = document.getElementById('metricTitle2');
        const v2 = document.getElementById('liveImpact');
        const u2 = document.getElementById('metricUnit2');
        const f2 = document.getElementById('barFill2');

        const t3 = document.getElementById('metricTitle3');
        const v3 = document.getElementById('liveBatSpeed');
        const u3 = document.getElementById('metricUnit3');
        const f3 = document.getElementById('barFill3');

        const t4 = document.getElementById('metricTitle4');
        const v4 = document.getElementById('liveSpin');
        const u4 = document.getElementById('metricUnit4');
        const f4 = document.getElementById('barFill4');

        if (headerLabel) headerLabel.innerHTML = cfg.label;
        if (liveStatus) liveStatus.textContent = cfg.status;

        if (t1) t1.textContent = cfg.title1;
        if (v1) v1.textContent = cfg.val1;
        if (u1) u1.textContent = cfg.unit1;
        if (f1) f1.style.width = cfg.fill1;

        if (t2) t2.textContent = cfg.title2;
        if (v2) v2.textContent = cfg.val2;
        if (u2) u2.textContent = cfg.unit2;
        if (f2) f2.style.width = cfg.fill2;

        if (t3) t3.textContent = cfg.title3;
        if (v3) v3.textContent = cfg.val3;
        if (u3) u3.textContent = cfg.unit3;
        if (f3) f3.style.width = cfg.fill3;

        if (t4) t4.textContent = cfg.title4;
        if (v4) v4.textContent = cfg.val4;
        if (u4) u4.textContent = cfg.unit4;
        if (f4) f4.style.width = cfg.fill4;

        showToast(`Telemetry drill calibrated: ${cfg.title1}`);
    };

    function initLiveTelemetrySimulator() {
        setInterval(() => {
            const v1 = document.getElementById('liveSpeed');
            const v2 = document.getElementById('liveImpact');
            if (activeDrill === 'sprint' && v1) {
                const s = (34.5 + Math.random() * 2.2).toFixed(1);
                v1.textContent = s;
            }
            if (activeDrill === 'sprint' && v2) {
                const imp = (14.6 + Math.random() * 2.0).toFixed(1);
                v2.textContent = imp;
            }
        }, 3200);
    }

    // ==================== 11. ADVANCED CATALOG FILTER & SORT ====================
    window.setFilter = function (catId, btn) {
        catalogFilterState.category = String(catId);
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        if (btn) btn.classList.add('active');
        applyCatalogFilters();
    };

    window.filterCategory = function (catId) {
        const featuredSec = document.getElementById('featured');
        if (featuredSec) featuredSec.scrollIntoView({ behavior: 'smooth' });

        const targetBtn = document.querySelector(`.filter-tab[data-filter="${catId}"]`);
        if (targetBtn) {
            window.setFilter(catId, targetBtn);
        } else {
            window.setFilter('all', document.querySelector('.filter-tab[data-filter="all"]'));
        }
    };

    window.setPriceFilter = function (range, btn) {
        catalogFilterState.priceRange = range;
        document.querySelectorAll('.price-chip').forEach(c => c.classList.remove('active'));
        if (btn) btn.classList.add('active');
        applyCatalogFilters();
    };

    window.handleCatalogSort = function (sortVal) {
        catalogFilterState.sortBy = sortVal;
        applyCatalogFilters();
    };

    window.resetCatalogFilters = function () {
        catalogFilterState = {
            category: 'all',
            priceRange: 'all',
            sortBy: 'featured',
            searchQuery: ''
        };

        const allTab = document.querySelector('.filter-tab[data-filter="all"]');
        if (allTab) {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            allTab.classList.add('active');
        }

        const allChip = document.querySelector('.price-chip[data-price="all"]');
        if (allChip) {
            document.querySelectorAll('.price-chip').forEach(c => c.classList.remove('active'));
            allChip.classList.add('active');
        }

        const sortSelect = document.getElementById('catalogSortSelect');
        if (sortSelect) sortSelect.value = 'featured';

        const searchInput = document.getElementById('liveSearchInput');
        if (searchInput) searchInput.value = '';

        applyCatalogFilters();
        showToast('Catalog filters reset');
    };

    function applyCatalogFilters() {
        const grid = document.getElementById('productsGrid');
        if (!grid) return;

        const cards = Array.from(grid.querySelectorAll('.product-card'));
        const query = catalogFilterState.searchQuery.toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
            const cardCat = card.dataset.category;
            const price = parseFloat(card.dataset.price || '0');
            const name = (card.querySelector('.product-name')?.textContent || '').toLowerCase();
            const desc = (card.querySelector('.product-short-desc')?.textContent || '').toLowerCase();

            // 1. Category match
            const catMatch = (catalogFilterState.category === 'all' || cardCat === catalogFilterState.category);

            // 2. Price match
            let priceMatch = true;
            if (catalogFilterState.priceRange === 'under100') priceMatch = (price < 100);
            else if (catalogFilterState.priceRange === '100-250') priceMatch = (price >= 100 && price <= 250);
            else if (catalogFilterState.priceRange === 'over250') priceMatch = (price > 250);

            // 3. Search query match
            const searchMatch = !query || name.includes(query) || desc.includes(query);

            if (catMatch && priceMatch && searchMatch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Sorting visible cards
        const sortedCards = cards.filter(c => !c.classList.contains('hidden'));
        if (catalogFilterState.sortBy === 'price-asc') {
            sortedCards.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        } else if (catalogFilterState.sortBy === 'price-desc') {
            sortedCards.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        } else if (catalogFilterState.sortBy === 'rating-desc') {
            sortedCards.sort((a, b) => parseFloat(b.dataset.rating || '0') - parseFloat(a.dataset.rating || '0'));
        } else {
            sortedCards.sort((a, b) => parseInt(a.dataset.productId) - parseInt(b.dataset.productId));
        }

        sortedCards.forEach(c => grid.appendChild(c));

        // Update toolbar indicators
        const countText = document.getElementById('catalogCountText');
        if (countText) {
            countText.innerHTML = `<i class="fa-solid fa-bolt text-volt"></i> Showing <strong>${visibleCount}</strong> match-ready gear`;
        }

        const resetBtn = document.getElementById('resetCatalogFiltersBtn');
        const isFiltered = (catalogFilterState.category !== 'all' || catalogFilterState.priceRange !== 'all' || catalogFilterState.sortBy !== 'featured' || catalogFilterState.searchQuery !== '');
        if (resetBtn) resetBtn.style.display = isFiltered ? 'inline-flex' : 'none';
    }

    // ==================== 12. WISHLIST ENGINE ====================
    window.toggleWishlist = function (productId, btn) {
        productId = parseInt(productId);
        const idx = wishlist.indexOf(productId);
        if (idx > -1) {
            wishlist.splice(idx, 1);
            if (btn) btn.classList.remove('active');
            showToast('Removed from Wishlist');
        } else {
            wishlist.push(productId);
            if (btn) btn.classList.add('active');
            showToast('Added to Wishlist! ❤️');
        }
        localStorage.setItem('fir_wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        syncWishlistButtons();
        renderWishlistUI();
    };

    function updateWishlistCount() {
        const el = document.getElementById('wishlistCount');
        const drawerEl = document.getElementById('drawerWishlistCount');
        if (el) el.textContent = wishlist.length;
        if (drawerEl) drawerEl.textContent = `${wishlist.length} item${wishlist.length === 1 ? '' : 's'}`;
    }

    function syncWishlistButtons() {
        document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
            const card = btn.closest('.product-card');
            if (card) {
                const id = parseInt(card.dataset.productId);
                btn.classList.toggle('active', wishlist.includes(id));
            }
        });
    }

    function initWishlistDrawer() {
        const trigger = document.getElementById('wishlistTriggerBtn');
        const closeBtn = document.getElementById('closeWishlistBtn');
        const overlay = document.getElementById('wishlistOverlay');

        if (trigger) trigger.addEventListener('click', window.openWishlistDrawer);
        if (closeBtn) closeBtn.addEventListener('click', window.closeWishlistDrawer);
        if (overlay) overlay.addEventListener('click', window.closeWishlistDrawer);
    }

    window.openWishlistDrawer = function () {
        closeCartDrawer();
        renderWishlistUI();
        const drawer = document.getElementById('wishlistDrawer');
        const overlay = document.getElementById('wishlistOverlay');
        if (drawer && overlay) {
            drawer.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeWishlistDrawer = function () {
        const drawer = document.getElementById('wishlistDrawer');
        const overlay = document.getElementById('wishlistOverlay');
        if (drawer && overlay) {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    function renderWishlistUI() {
        const container = document.getElementById('wishlistItemsContainer');
        const footer = document.getElementById('wishlistDrawerFooter');
        if (!container) return;

        const wishlistedItems = STATIC_PRODUCTS.filter(p => wishlist.includes(parseInt(p.id)));

        if (wishlistedItems.length === 0) {
            container.innerHTML = `
                <div class="wishlist-empty-state">
                    <i class="fa-regular fa-heart"></i>
                    <h4>Your wishlist is empty</h4>
                    <p>Save pro boots, willow bats, and smart gadgets to view them anytime.</p>
                </div>
            `;
            if (footer) footer.style.display = 'none';
            return;
        }

        if (footer) footer.style.display = 'flex';

        container.innerHTML = wishlistedItems.map(p => `
            <div class="wishlist-item">
                <img src="${p.image}" alt="${p.name}" class="wishlist-item-thumb">
                <div class="wishlist-item-details">
                    <h4 class="wishlist-item-title">${p.name}</h4>
                    <span class="wishlist-item-price">$${parseFloat(p.price).toFixed(2)}</span>
                    <div class="wishlist-item-actions">
                        <button class="btn-move-to-cart" onclick="window.moveWishlistToCart(${p.id})">
                            <i class="fa-solid fa-cart-plus"></i> Move to Bag
                        </button>
                        <button class="btn-remove-wishlist" onclick="window.toggleWishlist(${p.id})" title="Remove">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    window.moveWishlistToCart = function (productId) {
        window.addToCart(productId, 1);
        window.toggleWishlist(productId);
    };

    window.moveAllWishlistToCart = function () {
        if (wishlist.length === 0) return;
        wishlist.forEach(id => {
            window.addToCart(id, 1);
        });
        wishlist = [];
        localStorage.setItem('fir_wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        syncWishlistButtons();
        window.closeWishlistDrawer();
        openCartDrawer();
        showToast('All saved items moved to gear bag!');
    };

    window.clearWishlist = function () {
        wishlist = [];
        localStorage.setItem('fir_wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        syncWishlistButtons();
        renderWishlistUI();
        showToast('Wishlist cleared');
    };

    // ==================== 13. SHOPPING CART ENGINE ====================
    window.addToCart = function (productId, qty = 1, btn = null, variant = null) {
        const product = STATIC_PRODUCTS.find(p => p.id == productId);
        if (!product) return;

        let chosenVariant = variant;
        if (!chosenVariant) {
            if (product.variants && Array.isArray(product.variants) && product.variants.length > 0) {
                chosenVariant = product.variants[0];
            } else {
                chosenVariant = 'Pro Standard';
            }
        }

        const itemKey = `${product.id}-${chosenVariant}`;
        const existing = cart.find(item => item.key === itemKey);

        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push({
                key: itemKey,
                id: product.id,
                name: product.name,
                price: parseFloat(product.price),
                image: product.image,
                quantity: qty,
                category_name: product.category_name,
                variant: chosenVariant
            });
        }

        saveCart();
        renderCartUI();
        showToast(`Added ${product.name} (${chosenVariant}) to gear bag! ⚡`);

        if (btn) {
            const originalHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
            btn.style.background = 'var(--color-volt)';
            btn.style.color = '#000';
            setTimeout(() => {
                btn.innerHTML = originalHtml;
                btn.style.background = '';
                btn.style.color = '';
            }, 1200);
        }

        openCartDrawer();
    };

    window.updateCartQty = function (itemKey, delta) {
        const item = cart.find(i => i.key === itemKey);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.key !== itemKey);
        }
        saveCart();
        renderCartUI();
    };

    window.removeCartItem = function (itemKey) {
        cart = cart.filter(i => i.key !== itemKey);
        saveCart();
        renderCartUI();
        showToast('Item removed from gear bag');
    };

    window.clearCart = function () {
        cart = [];
        activeDiscount = 0;
        saveCart();
        renderCartUI();
        showToast('Gear bag cleared');
    };

    function saveCart() {
        localStorage.setItem('fir_cart', JSON.stringify(cart));
    }

    function renderCartUI() {
        const container = document.getElementById('cartItemsContainer');
        const headerCount = document.getElementById('cartCount');
        const headerTotal = document.getElementById('cartHeaderTotal');
        const drawerCount = document.getElementById('drawerItemCount');
        const subtotalEl = document.getElementById('cartSubtotal');
        const discountRow = document.getElementById('cartDiscountRow');
        const discountValEl = document.getElementById('cartDiscountVal');
        const discountPercentText = document.getElementById('discountPercentText');
        const shippingEl = document.getElementById('cartShippingCost');
        const grandTotalEl = document.getElementById('cartGrandTotal');
        const meterFill = document.getElementById('shippingMeterFill');
        const meterText = document.getElementById('shippingMeterText');
        const checkoutBtn = document.getElementById('proceedCheckoutBtn');

        const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
        const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
        const discountAmount = subtotal * (activeDiscount / 100);
        const freeShippingThreshold = 150.00;
        const shippingCost = (subtotal - discountAmount >= freeShippingThreshold || subtotal === 0) ? 0.00 : 18.00;
        const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

        if (headerCount) headerCount.textContent = totalItems;
        if (drawerCount) drawerCount.textContent = `${totalItems} item${totalItems === 1 ? '' : 's'}`;
        if (headerTotal) headerTotal.textContent = `$${grandTotal.toFixed(2)}`;
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

        if (activeDiscount > 0 && discountRow && discountValEl) {
            discountRow.style.display = 'flex';
            discountValEl.textContent = `-$${discountAmount.toFixed(2)}`;
            if (discountPercentText) discountPercentText.textContent = `${activeDiscount}%`;
        } else if (discountRow) {
            discountRow.style.display = 'none';
        }

        if (shippingEl) {
            shippingEl.textContent = shippingCost === 0 ? 'FREE GLOBAL' : `$${shippingCost.toFixed(2)}`;
            shippingEl.style.color = shippingCost === 0 ? 'var(--color-volt)' : '';
        }

        if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;

        if (meterFill && meterText) {
            const remaining = Math.max(0, freeShippingThreshold - subtotal);
            const percent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
            meterFill.style.width = `${percent}%`;

            if (subtotal === 0) {
                meterText.innerHTML = '<i class="fa-solid fa-truck-fast"></i> Add <strong>$150.00</strong> more for <strong>FREE GLOBAL SHIPPING</strong>';
            } else if (remaining <= 0) {
                meterText.innerHTML = '<i class="fa-solid fa-circle-check text-volt"></i> You unlocked <strong>FREE GLOBAL SHIPPING!</strong>';
            } else {
                meterText.innerHTML = `<i class="fa-solid fa-truck-fast"></i> Add <strong>$${remaining.toFixed(2)}</strong> more for <strong>FREE GLOBAL SHIPPING</strong>`;
            }
        }

        if (checkoutBtn) {
            checkoutBtn.disabled = (cart.length === 0);
            checkoutBtn.style.opacity = (cart.length === 0) ? '0.5' : '1';
        }

        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = `
                <div class="cart-empty-state">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <h4>Your gear bag is empty</h4>
                    <p>Load up on pro football boots, willow bats, and telemetry gear.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-variant"><i class="fa-solid fa-tag"></i> ${item.variant || 'Standard'}</span>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <div class="cart-item-ctrls">
                        <div class="qty-ctrl">
                            <button class="qty-btn" onclick="window.updateCartQty('${item.key}', -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="window.updateCartQty('${item.key}', 1)">+</button>
                        </div>
                        <button class="btn-remove-item" onclick="window.removeCartItem('${item.key}')" title="Remove item">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function openCartDrawer() {
        closeWishlistDrawer();
        const drawer = document.getElementById('cartDrawer');
        const overlay = document.getElementById('cartOverlay');
        if (drawer && overlay) {
            drawer.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeCartDrawer() {
        const drawer = document.getElementById('cartDrawer');
        const overlay = document.getElementById('cartOverlay');
        if (drawer && overlay) {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    const cartTriggerBtn = document.getElementById('cartTriggerBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    // Client-side static coupon validator
    window.applyCouponCode = function () {
        const input = document.getElementById('couponInput');
        const msgEl = document.getElementById('couponMsg');
        if (!input || !msgEl) return;

        const code = input.value.trim().toUpperCase();
        if (!code) {
            msgEl.className = 'coupon-msg error';
            msgEl.textContent = 'Please enter a coupon code.';
            return;
        }

        if (code === 'CHAMPION20' || code === 'FIR20') {
            activeDiscount = 20;
            msgEl.className = 'coupon-msg success';
            msgEl.textContent = '⚡ 20% Match-Day Champion discount applied!';
            renderCartUI();
        } else if (code === 'ATHLETE15') {
            activeDiscount = 15;
            msgEl.className = 'coupon-msg success';
            msgEl.textContent = '⚡ 15% Athlete VIP discount applied!';
            renderCartUI();
        } else if (code === 'PRO10') {
            activeDiscount = 10;
            msgEl.className = 'coupon-msg success';
            msgEl.textContent = '⚡ 10% Pro discount applied!';
            renderCartUI();
        } else {
            msgEl.className = 'coupon-msg error';
            msgEl.textContent = 'Invalid promo code. Try CHAMPION20';
        }
    };

    // ==================== 14. QUICK VIEW MODAL & VARIANT SELECTOR ====================
    window.openQuickView = function (productId) {
        const p = STATIC_PRODUCTS.find(item => item.id == productId);
        if (!p) return;

        currentQuickViewProduct = p;
        const variants = p.variants || ['Pro Standard Edition'];
        selectedQuickViewVariant = variants[0];

        const modal = document.getElementById('quickViewModal');
        const overlay = document.getElementById('quickViewOverlay');
        const content = document.getElementById('quickViewContent');
        if (!modal || !overlay || !content) return;

        // Render Specs
        let specsHtml = '';
        if (p.specs && typeof p.specs === 'object') {
            specsHtml = Object.entries(p.specs).map(([k, v]) => `
                <div class="qv-spec-line">
                    <span class="spec-label">${k}</span>
                    <span class="spec-value">${v}</span>
                </div>
            `).join('');
        }

        // Render Variants
        const variantsHtml = variants.map((v, i) => `
            <button class="variant-chip ${i === 0 ? 'active' : ''}" onclick="window.setQuickViewVariant('${v}', this)">
                ${v}
            </button>
        `).join('');

        content.innerHTML = `
            <div class="quick-view-grid">
                <div class="quick-view-media">
                    <img src="${p.image}" alt="${p.name}" class="qv-image">
                    <div class="qv-media-badge">
                        <i class="fa-solid fa-award text-volt"></i> 100% Match Grade Authentic
                    </div>
                </div>
                <div class="quick-view-info">
                    <div class="qv-meta-row">
                        <span class="qv-badge-tag">${p.tag || 'PRO PERFORMANCE'}</span>
                        <div class="rating-stars">
                            <i class="fa-solid fa-star"></i>
                            <span>${parseFloat(p.rating).toFixed(1)} (${p.reviews_count} Reviews)</span>
                        </div>
                    </div>
                    <h2 class="qv-title">${p.name}</h2>
                    <div class="qv-price-row">
                        <span class="qv-price">$${parseFloat(p.price).toFixed(2)}</span>
                        ${p.original_price ? `<span class="orig-price">$${parseFloat(p.original_price).toFixed(2)}</span>` : ''}
                    </div>

                    <p class="qv-desc">${p.description || p.short_desc}</p>

                    <!-- Variant Selection -->
                    <div class="qv-variants-wrapper">
                        <div class="variant-label-row">
                            <span class="variant-label"><i class="fa-solid fa-sliders text-volt"></i> Select Specification / Size:</span>
                            <span class="selected-variant-display" id="selectedVariantDisplay">${selectedQuickViewVariant}</span>
                        </div>
                        <div class="variant-chips-container" id="variantChipsContainer">
                            ${variantsHtml}
                        </div>
                    </div>

                    <!-- Tabs: Specs vs Athlete Reviews -->
                    <div class="qv-tabs-nav">
                        <button class="qv-tab-btn active" onclick="window.switchQuickViewTab('specs', this)">
                            <i class="fa-solid fa-list-check"></i> Technical Specs
                        </button>
                        <button class="qv-tab-btn" onclick="window.switchQuickViewTab('reviews', this)">
                            <i class="fa-solid fa-comments"></i> Athlete Reviews
                        </button>
                    </div>

                    <div class="qv-tab-content active" id="qvSpecsTab">
                        ${specsHtml ? `<div class="qv-specs-table">${specsHtml}</div>` : '<p>Standard match-ready specifications.</p>'}
                    </div>

                    <div class="qv-tab-content" id="qvReviewsTab">
                        <div class="reviews-list-container" id="qvReviewsList"></div>
                        <div class="add-review-box">
                            <h4>Leave a Pro Athlete Review</h4>
                            <form onsubmit="event.preventDefault(); window.submitProductReview(${p.id});" class="review-mini-form">
                                <div class="form-row">
                                    <input type="text" id="revAuthor" placeholder="Your Name" required>
                                    <input type="text" id="revRole" placeholder="Sport / Position" required value="Club Athlete">
                                </div>
                                <div class="review-rating-row">
                                    <label>Rating:</label>
                                    <select id="revRating">
                                        <option value="5">⭐⭐⭐⭐⭐ (5/5 Outstanding)</option>
                                        <option value="4">⭐⭐⭐⭐ (4/5 Very Good)</option>
                                        <option value="3">⭐⭐⭐ (3/5 Good)</option>
                                    </select>
                                </div>
                                <textarea id="revComment" rows="2" placeholder="Describe match performance, feel, or durability..." required></textarea>
                                <button type="submit" class="btn-primary btn-submit-review">Submit Review</button>
                            </form>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="qv-actions-row">
                        <button class="btn-primary glow-btn" onclick="window.addQuickViewToCart(this)">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span>ADD TO BAG</span>
                        </button>
                        <button class="btn-secondary" onclick="window.toggleWishlist(${p.id}, this)">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        loadQuickViewReviews(p.id);
    };

    window.setQuickViewVariant = function (variantName, btn) {
        selectedQuickViewVariant = variantName;
        document.querySelectorAll('.variant-chip').forEach(c => c.classList.remove('active'));
        if (btn) btn.classList.add('active');
        const display = document.getElementById('selectedVariantDisplay');
        if (display) display.textContent = variantName;
    };

    window.switchQuickViewTab = function (tabName, btn) {
        document.querySelectorAll('.qv-tab-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        const specsTab = document.getElementById('qvSpecsTab');
        const reviewsTab = document.getElementById('qvReviewsTab');

        if (tabName === 'specs') {
            if (specsTab) specsTab.classList.add('active');
            if (reviewsTab) reviewsTab.classList.remove('active');
        } else {
            if (specsTab) specsTab.classList.remove('active');
            if (reviewsTab) reviewsTab.classList.add('active');
        }
    };

    function loadQuickViewReviews(productId) {
        const listEl = document.getElementById('qvReviewsList');
        if (!listEl) return;

        const base = DEFAULT_REVIEWS[productId] || [];
        const userAdded = userReviews[productId] || [];
        const combined = [...userAdded, ...base];

        if (combined.length === 0) {
            listEl.innerHTML = '<p class="no-reviews">Be the first verified athlete to review this gear!</p>';
            return;
        }

        listEl.innerHTML = combined.map(r => `
            <div class="review-item">
                <div class="rev-header">
                    <strong>${r.author_name}</strong>
                    <span class="rev-role">${r.author_role}</span>
                    <span class="rev-stars">⭐ ${r.rating}/5</span>
                </div>
                <p class="rev-text">${r.comment}</p>
            </div>
        `).join('');
    }

    window.submitProductReview = function (productId) {
        const author = document.getElementById('revAuthor').value.trim();
        const role = document.getElementById('revRole').value.trim();
        const rating = parseInt(document.getElementById('revRating').value);
        const comment = document.getElementById('revComment').value.trim();

        if (!author || !comment) return;

        if (!userReviews[productId]) {
            userReviews[productId] = [];
        }

        userReviews[productId].unshift({
            author_name: author,
            author_role: role || 'Verified Athlete',
            rating: rating,
            comment: comment
        });

        localStorage.setItem('fir_user_reviews', JSON.stringify(userReviews));
        showToast('Verified review published! ⭐');
        document.getElementById('revComment').value = '';
        loadQuickViewReviews(productId);
    };

    window.addQuickViewToCart = function (btn) {
        if (!currentQuickViewProduct) return;
        window.addToCart(currentQuickViewProduct.id, 1, btn, selectedQuickViewVariant);
        window.closeQuickView();
    };

    window.closeQuickView = function () {
        const overlay = document.getElementById('quickViewOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    const closeQvBtn = document.getElementById('closeQuickViewBtn');
    const qvOverlay = document.getElementById('quickViewOverlay');
    if (closeQvBtn) closeQvBtn.addEventListener('click', window.closeQuickView);
    if (qvOverlay) qvOverlay.addEventListener('click', (e) => {
        if (e.target === qvOverlay) window.closeQuickView();
    });

    // ==================== 15. LIVE SATELLITE ORDER TRACKER ====================
    function initTrackOrderModal() {
        const closeBtn = document.getElementById('closeTrackOrderBtn');
        const overlay = document.getElementById('trackOrderOverlay');
        if (closeBtn) closeBtn.addEventListener('click', window.closeTrackOrderModal);
        if (overlay) overlay.addEventListener('click', (e) => {
            if (e.target === overlay) window.closeTrackOrderModal();
        });
    }

    window.openTrackOrderModal = function (prefillOrderNum = '') {
        const overlay = document.getElementById('trackOrderOverlay');
        const input = document.getElementById('trackOrderInput');
        if (overlay) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (input && prefillOrderNum) {
                input.value = prefillOrderNum;
                window.searchOrderTracking();
            }
        }
    };

    window.closeTrackOrderModal = function () {
        const overlay = document.getElementById('trackOrderOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    window.searchOrderTracking = function () {
        const input = document.getElementById('trackOrderInput');
        const panel = document.getElementById('trackResultPanel');
        const btn = document.getElementById('trackSearchSubmitBtn');
        if (!input || !panel) return;

        const orderNum = input.value.trim().toUpperCase();
        if (!orderNum) {
            showToast('Please enter an order number', 'error');
            return;
        }

        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Locating...';
            btn.disabled = true;
        }

        setTimeout(() => {
            if (btn) {
                btn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Locate';
                btn.disabled = false;
            }

            let ord = userOrders[orderNum];

            // Demo / simulated lookup fallback if not found in local orders
            if (!ord) {
                if (orderNum === 'FIR-SAMPLE' || orderNum.startsWith('FIR-')) {
                    ord = {
                        order_number: orderNum,
                        customer_name: 'Marcus Sterling (Pro Athlete)',
                        customer_email: 'marcus.s@athlete.com',
                        shipping_address: '7 Premier Training Way, Locker Complex 4, London, UK',
                        total_amount: 324.99,
                        status: 'in_transit',
                        items: [
                            { name: 'FIR Aurora Fusion Pro Elite Boot', variant: 'US 10 / EU 44', quantity: 1, price: 279.99 },
                            { name: 'FIR Titanium Stance Smart Bat Sensor Cap', variant: 'Single Sensor Cap', quantity: 1, price: 139.99 }
                        ]
                    };
                }
            }

            if (!ord) {
                panel.innerHTML = `
                    <div class="track-error-box">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <h4>Order "${orderNum}" not found</h4>
                        <p>Try searching <strong>FIR-SAMPLE</strong> or place a new checkout to track in real-time.</p>
                    </div>
                `;
                return;
            }

            const status = ord.status || 'processing';
            const timeline = [
                { step: 'Order Confirmed', desc: 'Gear payment verified & allocated from locker stock', completed: true, time: 'Today, 09:15 AM' },
                { step: 'Quality & Sensor Calibration', desc: 'Inspected for weight balance & telemetry sync', completed: true, time: 'Today, 11:30 AM' },
                { step: 'Courier Express Transit', desc: 'Dispatched with HyperSpeed Air Courier', completed: (status === 'in_transit' || status === 'delivered'), time: 'In Transit' },
                { step: 'Locker Delivery', desc: 'Estimated arrival at club / home destination', completed: (status === 'delivered'), time: 'Tomorrow by 2:00 PM' }
            ];

            const timelineHtml = timeline.map(step => `
                <div class="timeline-step ${step.completed ? 'completed' : 'pending'}">
                    <div class="step-marker">
                        <i class="fa-solid ${step.completed ? 'fa-circle-check' : 'fa-circle'}"></i>
                    </div>
                    <div class="step-info">
                        <h4>${step.step}</h4>
                        <p>${step.desc}</p>
                        <span class="step-timestamp">${step.time}</span>
                    </div>
                </div>
            `).join('');

            let itemsHtml = '';
            if (ord.items && Array.isArray(ord.items)) {
                itemsHtml = ord.items.map(it => `
                    <div class="tracked-item-row">
                        <span>${it.name || 'Pro Gear'} (${it.variant || 'Standard'}) x ${it.quantity}</span>
                        <strong>$${(parseFloat(it.price) * it.quantity).toFixed(2)}</strong>
                    </div>
                `).join('');
            }

            panel.innerHTML = `
                <div class="track-card">
                    <div class="track-card-header">
                        <div>
                            <span class="badge-tag">TRACKING CODE</span>
                            <h3>${ord.order_number}</h3>
                            <p class="track-cust"><i class="fa-solid fa-user"></i> Athlete: <strong>${ord.customer_name}</strong></p>
                        </div>
                        <div class="track-status-pill ${status}">
                            <span class="status-pulse"></span>
                            <span>${status.toUpperCase()}</span>
                        </div>
                    </div>

                    <div class="vertical-timeline">
                        ${timelineHtml}
                    </div>

                    <div class="track-details-block">
                        <div class="detail-line">
                            <span><i class="fa-solid fa-location-dot"></i> Destination:</span>
                            <strong>${ord.shipping_address}</strong>
                        </div>
                        <div class="detail-line">
                            <span><i class="fa-solid fa-receipt"></i> Total Paid:</span>
                            <strong class="text-volt">$${parseFloat(ord.total_amount).toFixed(2)}</strong>
                        </div>
                    </div>

                    ${itemsHtml ? `<div class="tracked-items-list"><h5>Package Gear Contents:</h5>${itemsHtml}</div>` : ''}
                </div>
            `;
        }, 300);
    };

    window.trackCurrentOrderFromSuccess = function () {
        window.closeSuccessModal();
        if (currentOrderNumberForSuccess) {
            window.openTrackOrderModal(currentOrderNumberForSuccess);
        } else {
            window.openTrackOrderModal();
        }
    };

    // ==================== 16. EXPRESS ATHLETE CHECKOUT ====================
    function populateSavedCheckoutData() {
        const saved = JSON.parse(localStorage.getItem('fir_athlete_profile') || '{}');
        if (saved.name && document.getElementById('custName')) document.getElementById('custName').value = saved.name;
        if (saved.email && document.getElementById('custEmail')) document.getElementById('custEmail').value = saved.email;
        if (saved.phone && document.getElementById('custPhone')) document.getElementById('custPhone').value = saved.phone;
        if (saved.address && document.getElementById('custAddress')) document.getElementById('custAddress').value = saved.address;
    }

    window.openCheckoutModal = function () {
        if (cart.length === 0) {
            showToast('Your gear bag is empty!', 'error');
            return;
        }

        closeCartDrawer();
        const overlay = document.getElementById('checkoutOverlay');
        const modal = document.getElementById('checkoutModal');
        const countEl = document.getElementById('modalSummaryCount');
        const subtotalEl = document.getElementById('modalSummarySubtotal');
        const totalEl = document.getElementById('modalSummaryTotal');

        const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
        const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
        const discountAmount = subtotal * (activeDiscount / 100);
        const shippingCost = (subtotal - discountAmount >= 150) ? 0.00 : 18.00;
        const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

        if (countEl) countEl.textContent = totalItems;
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;

        if (overlay && modal) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeCheckoutModal = function () {
        const overlay = document.getElementById('checkoutOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', window.closeCheckoutModal);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', (e) => {
        if (e.target === checkoutOverlay) window.closeCheckoutModal();
    });

    window.handleCheckoutSubmit = function () {
        const btn = document.getElementById('submitOrderBtn');
        const name = document.getElementById('custName').value.trim() || 'Pro Athlete';
        const email = document.getElementById('custEmail').value.trim() || 'athlete@firsports.com';
        const phone = document.getElementById('custPhone').value.trim() || '+1 555-0199';
        const address = document.getElementById('custAddress').value.trim() || '123 Champions Way, Suite 400';

        localStorage.setItem('fir_athlete_profile', JSON.stringify({ name, email, phone, address }));

        const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
        const discountAmount = subtotal * (activeDiscount / 100);
        const shippingCost = (subtotal - discountAmount >= 150) ? 0.00 : 18.00;
        const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing Pro Dispatch...';
        }

        setTimeout(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = '<i class="fa-solid fa-lock"></i> <span>CONFIRM & DISPATCH ORDER</span>';
            }

            const orderNum = 'FIR-' + Math.floor(10000000 + Math.random() * 90000000);
            currentOrderNumberForSuccess = orderNum;

            // Persist order in local storage
            userOrders[orderNum] = {
                order_number: orderNum,
                customer_name: name,
                customer_email: email,
                customer_phone: phone,
                shipping_address: address,
                total_amount: grandTotal,
                status: 'processing',
                created_at: new Date().toLocaleString(),
                items: [...cart]
            };
            localStorage.setItem('fir_user_orders', JSON.stringify(userOrders));

            window.closeCheckoutModal();

            document.getElementById('successOrderNumber').textContent = orderNum;
            document.getElementById('successCustomerName').textContent = name;
            document.getElementById('successOrderTotal').textContent = `$${grandTotal.toFixed(2)}`;
            document.getElementById('orderSuccessOverlay').classList.add('active');

            // Clear Cart
            cart = [];
            activeDiscount = 0;
            saveCart();
            renderCartUI();
        }, 500);
    };

    window.closeSuccessModal = function () {
        const overlay = document.getElementById('orderSuccessOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ==================== 17. THEME ACCENT SWITCHER ====================
    function initThemeSwitcher() {
        const pickerBtn = document.getElementById('themePickerBtn');
        const dropdown = document.getElementById('themeDropdown');

        const savedTheme = localStorage.getItem('fir_theme') || 'theme-volt';
        setTheme(savedTheme);

        if (pickerBtn && dropdown) {
            pickerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!pickerBtn.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });

            dropdown.querySelectorAll('.theme-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    const t = opt.dataset.theme;
                    setTheme(t);
                    dropdown.classList.remove('active');
                });
            });
        }
    }

    function setTheme(themeClass) {
        document.body.classList.remove('theme-volt', 'theme-cyan', 'theme-orange');
        document.body.classList.add(themeClass);
        localStorage.setItem('fir_theme', themeClass);

        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.theme === themeClass);
        });
    }

    // ==================== 18. NEWSLETTER & NOTIFICATIONS ====================
    window.handleNewsletter = function () {
        const emailInput = document.getElementById('newsletterEmail');
        if (!emailInput || !emailInput.value) return;

        showToast('Welcome to the Pro Locker Room! Check your inbox for $20 voucher. ⚡');
        emailInput.value = '';
    };

    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast-msg ${type}`;
        toast.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(50px)';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

})();
