import HeroImg from "../assets/images/Hero.webp";
import HeroImgSm from "../assets/images/HeroSm.webp";
import ProjectImg1 from "../assets/images/website1.webp";
import ProjectImg2 from "../assets/images/website2.webp";
import ProjectImg3 from "../assets/images/website3.webp";
import ProjectImg4 from "../assets/images/website4.webp";
import ProjectImg5 from "../assets/images/website5.webp";
import Service2 from "../assets/images/review-funnel.webp";
import Service3 from "../assets/images/text-back.webp";
import Service4 from "../assets/images/marketing.webp";
import Service5 from "../assets/images/gbp.webp";
import Service6 from "../assets/images/text-back.webp";
import OpenAiLogo from "../assets/images/technology-used/openai.png";
import GoogleLogo from "../assets/images/technology-used/google.png";
import AwsLogo from "../assets/images/technology-used/aws.png";
import CloudflareLogo from "../assets/images/technology-used/cloudflare.png";
import FacebookLogo from "../assets/images/technology-used/facebook.png";

/**
 * Public site settings
 *
 * Update verified public details here. Leave optional links blank until a real,
 * public destination is available; blank social links are not rendered.
 */
export const publicSite = {
    name: "Uplift Contractor",
    owner: "Jafar Khan",
    websiteUrl: "https://upliftcontractor.com",
    location: "Savar, Dhaka, Bangladesh",
    contact: {
        email: "info@upliftcontractor.com",
        phone: "+8801834969563",
    },
    booking: {
        // Add the real public booking URL here after it has been confirmed.
        url: "",
        fallbackUrl:
            "mailto:info@upliftcontractor.com?subject=Uplift%20Contractor%20call%20request",
    },
    social: {
        facebook: "",
        instagram: "",
        linkedin: "",
    },
};

/**
 * data.js
 * --------------------------------------------------------------------------
 * Central content store for the homepage.
 * Keep all editable text here so .astro files stay presentation-only.
 *
 * HOW TO USE IN index.astro (frontmatter at the very top):
 *   ---
 *   import { about, services } from "../data/data.js";
 *   ---
 *
 * Then render, e.g. the about description:
 *   <p class="about__description">{about.description}</p>
 *
 * And loop the service cards:
 *   {
 *     services.map((service) => (
 *       <article class="services-item">
 *         <h3 class="services-item__title">{service.title}</h3>
 *         <p>{service.description}</p>
 *       </article>
 *     ))
 *   }
 * --------------------------------------------------------------------------
 */

/* ============================ About section ============================ */
export const hero = {
    badge: "affordable . simple . no contracts",
    title: `Website design & marketing systems for <span class="marked-text">contractors & home service pros</span>`,
    description:
        "Nobody has a miracle solution to all your problems, including us. We will provide a <strong>simple yet extremely effective foundational marketing system</strong> to help you <strong>win more work</strong>. But you need to commit to using it!",
    cta: `Book a call`,
    heroImg: HeroImg,
    heroImgSm: HeroImgSm,
    heroFooter: `No fluff. We just say what we exactly do`,
};

export const brandLogo = {
    title: "Powered by trusted technology",
    logos: [
        { name: "OpenAI", image: OpenAiLogo },
        { name: "Google", image: GoogleLogo },
        { name: "AWS", image: AwsLogo },
        { name: "Cloudflare", image: CloudflareLogo },
        { name: "Facebook", image: FacebookLogo },
    ],
};

export const reason = {
    badge: "Why choose us",
    icon: "arrow-right",
    title: `Why we're <span class="marked-text">"totally unique"</span>...just like everyone else, right?`,
    content: [
        {
            icon: "simplicity-icon",
            title: "Simple to use",
            description:
                "We built Uplift Contractor with the core concept of being simple to use, so everything is made to be exactly that.",
        },
        {
            icon: "affordable-icon",
            title: "Affordable",
            description:
                "Our prices are designed to keep you for 10 years, not 10 weeks. We're in it for the long haul.",
        },
        {
            icon: "no-contract",
            title: "No contracts",
            description:
                "If it's affordable & awesome, why would we need a contract... if you're happy, you'll stay. You are not locked-in here.",
        },
        {
            icon: "no-shit",
            title: "No bullsh*t",
            description:
                "We don't believe in the fluff, we just tell you exactly what we're going to do and we do it. Period.",
        },
    ],
};

/* ============================ About section ============================ */
export const about = {
    // Small badge above the heading (uses the <Badge> component)
    badge: "About us",

    // Heading is split so the highlighted word can use .marked-text
    title: `Why <span class="marked-text">Uplift Contractor</span> Exists?`,

    // Author block (image is imported separately in index.astro, not here)
    author: {
        name: "Jafar khan",
        role: "Founder",
    },

    // Main paragraph. Keep as a single template string.
    description: `<div>Even among good contractors, we keep seeing the same issues come up again and again. It's not because of a lack of effort. They're working hard. It's because the fundamental system isn't in place.</div>

<div> <div class="icon icon--problem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg></div> One of the most important pieces is the Google Business Profile (GBP). When homeowners search for local trades near them, these contractors' profiles don't show up in the results, while their competitors with strong profile & good reviews do. They've set up GBP, but not the right way, and they're not managing it actively. Their reviews are growing slowly, like they're stuck.</div>

<div><div class="icon icon--problem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg></div>They're spending hard-earned money on ads, yet their conversion rate is poor because the leads who click through land on a website that sits there like a statue. Not a high-converting, functional website that captures leads and instantly turns them into text conversations that go directly to the contractor's phone.</div>

<div><div class="icon icon--problem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg></div>They're not running marketing campaigns to their past customers like promotions, discounts, referral offers etc. So they're leaving money on the table instead of getting the most out of every customer.</div>

<div><div class="icon icon--problem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg></div>Even with the leads they are already getting, they may forget to follow up, reply too slowly, or miss calls. Their leads, customers, jobs, quotes, invoices, and other important information are scattered across different tools and places. It's simply not an easy way to manage a business the way it should be managed. </div>

<div><div class="icon icon--solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM16.4524 8.22183L11.5019 13.1709L8.67421 10.3431L7.25999 11.7574L11.5026 16L17.8666 9.63604L16.4524 8.22183Z"></path></svg></div>Uplift Contractor was built to fix exactly this, for contractors who don't want to learn tech, just want to focus on the business. We help contractors grow and expand in the most easiest & affordable way possible by setting up the foundational marketing system. A high-converting, functional website, GBP setup and ongoing management, an easy-to-use business management app with AI-powered features, including a 5-Star Review Funnel, Missed Call Text Back, automated follow-ups, one-click marketing campaigns, and one simple place to track and organize leads, customers, quotes, jobs, scheduling, payments, and more.</div>

The whole thing runs quietly in the background. No extra effort, no extra staff needed. And behind it all, we handle the tech, keep everything running, and help whenever you need us.`,
    // "Read more" link
    readMore: "Read more",
};

/* ============================ Services section ============================ */
// 6 service cards. Each card supports the fields used by the
// .services-item markup (title, description, icon, category, link).
// `icon` is the sprite name passed to <Icon name={...} src="..." />.
export const services = {
    badge: "Our services",
    icon: "icon",
    title: `Simple systems that <span class="marked-text">actually work</span>. No degrees required`,
    content: [
        {
            thumbnail: ProjectImg3,
            title: "Premium functional website",
            description:
                "Get a high converting premium designed website that builds trust & credibility instantly & turns leads into text conversations that go DIRECTLY to your phone.",
            items: [
                "<strong>Get found on Google.</strong> If customers are searching for your services and can't find you, that's a problem. Don't worry, we'll help make sure you're easier to find.",
                "<strong>Showcase Your Best Reviews</strong> We all have one or two bad reviews... That doesn't mean your customers need to see them.",
                "<strong>Never lose a website lead.</strong> Every website inquiry goes directly into your CRM, so you can track it, reply quickly, and follow up",
                "<strong>Mobile Friendly & Super  Fast.</strong> 87% of people visit websites on their phones. We make sure your business looks extra sleek on mobile, and load speed? Always A+ fast",
            ],
        },
        {
            thumbnail: Service2,
            title: "5-Star Magic Review Funnel",
            description: `Start Getting the Reviews You Deserve. Start Ranking Higher On Google. Start Getting Chosen Over Your Competition.`,
            items: [
                "<strong>5-Star Reviews Only</strong> You can't make everyone happy, but our magic funnel sure can. Five stars, every time.",
                `<strong>Automatic Follow-Up Reminders</strong>. "Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' reminder them for a few weeks until they remember.`,
                "<strong>Ask For Reviews In One Click</strong> As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed.",
                "<strong>Stop worrying about bad reviews.</strong> Unsure if you should ask for a review? We’ll take the guesswork out by guiding your customer to leave a 5-star review!",
            ],
        },
        {
            thumbnail: Service3,
            title: "Missed call text back",
            description: `Everyone misses calls, but not everyone texts back. Be the one who does. Outshine your competition.`,
            items: [
                "<strong>Stand out from your competition</strong> Everyone misses calls, but not everyone texts back. Be the one who does and outshine your competition.",
                "<strong>No More Lost Leads</strong>. On a job site and can't answer the phone? No problem, we'll fire off a text and start the conversation for you.",
                "<strong>Show Customers You Care.</strong> Your ex didn't like it when you missed their calls - neither do your customers. At least send a text so they know you care.",
                "<strong>Be available 24/7.</strong> Missed a call after hours? No worries, we’ll make sure everyone feels loved even while you’re getting your beauty sleep.",
            ],
        },

        {
            thumbnail: Service4,
            title: "One-Click Marketing Campaigns",
            description: `You know it, and we know it… Referrals and repeat customers are the best. Let’s get you both!`,
            items: [
                "<strong>Done for you.</strong> Again... let’s keep it simple. Activate our pre-built marketing campaigns with just one click.",
                "<strong>Referral Campaigns.</strong> We know it and you know it... You do good work, and your customers love you. Let's remind them to tell their friends.",
                "<strong>Return Customer Campaigns.</strong> Having loyal customers is key to a succesful business. We'll make sure your customers feel cared for with special offers.",
                "<strong>Marketing Campaigns At Your Fingertips</strong> Just click a button and we'll take care of the rest. No need to hire a marketing team.",
            ],
        },

        {
            thumbnail: Service5,
            title: "Google Business Profile Management",
            description: `Your Google profile is usually the first thing homeowners see. We'll keep it updated, optimized, and looking like you actually care about your business`,
            items: [
                "<strong>Get Found For What You Actually Do.</strong> Customers are already searching for what you do. So we will make sure google has a much clearer picture of what you do and where you do it.",
                "<strong>Stop Looking Like You Closed Down</strong> Old photos and outdated information...Customers see that and move on. We'll keep your profile looking like a real, active business.",
                "<strong>Turn Views Into Phone Calls.</strong> Getting seen is nice. Getting called is better. We'll optimize your profile to make it easy for homeowners to choose you and get in touch.",
                `<strong>We Handle It, You Just Do The Work.</strong> Services, photos, posts, business details... Yeah, we know you'd rather be on a job site. Leave the Google stuff to us. `,
            ],
        },
        // {
        //     thumbnail: Service6,
        //     title: "Local SEO",
        //     description: `"Get me to the top of Google!" We'd love to promise that by Friday. Good SEO takes time but when it kicks in, you stop paying for every lead and start owning them.`,
        //     items: [
        //         "<strong>Stop Paying For Every Single Lead.</strong>Google Ads stop the second you stop paying.  Local SEO keeps bringing in calls long after the work is done. That's the difference.",
        //         `<strong>Show Up When it acually matters.</strong> "Plumber near me." "Roofer in [city]." That's what your next customer is typing right now. We make sure your website is what they find.`,
        //         "<strong>Get Found In More Of The Areas You Serve.</strong> One generic page can only do so much. We build dedicated service and location pages so Google better understands what you do and where you do it.",
        //         `<strong>Turn Google Searches Into Real Opportunities.</strong> Someone who Googled your exact trade in your exact city and clicked your website? They're ready to book. No ad budget. No cost per click. Just the phone ringing. `,
        //     ],
        // },
        {
            thumbnail: ProjectImg1,
            title: "Contractor Business Management App",
            description: `Leads slipping through? Quotes, jobs, invoices and messages all over the place? Follow-ups still in your head and payments you have to chase? We bring it all together in one simple place. <strong>Run your business on Autopilot More jobs. Less admin. Faster pay</strong>`,
            items: [
                "<strong> Know What Needs Your Attention.</strong> Who needs a call? What needs quoting? Which job is next? The important stuff stays right in front of you. No more running the business from memory",
                "<strong> See the Full Story on Every Customer.</strong> Open any customer and see every message, quote, job, and payment connected. No more piecing things together across your phone, email, and notebook.",
                "<strong>Follow-Ups That Happen Without You.</strong> Lead follow-ups, appointment reminders, payment nudges, and review requests, all automatic. Less admin, more done.",
                "<strong>We Set It Up, You Run It.</strong> No tech headaches. We configure everything and walk you through it so you actually use it, not just pay for it.",
            ],
        },
    ],
};

export const projects = {
    badge: "Our Works",
    title: `Some of our Projects`,
    items: [
        {
            title: "Project one",
            thumbnail: ProjectImg3,
        },
        {
            title: "Project two",
            thumbnail: ProjectImg1,
        },
        {
            title: "Project three",
            thumbnail: ProjectImg2,
        },
        {
            title: "Project four",
            thumbnail: ProjectImg4,
        },
        {
            title: "Project five",
            thumbnail: ProjectImg5,
        },
        {
            title: "Project six",
            thumbnail: ProjectImg1,
        },
    ],
};

export const contractors = {
    badge: "Contractors",
    title: 'Built for <span class="marked-text">all types</span> of contractors',
    contractors: [
        "Home builders",
        "Custom home builders",
        "Remodelers",
        "Renovation contractors",
        "Design-build firms",
        "Electricians",
        "Ice Management",
        "Handyman services",
        "Property maintenance companies",
        "Facility Maintenance Contractors",
        "EV Charger Installers",
        "Fire Alarm Contractors",
        "Plumbers",
        "HVAC Contractors",
        "Heating Contractors",
        "Air Conditioning Contractors",
        "Boiler & Hydronic Contractors",
        "Gas Fitters",
        "Mechanical Contractors",
        "Roofing Contractors",
        "Siding Contractors",
        "Eavestrough / Gutter Installers",
        "Window & Door Companies",
        "Insulation Contractors",
        "Solar Installers",
        "Foundation Contractors",
        "Masonry Contractors",
        "Brick & Stone Contractors",
        "Waterproofing Contractors",
        "Landscapers",
        "Hardscaping Contractors",
        "Interlock & Paving Contractors",
        "Fence Contractors",
        "Deck Builders",
        "Pool Builders",
        "Pool Service & Maintenance",
        "Taping & Finishing Contractors",
        "Painters",
        "Flooring Contractors",
        "Tile & Stone Installers",
        "Cabinet Makers",
        "Millwork & Finish Carpentry",
        "Garage Door Companies",
        "Home Automation / Smart Home Installers",
        "Security System Installers",
        "Home Theater Installers",
        "Appliance Installers",
        "Restoration Contractors (Fire / Water / Mold)",
        "Mold Remediation",
        "Pressure Washing",
        "Power Washing",
        "Chimney Services",
        "Residential Cleaning",
        "Commercial Cleaning",
        "Junk Removal",
        "Bin / Dumpster Services",
        "Snow Removal",
        "Low Voltage / Data Cabling",
        "Concrete Contractors",
        "Asbestos Abatement",
        "Drywall Contractors",
    ],
};

export const process = {
    badge: "Process",
    title: "What working with us looks like",
    steps: [
        {
            title: "15 minutes demo call",
            description: `It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and show you live client accounts & results.`,
        },
        {
            title: "We build your systems (7 - 10 days)",
            description: `Fill out a basic onboarding form with your business details. After we have the correct information, we'll get to work on building your new website & marketing system.`,
        },
        {
            title: "Website & systems delivered",
            description:
                "Your website and systems go live. We show you how everything works so you can start booking jobs right away without changing how you run your business.",
        },
    ],
};

export const faq = {
    badge: "FAQs",
    title: "Got questions? We’ve the answers",
    content: [
        {
            question: "What happen if I decide to cancel my membership?",
            answer: "We'll be extremely sad to see you go, but after a good cry we'll bounce back. However, you will lose access to all the features we set up for you.",
        },
        {
            question: "Can people find my website on Google?",
            answer: "Yes, but in the right way. We build your site with proper on-page SEO, dedicated service pages, and location pages so Google understands exactly what you do and where you work. We also set up review automation, because Google reviews are one of the biggest factors in local rankings. This gives you a strong foundation to rank and convert the traffic you get.",
        },
        {
            question:
                "Why should I spend on a website when word of mouth is already pulling in business?",
            answer: "We might be a bit biased, but here’s the deal: if each of your customers brings in about $500 a year, getting just 2-4 new customers from your website will pay off. We know you’ll see great value from your site. It will help you attract new customers, make it easier for existing customers to refer you, allow you to run ads if you want, and attract bigger clients who value professionalism.",
        },
        {
            question: "Why is your pricing so cheap?",
            answer: "All we care about is keeping you as a customer forever. We believe if we provide you with excellent service at an affordable price you’ll never want to leave us.",
        },
        {
            question: "Do I need to change how I run my business?",
            answer: "No. You keep using your phone like you always have. The system runs in the background and helps you follow up faster without extra work.",
        },
    ],
};

export const cta = {
    title: "Let's build a website and system that actually brings you jobs.",
    description:
        "In this quick strategy call, we will show you everything we do to help you grow your business so you can implement it yourself or let us do it for you.",
};

export const footer = {
    intro: {
        title: `Website design & marketing systems for contractors & home service pros`,
    },

    company: {
        title: "Navigation",
        items: [
            { label: "Home", href: "/" },
            { label: "About", href: "/#about" },
            { label: "Services", href: "/#services" },
            { label: "Platform", href: "/#projects" },
            { label: "Process", href: "/#process" },
            { label: "FAQs", href: "/#faq" },
        ],
    },
    resources: {
        items: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Data deletion", href: "/data-deletion" },
            { label: "Contact", href: `mailto:${publicSite.contact.email}` },
        ],
    },
    contact: {
        title: "Contact info",
        location: publicSite.location,
        email: publicSite.contact.email,
        phone: publicSite.contact.phone,
        phoneHref: publicSite.contact.phone,
    },
};

// Shared labels for the production mobile navigation.
export const navigation = {
    openLabel: "Open menu",
    closeLabel: "Close menu",
    menuLabel: "Menu",
};

// Public legal copy, approved source: docs/legal-pages-update.md.
export const legalPages = {
    "privacy": {
        "title": "Privacy Policy",
        "description": "What we collect, why we need it, and what you can ask us to do with it.",
        "eyebrow": "Legal · Last updated 23 October 2026",
        "path": "/privacy",
        "sections": [
            {
                "id": "privacy-who-we-are",
                "title": "Who we are",
                "body": "<p>Uplift Contractor is a CRM and marketing platform for contractors, run by Jafar Khan from Savar, Dhaka. If you have a question about your information, email <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a> or call <a href=\"tel:+8801834969563\">+8801834969563</a>.</p>\n<p>Contractors use our platform to keep in touch with their own customers. When they do, the contractor decides what to keep about those customers. We store it for them and use it only to run the service they signed up for.</p>"
            },
            {
                "id": "privacy-what-we-collect",
                "title": "What we collect",
                "body": "<ul><li><strong>What you tell us.</strong> Your name, business name, email, phone number and anything you write to us.</li><li><strong>What you put in the platform.</strong> Your customers, jobs, quotes, invoices, forms and messages, entered by you or your team.</li><li><strong>Facebook Messenger messages,</strong> if your business connects a Facebook Page. The details are below.</li><li><strong>Payment status.</strong> We know whether a payment went through. Card numbers are typed on Stripe's page and never reach us.</li><li><strong>Security basics.</strong> IP address, browser and device type, and spam-check results, so we can keep the site and your account safe.</li></ul>"
            },
            {
                "id": "privacy-how-we-use-it",
                "title": "How we use it",
                "body": "<p>To run the platform, answer your questions, manage accounts and payments, deliver your messages, keep the service secure, and meet our legal duties.</p>\n<p>We don't sell anyone's information. This website has no Google Analytics, ad pixels, Hotjar or similar tracking.</p>"
            },
            {
                "id": "privacy-facebook-messenger",
                "title": "Facebook Messenger",
                "body": "<p>A contractor can connect their business's Facebook Page so their team can read and answer Messenger chats in the same inbox as their texts and emails.</p>\n<p><strong>When a Page is connected,</strong> Facebook gives us the Page's name and ID, the permissions the contractor approved, and a key that lets us send and receive messages for that Page. We keep the key encrypted.</p>\n<p><strong>When someone messages that Page,</strong> we receive the message, the time it was sent, a note of any photo or file attached, and an ID number Facebook creates for that person on that Page only. We also see whether the contractor's replies were delivered and read. We receive the person's name and profile photo only if Facebook allows it; until then they appear as \"Facebook user\".</p>\n<p><strong>We use this only</strong> to show the contractor their conversations, send the replies their team writes, and keep the connection working. People write every reply. We don't use Messenger data for ads, we don't sell it, and we follow Meta's Platform Terms.</p>\n<p><strong>When a contractor disconnects the Page,</strong> new messages stop coming in and we erase the key at once. Earlier conversations stay in the contractor's records, like their other customer notes, until the contractor asks us to delete them. The contractor can also remove our access from Facebook: Settings → Business Integrations → Uplift Contractor → Remove.</p>\n<p>To have your Messenger messages deleted, see our <a href=\"/data-deletion\">Data deletion</a> page.</p>"
            },
            {
                "id": "privacy-who-helps-us-run-the-service",
                "title": "Who helps us run the service",
                "body": "<ul><li>Supabase stores accounts, forms and customer records.</li><li>Cloudflare protects the website, checks for spam, delivers pages and stores files.</li><li>Brevo and Amazon SES send and receive email.</li><li>Twilio sends and receives text messages for contractors.</li><li>Meta carries Facebook Messenger messages for contractors who connect a Page.</li><li>Stripe handles online payments.</li><li>Mapbox powers maps and address lookups.</li></ul>\n<p>If we add a company that will handle real customer information, we update this list first.</p>"
            },
            {
                "id": "privacy-text-messages-from-uplift-contractor",
                "title": "Text messages from Uplift Contractor",
                "body": "<div class=\"legal-page__notice\"><p>We don't send our own text messages yet. If we start the Uplift Contractor SMS Program, joining will be optional and never required to buy from us. We will not sell or share SMS consent or phone numbers with third parties or affiliates for their marketing.</p></div>\n<p>Once it runs, people who opt in may get account, support, appointment, service and promotional messages. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Full rules are in the SMS Program section of our <a href=\"/terms#sms-program\">Terms</a>.</p>"
            },
            {
                "id": "privacy-how-long-we-keep-it-and-how-we-protect-it",
                "title": "How long we keep it, and how we protect it",
                "body": "<p>We keep information while we need it to run the service, follow the law, settle disputes and enforce our agreements. We use access controls and encryption, and keys for connected accounts such as Facebook Pages are always stored encrypted. No system is perfectly secure, but we work to keep yours safe.</p>"
            },
            {
                "id": "privacy-your-choices",
                "title": "Your choices",
                "body": "<p>You can ask to see, correct or delete the information we hold about you. Email <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a> and we will answer within 30 days. Some records, such as invoices, may need to be kept for legal reasons; if so, we tell you which and why.</p>\n<p>For Facebook Messenger messages, follow the steps on our <a href=\"/data-deletion\">Data deletion</a> page.</p>"
            },
            {
                "id": "privacy-changes",
                "title": "Changes",
                "body": "<p>When our practices change, we update this page and the date at the top.</p>"
            }
        ]
    },
    "terms": {
        "title": "Terms & Conditions",
        "description": "The rules for using the Uplift Contractor website, platform and services.",
        "eyebrow": "Legal · Last updated 23 October 2026",
        "path": "/terms",
        "sections": [
            {
                "id": "terms-our-services-and-your-account",
                "title": "Our services and your account",
                "body": "<p>We build websites and provide a CRM, marketing and messaging tools for contractors and home service businesses. What you get, and what it costs, is set out in your order form, plan or agreement.</p>\n<p>Keep your account details accurate and your login private. You are responsible for what people on your team do in your account.</p>"
            },
            {
                "id": "terms-using-the-platform-fairly",
                "title": "Using the platform fairly",
                "body": "<p>You're responsible for the contacts, information and messages you put in the platform, and for having permission to use them. Follow the law, phone carrier rules, and the rules of any service you connect.</p>\n<p>Don't use the platform to send unlawful, misleading, abusive, fraudulent or unwanted messages, to break into anything, to disrupt the service, or to harm anyone.</p>"
            },
            {
                "id": "terms-facebook-messenger",
                "title": "Facebook Messenger",
                "body": "<p>By connecting a Facebook Page, you confirm you're allowed to manage it and agree to follow Meta's Terms, Messenger Platform Policy and Community Standards. Facebook lets a business reply only within 24 hours of the customer's last message, so the platform blocks later replies. Don't send promotions outside that window. You can disconnect the Page whenever you like. Our <a href=\"/privacy\">Privacy Policy</a> explains how we handle Messenger messages.</p>"
            },
            {
                "id": "terms-payments-and-cancelling",
                "title": "Payments and cancelling",
                "body": "<p>Prices, billing dates and renewals are in your order form, plan or agreement. Cards are paid on Stripe's secure page.</p>\n<p>To cancel, or to check when a cancellation takes effect, email <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a>. Cancelling doesn't remove fees already owed under your agreement.</p>"
            },
            {
                "id": "terms-uplift-contractor-sms-program",
                "title": "Uplift Contractor SMS Program",
                "body": "<div class=\"legal-page__notice\"><p>Not active yet. These rules apply once we start it.</p></div>\n<p>By ticking a separate, optional SMS box where you enter your phone number, you agree to receive text messages from Uplift Contractor. You never have to agree in order to buy from us or use our services.</p>\n<ul><li>Message types: account, support, appointment, service and promotional messages.</li><li>Frequency: message frequency varies.</li><li>Cost: message and data rates may apply.</li><li>Opt out: reply STOP at any time.</li><li>Help: reply HELP, or contact <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a> or <a href=\"tel:+8801834969563\">+8801834969563</a>.</li><li>Privacy: SMS consent and phone numbers are not sold or shared with third parties or affiliates for their marketing.</li><li>Carriers are not liable for delayed or undelivered messages.</li></ul>\n<p>See our <a href=\"/privacy\">Privacy Policy</a> for how we handle your data.</p>",
                "anchor": "sms-program"
            },
            {
                "id": "terms-other-companies-services",
                "title": "Other companies' services",
                "body": "<p>Some features rely on other companies for payments, email, text messages, Facebook Messenger, maps, hosting, security and storage. Their service and terms can affect those features. Our <a href=\"/privacy\">Privacy Policy</a> lists who they are.</p>"
            },
            {
                "id": "terms-changes-and-questions",
                "title": "Changes and questions",
                "body": "<p>When these terms change, we update this page and the date at the top. Questions: <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a>.</p>"
            }
        ]
    },
    "data_deletion": {
        "title": "Data deletion",
        "description": "How to ask us to delete your information, including messages you sent a business on Facebook Messenger.",
        "eyebrow": "Legal · Last updated 23 October 2026",
        "path": "/data-deletion",
        "sections": [
            {
                "id": "data-deletion-you-messaged-a-business-on-facebook",
                "title": "You messaged a business on Facebook",
                "body": "<p>If that business uses Uplift Contractor, your messages are stored in its inbox with us. To have them deleted:</p>\n<ol><li>Email <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a> with the subject \"Delete my data\".</li><li>Tell us which Facebook Page you messaged, the name on your Facebook account, and roughly when.</li><li>We delete your messages and the Facebook ID linked to them, email you to confirm, and let the business know.</li></ol>\n<p>You can also ask the business itself, and it will pass your request to us.</p>"
            },
            {
                "id": "data-deletion-your-business-connected-a-facebook-page",
                "title": "Your business connected a Facebook Page",
                "body": "<ol><li>In Uplift Contractor, open Settings → Communications → Messenger and press Disconnect. Messages stop and we erase the Page's key at once.</li><li>To remove us from Facebook as well: Facebook Settings → Business Integrations → Uplift Contractor → Remove.</li><li>To delete conversations already in your inbox, email us from your account's address and we'll do it.</li></ol>"
            },
            {
                "id": "data-deletion-anything-else",
                "title": "Anything else",
                "body": "<p>To delete any other information we hold about you, email <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a>.</p>"
            },
            {
                "id": "data-deletion-what-happens-next",
                "title": "What happens next",
                "body": "<ul><li>We reply within 3 business days and finish within 30 days.</li><li>We may ask you to prove it's you, so no one else can delete your information.</li><li>We keep a short note that your request was made and completed, plus anything the law says we must keep.</li></ul>\n<p>Questions? <a href=\"mailto:info@upliftcontractor.com\">info@upliftcontractor.com</a> · <a href=\"tel:+8801834969563\">+8801834969563</a></p>"
            }
        ]
    }
};
