# Task: put the new legal pages on the website (for Facebook Messenger approval)

**Why:** Before real customers can message businesses through our CRM on Facebook Messenger, Facebook (Meta)
has to approve our app. Meta checks three pages on our website first: Privacy Policy, Terms & Conditions and
Data deletion. Right now (checked 27 Oct 2026):

- `upliftcontractor.com/privacy` loads, but it still has the **old text**
- `upliftcontractor.com/terms` loads, but it most likely still has the **old text**
- `upliftcontractor.com/data-deletion` **does not exist** (page not found)

The finished text for all three pages is already written in **`docs/legal-pages-update.md`**. This task moves
that text into the website and publishes it.

---

## A. Read and approve the text

1. Open `docs/legal-pages-update.md` and read all three pages' text.
2. Check that you're happy with these two promises before they go public:
   - We answer every deletion request **within 30 days**.
   - **Amazon SES** (sends email) and **Twilio** (sends texts and calls) are named as services we use.
3. If you want anything changed, change it in that file first, so everything below copies the final text.

## B. Privacy Policy page

4. Open `src/pages/privacy.astro`.
5. Keep the page's layout, styles and classes exactly as they are. Replace **only the words**.
6. Put the "Legal · Last updated …" line in the small pill above the title (`legal-page__eyebrow`).
7. The page title goes in the `<h1>`, and the line under it goes in `legal-page__intro`.
8. Copy every section from "## Privacy Policy" in `docs/legal-pages-update.md` in the same order: "Who we are",
   "What we collect", "How we use it", "Facebook Messenger", "Who helps us run the service", "Text messages
   from Uplift Contractor", "How long we keep it, and how we protect it", "Your choices", "Changes".

## C. Terms & Conditions page

9. Open `src/pages/terms.astro`.
10. Do the same as steps 5–7: keep the look and replace only the words.
11. Copy every section from "## Terms & Conditions": "Our services and your account", "Using the platform
    fairly", "Facebook Messenger", "Payments and cancelling", "Uplift Contractor SMS Program", "Other
    companies' services", "Changes and questions".

## D. New Data deletion page

12. Make a copy of `src/pages/privacy.astro` and name it **`src/pages/data-deletion.astro`**.
13. In the copy, replace the words with the "## Data deletion" text: "You messaged a business on Facebook",
    "Your business connected a Facebook Page", "Anything else", "What happens next".
14. Change the page's browser title and description (in the `<Layout …>` part at the top) to say "Data
    deletion" instead of "Privacy Policy".

## E. Footer link

15. Open `src/data/data.js` and find `resources:` (around line 421).
16. Between the "Terms & Conditions" line and the "Contact" line, add:

    ```js
    { label: "Data deletion", href: "/data-deletion" },
    ```

## F. Check it on your computer

17. In a terminal in this folder, run `npm run dev` and open the address it shows (usually
    `http://localhost:4321`).
18. Open `/privacy`, `/terms` and `/data-deletion`. Each one should look like the old legal pages, with the new
    words, no broken layout and no leftover old text.
19. Scroll to the footer on the home page and click **Data deletion**. It should open the new page.
20. Run `npm run build`. It must finish with no errors.

## G. Publish

21. Save your work in Git and push it to GitHub (`mdjafarkhan123/upliftwebsite`), the same way you normally
    publish the site. The site runs behind Cloudflare, so pushing usually updates it within a few minutes.
22. Open these three addresses in a normal browser and confirm each one loads with the new text:
    - https://upliftcontractor.com/privacy
    - https://upliftcontractor.com/terms
    - https://upliftcontractor.com/data-deletion

## H. Tell Claude in the CRM project (Ucrm)

23. Say "the legal pages are live". Claude will check them, then help you in Chrome with the Meta steps:
    - Put the three addresses into **Meta App Dashboard → App settings → Basic** (Privacy Policy URL, Terms of
      Service URL, User data deletion → "Data deletion instructions URL").
    - Fill in **App Review**: app icon, instructions for Meta's reviewer with a test login, and short screen
      recordings for each permission (`pages_messaging`, `pages_manage_metadata`, `pages_show_list`,
      `business_management`, Business Asset User Profile Access, and Human Agent).
    - Submit, then wait a few days for Meta's answer.

## Z. Done when

- All three pages load publicly with the new text.
- The footer shows Privacy Policy, Terms & Conditions, Data deletion and Contact.
- The Meta App Dashboard has all three addresses saved, and App Review has been submitted.

---

**Optional clean-up (your choice):** `design.pen` and the `design/` folder in this project hold an unused
header and footer drawing and a copy of the logo. Keep them or delete them; nothing depends on them.
