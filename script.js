// script.js

// Import page content and render functions
// script.js

// Page configuration for dynamic imports
const pageConfig = {
    home: { module: () => import('./js/pages/home.js'), contentVar: 'homeContent' },
    features: { module: () => import('./js/pages/features.js'), contentVar: 'featuresContent', renderFunc: 'renderFeatures' },
    'how-it-works': { module: () => import('./js/pages/howItWorks.js'), contentVar: 'howItWorksContent' },
    download: { module: () => import('./js/pages/download.js'), contentVar: 'downloadContent' },
    support: { module: () => import('./js/pages/support.js'), contentVar: 'supportContent', renderFunc: 'renderFAQs' },
    about: { module: () => import('./js/pages/about.js'), contentVar: 'aboutContent' },
    privacy: { module: () => import('./js/pages/privacy.js'), contentVar: 'privacyPolicyFullText', renderFunc: 'renderPrivacyPolicy' },
    terms: { module: () => import('./js/pages/terms.js'), contentVar: 'termsContent', renderFunc: 'renderTerms' },
};

// Cache for loaded content and render functions
const pages = {};
const pageRenderers = {};

// Function to load page content dynamically
async function loadPage(pageId) {
    if (pages[pageId]) return; // Already loaded

    const config = pageConfig[pageId];
    if (!config) return;

    try {
        const module = await config.module();
        pages[pageId] = module[config.contentVar];
        if (config.renderFunc && module[config.renderFunc]) {
            pageRenderers[pageId] = module[config.renderFunc];
        }
    } catch (error) {
        console.error(`Failed to load page: ${pageId}`, error);
    }
}

// CAPTCHA variables
let captchaExpectedAnswer = 0;
let captchaNum1 = 0;
let captchaNum2 = 0;

// CAPTCHA Modal Functions (these were already correctly scoped)
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
        window.location.href = "mailto:support@blockguard.app";
        closeCaptchaModal();
    } else {
        captchaErrorEl.textContent = "Incorrect answer. Please try again.";
        captchaErrorEl.classList.remove('hidden');
        captchaAnswerEl.value = '';
        captchaAnswerEl.focus();
    }
}

// Declare global variables for DOM elements
let pageContents;
let desktopNavLinks;
let mobileNavLinks;
let mobileMenu;
let menuIcon;
let closeIcon;
let mobileMenuButton;
let toastElement; // Also declare toastElement globally
let currentYearSpan; // Also declare currentYearSpan globally

// Function to show page content and apply active states
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Call specific render functions if they exist
    if (pageRenderers[pageId]) {
        pageRenderers[pageId]();
    }

    // Special handling for support page event listeners
    if (pageId === 'support') {
        const emailSupportBtn = document.getElementById('emailSupportBtn');
        if (emailSupportBtn) {
            emailSupportBtn.removeEventListener('click', openCaptchaModal); // Prevent duplicate listeners
            emailSupportBtn.addEventListener('click', openCaptchaModal);
        }
    }

    const allNavLinks = [...desktopNavLinks, ...mobileNavLinks];
    allNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });

    // Re-attach listeners after new content is potentially loaded
    attachPageLinkListeners();
}

// Navigation function
async function navigate(event) {
    event.preventDefault();
    const pageId = event.currentTarget.getAttribute('href').substring(1);

    await loadPage(pageId);

    const targetSection = document.getElementById(pageId);
    if (targetSection && pages[pageId]) {
        targetSection.innerHTML = pages[pageId];
    }

    showPage(pageId);
    window.location.hash = pageId;

    if (mobileMenu && mobileMenu.classList.contains('mobile-menu-enter-active')) {
        mobileMenu.classList.remove('mobile-menu-enter-active');
        // Ensure menu icon is shown and close icon is hidden when menu closes
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
}

// Function to attach event listeners to all .page-link elements
function attachPageLinkListeners() {
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        // Remove existing listener to prevent duplicates if already attached
        link.removeEventListener('click', navigate);
        // Add new listener
        link.addEventListener('click', navigate);
    });
}


// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', async () => {
    // Assign global variables once DOM is ready
    pageContents = document.querySelectorAll('.page-content');
    desktopNavLinks = document.querySelectorAll('#desktop-nav .nav-link');
    mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link');
    mobileMenuButton = document.getElementById('mobileMenuButton');
    mobileMenu = document.getElementById('mobile-menu');
    menuIcon = document.getElementById('menuIcon');
    closeIcon = document.getElementById('closeIcon');
    currentYearSpan = document.getElementById('currentYear');
    toastElement = document.getElementById('toast');

    // CAPTCHA Modal Elements
    const captchaModal = document.getElementById('captchaModal');
    const closeCaptchaModalButton = document.getElementById('closeCaptchaModal');
    const submitCaptchaButton = document.getElementById('submitCaptcha');
    const captchaAnswerInput = document.getElementById('captchaAnswer');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Initialize mobile menu icon visibility
    // Initially, the menu icon should be visible, and the close icon hidden.
    // This overrides any 'hidden' class set in HTML to ensure consistent JS control.
    if (menuIcon) menuIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');

    // Initial attachment of listeners
    attachPageLinkListeners();

    let initialPageId = window.location.hash.substring(1) || 'home';
    if (!pageConfig[initialPageId]) {
        initialPageId = 'home';
    }

    await loadPage(initialPageId);

    const initialTargetSection = document.getElementById(initialPageId);
    if (initialTargetSection && pages[initialPageId]) {
        initialTargetSection.innerHTML = pages[initialPageId];
    }
    showPage(initialPageId); // Call showPage to apply active states and re-attach listeners

    if (mobileMenuButton) { // Check if button exists before adding listener
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));
            mobileMenu.classList.toggle('mobile-menu-enter-active');

            // Toggle visibility of menu and close icons
            if (menuIcon) menuIcon.classList.toggle('hidden');
            if (closeIcon) closeIcon.classList.toggle('hidden');
        });
    }

    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // These can be declared here as they are only used within this function
        const moonIcons = [document.getElementById('moonIconDesktop'), document.getElementById('moonIconMobile')];
        const sunIcons = [document.getElementById('sunIconDesktop'), document.getElementById('sunIconMobile')];
        moonIcons.forEach(icon => { if (icon) icon.classList.toggle('hidden', isDark) });
        sunIcons.forEach(icon => { if (icon) icon.classList.toggle('hidden', !isDark) });
    }

    let isDarkMode = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDarkMode);

    const darkModeToggles = [document.getElementById('darkModeToggleDesktop'), document.getElementById('darkModeToggleMobile')];
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

    document.body.addEventListener('click', function (event) {
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
        captchaAnswerInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                handleCaptchaSubmit();
            }
        });
    }
    // Close modal if clicked outside of it
    if (captchaModal) {
        captchaModal.addEventListener('click', function (event) {
            if (event.target === captchaModal) {
                closeCaptchaModal();
            }
        });
    }
});
