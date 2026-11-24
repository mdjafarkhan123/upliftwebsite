# Task: add call recordings and voicemail to the Privacy page (24 November 2026)

> `task-download-app.md` is a separate task. Do this one on its own.

**Why:** The Uplift Android app is going onto Google Play. Google compares our Privacy page with the app's data
safety answers, and audio recordings are something it asks about directly. The phone app section went live on
23 November, but it does not mention that a business can record calls, that callers can leave voicemails, or
that Twilio turns recordings and voicemails into written transcripts. This task adds one list item, rewords one
line in the companies list and changes the date. Nothing else on the page changes.

All legal page text lives in **`src/data/data.js`** under `legalPages`. Leave `src/pages/*.astro` and the
styles exactly as they are.

## A. Show Jafar the text first

Show Jafar the two pieces of text in step B in plain words and get his yes before changing anything. If he
changes the wording, use his wording, and tell Claude in the CRM project so its master copy
(`docs/marketing-site/legal-pages.md`) matches.

## B. Steps

1. In the Privacy page section `id: "privacy-the-uplift-phone-app"`, add this list item **right after** the
   "Camera and microphone" item (`<li><strong>Camera and microphone.</strong> … business number.</li>`) and
   before the "Contacts" item:

   ```
   <li><strong>Calls and voicemail.</strong> If a business turns on call recording, callers hear a notice first, and the call is recorded. Callers can also leave voicemails. Recordings and voicemails can be turned into written transcripts by Twilio. They belong to that business, only its team can open them, and they are handled like its other customer records.</li>
   ```

2. In "Who helps us run the service", replace this list item:

   ```
   <li>Twilio also connects calls made and received in the Uplift app.</li>
   ```

   with:

   ```
   <li>Twilio also connects calls made and received in the Uplift app, and turns call recordings and voicemails into written transcripts.</li>
   ```

3. In the Privacy page's header, change `"Legal · Last updated 23 November 2026"` to
   `"Legal · Last updated 24 November 2026"`. Only the Privacy page's date changes; the Terms and Data deletion
   dates stay.
4. Build the site, open `/privacy`, and check the new list item, the reworded Twilio line and the date show,
   on a phone-width screen too.
5. Commit only this task's changes and publish.
6. Tell Jafar it is live, so the CRM project can recheck the page and give Google the link
   `https://upliftcontractor.com/privacy/`.
