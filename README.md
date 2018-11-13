# Rainforest Sentry
---
#### PoC:
  Scheduled online merchant price watcher for amazon.ca

  1. take request from web browser that contains part of the product link to an amazon product page and display a form for registering a price subscription (to receive notification when price drop below certain amount/percentage and/or on special deal)

  2. schedule periodic pull from amazon and check for the latest price

  3. send email notification to user when price drop below the pre-set threshold

  4. email should contain link to unsubscribe

  5. store historical price/# of subs for potential visualization/prediction purpose