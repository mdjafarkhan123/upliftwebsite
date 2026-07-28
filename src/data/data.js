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
    badge: "affordable . simple, all in one",
    title: "Website design, systems & marketing for contractors & home service pros",
    description:
        "Everything you need to <strong>book more jobs from Google and social media</strong> without spending <strong>thousands of dollars</strong> on paid ads, expensive websites and multiple tools.",
    cta: `Book a call`,
};

export const reason = {
    badge: "Why choose us",
    icon: "arrow-right",
    title: "Why we are totally unique",
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
    heading: {
        marked: "The reason",
        rest: " we built this",
    },

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
    intro: `Simple systems that actually work. No degrees required`,
    content: [
        {
            thumbnail: ProjectImg1,
            title: "Premium functional website",
            description:
                "Get a high converting premium designed website that builds trust & credibility instantly & turns leads into text conversations that go DIRECTLY to your phone.",
            items: [
                "<strong>Get found online.</strong> If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.",
                "<strong>Optimized For Local Google Searches</strong>. This should go without saying but we'll still say it. We make sure your business is found on Google.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
            ],
        },
        {
            thumbnail: ProjectImg1,
            title: "5-Star Magic Review Funnel",
            description: `"Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' remind them for a few weeks until they remember.`,
            items: [
                "<strong>Get found online.</strong> If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.",
                "<strong>Optimized For Local Google Searches</strong>. This should go without saying but we'll still say it. We make sure your business is found on Google.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
            ],
        },
        {
            thumbnail: ProjectImg1,
            title: "Automated text followup",
            description: `"Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' remind them for a few weeks until they remember.`,
            items: [
                "<strong>Get found online.</strong> If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.",
                "<strong>Optimized For Local Google Searches</strong>. This should go without saying but we'll still say it. We make sure your business is found on Google.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
            ],
        },
        {
            thumbnail: ProjectImg1,
            title: "GBP & SMM management",
            description: `"Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' remind them for a few weeks until they remember.`,
            items: [
                "<strong>Get found online.</strong> If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.",
                "<strong>Optimized For Local Google Searches</strong>. This should go without saying but we'll still say it. We make sure your business is found on Google.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
            ],
        },
        {
            thumbnail: ProjectImg1,
            title: "CRM",
            description: `"Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' remind them for a few weeks until they remember.`,
            items: [
                "<strong>Get found online.</strong> If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.",
                "<strong>Optimized For Local Google Searches</strong>. This should go without saying but we'll still say it. We make sure your business is found on Google.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
                "<strong>Mobile Friendly.</strong> 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
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
    title: 'Build for all types of <span class="marked-text">Contractors</span> ',
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
    title: "Our simple 3 step process",
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
        items: ["Home, about, services, projects, process, faq"],
    },
    resources: {
        title: "Resources",
        items: ["Privacy policy, terms & conditions, documentation, support"],
    },
    contact: {
        title: "Contact info",
        items: ["Privacy policy, terms & conditions, documentation, support"],
    },
};
