// js/pages/download.js

// Import constants from the centralized constants.js file
import { APP_VERSION, PLAY_STORE_LINK, MIN_ANDROID_VERSION } from '../constants.js';

export const downloadContent = `
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
`;