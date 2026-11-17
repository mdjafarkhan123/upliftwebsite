> **Two open tasks.** This file (the Privacy sentence) and `task-download-app.md` (draw the "Download the app"
> page). Do them one at a time.

# Task: add the backup sentence to the Privacy page (4 November 2026)

**Why:** When a business or Uplift deletes someone's information, the live app forgets it at once, but our
safety backups still hold a copy until they expire. The production server now keeps backups for about 15 days,
so the Privacy page must say so. This is one sentence and a new date. Nothing else changes.

All legal page text lives in **`src/data/data.js`** under `legalPages`. Leave `src/pages/*.astro` and the
styles exactly as they are.

## Steps

1. In `src/data/data.js`, find the Privacy section titled **"How long we keep it, and how we protect it"**.
2. Replace its `body` with exactly:

   ```
   "<p>We keep information while we need it to run the service, follow the law, settle disputes and enforce our agreements. We use access controls and encryption, and keys for connected accounts such as Facebook Pages are always stored encrypted. When information is deleted, copies can remain in our encrypted backups for about 15 days, used only to recover from a failure, until they are removed automatically. No system is perfectly secure, but we work to keep yours safe.</p>"
   ```

3. In the Privacy page's header, change `"Legal · Last updated 28 October 2026"` to
   `"Legal · Last updated 4 November 2026"`. (It is the first of the two `28 October 2026` lines; the second
   belongs to the Data deletion page and stays.)
4. Build the site, open `/privacy`, and check the new sentence and date show.
5. Commit and publish.

The master copy is in the CRM project: `docs/marketing-site/legal-pages.md`. If you change the wording, tell
Claude in the CRM project so the master copy matches.
