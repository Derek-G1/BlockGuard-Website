// js/pages/howItWorks.js

export const howItWorksContent = `
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 dark:text-green-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 2: Accept Disclosure</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Upon first launch, you will see a prominent privacy disclosure. We believe in total transparency: this screen explains that Block Guard operates 100% on-device. Simply tap <strong>Accept</strong> to acknowledge that your data stays with you.</p>
                </div>
            </div>

            <div class="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400"><path d="M12.22 2h-4.12a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 3: Grant Permissions</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">To function as your primary defense, Block Guard requires standard permissions like contacts (for whitelisting) and call logs. For the best experience, set Block Guard as your <strong>Default Caller ID & Spam App</strong> to allow it to silence or reject spam calls automatically.</p>
                </div>
            </div>

            <div class="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="flex-shrink-0 bg-green-100 dark:bg-green-900/50 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 dark:text-green-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 4: Activate Smart Protections</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Toggle on powerful features like <strong>Neighbor Spoofing Protection</strong> to stop look-alike numbers, or <strong>Strict Mode</strong> to block anyone not in your contacts. You can also enable the <strong>Spam Database</strong> for community-driven filtering, alongside your own custom blocklists and whitelist rules.</p>
                </div>
            </div>

            <div class="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step 5: Enjoy Peace of Mind</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Once configured, Block Guard runs silently in the background. Whether it's a "scam likely" call or a spoofed number, we filter it out before your phone even rings, giving you a truly interruption-free experience.</p>
                </div>
            </div>
        </div>
    </div>
`;