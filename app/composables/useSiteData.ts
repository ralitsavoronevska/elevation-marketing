// Shared  types — import these in components for prop typing.
export interface Hero {
  title: string;
  subtitle: string;
}

export interface Intro {
  title: string;
  highlight: string;
  text: string;
}

export interface CarouselSlide {
  label: string;
  title: string;
  description: string;
  img: string;
}

export interface Solutions {
  title: string;
  description: string;
  buttonText: string;
  solutionItems: SolutionItem[];
}

export interface SolutionItem {
  number: string;
  title: string;
  description: string;
}

export interface Services {
  title: string;
  description: string;
  serviceItems: {
    number: string;
    title: string;
    offer: string;
    nutshell: string[];
  }[];
}

export interface CompanyValues {
  title: string;
  description: string;
  valueItems: {
    title: string;
    highlight: string;
    description: string;
    icon: string;
  }[];
}

export interface Benefits {
  title: string;
  highlight: string;
  description: string;
  benefitItems: string[];
}

export interface ProcessSteps {
  title: string;
  selectionSteps: {
    step: string;
    title: string;
    highlight: string;
    description: string;
  }[];
}

// Per-page content is keyed by page so a reusable component receives its slice
// via a `content` prop (e.g. <Hero :content="hero.index" />).
const hero = {
  index: {
    title: "Strategy. Business. Technology.",
    subtitle: "One solution that turns digital complexity into growth.",
  },
  services: {
    title: "Everything You Need, Working as One.",
    subtitle:
      "Strategic marketing | Seamless retention | Targeted acquisition | Scalable software | Structured delivery | Trusted compliance | Efficient finance",
  },
  careers: {
    title: "Work That Shapes Your Future",
    subtitle: "One mission, many roles. United to create lasting impact.",
  },
  academy: {
    title: "Step Forward with Elevation Marketing Academy",
    subtitle: "Learn. Build. Contribute. Grow.",
  },
  aboutUs: {
    title: "United by Purpose. Focused on Results.",
    subtitle: "Every result starts with the right minds working in sync.",
  },
} satisfies Record<string, Hero>;

const intro = {
  index: {
    title: "The Elevation Marketing Edge",
    highlight: "Integrated by design",
    text: "Elevation Marketing is your all-in-one partner for digital growth: bringing software, strategy, and customer operations together to deliver faster results with fewer moving parts.",
  },
  services: {
    title: "What we offer",
    highlight: "What's the value of true integration?",
    text: `When strategy, technology, and operations align, execution becomes seamless, and results go further. That’s why Elevation Marketing offers a connected suite of expert services designed to support every layer of your digital business: a fully integrated system built to perform.

    Each service delivers impact on its own, but together they form a streamlined engine for growth. Whether you're launching, scaling, or optimizing, our unified model reduces friction, speeds up decision-making, and drives outcomes that multiply across your entire operation.`,
  },
  careers: {
    title: "Inside Elevation Marketing",
    highlight: "A Culture You Can Grow In",
    text: `At Elevation Marketing, internal culture is built into how we operate. We believe that when teams work cross-functionally with shared goals and mutual trust, better outcomes follow naturally. Our structure breaks silos by design. Engineers collaborate with marketers. Creatives sit with strategists. Everyone contributes to the bigger picture, and success is shared. We align, execute, and iterate together: with a clear mission guiding us.

    With the support of our Value Ambassadors, we foster an open, inclusive, and curiosity-driven environment. It’s a place where you’re encouraged to speak up, take initiative, and enjoy the process of building something meaningful with people who are just as committed as you are.

    And yes, we make space for fun. From team events and shared traditions to community initiatives, we know that connection fuels creativity. We work hard, grow fast, and celebrate together.`,
  },
  academy: {
    title: "About Elevation Marketing Academy",
    highlight: "Step Forward into Action",
    text: `Every summer, Elevation Marketing opens its doors to future talent, offering hands-on experience across strategy, software, and operations. It’s a direct path to learning how integrated digital systems are built and scaled by doing, not just observing.

    Through real projects and guidance from experts across the company, participants gain experience that applies in real business environments. Most of them are here with us today, now part of the team that makes it happen.`,
  },
  aboutUs: {
    title: "Our Team",
    highlight: "The Impact of Collaboration",
    text: `What began in 2018 with just five people has grown into a team of over 140 professionals, united by the mission to deliver tailored solutions across diverse industries. We believe smarter collaboration leads to faster execution and better results.

    Our strength lies in how we work: cross-functional, fully integrated, always focused on impact. Strategy, technology, and operations flow together as one within our team and in everything we deliver. That’s how we keep moving forward. And it’s only the beginning.`,
  },
} satisfies Record<string, Intro>;

const carousel: CarouselSlide[] = [
  // {
  //   label: "Growth Partner",
  //   title: "Full-Service Growth Partner for Online Businesses",
  //   description: "Elevation Marketing delivers an integrated suite of services including digital marketing, CRM, software development, customer operations, and compliance. Clients gain the ability to grow efficiently with one trusted partner.",
  //   img: "/carousel/growth-partner.webp",
  // },
  // {
  //   label: "Software Development",
  //   title: "High-Tech, Scalable Software Development",
  //   description: "From custom platforms to complex integrations, we build secure, future-ready software using modern architecture and agile delivery for fast and reliable results.",
  //   img: "/carousel/software-development.webp",
  // },
  {
    label: "Digital Marketing",
    title: "Performance-Driven Digital Marketing Expertise",
    description:
      "We combine SEO, paid media, retargeting, and creative automation into unified campaigns that drive traffic, improve conversion rates, and maximize ROI.",
    img: "/carousel/digital-marketing.webp",
  },
  {
    label: "Design & Retention",
    title: "Customer-Centric Experience and Retention Strategy",
    description:
      "Through in-house UX/UI, behavioral segmentation, and lifecycle marketing, we create seamless, data-informed journeys that deepen engagement and increase customer lifetime value.",
    img: "/carousel/cr-and-retention.webp",
  },
  {
    label: "Creative Teams",
    title: "Creative, Marketing, and Dev Teams Under One Roof",
    description:
      "Our integrated team brings together strategy, design, content, and code. This eliminates silos and enables faster, smarter execution across every digital channel.",
    img: "/carousel/full-service.webp",
  },
];

const solutions = {
  title: "Solutions",
  description:
    "Discover the comprehensive approach behind faster launches, improved performance, and lasting impact.",
  buttonText: "Get in touch",
  solutionItems: [
    {
      number: "01",
      title: "From Fragmentation to Fluid Execution",
      description:
        "In the early stages of growth, it’s common for digital businesses to pull together a network of agencies, freelancers, and internal specialists to manage marketing, software, CRM, and operations. What starts as flexible support eventually turns into an operational maze. As teams grow and goals evolve, the lack of coordination between siloed providers causes delays, duplicated work, and strategic disconnects. This fragmentation not only slows execution but also burdens internal teams with managing relationships that were never designed to scale together.",
    },
    {
      number: "02",
      title: "From Legacy Systems to Agile Infrastructure",
      description: `What once worked to get your business off the ground can become the very thing holding it back. Many teams operate on outdated tech stacks, disconnected tools, or rushed software builds that were never meant to scale. As your customer base and operational needs grow, those legacy systems generate technical debt, data silos, and increasing maintenance costs. Teams spend more time patching workarounds than progressing strategically.
          
        Elevation Marketing helps businesses move beyond short-term fixes by modernizing their technology stack with secure, scalable platforms built for performance. Whether it’s a full system rebuild or targeted backend overhaul, we align technology with your business goals, so your systems support growth instead of slowing it down.`,
    },
    {
      number: "03",
      title: "From Isolated Journeys to Lasting Engagement",
      description: `Attracting new users is only part of the equation. Without a strong retention strategy, many digital businesses see engaged users drop off after the first few interactions. Disconnected systems, fragmented messaging, and manual workflows create gaps in the customer journey that drive churn and erode long-term value. The cost of acquiring users rises, but the return doesn’t follow.
          
      Elevation Marketing connects every part of your customer engagement - UX, CRM, lifecycle campaigns, and data - into a seamless, personalized experience. We help brands strengthen loyalty through behavior-driven journeys that turn one-time users into long-term relationships. With Elevation Marketing, retention becomes a growth driver, not an afterthought.`,
    },
  ],
} satisfies Solutions;

const services = {
  title: "Services",
  description:
    "Our integrated suite of services is designed to support every layer of your digital business, from strategy and marketing to software and operations.",
  serviceItems: [
    {
      number: "01",
      title: "Digital Marketing",
      offer:
        "Campaign building and management using SEO, paid media, retargeting, and testing to position brands strategically with real-time optimization.",
      nutshell: [
        "Multi-channel campaign management",
        "SEO and paid media expertise",
        "Retargeting and conversion funnel optimization",
      ],
    },
    {
      number: "02",
      title: "Customer Acquisition",
      offer:
        "Customized acquisition strategies generating traffic and conversions through behavior-tested, regionally localized funnels.",
      nutshell: [
        "Conversion funnel design",
        "Multi-channel acquisition strategy",
        "Localized campaigns for global growth",
      ],
    },
    {
      number: "03",
      title: "Creative & Content Services",
      offer:
        "Strategy-informed creative execution delivering cohesive, brand-aligned, results-driven content across banners, pages, UI kits, and campaigns.",
      nutshell: [
        "UX/UI design and branding assets",
        "Promotional visuals and campaigns",
        "SEO and conversion-driven copywriting",
      ],
    },
  ],
} satisfies Services;

const companyValues = {
  careers: {
    title: "Company Values",
    description:
      "Our values are the principles that guide how we work, collaborate, and grow together. They shape our culture, inform our decisions, and define the way we engage with each other and our clients.",
    valueItems: [
      {
        title: "Respect",
        highlight: "People first",
        description:
          "We treat people with attention, courtesy, and kindness — every interaction, every day.",
        icon: "bx:bxs-hand",
      },
      {
        title: "Trust",
        highlight: "Earned every day",
        description:
          "We give each other the autonomy and transparency to do great work and own the outcome.",
        icon: "bx:bxs-shield",
      },
      {
        title: "Learning & Curiosity",
        highlight: "Always exploring",
        description:
          "We stay curious, ask questions, and keep growing our skills and perspectives.",
        icon: "bx:bxs-book-open",
      },
      {
        title: "Innovation",
        highlight: "Smarter, simpler",
        description:
          "We challenge the status quo and look for smarter, simpler ways to solve problems.",
        icon: "bx:bxs-bulb",
      },
      {
        title: "Leadership",
        highlight: "Lead by example",
        description:
          "We take initiative, support our teammates, and lead by example at every level.",
        icon: "bx:bxs-star",
      },
    ],
  },
  aboutUs: {
    title: "Company Values",
    description:
      "Our values are the principles that guide how we work, collaborate, and grow together. They shape our culture, inform our decisions, and define the way we engage with each other and our clients.",
    valueItems: [
      {
        title: "Our mission",
        highlight: "To innovate in digital business",
        description:
          "We innovate in digital business to provide a full range of marketing strategies, services, and tools to scale your e-business. We build and develop niche expertise to simplify future technologies for a unique customer experience.",
        icon: "bx:bxs-flag",
      },
      {
        title: "Our vision",
        highlight: "To set standards with innovative solutions",
        description:
          "We make an industry impact, we set standards with innovative solutions to succeed where other fail. We give each other the autonomy and transparency to do great work and own the outcome.",
        icon: "bx:bxs-bulb",
      },
      {
        title: "Our motto",
        highlight: "2-click solutions, simple and straightforward",
        description:
          "We create 2-click solutions, simple and straightforward. If it doesn't fit in 2-clicks, rethink it, rework it! We stay curious, ask questions, and keep growing our skills and perspectives.",
        icon: "bx:bxs-zap",
      },
    ],
  },
} satisfies Record<string, CompanyValues>;

const benefits = {
  careers: {
    title: "Benefits",
    highlight: "Support That Powers Your Progress",
    description:
      "We back every career with the support it takes to grow with confidence. From day one to your next big milestone, our benefits are built to keep you focused, energized, and moving forward.",
    benefitItems: [
      "Premium health insurance (dental + optical)",
      "25 days paid annual leave",
      "Multisport card",
      "Monthly transportation allowance",
      "Life insurance fully covered",
      "Paid team-building events",
      "Free coffee, snacks & meals",
      "Learning & development programs",
    ],
  },
  academy: {
    title: "Our Benefits",
    highlight: "Not Just Another Internship",
    description:
      "As part of Elevation Marketing Academy, you gain access to structured learning resources, expert mentorship, and a dynamic work environment shaped for skill development. From flexible hours and paid internships to transportation support and industry-recognized training, every element is designed to help you grow with clarity and confidence, building not just skills, but long-term career value.",
    benefitItems: [
      "Real Projects",
      "Professional Mentorship",
      "Skill Development",
      "Flexible Hours",
      "Paid Internship",
      "Online Learning Access",
      "Transportation Allowance",
      "Food Vouchers",
      "Potential Full-Time Offer",
    ],
  },
} satisfies Record<string, Benefits>;

const selectionProcess: ProcessSteps = {
  title: "The Selection Process With Us",
  selectionSteps: [
    {
      step: "01",
      title: "HR Interview",
      highlight: "Let’s Get to Know Each Other",
      description:
        "We start with a conversation to learn more about you: your background, your interests, and where you see yourself growing. It’s also your chance to learn about us and what it means to be part of the Elevation Marketing team.",
    },
    {
      step: "02",
      title: "Task",
      highlight: "Show Us How You Think",
      description:
        "Next, you’ll receive a practical task designed to reflect the kind of work you’d be doing with us. It’s not about perfection, it’s about process, potential, and how you approach challenges.",
    },
    {
      step: "03",
      title: "Second Interview",
      highlight: "Meet the Team, Dive Deeper",
      description:
        "This is where we go beyond the basics. You’ll meet key people from the team you’re applying to and explore how your skills align with our current projects, workflows, and goals.",
    },
    {
      step: "04",
      title: "Offer",
      highlight: "Time to Make It Official",
      description:
        "If it’s a great fit on both sides, we’ll send you an offer and outline everything you need to know to begin your journey with Elevation Marketing. From there, the real growth begins.",
    },
  ],
};

export const useSiteData = () => ({
  hero,
  intro,
  carousel,
  solutions,
  services,
  companyValues,
  benefits,
  selectionProcess,
});
