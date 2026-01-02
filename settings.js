const settings = {
  // 🔴 BASIC SETTINGS 🔴
  packname: 'ZUKO MD',
  author: 'ZUKO',
  botName: "ZUKO-MD",
  prefix: '.', 
  botOwner: 'ZUKO🥵',
  ownerNumber: '2347081827038', 
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "HAIL ZUKO🥵🥵.",
  version: "1.0.1",
  updateZipUrl: "https://github.com/Neggy5/ZUKO-MD/archive/refs/heads/main.zip",
  
  // 🔴 PREMIUM SYSTEM SETTINGS 🔴
  premiumAccount: "8169946429", // Your OPay account number for payments
  premiumName: "ZUKO-MD Premium", // Account name for payments
  premiumBank: "OPay", // Payment bank
  currency: "₦", // Nigerian Naira symbol
  country: "Nigeria", // Country for payments
  
  // 🔴 SUBSCRIPTION PLANS (Prices in Naira) 🔴
  subscriptionPlans: {
    weekly: { 
      price: 500, // ₦500
      duration: 7, // 7 days
      name: "Weekly Plan",
      features: ["AI Commands", "Media Downloads", "Priority Support"]
    },
    monthly: { 
      price: 1500, // ₦1,500
      duration: 30, // 30 days
      name: "Monthly Plan",
      features: ["All Weekly Features", "Automation", "No Ads"]
    },
    yearly: { 
      price: 12500, // ₦12,500
      duration: 365, // 365 days
      name: "Yearly Plan",
      features: ["All Features", "Beta Access", "Custom Commands"]
    }
  },
  
  // 🔴 PAYMENT METHODS 🔴
  paymentMethods: {
    opay: "8169946429", // Your OPay number
    bank: "OPay",
    accountName: "ZUKO-MD Premium",
    instructions: "Transfer to OPay: 8169946429"
  },
  
  // 🔴 PREMIUM COMMAND SETTINGS 🔴
  freeUserLimit: 5, // Free users get 5 premium commands per day
  premiumEnabled: true, // Enable/disable premium system
  autoVerify: false, // Set to true if you want auto-verification (not recommended)
  
  // 🔴 NOTIFICATION SETTINGS 🔴
  notifyOwnerOnPayment: true, // Send WhatsApp notification to owner when payment is made
  ownerWhatsApp: "2347081827038@s.whatsapp.net", // Your WhatsApp for notifications
  
  // 🔴 SUPPORT SETTINGS 🔴
  supportGroup: "", // Your support group link
  newsletterJid: "120363402594689882@newsletter", // Newsletter ID
  supportEmail: "", // Support email
  website: "https://github.com/Neggy5/zuko-md", // Your website
  
  // 🔴 SECURITY SETTINGS 🔴
  allowedCountries: ["Nigeria", "NG"], // Countries allowed to use premium
  maxPendingPayments: 10, // Maximum pending payments at once
  paymentTimeout: 3600000, // Payment expires in 1 hour (ms)
  
  // 🔴 BOT MODE SETTINGS 🔴
  botModes: {
    public: "Everyone can use all free commands",
    private: "Only owner/sudo can use commands",
    premiumOnly: "Only premium users can use bot"
  },
  
  // 🔴 ADVANCED SETTINGS 🔴
  enableAnalytics: true, // Track command usage
  backupInterval: 86400000, // Backup data every 24 hours
  cleanUpInterval: 3600000, // Clean expired data every hour
  debugMode: false // Enable debug logging
};

module.exports = settings;