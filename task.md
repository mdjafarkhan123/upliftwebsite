> **Two open tasks.** This file (the Privacy page: phone app section and backup sentence) and
> `task-download-app.md` (the "Download the app" page). Do them one at a time.

# Task: add the phone app to the Privacy page (23 November 2026)

**Why:** The Uplift Android app is going onto Google Play. Google reads our Privacy page and rejects apps whose
policy does not say what the app uses on the phone. Ours covers the website and CRM but not the phone app. This
task adds one section, one line in the companies list, the backup sentence from the 4 November task (it never
went live), and a new date. Nothing else on the page changes.

All legal page text lives in **`src/data/data.js`** under `legalPages`. Leave `src/pages/*.astro` and the
styles exactly as they are.

**Careful:** `src/data/data.js` already holds unsaved hero edits (the "You deserve a marketing system…" lines).
They are Jafar's, not part of this task. Ask Jafar before committing them along with yours.

## A. Show Jafar the text first

Show Jafar the section in step B in plain words and get his yes before changing anything. If he changes the
wording, use his wording, and tell Claude in the CRM project so its master copy
(`docs/marketing-site/legal-pages.md`) matches.

## B. Steps

1. In the Privacy page's `sections`, add this section **right after** "Facebook Messenger"
   (`id: "privacy-facebook-messenger"`) and before "Who helps us run the service":

   ```js
   {
       id: "privacy-the-uplift-phone-app",
       title: "The Uplift phone app",
       body: "<p>Contractors and their teams can use the Uplift app on Android phones. It asks for each permission only when the feature needs it, and saying no never stops the rest of the app working.</p><ul><li><strong>Location.</strong> Read only at the moment someone clocks in or out or starts or ends a visit, and only while the app is open. It is saved with that time entry for their business. The app never tracks anyone in the background. With location off, times are saved without a place.</li><li><strong>Camera and microphone.</strong> Used only when you take photos or videos of your work, or call a customer from your business number.</li><li><strong>Contacts.</strong> Read only when you choose \"Add from contacts\", and then only the one contact you pick.</li><li><strong>Notifications.</strong> Sent through Google Firebase, so you hear about new messages, calls and jobs.</li><li><strong>Work saved with no signal</strong> stays on the phone until it uploads, and is removed from the phone when you sign out.</li></ul><p>The app has no ads and no tracking for advertising. Everything it sends goes to your business's account, under the same rules as the rest of this page.</p>",
   },
   ```

2. In "Who helps us run the service", add these two items to the list, right after the Twilio item:

   ```
   <li>Twilio also connects calls made and received in the Uplift app.</li><li>Google Firebase delivers notifications to the Uplift app.</li>
   ```

3. In "How long we keep it, and how we protect it", replace the `body` with exactly:

   ```
   "<p>We keep information while we need it to run the service, follow the law, settle disputes and enforce our agreements. We use access controls and encryption, and keys for connected accounts such as Facebook Pages are always stored encrypted. When information is deleted, copies can remain in our encrypted backups for about 15 days, used only to recover from a failure, until they are removed automatically. No system is perfectly secure, but we work to keep yours safe.</p>"
   ```

4. In the Privacy page's header, change `"Legal · Last updated 28 October 2026"` to
   `"Legal · Last updated 23 November 2026"`. (It is the first of the two `28 October 2026` lines; the second
   belongs to the Data deletion page and stays.)
5. Build the site, open `/privacy`, and check the new section, the two new list lines, the backup sentence and
   the date show, on a phone-width screen too.
6. Commit only this task's changes and publish.
7. Tell Jafar it is live, so the CRM project can give Google the link `https://upliftcontractor.com/privacy/`.
