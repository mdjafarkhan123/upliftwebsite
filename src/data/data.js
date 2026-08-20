import ProjectImg1 from "../assets/images/project-one.jpg";

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
    title: "How it all started",

    // Author block (image is imported separately in index.astro, not here)
    author: {
        name: "Jafar khan",
        role: "CEO of UpliftContractor",
    },

    // Main paragraph. Keep as a single template string.
    description: `Working closely with contractors since 2020, we kept seeing
  the same problems again and again. Even good contractors
  were losing jobs and struggling with their business. It
  wasn't because of a lack of effort, but because the right
  fundamentals weren’t in place. They were spending
  hard-earned money on Google Ads, Facebook Ads, and marketing
  agencies, yet the result was always the same. They were
  still missing phone calls, forgetting follow-ups, and
  struggling to manage their incoming leads. They were
  neglecting their website, Google profile, and social media
  channels. It’s a broken system that most contractors aren't
  even aware of. That’s why UpliftContractor was built. We
  created a simple, affordable system that installs the exact
  digital foundation your business needs to grow. You get a
  premium, high-converting website with proper SEO, plus
  dedicated service and location pages to rank high on Google.
  We pair that with a smart system that captures every single
  lead from phone calls, web forms, and chat messages. Missed
  calls trigger an instant text-back so no opportunity is
  lost. Your entire sales pipeline stays organized in one
  simple dashboard, while 5-star reviews are generated
  automatically to build trust and local visibility. It keeps
  your entire digital and social media presence strong.
  Everything works together cleanly behind the scenes, helping
  you get more jobs without needing extra office staff,
  complicated tools, or a huge budget.`,

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
            thumbnail: ProjectImg1,
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
            thumbnail: ProjectImg1,
            title: "5-Star Magic Review Funnel",
            description: `"Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' remind them for a few weeks until they remember.`,
            items: [
                "<strong>5-Star Reviews Only</strong> You can't make everyone happy, but our magic funnel sure can. Five stars, every time.",
                `<strong>Automatic Follow-Up Reminders</strong>. "Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' reminder them for a few weeks until they remember.`,
                "<strong>Ask For Reviews In One Click</strong> As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed.",
                "<strong>Stop worrying about bad reviews.</strong> Unsure if you should ask for a review? We’ll take the guesswork out by guiding your customer to leave a 5-star review!",
            ],
        },
        {
            thumbnail: ProjectImg1,
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
            thumbnail: ProjectImg1,
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
            thumbnail: ProjectImg1,
            title: "Google Business Profile Management",
            description: `Your Google profile is usually the first thing homeowners see. We'll keep it updated, optimized, and looking like you actually care about your business`,
            items: [
                "<strong>Get Found For What You Actually Do.</strong> Customers are already searching for what you do. So we will make sure google has a much clearer picture of what you do and where you do it.",
                "<strong>Stop Looking Like You Closed Down</strong> Old photos and outdated information...Customers see that and move on. We'll keep your profile looking like a real, active business.",
                "<strong>Turn Views Into Phone Calls.</strong> Getting seen is nice. Getting called is better. We'll optimize your profile to make it easy for homeowners to choose you and get in touch.",
                `<strong>We Handle It, You Just Do The Work.</strong> Services, photos, posts, business details... Yeah, we know you'd rather be on a job site. Leave the Google stuff to us. `,
            ],
        },
        {
            thumbnail: ProjectImg1,
            title: "Simple Contractor CRM",
            description: `Leads slipping through? Quotes, jobs, invoices and messages all over the place? Follow-ups still in your head and payments you have to chase? We bring it all together in one simple place`,
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
    title: `<span class="marked-text">Recent websites</span> we've built for contractors`,
    items: [
        {
            title: "Project one",
            thumbnail: ProjectImg1,
        },
        {
            title: "Project two",
            thumbnail: ProjectImg1,
        },
        {
            title: "Project three",
            thumbnail: ProjectImg1,
        },
        {
            title: "Project four",
            thumbnail: ProjectImg1,
        },
        {
            title: "Project five",
            thumbnail: ProjectImg1,
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
            description:
                "A quick call to understand your business, services, and service area. We walk you through the system and confirm everything needed to get started.",
        },
        {
            title: "We build your systems (10 - 14 days)",
            description:
                "We design your website, set up the lead systems, and configure everything to capture and follow up with every lead automatically.",
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
            question: "Is there a long-term contract?",
            answer: "No. There’s a one-time setup fee and a monthly subscription. You can cancel anytime. We keep it simple and let the system speak for itself.",
        },
        {
            question: "Is there a long-term contract?",
            answer: "No. There’s a one-time setup fee and a monthly subscription. You can cancel anytime. We keep it simple and let the system speak for itself.",
        },
        {
            question: "Is there a long-term contract?",
            answer: "No. There’s a one-time setup fee and a monthly subscription. You can cancel anytime. We keep it simple and let the system speak for itself.",
        },
        {
            question: "Is there a long-term contract?",
            answer: "No. There’s a one-time setup fee and a monthly subscription. You can cancel anytime. We keep it simple and let the system speak for itself.",
        },
        {
            question: "Is there a long-term contract?",
            answer: "No. There’s a one-time setup fee and a monthly subscription. You can cancel anytime. We keep it simple and let the system speak for itself.",
        },
        {
            question: "Is there a long-term contract?",
            answer: "No. There’s a one-time setup fee and a monthly subscription. You can cancel anytime. We keep it simple and let the system speak for itself.",
        },
    ],
};

export const cta = {
    title: "Let’s build a website and system that actually brings you jobs.",
    description:
        "In this quick strategy call, we will walk through how contractors and home service businesses set up their websites and systems to better capture and manage leads from Google & Social Media without wasting money on ads or expensive web design.",
};

export const footer = {
    intro: {
        title: "High Converting Website, System & Marketing for Contractors ",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
    },

    company: {
        title: "Navigation",
        items: ["Home", "about", "services", "projects", "process", "faq"],
    },
    resources: {
        title: "Resources",
        items: [
            "Privacy policy",
            "terms & conditions",
            "documentation",
            "support",
        ],
    },
    contact: {
        title: "Contact info",
        location: "Savar, Dhaka, Bangladesh",
        email: "info@upliftcontractor.com",
        phone: "(+88)01834969563",
    },
};
