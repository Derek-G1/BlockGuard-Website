// js/pages/faq.js

export const faqContent = `
    <div class="space-y-12">
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">Block Guard FAQ</h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Latest insights on spam protection, privacy, and mobile security.</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">
            
            <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div class="p-8">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">5 Ways to Stop Spam Calls on Android in 2026</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Published on January 5, 2026</p>
                    <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>Spam calls have evolved, but so have the tools to fight them. As we enter 2026, relying on basic blocking features isn't enough. Here are five effective strategies to reclaim your peace and quiet.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">1. Use a Dedicated Blocking App</h3>
                        <p>While Android's default dialer has improved, it lacks granular control. Apps like <strong>Block Guard</strong> offer advanced filtering that goes beyond simple blacklists. With features like <a href="#features" class="page-link text-blue-600 dark:text-blue-400 hover:underline">Strict Mode</a>, you can ensure only your contacts can reach you, silencing everyone else instantly.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">2. Register on the Do Not Call Registry</h3>
                        <p>It’s the first line of defense. Adding your number to your country's National Do Not Call Registry reduces legitimate telemarketing calls, though it won't stop illegal scammers.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">3. Silence Unknown Callers</h3>
                        <p>If you don't recognize the number, don't answer. Answering signals to spammers that your line is active, leading to more calls. Block Guard automates this by letting you choose to "Silence" or "Reject" unknown numbers automatically.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">4. Block Entire Area Codes</h3>
                        <p>If you constantly receive spam from a specific region where you have no friends or business, block the entire area code. Block Guard makes this easy with its Area Code filtering feature.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">5. Enable Spam Database Integration</h3>
                        <p>Leverage community power. Block Guard integrates with updated spam databases to identify and block known malicious numbers before your phone even rings.</p>
                    </div>
                    <div class="mt-8">
                        <a href="#download" class="page-link inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">Download Block Guard Now</a>
                    </div>
                </div>
            </article>

            <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                 <div class="p-8">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">What is Neighbor Spoofing and How to Block It</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Published on January 8, 2026</p>
                    <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>Have you ever received a call from a number that looks eerily similar to your own? It shares your area code and the first three digits (the prefix), but the last four digits are different. This is called <strong>Neighbor Spoofing</strong>.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Why Scammers Do It</h3>
                        <p>Scammers know you are more likely to answer a local call or one that looks familiar. They "spoof" their caller ID to mimic your number structure, hoping you'll pick up thinking it's a neighbor, a local business, or a doctor's office.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">The Solution: Intelligent Pattern Matching</h3>
                        <p>Standard blockers struggle with this because the numbers are always changing. However, <strong>Block Guard</strong> features specific <em>Neighbor Spoofing Protection</em>. It analyzes incoming calls to detect this specific pattern (matching area code + prefix) and cross-references it with your contacts.</p>
                        <p>If a number mimics yours but isn't in your address book, Block Guard blocks it automatically. It’s the most effective way to stop these deceptive calls cold.</p>
                    </div>
                    <div class="mt-8">
                         <a href="#features" class="page-link inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">See Neighbor Spoofing Protection in Action</a>
                    </div>
                </div>
            </article>

            <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                 <div class="p-8">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">How to Whitelist Numbers on Android</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Published on January 10, 2026</p>
                     <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>Aggressive blocking is great for peace of mind, but you can't afford to miss emergencies or important calls from work or family. That's where "Whitelisting" comes in.</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">The Problem with Standard DND</h3>
                        <p>Android's built-in Do Not Disturb mode can sometimes be too broad or confusing to configure exceptions for. You might miss a delivery driver or a doctor's appointment because they aren't saved in your "Favorites."</p>
                        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">The Block Guard Way</h3>
                        <p><strong>Block Guard</strong> simplifies this process. Our dedicated Whitelist feature overrides all active blocking rules, including Do Not Disturb schedules and Strict Mode.</p>
                        <ul class="list-disc pl-5 mt-2 mb-4 space-y-1">
                            <li><strong>Easy Access:</strong> Add numbers directly from your contacts or call log.</li>
                            <li><strong>Total Bypass:</strong> Whitelisted numbers will ring through even if you have "Block All Unknown" enabled.</li>
                            <li><strong>Peace of Mind:</strong> Ensure your partner, kids, or boss can always reach you, no matter how high your security settings are set.</li>
                        </ul>
                        <p>Don't leave important connections to chance. Take control of your exceptions list with Block Guard.</p>
                    </div>
                    <div class="mt-8">
                         <a href="#download" class="page-link inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">Get Block Guard Today</a>
                    </div>
                </div>
            </article>

        </div>
    </div>
`;