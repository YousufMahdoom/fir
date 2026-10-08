    <!-- Brand Perks & Guarantees Bar -->
    <section class="perks-strip">
        <div class="perks-container">
            <div class="perk-card">
                <div class="perk-icon-wrap volt">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div class="perk-text">
                    <h4>100% Match Grade Authentic</h4>
                    <p>Direct from master crafters & licensed labs</p>
                </div>
            </div>
            <div class="perk-card">
                <div class="perk-icon-wrap cyan">
                    <i class="fa-solid fa-bolt"></i>
                </div>
                <div class="perk-text">
                    <h4>HyperSpeed Express Delivery</h4>
                    <p>Same-day dispatch on orders before 2:00 PM</p>
                </div>
            </div>
            <div class="perk-card">
                <div class="perk-icon-wrap orange">
                    <i class="fa-solid fa-arrows-rotate"></i>
                </div>
                <div class="perk-text">
                    <h4>30-Day Pro Fit Guarantee</h4>
                    <p>Hassle-free replacement if fit isn't match-ready</p>
                </div>
            </div>
            <div class="perk-card">
                <div class="perk-icon-wrap purple">
                    <i class="fa-solid fa-headset"></i>
                </div>
                <div class="perk-text">
                    <h4>Athlete Support 24/7</h4>
                    <p>Chat with verified coaches & gear specialists</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Footer -->
    <footer class="main-footer">
        <div class="footer-top">
            <div class="footer-container">
                <!-- Col 1: Brand Info -->
                <div class="footer-col brand-col">
                    <a href="index.php" class="brand-logo footer-logo">
                        <div class="logo-mark"><i class="fa-solid fa-bolt-lightning"></i></div>
                        <div class="logo-text">
                            <span class="brand-name">FIR<span class="brand-accent">SPORTS</span></span>
                            <span class="brand-tagline">ENGINEERED FOR CHAMPIONS</span>
                        </div>
                    </a>
                    <p class="footer-desc">
                        FIR Sports is the world's premier destination for high-velocity football boots, mastercrafted English willow cricket bats, and next-generation athletic telemetry gadgets.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="#" class="social-btn" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#" class="social-btn" aria-label="X Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>

                <!-- Col 2: Sport Disciplines -->
                <div class="footer-col">
                    <h4 class="footer-heading">Sports Gear</h4>
                    <ul class="footer-links">
                        <li><a href="#featured" onclick="window.filterCategory(1)"><i class="fa-solid fa-chevron-right"></i> Football Elite Boots</a></li>
                        <li><a href="#featured" onclick="window.filterCategory(2)"><i class="fa-solid fa-chevron-right"></i> English Willow Bats</a></li>
                        <li><a href="#gadgets-tech"><i class="fa-solid fa-chevron-right"></i> Smart GPS Vest Pods</a></li>
                        <li><a href="#gadgets-tech"><i class="fa-solid fa-chevron-right"></i> StanceBeam Bat Sensors</a></li>
                        <li><a href="#featured" onclick="window.filterCategory(4)"><i class="fa-solid fa-chevron-right"></i> Performance Compression</a></li>
                        <li><a href="#featured" onclick="window.filterCategory(3)"><i class="fa-solid fa-chevron-right"></i> Smart Velocity Balls</a></li>
                    </ul>
                </div>

                <!-- Col 3: Athletic Performance -->
                <div class="footer-col">
                    <h4 class="footer-heading">Athlete Hub</h4>
                    <ul class="footer-links">
                        <li><a href="javascript:void(0)" onclick="window.openTrackOrderModal()"><i class="fa-solid fa-chevron-right"></i> Track My Order</a></li>
                        <li><a href="javascript:void(0)" onclick="window.openWishlistDrawer()"><i class="fa-solid fa-chevron-right"></i> My Saved Wishlist</a></li>
                        <li><a href="#compare"><i class="fa-solid fa-chevron-right"></i> Boot Sizing & Stud Matrix</a></li>
                        <li><a href="#compare"><i class="fa-solid fa-chevron-right"></i> Willow Knocking-In Service</a></li>
                        <li><a href="#gadgets-tech"><i class="fa-solid fa-chevron-right"></i> Telemetry Simulator</a></li>
                    </ul>
                </div>

                <!-- Col 4: Newsletter & Deals -->
                <div class="footer-col newsletter-col">
                    <h4 class="footer-heading">Join the Pro Locker</h4>
                    <p>Unlock secret drop access, early boot releases, and exclusive telemetry firmware updates.</p>
                    <form class="newsletter-form" id="newsletterForm" onsubmit="event.preventDefault(); window.handleNewsletter();">
                        <div class="input-glow-group">
                            <input type="email" id="newsletterEmail" placeholder="Enter athlete email..." required>
                            <button type="submit" class="newsletter-submit-btn">
                                <span>Join</span> <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </form>
                    <div class="payment-badges">
                        <span><i class="fa-brands fa-cc-visa"></i></span>
                        <span><i class="fa-brands fa-cc-mastercard"></i></span>
                        <span><i class="fa-brands fa-cc-amex"></i></span>
                        <span><i class="fa-brands fa-cc-apple-pay"></i></span>
                        <span><i class="fa-brands fa-cc-paypal"></i></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-container bottom-flex">
                <p>&copy; <?= date('Y') ?> FIR SPORT SHOP Ltd. All Rights Reserved. Engineered for maximum athletic performance.</p>
                <div class="bottom-links">
                    <a href="javascript:void(0)" onclick="window.openTrackOrderModal()">Track Order</a>
                    <a href="javascript:void(0)" onclick="window.openWishlistDrawer()">Wishlist</a>
                    <a href="#compare">Guarantees</a>
                    <a href="setup_db.php" target="_blank" class="db-link">Sync DB</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- ==================== SHOPPING CART DRAWER ==================== -->
    <div class="cart-drawer-overlay" id="cartOverlay"></div>
    <div class="cart-drawer" id="cartDrawer">
        <div class="cart-drawer-header">
            <div class="cart-title-wrap">
                <h3><i class="fa-solid fa-bag-shopping"></i> Your Gear Bag</h3>
                <span class="cart-item-count" id="drawerItemCount">0 items</span>
            </div>
            <button class="close-drawer-btn" id="closeCartBtn" aria-label="Close cart">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- Free Shipping Meter -->
        <div class="shipping-meter-wrap">
            <div class="meter-text">
                <i class="fa-solid fa-truck-fast"></i>
                <span id="shippingMeterText">Add <strong>$150.00</strong> more for <strong>FREE GLOBAL SHIPPING</strong></span>
            </div>
            <div class="meter-track">
                <div class="meter-fill" id="shippingMeterFill" style="width: 0%;"></div>
            </div>
        </div>

        <!-- Cart Items List -->
        <div class="cart-items-container" id="cartItemsContainer">
            <!-- Dynamic Items inserted here -->
        </div>

        <!-- Cart Footer -->
        <div class="cart-drawer-footer" id="cartDrawerFooter">
            <!-- Coupon Code Form -->
            <div class="coupon-box">
                <div class="coupon-input-wrap">
                    <i class="fa-solid fa-tag"></i>
                    <input type="text" id="couponInput" placeholder="Promo Code (e.g. CHAMPION20)" autocomplete="off">
                    <button type="button" class="btn-apply-coupon" onclick="window.applyCouponCode()">Apply</button>
                </div>
                <div class="coupon-msg" id="couponMsg"></div>
            </div>

            <div class="cart-totals-breakdown">
                <div class="totals-row">
                    <span>Subtotal</span>
                    <span id="cartSubtotal">$0.00</span>
                </div>
                <div class="totals-row discount-row" id="cartDiscountRow" style="display:none;">
                    <span>Discount (<span id="discountPercentText">0%</span>)</span>
                    <span class="discount-val" id="cartDiscountVal">-$0.00</span>
                </div>
                <div class="totals-row">
                    <span>Estimated Shipping</span>
                    <span id="cartShippingCost">$0.00</span>
                </div>
                <div class="totals-row total-row">
                    <span>Total</span>
                    <span class="grand-total" id="cartGrandTotal">$0.00</span>
                </div>
            </div>

            <div class="cart-checkout-actions">
                <button class="btn-primary checkout-btn" id="proceedCheckoutBtn" onclick="window.openCheckoutModal()">
                    <span>PROCEED TO SECURE CHECKOUT</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
                <button class="btn-clear-cart" onclick="window.clearCart()">Clear Bag</button>
            </div>
        </div>
    </div>

    <!-- ==================== WISHLIST DRAWER ==================== -->
    <div class="wishlist-drawer-overlay" id="wishlistOverlay"></div>
    <div class="wishlist-drawer" id="wishlistDrawer">
        <div class="wishlist-drawer-header">
            <div class="wishlist-title-wrap">
                <h3><i class="fa-solid fa-heart text-volt"></i> Saved Wishlist</h3>
                <span class="wishlist-item-count" id="drawerWishlistCount">0 items</span>
            </div>
            <button class="close-drawer-btn" id="closeWishlistBtn" aria-label="Close wishlist">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <div class="wishlist-items-container" id="wishlistItemsContainer">
            <!-- Dynamic Wishlist Items -->
        </div>

        <div class="wishlist-drawer-footer" id="wishlistDrawerFooter">
            <button class="btn-primary" onclick="window.moveAllWishlistToCart()">
                <i class="fa-solid fa-cart-plus"></i>
                <span>Move All to Gear Bag</span>
            </button>
            <button class="btn-clear-cart" onclick="window.clearWishlist()">Clear Wishlist</button>
        </div>
    </div>

    <!-- ==================== QUICK VIEW MODAL ==================== -->
    <div class="modal-overlay" id="quickViewOverlay">
        <div class="quick-view-modal" id="quickViewModal">
            <button class="modal-close-btn" id="closeQuickViewBtn" aria-label="Close modal">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="quick-view-content" id="quickViewContent">
                <!-- Dynamically populated via JS -->
            </div>
        </div>
    </div>

    <!-- ==================== TRACK ORDER MODAL ==================== -->
    <div class="modal-overlay" id="trackOrderOverlay">
        <div class="track-order-modal" id="trackOrderModal">
            <button class="modal-close-btn" id="closeTrackOrderBtn" aria-label="Close modal">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="track-modal-header">
                <div class="modal-icon-badge"><i class="fa-solid fa-truck-fast"></i></div>
                <div>
                    <h3>Live Order & Dispatch Tracker</h3>
                    <p>Track your athletic gear in real-time from locker facility to your pitch.</p>
                </div>
            </div>

            <form class="track-search-form" onsubmit="event.preventDefault(); window.searchOrderTracking();">
                <div class="track-input-row">
                    <div class="track-input-wrap">
                        <i class="fa-solid fa-barcode"></i>
                        <input type="text" id="trackOrderInput" placeholder="Enter Tracking ID (e.g. FIR-88492041 or FIR-SAMPLE)" required>
                    </div>
                    <button type="submit" class="btn-primary track-btn" id="trackSearchSubmitBtn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span>Locate</span>
                    </button>
                </div>
                <div class="sample-track-pill">
                    <span>Quick Demo:</span>
                    <button type="button" class="btn-pill-sample" onclick="document.getElementById('trackOrderInput').value='FIR-SAMPLE'; window.searchOrderTracking();">FIR-SAMPLE</button>
                </div>
            </form>

            <div class="track-results-wrap" id="trackResultPanel">
                <div class="track-empty-state">
                    <i class="fa-solid fa-satellite-dish"></i>
                    <p>Enter your FIR order number above to fetch active satellite dispatch telemetry.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- ==================== CHECKOUT MODAL ==================== -->
    <div class="modal-overlay" id="checkoutOverlay">
        <div class="checkout-modal" id="checkoutModal">
            <button class="modal-close-btn" id="closeCheckoutBtn" aria-label="Close modal">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="checkout-header">
                <div class="modal-icon-badge"><i class="fa-solid fa-shield-check"></i></div>
                <div>
                    <h3>Express Athlete Checkout</h3>
                    <p>Enter dispatch destination to finalize match-ready gear delivery.</p>
                </div>
            </div>

            <form id="checkoutForm" onsubmit="event.preventDefault(); window.handleCheckoutSubmit();" class="checkout-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="custName">Full Name / Athlete Name</label>
                        <input type="text" id="custName" required placeholder="e.g. David Sterling">
                    </div>
                    <div class="form-group">
                        <label for="custEmail">Email Address</label>
                        <input type="email" id="custEmail" required placeholder="athlete@proclub.com">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="custPhone">Phone Number (SMS Dispatch Updates)</label>
                        <input type="tel" id="custPhone" required placeholder="+1 555-0199">
                    </div>
                    <div class="form-group">
                        <label for="custPayment">Payment Method</label>
                        <select id="custPayment">
                            <option value="card">Credit / Debit Card (Pro FastPay)</option>
                            <option value="applepay">Apple Pay / Google Pay</option>
                            <option value="cod">Cash on Delivery (Courier Verification)</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="custAddress">Shipping Address (Stadium / Club / Residence)</label>
                    <textarea id="custAddress" rows="2" required placeholder="Street address, Suite/Apartment, City, Postal Code"></textarea>
                </div>

                <!-- Order Summary Mini -->
                <div class="order-summary-box">
                    <div class="summary-line">
                        <span>Items Total (<span id="modalSummaryCount">0</span> items):</span>
                        <strong id="modalSummarySubtotal">$0.00</strong>
                    </div>
                    <div class="summary-line highlight">
                        <span>Final Payable Amount:</span>
                        <strong class="text-volt" id="modalSummaryTotal">$0.00</strong>
                    </div>
                </div>

                <button type="submit" class="btn-primary btn-submit-order" id="submitOrderBtn">
                    <i class="fa-solid fa-lock"></i>
                    <span>CONFIRM & DISPATCH ORDER</span>
                </button>
            </form>
        </div>
    </div>

    <!-- ==================== ORDER SUCCESS CONFIRMATION MODAL ==================== -->
    <div class="modal-overlay" id="orderSuccessOverlay">
        <div class="order-success-modal" id="orderSuccessModal">
            <div class="success-icon-wrap">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <h2>ORDER CONFIRMED!</h2>
            <p class="order-subtitle">Your FIR Sport gear is officially locked in for express locker dispatch.</p>
            <div class="order-receipt-card">
                <div class="receipt-row">
                    <span>Order Tracking ID:</span>
                    <strong class="text-cyan" id="successOrderNumber">FIR-88492041</strong>
                </div>
                <div class="receipt-row">
                    <span>Dispatched To:</span>
                    <strong id="successCustomerName">Athlete Name</strong>
                </div>
                <div class="receipt-row">
                    <span>Total Charged:</span>
                    <strong class="text-volt" id="successOrderTotal">$0.00</strong>
                </div>
                <div class="receipt-row">
                    <span>Courier Delivery:</span>
                    <span>⚡ HyperSpeed Express (1-2 Days)</span>
                </div>
            </div>
            <div class="success-actions-row">
                <button class="btn-primary" onclick="window.trackCurrentOrderFromSuccess()">
                    <i class="fa-solid fa-truck-fast"></i>
                    <span>TRACK THIS ORDER</span>
                </button>
                <button class="btn-secondary" onclick="window.closeSuccessModal()">
                    <span>CONTINUE SHOPPING</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Live Social Proof Toast -->
    <div class="social-proof-toast" id="socialProofToast">
        <div class="proof-avatar"><i class="fa-solid fa-bag-shopping"></i></div>
        <div class="proof-details">
            <p class="proof-msg" id="proofMsg">🔥 <strong>Marcus R.</strong> from Manchester just purchased <strong>FIR Aurora Fusion Boots</strong></p>
            <span class="proof-time"><i class="fa-solid fa-clock"></i> 3 minutes ago • Verified Pro Buyer</span>
        </div>
        <button class="proof-close" onclick="document.getElementById('socialProofToast').classList.remove('active')"><i class="fa-solid fa-xmark"></i></button>
    </div>

    <!-- Toast Notification Container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- Main JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html>
