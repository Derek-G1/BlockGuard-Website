// js/pages/features.js

export const featuresData = [
  // --- Original Features ---
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>', 
    title: "Precise Call Blocking", 
    description: "Block specific phone numbers with automatic rejection. Easily add numbers to your blocklist.", 
    details: "Our intelligent system identifies and blocks unwanted calls before they reach you. Manage your blocklist with a few simple taps." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>', 
    title: "Call Whitelisting", 
    description: "Create exceptions for important callers, ensuring their calls always get through.", 
    details: "Never miss a critical call. Whitelisted contacts bypass all blocking rules, giving you peace of mind." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>', 
    title: "Area Code Filtering", 
    description: "Block or allow calls based on area codes to stop out-of-state telemarketers.", 
    details: "Take control of regional calls. Ideal for filtering out calls from specific geographic locations known for spam." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><path d="M17.7 17.7A10.014 10.014 0 0 1 6.3 6.3M21 21l-1.65-1.65M9 11.65A1.65 1.65 0 0 0 7.35 10h0A1.65 1.65 0 0 0 9 8.35V3M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M1 1l22 22"></path></svg>', 
    title: "Do Not Disturb Mode", 
    description: "Configure comprehensive quiet periods with customizable exceptions for uninterrupted time.", 
    details: "Enjoy focused work or restful nights. DND mode silences all but your most important calls, with flexible scheduling and exception rules." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>', 
    title: "Contact Management", 
    description: "Intelligently manage contacts with easy configuration for blocking and whitelisting.", 
    details: "Seamlessly integrate Block Guard with your existing contacts for effortless setup and management." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>', 
    title: "Detailed Call Log", 
    description: "View a complete history of blocked calls with timestamps for full transparency.", 
    details: "Keep track of all blocked activity. Our detailed log shows you who tried to call and when, giving you full visibility." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>', 
    title: "Text Message Blocking", 
    description: "Block unwanted SMS based on senders or keywords. (Now supports MMS & Default App)", 
    details: "Filter out spam texts just like calls. Define blocked senders or keywords to keep your inbox clean. Now fully supports picture messages (MMS) and can act as your default SMS application." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4H7v4"></path><path d="M17 2v4H7V2"></path><path d="M7 22h0"></path><path d="M7 2h0"></path><path d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>', 
    title: "Scheduled Blocking", 
    description: "Set up specific times for blocking rules to activate automatically.", 
    details: "Automate your call management. Define schedules for when DND or other blocking rules should be active, perfect for work hours or nighttime." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>', 
    title: "Advanced Call Screening", 
    description: "Utilizes Android's CallScreeningService for enhanced call filtering capabilities.", 
    details: "Leveraging modern Android features, Block Guard provides deeper call analysis to identify and manage unwanted calls more effectively." 
  },

  // --- New Features (from README) ---
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-red-600 dark:text-red-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>', 
    title: "Neighbor Spoofing Protection", 
    description: "Intelligently identifies and blocks scam calls that mimic your local area code and prefix.", 
    details: "Scammers often spoof the first 6 digits of your phone number to look like a neighbor. Block Guard detects this pattern and automatically blocks these deceptive calls." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-green-600 dark:text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>', 
    title: "STIR/SHAKEN Validation", 
    description: "Automatically blocks calls that fail carrier verification checks (Android 11+).", 
    details: "Utilizes modern carrier protocols to verify caller ID authenticity. If a call cannot be verified or is flagged as spoofed by the network, it is blocked instantly." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-gray-800 dark:text-gray-200"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>', 
    title: "Strict Blocking Mode", 
    description: "Option to strictly block any caller who is not in your contacts list.", 
    details: "For maximum privacy, enable Strict Mode. This ensures that only people you have explicitly saved in your contacts can ring your phone. Unknowns are rejected or silenced." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-blue-600 dark:text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>', 
    title: "Default Dialer Replacement", 
    description: "A complete replacement for your system dialer with a custom InCallService interface.", 
    details: "Block Guard can now serve as your primary phone app, offering a seamless calling experience integrated directly with your block lists and spam protection." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-purple-600 dark:text-purple-400"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>', 
    title: "Secure Backup & Restore", 
    description: "Securely backup your settings, block lists, and logs using encryption.", 
    details: "Never lose your configuration. Create encrypted backups of your data and restore them easily if you switch devices or reinstall the application." 
  },
  { 
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-teal-600 dark:text-teal-400"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>', 
    title: "Global & Themed", 
    description: "Supports 50+ languages, Light/Dark themes, and international number formats.", 
    details: "Designed for a global audience. Block Guard automatically adapts to your system theme (Light/Dark) and speaks over 50 languages. It also handles foreign number formats efficiently." 
  }
];

export const featuresContent = `
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
                Block Guard is built with modern Android technology including Kotlin 2.0, Jetpack Compose for a smooth UI, Material Design 3 for a contemporary look and feel, and follows the MVVM architecture pattern for robust and maintainable code. This ensures a reliable, efficient, and user-friendly experience. Our commitment to security means your data is handled with care, using on-device encrypted storage and EncryptedSharedPreferences.
            </p>
        </div>
    </div>
`;

export function renderFeatures() {
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