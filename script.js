// script.js

// Constants from your React app
const APP_VERSION = "1.1.0";
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.example.callblocker2";
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
                   <img src="images/Home_Screen.jpg" alt="Screenshot of Home Screen" class="mt-12 mx-auto block w-full rounded-lg shadow-2xl max-w-md md:max-w-lg lg:max-w-xl relative z-10" onerror="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/999999?text=Image+Error&font=inter';">
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
                <button id="emailSupportBtn" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Email Support
                </button>
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
<p><b>PRIVACY POLICY</b></p>
<p><b>Last updated June 09, 2025</b></p>
<p>This Privacy Notice for RadStorm Technologies ("we," "us," or "our"),
describes how and why we might access, collect, store, use, and/or share
("process") your personal information when you use our services
("Services"), including when you:</p>
<ul>
    <li>Visit our website at https://www.blockguard.app, or any website of
        ours that links to this Privacy Notice</li>
    <li>Download and use our mobile application (Block Guard), or any
        other application of ours that links to this Privacy Notice</li>
    <li>Use Block Guard. Block Guard is a call and message management
        application developed by RadStorm Technologies LLC. It provides
        users with comprehensive control over incoming communications
        through intelligent filtering and customizable settings. The app aims
        to eliminate unwanted calls and messages while ensuring important
        connections are not missed. Key features of Block Guard include:
        Call Blocking: Precise blocking of specific phone numbers and
        automatic rejection. Call Whitelisting: Creation of exceptions for
        important callers. Area Code Filtering: Ability to block or allow calls
        based on area codes. Text Message Blocking: Filtering of unwanted
        SMS messages based on senders or keywords. Do Not Disturb
        Mode: Configurable quiet periods with customizable exceptions.
        Contact Management: Tools for intelligently managing contacts.
        Detailed Logs: Provides a complete history of blocked calls and
        messages with timestamps. Status Notifications: Optional status bar
        indicators when Do Not Disturb mode is active. Dialer Functionality:
        Allows making and receiving calls directly within the app. SMS
        Messaging: Enables sending and receiving text messages. Backup
        & Restore: Securely backup and restore settings and message
        history. The app is built using modern Android development
        practices, including Kotlin, Jetpack Compose for the UI, Material
        Design 3 components, MVVM architecture, Room Database for local
        storage, and kotlinx.serialization for JSON processing.</li>
    <li>Engage with us in other related ways, including any sales,
        marketing, or events</li>
</ul>
<p>Questions or concerns? Reading this Privacy Notice will help you
understand your privacy rights and choices. We are responsible for making
decisions about how your personal information is processed. If you do not
agree with our policies and practices, please do not use our Services. If
you still have any questions or concerns, please contact us at
privacy@blockguard.app.</p>

<h2>SUMMARY OF KEY POINTS</h2>
<p>This summary provides key points from our Privacy Notice, but you
can find out more details about any of these topics by clicking the
link following each key point or by using our table of contents below
to find the section you are looking for.</p>
<p><b>What personal information do we process?</b> When you visit, use, or
navigate our Services, we may process personal information depending on
how you interact with us and the Services, the choices you make, and the
products and features you use. Learn more about personal information you
disclose to us.</p>
<p><b>Do we process any sensitive personal information?</b> Some of the
information may be considered "special" or "sensitive" in certain
jurisdictions, for example your racial or ethnic origins, sexual orientation,
and religious beliefs. We do not process sensitive personal information.</p>
<h3>Backup and Restore Data</h3>
<p>Our Services offer a feature to allow you to back up and restore your settings and message history. This process creates an encrypted file that is stored locally on your device or in a location of your choosing (e.g., your personal cloud storage). You are solely responsible for the security of your encryption password. We do not have access to your encryption password or the data contained within your backup files, and we do not automatically collect, store, or transmit this backup data.</p>
<p><b>Do we collect any information from third parties?</b> We do not collect any
information from third parties.</p>
<p><b>How do we process your information?</b> We process your information to
provide, improve, and administer our Services, communicate with you, for
security and fraud prevention, and to comply with law. We may also
process your information for other purposes with your consent. We process
your information only when we have a valid legal reason to do so. Learn
more about how we process your information.</p>
<p><b>In what situations and with which parties do we share personal
information?</b> We may share information in specific situations and with
specific third parties. Learn more about when and with whom we share
your personal information.</p>
<p><b>How do we keep your information safe?</b> We have adequate
organizational and technical processes and procedures in place to protect
your personal information. However, no electronic transmission over the
internet or information storage technology can be guaranteed to be 100%
secure, so we cannot promise or guarantee that hackers, cybercriminals, or
other unauthorized third parties will not be able to defeat our security and
improperly collect, access, steal, or modify your information. Learn more
about how we keep your information safe.</p>
<p><b>What are your rights?</b> Depending on where you are located
geographically, the applicable privacy law may mean you have certain
rights regarding your personal information. Learn more about your privacy
rights.</p>
<p><b>How do you exercise your rights?</b> The easiest way to exercise your
rights is by visiting https://blockguard.app/#support, or by contacting us.
We will consider and act upon any request in accordance with applicable
data protection laws.</p>
<p>Want to learn more about what we do with any information we
collect? Review the Privacy Notice in full.</p>

<h2>TABLE OF CONTENTS</h2>
<ul>
    <li>1. WHAT INFORMATION DO WE COLLECT?</li>
    <li>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
    <li>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
        PERSONAL INFORMATION?</li>
    <li>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
        INFORMATION?</li>
    <li>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
    <li>6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
    <li>7. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
    <li>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
    <li>9. DO WE COLLECT INFORMATION FROM MINORS?</li>
    <li>10. WHAT ARE YOUR PRIVACY RIGHTS?</li>
    <li>11. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
    <li>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
        RIGHTS?</li>
    <li>13. DO WE MAKE UPDATES TO THIS NOTICE?</li>
    <li>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
    <li>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
        COLLECT FROM YOU?</li>
</ul>

<h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
<h3>Personal information you disclose to us</h3>
<p>In Short: We collect personal information that you provide to us.</p>
<p>We collect personal information that you voluntarily provide to us when you
express an interest in obtaining information about us or our products and
Services, when you participate in activities on the Services, or otherwise
when you contact us.</p>
<p><b>Sensitive Information.</b> We do not process sensitive information.</p>
<p><b>Application Data.</b> If you use our application(s), we also may collect the
following information if you choose to provide us with access or permission:</p>
<ul>
    <li><b>Mobile Device Access.</b> We may request access or permission to
        certain features from your mobile device, including your mobile
        device's contacts, sms messages, microphone, call-related features:
        phone state (to read call status) making and answering phone calls
        reading and writing call logs modifying phone state managing its own
        calls processing outgoing calls binding to the call screening service,
        messaging features: sending, receiving, broadcasting, reading, and
        writing sms messages binding to the notification listener service (for
        sms blocking), other features: accessing contacts posting
        notifications modifying audio settings vibration control accessing
        notification policy, and other features. If you wish to change our
        access or permissions, you may do so in your device's settings.</li>
    <li><b>Push Notifications.</b> We may request to send you push notifications
        regarding your account or certain features of the application(s). If
        you wish to opt out from receiving these types of communications,
        you may turn them off in your device's settings.</li>
</ul>
<p>This information is primarily needed to maintain the security and operation
of our application(s), for troubleshooting, and for our internal analytics and
reporting purposes.</p>
<p>All personal information that you provide to us must be true, complete, and
accurate, and you must notify us of any changes to such personal
information.</p>

<h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
<p>In Short: We process your information to provide, improve, and administer
our Services, communicate with you, for security and fraud prevention, and
to comply with law. We process the personal information for the following
purposes listed below. We may also process your information for other
purposes only with your prior explicit consent.</p>
<p>We process your personal information for a variety of reasons,
depending on how you interact with our Services, including:</p>
<ul>
    <li>To save or protect an individual's vital interest. We may process
        your information when necessary to save or protect an individual’s
        vital interest, such as to prevent harm.</li>
</ul>

<h2>3. WHAT LEGAL BASES DO WE RELY ON TO
PROCESS YOUR INFORMATION?</h2>
<p>In Short: We only process your personal information when we believe it is
necessary and we have a valid legal reason (i.e., legal basis) to do so
under applicable law, like with your consent, to comply with laws, to provide
you with services to enter into or fulfill our contractual obligations, to protect
your rights, or to fulfill our legitimate business interests.</p>

<h3>If you are located in the EU or UK, this section applies to you.</h3>
<p>The General Data Protection Regulation (GDPR) and UK GDPR require us
to explain the valid legal bases we rely on in order to process your personal
information. As such, we may rely on the following legal bases to process
your personal information:</p>
<ul>
    <li><b>Consent.</b> We may process your information if you have given us
        permission (i.e., consent) to use your personal information for a
        specific purpose. You can withdraw your consent at any time. Learn
        more about withdrawing your consent.</li>
    <li><b>Legal Obligations.</b> We may process your information where we
        believe it is necessary for compliance with our legal obligations, such
        as to cooperate with a law enforcement body or regulatory agency,
        exercise or defend our legal rights, or disclose your information as
        evidence in litigation in which we are involved.</li>
    <li><b>Vital Interests.</b> We may process your information where we believe
        it is necessary to protect your vital interests or the vital interests of a
        third party, such as situations involving potential threats to the safety
        of any person.</li>
</ul>

<h3>If you are located in Canada, this section applies to you.</h3>
<p>We may process your information if you have given us specific permission
(i.e., express consent) to use your personal information for a specific
purpose, or in situations where your permission can be inferred (i.e.,
implied consent). You can withdraw your consent at any time.</p>
<p>In some exceptional cases, we may be legally permitted under applicable
law to process your information without your consent, including, for
example:</p>
<ul>
    <li>If collection is clearly in the interests of an individual and consent
        cannot be obtained in a timely way</li>
    <li>For investigations and fraud detection and prevention</li>
    <li>For business transactions provided certain conditions are met</li>
    <li>If it is contained in a witness statement and the collection is
        necessary to assess, process, or settle an insurance claim</li>
    <li>For identifying injured, ill, or deceased persons and communicating
        with next of kin</li>
    <li>If we have reasonable grounds to believe an individual has been, is,
        or may be victim of financial abuse</li>
    <li>If it is reasonable to expect collection and use with consent would
        compromise the availability or the accuracy of the information and
        the collection is reasonable for purposes related to investigating a
        breach of an agreement or a contravention of the laws of Canada or
        a province</li>
    <li>If disclosure is required to comply with a subpoena, warrant, court
        order, or rules of the court relating to the production of records</li>
    <li>If it was produced by an individual in the course of their employment,
        business, or profession and the collection is consistent with the
        purposes for which the information was produced</li>
    <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
    <li>If the information is publicly available and is specified by the
        regulations</li>
    <li>We may disclose de-identified information for approved research or
        statistics projects, subject to ethics oversight and confidentiality
        commitments</li>
</ul>

<h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR
PERSONAL INFORMATION?</h2>
<p>In Short: We may share information in specific situations described in this
section and/or with the following third parties.</p>
<p>We may need to share your personal information in the following situations:</p>
<ul>
    <li><b>Business Transfers.</b> We may share or transfer your information in
        connection with, or during negotiations of, any merger, sale of
        company assets, financing, or acquisition of all or a portion of our
        business to another company.</li>
</ul>

<h2>5. WHAT IS OUR STANCE ON THIRD-PARTY
WEBSITES?</h2>
<p>In Short: We are not responsible for the safety of any information that you
share with third parties that we may link to or who advertise on our
Services, but are not affiliated with, our Services.</p>
<p>The Services may link to third-party websites, online services, or mobile
applications and/or contain advertisements from third parties that are not
affiliated with us and which may link to other websites, services, or
applications. Accordingly, we do not make any guarantee regarding any
such third parties, and we will not be liable for any loss or damage caused
by the use of such third-party websites, services, or applications. The
inclusion of a link towards a third-party website, service, or application does
not imply an endorsement by us. We cannot guarantee the safety and
privacy of data you provide to any third-party websites. Any data collected
by third parties is not covered by this Privacy Notice. We are not
responsible for the content or privacy and security practices and policies of
any third parties, including other websites, services, or applications that
may be linked to or from the Services. You should review the policies of
such third parties and contact them directly to respond to your questions.</p>

<h2>6. DO WE USE COOKIES AND OTHER TRACKING
TECHNOLOGIES?</h2>
<p>In Short: We may use cookies and other tracking technologies to collect
and store your information.</p>
<p>We may use cookies and similar tracking technologies (like web beacons
and pixels) to gather information when you interact with our Services.
Some online tracking technologies help us maintain the security of our
Services, prevent crashes, fix bugs, save your preferences, and assist with
basic site functions.</p>
<p>We also permit third parties and service providers to use online tracking
technologies on our Services for analytics and advertising, including to help
manage and display advertisements, to tailor advertisements to your
interests, or to send abandoned shopping cart reminders (depending on
your communication preferences). The third parties and service providers
use their technology to provide advertising about products and services
tailored to your interests which may appear either on our Services or on
other websites.</p>
<p>To the extent these online tracking technologies are deemed to be a
"sale"/"sharing" (which includes targeted advertising, as defined under the
applicable laws) under applicable US state laws, you can opt out of these
online tracking technologies by submitting a request as described below
under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC
PRIVACY RIGHTS?"</p>
<p>Specific information about how we use such technologies and how you can
refuse certain cookies is set out in our Cookie Notice.</p>

<h3>Google Analytics</h3>
<p>We may share your information with Google Analytics to track and analyze
the use of the Services. The Google Analytics Advertising Features that we
may use include: Remarketing with Google Analytics, Google Display
Network Impressions Reporting and Google Analytics Demographics and
Interests Reporting. To opt out of being tracked by Google Analytics across
the Services, visit https://tools.google.com/dlpage/gaoptout. You can opt
out of Google Analytics Advertising Features through Ads Settings and Ad
Settings for mobile apps. Other opt out means include
http://optout.networkadvertising.org/ and
http://www.networkadvertising.org/mobile-choice. For more information on
the privacy practices of Google, please visit the Google Privacy & Terms
page.</p>

<h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
<p>In Short: We keep your information for as long as necessary to fulfill the
purposes outlined in this Privacy Notice unless otherwise required by law.</p>
<p>We will only keep your personal information for as long as it is necessary
for the purposes set out in this Privacy Notice, unless a longer retention
period is required or permitted by law (such as tax, accounting, or other
legal requirements).</p>
<p>When we have no ongoing legitimate business need to process your
personal information, we will either delete or anonymize such information,
or, if this is not possible (for example, because your personal information
has been stored in backup archives), then we will securely store your
personal information and isolate it from any further processing until deletion
is possible.</p>

<h2>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
<p>In Short: We aim to protect your personal information through a system of
organizational and technical security measures.</p>
<p>We have implemented appropriate and reasonable technical and
organizational security measures designed to protect the security of any
personal information we process. However, despite our safeguards and
efforts to secure your information, no electronic transmission over the
Internet or information storage technology can be guaranteed to be 100%
secure, so we cannot promise or guarantee that hackers, cybercriminals, or
other unauthorized third parties will not be able to defeat our security and
improperly collect, access, steal, or modify your information. Although we
will do our best to protect your personal information, transmission of
personal information to and from our Services is at your own risk. You
should only access the Services within a secure environment.</p>

<h2>9. DO WE COLLECT INFORMATION FROM
MINORS?</h2>
<p>In Short: We do not knowingly collect data from or market to children
under 18 years of age or the equivalent age as specified by law in your
jurisdiction.</p>
<p>We do not knowingly collect, solicit data from, or market to children under
18 years of age or the equivalent age as specified by law in your
jurisdiction, nor do we knowingly sell such personal information. By using
the Services, you represent that you are at least 18 or the equivalent age
as specified by law in your jurisdiction or that you are the parent or
guardian of such a minor and consent to such minor dependent’s use of
the Services. If we learn that personal information from users less than 18
years of age or the equivalent age as specified by law in your jurisdiction
has been collected, we will deactivate the account and take reasonable
measures to promptly delete such data from our records. If you become
aware of any data we may have collected from children under age 18 or
the equivalent age as specified by law in your jurisdiction, please contact
us at privacy@blockguard.app.</p>

<h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
<p>In Short: Depending on your state of residence in the US or in some
regions, such as the European Economic Area (EEA), United Kingdom
(UK), Switzerland, and Canada, you have rights that allow you greater
access to and control over your personal information. You may review,
change, or terminate your account at any time, depending on your country,
province, or state of residence.</p>
<p>In some regions (like the EEA, UK, Switzerland, and Canada), you have
certain rights under applicable data protection laws. These may include the
right (i) to request access and obtain a copy of your personal information,
(ii) to request rectification or erasure; (iii) to restrict the processing of your
personal information; (iv) if applicable, to data portability; and (v) not to be
subject to automated decision-making. If a decision that produces legal or
similarly significant effects is made solely by automated means, we will
inform you, explain the main factors, and offer a simple way to request
human review. In certain circumstances, you may also have the right to
object to the processing of your personal information. You can make such a
request by contacting us by using the contact details provided in the
section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
We will consider and act upon any request in accordance with applicable
data protection laws.</p>
<p>If you are located in the EEA or UK and you believe we are unlawfully
processing your personal information, you also have the right to complain
to your Member State data protection authority or UK data protection
authority.</p>
<p>If you are located in Switzerland, you may contact the Federal Data
Protection and Information Commissioner.</p>
<p><b>Withdrawing your consent:</b> If we are relying on your consent to process
your personal information, which may be express and/or implied consent
depending on the applicable law, you have the right to withdraw your
consent at any time. You can withdraw your consent at any time by
contacting us by using the contact details provided in the section "HOW
CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>
<p>However, please note that this will not affect the lawfulness of the
processing before its withdrawal nor, when applicable law allows, will it
affect the processing of your personal information conducted in reliance on
lawful processing grounds other than consent.</p>
<p>If you have questions or comments about your privacy rights, you may
email us at privacy@blockguard.app.</p>

<h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
<p>Most web browsers and some mobile operating systems and mobile
applications include a Do-Not-Track ("DNT") feature or setting you can
activate to signal your privacy preference not to have data about your
online Browse activities monitored and collected. At this stage, no uniform
technology standard for recognizing and implementing DNT signals has
been finalized. As such, we do not currently respond to DNT browser
signals or any other mechanism that automatically communicates your
choice not to be tracked online. If a standard for online tracking is adopted
that we must follow in the future, we will inform you about that practice in a
revised version of this Privacy Notice.</p>
<p>California law requires us to let you know how we respond to web browser
DNT signals. Because there currently is not an industry or legal standard
for recognizing or honoring DNT signals, we do not respond to them at this
time.</p>

<h2>12. DO UNITED STATES RESIDENTS HAVE
SPECIFIC PRIVACY RIGHTS?</h2>
<p>In Short: If you are a resident of California, Colorado, Connecticut,
Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota,
Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island,
Tennessee, Texas, Utah, or Virginia, you may have the right to request
access to and receive details about the personal information we maintain
about you and how we have processed it, correct inaccuracies, get a copy
of, or delete your personal information. You may also have the right to
withdraw your consent to our processing of your personal information.
These rights may be limited in some circumstances by applicable law. More
information is provided below.</p>

<h3>Categories of Personal Information We Collect</h3>
<p>The table below shows the categories of personal information we have
collected in the past twelve (12) months. The table includes illustrative
examples of each category and does not reflect the personal information
we collect from you. For a comprehensive inventory of all personal
information we process, please refer to the section "WHAT INFORMATION
DO WE COLLECT?"</p>
<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Examples</th>
            <th>Collected</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>A. Identifiers</td>
            <td>Contact details, such as real name,
                alias, postal address, telephone or
                mobile contact number, unique
                personal identifier, online identifier,
                Internet Protocol address, email
                address, and account name</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>B. Personal information
                as defined in the
                California Customer
                Records statute</td>
            <td>Name, contact information,
                education, employment, employment
                history, and financial information</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>C. Protected
                classification
                characteristics under
                state or federal law</td>
            <td>Gender, age, date of birth, race and
                ethnicity, national origin, marital
                status, and other demographic data</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>D. Commercial
                information</td>
            <td>Transaction information, purchase
                history, financial details, and payment
                information</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>E. Biometric information</td>
            <td>Fingerprints and voiceprints</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>F. Internet or other
                similar network activity</td>
            <td>Browse history, search history,
                online behavior, interest data, and
                interactions with our and other
                websites, applications, systems, and
                advertisements</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>G. Geolocation data</td>
            <td>Device location</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>H. Audio, electronic,
                sensory, or similar
                information</td>
            <td>Images and audio, video or call
                recordings created in connection with
                our business activities</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>I. Professional or
                employment-related
                information</td>
            <td>Business contact details in order to
                provide you our Services at a
                business level or job title, work
                history, and professional
                qualifications if you apply for a job
                with us</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>J. Education Information</td>
            <td>Student records and directory
                information</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>K. Inferences drawn
                from collected personal
                information</td>
            <td>Inferences drawn from any of the
                collected personal information listed
                above to create a profile or summary
                about, for example, an individual’s
                preferences and characteristics</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>L. Sensitive personal
                Information</td>
            <td></td>
            <td>NO</td>
        </tr>
    </tbody>
</table>
<p>We may also collect other personal information outside of these categories
through instances where you interact with us in person, online, or by phone
or mail in the context of:</p>
<ul>
    <li>Receiving help through our customer support channels;</li>
    <li>Participation in customer surveys or contests; and</li>
    <li>Facilitation in the delivery of our Services and to respond to your
        inquiries.</li>
</ul>
<p>We will use and retain the collected personal information as needed to
provide the Services or for:</p>
<ul>
    <li>Category H - No</li>
</ul>

<h3>Sources of Personal Information</h3>
<p>Learn more about the sources of personal information we collect in "WHAT
INFORMATION DO WE COLLECT?"</p>

<h3>How We Use and Share Personal Information</h3>
<p>Learn more about how we use your personal information in the section,
"HOW DO WE PROCESS YOUR INFORMATION?"</p>

<h3>Will your information be shared with anyone else?</h3>
<p>We may disclose your personal information with our service providers
pursuant to a written contract between us and each service provider. Learn
more about how we disclose personal information to in the section, "WHEN
AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</p>
<p>We may use your personal information for our own business purposes,
such as for undertaking internal research for technological development
and demonstration. This is not considered to be "selling" of your personal
information.</p>
<p>We have not disclosed, sold, or shared any personal information to third
parties for a business or commercial purpose in the preceding twelve (12)
months. We will not sell or share personal information in the future
belonging to website visitors, users, and other consumers.</p>

<h3>Your Rights</h3>
<p>You have rights under certain US state data protection laws. However,
these rights are not absolute, and in certain cases, we may decline your
request as permitted by law. These rights include:</p>
<ul>
    <li>Right to know whether or not we are processing your personal data</li>
    <li>Right to access your personal data</li>
    <li>Right to correct inaccuracies in your personal data</li>
    <li>Right to request the deletion of your personal data</li>
    <li>Right to obtain a copy of the personal data you previously shared
        with us</li>
    <li>Right to non-discrimination for exercising your rights</li>
    <li>Right to opt out of the processing of your personal data if it is used
        for targeted advertising (or sharing as defined under California’s
        privacy law), the sale of personal data, or profiling in furtherance of
        decisions that produce legal or similarly significant effects
        ("profiling")</li>
</ul>
<p>Depending upon the state where you live, you may also have the following
rights:</p>
<ul>
    <li>Right to access the categories of personal data being processed (as
        permitted by applicable law, including the privacy law in Minnesota)</li>
    <li>Right to obtain a list of the categories of third parties to which we
        have disclosed personal data (as permitted by applicable law,
        including the privacy law in California, Delaware, and Maryland)</li>
    <li>Right to obtain a list of specific third parties to which we have
        disclosed personal data (as permitted by applicable law, including
        the privacy law in Minnesota and Oregon)</li>
    <li>Right to review, understand, question, and correct how personal data
        has been profiled (as permitted by applicable law, including the
        privacy law in Minnesota)</li>
    <li>Right to limit use and disclosure of sensitive personal data (as
        permitted by applicable law, including the privacy law in California)</li>
    <li>Right to opt out of the collection of sensitive data and personal data
        collected through the operation of a voice or facial recognition
        feature (as permitted by applicable law, including the privacy law in
        Florida)</li>
</ul>

<h3>How to Exercise Your Rights</h3>
<p>To exercise these rights, you can contact us by visiting
<a href="https://blockguard.app/#support" target="_blank" rel="noopener noreferrer">https://blockguard.app/#support</a>, by emailing us at
<a href="mailto:privacy@blockguard.app">privacy@blockguard.app</a>, by visiting <a href="https://blockguard.app/#support" target="_blank" rel="noopener noreferrer">https://blockguard.app/#support</a>, or by
referring to the contact details at the bottom of this document.</p>
<p>Under certain US state data protection laws, you can designate an
authorized agent to make a request on your behalf. We may deny a
request from an authorized agent that does not submit proof that they have
been validly authorized to act on your behalf in accordance with applicable
laws.</p>

<h3>Request Verification</h3>
<p>Upon receiving your request, we will need to verify your identity to
determine you are the same person about whom we have the information
in our system. We will only use personal information provided in your
request to verify your identity or authority to make the request. However, if
we cannot verify your identity from the information already maintained by
us, we may request that you provide additional information for the purposes
of verifying your identity and for security or fraud-prevention purposes.</p>
<p>If you submit the request through an authorized agent, we may need to
collect additional information to verify your identity before processing your
request and the agent will need to provide a written and signed permission
from you to submit such request on your behalf.</p>

<h3>Appeals</h3>
<p>Under certain US state data protection laws, if we decline to take action
regarding your request, you may appeal our decision by emailing us at
privacy@blockguard.app. We will inform you in writing of any action taken
or not taken in response to the appeal, including a written explanation of
the reasons for the decisions. If your appeal is denied, you may submit a
complaint to your state attorney general.</p>

<h3>California "Shine The Light" Law</h3>
<p>California Civil Code Section 1798.83, also known as the "Shine The Light"
law, permits our users who are California residents to request and obtain
from us, once a year and free of charge, information about categories of
personal information (if any) we disclosed to third parties for direct
marketing purposes and the names and addresses of all third parties with
which we shared personal information in the immediately preceding
calendar year. If you are a California resident and would like to make such
a request, please submit your request in writing to us by using the contact
details provided in the section "HOW CAN YOU CONTACT US ABOUT
THIS NOTICE?"</p>

<h2>13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
<p>In Short: Yes, we will update this notice as necessary to stay compliant
with relevant laws.</p>
<p>We may update this Privacy Notice from time to time. The updated version
will be indicated by an updated "Revised" date at the top of this Privacy
Notice. If we make material changes to this Privacy Notice, we may notify
you either by prominently posting a notice of such changes or by directly
sending you a notification. We encourage you to review this Privacy Notice
frequently to be informed of how we are protecting your information.</p>

<h2>14. HOW CAN YOU CONTACT US ABOUT THIS
NOTICE?</h2>
<p>If you have questions or comments about this notice, you may email us at
<a href="mailto:privacy@blockguard.app">privacy@blockguard.app</a> or contact us by post at:</p>
<p>RadStorm Technologies<br>
30 N Gould St Ste N<br>
Sheridan, WY 82801<br>
United States</p>

<h2>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE
THE DATA WE COLLECT FROM YOU?</h2>
<p>Based on the applicable laws of your country or state of residence in the
US, you may have the right to request access to the personal information
we collect from you, details about how we have processed it, correct
inaccuracies, or delete your personal information. You may also have the
right to withdraw your consent to our processing of your personal
information. These rights may be limited in some circumstances by
applicable law. To request to review, update, or delete your personal
information please visit <a href="https://blockguard.app/#support" target="_blank" rel="noopener noreferrer">https://blockguard.app/#support</a></p>
`;

const termsFullText = `
    <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p>Ownership of Apps; Agreement to Terms of Use</p>
    <p>These Terms and Conditions of Use (the “Terms of Use”) apply to all associated applications owned or
    operated by RadStorm Technologies LLC, and their subsidiaries and affiliates (collectively, the
    “Company”) including, but not limited to, the Company’s webapp(s) and downloadable applications
    (collectively, the “Apps”). The Apps are the property of the Company and its licensors.</p>
    <p>YOU ACKNOWLEDGE AND AGREE THAT BY DOWNLOADING, Browse, OR OTHERWISE USING THE
    CONTENT, SERVICES AND TOOLS OFFERED BY THE APPS, YOU HAVE AGREED, WITHOUT LIMITATION OR
    QUALIFICATION, TO BE BOUND BY THESE TERMS OF USE AND ANY ADDITIONAL TERMS THAT MAY
    APPLY. If you do not agree with these Terms of Use, please do not download or use the Apps.</p>
    <p>The Company reserves the right, at its sole discretion, to change, modify, add or remove portions of
    these Terms of Use, at any time, consistent with applicable law. You agree to be bound by this
    Agreement and any amendments made thereto in the future so long as you utilize the Apps. It is your
    responsibility to check these Terms of Use periodically for changes. The Company will post a notification
    on the Apps or otherwise provide notice to you if these Terms of Use materially change. Such changes,
    whether in the form of modifications, additions, or deletions, shall become effective when specified in
    the relevant notification. If you do not agree to the changes, uninstall and do not continue to use the
    Apps after the date they become effective. Your continued use of the Apps following the posting of
    changes will mean that you accept and agree to the changes. As long as you comply with these Terms of
    Use, the Company grants you a personal, non-exclusive, non-transferable, limited privilege to download,
    browse, and use the Apps.</p>
    <h2>Content & Intellectual Property</h2>
    <p>For purposes of this Agreement, “Intellectual Property” shall include, but may not be limited to: artwork,
    layouts, formulae, techniques, research results and reports, procedures, marketing information and
    plans, business plans and strategies, know-how and all other discoveries, inventions, improvements, and
    methods valuable to the business of the Company, articles, text, hidden text within source code,
    graphics, user interfaces, visual interfaces, photographs, videos, sounds, and computer code, as well as
    the design, structure, selection, coordination, expression, arrangement, and “look and feel” of the Apps
    content, together with all other protectable content such as trademarks, copyrights, patents, and trade
    secrets, whether registered, pending, or registrable in the U.S. or throughout the world (collectively,
    “Content”).</p>
    <p>All Intellectual Property appearing on the Apps and referenced herein is the property of its respective
    owners, including, in most cases, the Company and/or its affiliates. The limited right of access granted to
    you under this Agreement does not in any way confer any rights to use, display, reproduce, sell, or
    otherwise utilize the Intellectual Property, and nothing contained on the Apps should be construed as
    granting you any right or license in the Intellectual Property.</p>
    <p>When accessing the Apps, you agree to obey the law and to respect the intellectual property rights of
    the Company and third parties. You agree that you shall be solely responsible for any violations of any
    applicable laws and for any infringement of third-party rights caused by your actions, including those
    actions take on the Apps.</p>
    <p>All materials contained or distributed on the Apps (the “Materials”) are owned by the Company or its
    affiliates. You must not reproduce, modify, copy, publish, transmit, prepare derivative works based
    upon, distribute, perform or display the Materials without first obtaining the written permission of the
    Company and, if applicable, any other intellectual property owner. You acknowledge that you do not
    acquire any ownership rights by downloading, printing or otherwise accessing the Materials. Materials
    may not be used in any unauthorized manner.</p>
    <h2>2. Your Use of the Apps; Restrictions</h2>
    <p>You may browse the Apps and all associated content solely for your personal use and enjoyment. Except
    as expressly provided in these Terms of Use, no part of the Apps may be copied, reproduced,
    republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, sold, distributed, or
    otherwise exploited in any way (including, but not limited to, by “mirroring”) to any other computer,
    server, webapps or other medium for publication or distribution or for any commercial enterprise,
    without the Company’s express prior written consent.</p>
    <p>You may not use any “deep-link”, “page-scrape”, “robot”, “spider” or other automatic device, program,
    algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or
    monitor any portion of the Apps or their hosted content, or in any way reproduce or circumvent the
    navigational structure or presentation of the Apps, to obtain or attempt to obtain any materials,
    documents or information through any means not purposely made available to you through the Apps.</p>
    <p>You may not attempt to gain unauthorized access to any portion or feature of the Apps, or any other
    systems or networks connected to the Apps or to any server of the Company, or to any of the services
    offered on or through the Apps, by hacking, password “mining” or any other illegitimate means.</p>
    <p>You may not probe, scan or test the vulnerability of the Apps or any network connected to the Apps, nor
    breach the security or authentication measures on the Apps or any network connected to the Apps. You
    may not modify, reverse engineer, decompile, disassemble, reduce or attempt to reduce to a human-perceivable form any of the source code used in providing this Apps, trace or seek to trace any
    information on any other user of or visitor to the Apps, or any other customer of the Company, including
    any Company account not owned by you, to its source, or exploit the Apps or any service or information
    made available or offered by or through the Apps, in any way where the purpose is to reveal any
    information, including but not limited to PII , other than your own information, as provided for by the
    Apps.</p>
    <p>Accounts may not be shared and may only be used by one individual per account.</p>
    <p>You agree that you will not take any action that imposes an unreasonable or disproportionately large
    load on the infrastructure of the Apps or the Company’s systems or networks, or any systems or
    networks connected to the Apps or to the Company.</p>
    <p>You agree not to use any device, software or routine to interfere or attempt to interfere with the proper
    working of the Apps or any transaction being conducted on the Apps, or with any other person’s use of
    the Apps, including, but not limited to, by interfering or attempting to interfere with service to any
    visitor, host, or network, such as by means of submitting a virus or any other harmful component to this
    Apps, or by overloading, “flooding,” “spamming,” “mail bombing,” or “crashing” this Apps. In addition,
    you agree not to use this Apps to send unsolicited e-mail, including, without limitation, promotions, or
    advertisements for products or services. You also agree not to frame or utilize framing techniques to
    enclose any aspect of this Apps, such as any trademark, logo, or other proprietary information
    (including, but not limited to, images, text, page layout, or form), or to use any metatags or any other
    “hidden text” utilizing the Company’s name or trademarks without the Company’s express written
    consent.</p>
    <p>You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any
    message or transmittal you send to the Company on or through the Apps or any service offered on or
    through the Apps. You may not pretend that you are, or that you represent, someone else, or
    impersonate any other individual or entity.</p>
    <p>You may not use the Apps, including, but not limited to, any Content or Materials contained therein, for
    any purpose that is unlawful or prohibited by these Terms of Use, or to solicit the performance of any
    illegal activity or other activity which infringes the rights of the Company or others. Without limiting the
    generality of any terms or conditions set forth herein, in using the Apps, you may not transmit or solicit:
    (a) any unlawful, threatening, abusive, libelous, defamatory, obscene, vulgar, pornographic, profane or
    indecent information of any kind, including images and language; (b) any message that constitutes, or
    encourages or incites conduct that would constitute, a criminal offense or gives rise to civil liability; or
    (c) any information, software or other material which violates or infringes upon the rights of others,
    including material which is an invasion of privacy or publicity rights or which is protected by copyright,
    trademark or other proprietary right, or derivative works with respect thereto, without first obtaining
    permission from the owner or right holder. Any violation of the Company’s system or network security
    may subject you to civil and/or criminal liability.</p>
    <h2>3. Feedback & User Content</h2>
    <p>The Apps do not collect any personally identifiable information, such as your name, e-mail address,
    physical address, phone number(s), and credit card information (collectively, “PII”) that you may provide
    to the Company, or any on-device data, all of which is subject to the privacy standards set forth in the
    Company’s Privacy Policy.</p>
    <p>To access parts of this Apps or some of the resources it offers, you may be asked to provide certain
    information, including, but not limited to, PII. It is a condition of your use of the Apps that all the
    information you provide on this Apps, including, but not limited to, PII, is correct, current and complete.</p>
    <p>Separate and apart from information collection, the Apps may need to access user data, including but
    not necessarily limited to: call logs, contact lists, SMS content, user-defined block/whitelist rules, DND
    settings. This access is used solely for the Apps’ functionality, subject to user permissions, and none of
    this information is collected apart from on-device functions and local storage and encryption.</p>
    <h2>4. Purchases; Other Terms and Conditions</h2>
    <p>Additional terms and conditions may apply to purchases of goods or services and to specific portions or
    features of the Apps, including, but not limited to, contests, promotions or other similar features (as
    further described in Section 5 below), all of which terms are made a part of these Terms of Use by this
    reference. You agree to abide by such other terms and conditions, including where applicable
    representing that you are of sufficient legal age to use or participate in such service or feature. If there is
    a conflict between these Terms of Use and the terms posted for or applicable to a specific portion of the
    Apps or for any service offered on or through the Apps, the latter terms shall control with respect to
    your use of that portion of the Apps or the specific service. The Company may make changes to any
    products or services offered on the Apps, or to the applicable prices for any such products or services, at
    any time, in accordance with the notice procedures set forth above.</p>
    <p>You may cancel any subscription at any time – however, there are no refunds for cancellation. Payments
    are nonrefundable and there are no refunds or credits for partially used billing periods. Unfortunately,
    we are unable to refund subscriptions via iOS or Google Play subscriptions. All such subscriptions must
    be cancelled or changed directly through the applicable platform.</p>
    <p>You can cancel your subscription at any time, and you will continue to have access to the Service for the
    remainder of your applicable billing cycle. If you cancel your subscription, your subscription will
    automatically end at the end of your current billing period. If you signed up using your account with a
    third party as a Payment Method and wish to cancel your subscription, you may need to do so through
    that third party (such as Apple or Google) by visiting your account with the applicable third party and
    unsubscribing through that third party.</p>
    <p>Your subscription may begin with a free trial. The duration of the free trial period of your subscription
    will be specified during checkout and is intended to allow first-time subscribers to try our Services. Trials
    require at least one valid Payment Method associated with your account. We will charge the
    subscription fee for your next billing cycle to your Payment Method at the end of the free trial period
    and your subscription will automatically start unless you cancel your prior to the end of the free trial
    period. Once a charge is made, there is no refund available and you will need to follow the cancellation
    process to avoid being charged at the completion of your current billing period. It is the responsibility of
    the member to keep track of the account expiration date and cancel prior to renewal.</p>
    <h2>5. Sweepstakes, Contests, and Promotions</h2>
    <p>Notwithstanding the foregoing, ownership and use of all User Content, Feedback, and PII submitted in
    connection with a sweepstakes, contest, giveaway or other promotion (“Promotion”), shall be subject to
    the applicable Promotion’s “Official Rules” or other terms of service. If you participate in a Promotion,
    such terms of service, may, for example, permit the Company to contact you to verify your eligibility, use
    your physical address for the purposes of prize fulfillment, share your PII with third parties providing
    services in connection with such Promotion or for purposes of prize fulfillment, and/or use other
    information submitted with your entry for future marketing, such as to notify you of a product or
    subsequent Promotion that we think may be of interest to you. If you no longer wish to receive
    information about products or Promotions, you may opt out of receiving further information by clicking
    on the “Unsubscribe” link included in such e-mails. Please also note that if you win a Promotion, some of
    your PII may be disclosed on a winners list as required by law.</p>
    <h2>6. Privacy</h2>
    <p>The Company’s Privacy Policy applies to use of this Apps, and its terms are made a part of these Terms
    of Use by this reference. Additionally, by using the Apps, you acknowledge and agree that Internet
    transmissions are never completely private or secure. You understand that any message or information
    you send to the Apps may be read or intercepted by others, even if there is a special notice that a
    particular transmission (for example, credit card information) is encrypted.</p>
    <h2>7. Third-Party Content, Links and Services</h2>
    <p>The Apps may display content or tools provided by third parties, links to third-party web pages, or both,
    including advertisements and solicitations to purchase products or services (collectively, “Third-Party
    Content”). In consideration for the convenience of the Company making this Third-Party Content
    available or accessible to you, you acknowledge that the Company has not reviewed all of the ThirdParty Content and that the Company is not responsible or liable for any such Third-Party Content,
    including, but not limited to, the privacy practices of third parties offering such Third-Party Content; you
    must contact the third party directly for any remedies that may be available to you. Please be aware
    that access to any Third-Party Content does not constitute an endorsement by the Company or any of its
    subsidiaries or affiliates of any third parties or Third-Party Content. Likewise, the Company is not the
    seller of products purchased from third parties offering Third-Party Content and is in no way responsible
    for shipping their products. The Company may from time to time engage certain affiliates or other third
    parties to provide all or part of the Services to you, and you hereby acknowledge and agree that such
    third party participation is acceptable.</p>
    <p>If the Company provides links to social media platforms, such as Facebook or Twitter, and you choose to
    visit those websites through the Company’s links, please note that the information you post, transmit, or
    otherwise make available on those websites may be viewed by the general public. The Company does
    not control User Content on social media homepages and is not responsible for any third-party use of
    your User Content that you have posted, transmitted, or otherwise made available there.</p>
    <h2>8. Monitoring; Copyright Complaints</h2>
    <p>You agree that the Company has the right, but not the obligation, to monitor, edit, disclose, refuse to
    post, or remove at any time, for any reason in the Company’s sole discretion, any Material and Content
    anywhere on the Apps. Notwithstanding this right, the Company does not and cannot review all
    Materials, User Content, PII, and Feedback submitted to the Apps. If notified, the Company may
    investigate an allegation that content transmitted to the Company is in violation of these Terms of Use,
    and the Company will determine whether to have the communication removed. However, the Company
    is under no obligation to remove content and assumes no responsibility or liability arising from or
    relating to any actions or content transmitted by or between you or any third party within or outside of
    the Apps, including, but not limited to, any error, defamation, libel, slander, omission, falsehood,
    obscenity, pornography, profanity, danger, or inaccuracy contained therein.</p>
    <p>The Company may, in appropriate circumstances and at its sole discretion, terminate the access of users
    who infringe the copyrights of others. If you believe that your work has been copied and is accessible on
    this Apps in a way that constitutes copyright infringement, you may notify the Company by providing the
    following information (as required by the Online Copyright Infringement Liability Limitation Act of the
    Digital Millennium Copyright Act, 17 U.S.C. sec. 512):</p>
    <ul>
        <li>a physical or electronic signature of the person authorized to act on behalf of the owner of an exclusive
        right that is allegedly infringed;</li>
        <li>identification of the copyrighted work claimed to have been infringed, or if multiple copyrighted works
        at this Apps are covered by a single notification, a representative list of such works at this Apps;</li>
        <li>identification of the material that is claimed to be infringing or to be the subject of infringing activity and
        that is to be removed or access to which is to be disabled, and information reasonably sufficient to
        permit the Company to locate the material;</li>
        <li>information reasonably sufficient to permit the Company to contact you, such as an address, telephone
        number, and if available, an e-mail address;</li>
        <li>a statement that you have a good faith belief that use of the material in the manner complained of is
        not authorized by you, your agent, or the law; and</li>
        <li>a statement that the information in the notification is accurate, and, under penalty of perjury, that you
        are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
    </ul>
    <p>Please send the written communication to the Company’s copyright agent by e-mail AND by U.S. Mail
    to:</p>
    <p>Mailing address: 30 N Gould St. Ste N, Sheridan, WY 82801<br>
    E-mail: <a href="mailto:support@radstormtech.com" class="text-blue-600 hover:underline dark:text-blue-400">support@radstormtech.com</a><br>
    E-mail Subject: “DMCA Request”</p>
    <h2>9. Disclaimers</h2>
    <p>THE COMPANY DOES NOT PROMISE THAT THE APPS OR ANY CONTENT, PRODUCT, SERVICE OR FEATURE
    OF THE APPS WILL BE AVAILABLE, ERROR-FREE, OR UNINTERRUPTED, OR THAT ANY DEFECTS WILL BE
    CORRECTED, OR THAT YOUR USE OF THE APPS WILL PROVIDE SPECIFIC RESULTS. THE APPS AND THEIR
    CONTENT ARE DELIVERED ON AN “AS-IS” AND “AS-AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY
    KIND. ALL INFORMATION PROVIDED ON THE APPS IS SUBJECT TO CHANGE WITHOUT NOTICE. THE
    COMPANY CANNOT ENSURE THAT THE APPS, INCLUDING, BUT NOT LIMITED TO, ANY FILES OR OTHER
    DATA YOU DOWNLOAD FROM THE APPS, WILL BE FREE OF VIRUSES OR CONTAMINATION OR
    DESTRUCTIVE FEATURES. THE COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
    INCLUDING, BUT NOT LIMITED TO, ANY WARRANTIES OF ACCURACY, NON-INFRINGEMENT,
    MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE COMPANY DISCLAIMS ANY AND ALL
    LIABILITY FOR THE ACTS, OMISSIONS AND CONDUCT OF ANY THIRD PARTIES IN CONNECTION WITH OR
    RELATED TO YOUR USE OF THE APPS AND/OR ANY SERVICES OF THE COMPANY. YOU ASSUME TOTAL
    RESPONSIBILITY FOR YOUR USE OF THE APPS AND ANY THIRD-PARTY CONTENT. YOUR SOLE REMEDY
    AGAINST THE COMPANY FOR DISSATISFACTION WITH THE APPS OR ANY CONTENT IS TO STOP USING
    THE APPS OR ANY SUCH CONTENT. THIS LIMITATION OF RELIEF IS A PART OF THE BARGAIN BETWEEN
    THE PARTIES.</p>
    <p>You understand that the Apps contains information but that this information and Content does not
    constitute “advice”, nor does it constitute any “recommendation” on whether or how to engage in
    activities relating to the subject matter. THE COMPANY ACCEPTS NO LIABILITY OR RESPONSIBILITY
    WHATSOEVER FOR ANY LOSS OR DAMAGE OF ANY KIND ARISING OUT OF THE USE OF ANY OF THE APPS,
    INCLUDING, BUT NOT LIMITED TO, ANY CONTENT OR MATERIAL FOUND THEREIN, OR AS A RESULT OF
    BETTING RISKS OR MONETARY INVESTMENTS. ANY ACTIVITY IS UNDERTAKEN AT YOUR OWN RISK.</p>
    <h2>10. Applicable Law and Venue; Dispute Resolution</h2>
    <p>By use of this Apps you irrevocably consent to the application of the laws of the Commonwealth of
    Wyoming, without regard to its conflicts of laws provisions, to govern any and all disputes with the
    Company related to these Terms of Use. Subject to the injunctive relief terms set forth herein, you also
    irrevocably consent to the exclusive venue of the courts of Wyoming or the U.S. District Court for the
    District of Wyoming. If you access the Apps from outside of the United States, you do so at your own risk
    and are responsible for compliance with the laws of your jurisdiction.</p>
    <p>Any dispute relating in any way to your visit to this Apps shall be submitted to confidential arbitration in
    Wyoming, except that, to the extent you have in any manner violated or threatened to violate the
    Company’s intellectual property rights, the Company may seek injunctive or other appropriate relief in
    any state or federal court, and you consent to jurisdiction and venue in such courts. Arbitration under
    these Terms of Use shall be conducted under the rules then prevailing of the American Arbitration
    Association in accordance with its Commercial Arbitration Rules and before a single arbitrator.</p>
    <p>Ultimately, the selected arbitrator must have expertise in the subject matter of the dispute. The
    expenses of the arbitration charged by the arbitrator shall be borne by the prevailing party or otherwise
    as appropriately allocated between the parties to the arbitration by the arbitrator in his or her
    discretion. However, in every other regard each party shall pay for and bear its own costs and legal fees,
    costs and expenses. The arbitration shall be completed within one hundred twenty (120) days of either
    giving notice or filing a demand to arbitrate with the American Arbitration Association (whichever shall
    first occur).</p>
    <p>The arbitrator’s award shall be binding and may be entered as a judgment in any court of competent
    jurisdiction. The testimony, evidence, ruling and all documentation regarding any arbitration shall be
    considered confidential information. Neither party may use, disclose, or divulge any such information
    unless otherwise required by law.</p>
    <p>To the fullest extent permitted by applicable law, no arbitration under these Terms of Use shall be
    joined to an arbitration involving any other party subject to these Terms of Use, whether through class
    arbitration proceedings or otherwise. You agree to an arbitration on an individual basis. In any dispute,
    NEITHER YOU NOR THE COMPANY WILL BE ENTITLED TO JOIN OR CONSOLIDATE CLAIMS BY OR AGAINST
    OTHER VISITORS IN COURT OR IN ARBITRATION OR OTHERWISE PARTICIPATE IN ANY CLAIM AS A CLASS
    REPRESENTATIVE, CLASS MEMBER OR IN A PRIVATE ATTORNEY GENERAL CAPACITY. The arbitral tribunal
    may not consolidate more than one (1) person’s claims, and may not otherwise preside over any form of
    a representative or class proceeding. The arbitral tribunal has no power to consider the enforceability of
    this class arbitration waiver and any challenge to the class arbitration waiver may only be raised in a
    court of competent jurisdiction.</p>
    <h2>11. User Responsibilities</h2>
    <p>Subject to all other terms herein, specifically Sections 9 and 13 related to disclaimers and limitations of
    Company liability, it is always your responsibility to configure and use the Apps in the proper manner
    and to educate yourself about App functionality before attempting to use the Apps. Some functions of
    the Apps require designation as the Default Handler, which can impact other hardware or software
    functionality. You bear the responsibility for the outcome, intended or not.</p>
    <p>You are responsible for remembering, maintaining, and storing your backup encryption password. The
    Company does not store your password and does not have a workaround to access your account or your
    encrypted data if your password is inaccessible. All backup files and data are stored locally on your
    device (or other chosen storage device); the Company does not store any files or data on Company
    servers or elsewhere.</p>
    <h2>12. User Age</h2>
    <p>THE APPS IS INTENDED FOR ADULTS AGES 18 AND OVER. USERS UNDER 18 YEARS OLD ARE PROHIBITED
    FROM USING THE APPS FOR ANY PURPOSE. BY USING THIS APPS, YOU REPRESENT THAT YOU ARE AT
    LEAST 18 YEARS OF AGE.</p>
    <h2>13. LIMITATION OF LIABILITY</h2>
    <p>UNDER NO CIRCUMSTANCES ARE THE COMPANY, ITS OFFICERS, DIRECTORS, AFFILIATES, OR LICENSORS
    LIABLE TO YOU FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DIRECT,
    INCIDENTAL, INDIRECT, PUNITIVE, EXEMPLARY, RELIANCE, OR CONSEQUENTIAL, OR SPECIAL DAMAGES
    WHETHER OR NOT FORESEEN, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA) ON
    ACCOUNT OF YOUR USE, MISUSE, OR RELIANCE ON THE INFORMATION AND SERVICES AVAILABLE ON
    THE APPS. THIS LIMITATION OF LIABILITY SHALL APPLY TO PREVENT RECOVERY OF DIRECT, INDIRECT,
    INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING FROM ANY
    CLAIM RELATING TO THESE TERMS OF USE OR THE SUBJECT MATTER HEREOF, WHETHER SUCH CLAIM IS
    BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY
    EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
    <p>The above limitation applies to your use, misuse, or reliance upon the Apps, including, without
    limitation, damages you may incur because of Third-Party Content advertised on, or linked to the Apps.</p>
    <p>Any cause of action or claim you may have with respect to this Apps must be commenced within one (1)
    year after the claim or cause of action arises.</p>
    <p>Some jurisdictions do not allow the exclusion of certain warranties, the shortening of the applicable
    statute of limitations, or the limitation or exclusion of liability for incidental or consequential damages.
    Accordingly, in certain jurisdictions, some of the above limitations may not apply to you; all other
    provisions of these Terms of Use shall remain in full force and effect.</p>
    <h2>14. Indemnity</h2>
    <p>You agree to defend, indemnify, and hold harmless the Company and its affiliates and their officers,
    directors, employees, consultants, agents, licensors, and suppliers from and against any and all claims,
    losses, expenses, liabilities, settlements, litigation, damages, and/or costs (including, but not limited to,
    fees, costs and other expenses of attorneys and expert witnesses) arising out of or related to: (i) your
    use of the Apps, including, but not limited to, any Materials or User Content, (ii) any violation of these
    Terms of Use or applicable law by you in connection with your use of the Apps, including, but not limited
    to, any Materials or User Content, (iii) any actual or alleged infringement by you, or any person
    accessing the Apps, including, but not limited to, any Materials or User Content, using your password or
    account identifier, of any intellectual property or privacy or other right of any third party, or (iv) any
    unauthorized use of password protected Materials or User Content utilizing your account information,
    whether or not known or authorized by you.</p>
    <p>The Company reserves the right, at its own expense, to assume the exclusive defense and control of any
    matter otherwise subject to indemnification by you at your expense, and you shall not in any event
    settle or otherwise dispose of any matter without the Company’s prior written consent.</p>
    <h2>15. Rights to Terminate Use</h2>
    <p>Upon termination of your account for any reason, the Company will retain your data in accordance with
    its Privacy Policy. Even if your account is terminated, be aware that these Terms of Use, to the extent
    any provisions by their nature will survive any expiration or termination of these Terms of Use, shall so
    survive.</p>
    <p>To the extent that any part of this Apps offers subscriptions to users, the Company reserves the right to
    cancel any such subscriptions at any time in its sole and absolute discretion, upon which time affected
    users shall be notified of such cancellation.</p>
    <p>You agree that the Company reserves the right, without prejudice to its other rights, to suspend or
    terminate your use of the Apps at any time where the Company has determined, in its sole discretion
    that the use of the Apps by you is, or was, in breach of these Terms of Use. ACCORDINGLY, IN ITS SOLE
    DISCRETION, IN ADDITION TO ANY OTHER RIGHTS OR REMEDIES AVAILABLE TO THE COMPANY AND
    WITHOUT ANY LIABILITY WHATSOEVER, THE COMPANY AT ANY TIME AND WITHOUT NOTICE MAY
    TERMINATE OR RESTRICT ACCESS YOUR ACCESS TO THE APPS AND/OR THE SERVICES.</p>
    <p>You also agree that any violation by you of these Terms of Use may constitute an unlawful and unfair
    business practice and cause irreparable harm to the Company, for which monetary damages would be
    inadequate, and you consent to the Company obtaining any injunctive or equitable relief that the
    Company deems necessary or appropriate in such circumstances. These remedies are in addition to any
    other remedies the Company may have at law or in equity.</p>
    <h2>16. State-Specific Provisions.</h2>
    <p>Under California Civil Code Section 1789.3, users of this Apps from California are entitled to the
    following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer
    Services of the California Department of Consumer Affairs may be contacted in writing at 1625 North
    Market Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
    The Company may be contacted via e-mail at <a href="mailto:privacy@blockguard.app" class="text-blue-600 hover:underline dark:text-blue-400">privacy@blockguard.app</a>.</p>
    <h2>17. Miscellaneous.</h2>
    <p>The Company’s failure to insist upon or enforce strict performance of any provision of these Terms of
    Use shall not be construed as a waiver of any provision or right. Neither the course of conduct between
    the parties nor trade practice shall act to modify any of these Terms of Use. The Company may assign its
    rights and duties under these Terms of Use to any party at any time without notice to you and without
    your express consent. You will not assign any of your rights or delegate any of your obligations under
    these Terms of Use without the Company’s prior written consent. Any purported assignment or
    delegation in violation of this Section is null and void. No assignment or delegation relieves you of any of
    your obligations under these Terms of Use. If any provision of these Terms of Use is held unlawful, void,
    or for any reason unenforceable, then that provision shall be deemed severable from these Terms of
    Use and shall not affect the validity and enforceability of any remaining provisions. Any provisions which
    by their nature should survive, shall survive any termination of these Terms of Use. These Terms of Use,
    together with the Company’s Privacy Policy, constitute the entire agreement between the parties
    pertaining to the subject matter hereof and supersedes in their entirety any and all written or oral
    agreements previously existing between the parties with respect to such subject matter.</p>
    <p>If you have any questions or comments regarding these Terms of Use, the Company’s Privacy Policy, or
    this Apps, please feel free to contact the Company by e-mail at: <a href="support@blockguard.app" class="text-blue-600 hover:underline dark:text-blue-400">support@blockguard.app</a></p>
    <p>These Terms of Use were last updated on ${new Date('May 29, 2025').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
`;

// CAPTCHA variables
let captchaExpectedAnswer = 0;
let captchaNum1 = 0;
let captchaNum2 = 0;


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

// CAPTCHA Modal Functions
function openCaptchaModal() {
    const captchaModal = document.getElementById('captchaModal');
    const captchaQuestionEl = document.getElementById('captchaQuestion');
    const captchaAnswerEl = document.getElementById('captchaAnswer');
    const captchaErrorEl = document.getElementById('captchaError');

    if (!captchaModal || !captchaQuestionEl || !captchaAnswerEl || !captchaErrorEl) return;

    captchaNum1 = Math.floor(Math.random() * 10) + 1;
    captchaNum2 = Math.floor(Math.random() * 10) + 1;
    captchaExpectedAnswer = captchaNum1 + captchaNum2;

    captchaQuestionEl.textContent = `What is ${captchaNum1} + ${captchaNum2}?`;
    captchaAnswerEl.value = '';
    captchaErrorEl.classList.add('hidden');
    captchaErrorEl.textContent = '';
    captchaModal.classList.remove('hidden');
    captchaAnswerEl.focus();
}

function closeCaptchaModal() {
    const captchaModal = document.getElementById('captchaModal');
    if (captchaModal) {
        captchaModal.classList.add('hidden');
    }
}

function handleCaptchaSubmit() {
    const captchaAnswerEl = document.getElementById('captchaAnswer');
    const captchaErrorEl = document.getElementById('captchaError');
    if (!captchaAnswerEl || !captchaErrorEl) return;

    const userAnswer = parseInt(captchaAnswerEl.value, 10);

    if (userAnswer === captchaExpectedAnswer) {
        window.location.href = "mailto:support@blockguard.app"; // Make sure this email is correct, or use a dynamic one if needed
        closeCaptchaModal();
    } else {
        captchaErrorEl.textContent = "Incorrect answer. Please try again.";
        captchaErrorEl.classList.remove('hidden');
        // Optionally, regenerate question:
        // openCaptchaModal(); 
        captchaAnswerEl.value = '';
        captchaAnswerEl.focus();
    }
}


// Navigation logic and other initializations
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
    const toastElement = document.getElementById('toast');

    // CAPTCHA Modal Elements
    const captchaModal = document.getElementById('captchaModal');
    const closeCaptchaModalButton = document.getElementById('closeCaptchaModal');
    const submitCaptchaButton = document.getElementById('submitCaptcha');
    const captchaAnswerInput = document.getElementById('captchaAnswer');


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
            const header = document.querySelector('header');
            if (header) {
                 window.scrollTo({ top: header.offsetHeight, behavior: 'smooth' });
            } else {
                 window.scrollTo({ top: 0, behavior: 'smooth'});
            }
        }

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
        
        const targetSection = document.getElementById(pageId);
        if (targetSection && pages[pageId]) {
            targetSection.innerHTML = pages[pageId];
            if (pageId === 'features') renderFeatures();
            if (pageId === 'support') {
                renderFAQs();
                // Re-attach event listener for the new email support button
                const emailSupportBtn = document.getElementById('emailSupportBtn');
                if (emailSupportBtn) {
                    emailSupportBtn.addEventListener('click', openCaptchaModal);
                }
            }
            if (pageId === 'privacy') renderPrivacyPolicy();
            if (pageId === 'terms') renderTerms();
        }
        
        showPage(pageId);
        window.location.hash = pageId;

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

    let initialPageId = window.location.hash.substring(1) || 'home';
    if (!document.getElementById(initialPageId) || !pages[initialPageId]) {
        initialPageId = 'home';
    }
    
    const initialTargetSection = document.getElementById(initialPageId);
    if (initialTargetSection && pages[initialPageId]) {
         initialTargetSection.innerHTML = pages[initialPageId];
         if (initialPageId === 'features') renderFeatures();
         if (initialPageId === 'support') {
             renderFAQs();
             const emailSupportBtn = document.getElementById('emailSupportBtn');
             if (emailSupportBtn) {
                 emailSupportBtn.addEventListener('click', openCaptchaModal);
             }
         }
         if (initialPageId === 'privacy') renderPrivacyPolicy();
         if (initialPageId === 'terms') renderTerms();
    }
    showPage(initialPageId);

    if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));
            mobileMenu.classList.toggle('mobile-menu-enter-active');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

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
        textArea.style.position = "fixed"; 
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

    // CAPTCHA Modal Event Listeners
    if (closeCaptchaModalButton) {
        closeCaptchaModalButton.addEventListener('click', closeCaptchaModal);
    }
    if (submitCaptchaButton) {
        submitCaptchaButton.addEventListener('click', handleCaptchaSubmit);
    }
    if (captchaAnswerInput) {
        captchaAnswerInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleCaptchaSubmit();
            }
        });
    }
     // Close modal if clicked outside of it
    if (captchaModal) {
        captchaModal.addEventListener('click', function(event) {
            if (event.target === captchaModal) {
                closeCaptchaModal();
            }
        });
    }


});


