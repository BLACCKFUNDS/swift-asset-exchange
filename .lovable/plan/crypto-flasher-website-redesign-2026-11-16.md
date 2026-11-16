# Crypto Flasher website redesign

## Goal
Refresh the existing site using the reference’s restrained black interface, crisp white typography, and vivid aqua accents, while keeping its existing section structure and working within the current project.

## What will change
- Restyle the existing navigation, hero, feature, pricing, reviews, FAQ, contact, and footer sections as one consistent, polished design; adapt the layout for phone, tablet, and desktop screens.
- Keep the current plan names, amounts, prices, wallet/contact details, and existing non-demo purchase interactions in place rather than rebuilding them.
- Remove the demo call-to-action, demo card/section, and demo-only links.
- Clearly identify the product as a test-only simulation: it does not create genuine blockchain assets or real transfers. Avoid presenting unsupported transaction, safety, customer, or financial claims as verified facts.
- Preserve the existing page and component organization; make presentation-focused changes rather than replacing the site.

## Checks after implementation
- Review the finished page on desktop and mobile.
- Confirm every retained plan, contact detail, payment address, FAQ, and purchase interaction remains available, and that demo content is gone.
- Check that navigation links, contact links, address-copy actions, and the payment form still behave as expected.

## Technical details
- Reuse the current React page and section components, shared UI controls, and semantic theme tokens; avoid a new backend or unrelated features.
- Treat the existing browser-only purchase submission as it is; do not imply that it stores orders or verifies payment.