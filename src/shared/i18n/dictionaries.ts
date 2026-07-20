import type { Locale } from "@/config";

export type Dictionary = Record<string, string>;

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    "common.actions.backHome": "Back to home",
    "common.actions.reload": "Reload page",
    "errors.application.description":
      "A safe fallback is active. Please reload the page or try again shortly.",
    "errors.application.eyebrow": "Application error",
    "errors.application.title": "Something went wrong.",
    "errors.notFound.description": "The page you requested does not exist or may have moved.",
    "errors.notFound.eyebrow": "404",
    "errors.notFound.title": "Page not found.",
    "seo.error.description": "A recoverable application error occurred.",
    "seo.error.keywords": "HDS, application error",
    "seo.error.title": "Application Error",
    "seo.home.description":
      "HDS builds premium software, cloud, AI, and digital transformation solutions for ambitious organizations.",
    "seo.home.keywords":
      "HDS, software house, digital transformation, custom software, AI solutions, cloud, DevOps, SaaS",
    "seo.home.title": "Premium Digital Transformation Company",
    "navigation.portfolio": "Portfolio",
    "seo.portfolio.title": "Portfolio and Case Studies",
    "seo.portfolio.description":
      "Explore sample HDS case studies across healthcare, fintech, commerce, logistics, education, real estate, manufacturing, and delivery platforms.",
    "seo.portfolio.keywords":
      "HDS portfolio, case studies, software projects, digital transformation, product engineering",
    "portfolio.breadcrumb.label": "Breadcrumb",
    "portfolio.breadcrumb.home": "Home",
    "portfolio.breadcrumb.portfolio": "Portfolio",
    "portfolio.hero.badge": "Portfolio and case studies",
    "portfolio.hero.title": "Proof that strong software can change how a business operates.",
    "portfolio.hero.subtitle":
      "A curated set of fictional sample projects showing the kind of product thinking, engineering discipline, and measurable outcomes HDS is built to deliver.",
    "portfolio.hero.primary": "Plan a project",
    "portfolio.hero.secondary": "Explore services",
    "portfolio.hero.imageAlt": "Premium case study dashboard and product interface previews",
    "portfolio.featured.eyebrow": "Featured work",
    "portfolio.featured.title":
      "Flagship programs with product, engineering, and operating impact.",
    "portfolio.featured.description":
      "Each case study is structured around the problem, the delivery model, the architecture, and the business result.",
    "portfolio.grid.eyebrow": "Project library",
    "portfolio.grid.title": "Explore the portfolio by industry, technology, service, or goal.",
    "portfolio.grid.description":
      "The content model is ready for CMS migration: filters, search, details, metrics, and related projects all come from data.",
    "portfolio.grid.resultCount": "{count} projects match the current filters.",
    "portfolio.statistics.eyebrow": "Portfolio signals",
    "portfolio.statistics.title": "A trust layer designed for future real case studies.",
    "portfolio.statistics.description":
      "The sample set demonstrates how future client work can be published without changing components.",
    "portfolio.statistics.projects": "sample projects",
    "portfolio.statistics.industries": "industries represented",
    "portfolio.statistics.technologies": "technologies shown",
    "portfolio.statistics.featured": "featured case studies",
    "portfolio.cta.title": "Have a project that should become the next case study?",
    "portfolio.cta.description":
      "Tell us about the workflow, platform, or product you want to improve. HDS will help shape a delivery path with measurable outcomes.",
    "portfolio.cta.primary": "Start a project",
    "portfolio.cta.secondary": "View services",
    "portfolio.case.cta.title": "Want this level of clarity for your own platform?",
    "portfolio.case.cta.description":
      "HDS can help turn complex requirements into a product plan, architecture, and release path your team can trust.",
    "portfolio.card.readCaseStudy": "Read case study",
    "portfolio.filters.searchLabel": "Search projects",
    "portfolio.filters.searchPlaceholder": "Search by client, industry, technology...",
    "portfolio.filters.industry": "Industry filter",
    "portfolio.filters.technology": "Technology filter",
    "portfolio.filters.service": "Service filter",
    "portfolio.filters.allIndustries": "All industries",
    "portfolio.filters.allTechnologies": "All technologies",
    "portfolio.filters.allServices": "All services",
    "portfolio.empty.title": "No projects found",
    "portfolio.empty.description":
      "Adjust the filters or search query to explore more case studies.",
    "portfolio.notFound.title": "Case study not found.",
    "portfolio.notFound.description":
      "The requested portfolio project does not exist or may have moved.",
    "portfolio.notFound.action": "Back to portfolio",
    "portfolio.case.client": "Client",
    "portfolio.case.location": "Location",
    "portfolio.case.duration": "Duration",
    "portfolio.case.team": "Team size",
    "portfolio.case.challenge": "Challenge",
    "portfolio.case.solution": "Solution",
    "portfolio.case.architecture": "Architecture highlights",
    "portfolio.case.process": "Implementation process",
    "portfolio.case.results": "Business results",
    "portfolio.case.related": "Related case studies",
    "portfolio.industries.healthcare": "Healthcare",
    "portfolio.industries.fintech": "FinTech",
    "portfolio.industries.ecommerce": "E-commerce",
    "portfolio.industries.logistics": "Logistics",
    "portfolio.industries.education": "Education",
    "portfolio.industries.realEstate": "Real Estate",
    "portfolio.industries.manufacturing": "Manufacturing",
    "portfolio.industries.foodDelivery": "Food Delivery",
    "portfolio.locations.egypt": "Egypt",
    "portfolio.locations.uae": "United Arab Emirates",
    "portfolio.locations.saudi": "Saudi Arabia",
    "portfolio.locations.global": "Global",
    "portfolio.locations.germany": "Germany",
    "portfolio.locations.kuwait": "Kuwait",
    "portfolio.duration.threeMonths": "3 months",
    "portfolio.duration.fourMonths": "4 months",
    "portfolio.duration.fiveMonths": "5 months",
    "portfolio.duration.sixMonths": "6 months",
    "portfolio.duration.sevenMonths": "7 months",
    "portfolio.duration.eightMonths": "8 months",
    "portfolio.services.productStrategy": "Product strategy",
    "portfolio.services.webDevelopment": "Web development",
    "portfolio.services.cloud": "Cloud architecture",
    "portfolio.services.uxDesign": "UX design",
    "portfolio.services.devops": "DevOps",
    "portfolio.services.analytics": "Analytics",
    "portfolio.services.mobile": "Mobile development",
    "portfolio.metrics.responseTime": "response time",
    "portfolio.metrics.teamAdoption": "team adoption",
    "portfolio.metrics.handover": "handover",
    "portfolio.metrics.onboarding": "onboarding",
    "portfolio.metrics.incidents": "incidents",
    "portfolio.metrics.releaseCycle": "release cycle",
    "portfolio.metrics.conversion": "conversion",
    "portfolio.metrics.loadTime": "load time",
    "portfolio.metrics.merchants": "merchants",
    "portfolio.metrics.dispatch": "dispatch",
    "portfolio.metrics.operationalCost": "operational cost",
    "portfolio.metrics.trackingAccuracy": "tracking accuracy",
    "portfolio.metrics.completion": "completion",
    "portfolio.metrics.adminTime": "admin time",
    "portfolio.metrics.retention": "retention",
    "portfolio.metrics.pipeline": "pipeline",
    "portfolio.metrics.inventoryAccuracy": "inventory accuracy",
    "portfolio.metrics.downtime": "downtime",
    "portfolio.metrics.alertNoise": "alert noise",
    "portfolio.metrics.plants": "plants",
    "portfolio.metrics.orders": "orders",
    "portfolio.metrics.deliveryTime": "delivery time",
    "portfolio.metrics.repeatOrders": "repeat orders",
    "portfolio.projects.careflow.title": "CareFlow Command",
    "portfolio.projects.careflow.subtitle":
      "A premium hospital operations platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.careflow.imageAlt": "CareFlow Command interface preview",
    "portfolio.projects.careflow.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for hospital operations.",
    "portfolio.projects.careflow.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.careflow.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.careflow.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.careflow.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.careflow.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.careflow.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.careflow.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.careflow.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.careflow.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.careflow.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.careflow.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.careflow.testimonial.author": "Sample Client Lead",
    "portfolio.projects.careflow.testimonial.role": "Director of Operations",
    "portfolio.projects.careflow.seo.title": "CareFlow Command Case Study",
    "portfolio.projects.careflow.seo.description":
      "A sample HDS case study showing hospital operations product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.careflow.seo.keywords":
      "hospital operations, case study, HDS, software development",
    "portfolio.projects.nova.title": "Nova Payments",
    "portfolio.projects.nova.subtitle":
      "A premium fintech onboarding platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.nova.imageAlt": "Nova Payments interface preview",
    "portfolio.projects.nova.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for fintech onboarding.",
    "portfolio.projects.nova.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.nova.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.nova.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.nova.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.nova.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.nova.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.nova.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.nova.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.nova.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.nova.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.nova.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.nova.testimonial.author": "Sample Client Lead",
    "portfolio.projects.nova.testimonial.role": "Director of Operations",
    "portfolio.projects.nova.seo.title": "Nova Payments Case Study",
    "portfolio.projects.nova.seo.description":
      "A sample HDS case study showing fintech onboarding product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.nova.seo.keywords":
      "fintech onboarding, case study, HDS, software development",
    "portfolio.projects.marketlane.title": "MarketLane Commerce",
    "portfolio.projects.marketlane.subtitle":
      "A premium marketplace commerce platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.marketlane.imageAlt": "MarketLane Commerce interface preview",
    "portfolio.projects.marketlane.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for marketplace commerce.",
    "portfolio.projects.marketlane.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.marketlane.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.marketlane.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.marketlane.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.marketlane.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.marketlane.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.marketlane.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.marketlane.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.marketlane.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.marketlane.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.marketlane.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.marketlane.testimonial.author": "Sample Client Lead",
    "portfolio.projects.marketlane.testimonial.role": "Director of Operations",
    "portfolio.projects.marketlane.seo.title": "MarketLane Commerce Case Study",
    "portfolio.projects.marketlane.seo.description":
      "A sample HDS case study showing marketplace commerce product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.marketlane.seo.keywords":
      "marketplace commerce, case study, HDS, software development",
    "portfolio.projects.fleetpulse.title": "FleetPulse Logistics",
    "portfolio.projects.fleetpulse.subtitle":
      "A premium fleet dispatch platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.fleetpulse.imageAlt": "FleetPulse Logistics interface preview",
    "portfolio.projects.fleetpulse.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for fleet dispatch.",
    "portfolio.projects.fleetpulse.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.fleetpulse.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.fleetpulse.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.fleetpulse.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.fleetpulse.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.fleetpulse.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.fleetpulse.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.fleetpulse.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.fleetpulse.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.fleetpulse.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.fleetpulse.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.fleetpulse.testimonial.author": "Sample Client Lead",
    "portfolio.projects.fleetpulse.testimonial.role": "Director of Operations",
    "portfolio.projects.fleetpulse.seo.title": "FleetPulse Logistics Case Study",
    "portfolio.projects.fleetpulse.seo.description":
      "A sample HDS case study showing fleet dispatch product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.fleetpulse.seo.keywords":
      "fleet dispatch, case study, HDS, software development",
    "portfolio.projects.learnsphere.title": "LearnSphere Academy",
    "portfolio.projects.learnsphere.subtitle":
      "A premium digital learning platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.learnsphere.imageAlt": "LearnSphere Academy interface preview",
    "portfolio.projects.learnsphere.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for digital learning.",
    "portfolio.projects.learnsphere.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.learnsphere.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.learnsphere.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.learnsphere.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.learnsphere.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.learnsphere.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.learnsphere.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.learnsphere.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.learnsphere.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.learnsphere.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.learnsphere.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.learnsphere.testimonial.author": "Sample Client Lead",
    "portfolio.projects.learnsphere.testimonial.role": "Director of Operations",
    "portfolio.projects.learnsphere.seo.title": "LearnSphere Academy Case Study",
    "portfolio.projects.learnsphere.seo.description":
      "A sample HDS case study showing digital learning product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.learnsphere.seo.keywords":
      "digital learning, case study, HDS, software development",
    "portfolio.projects.estateos.title": "EstateOS Platform",
    "portfolio.projects.estateos.subtitle":
      "A premium real estate operations platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.estateos.imageAlt": "EstateOS Platform interface preview",
    "portfolio.projects.estateos.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for real estate operations.",
    "portfolio.projects.estateos.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.estateos.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.estateos.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.estateos.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.estateos.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.estateos.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.estateos.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.estateos.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.estateos.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.estateos.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.estateos.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.estateos.testimonial.author": "Sample Client Lead",
    "portfolio.projects.estateos.testimonial.role": "Director of Operations",
    "portfolio.projects.estateos.seo.title": "EstateOS Platform Case Study",
    "portfolio.projects.estateos.seo.description":
      "A sample HDS case study showing real estate operations product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.estateos.seo.keywords":
      "real estate operations, case study, HDS, software development",
    "portfolio.projects.factorygrid.title": "FactoryGrid Ops",
    "portfolio.projects.factorygrid.subtitle":
      "A premium manufacturing telemetry platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.factorygrid.imageAlt": "FactoryGrid Ops interface preview",
    "portfolio.projects.factorygrid.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for manufacturing telemetry.",
    "portfolio.projects.factorygrid.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.factorygrid.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.factorygrid.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.factorygrid.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.factorygrid.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.factorygrid.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.factorygrid.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.factorygrid.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.factorygrid.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.factorygrid.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.factorygrid.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.factorygrid.testimonial.author": "Sample Client Lead",
    "portfolio.projects.factorygrid.testimonial.role": "Director of Operations",
    "portfolio.projects.factorygrid.seo.title": "FactoryGrid Ops Case Study",
    "portfolio.projects.factorygrid.seo.description":
      "A sample HDS case study showing manufacturing telemetry product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.factorygrid.seo.keywords":
      "manufacturing telemetry, case study, HDS, software development",
    "portfolio.projects.quickbite.title": "QuickBite Delivery",
    "portfolio.projects.quickbite.subtitle":
      "A premium food delivery platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.quickbite.imageAlt": "QuickBite Delivery interface preview",
    "portfolio.projects.quickbite.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for food delivery.",
    "portfolio.projects.quickbite.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.quickbite.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.quickbite.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.quickbite.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.quickbite.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.quickbite.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.quickbite.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.quickbite.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.quickbite.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.quickbite.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.quickbite.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.quickbite.testimonial.author": "Sample Client Lead",
    "portfolio.projects.quickbite.testimonial.role": "Director of Operations",
    "portfolio.projects.quickbite.seo.title": "QuickBite Delivery Case Study",
    "portfolio.projects.quickbite.seo.description":
      "A sample HDS case study showing food delivery product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.quickbite.seo.keywords":
      "food delivery, case study, HDS, software development",
    "seo.about.description":
      "Learn how HDS builds trusted software platforms, cloud systems, AI workflows, and product experiences for serious digital teams.",
    "seo.about.keywords":
      "about HDS, software company, digital product team, enterprise software, cloud, AI, product engineering",
    "seo.about.title": "About HDS",
    "about.breadcrumb.about": "About",
    "about.breadcrumb.home": "Home",
    "about.breadcrumb.label": "Breadcrumb",
    "about.hero.badge": "About HDS",
    "about.hero.title":
      "A product and engineering company for organizations that need technology to hold up under real pressure.",
    "about.hero.subtitle":
      "HDS helps ambitious teams design, build, launch, and evolve dependable digital platforms with senior clarity, disciplined execution, and long-term ownership.",
    "about.hero.primary": "Talk to HDS",
    "about.hero.secondary": "Explore services",
    "about.hero.imageAlt":
      "Premium software dashboards representing HDS product and engineering work",
    "about.story.eyebrow": "Company story",
    "about.story.title": "Built for the difficult middle between strategy and shipping.",
    "about.story.description":
      "Many digital programs fail in the gap between a promising idea and a system people can depend on. HDS was shaped to close that gap.",
    "about.story.paragraph.one":
      "We work with teams that cannot afford vague delivery, fragile architecture, or interfaces that look finished while the operating model underneath is still unclear.",
    "about.story.paragraph.two":
      "Our approach combines product thinking, UX judgment, software engineering, cloud readiness, security awareness, and practical AI into one accountable delivery model.",
    "about.story.paragraph.three":
      "The result is not just code. It is a clearer business workflow, a stronger technical foundation, and a product your team can keep improving after launch.",
    "about.story.proof.architecture.label": "Architecture posture",
    "about.story.proof.architecture.value": "Designed for extension",
    "about.story.proof.delivery.label": "Delivery rhythm",
    "about.story.proof.delivery.value": "Visible every week",
    "about.story.proof.partnership.label": "Client relationship",
    "about.story.proof.partnership.value": "Long-term by design",
    "about.mission.eyebrow": "Mission and vision",
    "about.mission.title": "We make complex digital work easier to trust.",
    "about.mission.description":
      "Our mission and vision are deliberately practical: help teams make better technology decisions, then turn those decisions into systems that last.",
    "about.mission.card.title": "Mission",
    "about.vision.card.title": "Vision",
    "about.values.eyebrow": "Core values",
    "about.values.title": "The standards behind the work.",
    "about.values.description":
      "These values show up in architecture reviews, interface decisions, delivery communication, and the way we handle tradeoffs.",
    "about.why.eyebrow": "Why choose HDS",
    "about.why.title": "A calmer way to build serious software.",
    "about.why.description":
      "HDS is designed for leaders who need confidence in the plan, the product, the code, and the path after launch.",
    "about.why.clarity.title": "Clear decisions",
    "about.why.clarity.description":
      "Scope, risks, assumptions, and tradeoffs stay visible instead of becoming hidden project debt.",
    "about.why.architecture.title": "Durable systems",
    "about.why.architecture.description":
      "Frontend, backend, cloud, data, and integrations are planned around maintainability from day one.",
    "about.why.security.title": "Responsible delivery",
    "about.why.security.description":
      "Validation, access, environments, and operational risks are treated as product requirements, not afterthoughts.",
    "about.why.ai.title": "Practical AI judgment",
    "about.why.ai.description":
      "AI is introduced where it improves workflows, decisions, retrieval, or automation without making the system harder to own.",
    "about.process.eyebrow": "Operating model",
    "about.process.title": "A delivery process that keeps momentum and judgment together.",
    "about.process.description":
      "The process is structured enough for enterprise visibility and flexible enough for product learning.",
    "about.process.align.title": "Align",
    "about.process.align.description":
      "Clarify outcomes, users, constraints, integrations, risks, and the real business reason behind the work.",
    "about.process.design.title": "Shape",
    "about.process.design.description":
      "Turn ambiguity into journeys, interface states, system boundaries, milestones, and a delivery roadmap.",
    "about.process.ship.title": "Ship",
    "about.process.ship.description":
      "Build in focused increments with reviews, testing, documentation, and visible progress.",
    "about.process.improve.title": "Improve",
    "about.process.improve.description":
      "Use analytics, feedback, reliability signals, and team learning to keep the platform getting better.",
    "about.timeline.eyebrow": "Timeline",
    "about.timeline.title": "A company shaped by delivery discipline.",
    "about.timeline.description":
      "The history is intentionally focused: better delivery, broader capability, stronger foundations.",
    "about.technologies.eyebrow": "Technology stack",
    "about.technologies.title": "Modern tools, selected for ownership.",
    "about.technologies.description":
      "We prefer proven, maintainable technologies that help products evolve without forcing a rebuild every year.",
    "about.industries.eyebrow": "Industries served",
    "about.industries.title": "Built for teams with real operational complexity.",
    "about.industries.description":
      "The same delivery model adapts across domains where reliability, adoption, and clarity matter.",
    "about.industries.saas.title": "SaaS and product companies",
    "about.industries.saas.description":
      "Platforms that need clean UX, scalable architecture, analytics, and fast iteration.",
    "about.industries.operations.title": "Operations-heavy teams",
    "about.industries.operations.description":
      "Systems that connect approvals, data, field teams, inventory, logistics, and reporting.",
    "about.industries.commerce.title": "Commerce and marketplaces",
    "about.industries.commerce.description":
      "Customer journeys, catalogs, workflows, integrations, and performance-sensitive experiences.",
    "about.industries.regulated.title": "Regulated workflows",
    "about.industries.regulated.description":
      "Products where access, auditability, reliability, and data handling need extra care.",
    "about.statistics.eyebrow": "Signals of scale",
    "about.statistics.title": "A compact team model with enterprise discipline.",
    "about.statistics.description":
      "The numbers are not vanity metrics; they show the operating range HDS is built to support.",
    "about.team.eyebrow": "Team model",
    "about.team.title": "Senior specialists, one accountable delivery rhythm.",
    "about.team.description": "Team overview",
    "about.team.body":
      "HDS brings product, design, engineering, cloud, and delivery leadership into a focused team. The structure can scale per project, but the client experience stays simple: clear ownership, direct communication, and visible progress.",
    "about.certifications.eyebrow": "Quality signals",
    "about.certifications.title": "Practices that support trust.",
    "about.certifications.description":
      "Certifications and operating practices are treated as evidence of discipline, not decoration.",
    "about.cta.title": "Looking for a technology partner that can think and ship?",
    "about.cta.description":
      "Share the product, platform, or workflow you want to improve. HDS will help turn it into a clear delivery path.",
    "about.cta.primary": "Start the conversation",
    "about.cta.secondary": "View services",
    "seo.notFound.description": "The requested HDS page was not found.",
    "seo.notFound.keywords": "HDS, not found",
    "seo.notFound.title": "Page Not Found",

    "home.hero.eyebrow": "Digital transformation for serious teams",
    "home.hero.title": "Software platforms engineered for scale, clarity, and growth.",
    "home.hero.description":
      "HDS designs and builds custom software, SaaS products, enterprise systems, mobile apps, cloud platforms, and AI solutions for organizations that need technology to become a real advantage.",
    "home.hero.primaryCta": "Start a project",
    "home.hero.secondaryCta": "Explore services",
    "home.hero.imageAlt":
      "Layered enterprise software dashboards and cloud infrastructure interfaces",

    "home.clients.eyebrow": "Trusted delivery model",
    "home.clients.title":
      "Built for startups, enterprises, government teams, and international clients.",
    "home.clients.description":
      "Our work style adapts to different operating environments while keeping the same senior engineering discipline.",

    "home.services.eyebrow": "Services preview",
    "home.services.title": "One accountable team for strategy, design, engineering, cloud, and AI.",
    "home.services.description":
      "Each engagement is shaped around the outcome: launch faster, modernize operations, improve customer experience, or unlock new revenue.",
    "home.services.customSoftware.title": "Custom Software",
    "home.services.customSoftware.description":
      "Tailored platforms designed around your workflows, data model, integrations, and long-term product roadmap.",
    "home.services.webApps.title": "Web Applications",
    "home.services.webApps.description":
      "Accessible, responsive, secure web apps with polished interfaces and maintainable frontend architecture.",
    "home.services.mobileApps.title": "Mobile Apps",
    "home.services.mobileApps.description":
      "Release-ready mobile experiences connected to reliable APIs, analytics, and cloud infrastructure.",
    "home.services.enterprise.title": "ERP and CRM Systems",
    "home.services.enterprise.description":
      "Operational systems that connect teams, automate approvals, and turn fragmented work into visible processes.",
    "home.services.cloud.title": "Cloud and DevOps",
    "home.services.cloud.description":
      "Cloud-native infrastructure, CI/CD, observability, reliability planning, and cost-aware operations.",
    "home.services.ai.title": "AI Solutions",
    "home.services.ai.description":
      "Practical AI assistants, automation pipelines, retrieval systems, and decision-support workflows.",

    "home.technologies.eyebrow": "Technology foundation",
    "home.technologies.title":
      "Modern tools selected for performance, security, and maintainability.",
    "home.technologies.description":
      "We choose proven technologies that help teams move quickly without creating fragile systems.",

    "home.why.eyebrow": "Why HDS",
    "home.why.title": "Senior execution without the noise.",
    "home.why.description":
      "We combine product thinking, disciplined engineering, and clear communication so clients always know what is being built and why.",
    "home.why.business.title": "Business-first architecture",
    "home.why.business.description":
      "Technical decisions are mapped to measurable outcomes, operational realities, and growth constraints.",
    "home.why.security.title": "Secure by default",
    "home.why.security.description":
      "Access, data flow, validation, and deployment practices are designed with risk and compliance in mind.",
    "home.why.delivery.title": "Transparent delivery",
    "home.why.delivery.description":
      "Roadmaps, tradeoffs, progress, risks, and decisions stay visible from discovery to launch.",
    "home.why.partner.title": "Long-term product partner",
    "home.why.partner.description":
      "After launch, we help improve reliability, conversion, adoption, performance, and future releases.",

    "home.process.eyebrow": "Process",
    "home.process.title": "A calm operating model from idea to optimization.",
    "home.process.description":
      "The process is structured enough for enterprise governance and flexible enough for fast product learning.",
    "home.process.discover.title": "Discover",
    "home.process.discover.description":
      "Clarify objectives, users, constraints, integrations, risks, and the business case behind the work.",
    "home.process.architect.title": "Architect",
    "home.process.architect.description":
      "Define the delivery plan, system boundaries, data model, technical stack, security model, and roadmap.",
    "home.process.design.title": "Design",
    "home.process.design.description":
      "Prototype user journeys, interface states, content hierarchy, and the product design system.",
    "home.process.build.title": "Build",
    "home.process.build.description":
      "Ship in focused increments with code reviews, quality gates, testing, and progress visibility.",
    "home.process.launch.title": "Launch",
    "home.process.launch.description":
      "Prepare release readiness, analytics, documentation, deployment, monitoring, and team handover.",
    "home.process.optimize.title": "Optimize",
    "home.process.optimize.description":
      "Improve speed, reliability, adoption, conversion, and future product opportunities after launch.",

    "home.statistics.eyebrow": "Operating signals",
    "home.statistics.title": "A delivery partner built for serious digital programs.",
    "home.statistics.description":
      "The numbers represent the kind of scope, reliability, and breadth HDS is designed to support.",
    "home.statistics.products": "digital products and platforms shipped",
    "home.statistics.disciplines": "integrated service disciplines",
    "home.statistics.uptime": "target uptime for managed platforms",
    "home.statistics.industries": "industries supported across digital programs",

    "home.testimonials.eyebrow": "Client perspective",
    "home.testimonials.title": "Teams choose HDS when the stakes are high.",
    "home.testimonials.description":
      "Representative feedback from transformation leaders who need both strategic clarity and delivery momentum.",
    "home.testimonials.operations.quote":
      "HDS helped us turn disconnected processes into a platform our teams actually trust and use every day.",
    "home.testimonials.operations.name": "Maya Hassan",
    "home.testimonials.operations.role": "Operations Director",
    "home.testimonials.product.quote":
      "The team brought product judgment, engineering discipline, and a level of polish we usually associate with much larger firms.",
    "home.testimonials.product.name": "Omar Nabil",
    "home.testimonials.product.role": "Founder and CEO",
    "home.testimonials.growth.quote":
      "They did not just build screens. They helped us rethink the workflow, the data, and the launch path.",
    "home.testimonials.growth.name": "Lina Farouk",
    "home.testimonials.growth.role": "Growth Lead",

    "home.faq.eyebrow": "FAQ",
    "home.faq.title": "Clear answers before we start.",
    "home.faq.description":
      "A few practical details for teams evaluating HDS as a long-term technology partner.",
    "home.faq.scope.title": "Can HDS build from scratch and improve existing systems?",
    "home.faq.scope.content":
      "Yes. We start with discovery, then recommend whether to modernize, rebuild, integrate, or launch a focused new product.",
    "home.faq.timeline.title": "How long does a typical project take?",
    "home.faq.timeline.content":
      "Timelines depend on scope and integrations. MVPs can start in focused phases, while enterprise systems usually need staged delivery.",
    "home.faq.ownership.title": "Will we own the source code?",
    "home.faq.ownership.content":
      "Yes. Ownership, repositories, credentials, documentation, and handover expectations are clarified in the proposal and contract.",
    "home.faq.support.title": "Do you support products after launch?",
    "home.faq.support.content":
      "Yes. HDS can provide maintenance, monitoring, improvements, new releases, and technical consulting after launch.",

    "home.cta.title": "Ready to build a platform your business can depend on?",
    "home.cta.description":
      "Tell us what you want to transform. We will help shape the roadmap, architecture, and delivery plan with senior clarity from day one.",
    "home.cta.primary": "Book a consultation",
    "home.cta.secondary": "Email HDS",
    "common.actions.skipToContent": "Skip to content",
    "navigation.home": "Home",
    "navigation.about": "About",
    "navigation.services": "Services",
    "navigation.menu": "Main navigation",
    "navigation.close": "Close navigation",
    "navigation.search": "Search HDS",
    "navigation.language": "Language",
    "navigation.theme": "Toggle theme",
    "navigation.cta": "Start a project",
    "navigation.locale.en": "EN",
    "navigation.locale.ar": "AR",
    "company.footer.services": "Services",
    "company.footer.certifications": "Certifications",
    "company.footer.newsletter.title": "Digital delivery notes",
    "company.footer.newsletter.description":
      "Insights on software, cloud, AI, and enterprise product delivery.",
    "company.footer.newsletter.inputLabel": "Email address",
    "company.footer.newsletter.placeholder": "work@company.com",
    "company.footer.newsletter.submit": "Subscribe",
    "company.footer.legal.privacy": "Privacy",
    "company.footer.legal.terms": "Terms",
    "company.contact.emails.general": "General",
    "company.contact.emails.info": "Info",
    "company.contact.phones.main": "Egypt",
    "company.contact.phones.office": "UAE",
    "company.contact.sales": "Sales",
    "company.contact.support": "Support",
    "company.contact.careers": "Careers",
    "company.footer.contact": "Contact",
    "company.footer.copyright": "Â© 2026 HDS. All rights reserved.",
    "company.footer.offices": "Offices",
    "company.footer.social": "Social",
    "company.leadership.ceo.bio":
      "Leads the company vision, client partnerships, and overall business direction.",
    "company.leadership.ceo.role": "Chief Executive Officer",
    "company.leadership.cto.bio":
      "Oversees engineering standards, architecture quality, and delivery discipline.",
    "company.leadership.cto.role": "Chief Technology Officer",
    "company.leadership.title": "Leadership",
    "company.offices.cairo.address": "Downtown Cairo, Egypt",
    "company.offices.cairo.city": "Cairo",
    "company.offices.cairo.country": "Egypt",
    "company.offices.cairo.hours": "Sunday to Thursday, 9:00 AM to 6:00 PM",
    "company.offices.dubai.address": "Dubai Internet City, Dubai, UAE",
    "company.offices.dubai.city": "Dubai",
    "company.offices.dubai.country": "United Arab Emirates",
    "company.offices.dubai.hours": "Monday to Friday, 9:00 AM to 6:00 PM",
    "company.offices.title": "Offices",
    "company.profile.awards.delivery": "Recognized for delivery excellence",
    "company.profile.awards.design": "Recognized for product design quality",
    "company.profile.certifications.delivery": "Delivery excellence practices",
    "company.profile.certifications.iso": "ISO-aligned quality practices",
    "company.profile.certifications.security": "Security-aware engineering practices",
    "company.profile.description":
      "HDS builds digital products, software platforms, and cloud solutions for teams that need clarity and long-term reliability.",
    "company.profile.mission":
      "To help organizations turn complex ideas into dependable digital systems.",
    "company.profile.tagline": "Engineered for serious digital growth.",
    "company.profile.vision":
      "To be the long-term product and engineering partner for ambitious organizations.",
    "company.social.behance": "Behance",
    "company.social.dribbble": "Dribbble",
    "company.social.facebook": "Facebook",
    "company.social.github": "GitHub",
    "company.social.instagram": "Instagram",
    "company.social.linkedin": "LinkedIn",
    "company.social.medium": "Medium",
    "company.social.youtube": "YouTube",
    "company.social.x": "X",
    "company.statistics.clients": "clients served",
    "company.statistics.countries": "countries supported",
    "company.statistics.percent": "%",
    "company.statistics.plus": "+",
    "company.statistics.projects": "projects delivered",
    "company.statistics.uptime": "target uptime",
    "company.technologies.backend": "Backend",
    "company.technologies.cloud": "Cloud",
    "company.technologies.design": "Design",
    "company.technologies.frontend": "Frontend",
    "company.timeline.2018.description":
      "HDS started with a focus on product thinking and reliable delivery.",
    "company.timeline.2018.title": "Company founded",
    "company.timeline.2021.description":
      "Expanded into cloud, product design, and enterprise delivery programs.",
    "company.timeline.2021.title": "Scaled into full-service delivery",
    "company.timeline.2024.description":
      "Refined the reference architecture to support long-term product growth.",
    "company.timeline.2024.title": "Reference engineering model established",
    "company.timeline.title": "Timeline",
    "company.values.clarity.description": "Keep decisions visible, scoped, and easy to understand.",
    "company.values.clarity.title": "Clarity",
    "company.values.discipline.description":
      "Build with structure, accountability, and repeatable quality.",
    "company.values.discipline.title": "Discipline",
    "company.values.partnership.description":
      "Work as a long-term partner instead of a short-term vendor.",
    "company.values.partnership.title": "Partnership",

    "seo.services.description":
      "Explore HDS services for web, mobile, UX, cloud, and scalable digital product delivery.",
    "seo.services.keywords":
      "HDS services, web development, mobile development, UI UX design, cloud solutions, software company",
    "seo.services.title": "Software Development Services",
    "services.breadcrumb.home": "Home",
    "services.breadcrumb.label": "Breadcrumb",
    "services.breadcrumb.services": "Services",
    "services.card.readMore": "Explore service",
    "services.cta.primary": "Start a project",
    "services.cta.secondary": "Talk to HDS",
    "services.details.badge": "Service details",
    "services.details.benefits.description":
      "Each service is shaped to improve delivery confidence, product quality, and long-term maintainability.",
    "services.details.benefits.eyebrow": "Benefits",
    "services.details.benefits.title": "Built around measurable business outcomes.",
    "services.details.faq.description":
      "Practical answers for teams evaluating scope, delivery, ownership, and launch readiness.",
    "services.details.faq.eyebrow": "FAQ",
    "services.details.faq.title": "Questions before we begin.",
    "services.details.features.description":
      "Engagements produce practical assets, production code, documentation, and handover-ready systems.",
    "services.details.features.eyebrow": "Deliverables",
    "services.details.features.title": "Clear outputs your team can build on.",
    "services.details.industries.description":
      "The service model adapts to teams with real workflows, compliance needs, and growth pressure.",
    "services.details.industries.eyebrow": "Industries",
    "services.details.industries.title": "Designed for demanding operating environments.",
    "services.details.overview.title": "Overview",
    "services.details.process.description":
      "The same disciplined delivery model adapts to each service while keeping risk and progress visible.",
    "services.details.process.eyebrow": "Process",
    "services.details.process.title": "A structured path from discovery to launch.",
    "services.details.related.description":
      "Most projects benefit from a focused mix of strategy, design, engineering, and cloud execution.",
    "services.details.related.eyebrow": "Related services",
    "services.details.related.title": "Combine services without adding complexity.",
    "services.details.technologies.description":
      "We use proven technology choices that support secure delivery, performance, and future extension.",
    "services.details.technologies.eyebrow": "Technology",
    "services.details.technologies.title": "Tools selected for durability and speed.",
    "services.grid.description":
      "Choose a focused service or combine disciplines into one accountable delivery program.",
    "services.grid.eyebrow": "Service catalog",
    "services.grid.title": "Services built for serious digital products.",
    "services.industries.ecommerce": "E-commerce and marketplaces",
    "services.industries.education": "Education and training platforms",
    "services.industries.fintech": "Fintech and regulated workflows",
    "services.industries.healthcare": "Healthcare and operations teams",
    "services.industries.logistics": "Logistics and field operations",
    "services.industries.saas": "SaaS and product companies",
    "services.items.cloud.benefits.cost":
      "Keep infrastructure cost visible and aligned with actual product needs.",
    "services.items.cloud.benefits.reliability":
      "Increase platform reliability with cleaner deployment and monitoring practices.",
    "services.items.cloud.benefits.security":
      "Improve security posture through access control, environment discipline, and least privilege.",
    "services.items.cloud.cta.description":
      "HDS can help stabilize, automate, and scale your infrastructure with clear operational discipline.",
    "services.items.cloud.cta.title": "Need a cloud foundation your product can depend on?",
    "services.items.cloud.deliverables.infrastructure":
      "Cloud architecture, environments, and deployment-ready infrastructure plan.",
    "services.items.cloud.deliverables.monitoring":
      "Monitoring, logging, alerting, and operational handover recommendations.",
    "services.items.cloud.deliverables.pipeline":
      "CI/CD pipeline configuration and release workflow documentation.",
    "services.items.cloud.faq.migration.answer":
      "Yes. We can audit the current setup, reduce risk, and plan staged improvements without unnecessary disruption.",
    "services.items.cloud.faq.migration.question": "Can you improve an existing cloud setup?",
    "services.items.cloud.faq.monitoring.answer":
      "Yes. Monitoring, logging, alerting, and incident visibility can be included in the cloud delivery scope.",
    "services.items.cloud.faq.monitoring.question": "Do you set up monitoring?",
    "services.items.cloud.fullDescription":
      "HDS helps teams plan, deploy, and operate cloud environments with CI/CD, monitoring, secure configuration, performance awareness, and a practical path to reliable growth.",
    "services.items.cloud.highlights.delivery":
      "CI/CD pipelines that make releases safer and more repeatable.",
    "services.items.cloud.highlights.infrastructure":
      "Infrastructure planned around reliability, security, cost, and team ownership.",
    "services.items.cloud.highlights.observability":
      "Monitoring and logging foundations that make production health visible.",
    "services.items.cloud.imageAlt": "Cloud infrastructure and deployment monitoring interface",
    "services.items.cloud.seo.description":
      "Cloud and DevOps services for secure infrastructure, CI/CD, monitoring, and scalable operations.",
    "services.items.cloud.seo.keywords": "cloud solutions, DevOps, CI/CD, monitoring, HDS",
    "services.items.cloud.seo.title": "Cloud Solutions and DevOps Services",
    "services.items.cloud.shortDescription":
      "Cloud and DevOps support for secure deployments, observability, automation, and scalable operations.",
    "services.items.cloud.subtitle":
      "Cloud infrastructure, delivery pipelines, monitoring, and reliability foundations.",
    "services.items.cloud.title": "Cloud Solutions",
    "services.items.design.benefits.clarity":
      "Clarify product scope before investing heavily in implementation.",
    "services.items.design.benefits.consistency":
      "Create consistent product experiences across pages, teams, and future releases.",
    "services.items.design.benefits.usability":
      "Improve usability with clearer flows, labels, hierarchy, and interaction states.",
    "services.items.design.cta.description":
      "HDS can help turn unclear workflows into polished, usable, and build-ready product experiences.",
    "services.items.design.cta.title": "Need a product experience users can trust?",
    "services.items.design.deliverables.flows":
      "User journeys, information architecture, and key product flows.",
    "services.items.design.deliverables.prototype":
      "Clickable prototypes and handoff-ready specifications.",
    "services.items.design.deliverables.system":
      "Design system foundations, reusable components, and interaction patterns.",
    "services.items.design.faq.handoff.answer":
      "Yes. Handoff includes structure, states, responsive behavior, and implementation guidance.",
    "services.items.design.faq.handoff.question": "Can developers build directly from the design?",
    "services.items.design.faq.research.answer":
      "Research depth depends on scope, but every design engagement starts by clarifying users, goals, and constraints.",
    "services.items.design.faq.research.question": "Do you include user research?",
    "services.items.design.fullDescription":
      "HDS designs interfaces with attention to user goals, content hierarchy, accessibility, product constraints, and the reusable systems developers need to build consistently.",
    "services.items.design.highlights.prototype":
      "Interactive prototypes that make decisions visible before engineering starts.",
    "services.items.design.highlights.research":
      "Research-informed journeys grounded in real user needs and business constraints.",
    "services.items.design.highlights.systems":
      "Reusable design systems that keep products consistent as they grow.",
    "services.items.design.imageAlt": "Product design system and interface screens",
    "services.items.design.seo.description":
      "UI and UX design services for scalable products, design systems, and user-centered interfaces.",
    "services.items.design.seo.keywords": "UI UX design, product design, design systems, HDS",
    "services.items.design.seo.title": "UI/UX Design Services",
    "services.items.design.shortDescription":
      "User journeys, prototypes, and design systems that make complex products easier to use.",
    "services.items.design.subtitle":
      "Clear product experiences shaped by research, systems, and practical delivery.",
    "services.items.design.title": "UI/UX Design",
    "services.items.mobile.benefits.adoption":
      "Improve user adoption with focused mobile journeys and clear feedback loops.",
    "services.items.mobile.benefits.reliability":
      "Increase reliability through structured testing and API error handling.",
    "services.items.mobile.benefits.speed":
      "Move faster with shared architecture and reusable app foundations.",
    "services.items.mobile.cta.description":
      "HDS can help define the mobile roadmap, release path, and technical foundation.",
    "services.items.mobile.cta.title": "Have a mobile product to launch?",
    "services.items.mobile.deliverables.analytics":
      "Analytics events, crash-readiness planning, and post-launch improvement backlog.",
    "services.items.mobile.deliverables.app":
      "Production mobile app foundation with reusable screens and components.",
    "services.items.mobile.deliverables.store":
      "Release checklist, app store preparation, and versioning support.",
    "services.items.mobile.faq.platforms.answer":
      "Yes. We can plan cross-platform delivery while respecting platform-specific expectations where they matter.",
    "services.items.mobile.faq.platforms.question": "Do you build for iOS and Android?",
    "services.items.mobile.faq.release.answer":
      "Yes. HDS supports release preparation, assets, versioning, review readiness, and launch coordination.",
    "services.items.mobile.faq.release.question": "Can you help with app store release?",
    "services.items.mobile.fullDescription":
      "HDS builds mobile applications with practical product flows, reliable API integration, release planning, analytics, and the engineering discipline needed for post-launch iteration.",
    "services.items.mobile.highlights.analytics":
      "Analytics and events that help teams understand adoption and behavior.",
    "services.items.mobile.highlights.crossPlatform":
      "Cross-platform delivery for consistent iOS and Android experiences.",
    "services.items.mobile.highlights.release":
      "Store release preparation, versioning, and launch readiness.",
    "services.items.mobile.imageAlt": "Mobile application interface preview",
    "services.items.mobile.seo.description":
      "Mobile development services for reliable, scalable iOS and Android product experiences.",
    "services.items.mobile.seo.keywords": "mobile app development, React Native, iOS, Android, HDS",
    "services.items.mobile.seo.title": "Mobile App Development Services",
    "services.items.mobile.shortDescription":
      "Mobile experiences designed for adoption, performance, store readiness, and long-term improvement.",
    "services.items.mobile.subtitle":
      "Release-ready mobile apps connected to reliable APIs and analytics.",
    "services.items.mobile.title": "Mobile Development",
    "services.items.web.benefits.conversion":
      "Improve conversion and task completion with clear user journeys.",
    "services.items.web.benefits.integration":
      "Connect web products to APIs, payments, analytics, CMS, and internal systems.",
    "services.items.web.benefits.maintainability":
      "Reduce future maintenance cost with clean frontend architecture.",
    "services.items.web.cta.description":
      "HDS can help shape the roadmap, architecture, and delivery plan for your next web product.",
    "services.items.web.cta.title": "Ready to build a web platform that can grow?",
    "services.items.web.deliverables.api":
      "API integration layer prepared for backend and CMS growth.",
    "services.items.web.deliverables.frontend":
      "Production frontend application with reusable components and quality gates.",
    "services.items.web.deliverables.testing":
      "Testing, documentation, deployment readiness, and handover support.",
    "services.items.web.faq.cms.answer":
      "Yes. The frontend can be prepared for headless CMS content, previews, media, and future editorial workflows.",
    "services.items.web.faq.cms.question": "Can the website connect to a CMS?",
    "services.items.web.faq.timeline.answer":
      "A focused MVP can start in phases, while larger platforms are planned around releases and integration complexity.",
    "services.items.web.faq.timeline.question": "How long does a web platform take?",
    "services.items.web.fullDescription":
      "HDS builds web platforms that combine polished user experiences with robust architecture, reliable integrations, and a maintainable codebase ready for long-term growth.",
    "services.items.web.highlights.accessibility":
      "Accessible, responsive screens that work across devices and input methods.",
    "services.items.web.highlights.architecture":
      "Architecture planned around scale, ownership, and future feature growth.",
    "services.items.web.highlights.performance":
      "Fast loading interfaces with clean state boundaries and optimized assets.",
    "services.items.web.imageAlt": "Web application dashboard interface",
    "services.items.web.seo.description":
      "Custom web development services for scalable, accessible, and maintainable business platforms.",
    "services.items.web.seo.keywords": "web development, React development, custom web apps, HDS",
    "services.items.web.seo.title": "Web Development Services",
    "services.items.web.shortDescription":
      "Responsive, accessible, and maintainable web applications built for real business workflows.",
    "services.items.web.subtitle":
      "Scalable web platforms for operations, products, and customer experiences.",
    "services.items.web.title": "Web Development",
    "services.listing.cta.description":
      "Share the business challenge and HDS will help define the right scope, architecture, and delivery path.",
    "services.listing.cta.title": "Need a service plan shaped around your goals?",
    "services.listing.faq.description":
      "A few answers for teams deciding how to start or combine multiple service tracks.",
    "services.listing.faq.eyebrow": "FAQ",
    "services.listing.faq.mix.answer":
      "Yes. Web, mobile, design, cloud, and product consulting can be combined into one coordinated roadmap.",
    "services.listing.faq.mix.question": "Can we combine multiple services?",
    "services.listing.faq.start.answer":
      "We usually begin with discovery, then recommend the smallest service mix that can reach the business outcome safely.",
    "services.listing.faq.start.question": "Which service should we start with?",
    "services.listing.faq.support.answer":
      "Yes. HDS can support releases, monitoring, optimization, and future product improvements after launch.",
    "services.listing.faq.support.question": "Do you continue after launch?",
    "services.listing.faq.title": "How services work at HDS.",
    "services.listing.hero.badge": "HDS Services",
    "services.listing.hero.imageAlt": "Enterprise software and cloud service interface preview",
    "services.listing.hero.primary": "Start a project",
    "services.listing.hero.secondary": "See process",
    "services.listing.hero.subtitle":
      "HDS brings product thinking, design, engineering, cloud, and delivery discipline into one accountable team.",
    "services.listing.hero.title": "Digital services that turn strategy into reliable software.",
    "services.listing.process.description":
      "Every engagement follows a clear rhythm: discover, design, build, launch, and improve.",
    "services.listing.process.eyebrow": "Delivery process",
    "services.listing.process.title": "One delivery model, adapted to each service.",
    "services.listing.technologies.description":
      "The catalog combines frontend, backend, mobile, design, cloud, automation, and release capabilities.",
    "services.listing.technologies.eyebrow": "Technology coverage",
    "services.listing.technologies.title": "A modern technical foundation for every service.",
    "services.notFound.action": "Back to services",
    "services.notFound.description": "The service you requested does not exist or may have moved.",
    "services.notFound.title": "Service not found.",
    "services.process.build.description":
      "Implement in focused increments with reviews, validation, testing, and visible progress.",
    "services.process.build.title": "Build",
    "services.process.design.description":
      "Shape user journeys, interface states, system boundaries, and delivery priorities with practical prototypes.",
    "services.process.design.title": "Design",
    "services.process.discover.description":
      "Clarify goals, users, workflows, constraints, integrations, and launch risks before implementation begins.",
    "services.process.discover.title": "Discover",
    "services.process.launch.description":
      "Prepare deployment, analytics, documentation, monitoring, and post-launch improvement planning.",
    "services.process.launch.title": "Launch",
    "navigation.contact": "Contact",
    "seo.contact.title": "Contact HDS",
    "seo.contact.description":
      "Talk to HDS about a product, platform, or digital transformation initiative. Our team responds with a practical next step.",
    "seo.contact.keywords":
      "contact HDS, software development inquiry, digital product consultation, enterprise technology partner",
    "contact.breadcrumb.label": "Breadcrumb",
    "contact.breadcrumb.home": "Home",
    "contact.breadcrumb.contact": "Contact",
    "contact.hero.badge": "Start a conversation",
    "contact.hero.title": "Let's shape the right software path for your business.",
    "contact.hero.subtitle":
      "Share what you are building, where you are blocked, or what needs to scale. We will help you turn it into a clear technical plan.",
    "contact.hero.primary": "Send an inquiry",
    "contact.hero.secondary": "Email sales",
    "contact.methods.eyebrow": "Contact channels",
    "contact.methods.title": "Reach the right team from the first message.",
    "contact.methods.description":
      "Whether you need a new product, technical support, or a strategic discussion, your request goes through the right HDS channel.",
    "contact.methods.sales.title": "Project inquiries",
    "contact.methods.sales.description":
      "Discuss new products, platforms, modernization work, or long-term engineering partnerships.",
    "contact.methods.sales.action": "Contact sales",
    "contact.methods.support.title": "Client support",
    "contact.methods.support.description":
      "Get help with active projects, delivery questions, handover items, or operational follow-up.",
    "contact.methods.support.action": "Contact support",
    "contact.methods.email.title": "General email",
    "contact.methods.email.description":
      "Send company questions, partnership notes, or background context before a discovery call.",
    "contact.methods.email.action": "Send email",
    "contact.methods.phone.title": "Office phone",
    "contact.methods.phone.description":
      "Speak with a regional office for urgent coordination or scheduled consultation requests.",
    "contact.methods.phone.action": "Call office",
    "contact.offices.eyebrow": "Regional presence",
    "contact.offices.title": "Offices prepared for regional and global delivery.",
    "contact.offices.description":
      "HDS operates across strategic markets with distributed delivery practices and clear communication windows.",
    "contact.map.eyebrow": "Location overview",
    "contact.map.title": "A map-ready office layer for future live integration.",
    "contact.map.description":
      "Office coordinates are sourced from the Company Domain today and can later power Google Maps, Mapbox, or a custom locator without changing page components.",
    "contact.map.action": "Open map",
    "contact.form.eyebrow": "Lead form",
    "contact.form.title": "Tell us about the outcome you need.",
    "contact.form.description":
      "The more context you share, the faster we can suggest the right team, timeline, and delivery approach.",
    "contact.form.fields.fullName": "Full name",
    "contact.form.fields.company": "Company",
    "contact.form.fields.email": "Email",
    "contact.form.fields.phone": "Phone",
    "contact.form.fields.country": "Country",
    "contact.form.fields.industry": "Industry",
    "contact.form.fields.service": "Service",
    "contact.form.fields.budget": "Budget range",
    "contact.form.fields.timeline": "Timeline",
    "contact.form.fields.message": "Project message",
    "contact.form.fields.newsletterOptIn":
      "Send me occasional HDS insights about product strategy, engineering, and digital transformation.",
    "contact.form.placeholders.fullName": "Your name",
    "contact.form.placeholders.company": "Company or organization",
    "contact.form.placeholders.email": "you@company.com",
    "contact.form.placeholders.phone": "+20 100 000 0000",
    "contact.form.placeholders.country": "Select country",
    "contact.form.placeholders.industry": "Select industry",
    "contact.form.placeholders.service": "Select service",
    "contact.form.placeholders.budget": "Select budget",
    "contact.form.placeholders.timeline": "Select timeline",
    "contact.form.placeholders.message":
      "Describe the product, challenge, goals, users, integrations, or timeline you have in mind.",
    "contact.form.actions.submit": "Submit inquiry",
    "contact.form.actions.retry": "Try again",
    "contact.form.status.successTitle": "Inquiry received",
    "contact.form.status.successDescription":
      "Thank you. The HDS team will review your request and respond with a practical next step.",
    "contact.form.status.errorTitle": "Submission failed",
    "contact.form.status.errorDescription":
      "We could not submit your inquiry right now. Please review your connection and try again.",
    "contact.form.errors.required": "This field is required.",
    "contact.form.errors.email": "Enter a valid email address.",
    "contact.form.errors.phone": "Enter a valid phone number.",
    "contact.form.errors.maxLength": "This value is too long.",
    "contact.form.errors.maxMessage": "Please keep the message under 1,200 characters.",
    "contact.options.country.egypt": "Egypt",
    "contact.options.country.uae": "United Arab Emirates",
    "contact.options.country.saudiArabia": "Saudi Arabia",
    "contact.options.country.usa": "United States",
    "contact.options.country.germany": "Germany",
    "contact.options.country.other": "Other",
    "contact.options.industry.healthcare": "Healthcare",
    "contact.options.industry.fintech": "FinTech",
    "contact.options.industry.ecommerce": "E-Commerce",
    "contact.options.industry.logistics": "Logistics",
    "contact.options.industry.education": "Education",
    "contact.options.industry.realEstate": "Real Estate",
    "contact.options.industry.manufacturing": "Manufacturing",
    "contact.options.industry.saas": "SaaS",
    "contact.options.industry.other": "Other",
    "contact.options.service.webDevelopment": "Web development",
    "contact.options.service.mobileDevelopment": "Mobile development",
    "contact.options.service.uiUxDesign": "UI/UX design",
    "contact.options.service.cloudSolutions": "Cloud solutions",
    "contact.options.service.productStrategy": "Product strategy",
    "contact.options.service.notSure": "Not sure yet",
    "contact.options.budget.under25k": "Under $25k",
    "contact.options.budget.from25kTo50k": "$25k-$50k",
    "contact.options.budget.from50kTo100k": "$50k-$100k",
    "contact.options.budget.over100k": "Over $100k",
    "contact.options.budget.notSure": "Not sure yet",
    "contact.options.timeline.asap": "As soon as possible",
    "contact.options.timeline.oneToThree": "1-3 months",
    "contact.options.timeline.threeToSix": "3-6 months",
    "contact.options.timeline.sixPlus": "6+ months",
    "contact.options.timeline.notSure": "Not sure yet",
    "contact.faq.eyebrow": "Contact FAQ",
    "contact.faq.title": "A few details before we talk.",
    "contact.faq.description":
      "These answers help set expectations before the first discovery conversation.",
    "contact.faq.responseTime.question": "How quickly will HDS respond?",
    "contact.faq.responseTime.answer":
      "Most qualified inquiries receive a response within one business day, with urgent operational requests routed faster.",
    "contact.faq.nda.question": "Can we discuss the project under NDA?",
    "contact.faq.nda.answer":
      "Yes. We can sign an NDA before reviewing sensitive business, technical, or product information.",
    "contact.faq.handover.question": "Can HDS work with an existing product or codebase?",
    "contact.faq.handover.answer":
      "Yes. We can audit existing systems, stabilize delivery, modernize architecture, or extend an active product roadmap.",
    "contact.cta.title": "Prefer to start with the work itself?",
    "contact.cta.description":
      "Explore the services HDS can assemble around your product, then send the team the exact context you want to discuss.",
    "contact.cta.primary": "Start an inquiry",
    "contact.cta.secondary": "View services",
  },
  ar: {
    "common.actions.backHome": "Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    "common.actions.reload": "Ø¥Ø¹Ø§Ø¯Ø© ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©",
    "common.actions.skipToContent": "ØªØ¬Ø§ÙˆØ² Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø­ØªÙˆÙ‰",
    "navigation.home": "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    "navigation.about": "Ø¹Ù† Ø§Ù„Ø´Ø±ÙƒØ©",
    "navigation.services": "Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "navigation.menu": "Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ",
    "navigation.close": "Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„ØªÙ†Ù‚Ù„",
    "navigation.search": "Ø§Ù„Ø¨Ø­Ø« ÙÙŠ HDS",
    "navigation.language": "Ø§Ù„Ù„ØºØ©",
    "navigation.theme": "ØªØ¨Ø¯ÙŠÙ„ Ø§Ù„Ù…Ø¸Ù‡Ø±",
    "navigation.cta": "Ø§Ø¨Ø¯Ø£ Ù…Ø´Ø±ÙˆØ¹Ùƒ",
    "navigation.locale.en": "EN",
    "navigation.locale.ar": "AR",
    "company.footer.services": "Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "company.footer.certifications": "Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯Ø§Øª",
    "company.footer.newsletter.title": "Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ø±Ù‚Ù…ÙŠ",
    "company.footer.newsletter.description":
      "Ø±Ø¤Ù‰ Ø­ÙˆÙ„ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠØ©.",
    "company.footer.newsletter.inputLabel": "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
    "company.footer.newsletter.placeholder": "work@company.com",
    "company.footer.newsletter.submit": "Ø§Ø´ØªØ±Ùƒ",
    "company.footer.legal.privacy": "Ø§Ù„Ø®ØµÙˆØµÙŠØ©",
    "company.footer.legal.terms": "Ø§Ù„Ø´Ø±ÙˆØ·",
    "company.contact.emails.general": "Ø¹Ø§Ù…",
    "company.contact.emails.info": "Ù…Ø¹Ù„ÙˆÙ…Ø§Øª",
    "company.contact.phones.main": "Ù…ØµØ±",
    "company.contact.phones.office": "Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª",
    "company.contact.sales": "Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª",
    "company.contact.support": "Ø§Ù„Ø¯Ø¹Ù…",
    "company.contact.careers": "Ø§Ù„ÙˆØ¸Ø§Ø¦Ù",
    "errors.application.description":
      "ØªÙ… ØªÙØ¹ÙŠÙ„ ÙˆØ§Ø¬Ù‡Ø© Ø¢Ù…Ù†Ø© Ø¨Ø¯ÙŠÙ„Ø©. ÙŠØ±Ø¬Ù‰ Ø¥Ø¹Ø§Ø¯Ø© ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø© Ø£Ùˆ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ø¨Ø¹Ø¯ Ù‚Ù„ÙŠÙ„.",
    "errors.application.eyebrow": "Ø®Ø·Ø£ ÙÙŠ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚",
    "errors.application.title": "Ø­Ø¯Ø« Ø®Ø·Ø£ ØºÙŠØ± Ù…ØªÙˆÙ‚Ø¹.",
    "errors.notFound.description":
      "Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø© Ø£Ùˆ Ø±Ø¨Ù…Ø§ ØªÙ… Ù†Ù‚Ù„Ù‡Ø§.",
    "errors.notFound.eyebrow": "404",
    "errors.notFound.title": "Ø§Ù„ØµÙØ­Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©.",
    "seo.error.description": "Ø­Ø¯Ø« Ø®Ø·Ø£ Ù‚Ø§Ø¨Ù„ Ù„Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø¯Ø§Ø®Ù„ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚.",
    "seo.error.keywords": "HDS, Ø®Ø·Ø£ ÙÙŠ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚",
    "seo.error.title": "Ø®Ø·Ø£ ÙÙŠ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚",
    "seo.home.description":
      "HDS ØªØ·ÙˆØ± Ø­Ù„ÙˆÙ„ Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ³Ø­Ø§Ø¨Ø© ÙˆØ°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØªØ­ÙˆÙ„ Ø±Ù‚Ù…ÙŠ Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø·Ù…ÙˆØ­Ø©.",
    "seo.home.keywords":
      "HDS, Ø´Ø±ÙƒØ© Ø¨Ø±Ù…Ø¬ÙŠØ§Øª, ØªØ­ÙˆÙ„ Ø±Ù‚Ù…ÙŠ, Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ù…Ø®ØµØµØ©, Ø­Ù„ÙˆÙ„ Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ, Ø³Ø­Ø§Ø¨Ø©, DevOps, SaaS",
    "seo.home.title": "Ø´Ø±ÙƒØ© ØªØ­ÙˆÙ„ Ø±Ù‚Ù…ÙŠ Ø§Ø­ØªØ±Ø§ÙÙŠØ©",
    "navigation.portfolio": "Ø§Ù„Ø£Ø¹Ù…Ø§Ù„",
    "seo.portfolio.title": "Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ ÙˆØ¯Ø±Ø§Ø³Ø§Øª Ø§Ù„Ø­Ø§Ù„Ø©",
    "seo.portfolio.description":
      "Explore sample HDS case studies across healthcare, fintech, commerce, logistics, education, real estate, manufacturing, and delivery platforms.",
    "seo.portfolio.keywords":
      "HDS portfolio, case studies, software projects, digital transformation, product engineering",
    "portfolio.breadcrumb.label": "Breadcrumb",
    "portfolio.breadcrumb.home": "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    "portfolio.breadcrumb.portfolio": "Ø§Ù„Ø£Ø¹Ù…Ø§Ù„",
    "portfolio.hero.badge": "Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ ÙˆØ¯Ø±Ø§Ø³Ø§Øª Ø§Ù„Ø­Ø§Ù„Ø©",
    "portfolio.hero.title":
      "Ø¯Ù„ÙŠÙ„ Ø¹Ù…Ù„ÙŠ Ø¹Ù„Ù‰ Ø£Ù† Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ø§Ù„Ù‚ÙˆÙŠØ© ØªØºÙŠØ± Ø·Ø±ÙŠÙ‚Ø© Ø¹Ù…Ù„ Ø§Ù„Ø´Ø±ÙƒØ©.",
    "portfolio.hero.subtitle":
      "A curated set of fictional sample projects showing the kind of product thinking, engineering discipline, and measurable outcomes HDS is built to deliver.",
    "portfolio.hero.primary": "Ø®Ø·Ø· Ù…Ø´Ø±ÙˆØ¹Ùƒ",
    "portfolio.hero.secondary": "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "portfolio.hero.imageAlt": "Premium case study dashboard and product interface previews",
    "portfolio.featured.eyebrow": "Featured work",
    "portfolio.featured.title":
      "Flagship programs with product, engineering, and operating impact.",
    "portfolio.featured.description":
      "Each case study is structured around the problem, the delivery model, the architecture, and the business result.",
    "portfolio.grid.eyebrow": "Project library",
    "portfolio.grid.title": "Explore the portfolio by industry, technology, service, or goal.",
    "portfolio.grid.description":
      "The content model is ready for CMS migration: filters, search, details, metrics, and related projects all come from data.",
    "portfolio.grid.resultCount": "{count} projects match the current filters.",
    "portfolio.statistics.eyebrow": "Portfolio signals",
    "portfolio.statistics.title": "A trust layer designed for future real case studies.",
    "portfolio.statistics.description":
      "The sample set demonstrates how future client work can be published without changing components.",
    "portfolio.statistics.projects": "sample projects",
    "portfolio.statistics.industries": "industries represented",
    "portfolio.statistics.technologies": "technologies shown",
    "portfolio.statistics.featured": "featured case studies",
    "portfolio.cta.title": "Have a project that should become the next case study?",
    "portfolio.cta.description":
      "Tell us about the workflow, platform, or product you want to improve. HDS will help shape a delivery path with measurable outcomes.",
    "portfolio.cta.primary": "Start a project",
    "portfolio.cta.secondary": "View services",
    "portfolio.case.cta.title": "Want this level of clarity for your own platform?",
    "portfolio.case.cta.description":
      "HDS can help turn complex requirements into a product plan, architecture, and release path your team can trust.",
    "portfolio.card.readCaseStudy": "Ø§Ù‚Ø±Ø£ Ø¯Ø±Ø§Ø³Ø© Ø§Ù„Ø­Ø§Ù„Ø©",
    "portfolio.filters.searchLabel": "Search projects",
    "portfolio.filters.searchPlaceholder": "Search by client, industry, technology...",
    "portfolio.filters.industry": "Industry filter",
    "portfolio.filters.technology": "Technology filter",
    "portfolio.filters.service": "Service filter",
    "portfolio.filters.allIndustries": "ÙƒÙ„ Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª",
    "portfolio.filters.allTechnologies": "ÙƒÙ„ Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª",
    "portfolio.filters.allServices": "ÙƒÙ„ Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "portfolio.empty.title": "No projects found",
    "portfolio.empty.description":
      "Adjust the filters or search query to explore more case studies.",
    "portfolio.notFound.title": "Case study not found.",
    "portfolio.notFound.description":
      "The requested portfolio project does not exist or may have moved.",
    "portfolio.notFound.action": "Back to portfolio",
    "portfolio.case.client": "Ø§Ù„Ø¹Ù…ÙŠÙ„",
    "portfolio.case.location": "Ø§Ù„Ù…ÙˆÙ‚Ø¹",
    "portfolio.case.duration": "Ø§Ù„Ù…Ø¯Ø©",
    "portfolio.case.team": "Ø­Ø¬Ù… Ø§Ù„ÙØ±ÙŠÙ‚",
    "portfolio.case.challenge": "Ø§Ù„ØªØ­Ø¯ÙŠ",
    "portfolio.case.solution": "Ø§Ù„Ø­Ù„",
    "portfolio.case.architecture": "Ø£Ø¨Ø±Ø² Ù†Ù‚Ø§Ø· Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ©",
    "portfolio.case.process": "Ø¹Ù…Ù„ÙŠØ© Ø§Ù„ØªÙ†ÙÙŠØ°",
    "portfolio.case.results": "Ù†ØªØ§Ø¦Ø¬ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„",
    "portfolio.case.related": "Ø¯Ø±Ø§Ø³Ø§Øª Ø­Ø§Ù„Ø© Ø°Ø§Øª ØµÙ„Ø©",
    "portfolio.industries.healthcare": "Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„ØµØ­ÙŠØ©",
    "portfolio.industries.fintech": "Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ©",
    "portfolio.industries.ecommerce": "Ø§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©",
    "portfolio.industries.logistics": "Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª",
    "portfolio.industries.education": "Ø§Ù„ØªØ¹Ù„ÙŠÙ…",
    "portfolio.industries.realEstate": "Ø§Ù„Ø¹Ù‚Ø§Ø±Ø§Øª",
    "portfolio.industries.manufacturing": "Ø§Ù„ØªØµÙ†ÙŠØ¹",
    "portfolio.industries.foodDelivery": "ØªÙˆØµÙŠÙ„ Ø§Ù„Ø·Ø¹Ø§Ù…",
    "portfolio.locations.egypt": "Ù…ØµØ±",
    "portfolio.locations.uae": "Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª",
    "portfolio.locations.saudi": "Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
    "portfolio.locations.global": "Ø¹Ø§Ù„Ù…ÙŠ",
    "portfolio.locations.germany": "Ø£Ù„Ù…Ø§Ù†ÙŠØ§",
    "portfolio.locations.kuwait": "Ø§Ù„ÙƒÙˆÙŠØª",
    "portfolio.duration.threeMonths": "3 Ø£Ø´Ù‡Ø±",
    "portfolio.duration.fourMonths": "4 Ø£Ø´Ù‡Ø±",
    "portfolio.duration.fiveMonths": "5 Ø£Ø´Ù‡Ø±",
    "portfolio.duration.sixMonths": "6 Ø£Ø´Ù‡Ø±",
    "portfolio.duration.sevenMonths": "7 Ø£Ø´Ù‡Ø±",
    "portfolio.duration.eightMonths": "8 Ø£Ø´Ù‡Ø±",
    "portfolio.services.productStrategy": "Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© Ø§Ù„Ù…Ù†ØªØ¬",
    "portfolio.services.webDevelopment": "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨",
    "portfolio.services.cloud": "Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ø§Ù„Ø³Ø­Ø§Ø¨Ø©",
    "portfolio.services.uxDesign": "ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…",
    "portfolio.services.devops": "DevOps",
    "portfolio.services.analytics": "Ø§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª",
    "portfolio.services.mobile": "ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¬ÙˆØ§Ù„",
    "portfolio.metrics.responseTime": "response time",
    "portfolio.metrics.teamAdoption": "team adoption",
    "portfolio.metrics.handover": "handover",
    "portfolio.metrics.onboarding": "onboarding",
    "portfolio.metrics.incidents": "incidents",
    "portfolio.metrics.releaseCycle": "release cycle",
    "portfolio.metrics.conversion": "conversion",
    "portfolio.metrics.loadTime": "load time",
    "portfolio.metrics.merchants": "merchants",
    "portfolio.metrics.dispatch": "dispatch",
    "portfolio.metrics.operationalCost": "operational cost",
    "portfolio.metrics.trackingAccuracy": "tracking accuracy",
    "portfolio.metrics.completion": "completion",
    "portfolio.metrics.adminTime": "admin time",
    "portfolio.metrics.retention": "retention",
    "portfolio.metrics.pipeline": "pipeline",
    "portfolio.metrics.inventoryAccuracy": "inventory accuracy",
    "portfolio.metrics.downtime": "downtime",
    "portfolio.metrics.alertNoise": "alert noise",
    "portfolio.metrics.plants": "plants",
    "portfolio.metrics.orders": "orders",
    "portfolio.metrics.deliveryTime": "delivery time",
    "portfolio.metrics.repeatOrders": "repeat orders",
    "portfolio.projects.careflow.title": "CareFlow Command",
    "portfolio.projects.careflow.subtitle":
      "A premium hospital operations platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.careflow.imageAlt": "CareFlow Command interface preview",
    "portfolio.projects.careflow.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for hospital operations.",
    "portfolio.projects.careflow.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.careflow.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.careflow.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.careflow.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.careflow.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.careflow.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.careflow.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.careflow.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.careflow.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.careflow.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.careflow.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.careflow.testimonial.author": "Sample Client Lead",
    "portfolio.projects.careflow.testimonial.role": "Director of Operations",
    "portfolio.projects.careflow.seo.title": "CareFlow Command Case Study",
    "portfolio.projects.careflow.seo.description":
      "A sample HDS case study showing hospital operations product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.careflow.seo.keywords":
      "hospital operations, case study, HDS, software development",
    "portfolio.projects.nova.title": "Nova Payments",
    "portfolio.projects.nova.subtitle":
      "A premium fintech onboarding platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.nova.imageAlt": "Nova Payments interface preview",
    "portfolio.projects.nova.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for fintech onboarding.",
    "portfolio.projects.nova.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.nova.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.nova.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.nova.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.nova.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.nova.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.nova.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.nova.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.nova.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.nova.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.nova.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.nova.testimonial.author": "Sample Client Lead",
    "portfolio.projects.nova.testimonial.role": "Director of Operations",
    "portfolio.projects.nova.seo.title": "Nova Payments Case Study",
    "portfolio.projects.nova.seo.description":
      "A sample HDS case study showing fintech onboarding product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.nova.seo.keywords":
      "fintech onboarding, case study, HDS, software development",
    "portfolio.projects.marketlane.title": "MarketLane Commerce",
    "portfolio.projects.marketlane.subtitle":
      "A premium marketplace commerce platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.marketlane.imageAlt": "MarketLane Commerce interface preview",
    "portfolio.projects.marketlane.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for marketplace commerce.",
    "portfolio.projects.marketlane.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.marketlane.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.marketlane.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.marketlane.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.marketlane.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.marketlane.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.marketlane.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.marketlane.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.marketlane.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.marketlane.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.marketlane.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.marketlane.testimonial.author": "Sample Client Lead",
    "portfolio.projects.marketlane.testimonial.role": "Director of Operations",
    "portfolio.projects.marketlane.seo.title": "MarketLane Commerce Case Study",
    "portfolio.projects.marketlane.seo.description":
      "A sample HDS case study showing marketplace commerce product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.marketlane.seo.keywords":
      "marketplace commerce, case study, HDS, software development",
    "portfolio.projects.fleetpulse.title": "FleetPulse Logistics",
    "portfolio.projects.fleetpulse.subtitle":
      "A premium fleet dispatch platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.fleetpulse.imageAlt": "FleetPulse Logistics interface preview",
    "portfolio.projects.fleetpulse.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for fleet dispatch.",
    "portfolio.projects.fleetpulse.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.fleetpulse.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.fleetpulse.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.fleetpulse.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.fleetpulse.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.fleetpulse.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.fleetpulse.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.fleetpulse.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.fleetpulse.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.fleetpulse.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.fleetpulse.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.fleetpulse.testimonial.author": "Sample Client Lead",
    "portfolio.projects.fleetpulse.testimonial.role": "Director of Operations",
    "portfolio.projects.fleetpulse.seo.title": "FleetPulse Logistics Case Study",
    "portfolio.projects.fleetpulse.seo.description":
      "A sample HDS case study showing fleet dispatch product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.fleetpulse.seo.keywords":
      "fleet dispatch, case study, HDS, software development",
    "portfolio.projects.learnsphere.title": "LearnSphere Academy",
    "portfolio.projects.learnsphere.subtitle":
      "A premium digital learning platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.learnsphere.imageAlt": "LearnSphere Academy interface preview",
    "portfolio.projects.learnsphere.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for digital learning.",
    "portfolio.projects.learnsphere.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.learnsphere.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.learnsphere.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.learnsphere.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.learnsphere.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.learnsphere.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.learnsphere.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.learnsphere.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.learnsphere.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.learnsphere.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.learnsphere.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.learnsphere.testimonial.author": "Sample Client Lead",
    "portfolio.projects.learnsphere.testimonial.role": "Director of Operations",
    "portfolio.projects.learnsphere.seo.title": "LearnSphere Academy Case Study",
    "portfolio.projects.learnsphere.seo.description":
      "A sample HDS case study showing digital learning product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.learnsphere.seo.keywords":
      "digital learning, case study, HDS, software development",
    "portfolio.projects.estateos.title": "EstateOS Platform",
    "portfolio.projects.estateos.subtitle":
      "A premium real estate operations platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.estateos.imageAlt": "EstateOS Platform interface preview",
    "portfolio.projects.estateos.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for real estate operations.",
    "portfolio.projects.estateos.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.estateos.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.estateos.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.estateos.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.estateos.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.estateos.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.estateos.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.estateos.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.estateos.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.estateos.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.estateos.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.estateos.testimonial.author": "Sample Client Lead",
    "portfolio.projects.estateos.testimonial.role": "Director of Operations",
    "portfolio.projects.estateos.seo.title": "EstateOS Platform Case Study",
    "portfolio.projects.estateos.seo.description":
      "A sample HDS case study showing real estate operations product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.estateos.seo.keywords":
      "real estate operations, case study, HDS, software development",
    "portfolio.projects.factorygrid.title": "FactoryGrid Ops",
    "portfolio.projects.factorygrid.subtitle":
      "A premium manufacturing telemetry platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.factorygrid.imageAlt": "FactoryGrid Ops interface preview",
    "portfolio.projects.factorygrid.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for manufacturing telemetry.",
    "portfolio.projects.factorygrid.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.factorygrid.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.factorygrid.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.factorygrid.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.factorygrid.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.factorygrid.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.factorygrid.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.factorygrid.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.factorygrid.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.factorygrid.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.factorygrid.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.factorygrid.testimonial.author": "Sample Client Lead",
    "portfolio.projects.factorygrid.testimonial.role": "Director of Operations",
    "portfolio.projects.factorygrid.seo.title": "FactoryGrid Ops Case Study",
    "portfolio.projects.factorygrid.seo.description":
      "A sample HDS case study showing manufacturing telemetry product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.factorygrid.seo.keywords":
      "manufacturing telemetry, case study, HDS, software development",
    "portfolio.projects.quickbite.title": "QuickBite Delivery",
    "portfolio.projects.quickbite.subtitle":
      "A premium food delivery platform designed to improve visibility, speed, and operational confidence.",
    "portfolio.projects.quickbite.imageAlt": "QuickBite Delivery interface preview",
    "portfolio.projects.quickbite.challenge":
      "The team needed to replace fragmented tools with a clearer operating model for food delivery.",
    "portfolio.projects.quickbite.solution":
      "HDS designed and built a focused platform with clean workflows, measurable signals, and a maintainable technical foundation.",
    "portfolio.projects.quickbite.implementation.discovery":
      "Mapped users, decisions, data flows, risks, and the real operating constraints behind the product.",
    "portfolio.projects.quickbite.implementation.platform":
      "Built the core platform experience, integration layer, and role-aware workflows in focused releases.",
    "portfolio.projects.quickbite.implementation.release":
      "Prepared analytics, documentation, handover, and launch readiness for the client team.",
    "portfolio.projects.quickbite.architecture.realtime":
      "A data model shaped around real operational states instead of static screens.",
    "portfolio.projects.quickbite.architecture.roles":
      "Role-aware access patterns for teams with different responsibilities.",
    "portfolio.projects.quickbite.architecture.audit":
      "Traceable workflow events that made decisions easier to review and improve.",
    "portfolio.projects.quickbite.results.visibility":
      "Leadership gained clearer visibility into performance and bottlenecks.",
    "portfolio.projects.quickbite.results.response":
      "Teams reduced manual coordination and responded faster to operational changes.",
    "portfolio.projects.quickbite.results.reporting":
      "Reporting became easier to trust because it came from the product workflow itself.",
    "portfolio.projects.quickbite.testimonial.quote":
      "HDS turned a complicated operating problem into a product our team could understand, use, and improve.",
    "portfolio.projects.quickbite.testimonial.author": "Sample Client Lead",
    "portfolio.projects.quickbite.testimonial.role": "Director of Operations",
    "portfolio.projects.quickbite.seo.title": "QuickBite Delivery Case Study",
    "portfolio.projects.quickbite.seo.description":
      "A sample HDS case study showing food delivery product strategy, engineering, architecture, and measurable business impact.",
    "portfolio.projects.quickbite.seo.keywords":
      "food delivery, case study, HDS, software development",
    "seo.about.description":
      "ØªØ¹Ø±Ù Ø¹Ù„Ù‰ ÙƒÙŠÙÙŠØ© Ø¨Ù†Ø§Ø¡ HDS Ù„Ù…Ù†ØµØ§Øª Ø¨Ø±Ù…Ø¬ÙŠØ© Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆØ£Ù†Ø¸Ù…Ø© Ø³Ø­Ø§Ø¨ÙŠØ© ÙˆØªØ¯ÙÙ‚Ø§Øª Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØªØ¬Ø§Ø±Ø¨ Ù…Ù†ØªØ¬Ø§Øª Ù„Ù„ÙØ±Ù‚ Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ø¬Ø§Ø¯Ø©.",
    "seo.about.keywords":
      "Ø¹Ù† HDS, Ø´Ø±ÙƒØ© Ø¨Ø±Ù…Ø¬ÙŠØ§Øª, ÙØ±ÙŠÙ‚ Ù…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ©, Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ù…Ø¤Ø³Ø³ÙŠØ©, Ø³Ø­Ø§Ø¨Ø©, Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ, Ù‡Ù†Ø¯Ø³Ø© Ù…Ù†ØªØ¬Ø§Øª",
    "seo.about.title": "Ø¹Ù† HDS",
    "about.breadcrumb.about": "Ø¹Ù† Ø§Ù„Ø´Ø±ÙƒØ©",
    "about.breadcrumb.home": "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    "about.breadcrumb.label": "Ù…Ø³Ø§Ø± Ø§Ù„ØªÙ†Ù‚Ù„",
    "about.hero.badge": "Ø¹Ù† HDS",
    "about.hero.title":
      "Ø´Ø±ÙƒØ© Ù…Ù†ØªØ¬Ø§Øª ÙˆÙ‡Ù†Ø¯Ø³Ø© Ù„Ù„Ù…Ù†Ø¸Ù…Ø§Øª Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬ ØªÙ‚Ù†ÙŠØ© ØªØªØ­Ù…Ù„ Ø¶ØºØ· Ø§Ù„ÙˆØ§Ù‚Ø¹.",
    "about.hero.subtitle":
      "ØªØ³Ø§Ø¹Ø¯ HDS Ø§Ù„ÙØ±Ù‚ Ø§Ù„Ø·Ù…ÙˆØ­Ø© Ø¹Ù„Ù‰ ØªØµÙ…ÙŠÙ… ÙˆØ¨Ù†Ø§Ø¡ ÙˆØ¥Ø·Ù„Ø§Ù‚ ÙˆØªØ·ÙˆÙŠØ± Ù…Ù†ØµØ§Øª Ø±Ù‚Ù…ÙŠØ© Ù…ÙˆØ«ÙˆÙ‚Ø© Ø¨ÙˆØ¶ÙˆØ­ Ù‚ÙŠØ§Ø¯ÙŠ ÙˆØªÙ†ÙÙŠØ° Ù…Ù†Ø¶Ø¨Ø· ÙˆÙ…Ù„ÙƒÙŠØ© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰.",
    "about.hero.primary": "ØªØ­Ø¯Ø« Ù…Ø¹ HDS",
    "about.hero.secondary": "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "about.hero.imageAlt":
      "Ù„ÙˆØ­Ø§Øª Ø¨Ø±Ù…Ø¬ÙŠØ© Ø§Ø­ØªØ±Ø§ÙÙŠØ© ØªÙ…Ø«Ù„ Ø¹Ù…Ù„ HDS ÙÙŠ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø©",
    "about.story.eyebrow": "Ù‚ØµØ© Ø§Ù„Ø´Ø±ÙƒØ©",
    "about.story.title":
      "Ø¨ÙÙ†ÙŠÙ†Ø§ Ù„Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ØµØ¹Ø¨Ø© Ø¨ÙŠÙ† Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© ÙˆØ§Ù„Ø¥Ø·Ù„Ø§Ù‚ Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ.",
    "about.story.description":
      "ØªÙØ´Ù„ ÙƒØ«ÙŠØ± Ù…Ù† Ø§Ù„Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙÙŠ Ø§Ù„Ù…Ø³Ø§ÙØ© Ø¨ÙŠÙ† ÙÙƒØ±Ø© ÙˆØ§Ø¹Ø¯Ø© ÙˆÙ†Ø¸Ø§Ù… ÙŠÙ…ÙƒÙ† Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¹Ù„ÙŠÙ‡. ØµÙÙ…Ù…Øª HDS Ù„ØªÙ‚Ù„ÙŠÙ„ Ù‡Ø°Ù‡ Ø§Ù„Ù…Ø³Ø§ÙØ©.",
    "about.story.paragraph.one":
      "Ù†Ø¹Ù…Ù„ Ù…Ø¹ ÙØ±Ù‚ Ù„Ø§ ØªØ³ØªØ·ÙŠØ¹ ØªØ­Ù…Ù„ ØªØ³Ù„ÙŠÙ… ØºØ§Ù…Ø¶ Ø£Ùˆ Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‡Ø´Ø© Ø£Ùˆ ÙˆØ§Ø¬Ù‡Ø§Øª ØªØ¨Ø¯Ùˆ Ù…ÙƒØªÙ…Ù„Ø© Ø¨ÙŠÙ†Ù…Ø§ Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„ØªØ´ØºÙŠÙ„ ØªØ­ØªÙ‡Ø§ ØºÙŠØ± ÙˆØ§Ø¶Ø­.",
    "about.story.paragraph.two":
      "ÙŠØ¬Ù…Ø¹ Ø£Ø³Ù„ÙˆØ¨Ù†Ø§ Ø¨ÙŠÙ† Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù…Ù†ØªØ¬ØŒ ÙˆØ­ÙƒÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ØŒ ÙˆÙ‡Ù†Ø¯Ø³Ø© Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§ØªØŒ ÙˆØ¬Ø§Ù‡Ø²ÙŠØ© Ø§Ù„Ø³Ø­Ø§Ø¨Ø©ØŒ ÙˆØ§Ù„ÙˆØ¹ÙŠ Ø§Ù„Ø£Ù…Ù†ÙŠØŒ ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ø¹Ù…Ù„ÙŠ ÙÙŠ Ù†Ù…ÙˆØ°Ø¬ ØªØ³Ù„ÙŠÙ… ÙˆØ§Ø­Ø¯ Ù…Ø³Ø¤ÙˆÙ„.",
    "about.story.paragraph.three":
      "Ø§Ù„Ù†ØªÙŠØ¬Ø© Ù„ÙŠØ³Øª ÙƒÙˆØ¯Ù‹Ø§ ÙÙ‚Ø·ØŒ Ø¨Ù„ Ø³ÙŠØ± Ø¹Ù…Ù„ Ø£ÙˆØ¶Ø­ØŒ ÙˆØ£Ø³Ø§Ø³Ù‹Ø§ ØªÙ‚Ù†ÙŠÙ‹Ø§ Ø£Ù‚ÙˆÙ‰ØŒ ÙˆÙ…Ù†ØªØ¬Ù‹Ø§ ÙŠØ³ØªØ·ÙŠØ¹ ÙØ±ÙŠÙ‚Ùƒ ØªØ·ÙˆÙŠØ±Ù‡ Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "about.story.proof.architecture.label": "Ù…ÙˆÙ‚Ù Ù…Ø¹Ù…Ø§Ø±ÙŠ",
    "about.story.proof.architecture.value": "Ù…ØµÙ…Ù… Ù„Ù„ØªÙˆØ³Ø¹",
    "about.story.proof.delivery.label": "Ø¥ÙŠÙ‚Ø§Ø¹ Ø§Ù„ØªØ³Ù„ÙŠÙ…",
    "about.story.proof.delivery.value": "Ù…Ø±Ø¦ÙŠ ÙƒÙ„ Ø£Ø³Ø¨ÙˆØ¹",
    "about.story.proof.partnership.label": "Ø¹Ù„Ø§Ù‚Ø© Ø§Ù„Ø¹Ù…ÙŠÙ„",
    "about.story.proof.partnership.value": "Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰ Ø¨Ø·Ø¨ÙŠØ¹ØªÙ‡Ø§",
    "about.mission.eyebrow": "Ø§Ù„Ù…Ù‡Ù…Ø© ÙˆØ§Ù„Ø±Ø¤ÙŠØ©",
    "about.mission.title": "Ù†Ø¬Ø¹Ù„ Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ø±Ù‚Ù…ÙŠ Ø§Ù„Ù…Ø¹Ù‚Ø¯ Ø£Ø³Ù‡Ù„ ÙÙŠ Ø§Ù„Ø«Ù‚Ø©.",
    "about.mission.description":
      "Ù…Ù‡Ù…ØªÙ†Ø§ ÙˆØ±Ø¤ÙŠØªÙ†Ø§ Ø¹Ù…Ù„ÙŠØªØ§Ù† Ø¨ÙˆØ¶ÙˆØ­: Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„ÙØ±Ù‚ Ø¹Ù„Ù‰ Ø§ØªØ®Ø§Ø° Ù‚Ø±Ø§Ø±Ø§Øª ØªÙ‚Ù†ÙŠØ© Ø£ÙØ¶Ù„ØŒ Ø«Ù… ØªØ­ÙˆÙŠÙ„ Ù‡Ø°Ù‡ Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ø¥Ù„Ù‰ Ø£Ù†Ø¸Ù…Ø© ØªØ¯ÙˆÙ….",
    "about.mission.card.title": "Ø§Ù„Ù…Ù‡Ù…Ø©",
    "about.vision.card.title": "Ø§Ù„Ø±Ø¤ÙŠØ©",
    "about.values.eyebrow": "Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©",
    "about.values.title": "Ø§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„ØªÙŠ ØªÙ‚Ù Ø®Ù„Ù Ø§Ù„Ø¹Ù…Ù„.",
    "about.values.description":
      "ØªØ¸Ù‡Ø± Ù‡Ø°Ù‡ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ Ù…Ø±Ø§Ø¬Ø¹Ø§Øª Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ©ØŒ ÙˆÙ‚Ø±Ø§Ø±Ø§Øª Ø§Ù„ÙˆØ§Ø¬Ù‡Ø©ØŒ ÙˆØªÙˆØ§ØµÙ„ Ø§Ù„ØªØ³Ù„ÙŠÙ…ØŒ ÙˆØ·Ø±ÙŠÙ‚Ø© Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ù…ÙØ§Ø¶Ù„Ø§Øª.",
    "about.why.eyebrow": "Ù„Ù…Ø§Ø°Ø§ HDS",
    "about.why.title": "Ø·Ø±ÙŠÙ‚Ø© Ø£Ù‡Ø¯Ø£ Ù„Ø¨Ù†Ø§Ø¡ Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ø¬Ø§Ø¯Ø©.",
    "about.why.description":
      "ØµÙÙ…Ù…Øª HDS Ù„Ù„Ù‚Ø§Ø¯Ø© Ø§Ù„Ø°ÙŠÙ† ÙŠØ­ØªØ§Ø¬ÙˆÙ† Ø«Ù‚Ø© ÙÙŠ Ø§Ù„Ø®Ø·Ø© ÙˆØ§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„ÙƒÙˆØ¯ ÙˆØ§Ù„Ù…Ø³Ø§Ø± Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "about.why.clarity.title": "Ù‚Ø±Ø§Ø±Ø§Øª ÙˆØ§Ø¶Ø­Ø©",
    "about.why.clarity.description":
      "ÙŠØ¨Ù‚Ù‰ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ù…Ø®Ø§Ø·Ø± ÙˆØ§Ù„Ø§ÙØªØ±Ø§Ø¶Ø§Øª ÙˆØ§Ù„Ù…ÙØ§Ø¶Ù„Ø§Øª Ù…Ø±Ø¦ÙŠØ© Ø¨Ø¯Ù„ Ø£Ù† ØªØªØ­ÙˆÙ„ Ø¥Ù„Ù‰ Ø¯ÙŠÙ† Ù…Ø®ÙÙŠ ÙÙŠ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹.",
    "about.why.architecture.title": "Ø£Ù†Ø¸Ù…Ø© Ù…ØªÙŠÙ†Ø©",
    "about.why.architecture.description":
      "ØªÙØ®Ø·Ø· Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© ÙˆØ§Ù„Ø®Ù„ÙÙŠØ© ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„ØªÙƒØ§Ù…Ù„Ø§Øª Ø­ÙˆÙ„ Ù‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØµÙŠØ§Ù†Ø© Ù…Ù† Ø§Ù„ÙŠÙˆÙ… Ø§Ù„Ø£ÙˆÙ„.",
    "about.why.security.title": "ØªØ³Ù„ÙŠÙ… Ù…Ø³Ø¤ÙˆÙ„",
    "about.why.security.description":
      "Ù†ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„ØªØ­Ù‚Ù‚ ÙˆØ§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª ÙˆØ§Ù„Ø¨ÙŠØ¦Ø§Øª ÙˆÙ…Ø®Ø§Ø·Ø± Ø§Ù„ØªØ´ØºÙŠÙ„ ÙƒÙ…ØªØ·Ù„Ø¨Ø§Øª Ù…Ù†ØªØ¬ØŒ Ù„Ø§ ÙƒØ£ÙÙƒØ§Ø± Ù„Ø§Ø­Ù‚Ø©.",
    "about.why.ai.title": "Ø­ÙƒÙ… Ø¹Ù…Ù„ÙŠ ÙÙŠ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
    "about.why.ai.description":
      "Ù†Ø¯Ø®Ù„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ­Ø³Ù† Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ Ø£Ùˆ Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ø£Ùˆ Ø§Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø£Ùˆ Ø§Ù„Ø£ØªÙ…ØªØ© Ø¯ÙˆÙ† ØªØ¹Ù‚ÙŠØ¯ Ù…Ù„ÙƒÙŠØ© Ø§Ù„Ù†Ø¸Ø§Ù….",
    "about.process.eyebrow": "Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„ØªØ´ØºÙŠÙ„",
    "about.process.title": "Ø¹Ù…Ù„ÙŠØ© ØªØ³Ù„ÙŠÙ… ØªØ¬Ù…Ø¹ Ø§Ù„Ø²Ø®Ù… ÙˆØ§Ù„Ø­ÙƒÙ… Ø§Ù„Ø¬ÙŠØ¯.",
    "about.process.description":
      "Ø§Ù„Ø¹Ù…Ù„ÙŠØ© Ù…Ù†Ø¸Ù…Ø© Ø¨Ù…Ø§ ÙŠÙƒÙÙŠ Ù„Ù„ÙˆØ¶ÙˆØ­ Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ ÙˆÙ…Ø±Ù†Ø© Ø¨Ù…Ø§ ÙŠÙƒÙÙŠ Ù„Ù„ØªØ¹Ù„Ù… Ø§Ù„Ù…Ù†ØªØ¬.",
    "about.process.align.title": "Ø§Ù„Ù…ÙˆØ§Ø¡Ù…Ø©",
    "about.process.align.description":
      "ØªÙˆØ¶ÙŠØ­ Ø§Ù„Ù†ØªØ§Ø¦Ø¬ ÙˆØ§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØ§Ù„Ù‚ÙŠÙˆØ¯ ÙˆØ§Ù„ØªÙƒØ§Ù…Ù„Ø§Øª ÙˆØ§Ù„Ù…Ø®Ø§Ø·Ø± ÙˆØ§Ù„Ø³Ø¨Ø¨ Ø§Ù„ØªØ¬Ø§Ø±ÙŠ Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ Ø®Ù„Ù Ø§Ù„Ø¹Ù…Ù„.",
    "about.process.design.title": "Ø§Ù„ØªØ´ÙƒÙŠÙ„",
    "about.process.design.description":
      "ØªØ­ÙˆÙŠÙ„ Ø§Ù„ØºÙ…ÙˆØ¶ Ø¥Ù„Ù‰ Ø±Ø­Ù„Ø§Øª ÙˆØ­Ø§Ù„Ø§Øª ÙˆØ§Ø¬Ù‡Ø© ÙˆØ­Ø¯ÙˆØ¯ Ù†Ø¸Ø§Ù… ÙˆÙ…Ø±Ø§Ø­Ù„ ÙˆØ®Ø§Ø±Ø·Ø© ØªØ³Ù„ÙŠÙ….",
    "about.process.ship.title": "Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚ Ø§Ù„Ù…Ø±Ø­Ù„ÙŠ",
    "about.process.ship.description":
      "Ø§Ù„Ø¨Ù†Ø§Ø¡ ÙÙŠ Ø®Ø·ÙˆØ§Øª Ù…Ø±ÙƒØ²Ø© Ù…Ø¹ Ù…Ø±Ø§Ø¬Ø¹Ø§Øª ÙˆØ§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆØªÙˆØ«ÙŠÙ‚ ÙˆØªÙ‚Ø¯Ù… Ù…Ø±Ø¦ÙŠ.",
    "about.process.improve.title": "Ø§Ù„ØªØ­Ø³ÙŠÙ†",
    "about.process.improve.description":
      "Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª ÙˆØ§Ù„ØªØºØ°ÙŠØ© Ø§Ù„Ø±Ø§Ø¬Ø¹Ø© ÙˆØ¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ÙŠØ© ÙˆØªØ¹Ù„Ù… Ø§Ù„ÙØ±ÙŠÙ‚ Ù„Ø¬Ø¹Ù„ Ø§Ù„Ù…Ù†ØµØ© Ø£ÙØ¶Ù„ Ø¨Ø§Ø³ØªÙ…Ø±Ø§Ø±.",
    "about.timeline.eyebrow": "Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ø²Ù…Ù†ÙŠ",
    "about.timeline.title": "Ø´Ø±ÙƒØ© Ø´ÙƒÙ„Ù‡Ø§ Ø§Ù†Ø¶Ø¨Ø§Ø· Ø§Ù„ØªØ³Ù„ÙŠÙ….",
    "about.timeline.description":
      "ØªØ§Ø±ÙŠØ®Ù†Ø§ Ù…Ø±ÙƒØ² Ø¹Ù…Ø¯Ù‹Ø§: ØªØ³Ù„ÙŠÙ… Ø£ÙØ¶Ù„ØŒ Ù‚Ø¯Ø±Ø© Ø£ÙˆØ³Ø¹ØŒ ÙˆØ£Ø³Ø³ Ø£Ù‚ÙˆÙ‰.",
    "about.technologies.eyebrow": "Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª",
    "about.technologies.title":
      "Ø£Ø¯ÙˆØ§Øª Ø­Ø¯ÙŠØ«Ø© Ù…Ø®ØªØ§Ø±Ø© Ù„Ù„Ù…Ù„ÙƒÙŠØ© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰.",
    "about.technologies.description":
      "Ù†ÙØ¶Ù„ Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ù…Ø«Ø¨ØªØ© ÙˆØ§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØµÙŠØ§Ù†Ø© Ø§Ù„ØªÙŠ ØªØ³Ø§Ø¹Ø¯ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„ØªØ·ÙˆØ± Ø¯ÙˆÙ† Ø§Ù„Ø­Ø§Ø¬Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø¨Ù†Ø§Ø¡ ÙƒÙ„ Ø¹Ø§Ù….",
    "about.industries.eyebrow": "Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„ØªÙŠ Ù†Ø®Ø¯Ù…Ù‡Ø§",
    "about.industries.title": "Ù…ØµÙ…Ù… Ù„ÙØ±Ù‚ Ù„Ø¯ÙŠÙ‡Ø§ ØªØ¹Ù‚ÙŠØ¯ ØªØ´ØºÙŠÙ„ÙŠ Ø­Ù‚ÙŠÙ‚ÙŠ.",
    "about.industries.description":
      "ÙŠØªÙƒÙŠÙ Ù†ÙØ³ Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø¹Ø¨Ø± Ù…Ø¬Ø§Ù„Ø§Øª ØªÙƒÙˆÙ† ÙÙŠÙ‡Ø§ Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ÙŠØ© ÙˆØ§Ù„ØªØ¨Ù†ÙŠ ÙˆØ§Ù„ÙˆØ¶ÙˆØ­ Ù…Ù‡Ù…Ø©.",
    "about.industries.saas.title": "Ø´Ø±ÙƒØ§Øª SaaS ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø§Øª",
    "about.industries.saas.description":
      "Ù…Ù†ØµØ§Øª ØªØ­ØªØ§Ø¬ ØªØ¬Ø±Ø¨Ø© ÙˆØ§Ø¶Ø­Ø© ÙˆÙ…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆØªØ­Ù„ÙŠÙ„Ø§Øª ÙˆØªÙƒØ±Ø§Ø±Ù‹Ø§ Ø³Ø±ÙŠØ¹Ù‹Ø§.",
    "about.industries.operations.title": "ÙØ±Ù‚ ØªØ´ØºÙŠÙ„ ÙƒØ«ÙŠÙØ©",
    "about.industries.operations.description":
      "Ø£Ù†Ø¸Ù…Ø© ØªØ±Ø¨Ø· Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ø§Øª ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„ÙØ±Ù‚ Ø§Ù„Ù…ÙŠØ¯Ø§Ù†ÙŠØ© ÙˆØ§Ù„Ù…Ø®Ø²ÙˆÙ† ÙˆØ§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ±.",
    "about.industries.commerce.title": "Ø§Ù„ØªØ¬Ø§Ø±Ø© ÙˆØ§Ù„Ø£Ø³ÙˆØ§Ù‚ Ø§Ù„Ø±Ù‚Ù…ÙŠØ©",
    "about.industries.commerce.description":
      "Ø±Ø­Ù„Ø§Øª Ø¹Ù…Ù„Ø§Ø¡ ÙˆÙƒØªØ§Ù„ÙˆØ¬Ø§Øª ÙˆØ³ÙŠØ± Ø¹Ù…Ù„ ÙˆØªÙƒØ§Ù…Ù„Ø§Øª ÙˆØªØ¬Ø§Ø±Ø¨ Ø­Ø³Ø§Ø³Ø© Ù„Ù„Ø£Ø¯Ø§Ø¡.",
    "about.industries.regulated.title": "Ø³ÙŠØ± Ø¹Ù…Ù„ Ù…Ù†Ø¸Ù…",
    "about.industries.regulated.description":
      "Ù…Ù†ØªØ¬Ø§Øª ØªØ­ØªØ§Ø¬ Ø¹Ù†Ø§ÙŠØ© Ø¥Ø¶Ø§ÙÙŠØ© Ø¨Ø§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª ÙˆØ§Ù„ØªØ¯Ù‚ÙŠÙ‚ ÙˆØ§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ÙŠØ© ÙˆØ§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª.",
    "about.statistics.eyebrow": "Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ø­Ø¬Ù…",
    "about.statistics.title": "Ù†Ù…ÙˆØ°Ø¬ ÙØ±ÙŠÙ‚ ØµØºÙŠØ± Ø¨Ø§Ù†Ø¶Ø¨Ø§Ø· Ù…Ø¤Ø³Ø³ÙŠ.",
    "about.statistics.description":
      "Ø§Ù„Ø£Ø±Ù‚Ø§Ù… Ù„ÙŠØ³Øª Ù„Ù„Ø²ÙŠÙ†Ø©Ø› Ø¥Ù†Ù‡Ø§ ØªÙˆØ¶Ø­ Ù†Ø·Ø§Ù‚ Ø§Ù„ØªØ´ØºÙŠÙ„ Ø§Ù„Ø°ÙŠ ØµÙÙ…Ù…Øª HDS Ù„Ø¯Ø¹Ù…Ù‡.",
    "about.team.eyebrow": "Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„ÙØ±ÙŠÙ‚",
    "about.team.title": "Ù…ØªØ®ØµØµÙˆÙ† ÙƒØ¨Ø§Ø± Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ ØªØ³Ù„ÙŠÙ… ÙˆØ§Ø­Ø¯ Ù…Ø³Ø¤ÙˆÙ„.",
    "about.team.description": "Ù†Ø¸Ø±Ø© Ø¹Ù„Ù‰ Ø§Ù„ÙØ±ÙŠÙ‚",
    "about.team.body":
      "ØªØ¬Ù…Ø¹ HDS Ø¨ÙŠÙ† Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… ÙÙŠ ÙØ±ÙŠÙ‚ Ù…Ø±ÙƒØ². ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒØ¨Ø± Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø­Ø³Ø¨ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ØŒ Ù„ÙƒÙ† ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø¹Ù…ÙŠÙ„ ØªØ¨Ù‚Ù‰ Ø¨Ø³ÙŠØ·Ø©: Ù…Ù„ÙƒÙŠØ© ÙˆØ§Ø¶Ø­Ø©ØŒ ØªÙˆØ§ØµÙ„ Ù…Ø¨Ø§Ø´Ø±ØŒ ÙˆØªÙ‚Ø¯Ù… Ù…Ø±Ø¦ÙŠ.",
    "about.certifications.eyebrow": "Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ø¬ÙˆØ¯Ø©",
    "about.certifications.title": "Ù…Ù…Ø§Ø±Ø³Ø§Øª ØªØ¯Ø¹Ù… Ø§Ù„Ø«Ù‚Ø©.",
    "about.certifications.description":
      "Ù†ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯Ø§Øª ÙˆÙ…Ù…Ø§Ø±Ø³Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ ÙƒØ¯Ù„ÙŠÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ø§Ù†Ø¶Ø¨Ø§Ø·ØŒ Ù„Ø§ ÙƒØ²ÙŠÙ†Ø©.",
    "about.cta.title":
      "ØªØ¨Ø­Ø« Ø¹Ù† Ø´Ø±ÙŠÙƒ ØªÙ‚Ù†ÙŠ ÙŠØ³ØªØ·ÙŠØ¹ Ø§Ù„ØªÙÙƒÙŠØ± ÙˆØ§Ù„ØªÙ†ÙÙŠØ°ØŸ",
    "about.cta.description":
      "Ø´Ø§Ø±ÙƒÙ†Ø§ Ø§Ù„Ù…Ù†ØªØ¬ Ø£Ùˆ Ø§Ù„Ù…Ù†ØµØ© Ø£Ùˆ Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ø°ÙŠ ØªØ±ÙŠØ¯ ØªØ­Ø³ÙŠÙ†Ù‡. Ø³ØªØ³Ø§Ø¹Ø¯Ùƒ HDS ÙÙŠ ØªØ­ÙˆÙŠÙ„Ù‡ Ø¥Ù„Ù‰ Ù…Ø³Ø§Ø± ØªØ³Ù„ÙŠÙ… ÙˆØ§Ø¶Ø­.",
    "about.cta.primary": "Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø­ÙˆØ§Ø±",
    "about.cta.secondary": "Ø´Ø§Ù‡Ø¯ Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "seo.notFound.description": "ØµÙØ­Ø© HDS Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©.",
    "seo.notFound.keywords": "HDS, ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯",
    "seo.notFound.title": "Ø§Ù„ØµÙØ­Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©",

    "home.hero.eyebrow": "ØªØ­ÙˆÙ„ Ø±Ù‚Ù…ÙŠ Ù„Ù„ÙØ±Ù‚ Ø§Ù„Ø¬Ø§Ø¯Ø©",
    "home.hero.title":
      "Ù…Ù†ØµØ§Øª Ø¨Ø±Ù…Ø¬ÙŠØ© Ù…ØµÙ…Ù…Ø© Ù„Ù„Ù†Ù…Ùˆ ÙˆØ§Ù„ÙˆØ¶ÙˆØ­ ÙˆØ§Ù„Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ù†Ø·Ø§Ù‚ ÙˆØ§Ø³Ø¹.",
    "home.hero.description":
      "ØªØµÙ…Ù… HDS ÙˆØªØ¨Ù†ÙŠ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ø§Ù„Ù…Ø®ØµØµØ© ÙˆÙ…Ù†ØªØ¬Ø§Øª SaaS ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª ÙˆØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ ÙˆØ§Ù„Ù…Ù†ØµØ§Øª Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© ÙˆØ­Ù„ÙˆÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù„Ù„Ù…Ø¤Ø³Ø³Ø§Øª Ø§Ù„ØªÙŠ ØªØ±ÙŠØ¯ ØªØ­ÙˆÙŠÙ„ Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø¥Ù„Ù‰ Ù…ÙŠØ²Ø© Ø­Ù‚ÙŠÙ‚ÙŠØ©.",
    "home.hero.primaryCta": "Ø§Ø¨Ø¯Ø£ Ù…Ø´Ø±ÙˆØ¹Ùƒ",
    "home.hero.secondaryCta": "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "home.hero.imageAlt":
      "ÙˆØ§Ø¬Ù‡Ø§Øª Ø£Ù†Ø¸Ù…Ø© Ù…Ø¤Ø³Ø³ÙŠØ© ÙˆØ³Ø­Ø§Ø¨ÙŠØ© ÙˆÙ„ÙˆØ­Ø§Øª ØªØ­ÙƒÙ… Ø¨Ø±Ù…Ø¬ÙŠØ© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø·Ø¨Ù‚Ø§Øª",

    "home.clients.eyebrow": "Ù†Ù…ÙˆØ°Ø¬ ØªØ³Ù„ÙŠÙ… Ù…ÙˆØ«ÙˆÙ‚",
    "home.clients.title":
      "Ù…ØµÙ…Ù… Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù†Ø§Ø´Ø¦Ø© ÙˆØ§Ù„Ù…Ø¤Ø³Ø³Ø§Øª ÙˆØ§Ù„Ø¬Ù‡Ø§Øª Ø§Ù„Ø­ÙƒÙˆÙ…ÙŠØ© ÙˆØ§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø§Ù„Ø¯ÙˆÙ„ÙŠÙŠÙ†.",
    "home.clients.description":
      "ÙŠØªÙƒÙŠÙ Ø£Ø³Ù„ÙˆØ¨ Ø¹Ù…Ù„Ù†Ø§ Ù…Ø¹ Ø¨ÙŠØ¦Ø§Øª ØªØ´ØºÙŠÙ„ Ù…Ø®ØªÙ„ÙØ© Ù…Ø¹ Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ù†ÙØ³ Ø§Ù„Ø§Ù†Ø¶Ø¨Ø§Ø· Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ Ø§Ù„Ù…ØªÙ‚Ø¯Ù….",

    "home.services.eyebrow": "Ù„Ù…Ø­Ø© Ø¹Ù† Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "home.services.title":
      "ÙØ±ÙŠÙ‚ ÙˆØ§Ø­Ø¯ Ù…Ø³Ø¤ÙˆÙ„ Ø¹Ù† Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.",
    "home.services.description":
      "ÙƒÙ„ Ù…Ø´Ø±ÙˆØ¹ ÙŠØªÙ… ØªØ´ÙƒÙŠÙ„Ù‡ Ø­ÙˆÙ„ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©: Ø¥Ø·Ù„Ø§Ù‚ Ø£Ø³Ø±Ø¹ Ø£Ùˆ ØªØ­Ø¯ÙŠØ« Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø£Ùˆ ØªØ­Ø³ÙŠÙ† ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø£Ùˆ ÙØªØ­ Ù…ØµØ§Ø¯Ø± Ø¯Ø®Ù„ Ø¬Ø¯ÙŠØ¯Ø©.",
    "home.services.customSoftware.title": "Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ù…Ø®ØµØµØ©",
    "home.services.customSoftware.description":
      "Ù…Ù†ØµØ§Øª Ù…ØµÙ…Ù…Ø© Ø­ÙˆÙ„ Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ ÙˆÙ†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„ØªÙƒØ§Ù…Ù„Ø§Øª ÙˆØ®Ø§Ø±Ø·Ø© Ø§Ù„Ù…Ù†ØªØ¬ Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰.",
    "home.services.webApps.title": "ØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆÙŠØ¨",
    "home.services.webApps.description":
      "ØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆÙŠØ¨ Ø¢Ù…Ù†Ø© ÙˆÙ…ØªØ¬Ø§ÙˆØ¨Ø© ÙˆØ³Ù‡Ù„Ø© Ø§Ù„ÙˆØµÙˆÙ„ Ø¨ÙˆØ§Ø¬Ù‡Ø§Øª Ù…ØµÙ‚ÙˆÙ„Ø© ÙˆÙ…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØµÙŠØ§Ù†Ø©.",
    "home.services.mobileApps.title": "ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø¬ÙˆØ§Ù„",
    "home.services.mobileApps.description":
      "ØªØ¬Ø§Ø±Ø¨ Ø¬ÙˆØ§Ù„ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø¥Ø·Ù„Ø§Ù‚ ÙˆÙ…ØªØµÙ„Ø© Ø¨ÙˆØ§Ø¬Ù‡Ø§Øª API Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆØªØ­Ù„ÙŠÙ„Ø§Øª ÙˆØ¨Ù†ÙŠØ© Ø³Ø­Ø§Ø¨ÙŠØ©.",
    "home.services.enterprise.title": "Ø£Ù†Ø¸Ù…Ø© ERP ÙˆCRM",
    "home.services.enterprise.description":
      "Ø£Ù†Ø¸Ù…Ø© ØªØ´ØºÙŠÙ„ÙŠØ© ØªØ±Ø¨Ø· Ø§Ù„ÙØ±Ù‚ ÙˆØªØ¤ØªÙ…Øª Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ø§Øª ÙˆØªØ­ÙˆÙ„ Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ù…ØªÙ†Ø§Ø«Ø± Ø¥Ù„Ù‰ Ø¹Ù…Ù„ÙŠØ§Øª ÙˆØ§Ø¶Ø­Ø©.",
    "home.services.cloud.title": "Ø§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆDevOps",
    "home.services.cloud.description":
      "Ø¨Ù†ÙŠØ© Ø³Ø­Ø§Ø¨ÙŠØ© Ø£ØµÙ„ÙŠØ© ÙˆCI/CD ÙˆÙ…Ø±Ø§Ù‚Ø¨Ø© ÙˆÙ…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙˆØªØ´ØºÙŠÙ„ ÙˆØ§Ø¹ Ø¨Ø§Ù„ØªÙƒÙ„ÙØ©.",
    "home.services.ai.title": "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
    "home.services.ai.description":
      "Ù…Ø³Ø§Ø¹Ø¯ÙˆÙ† Ø°ÙƒÙŠÙˆÙ† Ø¹Ù…Ù„ÙŠÙ‘ÙˆÙ† ÙˆÙ…Ø³Ø§Ø±Ø§Øª Ø£ØªÙ…ØªØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ù…Ø¹Ø±ÙØ© ÙˆØ³ÙŠØ± Ø¹Ù…Ù„ Ù„Ø¯Ø¹Ù… Ø§Ù„Ù‚Ø±Ø§Ø±.",

    "home.technologies.eyebrow": "Ø£Ø³Ø§Ø³ ØªÙ‚Ù†ÙŠ",
    "home.technologies.title":
      "Ø£Ø¯ÙˆØ§Øª Ø­Ø¯ÙŠØ«Ø© Ù…Ø®ØªØ§Ø±Ø© Ù„Ù„Ø£Ø¯Ø§Ø¡ ÙˆØ§Ù„Ø£Ù…Ø§Ù† ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØµÙŠØ§Ù†Ø©.",
    "home.technologies.description":
      "Ù†Ø®ØªØ§Ø± ØªÙ‚Ù†ÙŠØ§Øª Ù…Ø«Ø¨ØªØ© ØªØ³Ø§Ø¹Ø¯ Ø§Ù„ÙØ±Ù‚ Ø¹Ù„Ù‰ Ø§Ù„ØªØ­Ø±Ùƒ Ø¨Ø³Ø±Ø¹Ø© Ø¯ÙˆÙ† Ø¨Ù†Ø§Ø¡ Ø£Ù†Ø¸Ù…Ø© Ù‡Ø´Ø©.",

    "home.why.eyebrow": "Ù„Ù…Ø§Ø°Ø§ HDS",
    "home.why.title": "ØªÙ†ÙÙŠØ° Ù…ØªÙ‚Ø¯Ù… Ø¨Ø¯ÙˆÙ† Ø¶ÙˆØ¶Ø§Ø¡.",
    "home.why.description":
      "Ù†Ø¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ù†Ø¶Ø¨Ø·Ø© ÙˆØ§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„ÙˆØ§Ø¶Ø­ Ø­ØªÙ‰ ÙŠØ¹Ø±Ù Ø§Ù„Ø¹Ù…ÙŠÙ„ Ø¯Ø§Ø¦Ù…Ù‹Ø§ Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØªÙ… Ø¨Ù†Ø§Ø¤Ù‡ ÙˆÙ„Ù…Ø§Ø°Ø§.",
    "home.why.business.title": "Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ØªØ¨Ø¯Ø£ Ù…Ù† Ø§Ù„Ø£Ø¹Ù…Ø§Ù„",
    "home.why.business.description":
      "ØªÙØ±Ø¨Ø· Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø¨Ù†ØªØ§Ø¦Ø¬ Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù‚ÙŠØ§Ø³ ÙˆÙˆØ§Ù‚Ø¹ Ø§Ù„ØªØ´ØºÙŠÙ„ ÙˆÙ‚ÙŠÙˆØ¯ Ø§Ù„Ù†Ù…Ùˆ.",
    "home.why.security.title": "Ø§Ù„Ø£Ù…Ø§Ù† Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©",
    "home.why.security.description":
      "ÙŠØªÙ… ØªØµÙ…ÙŠÙ… Ø§Ù„ÙˆØµÙˆÙ„ ÙˆØªØ¯ÙÙ‚ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„ØªØ­Ù‚Ù‚ ÙˆØ§Ù„Ù†Ø´Ø± Ù…Ø¹ Ù…Ø±Ø§Ø¹Ø§Ø© Ø§Ù„Ù…Ø®Ø§Ø·Ø± ÙˆØ§Ù„Ø§Ù…ØªØ«Ø§Ù„.",
    "home.why.delivery.title": "ØªØ³Ù„ÙŠÙ… Ø´ÙØ§Ù",
    "home.why.delivery.description":
      "ØªØ¨Ù‚Ù‰ Ø®Ø§Ø±Ø·Ø© Ø§Ù„Ø·Ø±ÙŠÙ‚ ÙˆØ§Ù„Ù…Ø®Ø§Ø·Ø± ÙˆØ§Ù„ØªÙ‚Ø¯Ù… ÙˆØ§Ù„Ù‚Ø±Ø§Ø±Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ù…Ù† Ø§Ù„Ø§ÙƒØªØ´Ø§Ù Ø­ØªÙ‰ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "home.why.partner.title": "Ø´Ø±ÙŠÙƒ Ù…Ù†ØªØ¬ Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰",
    "home.why.partner.description":
      "Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚ Ù†Ø³Ø§Ø¹Ø¯ Ø¹Ù„Ù‰ ØªØ­Ø³ÙŠÙ† Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙˆØ§Ù„ØªØ­ÙˆÙŠÙ„ ÙˆØ§Ù„ØªØ¨Ù†ÙŠ ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ ÙˆØ§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª Ø§Ù„Ù‚Ø§Ø¯Ù…Ø©.",

    "home.process.eyebrow": "Ø§Ù„Ø¹Ù…Ù„ÙŠØ©",
    "home.process.title":
      "Ù†Ù…ÙˆØ°Ø¬ Ø¹Ù…Ù„ Ù‡Ø§Ø¯Ø¦ Ù…Ù† Ø§Ù„ÙÙƒØ±Ø© Ø¥Ù„Ù‰ Ø§Ù„ØªØ­Ø³ÙŠÙ† Ø§Ù„Ù…Ø³ØªÙ…Ø±.",
    "home.process.description":
      "Ø§Ù„Ø¹Ù…Ù„ÙŠØ© Ù…Ù†Ø¸Ù…Ø© Ø¨Ù…Ø§ ÙŠÙƒÙÙŠ Ù„Ø­ÙˆÙƒÙ…Ø© Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª ÙˆÙ…Ø±Ù†Ø© Ø¨Ù…Ø§ ÙŠÙƒÙÙŠ Ù„Ù„ØªØ¹Ù„Ù… Ø§Ù„Ø³Ø±ÙŠØ¹ Ù…Ù† Ø§Ù„Ù…Ù†ØªØ¬.",
    "home.process.discover.title": "Ø§Ù„Ø§ÙƒØªØ´Ø§Ù",
    "home.process.discover.description":
      "ØªÙˆØ¶ÙŠØ­ Ø§Ù„Ø£Ù‡Ø¯Ø§Ù ÙˆØ§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØ§Ù„Ù‚ÙŠÙˆØ¯ ÙˆØ§Ù„ØªÙƒØ§Ù…Ù„Ø§Øª ÙˆØ§Ù„Ù…Ø®Ø§Ø·Ø± ÙˆØ§Ù„Ù‚ÙŠÙ…Ø© Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© ÙˆØ±Ø§Ø¡ Ø§Ù„Ø¹Ù…Ù„.",
    "home.process.architect.title": "Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ©",
    "home.process.architect.description":
      "ØªØ­Ø¯ÙŠØ¯ Ø®Ø·Ø© Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØ­Ø¯ÙˆØ¯ Ø§Ù„Ù†Ø¸Ø§Ù… ÙˆÙ†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„ØªÙ‚Ù†ÙŠØ§Øª ÙˆØ§Ù„Ø£Ù…Ø§Ù† ÙˆØ®Ø§Ø±Ø·Ø© Ø§Ù„Ø·Ø±ÙŠÙ‚.",
    "home.process.design.title": "Ø§Ù„ØªØµÙ…ÙŠÙ…",
    "home.process.design.description":
      "Ù†Ù…Ø°Ø¬Ø© Ø±Ø­Ù„Ø§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆØ­Ø§Ù„Ø§Øª Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© ÙˆÙ‡ÙŠÙƒÙ„ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ ÙˆÙ†Ø¸Ø§Ù… ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…Ù†ØªØ¬.",
    "home.process.build.title": "Ø§Ù„Ø¨Ù†Ø§Ø¡",
    "home.process.build.description":
      "Ø§Ù„Ø´Ø­Ù† Ø¹Ù„Ù‰ Ù…Ø±Ø§Ø­Ù„ Ù…Ø±ÙƒØ²Ø© Ù…Ø¹ Ù…Ø±Ø§Ø¬Ø¹Ø§Øª ÙƒÙˆØ¯ ÙˆØ¨ÙˆØ§Ø¨Ø§Øª Ø¬ÙˆØ¯Ø© ÙˆØ§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆÙˆØ¶ÙˆØ­ ÙÙŠ Ø§Ù„ØªÙ‚Ø¯Ù….",
    "home.process.launch.title": "Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚",
    "home.process.launch.description":
      "ØªØ¬Ù‡ÙŠØ² Ø§Ù„Ø¥ØµØ¯Ø§Ø± ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª ÙˆØ§Ù„ØªÙˆØ«ÙŠÙ‚ ÙˆØ§Ù„Ù†Ø´Ø± ÙˆØ§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆØªØ³Ù„ÙŠÙ… Ø§Ù„ÙØ±ÙŠÙ‚.",
    "home.process.optimize.title": "Ø§Ù„ØªØ­Ø³ÙŠÙ†",
    "home.process.optimize.description":
      "ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆØ§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙˆØ§Ù„ØªØ¨Ù†ÙŠ ÙˆØ§Ù„ØªØ­ÙˆÙŠÙ„ ÙˆÙØ±Øµ Ø§Ù„Ù…Ù†ØªØ¬ Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ÙŠØ© Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",

    "home.statistics.eyebrow": "Ù…Ø¤Ø´Ø±Ø§Øª ØªØ´ØºÙŠÙ„ÙŠØ©",
    "home.statistics.title":
      "Ø´Ø±ÙŠÙƒ ØªØ³Ù„ÙŠÙ… Ù…ØµÙ…Ù… Ù„Ù„Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ø¬Ø§Ø¯Ø©.",
    "home.statistics.description":
      "ØªØ¹ÙƒØ³ Ø§Ù„Ø£Ø±Ù‚Ø§Ù… Ù†ÙˆØ¹ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙˆØ§ØªØ³Ø§Ø¹ Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„ØªÙŠ ØµÙÙ…Ù…Øª HDS Ù„Ø¯Ø¹Ù…Ù‡Ø§.",
    "home.statistics.products": "Ù…Ù†ØªØ¬Ø§Øª ÙˆÙ…Ù†ØµØ§Øª Ø±Ù‚Ù…ÙŠØ© ØªÙ… Ø¥Ø·Ù„Ø§Ù‚Ù‡Ø§",
    "home.statistics.disciplines": "ØªØ®ØµØµØ§Øª Ø®Ø¯Ù…Ø© Ù…ØªÙƒØ§Ù…Ù„Ø©",
    "home.statistics.uptime": "Ù…Ø³ØªÙ‡Ø¯Ù Ø§Ù„Ø¬Ø§Ù‡Ø²ÙŠØ© Ù„Ù„Ù…Ù†ØµØ§Øª Ø§Ù„Ù…Ø¯Ø§Ø±Ø©",
    "home.statistics.industries": "Ù‚Ø·Ø§Ø¹Ø§Øª Ù…Ø¯Ø¹ÙˆÙ…Ø© Ø¶Ù…Ù† Ø¨Ø±Ø§Ù…Ø¬ Ø±Ù‚Ù…ÙŠØ©",

    "home.testimonials.eyebrow": "Ø±Ø£ÙŠ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡",
    "home.testimonials.title":
      "ØªØ®ØªØ§Ø± Ø§Ù„ÙØ±Ù‚ HDS Ø¹Ù†Ø¯Ù…Ø§ ØªÙƒÙˆÙ† Ø§Ù„Ù…Ø®Ø§Ø·Ø± Ø¹Ø§Ù„ÙŠØ©.",
    "home.testimonials.description":
      "Ø¢Ø±Ø§Ø¡ ØªÙ…Ø«ÙŠÙ„ÙŠØ© Ù…Ù† Ù‚Ø§Ø¯Ø© ØªØ­ÙˆÙ„ ÙŠØ­ØªØ§Ø¬ÙˆÙ† Ø¥Ù„Ù‰ ÙˆØ¶ÙˆØ­ Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠ ÙˆØ²Ø®Ù… ÙÙŠ Ø§Ù„ØªÙ†ÙÙŠØ°.",
    "home.testimonials.operations.quote":
      "Ø³Ø§Ø¹Ø¯ØªÙ†Ø§ HDS Ø¹Ù„Ù‰ ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…ØªÙØ±Ù‚Ø© Ø¥Ù„Ù‰ Ù…Ù†ØµØ© ÙŠØ«Ù‚ Ø¨Ù‡Ø§ Ø§Ù„ÙØ±ÙŠÙ‚ ÙˆÙŠØ³ØªØ®Ø¯Ù…Ù‡Ø§ ÙŠÙˆÙ…ÙŠÙ‹Ø§.",
    "home.testimonials.operations.name": "Ù…Ø§ÙŠØ§ Ø­Ø³Ù†",
    "home.testimonials.operations.role": "Ù…Ø¯ÙŠØ±Ø© Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª",
    "home.testimonials.product.quote":
      "Ù‚Ø¯Ù‘Ù… Ø§Ù„ÙØ±ÙŠÙ‚ Ø­ÙƒÙ…Ù‹Ø§ Ù…Ù†ØªØ¬ÙŠÙ‹Ø§ ÙˆØ§Ù†Ø¶Ø¨Ø§Ø·Ù‹Ø§ Ù‡Ù†Ø¯Ø³ÙŠÙ‹Ø§ ÙˆÙ…Ø³ØªÙˆÙ‰ Ù…Ù† Ø§Ù„ØµÙ‚Ù„ Ù†Ø±Ø§Ù‡ Ø¹Ø§Ø¯Ø© Ù„Ø¯Ù‰ Ø´Ø±ÙƒØ§Øª Ø£ÙƒØ¨Ø± Ø¨ÙƒØ«ÙŠØ±.",
    "home.testimonials.product.name": "Ø¹Ù…Ø± Ù†Ø¨ÙŠÙ„",
    "home.testimonials.product.role": "Ø§Ù„Ù…Ø¤Ø³Ø³ ÙˆØ§Ù„Ø±Ø¦ÙŠØ³ Ø§Ù„ØªÙ†ÙÙŠØ°ÙŠ",
    "home.testimonials.growth.quote":
      "Ù„Ù… ÙŠØ¨Ù†ÙˆØ§ Ø´Ø§Ø´Ø§Øª ÙÙ‚Ø·. Ø³Ø§Ø¹Ø¯ÙˆÙ†Ø§ Ø¹Ù„Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªÙÙƒÙŠØ± ÙÙŠ Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆÙ…Ø³Ø§Ø± Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "home.testimonials.growth.name": "Ù„ÙŠÙ†Ø§ ÙØ§Ø±ÙˆÙ‚",
    "home.testimonials.growth.role": "Ù‚Ø§Ø¦Ø¯Ø© Ø§Ù„Ù†Ù…Ùˆ",

    "home.faq.eyebrow": "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    "home.faq.title": "Ø¥Ø¬Ø§Ø¨Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ù‚Ø¨Ù„ Ø£Ù† Ù†Ø¨Ø¯Ø£.",
    "home.faq.description":
      "ØªÙØ§ØµÙŠÙ„ Ø¹Ù…Ù„ÙŠØ© Ù„Ù„ÙØ±Ù‚ Ø§Ù„ØªÙŠ ØªÙ‚ÙŠÙ‘Ù… HDS ÙƒØ´Ø±ÙŠÙƒ ØªÙ‚Ù†ÙŠ Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰.",
    "home.faq.scope.title":
      "Ù‡Ù„ ÙŠÙ…ÙƒÙ† Ù„Ù€ HDS Ø§Ù„Ø¨Ù†Ø§Ø¡ Ù…Ù† Ø§Ù„ØµÙØ± ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø­Ø§Ù„ÙŠØ©ØŸ",
    "home.faq.scope.content":
      "Ù†Ø¹Ù…. Ù†Ø¨Ø¯Ø£ Ø¨Ø§Ù„Ø§ÙƒØªØ´Ø§Ù Ø«Ù… Ù†ÙˆØµÙŠ Ø¨Ø§Ù„ØªØ­Ø¯ÙŠØ« Ø£Ùˆ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø¨Ù†Ø§Ø¡ Ø£Ùˆ Ø§Ù„ØªÙƒØ§Ù…Ù„ Ø£Ùˆ Ø¥Ø·Ù„Ø§Ù‚ Ù…Ù†ØªØ¬ Ø¬Ø¯ÙŠØ¯ Ù…Ø±ÙƒØ².",
    "home.faq.timeline.title": "ÙƒÙ… ÙŠØ³ØªØºØ±Ù‚ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø¹Ø§Ø¯Ø©ØŸ",
    "home.faq.timeline.content":
      "ØªØ¹ØªÙ…Ø¯ Ø§Ù„Ù…Ø¯Ø© Ø¹Ù„Ù‰ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„ØªÙƒØ§Ù…Ù„Ø§Øª. ÙŠÙ…ÙƒÙ† Ø£Ù† ØªØ¨Ø¯Ø£ Ù…Ù†ØªØ¬Ø§Øª MVP Ø¨Ù…Ø±Ø§Ø­Ù„ Ù…Ø±ÙƒØ²Ø©ØŒ Ø¨ÙŠÙ†Ù…Ø§ ØªØ­ØªØ§Ø¬ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª Ø¹Ø§Ø¯Ø© Ø¥Ù„Ù‰ ØªØ³Ù„ÙŠÙ… Ù…Ø±Ø­Ù„ÙŠ.",
    "home.faq.ownership.title": "Ù‡Ù„ Ø³Ù†Ù…ØªÙ„Ùƒ Ø§Ù„ÙƒÙˆØ¯ Ø§Ù„Ù…ØµØ¯Ø±ÙŠØŸ",
    "home.faq.ownership.content":
      "Ù†Ø¹Ù…. ÙŠØªÙ… ØªÙˆØ¶ÙŠØ­ Ø§Ù„Ù…Ù„ÙƒÙŠØ© ÙˆØ§Ù„Ù…Ø³ØªÙˆØ¯Ø¹Ø§Øª ÙˆØ¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ÙˆØµÙˆÙ„ ÙˆØ§Ù„ØªÙˆØ«ÙŠÙ‚ ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… ÙÙŠ Ø§Ù„Ø¹Ø±Ø¶ ÙˆØ§Ù„Ø¹Ù‚Ø¯.",
    "home.faq.support.title": "Ù‡Ù„ ØªØ¯Ø¹Ù…ÙˆÙ† Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚ØŸ",
    "home.faq.support.content":
      "Ù†Ø¹Ù…. ÙŠÙ…ÙƒÙ† Ù„Ù€ HDS ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„ØµÙŠØ§Ù†Ø© ÙˆØ§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆØ§Ù„ØªØ­Ø³ÙŠÙ†Ø§Øª ÙˆØ§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© ÙˆØ§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",

    "home.cta.title":
      "Ù‡Ù„ Ø£Ù†Øª Ù…Ø³ØªØ¹Ø¯ Ù„Ø¨Ù†Ø§Ø¡ Ù…Ù†ØµØ© ÙŠÙ…ÙƒÙ† Ù„Ø¹Ù…Ù„Ùƒ Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¹Ù„ÙŠÙ‡Ø§ØŸ",
    "home.cta.description":
      "Ø£Ø®Ø¨Ø±Ù†Ø§ Ø¨Ù…Ø§ ØªØ±ÙŠØ¯ ØªØ­ÙˆÙŠÙ„Ù‡. Ø³Ù†Ø³Ø§Ø¹Ø¯Ùƒ ÙÙŠ ØªØ´ÙƒÙŠÙ„ Ø®Ø§Ø±Ø·Ø© Ø§Ù„Ø·Ø±ÙŠÙ‚ ÙˆØ§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙˆØ®Ø·Ø© Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø¨ÙˆØ¶ÙˆØ­ Ù…ØªÙ‚Ø¯Ù… Ù…Ù† Ø§Ù„ÙŠÙˆÙ… Ø§Ù„Ø£ÙˆÙ„.",
    "home.cta.primary": "Ø§Ø­Ø¬Ø² Ø§Ø³ØªØ´Ø§Ø±Ø©",
    "home.cta.secondary": "Ø±Ø§Ø³Ù„ HDS",

    "company.footer.contact": "Ø§Ù„ØªÙˆØ§ØµÙ„",
    "company.footer.copyright": "Â© 2026 HDS. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.",
    "company.footer.offices": "Ø§Ù„Ù…ÙƒØ§ØªØ¨",
    "company.footer.social": "Ø§Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØ©",
    "company.leadership.ceo.bio":
      "ÙŠÙ‚ÙˆØ¯ Ø±Ø¤ÙŠØ© Ø§Ù„Ø´Ø±ÙƒØ© ÙˆØ´Ø±Ø§ÙƒØ§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ§Ù„Ø§ØªØ¬Ø§Ù‡ Ø§Ù„Ø¹Ø§Ù… Ù„Ù„Ø£Ø¹Ù…Ø§Ù„.",
    "company.leadership.ceo.role": "Ø§Ù„Ø±Ø¦ÙŠØ³ Ø§Ù„ØªÙ†ÙÙŠØ°ÙŠ",
    "company.leadership.cto.bio":
      "ÙŠØ´Ø±Ù Ø¹Ù„Ù‰ Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙˆØ§Ù†Ø¶Ø¨Ø§Ø· Ø§Ù„ØªØ³Ù„ÙŠÙ….",
    "company.leadership.cto.role": "Ø§Ù„Ø±Ø¦ÙŠØ³ Ø§Ù„ØªÙ‚Ù†ÙŠ",
    "company.leadership.title": "Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©",
    "company.offices.cairo.address": "ÙˆØ³Ø· Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©ØŒ Ù…ØµØ±",
    "company.offices.cairo.city": "Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©",
    "company.offices.cairo.country": "Ù…ØµØ±",
    "company.offices.cairo.hours":
      "Ù…Ù† Ø§Ù„Ø£Ø­Ø¯ Ø¥Ù„Ù‰ Ø§Ù„Ø®Ù…ÙŠØ³ØŒ 9:00 ØµØ¨Ø§Ø­Ù‹Ø§ Ø¥Ù„Ù‰ 6:00 Ù…Ø³Ø§Ø¡Ù‹",
    "company.offices.dubai.address":
      "Ù…Ø¯ÙŠÙ†Ø© Ø¯Ø¨ÙŠ Ù„Ù„Ø¥Ù†ØªØ±Ù†ØªØŒ Ø¯Ø¨ÙŠØŒ Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª",
    "company.offices.dubai.city": "Ø¯Ø¨ÙŠ",
    "company.offices.dubai.country": "Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©",
    "company.offices.dubai.hours":
      "Ù…Ù† Ø§Ù„Ø§Ø«Ù†ÙŠÙ† Ø¥Ù„Ù‰ Ø§Ù„Ø¬Ù…Ø¹Ø©ØŒ 9:00 ØµØ¨Ø§Ø­Ù‹Ø§ Ø¥Ù„Ù‰ 6:00 Ù…Ø³Ø§Ø¡Ù‹",
    "company.offices.title": "Ø§Ù„Ù…ÙƒØ§ØªØ¨",
    "company.profile.awards.delivery": "ØªÙ‚Ø¯ÙŠØ± Ù„ØªÙ…ÙŠØ² Ø§Ù„ØªØ³Ù„ÙŠÙ…",
    "company.profile.awards.design": "ØªÙ‚Ø¯ÙŠØ± Ù„Ø¬ÙˆØ¯Ø© ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª",
    "company.profile.certifications.delivery": "Ù…Ù…Ø§Ø±Ø³Ø§Øª ØªÙ…ÙŠØ² Ø§Ù„ØªØ³Ù„ÙŠÙ…",
    "company.profile.certifications.iso": "Ù…Ù…Ø§Ø±Ø³Ø§Øª Ø¬ÙˆØ¯Ø© Ù…ØªÙˆØ§ÙÙ‚Ø© Ù…Ø¹ ISO",
    "company.profile.certifications.security":
      "Ù…Ù…Ø§Ø±Ø³Ø§Øª Ù‡Ù†Ø¯Ø³ÙŠØ© ÙˆØ§Ø¹ÙŠØ© Ø¨Ø§Ù„Ø£Ù…Ø§Ù†",
    "company.profile.description":
      "ØªØ¨Ù†ÙŠ HDS Ù…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ© ÙˆÙ…Ù†ØµØ§Øª Ø¨Ø±Ù…Ø¬ÙŠØ© ÙˆØ­Ù„ÙˆÙ„Ù‹Ø§ Ø³Ø­Ø§Ø¨ÙŠØ© Ù„Ù„ÙØ±Ù‚ Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬ ÙˆØ¶ÙˆØ­Ù‹Ø§ ÙˆØ§Ø¹ØªÙ…Ø§Ø¯ÙŠØ© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰.",
    "company.profile.mission":
      "Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª Ø¹Ù„Ù‰ ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø£ÙÙƒØ§Ø± Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© Ø¥Ù„Ù‰ Ø£Ù†Ø¸Ù…Ø© Ø±Ù‚Ù…ÙŠØ© ÙŠÙ…ÙƒÙ† Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¹Ù„ÙŠÙ‡Ø§.",
    "company.profile.tagline": "Ù…ØµÙ…Ù…Ø© Ù„Ù„Ù†Ù…Ùˆ Ø§Ù„Ø±Ù‚Ù…ÙŠ Ø§Ù„Ø¬Ø§Ø¯.",
    "company.profile.vision":
      "Ø£Ù† Ù†ÙƒÙˆÙ† Ø´Ø±ÙŠÙƒ Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰ Ù„Ù„Ù…Ø¤Ø³Ø³Ø§Øª Ø§Ù„Ø·Ù…ÙˆØ­Ø©.",
    "company.social.behance": "Behance",
    "company.social.dribbble": "Dribbble",
    "company.social.facebook": "Facebook",
    "company.social.github": "GitHub",
    "company.social.instagram": "Instagram",
    "company.social.linkedin": "LinkedIn",
    "company.social.medium": "Medium",
    "company.social.youtube": "YouTube",
    "company.social.x": "X",
    "company.statistics.clients": "Ø¹Ù…ÙŠÙ„ ØªÙ… Ø®Ø¯Ù…ØªÙ‡",
    "company.statistics.countries": "Ø¯ÙˆÙ„Ø© Ù…Ø¯Ø¹ÙˆÙ…Ø©",
    "company.statistics.percent": "%",
    "company.statistics.plus": "+",
    "company.statistics.projects": "Ù…Ø´Ø±ÙˆØ¹ ØªÙ… ØªØ³Ù„ÙŠÙ…Ù‡",
    "company.statistics.uptime": "Ù…Ø³ØªÙ‡Ø¯Ù Ø§Ù„Ø¬Ø§Ù‡Ø²ÙŠØ©",
    "company.technologies.backend": "Ø§Ù„Ø®Ù„ÙÙŠØ©",
    "company.technologies.cloud": "Ø§Ù„Ø³Ø­Ø§Ø¨Ø©",
    "company.technologies.design": "Ø§Ù„ØªØµÙ…ÙŠÙ…",
    "company.technologies.frontend": "Ø§Ù„ÙˆØ§Ø¬Ù‡Ø©",
    "company.timeline.2018.description":
      "Ø¨Ø¯Ø£Øª HDS Ø¨ØªØ±ÙƒÙŠØ² Ø¹Ù„Ù‰ Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚.",
    "company.timeline.2018.title": "ØªØ£Ø³ÙŠØ³ Ø§Ù„Ø´Ø±ÙƒØ©",
    "company.timeline.2021.description":
      "ØªÙˆØ³Ø¹Øª Ø¥Ù„Ù‰ Ø§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØªØµÙ…ÙŠÙ… Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØ¨Ø±Ø§Ù…Ø¬ Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠØ©.",
    "company.timeline.2021.title": "Ø§Ù„ØªÙˆØ³Ø¹ Ø¥Ù„Ù‰ ØªØ³Ù„ÙŠÙ… Ø´Ø§Ù…Ù„",
    "company.timeline.2024.description":
      "ØªÙ… ØªØ­Ø³ÙŠÙ† Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ø§Ù„Ù…Ø±Ø¬Ø¹ÙŠØ© Ù„Ø¯Ø¹Ù… Ù†Ù…Ùˆ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰.",
    "company.timeline.2024.title": "ØªØ±Ø³ÙŠØ® Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ø±Ø¬Ø¹ÙŠ",
    "company.timeline.title": "Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ø²Ù…Ù†ÙŠ",
    "company.values.clarity.description":
      "Ø¥Ø¨Ù‚Ø§Ø¡ Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ù…Ø±Ø¦ÙŠØ© ÙˆÙ…Ø­Ø¯Ø¯Ø© ÙˆØ³Ù‡Ù„Ø© Ø§Ù„ÙÙ‡Ù….",
    "company.values.clarity.title": "Ø§Ù„ÙˆØ¶ÙˆØ­",
    "company.values.discipline.description":
      "Ø§Ù„Ø¨Ù†Ø§Ø¡ Ø¨Ù‡ÙŠÙƒÙ„ÙŠØ© ÙˆÙ…Ø³Ø¤ÙˆÙ„ÙŠØ© ÙˆØ¬ÙˆØ¯Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙƒØ±Ø§Ø±.",
    "company.values.discipline.title": "Ø§Ù„Ø§Ù†Ø¶Ø¨Ø§Ø·",
    "company.values.partnership.description":
      "Ø§Ù„Ø¹Ù…Ù„ ÙƒØ´Ø±ÙŠÙƒ Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰ Ø¨Ø¯Ù„ Ù…ÙˆØ±Ø¯ Ù‚ØµÙŠØ± Ø§Ù„Ù…Ø¯Ù‰.",
    "company.values.partnership.title": "Ø§Ù„Ø´Ø±Ø§ÙƒØ©",
    "seo.services.description":
      "Ø§Ø³ØªÙƒØ´Ù Ø®Ø¯Ù…Ø§Øª HDS Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ ÙˆØ§Ù„Ø¬ÙˆØ§Ù„ ÙˆØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆØ§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ©.",
    "seo.services.keywords":
      "HDS services, web development, mobile development, UI UX design, cloud solutions, software company",
    "seo.services.title": "Ø®Ø¯Ù…Ø§Øª ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª",
    "services.breadcrumb.home": "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    "services.breadcrumb.label": "Ù…Ø³Ø§Ø± Ø§Ù„ØªÙ†Ù‚Ù„",
    "services.breadcrumb.services": "Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "services.card.readMore": "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø®Ø¯Ù…Ø©",
    "services.cta.primary": "Ø§Ø¨Ø¯Ø£ Ù…Ø´Ø±ÙˆØ¹Ùƒ",
    "services.cta.secondary": "ØªÙˆØ§ØµÙ„ Ù…Ø¹ HDS",
    "services.details.badge": "ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø®Ø¯Ù…Ø©",
    "services.details.benefits.description":
      "ÙƒÙ„ Ø®Ø¯Ù…Ø© Ù…ØµÙ…Ù…Ø© Ù„Ø±ÙØ¹ Ø§Ù„Ø«Ù‚Ø© ÙÙŠ Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„Ù…Ù†ØªØ¬ ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØµÙŠØ§Ù†Ø© Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø·ÙˆÙŠÙ„.",
    "services.details.benefits.eyebrow": "Ø§Ù„ÙÙˆØ§Ø¦Ø¯",
    "services.details.benefits.title":
      "Ù…ØµÙ…Ù…Ø© Ø­ÙˆÙ„ Ù†ØªØ§Ø¦Ø¬ Ø£Ø¹Ù…Ø§Ù„ Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù‚ÙŠØ§Ø³.",
    "services.details.faq.description":
      "Ø¥Ø¬Ø§Ø¨Ø§Øª Ø¹Ù…Ù„ÙŠØ© Ù„Ù„ÙØ±Ù‚ Ø§Ù„ØªÙŠ ØªÙ‚ÙŠÙ… Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØ§Ù„Ù…Ù„ÙƒÙŠØ© ÙˆØ¬Ø§Ù‡Ø²ÙŠØ© Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "services.details.faq.eyebrow": "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    "services.details.faq.title": "Ø£Ø³Ø¦Ù„Ø© Ù‚Ø¨Ù„ Ø£Ù† Ù†Ø¨Ø¯Ø£.",
    "services.details.features.description":
      "ÙƒÙ„ Ù…Ø´Ø±ÙˆØ¹ ÙŠÙ†ØªØ¬ Ø£ØµÙˆÙ„Ù‹Ø§ Ø¹Ù…Ù„ÙŠØ© ÙˆÙƒÙˆØ¯Ù‹Ø§ Ø¬Ø§Ù‡Ø²Ù‹Ø§ Ù„Ù„Ø¥Ù†ØªØ§Ø¬ ÙˆØªÙˆØ«ÙŠÙ‚Ù‹Ø§ ÙˆØ£Ù†Ø¸Ù…Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ³Ù„ÙŠÙ….",
    "services.details.features.eyebrow": "Ø§Ù„Ù…Ø®Ø±Ø¬Ø§Øª",
    "services.details.features.title":
      "Ù…Ø®Ø±Ø¬Ø§Øª ÙˆØ§Ø¶Ø­Ø© ÙŠÙ…ÙƒÙ† Ù„ÙØ±ÙŠÙ‚Ùƒ Ø§Ù„Ø¨Ù†Ø§Ø¡ Ø¹Ù„ÙŠÙ‡Ø§.",
    "services.details.industries.description":
      "ÙŠØªÙƒÙŠÙ Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø®Ø¯Ù…Ø© Ù…Ø¹ ÙØ±Ù‚ Ù„Ø¯ÙŠÙ‡Ø§ Ø³ÙŠØ± Ø¹Ù…Ù„ Ø­Ù‚ÙŠÙ‚ÙŠ ÙˆÙ…ØªØ·Ù„Ø¨Ø§Øª Ø§Ù…ØªØ«Ø§Ù„ ÙˆØ¶ØºØ· Ù†Ù…Ùˆ.",
    "services.details.industries.eyebrow": "Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª",
    "services.details.industries.title": "Ù…ØµÙ…Ù…Ø© Ù„Ø¨ÙŠØ¦Ø§Øª ØªØ´ØºÙŠÙ„ Ø¬Ø§Ø¯Ø©.",
    "services.details.overview.title": "Ù†Ø¸Ø±Ø© Ø¹Ø§Ù…Ø©",
    "services.details.process.description":
      "Ù†Ù…ÙˆØ°Ø¬ ØªØ³Ù„ÙŠÙ… Ù…Ù†Ø¶Ø¨Ø· ÙŠØªÙƒÙŠÙ Ù…Ø¹ ÙƒÙ„ Ø®Ø¯Ù…Ø© ÙˆÙŠØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ ÙˆØ¶ÙˆØ­ Ø§Ù„Ù…Ø®Ø§Ø·Ø± ÙˆØ§Ù„ØªÙ‚Ø¯Ù….",
    "services.details.process.eyebrow": "Ø§Ù„Ø¹Ù…Ù„ÙŠØ©",
    "services.details.process.title":
      "Ù…Ø³Ø§Ø± Ù…Ù†Ø¸Ù… Ù…Ù† Ø§Ù„Ø§ÙƒØªØ´Ø§Ù Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "services.details.related.description":
      "Ù…Ø¹Ø¸Ù… Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ ØªØ³ØªÙÙŠØ¯ Ù…Ù† Ù…Ø²ÙŠØ¬ Ù…Ø±ÙƒØ² Ù…Ù† Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø©.",
    "services.details.related.eyebrow": "Ø®Ø¯Ù…Ø§Øª Ù…Ø±ØªØ¨Ø·Ø©",
    "services.details.related.title": "Ø§Ø¬Ù…Ø¹ Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø¨Ø¯ÙˆÙ† ØªØ¹Ù‚ÙŠØ¯ Ø¥Ø¶Ø§ÙÙŠ.",
    "services.details.technologies.description":
      "Ù†Ø³ØªØ®Ø¯Ù… Ø§Ø®ØªÙŠØ§Ø±Ø§Øª ØªÙ‚Ù†ÙŠØ© Ù…Ø«Ø¨ØªØ© ØªØ¯Ø¹Ù… Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ø¢Ù…Ù† ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØªÙˆØ³Ø¹ Ù…Ø³ØªÙ‚Ø¨Ù„Ù‹Ø§.",
    "services.details.technologies.eyebrow": "Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª",
    "services.details.technologies.title":
      "Ø£Ø¯ÙˆØ§Øª Ù…Ø®ØªØ§Ø±Ø© Ù„Ù„Ø³Ø±Ø¹Ø© ÙˆØ§Ù„Ø§Ø³ØªÙ…Ø±Ø§Ø±ÙŠØ©.",
    "services.grid.description":
      "Ø§Ø®ØªØ± Ø®Ø¯Ù…Ø© Ù…Ø±ÙƒØ²Ø© Ø£Ùˆ Ø§Ø¬Ù…Ø¹ Ø£ÙƒØ«Ø± Ù…Ù† ØªØ®ØµØµ Ø¯Ø§Ø®Ù„ Ø¨Ø±Ù†Ø§Ù…Ø¬ ØªÙ†ÙÙŠØ° ÙˆØ§Ø­Ø¯ ÙˆØ§Ø¶Ø­.",
    "services.grid.eyebrow": "ÙƒØªØ§Ù„ÙˆØ¬ Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "services.grid.title": "Ø®Ø¯Ù…Ø§Øª Ù…ØµÙ…Ù…Ø© Ù„Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ø¬Ø§Ø¯Ø©.",
    "services.industries.ecommerce":
      "Ø§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙˆØ§Ù„Ø£Ø³ÙˆØ§Ù‚ Ø§Ù„Ø±Ù‚Ù…ÙŠØ©",
    "services.industries.education": "Ù…Ù†ØµØ§Øª Ø§Ù„ØªØ¹Ù„ÙŠÙ… ÙˆØ§Ù„ØªØ¯Ø±ÙŠØ¨",
    "services.industries.fintech":
      "Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…Ù†Ø¸Ù…Ø©",
    "services.industries.healthcare": "Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„ØµØ­ÙŠØ© ÙˆÙØ±Ù‚ Ø§Ù„ØªØ´ØºÙŠÙ„",
    "services.industries.logistics": "Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª ÙˆØ¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…ÙŠØ¯Ø§Ù†",
    "services.industries.saas": "Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ©",
    "services.items.cloud.benefits.cost":
      "Ø¥Ø¨Ù‚Ø§Ø¡ ØªÙƒÙ„ÙØ© Ø§Ù„Ø¨Ù†ÙŠØ© ÙˆØ§Ø¶Ø­Ø© ÙˆÙ…Ù†Ø§Ø³Ø¨Ø© Ù„Ø§Ø­ØªÙŠØ§Ø¬ Ø§Ù„Ù…Ù†ØªØ¬.",
    "services.items.cloud.benefits.reliability":
      "Ø±ÙØ¹ Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆÙ…Ø¹Ø§Ù„Ø¬Ø© Ø£Ø®Ø·Ø§Ø¡ Ù…Ù†Ø¸Ù…Ø©.",
    "services.items.cloud.benefits.security":
      "ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø£Ù…Ø§Ù† Ø¹Ø¨Ø± Ø§Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø§Ù„ÙˆØµÙˆÙ„ ÙˆØ§Ù„Ø§Ù†Ø¶Ø¨Ø§Ø· Ø§Ù„Ø¨ÙŠØ¦ÙŠ.",
    "services.items.cloud.cta.description":
      "ØªØ³Ø§Ø¹Ø¯Ùƒ HDS ÙÙŠ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙˆØ®Ø·Ø© Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ©.",
    "services.items.cloud.cta.title":
      "Ù‡Ù„ ØªØ±ÙŠØ¯ ØªÙ†ÙÙŠØ° Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© Ø¨Ø«Ù‚Ø©ØŸ",
    "services.items.cloud.deliverables.infrastructure":
      "Ø®Ø·Ø© Ø¨Ù†ÙŠØ© Ø³Ø­Ø§Ø¨ÙŠØ© ÙˆØ¨ÙŠØ¦Ø§Øª Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù†Ø´Ø±.",
    "services.items.cloud.deliverables.monitoring":
      "Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆØªØ³Ø¬ÙŠÙ„ ÙˆØªÙ†Ø¨ÙŠÙ‡Ø§Øª ÙˆØªÙˆØµÙŠØ§Øª ØªØ´ØºÙŠÙ„ÙŠØ©.",
    "services.items.cloud.deliverables.pipeline":
      "Ø¥Ø¹Ø¯Ø§Ø¯ Ù…Ø³Ø§Ø± Ù†Ø´Ø± ÙˆØªÙˆØ«ÙŠÙ‚ Ø³ÙŠØ± Ø§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª.",
    "services.items.cloud.faq.migration.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.cloud.faq.migration.question":
      "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.cloud.faq.monitoring.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.cloud.faq.monitoring.question":
      "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.cloud.fullDescription":
      "ØªØ³Ø§Ø¹Ø¯ HDS Ø§Ù„ÙØ±Ù‚ Ø¹Ù„Ù‰ ØªÙ†ÙÙŠØ° Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ®Ø·ÙŠØ· ÙˆØ§Ø¶Ø­ ÙˆÙ…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆØªØ¬Ø±Ø¨Ø© Ù…Ø³ØªØ®Ø¯Ù… Ù…ØµÙ‚ÙˆÙ„Ø© ÙˆØªØ³Ù„ÙŠÙ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¥Ù†ØªØ§Ø¬.",
    "services.items.cloud.highlights.delivery":
      "Ù…Ø³Ø§Ø±Ø§Øª ØªØ³Ù„ÙŠÙ… ØªØ¬Ø¹Ù„ Ø§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª Ø£ÙƒØ«Ø± Ø£Ù…Ø§Ù†Ù‹Ø§ ÙˆØªÙƒØ±Ø§Ø±Ù‹Ø§.",
    "services.items.cloud.highlights.infrastructure":
      "Ø¨Ù†ÙŠØ© ØªØ­ØªÙŠØ© Ù…Ø®Ø·Ø·Ø© Ù„Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙˆØ§Ù„Ø£Ù…Ø§Ù† ÙˆØ§Ù„ØªÙƒÙ„ÙØ©.",
    "services.items.cloud.highlights.observability":
      "Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆØªØ³Ø¬ÙŠÙ„ ØªØ¬Ø¹Ù„ Ø­Ø§Ù„Ø© Ø§Ù„Ø¥Ù†ØªØ§Ø¬ ÙˆØ§Ø¶Ø­Ø©.",
    "services.items.cloud.imageAlt":
      "Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø±Ø¦ÙŠØ© Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ©",
    "services.items.cloud.seo.description":
      "Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬ Ø­Ù„ÙˆÙ„Ù‹Ø§ Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹.",
    "services.items.cloud.seo.keywords":
      "Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ©ØŒ HDSØŒ Ø®Ø¯Ù…Ø§Øª Ø¨Ø±Ù…Ø¬ÙŠØ©ØŒ Ø­Ù„ÙˆÙ„ Ø±Ù‚Ù…ÙŠØ©",
    "services.items.cloud.seo.title": "Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© Ù…Ù† HDS",
    "services.items.cloud.shortDescription":
      "Ø®Ø¯Ù…Ø© Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© Ù…ØµÙ…Ù…Ø© Ù„Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØµÙŠØ§Ù†Ø©.",
    "services.items.cloud.subtitle":
      "Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© Ø¨Ù…Ø³ØªÙˆÙ‰ Ø¥Ù†ØªØ§Ø¬ÙŠ ÙˆØ§Ø¶Ø­ ÙˆÙ‚Ø§Ø¨Ù„ Ù„Ù„Ù†Ù…Ùˆ.",
    "services.items.cloud.title": "Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ©",
    "services.items.design.benefits.clarity":
      "ØªÙˆØ¶ÙŠØ­ Ø§Ù„Ù†Ø·Ø§Ù‚ Ù‚Ø¨Ù„ Ø§Ù„Ø§Ø³ØªØ«Ù…Ø§Ø± Ø§Ù„ÙƒØ¨ÙŠØ± ÙÙŠ Ø§Ù„ØªÙ†ÙÙŠØ°.",
    "services.items.design.benefits.consistency":
      "ØªØ¬Ø±Ø¨Ø© Ù…ØªØ³Ù‚Ø© Ø¹Ø¨Ø± Ø§Ù„ØµÙØ­Ø§Øª ÙˆØ§Ù„ÙØ±Ù‚ ÙˆØ§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª.",
    "services.items.design.benefits.usability":
      "ØªØ­Ø³ÙŠÙ† Ø³Ù‡ÙˆÙ„Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ§Ù„ØªØ³Ù„Ø³Ù„ Ø§Ù„Ø¨ØµØ±ÙŠ ÙˆØ­Ø§Ù„Ø§Øª Ø§Ù„ØªÙØ§Ø¹Ù„.",
    "services.items.design.cta.description":
      "ØªØ³Ø§Ø¹Ø¯Ùƒ HDS ÙÙŠ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙˆØ®Ø·Ø© Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø®Ø¯Ù…Ø© ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù….",
    "services.items.design.cta.title":
      "Ù‡Ù„ ØªØ±ÙŠØ¯ ØªÙ†ÙÙŠØ° ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø¨Ø«Ù‚Ø©ØŸ",
    "services.items.design.deliverables.flows":
      "Ø±Ø­Ù„Ø§Øª Ù…Ø³ØªØ®Ø¯Ù… ÙˆÙ‡ÙŠÙƒÙ„ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØªØ¯ÙÙ‚Ø§Øª Ù…Ù†ØªØ¬ Ø±Ø¦ÙŠØ³ÙŠØ©.",
    "services.items.design.deliverables.prototype":
      "Ù†Ù…Ø§Ø°Ø¬ Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù†Ù‚Ø± ÙˆÙ…ÙˆØ§ØµÙØ§Øª Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„ØªØ³Ù„ÙŠÙ….",
    "services.items.design.deliverables.system":
      "Ø£Ø³Ø§Ø³ Ù†Ø¸Ø§Ù… ØªØµÙ…ÙŠÙ… ÙˆÙ…ÙƒÙˆÙ†Ø§Øª ÙˆØ£Ù†Ù…Ø§Ø· ØªÙØ§Ø¹Ù„.",
    "services.items.design.faq.handoff.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.design.faq.handoff.question":
      "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.design.faq.research.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.design.faq.research.question":
      "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.design.fullDescription":
      "ØªØ³Ø§Ø¹Ø¯ HDS Ø§Ù„ÙØ±Ù‚ Ø¹Ù„Ù‰ ØªÙ†ÙÙŠØ° ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ®Ø·ÙŠØ· ÙˆØ§Ø¶Ø­ ÙˆÙ…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆØªØ¬Ø±Ø¨Ø© Ù…Ø³ØªØ®Ø¯Ù… Ù…ØµÙ‚ÙˆÙ„Ø© ÙˆØªØ³Ù„ÙŠÙ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¥Ù†ØªØ§Ø¬.",
    "services.items.design.highlights.prototype":
      "Ù†Ù…Ø§Ø°Ø¬ ØªÙØ§Ø¹Ù„ÙŠØ© ØªÙˆØ¶Ø­ Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ù‚Ø¨Ù„ Ø§Ù„ØªÙ†ÙÙŠØ°.",
    "services.items.design.highlights.research":
      "Ù‚Ø±Ø§Ø±Ø§Øª ØªØµÙ…ÙŠÙ… Ù…Ø¨Ù†ÙŠØ© Ø¹Ù„Ù‰ ÙÙ‡Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØ§Ù„Ù‚ÙŠÙˆØ¯.",
    "services.items.design.highlights.systems":
      "Ù†Ø¸Ø§Ù… ØªØµÙ…ÙŠÙ… ÙŠØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ø§ØªØ³Ø§Ù‚ Ù…Ø¹ Ø§Ù„Ù†Ù…Ùˆ.",
    "services.items.design.imageAlt":
      "Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø±Ø¦ÙŠØ© Ù„Ø®Ø¯Ù…Ø© ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…",
    "services.items.design.seo.description":
      "Ø®Ø¯Ù…Ø§Øª ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬ Ø­Ù„ÙˆÙ„Ù‹Ø§ Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹.",
    "services.items.design.seo.keywords":
      "ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ØŒ HDSØŒ Ø®Ø¯Ù…Ø§Øª Ø¨Ø±Ù…Ø¬ÙŠØ©ØŒ Ø­Ù„ÙˆÙ„ Ø±Ù‚Ù…ÙŠØ©",
    "services.items.design.seo.title": "ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† HDS",
    "services.items.design.shortDescription":
      "Ø®Ø¯Ù…Ø© ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…ØµÙ…Ù…Ø© Ù„Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØµÙŠØ§Ù†Ø©.",
    "services.items.design.subtitle":
      "ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø¨Ù…Ø³ØªÙˆÙ‰ Ø¥Ù†ØªØ§Ø¬ÙŠ ÙˆØ§Ø¶Ø­ ÙˆÙ‚Ø§Ø¨Ù„ Ù„Ù„Ù†Ù…Ùˆ.",
    "services.items.design.title": "ØªØµÙ…ÙŠÙ… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…",
    "services.items.mobile.benefits.adoption":
      "Ø±ÙØ¹ Ø§Ù„ØªØ¨Ù†ÙŠ Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ¬Ø±Ø¨Ø© Ø¬ÙˆØ§Ù„ Ù…Ø±ÙƒØ²Ø© ÙˆÙˆØ§Ø¶Ø­Ø©.",
    "services.items.mobile.benefits.reliability":
      "Ø±ÙØ¹ Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆÙ…Ø¹Ø§Ù„Ø¬Ø© Ø£Ø®Ø·Ø§Ø¡ Ù…Ù†Ø¸Ù…Ø©.",
    "services.items.mobile.benefits.speed":
      "ØªØ³Ø±ÙŠØ¹ Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£Ø³Ø§Ø³ Ù‚Ø§Ø¨Ù„ Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù….",
    "services.items.mobile.cta.description":
      "ØªØ³Ø§Ø¹Ø¯Ùƒ HDS ÙÙŠ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙˆØ®Ø·Ø© Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø®Ø¯Ù…Ø© ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„.",
    "services.items.mobile.cta.title":
      "Ù‡Ù„ ØªØ±ÙŠØ¯ ØªÙ†ÙÙŠØ° ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ Ø¨Ø«Ù‚Ø©ØŸ",
    "services.items.mobile.deliverables.analytics":
      "Ø£Ø­Ø¯Ø§Ø« ØªØ­Ù„ÙŠÙ„ÙŠØ© ÙˆØ®Ø·Ø© ØªØ­Ø³ÙŠÙ† Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "services.items.mobile.deliverables.app":
      "Ø£Ø³Ø§Ø³ ØªØ·Ø¨ÙŠÙ‚ Ø¬ÙˆØ§Ù„ Ø¥Ù†ØªØ§Ø¬ÙŠ Ø¨Ø´Ø§Ø´Ø§Øª ÙˆÙ…ÙƒÙˆÙ†Ø§Øª Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹.",
    "services.items.mobile.deliverables.store":
      "Ù‚Ø§Ø¦Ù…Ø© Ø¥Ø·Ù„Ø§Ù‚ ÙˆØªØ¬Ù‡ÙŠØ² Ù„Ù„Ù…ØªØ§Ø¬Ø± ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª.",
    "services.items.mobile.faq.platforms.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.mobile.faq.platforms.question":
      "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.mobile.faq.release.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.mobile.faq.release.question":
      "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.mobile.fullDescription":
      "ØªØ³Ø§Ø¹Ø¯ HDS Ø§Ù„ÙØ±Ù‚ Ø¹Ù„Ù‰ ØªÙ†ÙÙŠØ° ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ®Ø·ÙŠØ· ÙˆØ§Ø¶Ø­ ÙˆÙ…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆØªØ¬Ø±Ø¨Ø© Ù…Ø³ØªØ®Ø¯Ù… Ù…ØµÙ‚ÙˆÙ„Ø© ÙˆØªØ³Ù„ÙŠÙ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¥Ù†ØªØ§Ø¬.",
    "services.items.mobile.highlights.analytics":
      "ØªØ­Ù„ÙŠÙ„Ø§Øª ØªØ³Ø§Ø¹Ø¯ Ø§Ù„ÙØ±ÙŠÙ‚ Ø¹Ù„Ù‰ ÙÙ‡Ù… Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ§Ù„ØªØ­Ø³ÙŠÙ†.",
    "services.items.mobile.highlights.crossPlatform":
      "ØªØ¬Ø±Ø¨Ø© Ù…ØªØ³Ù‚Ø© Ø¹Ø¨Ø± Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø¬ÙˆØ§Ù„ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©.",
    "services.items.mobile.highlights.release":
      "Ø¬Ø§Ù‡Ø²ÙŠØ© ÙˆØ§Ø¶Ø­Ø© Ù„Ù„Ø¥ØµØ¯Ø§Ø± ÙˆØ§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "services.items.mobile.imageAlt":
      "Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø±Ø¦ÙŠØ© Ù„Ø®Ø¯Ù…Ø© ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„",
    "services.items.mobile.seo.description":
      "Ø®Ø¯Ù…Ø§Øª ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬ Ø­Ù„ÙˆÙ„Ù‹Ø§ Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹.",
    "services.items.mobile.seo.keywords":
      "ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ØŒ HDSØŒ Ø®Ø¯Ù…Ø§Øª Ø¨Ø±Ù…Ø¬ÙŠØ©ØŒ Ø­Ù„ÙˆÙ„ Ø±Ù‚Ù…ÙŠØ©",
    "services.items.mobile.seo.title": "ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ Ù…Ù† HDS",
    "services.items.mobile.shortDescription":
      "Ø®Ø¯Ù…Ø© ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ Ù…ØµÙ…Ù…Ø© Ù„Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØµÙŠØ§Ù†Ø©.",
    "services.items.mobile.subtitle":
      "ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„ Ø¨Ù…Ø³ØªÙˆÙ‰ Ø¥Ù†ØªØ§Ø¬ÙŠ ÙˆØ§Ø¶Ø­ ÙˆÙ‚Ø§Ø¨Ù„ Ù„Ù„Ù†Ù…Ùˆ.",
    "services.items.mobile.title": "ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„",
    "services.items.web.benefits.conversion":
      "ØªØ­Ø³ÙŠÙ† Ø§Ù„ØªØ­ÙˆÙŠÙ„ ÙˆØ¥Ù†Ø¬Ø§Ø² Ø§Ù„Ù…Ù‡Ø§Ù… Ù…Ù† Ø®Ù„Ø§Ù„ Ø±Ø­Ù„Ø§Øª Ø£ÙˆØ¶Ø­.",
    "services.items.web.benefits.integration":
      "Ø±Ø¨Ø· Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª ÙˆØ§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠØ©.",
    "services.items.web.benefits.maintainability":
      "ØªÙ‚Ù„ÙŠÙ„ ØªÙƒÙ„ÙØ© Ø§Ù„ØµÙŠØ§Ù†Ø© Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ÙŠØ© Ø¨Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ù†Ø¸ÙŠÙØ©.",
    "services.items.web.cta.description":
      "ØªØ³Ø§Ø¹Ø¯Ùƒ HDS ÙÙŠ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙˆØ®Ø·Ø© Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø®Ø¯Ù…Ø© ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨.",
    "services.items.web.cta.title": "Ù‡Ù„ ØªØ±ÙŠØ¯ ØªÙ†ÙÙŠØ° ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ø¨Ø«Ù‚Ø©ØŸ",
    "services.items.web.deliverables.api":
      "Ø·Ø¨Ù‚Ø© ØªÙƒØ§Ù…Ù„ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù†Ù…Ùˆ Ù…Ø¹ Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…Ø­ØªÙˆÙ‰.",
    "services.items.web.deliverables.frontend":
      "ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§Ø¬Ù‡Ø© Ø¥Ù†ØªØ§Ø¬ÙŠ Ø¨Ù…ÙƒÙˆÙ†Ø§Øª Ù‚Ø§Ø¨Ù„Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù….",
    "services.items.web.deliverables.testing":
      "Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆØªÙˆØ«ÙŠÙ‚ ÙˆØ¬Ø§Ù‡Ø²ÙŠØ© Ù†Ø´Ø± ÙˆØªØ³Ù„ÙŠÙ….",
    "services.items.web.faq.cms.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.web.faq.cms.question": "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.web.faq.timeline.answer":
      "Ù†ÙˆØ¶Ø­ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆÙ†Ø¨Ù†ÙŠ Ø®Ø·Ø© ØªÙ†ÙÙŠØ° Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ø£Ù‡Ø¯Ø§Ù.",
    "services.items.web.faq.timeline.question":
      "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¨ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ØŸ",
    "services.items.web.fullDescription":
      "ØªØ³Ø§Ø¹Ø¯ HDS Ø§Ù„ÙØ±Ù‚ Ø¹Ù„Ù‰ ØªÙ†ÙÙŠØ° ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ®Ø·ÙŠØ· ÙˆØ§Ø¶Ø­ ÙˆÙ…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆØªØ¬Ø±Ø¨Ø© Ù…Ø³ØªØ®Ø¯Ù… Ù…ØµÙ‚ÙˆÙ„Ø© ÙˆØªØ³Ù„ÙŠÙ… Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¥Ù†ØªØ§Ø¬.",
    "services.items.web.highlights.accessibility":
      "ÙˆØ§Ø¬Ù‡Ø§Øª Ø³Ù‡Ù„Ø© Ø§Ù„ÙˆØµÙˆÙ„ ÙˆÙ…ØªØ¬Ø§ÙˆØ¨Ø© Ù…Ø¹ Ù…Ø®ØªÙ„Ù Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†.",
    "services.items.web.highlights.architecture":
      "Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ù…Ø®Ø·Ø·Ø© Ù„Ù„Ù†Ù…Ùˆ ÙˆØ§Ù„Ù…Ù„ÙƒÙŠØ© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰.",
    "services.items.web.highlights.performance":
      "Ø£Ø¯Ø§Ø¡ Ø³Ø±ÙŠØ¹ ÙˆØªØ¬Ø±Ø¨Ø© Ù…Ø³ØªÙ‚Ø±Ø© Ø¹Ø¨Ø± Ø§Ù„Ø£Ø¬Ù‡Ø²Ø©.",
    "services.items.web.imageAlt": "Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø±Ø¦ÙŠØ© Ù„Ø®Ø¯Ù…Ø© ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨",
    "services.items.web.seo.description":
      "Ø®Ø¯Ù…Ø§Øª ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬ Ø­Ù„ÙˆÙ„Ù‹Ø§ Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹.",
    "services.items.web.seo.keywords":
      "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ØŒ HDSØŒ Ø®Ø¯Ù…Ø§Øª Ø¨Ø±Ù…Ø¬ÙŠØ©ØŒ Ø­Ù„ÙˆÙ„ Ø±Ù‚Ù…ÙŠØ©",
    "services.items.web.seo.title": "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ù…Ù† HDS",
    "services.items.web.shortDescription":
      "Ø®Ø¯Ù…Ø© ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ù…ØµÙ…Ù…Ø© Ù„Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØµÙŠØ§Ù†Ø©.",
    "services.items.web.subtitle":
      "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ø¨Ù…Ø³ØªÙˆÙ‰ Ø¥Ù†ØªØ§Ø¬ÙŠ ÙˆØ§Ø¶Ø­ ÙˆÙ‚Ø§Ø¨Ù„ Ù„Ù„Ù†Ù…Ùˆ.",
    "services.items.web.title": "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨",
    "services.listing.cta.description":
      "Ø´Ø§Ø±ÙƒÙ†Ø§ ØªØ­Ø¯ÙŠ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ ÙˆØ³Ù†Ø³Ø§Ø¹Ø¯Ùƒ ÙÙŠ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù†Ø·Ø§Ù‚ ÙˆØ§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙˆÙ…Ø³Ø§Ø± Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ù†Ø§Ø³Ø¨.",
    "services.listing.cta.title": "Ù‡Ù„ ØªØ­ØªØ§Ø¬ Ø®Ø·Ø© Ø®Ø¯Ù…Ø§Øª Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø£Ù‡Ø¯Ø§ÙÙƒØŸ",
    "services.listing.faq.description":
      "Ø¥Ø¬Ø§Ø¨Ø§Øª Ù…Ø®ØªØµØ±Ø© Ù„Ù„ÙØ±Ù‚ Ø§Ù„ØªÙŠ ØªØ±ÙŠØ¯ Ø¨Ø¯Ø¡ Ø®Ø¯Ù…Ø© ÙˆØ§Ø­Ø¯Ø© Ø£Ùˆ Ø¯Ù…Ø¬ Ø£ÙƒØ«Ø± Ù…Ù† Ù…Ø³Ø§Ø±.",
    "services.listing.faq.eyebrow": "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    "services.listing.faq.mix.answer":
      "Ù†Ø¹Ù…. ÙŠÙ…ÙƒÙ† Ø¯Ù…Ø¬ Ø§Ù„ÙˆÙŠØ¨ ÙˆØ§Ù„Ø¬ÙˆØ§Ù„ ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª Ø¶Ù…Ù† Ø®Ø§Ø±Ø·Ø© Ø·Ø±ÙŠÙ‚ ÙˆØ§Ø­Ø¯Ø©.",
    "services.listing.faq.mix.question": "Ù‡Ù„ ÙŠÙ…ÙƒÙ† Ø¯Ù…Ø¬ Ø£ÙƒØ«Ø± Ù…Ù† Ø®Ø¯Ù…Ø©ØŸ",
    "services.listing.faq.start.answer":
      "Ù†Ø¨Ø¯Ø£ Ø¹Ø§Ø¯Ø© Ø¨Ø§Ù„Ø§ÙƒØªØ´Ø§Ù Ø«Ù… Ù†ÙˆØµÙŠ Ø¨Ø£ØµØºØ± Ù…Ø²ÙŠØ¬ Ø®Ø¯Ù…Ø§Øª ÙŠÙ…ÙƒÙ†Ù‡ ØªØ­Ù‚ÙŠÙ‚ Ø§Ù„Ù‡Ø¯Ù Ø¨Ø£Ù…Ø§Ù†.",
    "services.listing.faq.start.question": "Ø£ÙŠ Ø®Ø¯Ù…Ø© Ù†Ø¨Ø¯Ø£ Ø¨Ù‡Ø§ØŸ",
    "services.listing.faq.support.answer":
      "Ù†Ø¹Ù…. ÙŠÙ…ÙƒÙ† Ù„Ù€ HDS Ø¯Ø¹Ù… Ø§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª ÙˆØ§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆØ§Ù„ØªØ­Ø³ÙŠÙ† ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "services.listing.faq.support.question": "Ù‡Ù„ ØªØ³ØªÙ…Ø±ÙˆÙ† Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚ØŸ",
    "services.listing.faq.title": "ÙƒÙŠÙ ØªØ¹Ù…Ù„ Ø§Ù„Ø®Ø¯Ù…Ø§Øª ÙÙŠ HDS.",
    "services.listing.hero.badge": "Ø®Ø¯Ù…Ø§Øª HDS",
    "services.listing.hero.imageAlt":
      "Ù…Ø¹Ø§ÙŠÙ†Ø© Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø®Ø¯Ù…Ø§Øª Ø¨Ø±Ù…Ø¬ÙŠØ© ÙˆØ³Ø­Ø§Ø¨ÙŠØ© Ù…Ø¤Ø³Ø³ÙŠØ©",
    "services.listing.hero.primary": "Ø§Ø¨Ø¯Ø£ Ù…Ø´Ø±ÙˆØ¹Ùƒ",
    "services.listing.hero.secondary": "Ø´Ø§Ù‡Ø¯ Ø§Ù„Ø¹Ù…Ù„ÙŠØ©",
    "services.listing.hero.subtitle":
      "ØªØ¬Ù…Ø¹ HDS Ø¨ÙŠÙ† Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù†Ø¶Ø¨Ø§Ø· Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙÙŠ ÙØ±ÙŠÙ‚ ÙˆØ§Ø­Ø¯ Ù…Ø³Ø¤ÙˆÙ„.",
    "services.listing.hero.title":
      "Ø®Ø¯Ù…Ø§Øª Ø±Ù‚Ù…ÙŠØ© ØªØ­ÙˆÙ„ Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© Ø¥Ù„Ù‰ Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ù…ÙˆØ«ÙˆÙ‚Ø©.",
    "services.listing.process.description":
      "ÙƒÙ„ Ù…Ø´Ø±ÙˆØ¹ ÙŠØ³ÙŠØ± Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ ÙˆØ§Ø¶Ø­: Ø§ÙƒØªØ´Ø§ÙØŒ ØªØµÙ…ÙŠÙ…ØŒ Ø¨Ù†Ø§Ø¡ØŒ Ø¥Ø·Ù„Ø§Ù‚ØŒ Ø«Ù… ØªØ­Ø³ÙŠÙ†.",
    "services.listing.process.eyebrow": "Ø¹Ù…Ù„ÙŠØ© Ø§Ù„ØªØ³Ù„ÙŠÙ…",
    "services.listing.process.title":
      "Ù†Ù…ÙˆØ°Ø¬ ØªØ³Ù„ÙŠÙ… ÙˆØ§Ø­Ø¯ ÙŠØªÙƒÙŠÙ Ù…Ø¹ ÙƒÙ„ Ø®Ø¯Ù…Ø©.",
    "services.listing.technologies.description":
      "ÙŠØ¬Ù…Ø¹ Ø§Ù„ÙƒØªØ§Ù„ÙˆØ¬ Ø¨ÙŠÙ† Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª ÙˆØ§Ù„Ø®Ù„ÙÙŠØ§Øª ÙˆØ§Ù„Ø¬ÙˆØ§Ù„ ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… ÙˆØ§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù„Ø£ØªÙ…ØªØ© ÙˆØ§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "services.listing.technologies.eyebrow": "Ø§Ù„ØªØºØ·ÙŠØ© Ø§Ù„ØªÙ‚Ù†ÙŠØ©",
    "services.listing.technologies.title": "Ø£Ø³Ø§Ø³ ØªÙ‚Ù†ÙŠ Ø­Ø¯ÙŠØ« Ù„ÙƒÙ„ Ø®Ø¯Ù…Ø©.",
    "services.notFound.action": "Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "services.notFound.description":
      "Ø§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø© Ø£Ùˆ Ø±Ø¨Ù…Ø§ ØªÙ… Ù†Ù‚Ù„Ù‡Ø§.",
    "services.notFound.title": "Ø§Ù„Ø®Ø¯Ù…Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©.",
    "services.process.build.description":
      "ØªÙ†ÙÙŠØ° Ù…Ø±Ø­Ù„ÙŠ Ù…Ø¹ Ù…Ø±Ø§Ø¬Ø¹Ø§Øª ÙˆØªØ­Ù‚Ù‚ ÙˆØ§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆÙˆØ¶ÙˆØ­ Ù…Ø³ØªÙ…Ø± ÙÙŠ Ø§Ù„ØªÙ‚Ø¯Ù….",
    "services.process.build.title": "Ø§Ù„Ø¨Ù†Ø§Ø¡",
    "services.process.design.description":
      "ØªØ´ÙƒÙŠÙ„ Ø§Ù„Ø±Ø­Ù„Ø§Øª ÙˆØ§Ù„Ø­Ø§Ù„Ø§Øª ÙˆØ­Ø¯ÙˆØ¯ Ø§Ù„Ù†Ø¸Ø§Ù… ÙˆØ£ÙˆÙ„ÙˆÙŠØ§Øª Ø§Ù„ØªØ³Ù„ÙŠÙ… Ù…Ù† Ø®Ù„Ø§Ù„ Ù†Ù…Ø§Ø°Ø¬ Ø¹Ù…Ù„ÙŠØ©.",
    "services.process.design.title": "Ø§Ù„ØªØµÙ…ÙŠÙ…",
    "services.process.discover.description":
      "ØªÙˆØ¶ÙŠØ­ Ø§Ù„Ø£Ù‡Ø¯Ø§Ù ÙˆØ§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØ³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ ÙˆØ§Ù„Ù‚ÙŠÙˆØ¯ ÙˆØ§Ù„ØªÙƒØ§Ù…Ù„Ø§Øª ÙˆÙ…Ø®Ø§Ø·Ø± Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚ Ù‚Ø¨Ù„ Ø§Ù„ØªÙ†ÙÙŠØ°.",
    "services.process.discover.title": "Ø§Ù„Ø§ÙƒØªØ´Ø§Ù",
    "services.process.launch.description":
      "ØªØ¬Ù‡ÙŠØ² Ø§Ù„Ù†Ø´Ø± ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª ÙˆØ§Ù„ØªÙˆØ«ÙŠÙ‚ ÙˆØ§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆØ®Ø·Ø© Ø§Ù„ØªØ­Ø³ÙŠÙ† Ø¨Ø¹Ø¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚.",
    "services.process.launch.title": "Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚",
    "navigation.contact": "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§",
    "seo.contact.title": "ØªÙˆØ§ØµÙ„ Ù…Ø¹ HDS",
    "seo.contact.description":
      "ØªØ­Ø¯Ø« Ù…Ø¹ HDS Ø­ÙˆÙ„ Ù…Ù†ØªØ¬ Ø£Ùˆ Ù…Ù†ØµØ© Ø£Ùˆ Ù…Ø¨Ø§Ø¯Ø±Ø© ØªØ­ÙˆÙ„ Ø±Ù‚Ù…ÙŠ. ÙŠØ±Ø¯ ÙØ±ÙŠÙ‚Ù†Ø§ Ø¨Ø®Ø·ÙˆØ© Ø¹Ù…Ù„ÙŠØ© ÙˆØ§Ø¶Ø­Ø©.",
    "seo.contact.keywords":
      "ØªÙˆØ§ØµÙ„ Ù…Ø¹ HDS, Ø§Ø³ØªÙØ³Ø§Ø± ØªØ·ÙˆÙŠØ± Ø¨Ø±Ù…Ø¬ÙŠØ§Øª, Ø§Ø³ØªØ´Ø§Ø±Ø© Ù…Ù†ØªØ¬ Ø±Ù‚Ù…ÙŠ, Ø´Ø±ÙŠÙƒ ØªÙ‚Ù†ÙŠ Ù…Ø¤Ø³Ø³ÙŠ",
    "contact.breadcrumb.label": "Ù…Ø³Ø§Ø± Ø§Ù„ØªÙ†Ù‚Ù„",
    "contact.breadcrumb.home": "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    "contact.breadcrumb.contact": "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§",
    "contact.hero.badge": "Ø§Ø¨Ø¯Ø£ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø©",
    "contact.hero.title": "Ù„Ù†Ø±Ø³Ù… Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠ Ø§Ù„Ø£Ù†Ø³Ø¨ Ù„Ø¹Ù…Ù„Ùƒ.",
    "contact.hero.subtitle":
      "Ø´Ø§Ø±Ùƒ Ù…Ø§ ØªØ¨Ù†ÙŠÙ‡ Ø£Ùˆ Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ ØªÙˆØ³Ø¹ Ø£Ùˆ Ù…Ø§ ÙŠØ¹ÙŠÙ‚ Ø§Ù„ØªÙ‚Ø¯Ù…. Ø³Ù†Ø³Ø§Ø¹Ø¯Ùƒ Ø¹Ù„Ù‰ ØªØ­ÙˆÙŠÙ„Ù‡ Ø¥Ù„Ù‰ Ø®Ø·Ø© ØªÙ‚Ù†ÙŠØ© ÙˆØ§Ø¶Ø­Ø©.",
    "contact.hero.primary": "Ø£Ø±Ø³Ù„ Ø§Ø³ØªÙØ³Ø§Ø±Ù‹Ø§",
    "contact.hero.secondary": "Ø±Ø§Ø³Ù„ ÙØ±ÙŠÙ‚ Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª",
    "contact.methods.eyebrow": "Ù‚Ù†ÙˆØ§Øª Ø§Ù„ØªÙˆØ§ØµÙ„",
    "contact.methods.title": "ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„ÙØ±ÙŠÙ‚ Ø§Ù„ØµØ­ÙŠØ­ Ù…Ù† Ø£ÙˆÙ„ Ø±Ø³Ø§Ù„Ø©.",
    "contact.methods.description":
      "Ø³ÙˆØ§Ø¡ ÙƒÙ†Øª ØªØ­ØªØ§Ø¬ Ù…Ù†ØªØ¬Ù‹Ø§ Ø¬Ø¯ÙŠØ¯Ù‹Ø§ Ø£Ùˆ Ø¯Ø¹Ù…Ù‹Ø§ ØªÙ‚Ù†ÙŠÙ‹Ø§ Ø£Ùˆ Ù†Ù‚Ø§Ø´Ù‹Ø§ Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠÙ‹Ø§ØŒ ÙŠØµÙ„ Ø·Ù„Ø¨Ùƒ Ø¥Ù„Ù‰ Ù‚Ù†Ø§Ø© HDS Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©.",
    "contact.methods.sales.title": "Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹",
    "contact.methods.sales.description":
      "Ù†Ø§Ù‚Ø´ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØ§Ù„Ù…Ù†ØµØ§Øª ÙˆØ§Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø£Ùˆ Ø´Ø±Ø§ÙƒØ§Øª Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰.",
    "contact.methods.sales.action": "ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª",
    "contact.methods.support.title": "Ø¯Ø¹Ù… Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡",
    "contact.methods.support.description":
      "Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ù…Ø³Ø§Ø¹Ø¯Ø© ÙÙŠ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ù†Ø´Ø·Ø© Ø£Ùˆ Ø£Ø³Ø¦Ù„Ø© Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø£Ùˆ Ø§Ù„Ù…ØªØ§Ø¨Ø¹Ø© Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©.",
    "contact.methods.support.action": "ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ø¯Ø¹Ù…",
    "contact.methods.email.title": "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¹Ø§Ù…",
    "contact.methods.email.description":
      "Ø£Ø±Ø³Ù„ Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø±ÙƒØ© Ø£Ùˆ Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ø´Ø±Ø§ÙƒØ© Ø£Ùˆ Ø§Ù„Ø³ÙŠØ§Ù‚ Ø§Ù„Ø£ÙˆÙ„ÙŠ Ù‚Ø¨Ù„ Ù…ÙƒØ§Ù„Ù…Ø© Ø§Ù„Ø§ÙƒØªØ´Ø§Ù.",
    "contact.methods.email.action": "Ø¥Ø±Ø³Ø§Ù„ Ø¨Ø±ÙŠØ¯",
    "contact.methods.phone.title": "Ù‡Ø§ØªÙ Ø§Ù„Ù…ÙƒØªØ¨",
    "contact.methods.phone.description":
      "ØªØ­Ø¯Ø« Ù…Ø¹ Ù…ÙƒØªØ¨ Ø¥Ù‚Ù„ÙŠÙ…ÙŠ Ù„Ù„ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø¹Ø§Ø¬Ù„ Ø£Ùˆ Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø© Ø§Ù„Ù…Ø¬Ø¯ÙˆÙ„Ø©.",
    "contact.methods.phone.action": "Ø§ØªØµÙ„ Ø¨Ø§Ù„Ù…ÙƒØªØ¨",
    "contact.offices.eyebrow": "Ø­Ø¶ÙˆØ± Ø¥Ù‚Ù„ÙŠÙ…ÙŠ",
    "contact.offices.title":
      "Ù…ÙƒØ§ØªØ¨ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ø¥Ù‚Ù„ÙŠÙ…ÙŠ ÙˆØ§Ù„Ø¹Ø§Ù„Ù…ÙŠ.",
    "contact.offices.description":
      "ØªØ¹Ù…Ù„ HDS Ø¹Ø¨Ø± Ø£Ø³ÙˆØ§Ù‚ Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© Ù…Ø¹ Ù…Ù…Ø§Ø±Ø³Ø§Øª ØªØ³Ù„ÙŠÙ… Ù…ÙˆØ²Ø¹Ø© ÙˆÙ†ÙˆØ§ÙØ° ØªÙˆØ§ØµÙ„ ÙˆØ§Ø¶Ø­Ø©.",
    "contact.map.eyebrow": "Ù†Ø¸Ø±Ø© Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙˆØ§Ù‚Ø¹",
    "contact.map.title": "Ø·Ø¨Ù‚Ø© Ù…ÙƒØ§ØªØ¨ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø±Ø¨Ø· Ø§Ù„Ø­ÙŠ Ù…Ø³ØªÙ‚Ø¨Ù„Ù‹Ø§.",
    "contact.map.description":
      "Ø¥Ø­Ø¯Ø§Ø«ÙŠØ§Øª Ø§Ù„Ù…ÙƒØ§ØªØ¨ ØªØ£ØªÙŠ Ø§Ù„ÙŠÙˆÙ… Ù…Ù† Company Domain ÙˆÙŠÙ…ÙƒÙ†Ù‡Ø§ Ù„Ø§Ø­Ù‚Ù‹Ø§ ØªØ´ØºÙŠÙ„ Google Maps Ø£Ùˆ Mapbox Ø£Ùˆ Ù…Ø­Ø¯Ø¯ Ù…ÙˆØ§Ù‚Ø¹ Ù…Ø®ØµØµ Ø¯ÙˆÙ† ØªØºÙŠÙŠØ± Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„ØµÙØ­Ø©.",
    "contact.map.action": "Ø§ÙØªØ­ Ø§Ù„Ø®Ø±ÙŠØ·Ø©",
    "contact.form.eyebrow": "Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„ØªÙˆØ§ØµÙ„",
    "contact.form.title": "Ø£Ø®Ø¨Ø±Ù†Ø§ Ø¨Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬Ù‡Ø§.",
    "contact.form.description":
      "ÙƒÙ„Ù…Ø§ Ø´Ø§Ø±ÙƒØª Ø³ÙŠØ§Ù‚Ù‹Ø§ Ø£ÙˆØ¶Ø­ØŒ Ø§Ø³ØªØ·Ø¹Ù†Ø§ Ø§Ù‚ØªØ±Ø§Ø­ Ø§Ù„ÙØ±ÙŠÙ‚ ÙˆØ§Ù„Ø¬Ø¯ÙˆÙ„ ÙˆÙ†Ù‡Ø¬ Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ø£Ù†Ø³Ø¨ Ø¨Ø³Ø±Ø¹Ø© Ø£ÙƒØ¨Ø±.",
    "contact.form.fields.fullName": "Ø§Ù„Ø§Ø³Ù… Ø§Ù„ÙƒØ§Ù…Ù„",
    "contact.form.fields.company": "Ø§Ù„Ø´Ø±ÙƒØ©",
    "contact.form.fields.email": "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
    "contact.form.fields.phone": "Ø§Ù„Ù‡Ø§ØªÙ",
    "contact.form.fields.country": "Ø§Ù„Ø¯ÙˆÙ„Ø©",
    "contact.form.fields.industry": "Ø§Ù„Ù‚Ø·Ø§Ø¹",
    "contact.form.fields.service": "Ø§Ù„Ø®Ø¯Ù…Ø©",
    "contact.form.fields.budget": "Ù†Ø·Ø§Ù‚ Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ©",
    "contact.form.fields.timeline": "Ø§Ù„Ø¬Ø¯ÙˆÙ„ Ø§Ù„Ø²Ù…Ù†ÙŠ",
    "contact.form.fields.message": "Ø±Ø³Ø§Ù„Ø© Ø§Ù„Ù…Ø´Ø±ÙˆØ¹",
    "contact.form.fields.newsletterOptIn":
      "Ø£Ø±Ø³Ù„ÙˆØ§ Ù„ÙŠ Ù…Ù† Ø­ÙŠÙ† Ù„Ø¢Ø®Ø± Ø±Ø¤Ù‰ HDS Ø­ÙˆÙ„ Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ§Ù„ØªØ­ÙˆÙ„ Ø§Ù„Ø±Ù‚Ù…ÙŠ.",
    "contact.form.placeholders.fullName": "Ø§Ø³Ù…Ùƒ",
    "contact.form.placeholders.company": "Ø§Ù„Ø´Ø±ÙƒØ© Ø£Ùˆ Ø§Ù„Ù…Ø¤Ø³Ø³Ø©",
    "contact.form.placeholders.email": "you@company.com",
    "contact.form.placeholders.phone": "+20 100 000 0000",
    "contact.form.placeholders.country": "Ø§Ø®ØªØ± Ø§Ù„Ø¯ÙˆÙ„Ø©",
    "contact.form.placeholders.industry": "Ø§Ø®ØªØ± Ø§Ù„Ù‚Ø·Ø§Ø¹",
    "contact.form.placeholders.service": "Ø§Ø®ØªØ± Ø§Ù„Ø®Ø¯Ù…Ø©",
    "contact.form.placeholders.budget": "Ø§Ø®ØªØ± Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ©",
    "contact.form.placeholders.timeline": "Ø§Ø®ØªØ± Ø§Ù„Ø¬Ø¯ÙˆÙ„ Ø§Ù„Ø²Ù…Ù†ÙŠ",
    "contact.form.placeholders.message":
      "ØµÙ Ø§Ù„Ù…Ù†ØªØ¬ Ø£Ùˆ Ø§Ù„ØªØ­Ø¯ÙŠ Ø£Ùˆ Ø§Ù„Ø£Ù‡Ø¯Ø§Ù Ø£Ùˆ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø£Ùˆ Ø§Ù„ØªÙƒØ§Ù…Ù„Ø§Øª Ø£Ùˆ Ø§Ù„Ø¬Ø¯ÙˆÙ„ Ø§Ù„Ø²Ù…Ù†ÙŠ Ø§Ù„Ø°ÙŠ ØªÙÙƒØ± ÙÙŠÙ‡.",
    "contact.form.actions.submit": "Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø§Ø³ØªÙØ³Ø§Ø±",
    "contact.form.actions.retry": "Ø­Ø§ÙˆÙ„ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰",
    "contact.form.status.successTitle": "ØªÙ… Ø§Ø³ØªÙ„Ø§Ù… Ø§Ù„Ø§Ø³ØªÙØ³Ø§Ø±",
    "contact.form.status.successDescription":
      "Ø´ÙƒØ±Ù‹Ø§ Ù„Ùƒ. Ø³ÙŠØ±Ø§Ø¬Ø¹ ÙØ±ÙŠÙ‚ HDS Ø·Ù„Ø¨Ùƒ ÙˆÙŠØ±Ø¯ Ø¨Ø®Ø·ÙˆØ© Ø¹Ù…Ù„ÙŠØ© ØªØ§Ù„ÙŠØ©.",
    "contact.form.status.errorTitle": "ÙØ´Ù„ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„",
    "contact.form.status.errorDescription":
      "ØªØ¹Ø°Ø± Ø¥Ø±Ø³Ø§Ù„ Ø§Ø³ØªÙØ³Ø§Ø±Ùƒ Ø§Ù„Ø¢Ù†. ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ø§ØªØµØ§Ù„ ÙˆØ§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.",
    "contact.form.errors.required": "Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ Ù…Ø·Ù„ÙˆØ¨.",
    "contact.form.errors.email": "Ø£Ø¯Ø®Ù„ Ø¨Ø±ÙŠØ¯Ù‹Ø§ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠÙ‹Ø§ ØµØ­ÙŠØ­Ù‹Ø§.",
    "contact.form.errors.phone": "Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ù‡Ø§ØªÙ ØµØ­ÙŠØ­Ù‹Ø§.",
    "contact.form.errors.maxLength": "Ù‡Ø°Ù‡ Ø§Ù„Ù‚ÙŠÙ…Ø© Ø·ÙˆÙŠÙ„Ø© Ø¬Ø¯Ù‹Ø§.",
    "contact.form.errors.maxMessage": "ÙŠØ±Ø¬Ù‰ Ø¥Ø¨Ù‚Ø§Ø¡ Ø§Ù„Ø±Ø³Ø§Ù„Ø© Ø£Ù‚Ù„ Ù…Ù† 1200 Ø­Ø±Ù.",
    "contact.options.country.egypt": "Ù…ØµØ±",
    "contact.options.country.uae": "Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©",
    "contact.options.country.saudiArabia": "Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
    "contact.options.country.usa": "Ø§Ù„ÙˆÙ„Ø§ÙŠØ§Øª Ø§Ù„Ù…ØªØ­Ø¯Ø©",
    "contact.options.country.germany": "Ø£Ù„Ù…Ø§Ù†ÙŠØ§",
    "contact.options.country.other": "Ø£Ø®Ø±Ù‰",
    "contact.options.industry.healthcare": "Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„ØµØ­ÙŠØ©",
    "contact.options.industry.fintech": "Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ©",
    "contact.options.industry.ecommerce": "Ø§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©",
    "contact.options.industry.logistics": "Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ©",
    "contact.options.industry.education": "Ø§Ù„ØªØ¹Ù„ÙŠÙ…",
    "contact.options.industry.realEstate": "Ø§Ù„Ø¹Ù‚Ø§Ø±Ø§Øª",
    "contact.options.industry.manufacturing": "Ø§Ù„ØªØµÙ†ÙŠØ¹",
    "contact.options.industry.saas": "SaaS",
    "contact.options.industry.other": "Ø£Ø®Ø±Ù‰",
    "contact.options.service.webDevelopment": "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨",
    "contact.options.service.mobileDevelopment": "ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„",
    "contact.options.service.uiUxDesign": "ØªØµÙ…ÙŠÙ… UI/UX",
    "contact.options.service.cloudSolutions": "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨Ø©",
    "contact.options.service.productStrategy": "Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© Ø§Ù„Ù…Ù†ØªØ¬",
    "contact.options.service.notSure": "Ù„Ø³Øª Ù…ØªØ£ÙƒØ¯Ù‹Ø§ Ø¨Ø¹Ø¯",
    "contact.options.budget.under25k": "Ø£Ù‚Ù„ Ù…Ù† 25 Ø£Ù„Ù Ø¯ÙˆÙ„Ø§Ø±",
    "contact.options.budget.from25kTo50k": "25 Ø£Ù„Ù-50 Ø£Ù„Ù Ø¯ÙˆÙ„Ø§Ø±",
    "contact.options.budget.from50kTo100k": "50 Ø£Ù„Ù-100 Ø£Ù„Ù Ø¯ÙˆÙ„Ø§Ø±",
    "contact.options.budget.over100k": "Ø£ÙƒØ«Ø± Ù…Ù† 100 Ø£Ù„Ù Ø¯ÙˆÙ„Ø§Ø±",
    "contact.options.budget.notSure": "Ù„Ø³Øª Ù…ØªØ£ÙƒØ¯Ù‹Ø§ Ø¨Ø¹Ø¯",
    "contact.options.timeline.asap": "ÙÙŠ Ø£Ù‚Ø±Ø¨ ÙˆÙ‚Øª Ù…Ù…ÙƒÙ†",
    "contact.options.timeline.oneToThree": "1-3 Ø£Ø´Ù‡Ø±",
    "contact.options.timeline.threeToSix": "3-6 Ø£Ø´Ù‡Ø±",
    "contact.options.timeline.sixPlus": "Ø£ÙƒØ«Ø± Ù…Ù† 6 Ø£Ø´Ù‡Ø±",
    "contact.options.timeline.notSure": "Ù„Ø³Øª Ù…ØªØ£ÙƒØ¯Ù‹Ø§ Ø¨Ø¹Ø¯",
    "contact.faq.eyebrow": "Ø£Ø³Ø¦Ù„Ø© Ø§Ù„ØªÙˆØ§ØµÙ„",
    "contact.faq.title": "Ø¨Ø¹Ø¶ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ù‚Ø¨Ù„ Ø£Ù† Ù†ØªØ­Ø¯Ø«.",
    "contact.faq.description":
      "ØªØ³Ø§Ø¹Ø¯ Ù‡Ø°Ù‡ Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø§Øª ÙÙŠ Ø¶Ø¨Ø· Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ù‚Ø¨Ù„ Ù…ÙƒØ§Ù„Ù…Ø© Ø§Ù„Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ø£ÙˆÙ„Ù‰.",
    "contact.faq.responseTime.question": "Ù…Ø§ Ø³Ø±Ø¹Ø© Ø±Ø¯ HDSØŸ",
    "contact.faq.responseTime.answer":
      "ØªØªÙ„Ù‚Ù‰ Ù…Ø¹Ø¸Ù… Ø§Ù„Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø¤Ù‡Ù„Ø© Ø±Ø¯Ù‹Ø§ Ø®Ù„Ø§Ù„ ÙŠÙˆÙ… Ø¹Ù…Ù„ ÙˆØ§Ø­Ø¯ØŒ Ù…Ø¹ ØªÙˆØ¬ÙŠÙ‡ Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„Ø¹Ø§Ø¬Ù„Ø© Ø¨Ø³Ø±Ø¹Ø© Ø£ÙƒØ¨Ø±.",
    "contact.faq.nda.question":
      "Ù‡Ù„ ÙŠÙ…ÙƒÙ† Ù…Ù†Ø§Ù‚Ø´Ø© Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ØªØ­Øª Ø§ØªÙØ§Ù‚ÙŠØ© Ø³Ø±ÙŠØ©ØŸ",
    "contact.faq.nda.answer":
      "Ù†Ø¹Ù…. ÙŠÙ…ÙƒÙ†Ù†Ø§ ØªÙˆÙ‚ÙŠØ¹ Ø§ØªÙØ§Ù‚ÙŠØ© Ø³Ø±ÙŠØ© Ù‚Ø¨Ù„ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø£ÙŠ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø£Ø¹Ù…Ø§Ù„ Ø£Ùˆ ØªÙ‚Ù†ÙŠØ© Ø£Ùˆ Ù…Ù†ØªØ¬ Ø­Ø³Ø§Ø³Ø©.",
    "contact.faq.handover.question":
      "Ù‡Ù„ ÙŠÙ…ÙƒÙ† Ù„Ù€ HDS Ø§Ù„Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ù…Ù†ØªØ¬ Ø£Ùˆ Ù‚Ø§Ø¹Ø¯Ø© ÙƒÙˆØ¯ Ù…ÙˆØ¬ÙˆØ¯Ø©ØŸ",
    "contact.faq.handover.answer":
      "Ù†Ø¹Ù…. ÙŠÙ…ÙƒÙ†Ù†Ø§ ØªØ¯Ù‚ÙŠÙ‚ Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø­Ø§Ù„ÙŠØ© Ø£Ùˆ ØªØ«Ø¨ÙŠØª Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø£Ùˆ ØªØ­Ø¯ÙŠØ« Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ø£Ùˆ ØªÙˆØ³ÙŠØ¹ Ø®Ø§Ø±Ø·Ø© Ø·Ø±ÙŠÙ‚ Ù…Ù†ØªØ¬ Ù†Ø´Ø·.",
    "contact.cta.title": "ØªÙØ¶Ù„ Ø§Ù„Ø¨Ø¯Ø¡ Ù…Ù† Ø·Ø¨ÙŠØ¹Ø© Ø§Ù„Ø¹Ù…Ù„ Ù†ÙØ³Ù‡ØŸ",
    "contact.cta.description":
      "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„ØªÙŠ ÙŠÙ…ÙƒÙ† Ù„Ù€ HDS ØªØ¬Ù…ÙŠØ¹Ù‡Ø§ Ø­ÙˆÙ„ Ù…Ù†ØªØ¬ÙƒØŒ Ø«Ù… Ø£Ø±Ø³Ù„ Ù„Ù„ÙØ±ÙŠÙ‚ Ø§Ù„Ø³ÙŠØ§Ù‚ Ø§Ù„Ø¯Ù‚ÙŠÙ‚ Ø§Ù„Ø°ÙŠ ØªØ±ÙŠØ¯ Ù…Ù†Ø§Ù‚Ø´ØªÙ‡.",
    "contact.cta.primary": "Ø§Ø¨Ø¯Ø£ Ø§Ø³ØªÙØ³Ø§Ø±Ù‹Ø§",
    "contact.cta.secondary": "Ø¹Ø±Ø¶ Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
  },
};
