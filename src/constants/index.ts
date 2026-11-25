import { 
  ShieldCheck, 
  Zap, 
  Target, 
  BarChart3, 
  Wrench, 
  Heart, 
  Scale, 
  GraduationCap, 
  Building2, 
  Compass, 
  Database,
  Lock,
  UserCheck,
  Car,
  FileCheck2,
  Cpu,
  Layers,
  LucideIcon
} from 'lucide-react';

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_COLUMNS = {
  platform: [
    { label: "Marketplace", href: "/#marketplace" },
    { label: "Why Us", href: "/why-us" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Two-Sided Network", href: "/#ecosystem" }
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
    { label: "Resources", href: "/resources" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Compliance Overview", href: "/why-us" }
  ]
};

export const HERO_BADGE = "THE FUTURE OF LEAD GENERATION";
export const HERO_HEADING = {
  plain1: "Where High-Intent Leads",
  gradient: "Become Real Business Opportunities."
};
export const HERO_SUBTEXT = "Inbound Marketplace connects businesses seeking qualified customers with trusted traffic publishers who deliver genuine consumer demand. Discover better leads, reach the right audience, and turn verified intent into measurable business growth.";

export const STATS = [
  { value: 100, suffix: "%", label: "Structured Validation", target: 100 },
  { value: 24, suffix: "/7", label: "Real-Time Matching", target: 24 },
  { value: 8, suffix: "+", label: "High-Intent Verticals", target: 8 },
  { value: 100, suffix: "%", label: "Direct CRM Delivery", target: 100 }
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "CONSUMER INTENT",
    description: "Consumers actively initiate inquiries expressing genuine demand."
  },
  {
    num: "02",
    title: "LEAD VALIDATION",
    description: "Inquiries pass structured validation and duplicate detection checks."
  },
  {
    num: "03",
    title: "INTELLIGENT MATCHING",
    description: "The marketplace evaluates leads against buyer campaign requirements."
  },
  {
    num: "04",
    title: "AUTOMATED DELIVERY",
    description: "Matched opportunities route directly into buyer CRMs and webhooks."
  }
];

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const BUYER_FEATURES: FeatureItem[] = [
  {
    title: "Lead Discovery",
    description: "Explore available lead opportunities based on target verticals, geography, and campaign requirements.",
    icon: Compass
  },
  {
    title: "Intelligent Matching",
    description: "Match incoming consumer inquiries with buyer-defined targeting and qualification criteria.",
    icon: Target
  },
  {
    title: "Lead Verification",
    description: "Apply validation checks to improve lead quality, reduce duplicate submissions, and support reliable delivery.",
    icon: ShieldCheck
  },
  {
    title: "Real-Time Distribution",
    description: "Route qualified leads to suitable buyers through automated delivery workflows.",
    icon: Zap
  },
  {
    title: "Flexible Integrations",
    description: "Connect existing systems through API and webhook integrations.",
    icon: Cpu
  },
  {
    title: "Performance Visibility",
    description: "Monitor lead delivery, campaign activity, and marketplace performance through structured reporting.",
    icon: BarChart3
  }
];

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export const PUBLISHER_STEPS: StepItem[] = [
  { num: "01", title: "Register", desc: "Register as a traffic publisher and submit traffic source information." },
  { num: "02", title: "Source Review", desc: "Complete the required compliance review and configure endpoints." },
  { num: "03", title: "Connect", desc: "Connect eligible traffic sources through supported integrations." },
  { num: "04", title: "Deliver & Monetize", desc: "Deliver eligible leads and monitor delivery performance activity." }
];

export interface PublisherFeatureItem {
  title: string;
  desc: string;
}

export const PUBLISHER_FEATURES: PublisherFeatureItem[] = [
  { title: "Direct Buyer Demand", desc: "Connect your traffic sources with businesses actively looking for customer demand." },
  { title: "Campaign Configuration", desc: "Configure traffic and campaign parameters aligned with your acquisition channels." },
  { title: "Automated Ingestion", desc: "Transmit consumer inquiries through standardized API and webhook integrations." },
  { title: "Delivery Reporting", desc: "Track delivery activity, lead status, and marketplace performance in real time." }
];

export const INDUSTRIES = [
  {
    name: "Financial Services",
    desc: "Personal loans, debt relief, mortgage, and wealth guidance inquiries.",
    icon: BarChart3,
    layoutType: 1
  },
  {
    name: "Insurance",
    desc: "Auto, home, life, and health consumer inquiries aligned with buyer criteria.",
    icon: ShieldCheck,
    layoutType: 2
  },
  {
    name: "Home Services",
    desc: "Solar, HVAC, roofing, and home improvement project requests.",
    icon: Wrench,
    layoutType: 1
  },
  {
    name: "Education",
    desc: "Career training, degree programs, and adult education student inquiries.",
    icon: GraduationCap,
    layoutType: 3
  },
  {
    name: "Automotive",
    desc: "Auto purchase, refinancing, and vehicle warranty consumer demand.",
    icon: Car,
    layoutType: 2
  },
  {
    name: "Healthcare",
    desc: "Private health, specialized care, and wellness service inquiries.",
    icon: Heart,
    layoutType: 1
  },
  {
    name: "Real Estate",
    desc: "Residential buyers, property sellers, and mortgage pre-qualification.",
    icon: Building2,
    layoutType: 3
  },
  {
    name: "Other Consumer Services",
    desc: "Specialized consumer service intakes and custom vertical campaigns.",
    icon: Compass,
    layoutType: 1
  }
];

export interface WhyUsBlock {
  tag: string;
  title: string;
  description: string;
  gradient: string;
}

export const WHY_US_BLOCKS: WhyUsBlock[] = [
  {
    tag: "QUALITY",
    title: "Quality First.",
    description: "We prioritize structured validation and clear qualification standards throughout the lead lifecycle.",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    tag: "TRANSPARENCY",
    title: "Transparency Always.",
    description: "Buyers and publishers have full visibility into the criteria and processes that shape marketplace activity.",
    gradient: "from-cyan-500 to-purple-600"
  },
  {
    tag: "TECHNOLOGY",
    title: "Technology Driven.",
    description: "Automation, integrations, and intelligent matching help reduce operational complexity across both sides.",
    gradient: "from-purple-600 to-magenta"
  },
  {
    tag: "GROWTH",
    title: "Mutual Growth.",
    description: "A successful marketplace creates meaningful opportunities for buyers, publishers, and the businesses they serve.",
    gradient: "from-magenta to-blue-600"
  }
];

export const TRUST_HIGHLIGHTS = [
  { title: "Lead Discovery", desc: "Explore available lead opportunities based on target verticals, geography, and campaign requirements." },
  { title: "Intelligent Matching", desc: "Match incoming consumer inquiries with buyer-defined targeting and qualification criteria." },
  { title: "Lead Verification", desc: "Apply validation checks to improve lead quality, reduce duplicate submissions, and support reliable delivery." },
  { title: "Real-Time Distribution", desc: "Route qualified leads to suitable buyers through automated delivery workflows." },
  { title: "Flexible Integrations", desc: "Connect existing systems through API and webhook integrations." }
];

export const TESTIMONIALS = [
  {
    quote: "A technology-driven marketplace that provides lead buyers with structured validation, granular targeting criteria, and automated CRM delivery without intermediary friction.",
    name: "Lead Buyer Value",
    role: "Demand Architecture",
    company: "Inbound Marketplace Standards"
  },
  {
    quote: "Empowering traffic publishers to connect eligible acquisition sources directly with verified enterprise demand while maintaining clear operational visibility.",
    name: "Publisher Value",
    role: "Monetization Framework",
    company: "Inbound Marketplace Standards"
  },
  {
    quote: "Structured APIs and webhook integrations that synchronize lead capture, qualification, and delivery into existing business environments in real time.",
    name: "Technology Integration",
    role: "Platform Connectivity",
    company: "Inbound Marketplace Standards"
  }
];
