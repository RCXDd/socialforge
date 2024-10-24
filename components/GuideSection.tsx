import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const guides = [
  {
    title: "How to use guide for Accounts",
    content: `
      Time for checking the goods
      We recommend you checking the goods immediately after purchase or within 24 hours to get a replacement in case of problems.

      Replacement warranty
      ● If you cannot log in to your account for the first time (wrong password, wrong email, checkpoint)
      ● If the account is sent to the checkpoint for identification within 5 days of purchase

      ℹ️ After running ads or adding a payment method there is no warranty. Because your payment methods and ad materials are out of our control.

      Device
      Best option for working with accounts is using non-detection browser: GoLogin, Adspower, Incogniton, Multilogin

      Proxy
      ● Always use mobile or residential proxy: AstroProxy, ProxyCheap, Proxy6
      ● Instead of Proxy you can use 4G mobile hotspot to share connection from phone to PC. But you always need to turn on airplane flight mode for 5 seconds before entering to the next account. Airplane flight mode will change your IP address. Never use VPN, Tor or IPv6 Proxy.

      ℹ️ Some of our account are provided with a proxy. It's a free bonus. You can use these proxies as long as they are active. After that, you need to purchase your own.

      Warming of account
      On the first day log in to the account and do nothing there, just close the browser. Let the account get used to the new browser. Leave it for 1-3 days, then you can log in again, create a Page, and run Ads.

      If you do not follow our recommendations, we do not guarantee that we will be able to replace your goods or return the money.
    `
  },
  {
    title: "How to use guide for Business Manager",
    content: `
      ❗️1️⃣ REMOVE OLD ADMIN before adding payment method and running ad campaign. It's only your responsibility. Work safe like a pro.

      If FB prompt you to WAIT for 7 DAYS, you may set 2-Factor-Authentication in the BM settings (Check procedure below) and add payment method then run ads as usual. Please remove old admin after 7 days.

      ❗️2️⃣ If Facebook shows that the limit is $25 or $50, but you purchased a BM limit of $250, don't worry, the limit will increase to $250 after few payments in billing. This is a new fraud protection from Facebook.
      We check all limits before selling. Buying in our store, you can be sure that you will get what you paid for.

      ❗️3️⃣ How to save $250 limit on your BM after purchase:
      - Don't change account currency (keep USD)
      - Don't scale your ad campaigns too fast
      - Facebook drops the limit if he don't like your ad materials (if you're promoting black-hat, most likely limit will be decreased)
      - Usually, campaign starts spending $250 after you paid $50 threshold in billing

      Time for checking the goods
      We recommend you checking the goods immediately after purchase or within 24 hours to get a replacement in case of problems.

      Replacement warranty
      ● You have 2 days after the purchase to activate your BM. After 2 days there is no guarantee.
      ● If BM is blocked after publishing ads it's not a reason for replacement.

      Device
      Best option for working with accounts is using non-detection browser: GoLogin, Adspower, Incogniton, Morelogin (15% off)

      Proxy
      ● Always use mobile or residential proxy: AstroProxy, ProxyCheap, ProxySale, Proxy6
      ● Instead of Proxy you can use 4G mobile hotspot to share connection from phone to PC. But you always need to turn on airplane flight mode for 5 seconds before entering to the next account. Airplane flight mode will change your IP address. Never use VPN, Tor or IPv6 Proxy.

      Payment method
      If you need to get a reliable payment method, you can use the Xcards service for issuing bank cards. Xcards have been tested with our products and approved by Smash Store team.

      • 43 unique BINs
      • Card issue FREE
      • 5% commission on deposit
      • Top-up balance with crypto
      • Works with Facebook, Business Manager, and TikTok accounts

      Activation
      ● To activate Business Manager open the needed Facebook account, then open in the browser tab one of the links provided to you. Enter your name, password and follow the instructions
      ● Don't change any info inside the BM (name, email, and so on)
      If you do not follow our recommendations, we do not guarantee that we will be able to replace your goods or return the money.
    `
  },
  {
    title: "How to use Xcards to get a payment method for Facebook Ads",
    content: `
      Xcards is a virtual card provider for smooth and secure payments across various channels, including Facebook, TikTok, and Google Ads. It enables advertisers and marketers to easily issue and link their cards for hassle-free campaign management. Designed to ensure seamless ad execution, Xcards effectively bypasses common obstacles like payment limitations and regional restrictions.

      Part 1 - Registration and Card Issuance
      1. Open the Xcards website and click the "Issue a card" button.
      2. In the next window, switch to the "Sign Up" tab. Enter your email address, reliable password, and agree to the "Terms and Conditions" to create an account.
      3. To activate your Xcards account and start issuing cards, please verify your email address.
      4. Once you have confirmed your email, you need to top up your balance. Click the "Top up" button on the main page of your account.
      5. Enter your desired amount and select a cryptocurrency below to transfer the funds.
      6. Once you have made the payment, it will take about 5-10 minutes for the transaction to be confirmed, and your funds to appear on your Xcards balance.
      7. Go to the Cards section of the menu and click the "Issue a card" button.
      8. Choose a card from the available BINs and click "Buy".
      9. Choose how much money you want to add to your card.
      10. Refresh the page and you will see that the card is ready. Click on it to see the details.

      Part 2 - Card Top-Up
      1. Find the "Cards" section in the main menu and select the desired card.
      2. Click "Transfer" in the upper right corner.
      3. Choose the account you'll be transferring the money from.
      4. Select the card you wish to top-up.
      5. Enter the amount to transfer.
      6. Click "Transfer".

      Part 3 - Getting verification code for Facebook
      1. Go to the "Transactions" section in the left menu.
      2. Select the card for which you need the verification code.
      3. Locate the most recent transaction in the window that appears.
      4. Find the verification code within the transaction details.
    `
  },
  {
    title: "How to pass Advertising Restricted Access",
    content: `
      Advertising Restricted Access is one of the types of restrictions on Facebook. When the account is restricted it's not allowed to run ads. To make the account active again user needs to send ID Photo and successfully pass verification. Let's figure out how to do that:

      1. Open Account quality: https://www.facebook.com/accountquality
      2. Click Request Review
      3. On the next step Facebook will ask to confirm account through phone or email (not always asking)
      4. Add a phone number or email and get a code, then enter it into the form
      5. After successful confirmation, Facebook will ask you about ID photo:
         - Open this free service Docgen (translate a website in google chrome if needed)
         - Fill out the form according to your account information (example)
         - Upload ID photo to FB (sometimes you can't upload a photo from 1st try, in this case, you need to make a photo again and resend it)
         - Wait (5 min - 24 hours) and the account will be re-activated

      PS: Sometimes you won't be able to get a code on your email or phone, because Facebook just won't send it. Unfortunately, we can't help in this case.
      PS 2: We are not providing phone numbers, emails or photos.
    `
  },
  {
    title: "How to avoid account blocking",
    content: `
      Part 1 - Why is the account being blocked?

      Problem: Launching an account on a suspicious PC
      Solution: Work using non-detect browsers

      Problem: Launching an account on a suspicious IP-address
      Solution: Change the IP if you have account that has been blocked Or use a proxy (preferably the country in which the account was registered)

      Problem: Rough account transfer
      Solution: Log in using cookies, because Facebook doesn't like it when you enter your password several times

      Problem: Suspicious activity
      Solution: Do not rush to create an advertising campaign. If you just logged in to your account and after 5 minutes you go to link the card and run ads, you will be blocked with a 99% probability

      Part 2 - How to avoid all the problems described above?
      We have a new service that is called Account Sharing, we can transfer account from our non-detect browser to yours. This option is available to almost all of our accounts.

      What does this mean?
      You will be able to login the account from the same device on which this account was registered with the same IP address. For Facebook, this transition is seamless and will not recognize as a new user. All you have to do is log in to your account and launch an Ad.

      Part 3 - How to get it?
      1. Non-detect browser - our accounts are registered using GoLogin Browser, so for secured transfer you also need to install it.
      ℹ️ GoLogin is a paid browser for accounts management, but there is a free trial for small teams available too. Please use promo code "SMASH" to get one month free.

      2. Proxy - proxy is included upon purchase and valid for about 15 days. We can extend the validity of that proxy for 30 days for additional $3, or you can buy your own proxy.
    `
  },
  {
    title: "Complete Guide by Smash Store",
    content: `
      Step 1 - Browser
      Forget about Google Chrome, need to use only specialized anti-detect browsers
      ℹ️ Anti-detect profile will look like a new PC for Facebook
      1) GoLogin - 3 free profiles, then $24/month if pay annually
      2) Adspower - 2 free profiles, then $10/month
      3) Incogniton - 10 free profiles, then $30/month
      4) Morelogin - 2 free profiles, then $9/month (15% off)

      Step 2 - Proxy
      Highly recommend using Mobile or Residential proxies. Datacenter will work as well, but they have less trust-rate from Facebook
      ℹ️ On residential and mobile proxies you can just buy 1 port and rotate it for all your FB accounts. On datacenter proxies you have to buy new proxy for each account.

      Trusted Proxy Providers List:
      1) Astroproxy - mobile, residential (USA, Bangladesh and more)
      2) ProxyCheap - mobile, residential (USA, Bangladesh and more)
      3) IPRoyal - mobile, residential (KYC Required)
      4) Proxy6 - datacenter

      ℹ️ Some of our account are provided with a proxy. It's a free bonus. You can use these proxies as long as they are active. After that, you need to purchase your own.

      Step 3 - Setup Proxy + Anti-detect
      We'll show how to set up things on Adspower and Sphere, on other browsers you can use the same approach as our example.
      1) Adspower + Proxy
      2) Sphere Free + Proxy
      3) Chrome + Proxy SwitchyOmega

      Step 4 - Warming of accounts
      Read these documents after purchase accordingly to your order:
      ◆ How-to-use guide for Accounts
      ◆ How-to-use guide for BMs
      ◆ How-to-use guide for TikTok

      Payment method
      If you need to get a reliable payment method, you can use the Xcards service for issuing bank cards. Xcards have been tested with our products and approved by Smash Store team.
      • 43 unique BINs
      • Card issue FREE
      • 5% commission on deposit
      • Top-up balance with crypto
      • Works with Facebook, Business Manager, and TikTok accounts

      Step 5 - Results
      The method described above should help you with your Facebook Ads issues. Bans, checkpoints, restricted advertising access - the number of cases should greatly decrease, but keep in mind that it's still not a 100% guarantee. No one can give it to you. Keep testing and you will find best way.
    `
  },
  {
    title: "How to Use BrowserScan to Detect Browser Fingerprints",
    content: `
      Risks of Multi-Accounting:
      Multi-account operations have become common in e-commerce, social media, advertising, and affiliate marketing. However, browser fingerprint leakage can lead to account bans.

      Anti-Detect Browsers Are Not a Panacea:
      Even with fingerprint browsers, accounts may not be completely safe due to different technologies or improper use.

      Using BrowserScan to Detect Browser Fingerprints:
      Access browserscan.net to understand your complete browser fingerprint.

      Key areas to check:
      1. Overview: Check authenticity of browser fingerprint
      2. IP Address: Check for WebRTC leaks
      3. Geolocation: Verify IP address attribution
      4. Browser: Check browser-related information
      5. Hardware: Verify hardware-related fingerprint information
      6. Software: Check timezone, local time, language, and other settings

      Additional Tools:
      - Automated detection for "robot characteristics"
      - Port detection
      - IP address lookup
      - Cookie format conversion

      Conclusion:
      BrowserScan is a powerful tool for detecting browser fingerprints, helping protect personal privacy and network security.
    `
  },
  {
    title: "Transferring an Account to your browser",
    content: `
      Introduction:
      We use GoLogin Browser for account management. GoLogin solves the problem of anonymity when working with many accounts.

      Account Sharing Feature:
      We can seamlessly transfer your account from our GoLogin to yours.

      Steps:
      1. Sign up:
         - Download the latest version of GoLogin and install.
         - Create an account on GoLogin.

      2. Buy an Account:
         - Choose a product with the Account Sharing icon.
         - Contact sales team and complete the purchase.

      3. Request for Sharing:
         - Contact sales team.
         - Send account info (email, phone number, MEGA-link).
         - Send your GoLogin account email.
         - Wait for confirmation and start using the account!

      Tip: We will share all necessary details for login via email + password or cookies.
    `
  },
  {
    title: "How to create Facebook King Accounts",
    content: `
      Disclaimer:
      No one-size-fits-all scheme for running ads on Facebook is guaranteed to work for everyone. Results can vary due to factors like proxies, bank cards, anti-detect browsers, and working schemes.

      Good Strategy:
      - Tools (bank cards, proxies, country targeting) match the same geographic region.
      - One Facebook account includes only 1 advertising campaign, 1 bank card, 1 Fan Page, 1 video ad.
      - Log in once, run ads, and never go there again.

      Example of a good launch:
      ✔︎ Facebook Account USA
      ✔︎ USA proxy
      ✔︎ Payment method released in USA
      ✔︎ Ads targeted to USA

      How to create Facebook King Accounts (short guide):
      1. Sign in to any of your King Accounts
      2. Copy the Facebook profile link
      3. Open Light Account
      4. Paste and go to the copied link
      5. Send a friend invitation from Light to King Account
      6. Switch to King Account
      7. Confirm the new friend's invitation
      8. Switch to Light Account back
      9. Open Personal Ad Account settings
      10. Share admin access of your Personal Ad Account to a King Account
      11. Open King Account and launch an advertising campaign

      Conclusion:
      Working with King Accounts is not new on Facebook, but this approach is currently working and showing good results.
    `
  }
];

export default function GuideSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">User Guides</h2>
        <Accordion type="single" collapsible className="w-full">
          {guides.map((guide, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white hover:text-indigo-400">{guide.title}</AccordionTrigger>
              <AccordionContent className="text-gray-300 whitespace-pre-line">
                {guide.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
