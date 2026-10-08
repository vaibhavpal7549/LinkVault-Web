export interface Config {
  PRODUCT_NAME: string;
  PRODUCT_TAGLINE: string;
  PRODUCT_DESCRIPTION: string;
  CHROME_WEB_STORE_URL: string;
  SUPPORT_EMAIL: string;
  PRIVACY_EMAIL: string;
  SITE_URL: string;
  GITHUB_URL: string;
  LINKEDIN_URL: string;
  VERSION: string;
}

export const CONFIG: Config = {
  PRODUCT_NAME: "LinkVault",
  PRODUCT_TAGLINE: "Your professional links, always within reach.",
  PRODUCT_DESCRIPTION:
    "LinkVault is a Chrome extension that lets users save, organize, and quickly copy their important professional links from one place.",
  CHROME_WEB_STORE_URL:
    "https://chromewebstore.google.com/detail/linkvault/placeholder-replace-with-your-extension-id",
  SUPPORT_EMAIL: "business.technicalaajtak@gmail.com",
  PRIVACY_EMAIL: "business.technicalaajtak@gmail.com",
  SITE_URL: "https://linkvault.app",
  GITHUB_URL: "https://github.com/linkvault",
  LINKEDIN_URL: "https://linkedin.com/company/linkvault",
  VERSION: "1.0.0",
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "privacy" | "troubleshooting";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is LinkVault?",
    answer:
      "LinkVault is a clean, lightweight Chrome browser extension (Manifest V3) designed to help students, job seekers, developers, freelancers, and professionals store their profile links in one place for instant 1-click copying.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "Who is LinkVault for?",
    answer:
      "LinkVault is built for anyone who repeatedly fills out job applications, internship forms, freelance proposals, or professional surveys requiring links to LinkedIn, GitHub, portfolios, resumes, coding profiles (LeetCode, CodeChef, HackerRank, GeeksForGeeks, Kaggle, StackOverflow), or custom websites.",
    category: "general",
  },
  {
    id: "faq-3",
    question: "What kind of links can I save in LinkVault?",
    answer:
      "You can save any valid URL across 20+ supported platforms (LinkedIn, GitHub, Portfolio, Resume, LeetCode, CodeChef, HackerRank, GeeksForGeeks, Kaggle, StackOverflow, Medium, Behance, Dribbble, Twitter, YouTube, etc.) or add custom web links with custom category tagging.",
    category: "general",
  },
  {
    id: "faq-4",
    question: "Can I save my LinkedIn and GitHub profiles?",
    answer:
      "Yes, LinkVault has built-in platform detection for LinkedIn, GitHub, LeetCode, CodeChef, HackerRank, StackOverflow, and personal portfolio sites.",
    category: "general",
  },
  {
    id: "faq-5",
    question: "Can I save my resume and portfolio links?",
    answer:
      "Absolutely. You can add direct links to your Google Drive resume, PDF documents, portfolio site, or Notion resume pages.",
    category: "general",
  },
  {
    id: "faq-6",
    question: "Does LinkVault automatically apply for jobs on my behalf?",
    answer:
      "No. LinkVault is strictly a fast profile link copier and organizer. It does NOT automatically apply for jobs, fill out application forms on external sites, or submit proposals.",
    category: "general",
  },
  {
    id: "faq-7",
    question: "Does LinkVault submit job applications?",
    answer:
      "No. LinkVault does not submit applications, click submit buttons, or interact with job application portals.",
    category: "general",
  },
  {
    id: "faq-8",
    question: "Does LinkVault scrape job websites?",
    answer:
      "No. LinkVault never scrapes, monitors, or reads the content of job websites or external web pages.",
    category: "privacy",
  },
  {
    id: "faq-9",
    question: "Does LinkVault require Google Sign-In?",
    answer:
      "No. Google Sign-In is optional via Chrome Identity API. You can use LinkVault in Guest / Local mode with local storage, or sign in with Google to enable cross-device cloud synchronization.",
    category: "privacy",
  },
  {
    id: "faq-10",
    question: "Where are my saved links stored?",
    answer:
      "LinkVault uses official Chrome extension storage (`chrome.storage.local`) to store your saved links and preferences locally within your browser. When Google Sign-In is enabled, your links also sync securely with your LinkVault account.",
    category: "privacy",
  },
  {
    id: "faq-11",
    question: "What permissions does LinkVault use?",
    answer:
      "LinkVault uses 4 manifest permissions: `storage` (local data persistence), `clipboardWrite` (to copy URLs to clipboard), `identity` (optional Google OAuth authentication), and `activeTab` (browser tab interaction).",
    category: "privacy",
  },
  {
    id: "faq-12",
    question: "Can I export and import my saved links?",
    answer:
      "Yes! LinkVault includes full JSON Export & Import capabilities. You can export your saved links into a `.json` backup file or import existing link collections from the Options page.",
    category: "general",
  },
  {
    id: "faq-13",
    question: "How do I install LinkVault?",
    answer:
      "Open the LinkVault page on the Chrome Web Store, click 'Add to Chrome', confirm the installation prompt, and pin the extension icon to your Chrome toolbar for instant access.",
    category: "troubleshooting",
  },
  {
    id: "faq-14",
    question: "How do I contact LinkVault support?",
    answer: `If you have questions, feedback, or need assistance, you can email our support team directly at ${CONFIG.SUPPORT_EMAIL}.`,
    category: "troubleshooting",
  },
];

export interface AudienceCard {
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export const AUDIENCE_DATA: AudienceCard[] = [
  {
    title: "Students",
    description: "Keep your resume, college profile, portfolio, and coding profiles ready.",
    iconName: "GraduationCap",
    badge: "College & Campus",
  },
  {
    title: "Job Seekers",
    description: "Stop repeatedly searching for your professional links during applications.",
    iconName: "Briefcase",
    badge: "Career Growth",
  },
  {
    title: "Developers",
    description: "Keep GitHub, portfolio, LeetCode, CodeChef and other developer profiles together.",
    iconName: "Code2",
    badge: "Engineering",
  },
  {
    title: "Freelancers",
    description: "Quickly share your portfolio and professional profiles.",
    iconName: "Laptop",
    badge: "Client Proposals",
  },
  {
    title: "Professionals",
    description: "Keep frequently shared professional links accessible from your browser.",
    iconName: "UserCheck",
    badge: "Networking",
  },
];

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    title: "One Place for Your Links",
    description: "Keep professional profile, career, and portfolio links together in one clean interface.",
    iconName: "FolderKanban",
    tag: "Organization",
  },
  {
    title: "One-Click Copy & Quick Bar",
    description: "Copy saved links quickly with visual feedback, plus pin top items to the Quick Copy bar.",
    iconName: "Copy",
    tag: "Speed",
  },
  {
    title: "Job Application Friendly",
    description: "Designed around repetitive link-sharing during job and internship applications.",
    iconName: "Send",
    tag: "Productivity",
  },
  {
    title: "Developer Friendly",
    description: "Keep GitHub, LeetCode, CodeChef, HackerRank, GeeksForGeeks, Kaggle, and coding profiles accessible.",
    iconName: "Terminal",
    tag: "Dev Suite",
  },
  {
    title: "Simple Interface & JSON Export",
    description: "No unnecessary complexity. Search, organize, star favorites, or backup links to JSON anytime.",
    iconName: "Sparkles",
    tag: "Clean UX",
  },
  {
    title: "Google Sign-In & Cloud Sync",
    description: "If enabled, authenticate using your Google account to sync your saved links securely across devices.",
    iconName: "ShieldCheck",
    tag: "Authentication",
  },
];

export interface PermissionDetail {
  name: string;
  purpose: string;
  permissionKey: string;
}

export const PERMISSIONS_DATA: PermissionDetail[] = [
  {
    name: "Storage Permission",
    permissionKey: "storage",
    purpose: "Used to save your LinkVault profile links, categories, theme options, and extension settings in Chrome local storage.",
  },
  {
    name: "Clipboard Permission",
    permissionKey: "clipboardWrite",
    purpose: "Used exclusively when you click 'Copy' on a saved link to copy the URL to your system clipboard.",
  },
  {
    name: "Identity Permission",
    permissionKey: "identity",
    purpose: "Used for Google account OAuth authentication via Chrome Identity API when Google Sign-In is enabled.",
  },
  {
    name: "Active Tab Permission",
    permissionKey: "activeTab",
    purpose: "Declared in extension manifest for interacting with active tab context when invoked.",
  },
];
