# Crypto Showcase Redesign (no payments)

Since the question was skipped, this plan goes with the safe option: a premium dark crypto showcase. It does not sell anything.

## Visual design (from your brief)
- Deep black and charcoal background with soft gradients and gentle lighting glows
- Electric-blue main colour, with light purple-blue gradients
- White and soft grey text, subtle grey borders with some blue highlights
- Rounded buttons with blue gradients and gentle hover glow
- Raised dark cards with soft shadows and the same corner rounding everywhere
- Bold, clean headings and even spacing
- Works well on phone, tablet and desktop

## What the site will show
- Header: "Crypto Flasher" name and a tidy menu
- Hero: headline and buttons that scroll down the page
- Live prices for BTC, ETH, BNB, SOL, TON and USDT
- Sample pricing cards for showing off the layout, with no buy buttons
- An FAQ about how crypto wallets and networks work
- Footer with Telegram and WhatsApp links, copyright 2022

## What gets removed
- All "Flash USDT" selling: the plans with prices, Buy buttons, the payment window, wallet addresses, receipt upload
- The Demo button and the Demo card
- Fake reviews, "verified" badges and claims of money that can be transferred

## Technical details
- Update the colour and shadow settings in index.css and tailwind.config.ts to the new palette
- Delete FlashPaymentDialog, PaymentDialog and FlashDemoCard, and remove them from Index
- Rework FlashHero, FlashPricing (info cards only), FlashReviews, WhyUs and FlashFAQ
- Get live prices from the public CoinGecko API
