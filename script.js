// script.js

// Constants from your React app
const APP_VERSION = "1.1.0";
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.example.callblocker2"; // Assuming this remains the app's ID
const MIN_ANDROID_VERSION = "Android 9 Pie (API 28)";

// Page content data
const pages = {
    home: `
        <div class="space-y-12">
            <section class="text-center py-12 md:py-20 bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-700 dark:to-green-600 rounded-xl shadow-xl text-white overflow-hidden">
                <div class="container mx-auto px-6 relative">
                    <div class="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-2xl opacity-50"></div>
                    <div class="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-72 h-72 bg-white/10 rounded-full filter blur-2xl opacity-50"></div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative z-10">
                        Take Control of Your Calls with Block Guard
                    </h1>
                    <p class="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto relative z-10">
                        Intelligent call filtering to eliminate spam and ensure you never miss important connections.
                    </p>
                    <a href="#download" class="page-link bg-white text-blue-600 dark:bg-gray-100 dark:text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-300 transition duration-300 text-lg relative z-10">
                        Download Block Guard
                    </a>
                    <img src="https://placehold.co/600x400/FFFFFF/333333?text=App+Mockup+Here&font=inter" alt="Block Guard App Mockup" class="mt-12 mx-auto rounded-lg shadow-2xl max-w-md md:max-w-lg lg:max-w-xl relative z-10" onerror="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/999999?text=Image+Error&font=inter';">
                </div>
            </section>
            <section class="py-12">
                <h2 class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Key Features at a Glance</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div class="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2 text-center text-gray-700 dark:text-gray-200">Precise Call Blocking</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-center">Block specific phone numbers with automatic rejection. Easily add numbers to your blocklist.</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div class="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 dark:text-green-400"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2 text-center text-gray-700 dark:text-gray-200">Call Whitelisting</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-center">Create exceptions for important callers, ensuring their calls always get through.</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div class="flex justify-center mb-4">
                             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2 text-center text-gray-700 dark:text-gray-200">Area Code Filtering</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-center">Block or allow calls based on area codes to stop out-of-state telemarketers.</p>
                    </div>
                </div>
                <div class="text-center mt-8">
                    <a href="#features" class="page-link text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition duration-150 group text-lg">
                        Explore All Features <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block h-5 w-5 transition-transform group-hover:translate-x-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </a>
                </div>
            </section>
            <section class="py-12">
                <h2 class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Why Choose Block Guard?</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mb-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <h3 class="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Peace of Mind</h3>
                        <p class="text-gray-600 dark:text-gray-400">Enjoy uninterrupted time without the constant annoyance of spam and unwanted calls.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mb-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                        <h3 class="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Full Control</h3>
                        <p class="text-gray-600 dark:text-gray-400">Customize blocking rules, manage whitelists, and decide who can reach you.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500 mb-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        <h3 class="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Effortless & Secure</h3>
                        <p class="text-gray-600 dark:text-gray-400">Easy to set up and use, with your data stored securely on your device.</p>
                    </div>
                </div>
            </section>
            <section class="text-center py-12">
               <a href="#how-it-works" class="page-link bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 text-lg">
                 Learn How It Works
               </a>
            </section>
        </div>
    `,
    features: `
        <div class="space-y-10">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">Our Powerful Features</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Discover how Block Guard empowers you to manage your calls effectively.</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="featuresListContainer">
                </div>
            <div class="mt-12 p-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow">
                <h3 class="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Technical Highlights</h3>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Block Guard is built with modern Android technology including Kotlin, Jetpack Compose for a smooth UI, Material Design 3 for a contemporary look and feel, and follows the MVVM architecture pattern for robust and maintainable code. This ensures a reliable, efficient, and user-friendly experience. Our commitment to security means your data is handled with care, using on-device encrypted storage.
                </p>
            </div>
        </div>
    `,
    'how-it-works': `
        <div class="space-y-10">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">How Block Guard Works</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A simple step-by-step guide to regaining control over your calls.</p>
            </div>
            <div class="max-w-3xl mx-auto space-y-8">
                <div class="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 1: Download & Install</h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Get Block Guard from the Google Play Store. Installation is quick and easy, getting you set up in minutes.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="flex-shrink-0 bg-green-100 dark:bg-green-900/50 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 dark:text-green-400"><path d="M12.22 2h-4.12a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 2: Grant Permissions</h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Block Guard needs a few permissions to function effectively: access to contacts (for whitelisting), phone state (to identify incoming calls), call logs (for history and blocking), and SMS (for text blocking). We value your privacy; see our Privacy Policy for full details on how these permissions are used solely for app functionality.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 3: Configure Your Settings</h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Personalize Block Guard to your needs. Add numbers to your blocklist, create whitelist rules for important contacts, set up area code filters, define keywords for text blocking, and configure Do Not Disturb mode with custom exceptions.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="flex-shrink-0 bg-green-100 dark:bg-green-900/50 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 dark:text-green-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 4: Enjoy Peace of Mind</h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Once set up, Block Guard works automatically in the background, silently filtering unwanted calls and texts. Enjoy uninterrupted focus and a spam-free communication experience.</p>
                    </div>
                </div>
            </div>
            <div class="mt-10 text-center">
                <img src="https://placehold.co/700x350/E2E8F0/4A5568?text=Simplified+App+Workflow&font=inter" alt="Block Guard UI Flow" class="mx-auto rounded-lg shadow-lg" onerror="this.onerror=null; this.src='https://placehold.co/700x350/CCCCCC/999999?text=Flowchart+Error&font=inter';">
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Visual representation of Block Guard's simple and effective workflow.</p>
            </div>
        </div>
    `,
    download: `
        <div class="space-y-10 text-center">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">Download Block Guard</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Get the ultimate call and SMS protection for your Android device.</p>
            </div>
            <div class="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-blue-600 dark:text-blue-400 mb-6"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                <h3 class="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Block Guard for Android</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Current Version: ${APP_VERSION}</p>
                <a href="${PLAY_STORE_LINK}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-lg w-full transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Get it on Google Play
                </a>
                <div class="mt-8 text-sm text-gray-500 dark:text-gray-400">
                    <p>Requires: ${MIN_ANDROID_VERSION}</p>
                    <p class="mt-1">Developed on Android SDK 35+</p>
                </div>
            </div>
            <div class="mt-10">
                <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Scan QR Code for Easy Download</h3>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(PLAY_STORE_LINK)}" alt="QR Code for Google Play Store" class="mx-auto rounded-lg shadow-md border-4 border-white dark:border-gray-700" onerror="this.onerror=null; this.src='https://placehold.co/200x200/CCCCCC/999999?text=QR+Error&font=inter';">
            </div>
        </div>
    `,
    support: `
        <div class="space-y-10">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">Support & FAQ</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Find answers to common questions and get help with Block Guard.</p>
            </div>
            <div class="max-w-3xl mx-auto space-y-6" id="faqContainer">
                </div>
            <div class="mt-12 text-center p-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow">
                <h3 class="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Need More Help?</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto">
                    If you can't find the answer to your question in the FAQ, our support team is ready to assist you. Please don't hesitate to reach out.
                </p>
                <a href="mailto:support@blockguard.app" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Email Support
                </a>
                
            </div>
        </div>
    `,
    about: `
        <div class="space-y-10">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">About RadStorm Technologies LLC</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Learn more about the team and mission behind Block Guard.</p>
            </div>
            <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                <div class="flex justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <h3 class="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">Our Mission</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-6">
                    "To provide users with complete control over their incoming calls and messages, eliminating unwanted disturbances while ensuring important connections are never missed."
                </p>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Block Guard is developed and maintained by RadStorm Technologies LLC, a small team passionate about creating useful and reliable mobile applications. We believe everyone deserves a communication experience free from spam and harassment. Our focus is on building intuitive, powerful tools that respect user privacy and put you in command of your device.
                </p>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We are committed to continuous improvement and value user feedback. Our goal is to make Block Guard the most effective and user-friendly call and SMS filtering solution available. Thank you for choosing Block Guard!
                </p>
            </div>
        </div>
    `,
    privacy: `
        <div class="space-y-8">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">Privacy Policy</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Your privacy is important to us. This policy explains how Block Guard handles your information.</p>
            </div>
            <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md relative">
                <button id="copyPrivacyPolicy" class="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md text-xs transition-colors duration-150 flex items-center" aria-label="Copy policy to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 copy-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 check-icon hidden"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span class="copy-text">Copy</span>
                </button>
                <div class="prose dark:prose-invert max-w-none" id="privacyPolicyTextContainer">
                    </div>
            </div>
        </div>
    `,
    terms: `
        <div class="space-y-8">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">Terms of Service</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Please read these terms carefully before using the Block Guard application.</p>
            </div>
            <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md relative">
                <button id="copyTermsButton" class="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md text-xs transition-colors duration-150 flex items-center" aria-label="Copy terms to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 copy-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 check-icon hidden"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span class="copy-text">Copy</span>
                </button>
                <div class="prose dark:prose-invert max-w-none" id="termsTextContainer">
                    </div>
            </div>
        </div>
    `
};

// Data from your React app
const featuresData = [
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>', title: "Precise Call Blocking", description: "Block specific phone numbers with automatic rejection. Easily add numbers to your blocklist.", details: "Our intelligent system identifies and blocks unwanted calls before they reach you. Manage your blocklist with a few simple taps." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>', title: "Call Whitelisting", description: "Create exceptions for important callers, ensuring their calls always get through.", details: "Never miss a critical call. Whitelisted contacts bypass all blocking rules, giving you peace of mind." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>', title: "Area Code Filtering", description: "Block or allow calls based on area codes to stop out-of-state telemarketers.", details: "Take control of regional calls. Ideal for filtering out calls from specific geographic locations known for spam." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><path d="M17.7 17.7A10.014 10.014 0 0 1 6.3 6.3M21 21l-1.65-1.65M9 11.65A1.65 1.65 0 0 0 7.35 10h0A1.65 1.65 0 0 0 9 8.35V3M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M1 1l22 22"></path></svg>', title: "Do Not Disturb Mode", description: "Configure comprehensive quiet periods with customizable exceptions for uninterrupted time.", details: "Enjoy focused work or restful nights. DND mode silences all but your most important calls, with flexible scheduling and exception rules." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>', title: "Contact Management", description: "Intelligently manage contacts with easy configuration for blocking and whitelisting.", details: "Seamlessly integrate Block Guard with your existing contacts for effortless setup and management." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>', title: "Detailed Call Log", description: "View a complete history of blocked calls with timestamps for full transparency.", details: "Keep track of all blocked activity. Our detailed log shows you who tried to call and when, giving you full visibility." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>', title: "Text Message Blocking", description: "Block unwanted SMS based on senders or keywords. (May require default SMS app for full functionality)", details: "Filter out spam texts just like calls. Define blocked senders or keywords to keep your inbox clean. For optimal performance, setting Block Guard as your default SMS app might be necessary on some Android versions." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4H7v4"></path><path d="M17 2v4H7V2"></path><path d="M7 22h0"></path><path d="M7 2h0"></path><path d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>', title: "Scheduled Blocking", description: "Set up specific times for blocking rules to activate automatically.", details: "Automate your call management. Define schedules for when DND or other blocking rules should be active, perfect for work hours or nighttime." },
  { iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>', title: "Advanced Call Screening", description: "Utilizes Android's CallScreeningService for enhanced call filtering capabilities.", details: "Leveraging modern Android features, Block Guard provides deeper call analysis to identify and manage unwanted calls more effectively." }
];

const faqData = [
  { question: "How do I add a number to the blocklist?", answer: "Navigate to the 'Blocked Numbers' section from the main menu or homepage quick actions. Enter the number you wish to block and tap 'Add Number'. You can also select from your contacts." },
  { question: "How does whitelisting work?", answer: "Whitelisted numbers will always bypass any blocking rules, including Do Not Disturb mode (if overrides are enabled). Add important contacts to your whitelist from the 'Whitelist' section to ensure you never miss their calls." },
  { question: "What permissions does Block Guard need and why?", answer: "Block Guard requires permissions like READ_PHONE_STATE (to detect incoming calls), CALL_PHONE (to manage calls), READ_CONTACTS (for whitelisting and caller ID), READ_CALL_LOG (to display call history), and SMS permissions (for text blocking). Each permission is crucial for the app's core functionality. You can find a detailed list in our Privacy Policy." },
  { question: "How does Do Not Disturb mode function?", answer: "DND mode blocks all incoming calls unless they are from whitelisted numbers or contacts (if configured in DND settings). You can schedule DND for specific times or toggle it manually." },
  { question: "Is my data secure?", answer: "Yes, your data is secure. Block Guard uses Android's EncryptedSharedPreferences (via androidx.security:security-crypto) to store your settings locally on your device. We do not upload your blocklists, whitelists, or call logs to any server." },
  { question: "How do I backup and restore my settings?", answer: "Block Guard includes a Backup & Restore feature. You can find this in the main menu. Export your settings (including blocklists, whitelists, and app preferences) to an encrypted file. You can restore from this file if you reinstall the app or move to a new device. Remember to keep your backup password safe!" },
  { question: "What if I see a 'Preference Error Dialog'?", answer: "This dialog can appear if there's an issue accessing your encrypted settings, often after reinstalling the app due to an encryption key mismatch. The dialog provides options: 1. Try 'Import Backup' if you have one. 2. If that fails or you reinstalled, tap 'Go to Settings', navigate to Block Guard's app info, select 'Storage & cache', then 'Clear storage'. Relaunch the app (it will start fresh), then use the 'Backup & Restore' menu to import your backup file." },
  { question: "Text message blocking isn't working perfectly.", answer: "For the most effective text message blocking, Block Guard may need to be set as your default SMS application. This allows it to intercept and filter all incoming SMS messages directly. If it's not the default, it relies on notification access, which might not catch all messages or provide the same level of control." }
];

const privacyPolicyFullText = `
    <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p>RadStorm Technologies LLC ("we," "us," or "our") operates the Block Guard mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
    <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
    <h2>Information Collection and Use</h2>
    <p>Block Guard is designed to operate primarily on your device. We collect the following types of information for the sole purpose of providing and improving the Service features:</p>
    <h3>User-Provided Data:</h3>
    <ul>
        <li>Phone numbers you explicitly add to your blocklist or whitelist.</li>
        <li>Area codes you explicitly add to your blocklist or whitelist.</li>
        <li>Keywords you explicitly add for SMS/text message blocking.</li>
    </ul>
    <h3>Data Processed for Functionality (Primarily On-Device):</h3>
    <ul>
        <li><strong>Call Log Data:</strong> If you grant READ_CALL_LOG and WRITE_CALL_LOG permissions, the app accesses your call log to identify incoming numbers for blocking, to log blocked calls within the app, and to allow you to add numbers from your call history to block/whitelists. This data is processed on your device.</li>
        <li><strong>Contact List Data:</strong> If you grant READ_CONTACTS permission, the app accesses your contacts to enable whitelisting, identify callers by name, and allow contacts during Do Not Disturb mode. Your contact list is NOT uploaded or shared from your device by Block Guard.</li>
        <li><strong>SMS Content (for Text Blocking):</strong> If you enable text message blocking and grant necessary SMS permissions (READ_SMS, RECEIVE_SMS), the app will process incoming SMS content on your device to match against your defined blocked senders or keywords. Blocked SMS messages may be logged within the app for your review. The content of non-blocked SMS messages is not stored by Block Guard beyond what your default SMS app stores.</li>
        <li><strong>Notification Access (BIND_NOTIFICATION_LISTENER_SERVICE):</strong> If text message blocking is active and the app is not the default SMS app, this permission may be used to read incoming message notifications on-device to identify and block messages based on sender or content.</li>
    </ul>
    <h2>How Information is Used</h2>
    <p>The information Block Guard processes is used solely to:</p>
    <ul>
        <li>Provide the core features of the app: call blocking, text message blocking, whitelisting, area code filtering, and Do Not Disturb functionality.</li>
        <li>Display call logs and blocked message logs within the app for your reference.</li>
        <li>Improve the functionality and user experience of the app.</li>
    </ul>
    <h2>Data Storage and Security</h2>
    <ul>
        <li>All your settings (blocklists, whitelists, keywords, app preferences) are stored <strong>locally on your device</strong>.</li>
        <li>We utilize Android's <strong>EncryptedSharedPreferences</strong> (via \`androidx.security:security-crypto\`) for enhanced data protection of these settings on your device.</li>
        <li>The Backup and Restore feature allows you to create a user-password-encrypted backup file of your settings. This file is stored where you choose (e.g., your device storage, cloud drive). The security of this backup file outside of the app is your responsibility.</li>
    </ul>
    <h2>Data Sharing</h2>
    <p><strong>RadStorm Technologies LLC does not share your personal data, call logs, contact lists, or message content with any third parties.</strong> All processing for blocking and filtering happens on your device.</p>
    <h2>Permissions</h2>
    <p>Block Guard requests the following key permissions to function. We only ask for permissions necessary for the app's features:</p>
    <ul>
        <li><code>READ_PHONE_STATE</code>, <code>ANSWER_PHONE_CALLS</code>, <code>MANAGE_OWN_CALLS</code>: To detect, identify, and manage incoming calls for blocking.</li>
        <li><code>CALL_PHONE</code>: To enable direct calling from logs or the app interface (if such a feature is used).</li>
        <li><code>READ_CONTACTS</code>: To identify callers from your contacts, for whitelisting, and to allow contacts during DND.</li>
        <li><code>READ_CALL_LOG</code> / <code>WRITE_CALL_LOG</code>: To display call history and log blocked calls within the app.</li>
        <li><code>READ_SMS</code> / <code>RECEIVE_SMS</code> / <code>SEND_SMS</code>: For text message blocking and if set as default SMS app.</li>
        <li><code>BIND_SCREENING_SERVICE</code>: For advanced call screening capabilities on supported Android versions.</li>
        <li><code>ACCESS_NOTIFICATION_POLICY</code>: For Do Not Disturb functionality.</li>
        <li><code>POST_NOTIFICATIONS</code> (Android 13+): To show status notifications (e.g., when DND is active).</li>
    </ul>
    <h2>User Rights</h2>
    <p>You have control over your data within the app. You can:</p>
    <ul>
        <li>View and modify your blocklists, whitelists, and keyword lists.</li>
        <li>Clear your blocked call log and blocked SMS log within the app.</li>
        <li>Manage app permissions through your device settings.</li>
        <li>Use the Backup & Restore feature to manage your settings data.</li>
    </ul>
    <h2>Policy Updates</h2>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
    <h2>Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@blockguard.app" class="text-blue-600 hover:underline dark:text-blue-400">privacy@blockguard.app</a></p>
`;

const termsFullText = `
    <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p>These Terms of Service ("Terms") govern your use of the Block Guard mobile application (the "Service") provided by RadStorm Technologies LLC ("we," "us," or "our").</p>
    <p>By downloading, installing, or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
    <h2>1. Use of the Service</h2>
    <p>Block Guard grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal, non-commercial purposes, strictly in accordance with these Terms and any applicable laws.</p>
    <h2>2. Acceptable Use</h2>
    <p>You agree not to use the Service:</p>
    <ul>
        <li>In any way that violates any applicable national or international law or regulation.</li>
        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
        <li>To impersonate or attempt to impersonate RadStorm Technologies LLC, a RadStorm Technologies LLC employee, another user, or any other person or entity.</li>
        <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm RadStorm Technologies LLC or users of the Service or expose them to liability.</li>
    </ul>
    <h2>3. Intellectual Property</h2>
    <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of RadStorm Technologies LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
    <p>This software is proprietary and confidential. Unauthorized copying, distribution, modification, public display, or public performance of the Service or any part thereof is strictly prohibited. All rights reserved by RadStorm Technologies LLC.</p>
    <p>© ${new Date().getFullYear()} RadStorm Technologies LLC. All Rights Reserved.</p>
    <h2>4. Disclaimer of Warranties</h2>
    <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. RADSTORM TECHNOLOGIES LLC MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
    <p>NEITHER RADSTORM TECHNOLOGIES LLC NOR ANY PERSON ASSOCIATED WITH RADSTORM TECHNOLOGIES LLC MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER RADSTORM TECHNOLOGIES LLC NOR ANYONE ASSOCIATED WITH RADSTORM TECHNOLOGIES LLC REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
    <p>RADSTORM TECHNOLOGIES LLC HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>
    <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
    <h2>5. Limitation of Liability</h2>
    <p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF RADSTORM TECHNOLOGIES LLC, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
    <h2>6. Governing Law</h2>
    <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which RadStorm Technologies LLC is established, without regard to its conflict of law provisions.</p>
    <h2>7. Changes to Terms</h2>
    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
    <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>
    <h2>8. Contact Us</h2>
    <p>If you have any questions about these Terms, please contact us at: <a href="mailto:terms@blockguard.app" class="text-blue-600 hover:underline dark:text-blue-400">terms@blockguard.app</a></p>
`;


// Function to render features
function renderFeatures() {
    const container = document.getElementById('featuresListContainer');
    if (!container) return;
    let featuresHTML = '';
    featuresData.forEach(feature => {
        featuresHTML += `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col transform hover:-translate-y-1">
                <div class="flex items-center mb-4">
                    ${feature.iconSvg}
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100">${feature.title}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-3 flex-grow">${feature.description}</p>
                <details class="text-sm text-gray-500 dark:text-gray-500 group">
                    <summary class="hover:text-blue-600 dark:hover:text-blue-400 list-none flex items-center py-1">
                        More details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-open:rotate-90 transition-transform"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </summary>
                    <p class="mt-2 text-gray-600 dark:text-gray-400">${feature.details}</p>
                </details>
            </div>
        `;
    });
    container.innerHTML = featuresHTML;
}

// Function to render FAQs
function renderFAQs() {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    let faqsHTML = '';
    faqData.forEach(faq => {
        faqsHTML += `
            <details class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow group transition-all duration-300 hover:shadow-lg">
                <summary class="font-semibold text-lg text-gray-800 dark:text-gray-100 list-none flex justify-between items-center py-2">
                    ${faq.question}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 dark:text-gray-400 group-open:rotate-90 transition-transform"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </summary>
                <p class="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed pb-2">${faq.answer}</p>
            </details>
        `;
    });
    container.innerHTML = faqsHTML;
}

// Function to render Privacy Policy
function renderPrivacyPolicy() {
    const container = document.getElementById('privacyPolicyTextContainer');
    if (container) {
        container.innerHTML = privacyPolicyFullText;
    }
}

// Function to render Terms of Service
function renderTerms() {
    const container = document.getElementById('termsTextContainer');
    if (container) {
        container.innerHTML = termsFullText;
    }
}

// Navigation logic
document.addEventListener('DOMContentLoaded', () => {
    const pageLinks = document.querySelectorAll('.page-link');
    const pageContents = document.querySelectorAll('.page-content');
    const desktopNavLinks = document.querySelectorAll('#desktop-nav .nav-link');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const darkModeToggles = [document.getElementById('darkModeToggleDesktop'), document.getElementById('darkModeToggleMobile')];
    const moonIcons = [document.getElementById('moonIconDesktop'), document.getElementById('moonIconMobile')];
    const sunIcons = [document.getElementById('sunIconDesktop'), document.getElementById('sunIconMobile')];
    const currentYearSpan = document.getElementById('currentYear');
    const copyPrivacyButton = document.getElementById('copyPrivacyPolicy');
    const copyTermsButton = document.getElementById('copyTermsButton');
    const toastElement = document.getElementById('toast');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    function showPage(pageId) {
        pageContents.forEach(content => {
            content.classList.remove('active');
        });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
            // Scroll to top of page content
            // Ensure header exists before trying to get its offsetHeight
            const header = document.querySelector('header');
            if (header) {
                 window.scrollTo({ top: header.offsetHeight, behavior: 'smooth' });
            } else {
                 window.scrollTo({ top: 0, behavior: 'smooth'});
            }
        }

        // Update active nav link
        const allNavLinks = [...desktopNavLinks, ...mobileNavLinks];
        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${pageId}`) {
                link.classList.add('active');
            }
        });
    }

    function navigate(event) {
        event.preventDefault();
        const pageId = event.currentTarget.getAttribute('href').substring(1);
        
        // Ensure the target section exists before trying to set its innerHTML
        const targetSection = document.getElementById(pageId);
        if (targetSection && pages[pageId]) {
            targetSection.innerHTML = pages[pageId];
            // Re-run render functions if needed for dynamic content within pages
            if (pageId === 'features') renderFeatures();
            if (pageId === 'support') renderFAQs();
            if (pageId === 'privacy') renderPrivacyPolicy();
            if (pageId === 'terms') renderTerms();
        } else if (!targetSection && pages[pageId]) {
            // If the section doesn't exist (e.g. first load of privacy/terms),
            // it will be populated by the initial page load logic later.
            // This can happen if a direct link to #privacy is used before home is loaded.
        }


        showPage(pageId);
        window.location.hash = pageId; // Update URL hash

        // Close mobile menu on navigation
        if (mobileMenu && mobileMenu.classList.contains('mobile-menu-enter-active')) {
            mobileMenu.classList.remove('mobile-menu-enter-active');
            if(menuIcon) menuIcon.classList.remove('hidden');
            if(closeIcon) closeIcon.classList.add('hidden');
            if(mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    }

    pageLinks.forEach(link => {
        link.addEventListener('click', navigate);
    });

    // Initial page load based on hash or default to home
    let initialPageId = window.location.hash.substring(1) || 'home';
    if (!document.getElementById(initialPageId) || !pages[initialPageId]) { // Fallback if hash is invalid or section doesn't exist
        initialPageId = 'home';
    }
    
    const initialTargetSection = document.getElementById(initialPageId);
    if (initialTargetSection && pages[initialPageId]) {
         initialTargetSection.innerHTML = pages[initialPageId];
         if (initialPageId === 'features') renderFeatures();
         if (initialPageId === 'support') renderFAQs();
         if (initialPageId === 'privacy') renderPrivacyPolicy();
         if (initialPageId === 'terms') renderTerms();
    }
    showPage(initialPageId);


    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));
            mobileMenu.classList.toggle('mobile-menu-enter-active');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // Dark mode toggle
    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        moonIcons.forEach(icon => { if(icon) icon.classList.toggle('hidden', isDark) });
        sunIcons.forEach(icon => { if(icon) icon.classList.toggle('hidden', !isDark) });
    }

    let isDarkMode = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDarkMode);

    darkModeToggles.forEach(toggle => {
        if (toggle) {
            toggle.addEventListener('click', () => {
                isDarkMode = !isDarkMode;
                localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
                applyTheme(isDarkMode);
            });
        }
    });
    
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                isDarkMode = e.matches;
                applyTheme(isDarkMode);
            }
        });
    }
    

    // Copy to clipboard function
    function copyToClipboard(text, buttonElement) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast(buttonElement);
            }).catch(err => {
                console.error('Failed to copy with Clipboard API:', err);
                fallbackCopyToClipboard(text, buttonElement);
            });
        } else {
            fallbackCopyToClipboard(text, buttonElement);
        }
    }
    
    function fallbackCopyToClipboard(text, buttonElement) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; // Prevent scrolling to bottom
        textArea.style.top = "-9999px";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast(buttonElement);
        } catch (err) {
            console.error('Failed to copy with execCommand:', err);
            // Avoid alert()
            const tempAlert = document.createElement('div');
            tempAlert.textContent = "Failed to copy. Please copy manually.";
            tempAlert.style.position = 'fixed';
            tempAlert.style.bottom = '10px';
            tempAlert.style.left = '10px';
            tempAlert.style.padding = '10px';
            tempAlert.style.backgroundColor = 'red';
            tempAlert.style.color = 'white';
            tempAlert.style.zIndex = '2000';
            document.body.appendChild(tempAlert);
            setTimeout(() => { tempAlert.remove(); }, 3000);
        }
        document.body.removeChild(textArea);
    }

    function showToast(buttonElement) {
        if (toastElement) {
            toastElement.classList.add('show');
            setTimeout(() => {
                toastElement.classList.remove('show');
            }, 2000);
        }
        if (buttonElement) {
            const copyIcon = buttonElement.querySelector('.copy-icon');
            const checkIcon = buttonElement.querySelector('.check-icon');
            const copyTextSpan = buttonElement.querySelector('.copy-text');
            if (copyIcon) copyIcon.classList.add('hidden');
            if (checkIcon) checkIcon.classList.remove('hidden');
            if (copyTextSpan) copyTextSpan.textContent = 'Copied!';
            
            setTimeout(() => {
                if (copyIcon) copyIcon.classList.remove('hidden');
                if (checkIcon) checkIcon.classList.add('hidden');
                if (copyTextSpan) copyTextSpan.textContent = 'Copy';
            }, 2000);
        }
    }
    
    // Attach event listeners for copy buttons after content is potentially rendered
    // Need to use event delegation or re-attach if content is re-rendered.
    // For simplicity, we'll re-attach in navigate function for privacy/terms.
    // However, a better approach for dynamically added buttons is event delegation.
    // For now, direct attachment after initial full page render.

    document.body.addEventListener('click', function(event) {
        if (event.target.closest('#copyPrivacyPolicy')) {
            const policyContainer = document.getElementById('privacyPolicyTextContainer');
            if (policyContainer) copyToClipboard(policyContainer.innerText, event.target.closest('#copyPrivacyPolicy'));
        }
        if (event.target.closest('#copyTermsButton')) {
            const termsContainer = document.getElementById('termsTextContainer');
            if (termsContainer) copyToClipboard(termsContainer.innerText, event.target.closest('#copyTermsButton'));
        }
    });

});


