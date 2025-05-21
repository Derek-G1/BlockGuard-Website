import React, { useState, useEffect } from 'react';
import { Shield, Smartphone, Zap, MessageCircle, DownloadCloud, LifeBuoy, Info, FileText, Rss, Menu, X, ChevronRight, ExternalLink, Copy, CheckCircle, ShieldCheck, PhoneOff, Settings, Palette, Phone, MessageSquare, HelpCircle, Lock, Eye, EyeOff, Users, FileWarning, LayoutDashboard, BellOff, CalendarClock, ShieldAlert, Share2, BookOpen, AlertTriangle, GitBranch, Filter, ListChecks, Hourglass, Moon, Sun, Mail } from 'lucide-react';

// Helper to get version from build.gradle.kts (simulated based on your plan)
const APP_VERSION = "1.1.0"; // From build.gradle.kts: versionName
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.example.callblocker2"; // From build.gradle.kts: applicationId
const MIN_ANDROID_VERSION = "Android 9 Pie (API 28)"; // From build.gradle.kts: minSdk = 28 (Assuming this is the final decision based on your plan)

// Simulated data based on your plan and files
const featuresData = [
  {
    icon: <ShieldCheck size={48} className="text-blue-500" />,
    title: "Precise Call Blocking",
    description: "Block specific phone numbers with automatic rejection. Easily add numbers to your blocklist.",
    details: "Our intelligent system identifies and blocks unwanted calls before they reach you. Manage your blocklist with a few simple taps."
  },
  {
    icon: <ListChecks size={48} className="text-green-500" />,
    title: "Call Whitelisting",
    description: "Create exceptions for important callers, ensuring their calls always get through.",
    details: "Never miss a critical call. Whitelisted contacts bypass all blocking rules, giving you peace of mind."
  },
  {
    icon: <Filter size={48} className="text-blue-500" />,
    title: "Area Code Filtering",
    description: "Block or allow calls based on area codes to stop out-of-state telemarketers.",
    details: "Take control of regional calls. Ideal for filtering out calls from specific geographic locations known for spam."
  },
  {
    icon: <BellOff size={48} className="text-green-500" />,
    title: "Do Not Disturb Mode",
    description: "Configure comprehensive quiet periods with customizable exceptions for uninterrupted time.",
    details: "Enjoy focused work or restful nights. DND mode silences all but your most important calls, with flexible scheduling and exception rules."
  },
  {
    icon: <Users size={48} className="text-blue-500" />,
    title: "Contact Management",
    description: "Intelligently manage contacts with easy configuration for blocking and whitelisting.",
    details: "Seamlessly integrate Block Guard with your existing contacts for effortless setup and management."
  },
  {
    icon: <LayoutDashboard size={48} className="text-green-500" />,
    title: "Detailed Call Log",
    description: "View a complete history of blocked calls with timestamps for full transparency.",
    details: "Keep track of all blocked activity. Our detailed log shows you who tried to call and when, giving you full visibility."
  },
  {
    icon: <MessageSquare size={48} className="text-blue-500" />,
    title: "Text Message Blocking",
    description: "Block unwanted SMS based on senders or keywords. (May require default SMS app for full functionality)",
    details: "Filter out spam texts just like calls. Define blocked senders or keywords to keep your inbox clean. For optimal performance, setting Block Guard as your default SMS app might be necessary on some Android versions."
  },
  {
    icon: <CalendarClock size={48} className="text-green-500" />,
    title: "Scheduled Blocking",
    description: "Set up specific times for blocking rules to activate automatically.",
    details: "Automate your call management. Define schedules for when DND or other blocking rules should be active, perfect for work hours or nighttime."
  },
  {
    icon: <ShieldAlert size={48} className="text-blue-500" />,
    title: "Advanced Call Screening",
    description: "Utilizes Android's CallScreeningService for enhanced call filtering capabilities.",
    details: "Leveraging modern Android features, Block Guard provides deeper call analysis to identify and manage unwanted calls more effectively."
  }
];

const faqData = [
  {
    question: "How do I add a number to the blocklist?",
    answer: "Navigate to the 'Blocked Numbers' section from the main menu or homepage quick actions. Enter the number you wish to block and tap 'Add Number'. You can also select from your contacts."
  },
  {
    question: "How does whitelisting work?",
    answer: "Whitelisted numbers will always bypass any blocking rules, including Do Not Disturb mode (if overrides are enabled). Add important contacts to your whitelist from the 'Whitelist' section to ensure you never miss their calls."
  },
  {
    question: "What permissions does Block Guard need and why?",
    answer: "Block Guard requires permissions like READ_PHONE_STATE (to detect incoming calls), CALL_PHONE (to manage calls), READ_CONTACTS (for whitelisting and caller ID), READ_CALL_LOG (to display call history), and SMS permissions (for text blocking). Each permission is crucial for the app's core functionality. You can find a detailed list in our Privacy Policy."
  },
  {
    question: "How does Do Not Disturb mode function?",
    answer: "DND mode blocks all incoming calls unless they are from whitelisted numbers or contacts (if configured in DND settings). You can schedule DND for specific times or toggle it manually."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, your data is secure. Block Guard uses Android's EncryptedSharedPreferences (via androidx.security:security-crypto) to store your settings locally on your device. We do not upload your blocklists, whitelists, or call logs to any server."
  },
  {
    question: "How do I backup and restore my settings?",
    answer: "Block Guard includes a Backup & Restore feature. You can find this in the main menu. Export your settings (including blocklists, whitelists, and app preferences) to an encrypted file. You can restore from this file if you reinstall the app or move to a new device. Remember to keep your backup password safe!"
  },
  {
    question: "What if I see a 'Preference Error Dialog'?",
    answer: "This dialog can appear if there's an issue accessing your encrypted settings, often after reinstalling the app due to an encryption key mismatch. The dialog provides options: 1. Try 'Import Backup' if you have one. 2. If that fails or you reinstalled, tap 'Go to Settings', navigate to Block Guard's app info, select 'Storage & cache', then 'Clear storage'. Relaunch the app (it will start fresh), then use the 'Backup & Restore' menu to import your backup file."
  },
  {
    question: "Text message blocking isn't working perfectly.",
    answer: "For the most effective text message blocking, Block Guard may need to be set as your default SMS application. This allows it to intercept and filter all incoming SMS messages directly. If it's not the default, it relies on notification access, which might not catch all messages or provide the same level of control."
  }
];

const NavLink = ({ to, currentPath, setPath, children, isMobile, closeMobileMenu, className = "" }) => (
  <button
    onClick={() => {
      setPath(to);
      if (isMobile && closeMobileMenu) closeMobileMenu();
    }}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150
      ${currentPath === to
        ? 'bg-blue-600 text-white dark:bg-blue-500'
        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'}
      ${isMobile ? 'block w-full text-left' : ''}
      ${className}
    `}
  >
    {children}
  </button>
);

const PageTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">{title}</h1>
    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);


const App = () => {
  const [currentPage, setCurrentPage] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode and localStorage
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Listen for changes in system preference
    const mediaQueryListener = (e) => {
      const newIsDark = e.matches;
      // Only update if no theme is explicitly saved in localStorage
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(newIsDark);
        if (newIsDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', mediaQueryListener);
    return () => mediaQuery.removeEventListener('change', mediaQueryListener);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };
  
  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // You could show an error message to the user here
    }
    document.body.removeChild(textArea);
  };


  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/download', label: 'Download' },
    { path: '/support', label: 'Support' },
    { path: '/about', label: 'About Us' },
    // { path: '/blog', label: 'Blog' }, // Optional
  ];

  const renderPage = () => {
    switch (currentPage) {
      case '/': return <HomePage setPath={setCurrentPage} />;
      case '/features': return <FeaturesPage />;
      case '/how-it-works': return <HowItWorksPage />;
      case '/download': return <DownloadPage />;
      case '/support': return <SupportPage />;
      case '/about': return <AboutUsPage />;
      case '/privacy': return <PrivacyPolicyPage copyToClipboard={copyToClipboard} copiedStatus={copied} />;
      case '/terms': return <TermsOfServicePage />;
      // case '/blog': return <BlogPage />; // Optional
      default: return <HomePage setPath={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Site Name */}
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('/')}>
              <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-500" />
              <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">Block Guard</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigationItems.map(item => (
                <NavLink key={item.path} to={item.path} currentPath={currentPage} setPath={setCurrentPage}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            
            {/* Dark Mode Toggle (Desktop) */}
            <div className="hidden md:block">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleDarkMode}
                    className="mr-2 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 z-40 transform shadow-lg animate-slide-down">
            <div className="bg-white dark:bg-gray-800 rounded-b-lg">
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigationItems.map(item => (
                    <NavLink 
                        key={item.path} 
                        to={item.path} 
                        currentPath={currentPage} 
                        setPath={setCurrentPage}
                        isMobile={true}
                        closeMobileMenu={() => setIsMobileMenuOpen(false)}
                    >
                    {item.label}
                    </NavLink>
                ))}
                </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
            <NavLink to="/privacy" currentPath={currentPage} setPath={setCurrentPage} className="hover:underline">Privacy Policy</NavLink>
            <NavLink to="/terms" currentPath={currentPage} setPath={setCurrentPage} className="hover:underline">Terms of Service</NavLink>
            <NavLink to="/support" currentPath={currentPage} setPath={setCurrentPage} className="hover:underline">Support</NavLink>
          </div>
          <p>&copy; {new Date().getFullYear()} Block Guard LLC. All Rights Reserved.</p>
          <p className="mt-1">Built with React & Tailwind CSS</p>
        </div>
      </footer>
      
      {/* Copied to clipboard toast */}
      {copied && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition-opacity duration-300 animate-fade-in-out">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

// Placeholder Page Components
const HomePage = ({ setPath }) => (
  <div className="space-y-12">
    {/* Hero Section */}
    <section className="text-center py-12 md:py-20 bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-700 dark:to-green-600 rounded-xl shadow-xl text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
         {/* Decorative shapes - optional */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-72 h-72 bg-white/10 rounded-full filter blur-2xl opacity-50"></div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative z-10">
          Take Control of Your Calls with Block Guard
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto relative z-10">
          Intelligent call filtering to eliminate spam and ensure you never miss important connections.
        </p>
        <button 
          onClick={() => setPath('/download')}
          className="bg-white text-blue-600 dark:bg-gray-100 dark:text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-300 transition duration-300 text-lg relative z-10"
        >
          Download Block Guard
        </button>
         <img 
            src="https://placehold.co/600x400/FFFFFF/333333?text=App+Mockup+Here&font=inter" 
            alt="Block Guard App Mockup" 
            className="mt-12 mx-auto rounded-lg shadow-2xl max-w-md md:max-w-lg lg:max-w-xl relative z-10"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/999999?text=Image+Error&font=inter"; }}
          />
      </div>
    </section>

    {/* Brief Feature Overview */}
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Key Features at a Glance</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.slice(0, 3).map(feature => (
          <div key={feature.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">{React.cloneElement(feature.icon, { size: 40, className: feature.icon.props.className.replace('text-blue-500', 'text-blue-600 dark:text-blue-400').replace('text-green-500', 'text-green-600 dark:text-green-400') })}</div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-700 dark:text-gray-200">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button 
          onClick={() => setPath('/features')}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition duration-150 group text-lg"
        >
          Explore All Features <ChevronRight className="inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>

    {/* Social Proof (Optional - kept commented) */}
    {/* <section className="py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Trusted by Users</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300 italic">"Block Guard has given me back my peace and quiet. No more annoying spam calls!"</p>
          <p className="text-right mt-2 font-semibold text-gray-700 dark:text-gray-200">- Satisfied User</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300 italic">"The area code filtering is a game-changer. Highly recommend this app."</p>
          <p className="text-right mt-2 font-semibold text-gray-700 dark:text-gray-200">- Happy Customer</p>
        </div>
      </div>
    </section> 
    */}

    {/* Key Benefits */}
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Why Choose Block Guard?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <CheckCircle size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Peace of Mind</h3>
          <p className="text-gray-600 dark:text-gray-400">Enjoy uninterrupted time without the constant annoyance of spam and unwanted calls.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <Smartphone size={48} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Full Control</h3>
          <p className="text-gray-600 dark:text-gray-400">Customize blocking rules, manage whitelists, and decide who can reach you.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <Zap size={48} className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Effortless & Secure</h3>
          <p className="text-gray-600 dark:text-gray-400">Easy to set up and use, with your data stored securely on your device.</p>
        </div>
      </div>
    </section>

    {/* Secondary CTA */}
    <section className="text-center py-12">
       <button 
          onClick={() => setPath('/how-it-works')}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 text-lg"
        >
          Learn How It Works
        </button>
    </section>
  </div>
);

const FeaturesPage = () => (
  <div className="space-y-10">
    <PageTitle title="Our Powerful Features" subtitle="Discover how Block Guard empowers you to manage your calls effectively." />
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuresData.map((feature, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            {React.cloneElement(feature.icon, { size: 32, className: `mr-3 ${feature.icon.props.className.replace('text-blue-500', 'text-blue-600 dark:text-blue-400').replace('text-green-500', 'text-green-600 dark:text-green-400')}` })}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{feature.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-3 flex-grow">{feature.description}</p>
          <details className="text-sm text-gray-500 dark:text-gray-500 group">
            <summary className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 list-none flex items-center">
              More details
              <ChevronRight size={16} className="ml-1 group-open:rotate-90 transition-transform" />
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.details}</p>
          </details>
        </div>
      ))}
    </div>

    <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow">
      <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Technical Highlights</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Block Guard is built with modern Android technology including Kotlin, Jetpack Compose for a smooth UI, Material Design 3 for a contemporary look and feel, and follows the MVVM architecture pattern for robust and maintainable code. This ensures a reliable, efficient, and user-friendly experience. Our commitment to security means your data is handled with care, using on-device encrypted storage.
      </p>
    </div>
  </div>
);

const HowItWorksPage = () => (
  <div className="space-y-10">
    <PageTitle title="How Block Guard Works" subtitle="A simple step-by-step guide to regaining control over your calls." />
    <div className="max-w-3xl mx-auto space-y-8">
      {[
        {
          step: 1, title: "Download & Install", 
          description: "Get Block Guard from the Google Play Store. Installation is quick and easy, getting you set up in minutes.",
          icon: <DownloadCloud size={28} className="text-blue-600 dark:text-blue-400" />
        },
        {
          step: 2, title: "Grant Permissions", 
          description: "Block Guard needs a few permissions to function effectively: access to contacts (for whitelisting), phone state (to identify incoming calls), call logs (for history and blocking), and SMS (for text blocking). We value your privacy; see our Privacy Policy for full details on how these permissions are used solely for app functionality.",
          icon: <Settings size={28} className="text-green-600 dark:text-green-400" />
        },
        {
          step: 3, title: "Configure Your Settings", 
          description: "Personalize Block Guard to your needs. Add numbers to your blocklist, create whitelist rules for important contacts, set up area code filters, define keywords for text blocking, and configure Do Not Disturb mode with custom exceptions.",
          icon: <Zap size={28} className="text-blue-600 dark:text-blue-400" />
        },
        {
          step: 4, title: "Enjoy Peace of Mind", 
          description: "Once set up, Block Guard works automatically in the background, silently filtering unwanted calls and texts. Enjoy uninterrupted focus and a spam-free communication experience.",
          icon: <ShieldCheck size={28} className="text-green-600 dark:text-green-400" />
        }
      ].map(item => (
        <div key={item.step} className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Step {item.step}: {item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-10 text-center">
        <img 
          src="https://placehold.co/700x350/E2E8F0/4A5568?text=Simplified+App+Workflow&font=inter" 
          alt="Block Guard UI Flow" 
          className="mx-auto rounded-lg shadow-lg"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/700x350/CCCCCC/999999?text=Flowchart+Error&font=inter"; }}
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Visual representation of Block Guard's simple and effective workflow.</p>
    </div>
  </div>
);

const DownloadPage = () => (
  <div className="space-y-10 text-center">
    <PageTitle title="Download Block Guard" subtitle="Get the ultimate call and SMS protection for your Android device." />
    
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
      <Smartphone size={64} className="mx-auto text-blue-600 dark:text-blue-400 mb-6" />
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Block Guard for Android</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Current Version: {APP_VERSION}</p>
      
      <a 
        href={PLAY_STORE_LINK}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-lg w-full transform hover:scale-105"
      >
        <DownloadCloud size={20} className="mr-2" />
        Get it on Google Play
      </a>
      
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>Requires: {MIN_ANDROID_VERSION}</p>
        <p className="mt-1">Developed on Android SDK 35+</p>
        {/* <p className="mt-1">File Size: Approx. 10MB (example)</p> */}
      </div>
    </div>

    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Scan QR Code for Easy Download</h3>
      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(PLAY_STORE_LINK)}`}
        alt="QR Code for Google Play Store" 
        className="mx-auto rounded-lg shadow-md border-4 border-white dark:border-gray-700"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/CCCCCC/999999?text=QR+Error&font=inter"; }}
      />
    </div>
  </div>
);

const SupportPage = () => (
  <div className="space-y-10">
    <PageTitle title="Support & FAQ" subtitle="Find answers to common questions and get help with Block Guard." />
    
    <div className="max-w-3xl mx-auto space-y-6">
      {faqData.map((item, index) => (
        <details key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow group transition-all duration-300 hover:shadow-lg">
          <summary className="font-semibold text-lg text-gray-800 dark:text-gray-100 cursor-pointer list-none flex justify-between items-center py-2">
            {item.question}
            <ChevronRight size={20} className="text-gray-500 dark:text-gray-400 group-open:rotate-90 transition-transform" />
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed pb-2">{item.answer}</p>
        </details>
      ))}
    </div>

    <div className="mt-12 text-center p-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow">
      <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Need More Help?</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto">
        If you can't find the answer to your question in the FAQ, our support team is ready to assist you. Please don't hesitate to reach out.
      </p>
      <a 
        href="mailto:support@blockguard.app" 
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      >
        <Mail size={20} className="mr-2" />
        Email Support
      </a>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">(support@blockguard.app)</p>
    </div>
  </div>
);

const AboutUsPage = () => (
  <div className="space-y-10">
    <PageTitle title="About Block Guard LLC" subtitle="Learn more about the team and mission behind Block Guard." />
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="flex justify-center mb-6">
        <ShieldCheck size={64} className="text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">Our Mission</h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-6">
        "To provide users with complete control over their incoming calls and messages, eliminating unwanted disturbances while ensuring important connections are never missed."
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        Block Guard is developed and maintained by Block Guard LLC, a small team passionate about creating useful and reliable mobile applications. We believe everyone deserves a communication experience free from spam and harassment. Our focus is on building intuitive, powerful tools that respect user privacy and put you in command of your device.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        We are committed to continuous improvement and value user feedback. Our goal is to make Block Guard the most effective and user-friendly call and SMS filtering solution available. Thank you for choosing Block Guard!
      </p>
      {/* Optional: Team section
      <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mt-10 mb-4">Our Team</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
        [Block Guard LLC is comprised of dedicated developers and designers focused on mobile security and user experience.]
      </p>
      */}
    </div>
  </div>
);

const PrivacyPolicyPage = ({ copyToClipboard, copiedStatus }) => {
  const policyText = `Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

Block Guard LLC ("we," "us," or "our") operates the Block Guard mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.

Information Collection and Use
Block Guard is designed to operate primarily on your device. We collect the following types of information for the sole purpose of providing and improving the Service features:
User-Provided Data:
- Phone numbers you explicitly add to your blocklist or whitelist.
- Area codes you explicitly add to your blocklist or whitelist.
- Keywords you explicitly add for SMS/text message blocking.
Data Processed for Functionality (Primarily On-Device):
- Call Log Data: If you grant READ_CALL_LOG and WRITE_CALL_LOG permissions, the app accesses your call log to identify incoming numbers for blocking, to log blocked calls within the app, and to allow you to add numbers from your call history to block/whitelists. This data is processed on your device.
- Contact List Data: If you grant READ_CONTACTS permission, the app accesses your contacts to enable whitelisting, identify callers by name, and allow contacts during Do Not Disturb mode. Your contact list is NOT uploaded or shared from your device by Block Guard.
- SMS Content (for Text Blocking): If you enable text message blocking and grant necessary SMS permissions (READ_SMS, RECEIVE_SMS), the app will process incoming SMS content on your device to match against your defined blocked senders or keywords. Blocked SMS messages may be logged within the app for your review. The content of non-blocked SMS messages is not stored by Block Guard beyond what your default SMS app stores.
- Notification Access (BIND_NOTIFICATION_LISTENER_SERVICE): If text message blocking is active and the app is not the default SMS app, this permission may be used to read incoming message notifications on-device to identify and block messages based on sender or content.

How Information is Used
The information Block Guard processes is used solely to:
- Provide the core features of the app: call blocking, text message blocking, whitelisting, area code filtering, and Do Not Disturb functionality.
- Display call logs and blocked message logs within the app for your reference.
- Improve the functionality and user experience of the app.

Data Storage and Security
- All your settings (blocklists, whitelists, keywords, app preferences) are stored locally on your device.
- We utilize Android's EncryptedSharedPreferences (via androidx.security:security-crypto) for enhanced data protection of these settings on your device.
- The Backup and Restore feature allows you to create a user-password-encrypted backup file of your settings. This file is stored where you choose (e.g., your device storage, cloud drive). The security of this backup file outside of the app is your responsibility.

Data Sharing
Block Guard LLC does not share your personal data, call logs, contact lists, or message content with any third parties. All processing for blocking and filtering happens on your device.

Permissions
Block Guard requests the following key permissions to function. We only ask for permissions necessary for the app's features:
- READ_PHONE_STATE, ANSWER_PHONE_CALLS, MANAGE_OWN_CALLS: To detect, identify, and manage incoming calls for blocking.
- CALL_PHONE: To enable direct calling from logs or the app interface (if such a feature is used).
- READ_CONTACTS: To identify callers from your contacts, for whitelisting, and to allow contacts during DND.
- READ_CALL_LOG / WRITE_CALL_LOG: To display call history and log blocked calls within the app.
- READ_SMS / RECEIVE_SMS / SEND_SMS: For text message blocking and if set as default SMS app.
- BIND_SCREENING_SERVICE: For advanced call screening capabilities on supported Android versions.
- ACCESS_NOTIFICATION_POLICY: For Do Not Disturb functionality.
- POST_NOTIFICATIONS (Android 13+): To show status notifications (e.g., when DND is active).

User Rights
You have control over your data within the app. You can:
- View and modify your blocklists, whitelists, and keyword lists.
- Clear your blocked call log and blocked SMS log within the app.
- Manage app permissions through your device settings.
- Use the Backup & Restore feature to manage your settings data.

Policy Updates
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.

Contact Us
If you have any questions about this Privacy Policy, please contact us at: privacy@blockguard.app`;

  return (
    <div className="space-y-8">
      <PageTitle title="Privacy Policy" subtitle="Your privacy is important to us. This policy explains how Block Guard handles your information." />
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md relative">
        <button
          onClick={() => copyToClipboard(policyText)}
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md text-xs transition-colors duration-150 flex items-center"
          aria-label="Copy policy to clipboard"
        >
          {copiedStatus ? <CheckCircle size={16} className="mr-1" /> : <Copy size={16} className="mr-1" />}
          {copiedStatus ? 'Copied!' : 'Copy'}
        </button>
        <div className="prose prose-lg dark:prose-invert max-w-none"> {/* Added max-w-none to prose */}
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>Block Guard LLC ("we," "us," or "our") operates the Block Guard mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
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
                <li>We utilize Android's <strong>EncryptedSharedPreferences</strong> (via `androidx.security:security-crypto`) for enhanced data protection of these settings on your device.</li>
                <li>The Backup and Restore feature allows you to create a user-password-encrypted backup file of your settings. This file is stored where you choose (e.g., your device storage, cloud drive). The security of this backup file outside of the app is your responsibility.</li>
            </ul>

            <h2>Data Sharing</h2>
            <p><strong>Block Guard LLC does not share your personal data, call logs, contact lists, or message content with any third parties.</strong> All processing for blocking and filtering happens on your device.</p>

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
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@blockguard.app" className="text-blue-600 hover:underline dark:text-blue-400">privacy@blockguard.app</a></p>
        </div>
      </div>
    </div>
  );
};


const TermsOfServicePage = () => {
  const termsText = `Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

These Terms of Service ("Terms") govern your use of the Block Guard mobile application (the "Service") provided by Block Guard LLC ("we," "us," or "our").
By downloading, installing, or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.

1. Use of the Service
Block Guard grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal, non-commercial purposes, strictly in accordance with these Terms and any applicable laws.

2. Acceptable Use
You agree not to use the Service:
- In any way that violates any applicable national or international law or regulation.
- For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.
- To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.
- To impersonate or attempt to impersonate Block Guard LLC, a Block Guard LLC employee, another user, or any other person or entity.
- In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
- To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Block Guard LLC or users of the Service or expose them to liability.

3. Intellectual Property
The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Block Guard LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
This software is proprietary and confidential. Unauthorized copying, distribution, modification, public display, or public performance of the Service or any part thereof is strictly prohibited. All rights reserved by Block Guard LLC.
© ${new Date().getFullYear()} Block Guard LLC. All Rights Reserved.

4. Disclaimer of Warranties
THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. BLOCK GUARD LLC MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
NEITHER BLOCK GUARD LLC NOR ANY PERSON ASSOCIATED WITH BLOCK GUARD LLC MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER BLOCK GUARD LLC NOR ANYONE ASSOCIATED WITH BLOCK GUARD LLC REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
BLOCK GUARD LLC HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.

5. Limitation of Liability
EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF BLOCK GUARD LLC, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.

6. Governing Law
These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Block Guard LLC is established, without regard to its conflict of law provisions.

7. Changes to Terms
We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.

8. Contact Us
If you have any questions about these Terms, please contact us at: terms@blockguard.app`;
  const [copiedTerms, setCopiedTerms] = useState(false);

  const copyTermsToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedTerms(true);
      setTimeout(() => setCopiedTerms(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="space-y-8">
      <PageTitle title="Terms of Service" subtitle="Please read these terms carefully before using the Block Guard application." />
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md relative">
        <button
          onClick={() => copyTermsToClipboard(termsText)}
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md text-xs transition-colors duration-150 flex items-center"
          aria-label="Copy terms to clipboard"
        >
          {copiedTerms ? <CheckCircle size={16} className="mr-1" /> : <Copy size={16} className="mr-1" />}
          {copiedTerms ? 'Copied!' : 'Copy'}
        </button>
        <div className="prose prose-lg dark:prose-invert max-w-none"> {/* Added max-w-none to prose */}
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>These Terms of Service ("Terms") govern your use of the Block Guard mobile application (the "Service") provided by Block Guard LLC ("we," "us," or "our").</p>
            <p>By downloading, installing, or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

            <h2>1. Use of the Service</h2>
            <p>Block Guard grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal, non-commercial purposes, strictly in accordance with these Terms and any applicable laws.</p>

            <h2>2. Acceptable Use</h2>
            <p>You agree not to use the Service:</p>
            <ul>
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate Block Guard LLC, a Block Guard LLC employee, another user, or any other person or entity.</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Block Guard LLC or users of the Service or expose them to liability.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Block Guard LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
            <p>This software is proprietary and confidential. Unauthorized copying, distribution, modification, public display, or public performance of the Service or any part thereof is strictly prohibited. All rights reserved by Block Guard LLC.</p>
            <p>© {new Date().getFullYear()} Block Guard LLC. All Rights Reserved.</p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. BLOCK GUARD LLC MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
            <p>NEITHER BLOCK GUARD LLC NOR ANY PERSON ASSOCIATED WITH BLOCK GUARD LLC MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER BLOCK GUARD LLC NOR ANYONE ASSOCIATED WITH BLOCK GUARD LLC REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
            <p>BLOCK GUARD LLC HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>
            <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>

            <h2>5. Limitation of Liability</h2>
            <p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF BLOCK GUARD LLC, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>

            <h2>6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Block Guard LLC is established, without regard to its conflict of law provisions.</p>

            <h2>7. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: <a href="mailto:terms@blockguard.app" className="text-blue-600 hover:underline dark:text-blue-400">terms@blockguard.app</a></p>
        </div>
      </div>
    </div>
  );
};


// const BlogPage = () => (
//   <div>
//     <PageTitle title="Block Guard Blog" subtitle="Updates, tips on call blocking, and security news." />
//     <p className="text-center">Blog content coming soon!</p>
//     {/* Placeholder for blog posts */}
//   </div>
// );

export default App;