// verify-premium.js
const settings = require('./settings');

console.log('🔍 VERIFYING PREMIUM SETTINGS\n');

console.log('✅ BASIC INFO:');
console.log(`• Bot Name: ${settings.botName}`);
console.log(`• Owner: ${settings.botOwner}`);
console.log(`• Owner Number: ${settings.ownerNumber}`);
console.log(`• Country: ${settings.country}`);
console.log(`• Currency: ${settings.currency}`);

console.log('\n💰 PAYMENT DETAILS:');
console.log(`• OPay Account: ${settings.premiumAccount}`);
console.log(`• Account Name: ${settings.premiumName}`);
console.log(`• Bank: ${settings.premiumBank}`);

console.log('\n📊 SUBSCRIPTION PLANS:');
for (const [plan, details] of Object.entries(settings.subscriptionPlans)) {
    console.log(`• ${plan.toUpperCase()}: ${settings.currency}${details.price} (${details.duration} days)`);
}

console.log('\n⚙️ SYSTEM SETTINGS:');
console.log(`• Free User Limit: ${settings.freeUserLimit} commands/day`);
console.log(`• Premium Enabled: ${settings.premiumEnabled}`);
console.log(`• Notify Owner: ${settings.notifyOwnerOnPayment}`);

console.log('\n🎯 PAYMENT INSTRUCTIONS FOR USERS:');
console.log(`Users will pay to: ${settings.paymentMethods.opay}`);
console.log(`Bank: ${settings.paymentMethods.bank}`);
console.log(`Account Name: ${settings.paymentMethods.accountName}`);

console.log('\n✅ SETTINGS VERIFIED!');
console.log('📝 Users will see:');
console.log(`   .premium → Shows plans in ${settings.currency}`);
console.log(`   Payment to: ${settings.premiumAccount}`);
console.log(`   Owner: ${settings.ownerNumber}`);