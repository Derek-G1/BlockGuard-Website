// js/pages/home.js

// Assuming PLAY_STORE_LINK is needed here, you might need to export it from script.js or define it here if it's constant.
// For now, let's include it here for self-containment of the page content.
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.radstormtech.blockguard";

export const homeContent = `
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
                <a href="${PLAY_STORE_LINK}" target="_blank" rel="noopener noreferrer" class="bg-white text-blue-600 dark:bg-gray-100 dark:text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-300 transition duration-300 text-lg relative z-10">
                    Download Block Guard
                </a>
               <img src="Images/Home_Screen.webp" alt="Screenshot of Block Guard app showing call blocking statistics and quick actions on Android" width="600" height="1158" fetchpriority="high" class="mt-12 mx-auto block w-full rounded-lg shadow-2xl max-w-md md:max-w-lg lg:max-w-xl relative z-10" onerror="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/999999?text=Image+Error&font=inter';">
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
                <a href="#how-it-works" class="page-link bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 text-lg">
                    Learn How It Works <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block h-5 w-5 transition-transform group-hover:translate-x-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
            </div>
        </section>
        <section class="py-12">
            <h2 class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Why Choose Block Guard?</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mb-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <h3 class="text-xl font-semibold mb-2 text-center text-gray-700 dark:text-gray-200">Peace of Mind</h3>
                    <p class="text-gray-600 dark:text-gray-400">Enjoy uninterrupted time without the constant annoyance of spam and unwanted calls.</p>
                </div>
                <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mb-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    <h3 class="text-xl font-semibold mb-2 text-center text-gray-700 dark:text-gray-200">Full Control</h3>
                    <p class="text-gray-600 dark:text-gray-400">Customize blocking rules, manage whitelists, and decide who can reach you.</p>
                </div>
                <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500 mb-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    <h3 class="text-xl font-semibold mb-2 text-center text-gray-700 dark:text-gray-200">Effortless & Secure</h3>
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
`;