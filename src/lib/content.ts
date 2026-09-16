export const company = {
  name: "NIRA SOLUTIONS",
  tagline: "People. Process. Technology.",
  headline: "Building Capability. Transforming Business. Delivering Value.",
  blurb:
    "NIRA SOLUTIONS is one of the leading integrated manpower, consulting & technology solutions companies in the Middle East — with global presence in UAE, India, UK and Australia. We combine regional expertise, specialist capabilities and global delivery resources to solve complex business challenges.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/manpower", label: "Manpower Solutions" },
      { href: "/services/consulting", label: "Consulting" },
      { href: "/services/technology", label: "IT & Digital" },
    ],
  },
  { href: "/industries", label: "Industries" },
  { href: "/global-presence", label: "Global Presence" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "10+", label: "Years UAE Market Experience" },
  { value: "4", label: "Global Locations" },
  { value: "3", label: "Core Capabilities" },
  { value: "∞", label: "Onshore + Offshore Flexibility" },
];

export const aboutPoints = [
  "Specialised manpower solutions for immediate operational needs",
  "Management & procurement consulting for measurable commercial value",
  "Technology services that automate processes and improve visibility",
  "One strategic partner for short-term delivery and long-term transformation",
];

export const images = {
  hero: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
  about:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  manpower:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
  consulting:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  technology:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  delivery:
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  london:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  delhi:
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
  australia:
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
  contact:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
} as const;

export const services = [
  {
    slug: "manpower",
    number: "01",
    title: "Manpower Solutions",
    subtitle: "Talent Without Boundaries.",
    summary:
      "Finding the right skills at the right time can determine the success of a project or transformation programme. We provide flexible and scalable manpower solutions that give organisations access to specialised professionals without the complexity and long-term overhead of traditional workforce models.",
    image: images.manpower,
    capabilities: [
      {
        title: "Staff Augmentation",
        body: "Extend your existing workforce with qualified professionals for short-term, long-term and project-specific requirements.",
      },
      {
        title: "Consulting Resources",
        body: "Deploy experienced specialists and subject-matter experts for strategic projects and transformation programmes.",
      },
      {
        title: "Payroll Management",
        body: "Simplify payroll and workforce administration for outsourced and contract employees.",
      },
      {
        title: "Onshore Resources",
        body: "Locally deployed professionals who work directly alongside client teams.",
      },
      {
        title: "Offshore Resources",
        body: "Dedicated offshore resources providing scalable and cost-efficient support.",
      },
      {
        title: "Project-Based Teams",
        body: "Build dedicated teams around defined projects, programmes or business requirements.",
      },
    ],
  },
  {
    slug: "consulting",
    number: "02",
    title: "Consulting",
    subtitle: "Turning Business Challenges Into Measurable Value.",
    summary:
      "Our consulting practice specialises in procurement transformation, strategic sourcing, cost optimisation, managed procurement services and digital procurement. We identify opportunities, challenge existing ways of working and implement practical solutions that create sustainable commercial savings.",
    image: images.consulting,
    capabilities: [
      {
        title: "Procurement Transformation",
        body: "Assess, redesign and transform procurement across strategy, organisation, processes, governance, technology and performance management.",
      },
      {
        title: "Strategic Sourcing",
        body: "Complete sourcing lifecycle — spend analysis, market assessment, tendering, negotiation, contracting and implementation.",
      },
      {
        title: "Cost Optimisation",
        body: "Structured exercises to identify immediate and sustainable savings across organisational expenditure and Total Cost of Ownership.",
      },
      {
        title: "Managed Procurement Services",
        body: "Outsource specific procurement activities, categories or sourcing programmes without permanently increasing headcount.",
      },
      {
        title: "Digital Procurement & E-Sourcing",
        body: "Digitise sourcing through e-sourcing, digital tendering, supplier portals, workflows, analytics and ERP integration.",
      },
    ],
  },
  {
    slug: "technology",
    number: "03",
    title: "IT & Digital Services",
    subtitle: "Technology Built Around Your Business.",
    summary:
      "Technology should enable business — not complicate it. We design, develop and integrate digital solutions that automate processes, connect information and provide greater operational visibility — from applications and websites to enterprise platforms and ERP.",
    image: images.technology,
    capabilities: [
      {
        title: "Custom Software Development",
        body: "Secure, scalable solutions designed around specific workflows — Discovery → Architecture → UX/UI → Development → Testing → Deployment → Support.",
      },
      {
        title: "ERP Development & Integration",
        body: "Connect procurement, finance, HR, supply chain, inventory, vendor and contract management into one operational source of truth.",
      },
      {
        title: "Systems Integration",
        body: "Connect applications, databases and third-party platforms to eliminate disconnected systems and manual processes.",
      },
      {
        title: "Mobile Application Development",
        body: "Intuitive iOS, Android and cross-platform apps for customers, employees, suppliers and partners.",
      },
      {
        title: "Website & Web Applications",
        body: "Corporate sites, customer and supplier portals, e-commerce and business platforms — responsive and user-focused.",
      },
      {
        title: "Managed IT Services",
        body: "Ongoing application support, maintenance, enhancements and technical services for reliable technology environments.",
      },
    ],
  },
] as const;

export const costOptimisationSteps = [
  "Spend Analysis",
  "Opportunity Identification",
  "Demand Optimisation",
  "Strategic Sourcing",
  "Commercial Negotiation",
  "Implementation",
  "Savings Tracking",
] as const;

export const procurementCapabilities = [
  "Procurement Strategy",
  "Target Operating Model",
  "Policies & SOPs",
  "Governance",
  "Category Management",
  "Supplier Management",
  "Performance Management",
  "Digital Procurement",
] as const;

export const locations = [
  {
    city: "Dubai",
    role: "Middle East Headquarters",
    detail:
      "Client engagement, consulting, programme management and regional delivery.",
    image: images.dubai,
  },
  {
    city: "London",
    role: "UK & European Operations",
    detail:
      "Business development, consulting and European market support.",
    image: images.london,
  },
  {
    city: "Delhi",
    role: "Technology & Offshore Delivery",
    detail:
      "Software development, technology services, specialist resources and offshore delivery.",
    image: images.delhi,
  },
  {
    city: "Australia",
    role: "Asia-Pacific Operations",
    detail: "Regional consulting, technology and business support.",
    image: images.australia,
  },
] as const;

export const deliveryModels = [
  {
    id: "onshore",
    title: "Onshore",
    description: "Client-facing resources deployed locally alongside your teams.",
  },
  {
    id: "offshore",
    title: "Offshore",
    description:
      "Dedicated resources operating through our global delivery network.",
  },
  {
    id: "hybrid",
    title: "Hybrid",
    description: "Local leadership combined with scalable offshore delivery.",
  },
  {
    id: "managed",
    title: "Managed Service",
    description:
      "We take responsibility for delivering an agreed function, service or outcome.",
  },
] as const;

export const engagementModels = [
  "Staff Augmentation",
  "Dedicated Resources",
  "Consulting Projects",
  "Managed Services",
  "Offshore Teams",
  "Technology Development",
] as const;

export const whyUs = [
  {
    title: "10+ Years of UAE Experience",
    body: "More than a decade of regional experience gives us a strong understanding of the UAE business environment while our international footprint provides access to global capabilities.",
  },
  {
    title: "Integrated Expertise",
    body: "Instead of engaging separate manpower, consulting and technology companies, clients can access all three capabilities through one strategic partner.",
  },
  {
    title: "Flexible Engagement Models",
    body: "Solutions structured around your requirements — staff augmentation, dedicated resources, consulting projects, managed services, offshore teams and technology development.",
  },
  {
    title: "Commercially Focused",
    body: "Built around measurable business outcomes — reducing cost, increasing productivity, accelerating delivery or improving operational performance.",
  },
] as const;

export const industries = [
  {
    title: "Energy & Utilities",
    body: "Specialist resources and procurement support for complex, regulated operating environments.",
  },
  {
    title: "Construction & Infrastructure",
    body: "Project teams, sourcing capability and delivery models that scale with programme demand.",
  },
  {
    title: "Government & Public Sector",
    body: "Compliant engagement models with a focus on governance, transparency and outcomes.",
  },
  {
    title: "Financial Services",
    body: "Technology, process and talent solutions aligned to risk, efficiency and customer delivery.",
  },
  {
    title: "Healthcare",
    body: "Operational and digital support that balances care quality with commercial discipline.",
  },
  {
    title: "Retail & Consumer",
    body: "Flexible workforce, sourcing and digital platforms that keep pace with demand cycles.",
  },
  {
    title: "Technology & Telecom",
    body: "Engineering talent, systems integration and product-oriented delivery capability.",
  },
  {
    title: "Logistics & Supply Chain",
    body: "Procurement, visibility and workforce solutions across distributed operations.",
  },
] as const;
