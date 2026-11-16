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

export const HERO_BADGE = "The Inbound Lead Marketplace";
export const HERO_HEADING = {
  plain1: "Where High-Intent Leads",
  gradient: "Meet Real Business Growth."
};
export const HERO_SUBTEXT = "Connect with qualified inbound leads through a transparent marketplace built for buyers and publishers.";

export const STATS = [
  { value: 50000, suffix: "+", label: "Qualified Leads", target: 50000 },
  { value: 500, suffix: "+", label: "Active Partners", target: 500 },
  { value: 30, suffix: "+", label: "Industries", target: 30 },
  { value: 98, suffix: "%", label: "Lead Quality", target: 98 }
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "GENERATE",
    description: "Publishers generate high-intent search and media traffic."
  },
  {
    num: "02",
    title: "VERIFY",
    description: "Leads are validated and quality checked."
  },
  {
    num: "03",
    title: "MATCH",
    description: "Our marketplace matches opportunities with target buyers."
  },
  {
    num: "04",
    title: "CONNECT",
    description: "Qualified leads are delivered in real time directly to your CRM."
  }
];

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const BUYER_FEATURES: FeatureItem[] = [
  {
    title: "Verified Lead Quality",
    description: "Receive validated opportunities from trusted sources, filtered for fraud.",
    icon: ShieldCheck
  },
  {
    title: "Real-Time Delivery",
    description: "Connect with prospects while intent is highest, within milliseconds.",
    icon: Zap
  },
  {
    title: "Smart Matching",
    description: "Match every opportunity with the right buyer based on custom filters.",
    icon: Target
  },
  {
    title: "Transparent Performance",
    description: "Track delivery, conversion and ROI without hidden markups.",
    icon: BarChart3
  },
  {
    title: "Campaign Control",
    description: "Manage your acquisition strategy, bids, and budgets from one place.",
    icon: Compass
  },
  {
    title: "Performance Analytics",
    description: "Understand what's working and optimize acquisition velocities faster.",
    icon: Database
  }
];

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export const PUBLISHER_STEPS: StepItem[] = [
  { num: "01", title: "Apply", desc: "Submit your traffic sources and vertical details." },
  { num: "02", title: "Get Approved", desc: "Our team verifies compliance and setups API access." },
  { num: "03", title: "Send Traffic", desc: "Route high-intent consumer traffic to our endpoints." },
  { num: "04", title: "Get Paid", desc: "Enjoy weekly payouts with transparent yield reports." }
];

export interface PublisherFeatureItem {
  title: string;
  desc: string;
}

export const PUBLISHER_FEATURES: PublisherFeatureItem[] = [
  { title: "Premium Campaigns", desc: "Access high-payout B2B and consumer acquisition campaigns." },
  { title: "Real-Time Tracking", desc: "Monitor lead status, pricing, and approvals instantly." },
  { title: "Flexible Offers", desc: "Sell via Ping-Post, Direct Deliveries, or Call Routing." },
  { title: "Performance Insights", desc: "Analytics tools to maximize revenue per user click." }
];

export const INDUSTRIES = [
  {
    name: "Insurance",
    desc: "Auto, Home, Life, and Health high-intent consumer matches.",
    icon: ShieldCheck,
    layoutType: 1
  },
  {
    name: "Home Services",
    desc: "HVAC, Solar, Roofing, and remodeling local project requests.",
    icon: Wrench,
    layoutType: 2
  },
  {
    name: "Healthcare",
    desc: "Medicare, private insurance, and specialized medical matches.",
    icon: Heart,
    layoutType: 1
  },
  {
    name: "Financial Services",
    desc: "Personal loans, debt relief, mortgage, and wealth guidance.",
    icon: BarChart3,
    layoutType: 3
  },
  {
    name: "Legal",
    desc: "Personal injury, mass torts, family law, and contract intakes.",
    icon: Scale,
    layoutType: 2
  },
  {
    name: "Education",
    desc: "Career training, online degrees, and adult education matches.",
    icon: GraduationCap,
    layoutType: 1
  },
  {
    name: "Real Estate",
    desc: "Active buyers, motivated sellers, and mortgage pre-approvals.",
    icon: Building2,
    layoutType: 3
  },
  {
    name: "Travel",
    desc: "Custom holiday packages, premium cruises, and corporate accounts.",
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
    title: "Verified opportunities.",
    description: "Every inbound lead is authenticated through real-time fraud checks and consent validations before delivery.",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    tag: "SPEED",
    title: "Real-time delivery.",
    description: "Leads route directly to your CRM in real time when consumer intent is at its absolute highest point.",
    gradient: "from-cyan-500 to-purple-600"
  },
  {
    tag: "PRECISION",
    title: "Smart matching.",
    description: "Dynamic routing rules map prospects to the right buyer using geographic, financial, and product filters.",
    gradient: "from-purple-600 to-magenta"
  },
  {
    tag: "TRANSPARENCY",
    title: "Zero guesswork.",
    description: "Detailed dashboard reporting gives buyers and publishers clear insight into delivery metrics, bids, and ROI.",
    gradient: "from-magenta to-blue-600"
  }
];

export const TRUST_HIGHLIGHTS = [
  { title: "Lead Verification", desc: "Real-time verification ensures contact data is accurate and active." },
  { title: "Fraud Prevention", desc: "Built-in bot detection blocks duplicate or automated submissions." },
  { title: "Consent Validation", desc: "Explicit opt-in record generation with visual proof." },
  { title: "Data Protection", desc: "Enterprise-grade encryption keeps all transfer endpoints secure." },
  { title: "Compliance Monitoring", desc: "Continuous monitoring ensures publisher traffic meets guidelines." }
];

export const TESTIMONIALS = [
  {
    quote: "Inbound Marketplace completely transformed our customer acquisition. The match quality is consistently high, and the real-time routing integration with our CRM took less than an hour.",
    name: "Sarah Jenkins",
    role: "VP of Growth",
    company: "Shield Insurance Group"
  },
  {
    quote: "As a publisher, transparency is critical. This platform gives us granular insight into which traffic channels yield the best bids. Our monetization efficiency increased noticeably in the first quarter.",
    name: "David Chen",
    role: "Founder & CEO",
    company: "Digital Media Ventures"
  },
  {
    quote: "We've tried countless lead sources, but nothing matches the precision of this platform. The ability to dynamically adjust budgets and filter parameters has optimized our customer acquisition cost.",
    name: "Marcus Vance",
    role: "Director of Marketing",
    company: "National Solar Solutions"
  }
];
