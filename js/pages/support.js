// js/pages/support.js

export const faqData = [
  { question: "How do I add a number to the blocklist?", answer: "Navigate to the 'Blocked Numbers' section from the main menu or homepage quick actions. Enter the number you wish to block and tap 'Add Number'. You can also select from your contacts." },
  { question: "How does whitelisting work?", answer: "Whitelisted numbers will always bypass any blocking rules, including Do Not Disturb mode (if overrides are enabled). Add important contacts to your whitelist from the 'Whitelist' section to ensure you never miss their calls." },
  { question: "What permissions does Block Guard need and why?", answer: "Block Guard requires permissions like READ_PHONE_STATE (to detect incoming calls), CALL_PHONE (to manage calls), READ_CONTACTS (for whitelisting and caller ID), READ_CALL_LOG (to display call history), and SMS permissions (for text blocking). Each permission is crucial for the app's core functionality. You can find a detailed list in our Privacy Policy." },
  { question: "How does Do Not Disturb mode function?", answer: "DND mode blocks all incoming calls unless they are from whitelisted numbers or contacts (if configured in DND settings). You can schedule DND for specific times or toggle it manually." },
  { question: "Is my data secure?", answer: "Yes, your data is secure. Block Guard uses Android's EncryptedSharedPreferences (via androidx.security:security-crypto) to store your settings locally on your device. We do not upload your blocklists, whitelists, or call logs to any server." },
  { question: "How do I backup and restore my settings?", answer: "Block Guard includes a Backup & Restore feature. You can find this in the main menu. Export your settings (including blocklists, whitelists, and app preferences) to an encrypted file. You can restore from this file if you reinstall the app or move to a new device. Remember to keep your backup password safe!" },
  { question: "What if I see a 'Preference Error Dialog'?", answer: "This dialog can appear if there's an issue accessing your encrypted settings, often after reinstalling the app due to an encryption key mismatch. The dialog provides options: 1. Try 'Import Backup' if you have one. 2. If that fails or you reinstalled, tap 'Go to Settings', navigate to Block Guard's app info, select 'Storage & cache', then 'Clear storage'. Relaunch the app (it will start fresh), then use the 'Backup & Restore' menu to import your backup file." },
  { question: "Text message blocking isn't working perfectly.", answer: "For the most effective text message blocking, Block Guard may need to be set as your default SMS application. This allows it to intercept and filter all incoming SMS messages directly. If it's not the default, it relies on notification access, which might not catch all messages or provide the same level of control." }
];

export const supportContent = `
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
`;

export function renderFAQs() {
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