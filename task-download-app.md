# Task: draw the "Download the app" page (16 November 2026)

**Why:** Uplift now has an Android phone app for contractors and their crews. Jafar decided that this website is
the one place people get it: one page with a download button and a short install guide. The app is not on Google
Play yet, so Android asks a few extra questions the first time, and the guide walks people through them.

**Your job now: draw the page for Jafar's approval.** Do not build it until he approves the drawing; building is
step 2 below.

## Who opens this page

- A contractor's team member (owner, office staff or field crew) who was told "get the Uplift app". Usually on
  their Android phone; sometimes on a computer.
- They already have an Uplift account. The app only works after signing in, so the page is not a sales page.

## What the page says and does

1. **A clear heading and one sentence:** this is the Uplift app for Android; sign in with your Uplift account.
2. **A "Download the app" button.** It links to `https://app.upliftcontractor.com/api/phone-app/download`, which
   always gives the newest app file. Next to it: "For Android 7.0 and newer".
3. **Opened on a computer:** a QR code for that same link, with "Scan with your Android phone's camera".
4. **iPhone visitors:** one line saying the app is Android only for now.
5. **The install guide, three short steps** in the order people meet them:
   1. Chrome may say **"File might be harmful"**. Tap **Download anyway**. (The file is safe; Chrome says this for
      every app that isn't from Google Play.)
   2. Open the downloaded file. The first time, Android says your phone isn't allowed to install apps from this
      source. Tap **Settings**, turn on **Allow from this source**, then go back and tap **Install**.
   3. **Samsung phones only:** if the phone says the app was blocked by **Auto Blocker**, open
      Settings › Security and privacy › Auto Blocker, turn it off, and install again. You can turn it back on
      afterwards.
6. **After installing:** open Uplift and sign in with the same email and password you use on the computer. From
   then on the app updates itself, so you never need this page again.
7. **Need help?** One line: contact Uplift support, and we'll set it up for you. Use the support contact the
   site already shows.

## Page address

`upliftcontractor.com/app`: short enough to type on a phone.

## Not on this page

- No Google Play or App Store badges (the app is not in either store yet).
- No pricing or sales sections.

## Step 2, only after Jafar approves the drawing

Build the page at `/app` exactly as approved, add a link to it in the site footer, build the site, check it on a
phone-width screen, then commit and publish. Until the first live app file is published from the CRM project, the
button's link answers "The Uplift app is not available to download yet." That is expected.

The master copy of these decisions is in the CRM project: `docs/plans/android-phone-app/getting-the-app.md`. If
the wording of the steps changes, tell Claude in the CRM project so the master copy matches.
