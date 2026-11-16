# Task: update the Data deletion and Privacy pages (28 October 2026)

**Why:** Until now, someone who wanted their information deleted had to email Uplift. The CRM now lets each
business do it itself: delete a customer, delete a conversation, give a customer a copy of their information,
and download all of its data. The public pages must say so. Facebook (Meta) also reads the Data deletion page
when it reviews our Messenger app.

The finished text is in **`docs/data-privacy-pages-update.md`**. This task moves it into the website and
publishes it. The Terms page does not change.

All legal page text lives in **`src/data/data.js`** under `legalPages`. The `.astro` pages only display it, so
leave `src/pages/*.astro` and the styles exactly as they are.

---

## A. Read and approve the text

1. Open `docs/data-privacy-pages-update.md` and read it.
2. Check you're happy with what it promises in public:
   - Businesses delete and download their customers' information themselves; Uplift steps in when a business
     has closed or doesn't reply.
   - Invoices and payments are kept after a delete, and a "don't contact me" choice survives as a scrambled
     code with no name.
   - We still finish every request within 30 days.
3. If you want anything changed, change it in that file first, then tell Claude in the CRM project so the
   master copy matches.

## B. Data deletion page

4. In `src/data/data.js`, find `data_deletion:` inside `legalPages`.
5. Set `eyebrow` to `"Legal · Last updated 28 October 2026"`, and `description` to the line under the
   **Data deletion** title in the text file.
6. Replace the whole `sections` list with the five sections from the text file, in order: "You're a customer of a
   business that uses Uplift Contractor", "You messaged a business on Facebook", "Your business uses Uplift
   Contractor", "Anything else", "What happens next".
7. Give each section the same shape the old ones have: an `id` of `data-deletion-` plus the title in lowercase
   words joined by dashes, plus the `title` and the `body`. Write each `body` as HTML, the way the existing
   sections do:
   - lists → `<ul><li>…</li></ul>` (numbered steps → `<ol>`), paragraphs → `<p>`
   - **bold** → `<strong>`
   - every email → `<a href="mailto:info@upliftcontractor.com">info@upliftcontractor.com</a>`, the phone →
     `<a href="tel:+8801834969563">+8801834969563</a>`
   - keep the `⋯` character and the → arrows as they are.

## C. Privacy Policy page

8. In `src/data/data.js`, inside `legalPages.privacy`:
   - change its `eyebrow` to `"Legal · Last updated 28 October 2026"`;
   - in the section with id `privacy-facebook-messenger`, replace the paragraph that starts "When a contractor
     disconnects the Page" with the new one;
   - replace the whole body of `privacy-your-choices` with the new text. Keep the link to `/data-deletion`.
9. Leave every other Privacy section as it is.

## D. Check it on your computer

10. In a terminal in this folder, run `npm run dev` and open the address it shows (usually
    `http://localhost:4321`).
11. Open `/data-deletion` and `/privacy`. Each should look exactly like before, with the new words, no broken
    layout, no leftover old text, and working email, phone and page links.
12. Run `npm run build`. It must finish with no errors.

## E. Publish

13. Save your work in Git and push it to GitHub (`mdjafarkhan123/upliftwebsite`), the same way you publish the
    site. Cloudflare usually updates the live site within a few minutes.
14. Open https://upliftcontractor.com/data-deletion and https://upliftcontractor.com/privacy in a normal
    browser and confirm both show the new text.

## F. Tell Claude in the CRM project (Ucrm)

15. Say "the privacy pages are live". Claude checks them and records Part 15 as done.

## Done when

- Both pages load publicly with the new text and the 28 October 2026 date.
- `npm run build` passes and the change is pushed to GitHub.

**Later, a small follow-up:** once the production server's backup period is decided, one sentence about how long
backups keep deleted information is added to the Privacy page's "How long we keep it" section. Claude will
prepare it.
