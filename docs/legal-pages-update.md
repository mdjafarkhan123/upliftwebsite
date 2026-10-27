# Legal pages update (Facebook Messenger)

Facebook (Meta) checks these pages before it lets real customers use Messenger through the CRM. Below is the
finished text for three pages, and where each one goes.

## Where to put each page

| Page | Put the text in | Live address | Also paste the address into |
| --- | --- | --- | --- |
| Privacy Policy | `src/pages/privacy.astro` (replace the old text) | upliftcontractor.com/privacy | Meta App Dashboard → App settings → Basic → **Privacy Policy URL** |
| Data deletion (new) | new file `src/pages/data-deletion.astro` (copy `privacy.astro`, then swap the text) | upliftcontractor.com/data-deletion | Meta App Dashboard → App settings → Basic → **User data deletion** → choose "Data deletion instructions URL" |
| Terms & Conditions | `src/pages/terms.astro` (replace the old text) | upliftcontractor.com/terms | Meta App Dashboard → App settings → Basic → **Terms of Service URL** |

**Footer link.** In `src/data/data.js`, under `resources.items` (around line 423), add a Data deletion link
between Terms and Contact:

```js
{ label: "Data deletion", href: "/data-deletion" },
```

**How the text maps to the page.** Each page keeps today's look:

- "Legal · Last updated …" goes in the small pill above the title (`legal-page__eyebrow`). Add the date next to
  "Legal" or just under it.
- The bold title is the `<h1>`; the line under it is `legal-page__intro`.
- Each `###` heading below starts a new white card: `<section class="legal-page__section">` with an `<h2>`.
- Bullet lists are `<ul>`, numbered steps are `<ol>`, and **bold words** are `<strong>`.
- Email addresses and phone numbers stay as links (`mailto:` and `tel:`), like today.
- "Data deletion" links inside the text point to `/data-deletion`.

**Leave as written:** the SMS Program lines (STOP, HELP, "Message and data rates may apply", the carrier
notice). Phone carriers look for those exact words.

**After it is live:** open each address in a private window and check it loads for anyone, without signing in.
Meta's checker has to be able to read it.

---

## Privacy Policy

Legal · Last updated 23 October 2026

**Privacy Policy**

What we collect, why we need it, and what you can ask us to do with it.

### Who we are

Uplift Contractor is a CRM and marketing platform for contractors, run by Jafar Khan from Savar, Dhaka. If you
have a question about your information, email info@upliftcontractor.com or call +8801834969563.

Contractors use our platform to keep in touch with their own customers. When they do, the contractor decides what
to keep about those customers. We store it for them and use it only to run the service they signed up for.

### What we collect

- **What you tell us.** Your name, business name, email, phone number and anything you write to us.
- **What you put in the platform.** Your customers, jobs, quotes, invoices, forms and messages, entered by you or
  your team.
- **Facebook Messenger messages,** if your business connects a Facebook Page. The details are below.
- **Payment status.** We know whether a payment went through. Card numbers are typed on Stripe's page and never
  reach us.
- **Security basics.** IP address, browser and device type, and spam-check results, so we can keep the site and
  your account safe.

### How we use it

To run the platform, answer your questions, manage accounts and payments, deliver your messages, keep the service
secure, and meet our legal duties.

We don't sell anyone's information. This website has no Google Analytics, ad pixels, Hotjar or similar tracking.

### Facebook Messenger

A contractor can connect their business's Facebook Page so their team can read and answer Messenger chats in the
same inbox as their texts and emails.

**When a Page is connected,** Facebook gives us the Page's name and ID, the permissions the contractor approved,
and a key that lets us send and receive messages for that Page. We keep the key encrypted.

**When someone messages that Page,** we receive the message, the time it was sent, a note of any photo or file
attached, and an ID number Facebook creates for that person on that Page only. We also see whether the
contractor's replies were delivered and read. We receive the person's name and profile photo only if Facebook
allows it; until then they appear as "Facebook user".

**We use this only** to show the contractor their conversations, send the replies their team writes, and keep the
connection working. People write every reply. We don't use Messenger data for ads, we don't sell it, and we
follow Meta's Platform Terms.

**When a contractor disconnects the Page,** new messages stop coming in and we erase the key at once. Earlier
conversations stay in the contractor's records, like their other customer notes, until the contractor asks us to
delete them. The contractor can also remove our access from Facebook: Settings → Business Integrations →
Uplift Contractor → Remove.

To have your Messenger messages deleted, see our [Data deletion](/data-deletion) page.

### Who helps us run the service

- Supabase stores accounts, forms and customer records.
- Cloudflare protects the website, checks for spam, delivers pages and stores files.
- Brevo and Amazon SES send and receive email.
- Twilio sends and receives text messages for contractors.
- Meta carries Facebook Messenger messages for contractors who connect a Page.
- Stripe handles online payments.
- Mapbox powers maps and address lookups.

If we add a company that will handle real customer information, we update this list first.

### Text messages from Uplift Contractor

We don't send our own text messages yet. If we start the Uplift Contractor SMS Program, joining will be optional
and never required to buy from us. We will not sell or share SMS consent or phone numbers with third parties or
affiliates for their marketing.

Once it runs, people who opt in may get account, support, appointment, service and promotional messages. Message
frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Full rules are in the
SMS Program section of our Terms.

### How long we keep it, and how we protect it

We keep information while we need it to run the service, follow the law, settle disputes and enforce our
agreements. We use access controls and encryption, and keys for connected accounts such as Facebook Pages are
always stored encrypted. No system is perfectly secure, but we work to keep yours safe.

### Your choices

You can ask to see, correct or delete the information we hold about you. Email info@upliftcontractor.com and we
will answer within 30 days. Some records, such as invoices, may need to be kept for legal reasons; if so, we tell
you which and why.

For Facebook Messenger messages, follow the steps on our [Data deletion](/data-deletion) page.

### Changes

When our practices change, we update this page and the date at the top.

---

## Data deletion

Legal · Last updated 23 October 2026

**Data deletion**

How to ask us to delete your information, including messages you sent a business on Facebook Messenger.

### You messaged a business on Facebook

If that business uses Uplift Contractor, your messages are stored in its inbox with us. To have them deleted:

1. Email info@upliftcontractor.com with the subject "Delete my data".
2. Tell us which Facebook Page you messaged, the name on your Facebook account, and roughly when.
3. We delete your messages and the Facebook ID linked to them, email you to confirm, and let the business know.

You can also ask the business itself, and it will pass your request to us.

### Your business connected a Facebook Page

1. In Uplift Contractor, open Settings → Communications → Messenger and press Disconnect. Messages stop and we
   erase the Page's key at once.
2. To remove us from Facebook as well: Facebook Settings → Business Integrations → Uplift Contractor → Remove.
3. To delete conversations already in your inbox, email us from your account's address and we'll do it.

### Anything else

To delete any other information we hold about you, email info@upliftcontractor.com.

### What happens next

- We reply within 3 business days and finish within 30 days.
- We may ask you to prove it's you, so no one else can delete your information.
- We keep a short note that your request was made and completed, plus anything the law says we must keep.

Questions? info@upliftcontractor.com · +8801834969563

---

## Terms & Conditions

Legal · Last updated 23 October 2026

**Terms & Conditions**

The rules for using the Uplift Contractor website, platform and services.

### Our services and your account

We build websites and provide a CRM, marketing and messaging tools for contractors and home service businesses.
What you get, and what it costs, is set out in your order form, plan or agreement.

Keep your account details accurate and your login private. You are responsible for what people on your team do
in your account.

### Using the platform fairly

You're responsible for the contacts, information and messages you put in the platform, and for having permission
to use them. Follow the law, phone carrier rules, and the rules of any service you connect.

Don't use the platform to send unlawful, misleading, abusive, fraudulent or unwanted messages, to break into
anything, to disrupt the service, or to harm anyone.

### Facebook Messenger

By connecting a Facebook Page, you confirm you're allowed to manage it and agree to follow Meta's Terms, Messenger
Platform Policy and Community Standards. Facebook lets a business reply only within 24 hours of the customer's last
message, so the platform blocks later replies. Don't send promotions outside that window. You can disconnect the
Page whenever you like. Our Privacy Policy explains how we handle Messenger messages.

### Payments and cancelling

Prices, billing dates and renewals are in your order form, plan or agreement. Cards are paid on Stripe's secure
page.

To cancel, or to check when a cancellation takes effect, email info@upliftcontractor.com. Cancelling doesn't
remove fees already owed under your agreement.

### Uplift Contractor SMS Program

Not active yet. These rules apply once we start it.

By ticking a separate, optional SMS box where you enter your phone number, you agree to receive text messages
from Uplift Contractor. You never have to agree in order to buy from us or use our services.

- Message types: account, support, appointment, service and promotional messages.
- Frequency: message frequency varies.
- Cost: message and data rates may apply.
- Opt out: reply STOP at any time.
- Help: reply HELP, or contact info@upliftcontractor.com or +8801834969563.
- Privacy: SMS consent and phone numbers are not sold or shared with third parties or affiliates for their
  marketing.
- Carriers are not liable for delayed or undelivered messages.

See our Privacy Policy for how we handle your data.

### Other companies' services

Some features rely on other companies for payments, email, text messages, Facebook Messenger, maps, hosting,
security and storage. Their service and terms can affect those features. Our Privacy Policy lists who they are.

### Changes and questions

When these terms change, we update this page and the date at the top. Questions: info@upliftcontractor.com.
