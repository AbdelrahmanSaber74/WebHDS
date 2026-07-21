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

    "home.hero.eyebrow": "",
    "home.hero.title": "Software platforms engineered for scale, clarity, and growth.",
    "home.hero.description":
      "We design and build enterprise platforms, web and mobile applications, ERP and CRM systems, cloud infrastructure, and AI-powered workflows for organizations that depend on software to operate and grow.",
    "home.hero.primaryCta": "Start a project",
    "home.hero.secondaryCta": "Explore services",
    "home.hero.imageAlt":
      "Enterprise software dashboard with operational metrics and product workflows",
    "home.hero.trust.engineering": "Senior engineering team",
    "home.hero.trust.security": "Security-aware delivery",
    "home.hero.trust.delivery": "Launch-ready execution",
    "home.hero.floating.title": "Delivery command center",
    "home.hero.floating.description":
      "Product, architecture, cloud, and release planning aligned before development starts.",
    "home.hero.floating.metric": "platform reliability mindset",

    "home.clients.eyebrow": "Industries We Build For",
    "home.clients.title": "Placeholder client logos until real client approvals are available.",
    "home.clients.description":
      "The marquee is configurable and ready to replace with approved customer logos without changing the layout.",
    "home.clients.sampleBadge": "Sample product",
    "home.clients.cta.caseStudy": "Explore case study",
    "home.clients.cta.learnMore": "Learn more",
    "home.clients.fintech.title": "FinTech",
    "home.clients.fintech.product": "نوفا باي أوبس",
    "home.clients.fintech.description":
      "A payment operations cockpit for risk review, settlements, approvals, and finance visibility.",
    "home.clients.fintech.type": "Digital Payment Platform",
    "home.clients.fintech.capabilities.wallet": "Wallet",
    "home.clients.fintech.capabilities.kyc": "KYC",
    "home.clients.fintech.capabilities.payments": "Payments",
    "home.clients.fintech.kpi": "regulated uptime",
    "home.clients.healthcare.title": "Healthcare",
    "home.clients.healthcare.product": "ميد كور فلو",
    "home.clients.healthcare.description":
      "A care coordination platform connecting patient intake, clinical tasks, and reporting.",
    "home.clients.healthcare.type": "Hospital Management Platform",
    "home.clients.healthcare.capabilities.records": "Patient records",
    "home.clients.healthcare.capabilities.appointments": "Appointments",
    "home.clients.healthcare.capabilities.diagnosis": "AI diagnosis",
    "home.clients.healthcare.kpi": "patients supported",
    "home.clients.commerce.title": "E-Commerce",
    "home.clients.commerce.product": "ريتيل أو إس ستوديو",
    "home.clients.commerce.description":
      "A commerce control layer for catalogs, orders, campaigns, inventory, and customer journeys.",
    "home.clients.commerce.type": "Commerce Operations Suite",
    "home.clients.commerce.capabilities.catalog": "Catalog",
    "home.clients.commerce.capabilities.orders": "Orders",
    "home.clients.commerce.capabilities.inventory": "Inventory",
    "home.clients.commerce.kpi": "faster fulfillment",
    "home.clients.logistics.title": "Logistics",
    "home.clients.logistics.product": "فليت بالس لايف",
    "home.clients.logistics.description":
      "A delivery operations workspace for dispatch, route visibility, fleet status, and SLA tracking.",
    "home.clients.logistics.type": "Fleet Operations Platform",
    "home.clients.logistics.capabilities.dispatch": "Dispatch",
    "home.clients.logistics.capabilities.routes": "Live routes",
    "home.clients.logistics.capabilities.sla": "SLA tracking",
    "home.clients.logistics.kpi": "operations visibility",
    "home.clients.education.title": "Education",
    "home.clients.education.product": "ليرن سفير هب",
    "home.clients.education.description":
      "A learning platform for cohorts, content, assessments, progress analytics, and student support.",
    "home.clients.education.type": "Learning Experience Platform",
    "home.clients.education.capabilities.cohorts": "Cohorts",
    "home.clients.education.capabilities.assessments": "Assessments",
    "home.clients.education.capabilities.analytics": "Analytics",
    "home.clients.education.kpi": "course completion",

    "home.services.eyebrow": "Services preview",
    "home.services.title": "One accountable team for strategy, design, engineering, cloud, and AI.",
    "home.services.description":
      "From product strategy to cloud deployment, HDS builds the systems companies need to launch, modernize, and scale.",
    "home.services.customSoftware.title": "Custom Software",
    "home.services.customSoftware.description":
      "Tailored platforms designed around your workflows, data, integrations, and operating model.",
    "home.services.webApps.title": "Web Applications",
    "home.services.webApps.description":
      "Secure, responsive, high-performance web apps with polished product experiences.",
    "home.services.mobileApps.title": "Mobile Apps",
    "home.services.mobileApps.description":
      "Release-ready mobile apps connected to reliable APIs, analytics, and cloud services.",
    "home.services.enterprise.title": "ERP and CRM Systems",
    "home.services.enterprise.description":
      "Operational systems that connect teams, automate approvals, and improve visibility.",
    "home.services.cloud.title": "Cloud and DevOps",
    "home.services.cloud.description":
      "Cloud infrastructure, CI/CD, observability, reliability planning, and cost-aware operations.",
    "home.services.ai.title": "AI Solutions",
    "home.services.ai.description":
      "Practical AI assistants, automation workflows, retrieval systems, and decision-support tools.",

    "home.technologies.eyebrow": "Technology foundation",
    "home.technologies.title":
      "Modern tools selected for performance, security, and maintainability.",
    "home.technologies.description":
      "We choose proven technologies that help teams move quickly without creating fragile systems.",
    "home.technologies.groups.product": "Product engineering",
    "home.technologies.groups.cloud": "Cloud operations",
    "home.technologies.groups.data": "Data and payments",
    "home.technologies.groups.experience": "Experience systems",

    "home.why.eyebrow": "Why HDS",
    "home.why.title": "Senior execution without the noise.",
    "home.why.description":
      "HDS combines architecture, security, scalability, and long-term partnership into one dependable delivery model.",
    "home.why.business.title": "Business-first architecture",
    "home.why.business.description":
      "Systems are designed around growth, integrations, governance, and maintainability.",
    "home.why.security.title": "Secure by default",
    "home.why.security.description":
      "Access, data flow, validation, and deployment practices are treated as core product concerns.",
    "home.why.delivery.title": "Transparent delivery",
    "home.why.delivery.description":
      "We build platforms that can evolve without forcing a rebuild every year.",
    "home.why.partner.title": "Long-term product partner",
    "home.why.partner.description":
      "After launch, we help teams improve reliability, adoption, performance, and new releases.",

    "home.process.eyebrow": "Process",
    "home.process.title": "A calm operating model from idea to optimization.",
    "home.process.description":
      "Every project follows a disciplined workflow that keeps scope, quality, and delivery visible.",
    "home.process.discovery.title": "Discovery",
    "home.process.discovery.description":
      "Clarify goals, users, constraints, integrations, risks, and the business outcome before delivery begins.",
    "home.process.planning.title": "Planning",
    "home.process.planning.description":
      "Shape scope, priorities, architecture, delivery milestones, ownership, and the release path.",
    "home.process.discover.title": "Discover",
    "home.process.discover.description":
      "Clarify objectives, users, constraints, integrations, risks, and the business case behind the work.",
    "home.process.architect.title": "Architect",
    "home.process.architect.description":
      "Define the delivery plan, system boundaries, data model, technical stack, security model, and roadmap.",
    "home.process.design.title": "Design",
    "home.process.design.description":
      "Design product flows, interface states, content hierarchy, and reusable patterns.",
    "home.process.development.title": "Development",
    "home.process.development.description":
      "Build the product in focused increments with clean code, reviews, integrations, and visible progress.",
    "home.process.testing.title": "Testing",
    "home.process.testing.description":
      "Validate functionality, accessibility, performance, security, integrations, and release readiness.",
    "home.process.deployment.title": "Deployment",
    "home.process.deployment.description":
      "Release with CI/CD, monitoring, analytics, documentation, rollback planning, and team handover.",
    "home.process.support.title": "Support",
    "home.process.support.description":
      "Improve reliability, adoption, performance, and future product releases after launch.",
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
      "Sample testimonials that reflect the kind of delivery experience HDS is built to provide.",
    "home.testimonials.rating": "Trusted delivery",
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
    "home.faq.title": "Important Questions",
    "home.faq.description":
      "Everything you need to know about our premium digital and software development services.",
    "home.faq.customSystem.title": "Can you program a fully custom website or system?",
    "home.faq.customSystem.content":
      "Yes, we specialize in custom programming, designing high-efficiency enterprise platforms, custom web apps, and mobile applications tailored to your business operations.",
    "home.faq.ecommerce.title":
      "Do your services support building fully integrated e-commerce stores?",
    "home.faq.ecommerce.content":
      "Yes, we build integrated e-commerce systems complete with payment gateways, shipping methods, and affiliate systems to ensure a smooth, scalable shopping experience.",
    "home.faq.payment.title": "Are electronic payment options integrated into the platforms?",
    "home.faq.payment.content":
      "Yes, we integrate diverse local and global payment gateways including bank transfers, credit cards, and instant payment networks.",
    "home.faq.uiux.title": "How is the UI/UX design of the website determined?",
    "home.faq.uiux.content":
      "Our dedicated UI/UX engineering team works closely with you to design unique, high-performance interfaces tailored to your brand identity and optimized for conversion and usability.",
    "home.faq.performance.title": "How do you guarantee website performance and speed?",
    "home.faq.performance.content":
      "We deploy systems on high-performance cloud servers (VPS), optimize database queries and core code, configure CDNs, monitor uptime, and maintain automated daily backups.",
    "home.faq.technicalSeo.title":
      "Does the custom software comply with search engine standards (SEO)?",
    "home.faq.technicalSeo.content":
      "Yes, we build systems with clean semantic HTML, fast loading speeds, structured schema data, and technical SEO optimizations to ensure rapid indexing and search engine visibility.",
    "home.faq.branding.title": "How important is the visual identity of a web product?",
    "home.faq.branding.content":
      "Visual identity is your unique digital stamp. We ensure consistent typography, icons, and layout structure to create a professional brand presence that builds immediate trust.",
    "home.faq.maintenance.title": "Do you offer post-launch technical support and updates?",
    "home.faq.maintenance.content":
      "Yes, we provide ongoing post-launch technical support, system monitoring, security updates, and feature expansions to ensure your platform scales with your business.",

    "home.cta.title": "Ready to build a platform your business can depend on?",
    "home.cta.description":
      "Tell us what you need to launch, modernize, automate, or scale. HDS will help turn it into a clear technical plan.",
    "home.cta.primary": "Book a consultation",
    "home.cta.secondary": "Email HDS",
    "home.cta.trust.discovery": "Structured discovery before delivery starts",
    "home.cta.trust.architecture": "Architecture decisions documented clearly",
    "home.cta.trust.delivery": "Launch, handover, and iteration planned from day one",
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
    "company.contact.phones.main": "Saudi Arabia",
    "company.contact.phones.office": "Egypt",
    "company.contact.sales": "Sales",
    "company.contact.support": "Support",
    "company.contact.careers": "Careers",
    "company.footer.contact": "Contact",
    "company.footer.copyright": "© 2026 HDS. All rights reserved.",
    "company.footer.offices": "Offices",
    "company.footer.social": "Social",
    "company.leadership.ceo.bio":
      "Leads the company vision, client partnerships, and overall business direction.",
    "company.leadership.ceo.role": "Chief Executive Officer",
    "company.leadership.cto.bio":
      "Oversees engineering standards, architecture quality, and delivery discipline.",
    "company.leadership.cto.role": "Chief Technology Officer",
    "company.leadership.title": "Leadership",
    "company.offices.riyadh.address": "Al-Olaya St, Riyadh, Saudi Arabia",
    "company.offices.riyadh.city": "Riyadh",
    "company.offices.riyadh.country": "Saudi Arabia",
    "company.offices.riyadh.hours": "Saturday to Thursday, 9:00 AM to 6:00 PM",
    "company.offices.mansoura.address": "Aljamah, Mansoura, Egypt",
    "company.offices.mansoura.city": "Mansoura",
    "company.offices.mansoura.country": "Egypt",
    "company.offices.mansoura.hours": "Saturday to Thursday, 9:00 AM to 6:00 PM",
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
    "home.about.eyebrow": "About HDS",
    "home.about.title": "Building software that helps businesses grow with confidence.",
    "home.about.description":
      "HDS is an engineering partner for companies that need reliable digital products, not short-lived screens. We shape every platform around business outcomes, operational clarity, and long-term ownership.",
    "home.about.body":
      "Our teams combine product thinking, clean architecture, secure delivery, and continuous improvement so your software can keep moving as the business changes.",
    "home.about.cta": "Learn More About HDS",
    "home.about.highlights.engineering.title": "Engineering Quality",
    "home.about.highlights.engineering.description":
      "Senior delivery practices, maintainable architecture, and quality gates from the first sprint.",
    "home.about.highlights.security.title": "Security and Reliability",
    "home.about.highlights.security.description":
      "Access, data flow, validation, and deployment decisions are treated as core product concerns.",
    "home.about.highlights.scalable.title": "Scalable Systems",
    "home.about.highlights.scalable.description":
      "Platforms are planned for growth, integrations, performance, and future product expansion.",
    "home.about.highlights.partnership.title": "Long-Term Partnership",
    "home.about.highlights.partnership.description":
      "After launch, HDS helps improve reliability, adoption, automation, and the next release roadmap.",
    "home.about.mockup.badge": "Enterprise software view",
    "home.about.mockup.title": "Delivery command center",
    "home.about.mockup.status": "Production ready",
    "home.about.mockup.live": "Live release health",
    "home.about.mockup.metric": "signal",
    "home.about.mockup.checks.delivery": "Visible delivery governance",
    "home.about.mockup.checks.quality": "Quality gates before release",
    "home.services.learnMore": "Learn more",
    "home.process.cta": "Start your project",
    "home.clients.logos.atlas": "AtlasGov",
    "home.clients.logos.medcore": "MedCore",
    "home.clients.logos.novapay": "NovaPay",
    "home.clients.logos.retailos": "RetailOS",
    "home.clients.logos.fleetpulse": "FleetPulse",
    "home.clients.logos.learnsphere": "LearnSphere",
    "home.clients.logos.estateos": "EstateOS",
    "home.clients.logos.factorygrid": "FactoryGrid",
    "home.testimonials.operations.company": "AtlasGov",
    "home.testimonials.product.company": "NovaPay",
    "home.testimonials.growth.company": "RetailOS",
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
    "contact.repository.submissionFailed": "We could not submit your inquiry right now.",
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
    "contact.options.budget.under5k": "Under $5k",
    "contact.options.budget.from5kTo10k": "$5k-$10k",
    "contact.options.budget.from10kTo25k": "$10k-$25k",
    "contact.options.budget.over25k": "Over $25k",
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
    "common.actions.backHome": "العودة للرئيسية",
    "common.actions.reload": "إعادة تحميل الصفحة",
    "common.actions.skipToContent": "تجاوز إلى المحتوى",
    "navigation.home": "الرئيسية",
    "navigation.about": "عن الشركة",
    "navigation.services": "الخدمات",
    "navigation.menu": "التنقل الرئيسي",
    "navigation.close": "إغلاق التنقل",
    "navigation.search": "البحث في HDS",
    "navigation.language": "اللغة",
    "navigation.theme": "تبديل المظهر",
    "navigation.cta": "ابدأ مشروعك",
    "navigation.locale.en": "EN",
    "navigation.locale.ar": "AR",
    "company.footer.services": "الخدمات",
    "company.footer.certifications": "الاعتمادات",
    "company.footer.newsletter.title": "ملاحظات التسليم الرقمي",
    "company.footer.newsletter.description":
      "رؤى حول البرمجيات والسحابة والذكاء الاصطناعي وتسليم المنتجات المؤسسية.",
    "company.footer.newsletter.inputLabel": "البريد الإلكتروني",
    "company.footer.newsletter.placeholder": "work@company.com",
    "company.footer.newsletter.submit": "اشترك",
    "company.footer.legal.privacy": "الخصوصية",
    "company.footer.legal.terms": "الشروط",
    "company.contact.emails.general": "عام",
    "company.contact.emails.info": "معلومات",
    "company.contact.phones.main": "السعودية",
    "company.contact.phones.office": "مصر",
    "company.contact.sales": "المبيعات",
    "company.contact.support": "الدعم",
    "company.contact.careers": "الوظائف",
    "errors.application.description":
      "تم تفعيل واجهة آمنة بديلة. يرجى إعادة تحميل الصفحة أو المحاولة بعد قليل.",
    "errors.application.eyebrow": "خطأ في التطبيق",
    "errors.application.title": "حدث خطأ غير متوقع.",
    "errors.notFound.description": "الصفحة المطلوبة غير موجودة أو ربما تم نقلها.",
    "errors.notFound.eyebrow": "404",
    "errors.notFound.title": "الصفحة غير موجودة.",
    "seo.error.description": "حدث خطأ قابل للاسترداد داخل التطبيق.",
    "seo.error.keywords": "HDS, خطأ في التطبيق",
    "seo.error.title": "خطأ في التطبيق",
    "seo.home.description":
      "HDS تطور حلول برمجيات وسحابة وذكاء اصطناعي وتحول رقمي للشركات الطموحة.",
    "seo.home.keywords":
      "HDS, شركة برمجيات, تحول رقمي, برمجيات مخصصة, حلول ذكاء اصطناعي, سحابة, DevOps, SaaS",
    "seo.home.title": "شركة تحول رقمي احترافية",
    "navigation.portfolio": "الأعمال",
    "seo.portfolio.title": "الأعمال ودراسات الحالة",
    "seo.portfolio.description":
      "استكشف دراسات حالة تجريبية من HDS عبر الرعاية الصحية والتقنيات المالية والتجارة واللوجستيات والتعليم والعقارات والتصنيع ومنصات التوصيل.",
    "seo.portfolio.keywords": "أعمال HDS, دراسات حالة, مشاريع برمجية, تحول رقمي, هندسة منتجات",
    "portfolio.breadcrumb.label": "مسار التنقل",
    "portfolio.breadcrumb.home": "الرئيسية",
    "portfolio.breadcrumb.portfolio": "الأعمال",
    "portfolio.hero.badge": "الأعمال ودراسات الحالة",
    "portfolio.hero.title": "دليل عملي على أن البرمجيات القوية تغير طريقة عمل الشركة.",
    "portfolio.hero.subtitle":
      "مجموعة مختارة من مشاريع تجريبية توضح مستوى التفكير المنتج والانضباط الهندسي والنتائج القابلة للقياس التي صممت HDS لتقديمها.",
    "portfolio.hero.primary": "خطط مشروعك",
    "portfolio.hero.secondary": "استكشف الخدمات",
    "portfolio.hero.imageAlt": "معاينات لوحات ودراسات حالة وواجهات منتجات احترافية",
    "portfolio.featured.eyebrow": "أعمال مختارة",
    "portfolio.featured.title": "برامج بارزة تجمع بين أثر المنتج والهندسة والتشغيل.",
    "portfolio.featured.description":
      "كل دراسة حالة مبنية حول المشكلة ونموذج التسليم والمعمارية ونتيجة الأعمال.",
    "portfolio.grid.eyebrow": "مكتبة المشاريع",
    "portfolio.grid.title": "استكشف الأعمال حسب القطاع أو التقنية أو الخدمة أو الهدف.",
    "portfolio.grid.description":
      "نموذج المحتوى جاهز للانتقال إلى CMS: الفلاتر والبحث والتفاصيل والمقاييس والمشاريع ذات الصلة كلها تأتي من البيانات.",
    "portfolio.grid.resultCount": "{count} مشاريع تطابق الفلاتر الحالية.",
    "portfolio.statistics.eyebrow": "إشارات الثقة",
    "portfolio.statistics.title": "طبقة ثقة مصممة لدراسات حالة حقيقية مستقبلًا.",
    "portfolio.statistics.description":
      "توضح المجموعة التجريبية كيف يمكن نشر أعمال العملاء مستقبلًا دون تغيير المكونات.",
    "portfolio.statistics.projects": "مشاريع تجريبية",
    "portfolio.statistics.industries": "قطاعات ممثلة",
    "portfolio.statistics.technologies": "تقنيات معروضة",
    "portfolio.statistics.featured": "دراسات حالة مميزة",
    "portfolio.cta.title": "هل لديك مشروع يستحق أن يصبح دراسة الحالة التالية؟",
    "portfolio.cta.description":
      "أخبرنا عن سير العمل أو المنصة أو المنتج الذي تريد تحسينه. ستساعدك HDS في تشكيل مسار تسليم بنتائج قابلة للقياس.",
    "portfolio.cta.primary": "ابدأ مشروعًا",
    "portfolio.cta.secondary": "عرض الخدمات",
    "portfolio.case.cta.title": "هل تريد هذا المستوى من الوضوح لمنصتك؟",
    "portfolio.case.cta.description":
      "تستطيع HDS تحويل المتطلبات المعقدة إلى خطة منتج ومعمارية ومسار إطلاق يثق به فريقك.",
    "portfolio.card.readCaseStudy": "اقرأ دراسة الحالة",
    "portfolio.filters.searchLabel": "البحث في المشاريع",
    "portfolio.filters.searchPlaceholder": "ابحث باسم العميل أو القطاع أو التقنية...",
    "portfolio.filters.industry": "فلتر القطاع",
    "portfolio.filters.technology": "فلتر التقنية",
    "portfolio.filters.service": "فلتر الخدمة",
    "portfolio.filters.allIndustries": "كل القطاعات",
    "portfolio.filters.allTechnologies": "كل التقنيات",
    "portfolio.filters.allServices": "كل الخدمات",
    "portfolio.empty.title": "لا توجد مشاريع",
    "portfolio.empty.description": "عدّل الفلاتر أو عبارة البحث لاستكشاف المزيد من دراسات الحالة.",
    "portfolio.notFound.title": "دراسة الحالة غير موجودة.",
    "portfolio.notFound.description": "مشروع الأعمال المطلوب غير موجود أو ربما تم نقله.",
    "portfolio.notFound.action": "العودة إلى الأعمال",
    "portfolio.case.client": "العميل",
    "portfolio.case.location": "الموقع",
    "portfolio.case.duration": "المدة",
    "portfolio.case.team": "حجم الفريق",
    "portfolio.case.challenge": "التحدي",
    "portfolio.case.solution": "الحل",
    "portfolio.case.architecture": "أبرز نقاط المعمارية",
    "portfolio.case.process": "عملية التنفيذ",
    "portfolio.case.results": "نتائج الأعمال",
    "portfolio.case.related": "دراسات حالة ذات صلة",
    "portfolio.industries.healthcare": "الرعاية الصحية",
    "portfolio.industries.fintech": "التقنيات المالية",
    "portfolio.industries.ecommerce": "التجارة الإلكترونية",
    "portfolio.industries.logistics": "اللوجستيات",
    "portfolio.industries.education": "التعليم",
    "portfolio.industries.realEstate": "العقارات",
    "portfolio.industries.manufacturing": "التصنيع",
    "portfolio.industries.foodDelivery": "توصيل الطعام",
    "portfolio.locations.egypt": "مصر",
    "portfolio.locations.uae": "الإمارات",
    "portfolio.locations.saudi": "السعودية",
    "portfolio.locations.global": "عالمي",
    "portfolio.locations.germany": "ألمانيا",
    "portfolio.locations.kuwait": "الكويت",
    "portfolio.duration.threeMonths": "3 أشهر",
    "portfolio.duration.fourMonths": "4 أشهر",
    "portfolio.duration.fiveMonths": "5 أشهر",
    "portfolio.duration.sixMonths": "6 أشهر",
    "portfolio.duration.sevenMonths": "7 أشهر",
    "portfolio.duration.eightMonths": "8 أشهر",
    "portfolio.services.productStrategy": "استراتيجية المنتج",
    "portfolio.services.webDevelopment": "تطوير الويب",
    "portfolio.services.cloud": "معمارية السحابة",
    "portfolio.services.uxDesign": "تصميم تجربة المستخدم",
    "portfolio.services.devops": "DevOps",
    "portfolio.services.analytics": "التحليلات",
    "portfolio.services.mobile": "تطوير الجوال",
    "portfolio.metrics.responseTime": "زمن الاستجابة",
    "portfolio.metrics.teamAdoption": "تبني الفريق",
    "portfolio.metrics.handover": "التسليم للفريق",
    "portfolio.metrics.onboarding": "الانضمام",
    "portfolio.metrics.incidents": "الحوادث",
    "portfolio.metrics.releaseCycle": "دورة الإطلاق",
    "portfolio.metrics.conversion": "التحويل",
    "portfolio.metrics.loadTime": "زمن التحميل",
    "portfolio.metrics.merchants": "التجار",
    "portfolio.metrics.dispatch": "التوجيه",
    "portfolio.metrics.operationalCost": "التكلفة التشغيلية",
    "portfolio.metrics.trackingAccuracy": "دقة التتبع",
    "portfolio.metrics.completion": "الإكمال",
    "portfolio.metrics.adminTime": "وقت الإدارة",
    "portfolio.metrics.retention": "الاحتفاظ",
    "portfolio.metrics.pipeline": "خط المبيعات",
    "portfolio.metrics.inventoryAccuracy": "دقة المخزون",
    "portfolio.metrics.downtime": "التوقف",
    "portfolio.metrics.alertNoise": "ضوضاء التنبيهات",
    "portfolio.metrics.plants": "المصانع",
    "portfolio.metrics.orders": "الطلبات",
    "portfolio.metrics.deliveryTime": "وقت التوصيل",
    "portfolio.metrics.repeatOrders": "الطلبات المتكررة",
    "portfolio.projects.careflow.title": "CareFlow Command",
    "portfolio.projects.careflow.subtitle":
      "منصة عمليات المستشفيات احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.careflow.imageAlt": "معاينة واجهة CareFlow Command",
    "portfolio.projects.careflow.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال عمليات المستشفيات.",
    "portfolio.projects.careflow.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.careflow.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.careflow.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.careflow.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.careflow.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.careflow.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.careflow.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.careflow.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.careflow.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.careflow.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.careflow.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.careflow.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.careflow.testimonial.role": "مدير العمليات",
    "portfolio.projects.careflow.seo.title": "CareFlow Command - دراسة حالة",
    "portfolio.projects.careflow.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال عمليات المستشفيات.",
    "portfolio.projects.careflow.seo.keywords": "عمليات المستشفيات, دراسة حالة, HDS, تطوير برمجيات",
    "portfolio.projects.nova.title": "Nova Payments",
    "portfolio.projects.nova.subtitle":
      "منصة انضمام عملاء التقنيات المالية احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.nova.imageAlt": "معاينة واجهة Nova Payments",
    "portfolio.projects.nova.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال انضمام عملاء التقنيات المالية.",
    "portfolio.projects.nova.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.nova.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.nova.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.nova.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.nova.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.nova.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.nova.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.nova.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.nova.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.nova.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.nova.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.nova.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.nova.testimonial.role": "مدير العمليات",
    "portfolio.projects.nova.seo.title": "Nova Payments - دراسة حالة",
    "portfolio.projects.nova.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال انضمام عملاء التقنيات المالية.",
    "portfolio.projects.nova.seo.keywords":
      "تقنيات مالية, انضمام العملاء, دراسة حالة, HDS, تطوير برمجيات",
    "portfolio.projects.marketlane.title": "MarketLane Commerce",
    "portfolio.projects.marketlane.subtitle":
      "منصة التجارة عبر الأسواق الرقمية احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.marketlane.imageAlt": "معاينة واجهة MarketLane Commerce",
    "portfolio.projects.marketlane.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال التجارة عبر الأسواق الرقمية.",
    "portfolio.projects.marketlane.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.marketlane.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.marketlane.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.marketlane.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.marketlane.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.marketlane.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.marketlane.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.marketlane.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.marketlane.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.marketlane.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.marketlane.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.marketlane.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.marketlane.testimonial.role": "مدير العمليات",
    "portfolio.projects.marketlane.seo.title": "MarketLane Commerce - دراسة حالة",
    "portfolio.projects.marketlane.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال التجارة عبر الأسواق الرقمية.",
    "portfolio.projects.marketlane.seo.keywords":
      "تجارة إلكترونية, أسواق رقمية, دراسة حالة, HDS, تطوير برمجيات",
    "portfolio.projects.fleetpulse.title": "FleetPulse Logistics",
    "portfolio.projects.fleetpulse.subtitle":
      "منصة إدارة أساطيل النقل احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.fleetpulse.imageAlt": "معاينة واجهة FleetPulse Logistics",
    "portfolio.projects.fleetpulse.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال إدارة أساطيل النقل.",
    "portfolio.projects.fleetpulse.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.fleetpulse.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.fleetpulse.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.fleetpulse.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.fleetpulse.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.fleetpulse.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.fleetpulse.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.fleetpulse.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.fleetpulse.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.fleetpulse.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.fleetpulse.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.fleetpulse.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.fleetpulse.testimonial.role": "مدير العمليات",
    "portfolio.projects.fleetpulse.seo.title": "FleetPulse Logistics - دراسة حالة",
    "portfolio.projects.fleetpulse.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال إدارة أساطيل النقل.",
    "portfolio.projects.fleetpulse.seo.keywords":
      "لوجستيات, إدارة الأساطيل, دراسة حالة, HDS, تطوير برمجيات",
    "portfolio.projects.learnsphere.title": "LearnSphere Academy",
    "portfolio.projects.learnsphere.subtitle":
      "منصة التعليم الرقمي احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.learnsphere.imageAlt": "معاينة واجهة LearnSphere Academy",
    "portfolio.projects.learnsphere.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال التعليم الرقمي.",
    "portfolio.projects.learnsphere.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.learnsphere.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.learnsphere.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.learnsphere.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.learnsphere.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.learnsphere.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.learnsphere.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.learnsphere.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.learnsphere.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.learnsphere.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.learnsphere.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.learnsphere.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.learnsphere.testimonial.role": "مدير العمليات",
    "portfolio.projects.learnsphere.seo.title": "LearnSphere Academy - دراسة حالة",
    "portfolio.projects.learnsphere.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال التعليم الرقمي.",
    "portfolio.projects.learnsphere.seo.keywords":
      "تعليم رقمي, منصات تعليمية, دراسة حالة, HDS, تطوير برمجيات",
    "portfolio.projects.estateos.title": "EstateOS Platform",
    "portfolio.projects.estateos.subtitle":
      "منصة عمليات العقارات احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.estateos.imageAlt": "معاينة واجهة EstateOS Platform",
    "portfolio.projects.estateos.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال عمليات العقارات.",
    "portfolio.projects.estateos.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.estateos.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.estateos.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.estateos.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.estateos.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.estateos.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.estateos.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.estateos.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.estateos.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.estateos.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.estateos.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.estateos.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.estateos.testimonial.role": "مدير العمليات",
    "portfolio.projects.estateos.seo.title": "EstateOS Platform - دراسة حالة",
    "portfolio.projects.estateos.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال عمليات العقارات.",
    "portfolio.projects.estateos.seo.keywords":
      "عقارات, عمليات عقارية, دراسة حالة, HDS, تطوير برمجيات",
    "portfolio.projects.factorygrid.title": "FactoryGrid Ops",
    "portfolio.projects.factorygrid.subtitle":
      "منصة مراقبة التصنيع احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.factorygrid.imageAlt": "معاينة واجهة FactoryGrid Ops",
    "portfolio.projects.factorygrid.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال مراقبة التصنيع.",
    "portfolio.projects.factorygrid.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.factorygrid.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.factorygrid.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.factorygrid.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.factorygrid.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.factorygrid.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.factorygrid.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.factorygrid.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.factorygrid.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.factorygrid.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.factorygrid.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.factorygrid.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.factorygrid.testimonial.role": "مدير العمليات",
    "portfolio.projects.factorygrid.seo.title": "FactoryGrid Ops - دراسة حالة",
    "portfolio.projects.factorygrid.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال مراقبة التصنيع.",
    "portfolio.projects.factorygrid.seo.keywords":
      "تصنيع, مراقبة تشغيلية, دراسة حالة, HDS, تطوير برمجيات",
    "portfolio.projects.quickbite.title": "QuickBite Delivery",
    "portfolio.projects.quickbite.subtitle":
      "منصة توصيل الطعام احترافية مصممة لتحسين الوضوح والسرعة والثقة التشغيلية.",
    "portfolio.projects.quickbite.imageAlt": "معاينة واجهة QuickBite Delivery",
    "portfolio.projects.quickbite.challenge":
      "احتاج الفريق إلى استبدال الأدوات المتفرقة بنموذج تشغيل أوضح في مجال توصيل الطعام.",
    "portfolio.projects.quickbite.solution":
      "صممت HDS وبنت منصة مركزة بسير عمل واضح وإشارات قابلة للقياس وأساس تقني قابل للصيانة.",
    "portfolio.projects.quickbite.implementation.discovery":
      "تم تحليل المستخدمين والقرارات وتدفقات البيانات والمخاطر والقيود التشغيلية الحقيقية خلف المنتج.",
    "portfolio.projects.quickbite.implementation.platform":
      "تم بناء تجربة المنصة الأساسية وطبقة التكامل وسير العمل حسب الأدوار عبر إصدارات مركزة.",
    "portfolio.projects.quickbite.implementation.release":
      "تم تجهيز التحليلات والتوثيق والتسليم وجاهزية الإطلاق لفريق العميل.",
    "portfolio.projects.quickbite.architecture.realtime":
      "نموذج بيانات مبني حول الحالات التشغيلية الحقيقية بدل الشاشات الثابتة.",
    "portfolio.projects.quickbite.architecture.roles":
      "أنماط وصول تراعي أدوار الفرق ومسؤولياتها المختلفة.",
    "portfolio.projects.quickbite.architecture.audit":
      "أحداث سير عمل قابلة للتتبع جعلت مراجعة القرارات وتحسينها أسهل.",
    "portfolio.projects.quickbite.results.visibility":
      "حصلت القيادة على رؤية أوضح للأداء ونقاط الاختناق.",
    "portfolio.projects.quickbite.results.response":
      "قللت الفرق التنسيق اليدوي واستجابت للتغيرات التشغيلية بسرعة أكبر.",
    "portfolio.projects.quickbite.results.reporting":
      "أصبح إعداد التقارير أسهل في الثقة لأنه يأتي من سير عمل المنتج نفسه.",
    "portfolio.projects.quickbite.testimonial.quote":
      "حوّلت HDS مشكلة تشغيلية معقدة إلى منتج يستطيع فريقنا فهمه واستخدامه وتطويره.",
    "portfolio.projects.quickbite.testimonial.author": "قائد عميل تجريبي",
    "portfolio.projects.quickbite.testimonial.role": "مدير العمليات",
    "portfolio.projects.quickbite.seo.title": "QuickBite Delivery - دراسة حالة",
    "portfolio.projects.quickbite.seo.description":
      "دراسة حالة تجريبية من HDS تعرض استراتيجية المنتج والهندسة والمعمارية وأثر الأعمال القابل للقياس في مجال توصيل الطعام.",
    "portfolio.projects.quickbite.seo.keywords":
      "توصيل الطعام, تطبيقات توصيل, دراسة حالة, HDS, تطوير برمجيات",
    "seo.about.description":
      "تعرف على كيفية بناء HDS لمنصات برمجية موثوقة وأنظمة سحابية وتدفقات ذكاء اصطناعي وتجارب منتجات للفرق الرقمية الجادة.",
    "seo.about.keywords":
      "عن HDS, شركة برمجيات, فريق منتجات رقمية, برمجيات مؤسسية, سحابة, ذكاء اصطناعي, هندسة منتجات",
    "seo.about.title": "عن HDS",
    "about.breadcrumb.about": "عن الشركة",
    "about.breadcrumb.home": "الرئيسية",
    "about.breadcrumb.label": "مسار التنقل",
    "about.hero.badge": "عن HDS",
    "about.hero.title": "شركة منتجات وهندسة للمنظمات التي تحتاج تقنية تتحمل ضغط الواقع.",
    "about.hero.subtitle":
      "تساعد HDS الفرق الطموحة على تصميم وبناء وإطلاق وتطوير منصات رقمية موثوقة بوضوح قيادي وتنفيذ منضبط وملكية طويلة المدى.",
    "about.hero.primary": "تحدث مع HDS",
    "about.hero.secondary": "استكشف الخدمات",
    "about.hero.imageAlt": "لوحات برمجية احترافية تمثل عمل HDS في المنتجات والهندسة",
    "about.story.eyebrow": "قصة الشركة",
    "about.story.title": "بُنينا للمساحة الصعبة بين الاستراتيجية والإطلاق الحقيقي.",
    "about.story.description":
      "تفشل كثير من البرامج الرقمية في المسافة بين فكرة واعدة ونظام يمكن الاعتماد عليه. صُممت HDS لتقليل هذه المسافة.",
    "about.story.paragraph.one":
      "نعمل مع فرق لا تستطيع تحمل تسليم غامض أو معمارية هشة أو واجهات تبدو مكتملة بينما نموذج التشغيل تحتها غير واضح.",
    "about.story.paragraph.two":
      "يجمع أسلوبنا بين التفكير المنتج، وحكم تجربة المستخدم، وهندسة البرمجيات، وجاهزية السحابة، والوعي الأمني، والذكاء الاصطناعي العملي في نموذج تسليم واحد مسؤول.",
    "about.story.paragraph.three":
      "النتيجة ليست كودًا فقط، بل سير عمل أوضح، وأساسًا تقنيًا أقوى، ومنتجًا يستطيع فريقك تطويره بعد الإطلاق.",
    "about.story.proof.architecture.label": "موقف معماري",
    "about.story.proof.architecture.value": "مصمم للتوسع",
    "about.story.proof.delivery.label": "إيقاع التسليم",
    "about.story.proof.delivery.value": "مرئي كل أسبوع",
    "about.story.proof.partnership.label": "علاقة العميل",
    "about.story.proof.partnership.value": "طويلة المدى بطبيعتها",
    "about.mission.eyebrow": "المهمة والرؤية",
    "about.mission.title": "نجعل العمل الرقمي المعقد أسهل في الثقة.",
    "about.mission.description":
      "مهمتنا ورؤيتنا عمليتان بوضوح: مساعدة الفرق على اتخاذ قرارات تقنية أفضل، ثم تحويل هذه القرارات إلى أنظمة تدوم.",
    "about.mission.card.title": "المهمة",
    "about.vision.card.title": "الرؤية",
    "about.values.eyebrow": "القيم الأساسية",
    "about.values.title": "المعايير التي تقف خلف العمل.",
    "about.values.description":
      "تظهر هذه القيم في مراجعات المعمارية، وقرارات الواجهة، وتواصل التسليم، وطريقة التعامل مع المفاضلات.",
    "about.why.eyebrow": "لماذا HDS",
    "about.why.title": "طريقة أهدأ لبناء برمجيات جادة.",
    "about.why.description":
      "صُممت HDS للقادة الذين يحتاجون ثقة في الخطة والمنتج والكود والمسار بعد الإطلاق.",
    "about.why.clarity.title": "قرارات واضحة",
    "about.why.clarity.description":
      "يبقى النطاق والمخاطر والافتراضات والمفاضلات مرئية بدل أن تتحول إلى دين مخفي في المشروع.",
    "about.why.architecture.title": "أنظمة متينة",
    "about.why.architecture.description":
      "تُخطط الواجهة والخلفية والسحابة والبيانات والتكاملات حول قابلية الصيانة من اليوم الأول.",
    "about.why.security.title": "تسليم مسؤول",
    "about.why.security.description":
      "نتعامل مع التحقق والصلاحيات والبيئات ومخاطر التشغيل كمتطلبات منتج، لا كأفكار لاحقة.",
    "about.why.ai.title": "حكم عملي في الذكاء الاصطناعي",
    "about.why.ai.description":
      "ندخل الذكاء الاصطناعي عندما يحسن سير العمل أو القرارات أو الاسترجاع أو الأتمتة دون تعقيد ملكية النظام.",
    "about.process.eyebrow": "نموذج التشغيل",
    "about.process.title": "عملية تسليم تجمع الزخم والحكم الجيد.",
    "about.process.description":
      "العملية منظمة بما يكفي للوضوح المؤسسي ومرنة بما يكفي للتعلم المنتج.",
    "about.process.align.title": "المواءمة",
    "about.process.align.description":
      "توضيح النتائج والمستخدمين والقيود والتكاملات والمخاطر والسبب التجاري الحقيقي خلف العمل.",
    "about.process.design.title": "التشكيل",
    "about.process.design.description":
      "تحويل الغموض إلى رحلات وحالات واجهة وحدود نظام ومراحل وخارطة تسليم.",
    "about.process.ship.title": "الإطلاق المرحلي",
    "about.process.ship.description":
      "البناء في خطوات مركزة مع مراجعات واختبارات وتوثيق وتقدم مرئي.",
    "about.process.improve.title": "التحسين",
    "about.process.improve.description":
      "استخدام التحليلات والتغذية الراجعة وإشارات الاعتمادية وتعلم الفريق لجعل المنصة أفضل باستمرار.",
    "about.timeline.eyebrow": "المسار الزمني",
    "about.timeline.title": "شركة شكلها انضباط التسليم.",
    "about.timeline.description": "تاريخنا مركز عمدًا: تسليم أفضل، قدرة أوسع، وأسس أقوى.",
    "about.technologies.eyebrow": "التقنيات",
    "about.technologies.title": "أدوات حديثة مختارة للملكية طويلة المدى.",
    "about.technologies.description":
      "نفضل التقنيات المثبتة والقابلة للصيانة التي تساعد المنتجات على التطور دون الحاجة لإعادة بناء كل عام.",
    "about.industries.eyebrow": "القطاعات التي نخدمها",
    "about.industries.title": "مصمم لفرق لديها تعقيد تشغيلي حقيقي.",
    "about.industries.description":
      "يتكيف نفس نموذج التسليم عبر مجالات تكون فيها الاعتمادية والتبني والوضوح مهمة.",
    "about.industries.saas.title": "شركات SaaS والمنتجات",
    "about.industries.saas.description":
      "منصات تحتاج تجربة واضحة ومعمارية قابلة للتوسع وتحليلات وتكرارًا سريعًا.",
    "about.industries.operations.title": "فرق تشغيل كثيفة",
    "about.industries.operations.description":
      "أنظمة تربط الموافقات والبيانات والفرق الميدانية والمخزون واللوجستيات والتقارير.",
    "about.industries.commerce.title": "التجارة والأسواق الرقمية",
    "about.industries.commerce.description":
      "رحلات عملاء وكتالوجات وسير عمل وتكاملات وتجارب حساسة للأداء.",
    "about.industries.regulated.title": "سير عمل منظم",
    "about.industries.regulated.description":
      "منتجات تحتاج عناية إضافية بالصلاحيات والتدقيق والاعتمادية والتعامل مع البيانات.",
    "about.statistics.eyebrow": "إشارات الحجم",
    "about.statistics.title": "نموذج فريق صغير بانضباط مؤسسي.",
    "about.statistics.description":
      "الأرقام ليست للزينة؛ إنها توضح نطاق التشغيل الذي صُممت HDS لدعمه.",
    "about.team.eyebrow": "نموذج الفريق",
    "about.team.title": "متخصصون كبار بإيقاع تسليم واحد مسؤول.",
    "about.team.description": "نظرة على الفريق",
    "about.team.body":
      "تجمع HDS بين قيادة المنتج والتصميم والهندسة والسحابة والتسليم في فريق مركز. يمكن أن يكبر الهيكل حسب المشروع، لكن تجربة العميل تبقى بسيطة: ملكية واضحة، تواصل مباشر، وتقدم مرئي.",
    "about.certifications.eyebrow": "إشارات الجودة",
    "about.certifications.title": "ممارسات تدعم الثقة.",
    "about.certifications.description":
      "نتعامل مع الاعتمادات وممارسات التشغيل كدليل على الانضباط، لا كزينة.",
    "about.cta.title": "تبحث عن شريك تقني يستطيع التفكير والتنفيذ؟",
    "about.cta.description":
      "شاركنا المنتج أو المنصة أو سير العمل الذي تريد تحسينه. ستساعدك HDS في تحويله إلى مسار تسليم واضح.",
    "about.cta.primary": "ابدأ الحوار",
    "about.cta.secondary": "شاهد الخدمات",
    "seo.notFound.description": "صفحة HDS المطلوبة غير موجودة.",
    "seo.notFound.keywords": "HDS, غير موجود",
    "seo.notFound.title": "الصفحة غير موجودة",

    "home.hero.eyebrow": "",
    "home.hero.title": "منصات برمجية مصممة للنمو والوضوح والعمل على نطاق واسع.",
    "home.hero.description":
      "نصمم ونبني منصات مؤسسية وتطبيقات ويب وجوال وأنظمة ERP وCRM وبنية سحابية وسير عمل مدعوم بالذكاء الاصطناعي للمؤسسات التي تعتمد على البرمجيات في التشغيل والنمو.",
    "home.hero.primaryCta": "ابدأ مشروعك",
    "home.hero.secondaryCta": "استكشف الخدمات",
    "home.hero.imageAlt": "واجهات أنظمة مؤسسية وسحابية ولوحات تحكم برمجية متعددة الطبقات",
    "home.hero.trust.engineering": "فريق هندسي متقدم",
    "home.hero.trust.security": "تسليم يراعي الأمان",
    "home.hero.trust.delivery": "تنفيذ جاهز للإطلاق",
    "home.hero.floating.title": "مركز قيادة التسليم",
    "home.hero.floating.description":
      "مواءمة المنتج والمعمارية والسحابة وخطة الإطلاق قبل بدء التطوير.",
    "home.hero.floating.metric": "عقلية موثوقية المنصات",

    "home.clients.eyebrow": "قطاعات نبني لها",
    "home.clients.title": "نماذج منتجات لفرق تحتاج أن تحمل البرمجيات عمليات حقيقية.",
    "home.clients.description":
      "القسم قابل للتهيئة وجاهز لاستبداله بشعارات عملاء معتمدة دون تغيير التصميم.",
    "home.clients.sampleBadge": "منتج نموذجي",
    "home.clients.cta.caseStudy": "استكشف دراسة الحالة",
    "home.clients.cta.learnMore": "اعرف المزيد",
    "home.clients.fintech.title": "التقنيات المالية",
    "home.clients.fintech.product": "نوفا باي أوبس",
    "home.clients.fintech.description":
      "لوحة عمليات دفع لمراجعة المخاطر والتسويات والموافقات والرؤية المالية.",
    "home.clients.fintech.type": "منصة مدفوعات رقمية",
    "home.clients.fintech.capabilities.wallet": "محفظة",
    "home.clients.fintech.capabilities.kyc": "تحقق KYC",
    "home.clients.fintech.capabilities.payments": "مدفوعات",
    "home.clients.fintech.kpi": "جاهزية تشغيلية منظمة",
    "home.clients.healthcare.title": "الرعاية الصحية",
    "home.clients.healthcare.product": "ميد كور فلو",
    "home.clients.healthcare.description":
      "منصة تنسيق رعاية تربط استقبال المرضى والمهام السريرية والتقارير.",
    "home.clients.healthcare.type": "منصة إدارة مستشفيات",
    "home.clients.healthcare.capabilities.records": "سجلات المرضى",
    "home.clients.healthcare.capabilities.appointments": "المواعيد",
    "home.clients.healthcare.capabilities.diagnosis": "تشخيص بالذكاء الاصطناعي",
    "home.clients.healthcare.kpi": "مريض مدعوم",
    "home.clients.commerce.title": "التجارة الإلكترونية",
    "home.clients.commerce.product": "ريتيل أو إس ستوديو",
    "home.clients.commerce.description":
      "طبقة تحكم للتجارة تشمل الكتالوجات والطلبات والحملات والمخزون ورحلات العملاء.",
    "home.clients.commerce.type": "منظومة عمليات تجارة",
    "home.clients.commerce.capabilities.catalog": "كتالوج",
    "home.clients.commerce.capabilities.orders": "طلبات",
    "home.clients.commerce.capabilities.inventory": "مخزون",
    "home.clients.commerce.kpi": "تسليم أسرع",
    "home.clients.logistics.title": "الخدمات اللوجستية",
    "home.clients.logistics.product": "فليت بالس لايف",
    "home.clients.logistics.description":
      "مساحة عمل لعمليات التوصيل تشمل التوزيع وتتبع المسارات وحالة الأسطول ومؤشرات الالتزام.",
    "home.clients.logistics.type": "منصة عمليات أسطول",
    "home.clients.logistics.capabilities.dispatch": "توزيع",
    "home.clients.logistics.capabilities.routes": "مسارات حية",
    "home.clients.logistics.capabilities.sla": "تتبع SLA",
    "home.clients.logistics.kpi": "وضوح تشغيلي",
    "home.clients.education.title": "التعليم",
    "home.clients.education.product": "ليرن سفير هب",
    "home.clients.education.description":
      "منصة تعلم للفصول والمحتوى والتقييمات وتحليلات التقدم ودعم الطلاب.",
    "home.clients.education.type": "منصة تجربة تعلم",
    "home.clients.education.capabilities.cohorts": "مجموعات تعلم",
    "home.clients.education.capabilities.assessments": "تقييمات",
    "home.clients.education.capabilities.analytics": "تحليلات",
    "home.clients.education.kpi": "إكمال الدورات",

    "home.services.eyebrow": "لمحة عن الخدمات",
    "home.services.title":
      "فريق واحد مسؤول عن الاستراتيجية والتصميم والهندسة والسحابة والذكاء الاصطناعي.",
    "home.services.description":
      "كل مشروع يتم تشكيله حول النتيجة المطلوبة: إطلاق أسرع أو تحديث العمليات أو تحسين تجربة العملاء أو فتح مصادر دخل جديدة.",
    "home.services.customSoftware.title": "برمجيات مخصصة",
    "home.services.customSoftware.description":
      "منصات مصممة حول سير العمل ونموذج البيانات والتكاملات وخارطة المنتج طويلة المدى.",
    "home.services.webApps.title": "تطبيقات ويب",
    "home.services.webApps.description":
      "تطبيقات ويب آمنة ومتجاوبة وسهلة الوصول بواجهات مصقولة ومعمارية قابلة للصيانة.",
    "home.services.mobileApps.title": "تطبيقات جوال",
    "home.services.mobileApps.description":
      "تجارب جوال جاهزة للإطلاق ومتصلة بواجهات API موثوقة وتحليلات وبنية سحابية.",
    "home.services.enterprise.title": "أنظمة ERP وCRM",
    "home.services.enterprise.description":
      "أنظمة تشغيلية تربط الفرق وتؤتمت الموافقات وتحول العمل المتناثر إلى عمليات واضحة.",
    "home.services.cloud.title": "السحابة وDevOps",
    "home.services.cloud.description":
      "بنية سحابية أصلية وCI/CD ومراقبة وموثوقية وتشغيل واع بالتكلفة.",
    "home.services.ai.title": "حلول الذكاء الاصطناعي",
    "home.services.ai.description":
      "مساعدون ذكيون عمليّون ومسارات أتمتة وأنظمة استرجاع معرفة وسير عمل لدعم القرار.",

    "home.technologies.eyebrow": "أساس تقني",
    "home.technologies.title": "أدوات حديثة مختارة للأداء والأمان وقابلية الصيانة.",
    "home.technologies.description":
      "نختار تقنيات مثبتة تساعد الفرق على التحرك بسرعة دون بناء أنظمة هشة.",
    "home.technologies.groups.product": "هندسة المنتج",
    "home.technologies.groups.cloud": "تشغيل السحابة",
    "home.technologies.groups.data": "البيانات والمدفوعات",
    "home.technologies.groups.experience": "أنظمة التجربة",

    "home.why.eyebrow": "لماذا HDS",
    "home.why.title": "تنفيذ متقدم بدون ضوضاء.",
    "home.why.description":
      "نجمع بين التفكير المنتج والهندسة المنضبطة والتواصل الواضح حتى يعرف العميل دائمًا ما الذي يتم بناؤه ولماذا.",
    "home.why.business.title": "معمارية تبدأ من الأعمال",
    "home.why.business.description":
      "تُربط القرارات التقنية بنتائج قابلة للقياس وواقع التشغيل وقيود النمو.",
    "home.why.security.title": "الأمان من البداية",
    "home.why.security.description":
      "يتم تصميم الوصول وتدفق البيانات والتحقق والنشر مع مراعاة المخاطر والامتثال.",
    "home.why.delivery.title": "تسليم شفاف",
    "home.why.delivery.description":
      "تبقى خارطة الطريق والمخاطر والتقدم والقرارات واضحة من الاكتشاف حتى الإطلاق.",
    "home.why.partner.title": "شريك منتج طويل المدى",
    "home.why.partner.description":
      "بعد الإطلاق نساعد على تحسين الموثوقية والتحويل والتبني والأداء والإصدارات القادمة.",

    "home.process.eyebrow": "العملية",
    "home.process.title": "نموذج عمل هادئ من الفكرة إلى التحسين المستمر.",
    "home.process.description":
      "العملية منظمة بما يكفي لحوكمة المؤسسات ومرنة بما يكفي للتعلم السريع من المنتج.",
    "home.process.discovery.title": "الاكتشاف",
    "home.process.discovery.description":
      "توضيح الأهداف والمستخدمين والقيود والتكاملات والمخاطر ونتيجة العمل قبل بدء التسليم.",
    "home.process.planning.title": "التخطيط",
    "home.process.planning.description":
      "تشكيل النطاق والأولويات والمعمارية ومحطات التسليم والملكية ومسار الإطلاق.",
    "home.process.discover.title": "الاكتشاف",
    "home.process.discover.description":
      "توضيح الأهداف والمستخدمين والقيود والتكاملات والمخاطر والقيمة التجارية وراء العمل.",
    "home.process.architect.title": "المعمارية",
    "home.process.architect.description":
      "تحديد خطة التسليم وحدود النظام ونموذج البيانات والتقنيات والأمان وخارطة الطريق.",
    "home.process.design.title": "التصميم",
    "home.process.design.description":
      "نمذجة رحلات المستخدم وحالات الواجهة وهيكل المحتوى ونظام تصميم المنتج.",
    "home.process.development.title": "التطوير",
    "home.process.development.description":
      "بناء المنتج على مراحل مركزة مع كود نظيف ومراجعات وتكاملات ووضوح مستمر في التقدم.",
    "home.process.testing.title": "الاختبار",
    "home.process.testing.description":
      "التحقق من الوظائف وسهولة الوصول والأداء والأمان والتكاملات وجاهزية الإطلاق.",
    "home.process.deployment.title": "النشر",
    "home.process.deployment.description":
      "الإطلاق عبر CI/CD مع المراقبة والتحليلات والتوثيق وخطة الرجوع وتسليم الفريق.",
    "home.process.support.title": "الدعم",
    "home.process.support.description":
      "تحسين الموثوقية والتبني والأداء وإصدارات المنتج المستقبلية بعد الإطلاق.",
    "home.process.build.title": "البناء",
    "home.process.build.description":
      "الشحن على مراحل مركزة مع مراجعات كود وبوابات جودة واختبارات ووضوح في التقدم.",
    "home.process.launch.title": "الإطلاق",
    "home.process.launch.description":
      "تجهيز الإصدار والتحليلات والتوثيق والنشر والمراقبة وتسليم الفريق.",
    "home.process.optimize.title": "التحسين",
    "home.process.optimize.description":
      "تحسين السرعة والموثوقية والتبني والتحويل وفرص المنتج المستقبلية بعد الإطلاق.",

    "home.statistics.eyebrow": "مؤشرات تشغيلية",
    "home.statistics.title": "شريك تسليم مصمم للبرامج الرقمية الجادة.",
    "home.statistics.description":
      "تعكس الأرقام نوع النطاق والموثوقية واتساع الخدمات التي صُممت HDS لدعمها.",
    "home.statistics.products": "منتجات ومنصات رقمية تم إطلاقها",
    "home.statistics.disciplines": "تخصصات خدمة متكاملة",
    "home.statistics.uptime": "مستهدف الجاهزية للمنصات المدارة",
    "home.statistics.industries": "قطاعات مدعومة ضمن برامج رقمية",

    "home.testimonials.eyebrow": "رأي العملاء",
    "home.testimonials.title": "تختار الفرق HDS عندما تكون المخاطر عالية.",
    "home.testimonials.description":
      "آراء تمثيلية من قادة تحول يحتاجون إلى وضوح استراتيجي وزخم في التنفيذ.",
    "home.testimonials.rating": "تسليم موثوق",
    "home.testimonials.operations.quote":
      "ساعدتنا HDS على تحويل العمليات المتفرقة إلى منصة يثق بها الفريق ويستخدمها يوميًا.",
    "home.testimonials.operations.name": "مايا حسن",
    "home.testimonials.operations.role": "مديرة العمليات",
    "home.testimonials.product.quote":
      "قدّم الفريق حكمًا منتجيًا وانضباطًا هندسيًا ومستوى من الصقل نراه عادة لدى شركات أكبر بكثير.",
    "home.testimonials.product.name": "عمر نبيل",
    "home.testimonials.product.role": "المؤسس والرئيس التنفيذي",
    "home.testimonials.growth.quote":
      "لم يبنوا شاشات فقط. ساعدونا على إعادة التفكير في سير العمل والبيانات ومسار الإطلاق.",
    "home.testimonials.growth.name": "لينا فاروق",
    "home.testimonials.growth.role": "قائدة النمو",

    "home.faq.eyebrow": "الأسئلة الشائعة",
    "home.faq.title": "أسئلة هامة",
    "home.faq.description": "كل ما تريد معرفته عن خدمات البرمجة والتطوير الرقمي المتميزة لدينا.",
    "home.faq.customSystem.title": "هل يمكننا برمجة موقع أو نظام خاص بالكامل؟",
    "home.faq.customSystem.content":
      "نقدم خدمة برمجة وتطوير المنصات والأنظمة الخاصة بكافة الإمكانيات والتعقيدات وبتصميم مميز، وببرمجة عالية الكفاءة مع مجموعة من أفضل المبرمجين لتقديم نظام متوافق مع متطلبات تشغيل ونمو أعمالك.",
    "home.faq.ecommerce.title": "هل يمكن عمل متجر إلكتروني متكامل؟",
    "home.faq.ecommerce.content":
      "يمكنك الحصول على متجر إلكتروني متكامل بكافة الميزات وبطرق متنوعة لعرض منتجاتك ومواصفاتها، بنظام أفلييت متميز، وخيارات مرنة ومتقدمة للشحن والدفع والإعلان.",
    "home.faq.payment.title": "هل تتوفر وسائل دفع إلكتروني متنوعة؟",
    "home.faq.payment.content":
      "نعم، نقوم بدمج بوابات الدفع الإلكتروني المحلية والعالمية المتنوعة مثل الحوالات البنكية، والبطاقات الائتمانية (Credit Card)، وخدمات الدفع الفوري (فوري وفودافون كاش) لتسهيل المعاملات.",
    "home.faq.uiux.title": "كيف تختار وتصمم موقع الويب الخاص بك؟",
    "home.faq.uiux.content":
      "بواسطة فريق متخصص في تصميم واجهات المستخدم وتجربة المستخدم (UI/UX) نقوم بتخطيط وتصميم رحلة العميل لتناسب مجال عملك ورؤيتك، وبناء واجهات فريدة تميزك عن منافسيك.",
    "home.faq.performance.title": "كيف أضمن سرعة واستقرار موقعي على الإنترنت؟",
    "home.faq.performance.content":
      "نعتمد على سيرفرات سحابية (VPS) فائقة السرعة والكفاءة، بجانب تحسين البنية البرمجية وضغط الملفات لضمان أسرع تصفح، مع مراقبة أمنية مستمرة ونسخ احتياطي يومي.",
    "home.faq.technicalSeo.title": "هل تدعم البرمجيات معايير تحسين محركات البحث (SEO)؟",
    "home.faq.technicalSeo.content":
      "نعم، نقوم بتهيئة الكود البرمجي بالكامل وتطبيق قواعد السيو التقني (Technical SEO) لتسريع أرشفة موقعك وسرعة استجابته لتصدر النتائج الأولى في محركات البحث.",
    "home.faq.branding.title": "ما مدى أهمية الهوية البصرية وتصميم الصفحات؟",
    "home.faq.branding.content":
      "الهوية البصرية المتكاملة هي بصمتك الرقمية الفريدة، ابتداءً من اللوجو ولون موقعك وتصميم صفحاته إلى الأيقونات وتصاميم الصور والنصوص لتبني ثقة فورية مع عملائك.",
    "home.faq.maintenance.title": "هل تقدمون خدمات الدعم الفني وتحديث الموقع بعد الإطلاق؟",
    "home.faq.maintenance.content":
      "نعم، نوفر دعمًا فنيًا متكاملاً لمراقبة الموثوقية والأداء، وإطلاق التحديثات الدورية لضمان استمرار تشغيل موقعك وحمايته وتحديث ميزاته وفق متطلبات السوق.",

    "home.cta.title": "هل أنت مستعد لبناء منصة يمكن لعملك الاعتماد عليها؟",
    "home.cta.description":
      "أخبرنا بما تريد تحويله. سنساعدك في تشكيل خارطة الطريق والمعمارية وخطة التسليم بوضوح متقدم من اليوم الأول.",
    "home.cta.primary": "احجز استشارة",
    "home.cta.secondary": "راسل HDS",
    "home.cta.trust.discovery": "اكتشاف منظم قبل بدء التسليم",
    "home.cta.trust.architecture": "توثيق واضح لقرارات المعمارية",
    "home.cta.trust.delivery": "تخطيط الإطلاق والتسليم والتحسين من اليوم الأول",

    "company.footer.contact": "التواصل",
    "company.footer.copyright": "© 2026 HDS. جميع الحقوق محفوظة.",
    "company.footer.offices": "المكاتب",
    "company.footer.social": "الشبكات الاجتماعية",
    "company.leadership.ceo.bio": "يقود رؤية الشركة وشراكات العملاء والاتجاه العام للأعمال.",
    "company.leadership.ceo.role": "الرئيس التنفيذي",
    "company.leadership.cto.bio": "يشرف على معايير الهندسة وجودة المعمارية وانضباط التسليم.",
    "company.leadership.cto.role": "الرئيس التقني",
    "company.leadership.title": "القيادة",
    "company.offices.riyadh.address": "شارع العليا، الرياض، السعودية",
    "company.offices.riyadh.city": "الرياض",
    "company.offices.riyadh.country": "السعودية",
    "company.offices.riyadh.hours": "من السبت إلى الخميس، 9:00 صباحًا إلى 6:00 مساءً",
    "company.offices.mansoura.address": "الجامعة، المنصورة، مصر",
    "company.offices.mansoura.city": "المنصورة",
    "company.offices.mansoura.country": "مصر",
    "company.offices.mansoura.hours": "من السبت إلى الخميس، 9:00 صباحًا إلى 6:00 مساءً",
    "company.offices.title": "المكاتب",
    "company.profile.awards.delivery": "تقدير لتميز التسليم",
    "company.profile.awards.design": "تقدير لجودة تصميم المنتجات",
    "company.profile.certifications.delivery": "ممارسات تميز التسليم",
    "company.profile.certifications.iso": "ممارسات جودة متوافقة مع ISO",
    "company.profile.certifications.security": "ممارسات هندسية واعية بالأمان",
    "company.profile.description":
      "تبني HDS منتجات رقمية ومنصات برمجية وحلولًا سحابية للفرق التي تحتاج وضوحًا واعتمادية طويلة المدى.",
    "company.profile.mission":
      "مساعدة المؤسسات على تحويل الأفكار المعقدة إلى أنظمة رقمية يمكن الاعتماد عليها.",
    "home.about.eyebrow": "عن HDS",
    "home.about.title": "نبني برمجيات تساعد الأعمال على النمو بثقة.",
    "home.about.description":
      "HDS شريك هندسي للشركات التي تحتاج منتجات رقمية موثوقة، لا شاشات مؤقتة. نشكل كل منصة حول نتائج الأعمال ووضوح التشغيل والملكية طويلة المدى.",
    "home.about.body":
      "تجمع فرقنا بين التفكير المنتج والمعمارية النظيفة والتسليم الآمن والتحسين المستمر حتى يظل البرنامج قادرًا على الحركة مع تغير العمل.",
    "home.about.cta": "اعرف المزيد عن HDS",
    "home.about.highlights.engineering.title": "جودة هندسية",
    "home.about.highlights.engineering.description":
      "ممارسات تسليم ناضجة ومعمارية قابلة للصيانة وبوابات جودة من أول Sprint.",
    "home.about.highlights.security.title": "أمان وموثوقية",
    "home.about.highlights.security.description":
      "الوصول وتدفق البيانات والتحقق والنشر قرارات أساسية داخل المنتج وليست إضافات لاحقة.",
    "home.about.highlights.scalable.title": "حلول قابلة للتوسع",
    "home.about.highlights.scalable.description":
      "نخطط المنصات للنمو والتكاملات والأداء وتوسيع المنتج مستقبلًا.",
    "home.about.highlights.partnership.title": "شراكة طويلة المدى",
    "home.about.highlights.partnership.description":
      "بعد الإطلاق تساعد HDS في تحسين الموثوقية والتبني والأتمتة وخارطة الإصدارات القادمة.",
    "home.about.mockup.badge": "عرض برمجيات مؤسسية",
    "home.about.mockup.title": "مركز قيادة التسليم",
    "home.about.mockup.status": "جاهز للإنتاج",
    "home.about.mockup.live": "صحة الإصدار مباشرة",
    "home.about.mockup.metric": "مؤشر",
    "home.about.mockup.checks.delivery": "حوكمة تسليم واضحة",
    "home.about.mockup.checks.quality": "بوابات جودة قبل الإطلاق",
    "home.services.learnMore": "اعرف المزيد",
    "home.process.cta": "ابدأ مشروعك",
    "home.clients.logos.atlas": "أطلس جوف",
    "home.clients.logos.medcore": "ميد كور",
    "home.clients.logos.novapay": "نوفا باي",
    "home.clients.logos.retailos": "ريتيل أو إس",
    "home.clients.logos.fleetpulse": "فليت بالس",
    "home.clients.logos.learnsphere": "ليرن سفير",
    "home.clients.logos.estateos": "إستيت أو إس",
    "home.clients.logos.factorygrid": "فاكتوري جريد",
    "home.testimonials.operations.company": "أطلس جوف",
    "home.testimonials.product.company": "نوفا باي",
    "home.testimonials.growth.company": "ريتيل أو إس",
    "company.profile.tagline": "مصممة للنمو الرقمي الجاد.",
    "company.profile.vision": "أن نكون شريك المنتج والهندسة طويل المدى للمؤسسات الطموحة.",
    "company.social.behance": "Behance",
    "company.social.dribbble": "Dribbble",
    "company.social.facebook": "Facebook",
    "company.social.github": "GitHub",
    "company.social.instagram": "Instagram",
    "company.social.linkedin": "LinkedIn",
    "company.social.medium": "Medium",
    "company.social.youtube": "YouTube",
    "company.social.x": "X",
    "company.statistics.clients": "عميل تم خدمته",
    "company.statistics.countries": "دولة مدعومة",
    "company.statistics.percent": "%",
    "company.statistics.plus": "+",
    "company.statistics.projects": "مشروع تم تسليمه",
    "company.statistics.uptime": "مستهدف الجاهزية",
    "company.technologies.backend": "الخلفية",
    "company.technologies.cloud": "السحابة",
    "company.technologies.design": "التصميم",
    "company.technologies.frontend": "الواجهة",
    "company.timeline.2018.description": "بدأت HDS بتركيز على التفكير المنتج والتسليم الموثوق.",
    "company.timeline.2018.title": "تأسيس الشركة",
    "company.timeline.2021.description":
      "توسعت إلى السحابة وتصميم المنتجات وبرامج التسليم المؤسسية.",
    "company.timeline.2021.title": "التوسع إلى تسليم شامل",
    "company.timeline.2024.description":
      "تم تحسين المعمارية المرجعية لدعم نمو المنتجات طويل المدى.",
    "company.timeline.2024.title": "ترسيخ نموذج الهندسة المرجعي",
    "company.timeline.title": "المسار الزمني",
    "company.values.clarity.description": "إبقاء القرارات مرئية ومحددة وسهلة الفهم.",
    "company.values.clarity.title": "الوضوح",
    "company.values.discipline.description": "البناء بهيكلية ومسؤولية وجودة قابلة للتكرار.",
    "company.values.discipline.title": "الانضباط",
    "company.values.partnership.description": "العمل كشريك طويل المدى بدل مورد قصير المدى.",
    "company.values.partnership.title": "الشراكة",
    "seo.services.description":
      "استكشف خدمات HDS لتطوير الويب والجوال وتجربة المستخدم والحلول السحابية.",
    "seo.services.keywords":
      "خدمات HDS, تطوير الويب, تطوير الجوال, تصميم UI UX, حلول السحابة, شركة برمجيات",
    "seo.services.title": "خدمات تطوير البرمجيات",
    "services.breadcrumb.home": "الرئيسية",
    "services.breadcrumb.label": "مسار التنقل",
    "services.breadcrumb.services": "الخدمات",
    "services.card.readMore": "استكشف الخدمة",
    "services.cta.primary": "ابدأ مشروعك",
    "services.cta.secondary": "تواصل مع HDS",
    "services.details.badge": "تفاصيل الخدمة",
    "services.details.benefits.description":
      "كل خدمة مصممة لرفع الثقة في التسليم وجودة المنتج وقابلية الصيانة على المدى الطويل.",
    "services.details.benefits.eyebrow": "الفوائد",
    "services.details.benefits.title": "مصممة حول نتائج أعمال قابلة للقياس.",
    "services.details.faq.description":
      "إجابات عملية للفرق التي تقيم النطاق والتسليم والملكية وجاهزية الإطلاق.",
    "services.details.faq.eyebrow": "الأسئلة الشائعة",
    "services.details.faq.title": "أسئلة قبل أن نبدأ.",
    "services.details.features.description":
      "كل مشروع ينتج أصولًا عملية وكودًا جاهزًا للإنتاج وتوثيقًا وأنظمة قابلة للتسليم.",
    "services.details.features.eyebrow": "المخرجات",
    "services.details.features.title": "مخرجات واضحة يمكن لفريقك البناء عليها.",
    "services.details.industries.description":
      "يتكيف نموذج الخدمة مع فرق لديها سير عمل حقيقي ومتطلبات امتثال وضغط نمو.",
    "services.details.industries.eyebrow": "القطاعات",
    "services.details.industries.title": "مصممة لبيئات تشغيل جادة.",
    "services.details.overview.title": "نظرة عامة",
    "services.details.process.description":
      "نموذج تسليم منضبط يتكيف مع كل خدمة ويحافظ على وضوح المخاطر والتقدم.",
    "services.details.process.eyebrow": "العملية",
    "services.details.process.title": "مسار منظم من الاكتشاف إلى الإطلاق.",
    "services.details.related.description":
      "معظم المشاريع تستفيد من مزيج مركز من الاستراتيجية والتصميم والهندسة والسحابة.",
    "services.details.related.eyebrow": "خدمات مرتبطة",
    "services.details.related.title": "اجمع الخدمات بدون تعقيد إضافي.",
    "services.details.technologies.description":
      "نستخدم اختيارات تقنية مثبتة تدعم التسليم الآمن والأداء وقابلية التوسع مستقبلًا.",
    "services.details.technologies.eyebrow": "التقنيات",
    "services.details.technologies.title": "أدوات مختارة للسرعة والاستمرارية.",
    "services.grid.description":
      "اختر خدمة مركزة أو اجمع أكثر من تخصص داخل برنامج تنفيذ واحد واضح.",
    "services.grid.eyebrow": "كتالوج الخدمات",
    "services.grid.title": "خدمات مصممة للمنتجات الرقمية الجادة.",
    "services.industries.ecommerce": "التجارة الإلكترونية والأسواق الرقمية",
    "services.industries.education": "منصات التعليم والتدريب",
    "services.industries.fintech": "التقنية المالية والعمليات المنظمة",
    "services.industries.healthcare": "الرعاية الصحية وفرق التشغيل",
    "services.industries.logistics": "اللوجستيات وعمليات الميدان",
    "services.industries.saas": "شركات المنتجات البرمجية",
    "services.items.cloud.benefits.cost": "إبقاء تكلفة البنية واضحة ومناسبة لاحتياج المنتج.",
    "services.items.cloud.benefits.reliability":
      "رفع الاعتمادية من خلال اختبارات ومعالجة أخطاء منظمة.",
    "services.items.cloud.benefits.security": "تحسين الأمان عبر التحكم في الوصول والانضباط البيئي.",
    "services.items.cloud.cta.description":
      "تساعدك HDS في تحديد النطاق والمعمارية وخطة التسليم المناسبة لخدمة الحلول السحابية.",
    "services.items.cloud.cta.title": "هل تريد تنفيذ الحلول السحابية بثقة؟",
    "services.items.cloud.deliverables.infrastructure": "خطة بنية سحابية وبيئات جاهزة للنشر.",
    "services.items.cloud.deliverables.monitoring": "مراقبة وتسجيل وتنبيهات وتوصيات تشغيلية.",
    "services.items.cloud.deliverables.pipeline": "إعداد مسار نشر وتوثيق سير الإصدارات.",
    "services.items.cloud.faq.migration.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.cloud.faq.migration.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.cloud.faq.monitoring.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.cloud.faq.monitoring.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.cloud.fullDescription":
      "تساعد HDS الفرق على تنفيذ الحلول السحابية من خلال تخطيط واضح ومعمارية قابلة للتوسع وتجربة مستخدم مصقولة وتسليم جاهز للإنتاج.",
    "services.items.cloud.highlights.delivery": "مسارات تسليم تجعل الإصدارات أكثر أمانًا وتكرارًا.",
    "services.items.cloud.highlights.infrastructure":
      "بنية تحتية مخططة للموثوقية والأمان والتكلفة.",
    "services.items.cloud.highlights.observability": "مراقبة وتسجيل تجعل حالة الإنتاج واضحة.",
    "services.items.cloud.imageAlt": "معاينة مرئية لخدمة الحلول السحابية",
    "services.items.cloud.seo.description":
      "خدمات الحلول السحابية للشركات التي تحتاج حلولًا موثوقة وقابلة للتوسع.",
    "services.items.cloud.seo.keywords": "الحلول السحابية، HDS، خدمات برمجية، حلول رقمية",
    "services.items.cloud.seo.title": "الحلول السحابية من HDS",
    "services.items.cloud.shortDescription":
      "تصميم وهندسة بنية تحتية سحابية آمنة وقابلة للتوسع التلقائي مع تحسين التكاليف التشغيلية.",
    "services.items.cloud.subtitle": "الحلول السحابية بمستوى إنتاجي واضح وقابل للنمو.",
    "services.items.cloud.title": "الحلول السحابية",
    "services.items.design.benefits.clarity": "توضيح النطاق قبل الاستثمار الكبير في التنفيذ.",
    "services.items.design.benefits.consistency": "تجربة متسقة عبر الصفحات والفرق والإصدارات.",
    "services.items.design.benefits.usability":
      "تحسين سهولة الاستخدام والتسلسل البصري وحالات التفاعل.",
    "services.items.design.cta.description":
      "تساعدك HDS في تحديد النطاق والمعمارية وخطة التسليم المناسبة لخدمة تصميم تجربة المستخدم.",
    "services.items.design.cta.title": "هل تريد تنفيذ تصميم تجربة المستخدم بثقة؟",
    "services.items.design.deliverables.flows": "رحلات مستخدم وهيكل معلومات وتدفقات منتج رئيسية.",
    "services.items.design.deliverables.prototype": "نماذج قابلة للنقر ومواصفات جاهزة للتسليم.",
    "services.items.design.deliverables.system": "أساس نظام تصميم ومكونات وأنماط تفاعل.",
    "services.items.design.faq.handoff.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.design.faq.handoff.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.design.faq.research.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.design.faq.research.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.design.fullDescription":
      "تساعد HDS الفرق على تنفيذ تصميم تجربة المستخدم من خلال تخطيط واضح ومعمارية قابلة للتوسع وتجربة مستخدم مصقولة وتسليم جاهز للإنتاج.",
    "services.items.design.highlights.prototype": "نماذج تفاعلية توضح القرارات قبل التنفيذ.",
    "services.items.design.highlights.research": "قرارات تصميم مبنية على فهم المستخدمين والقيود.",
    "services.items.design.highlights.systems": "نظام تصميم يحافظ على الاتساق مع النمو.",
    "services.items.design.imageAlt": "معاينة مرئية لخدمة تصميم تجربة المستخدم",
    "services.items.design.seo.description":
      "خدمات تصميم تجربة المستخدم للشركات التي تحتاج حلولًا موثوقة وقابلة للتوسع.",
    "services.items.design.seo.keywords": "تصميم تجربة المستخدم، HDS، خدمات برمجية، حلول رقمية",
    "services.items.design.seo.title": "تصميم تجربة المستخدم من HDS",
    "services.items.design.shortDescription":
      "رسم رحلات مستخدم مدروسة وواجهات بصرية متطورة تعزز من تفاعل عملائك وتزيد معدلات التحويل.",
    "services.items.design.subtitle": "تصميم تجربة المستخدم بمستوى إنتاجي واضح وقابل للنمو.",
    "services.items.design.title": "تصميم تجربة المستخدم",
    "services.items.mobile.benefits.adoption": "رفع التبني من خلال تجربة جوال مركزة وواضحة.",
    "services.items.mobile.benefits.reliability":
      "رفع الاعتمادية من خلال اختبارات ومعالجة أخطاء منظمة.",
    "services.items.mobile.benefits.speed": "تسريع التسليم باستخدام أساس قابل لإعادة الاستخدام.",
    "services.items.mobile.cta.description":
      "تساعدك HDS في تحديد النطاق والمعمارية وخطة التسليم المناسبة لخدمة تطوير تطبيقات الجوال.",
    "services.items.mobile.cta.title": "هل تريد تنفيذ تطوير تطبيقات الجوال بثقة؟",
    "services.items.mobile.deliverables.analytics": "أحداث تحليلية وخطة تحسين بعد الإطلاق.",
    "services.items.mobile.deliverables.app": "أساس تطبيق جوال إنتاجي بشاشات ومكونات قابلة للتوسع.",
    "services.items.mobile.deliverables.store": "قائمة إطلاق وتجهيز للمتاجر وإدارة الإصدارات.",
    "services.items.mobile.faq.platforms.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.mobile.faq.platforms.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.mobile.faq.release.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.mobile.faq.release.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.mobile.fullDescription":
      "تساعد HDS الفرق على تنفيذ تطوير تطبيقات الجوال من خلال تخطيط واضح ومعمارية قابلة للتوسع وتجربة مستخدم مصقولة وتسليم جاهز للإنتاج.",
    "services.items.mobile.highlights.analytics":
      "تحليلات تساعد الفريق على فهم الاستخدام والتحسين.",
    "services.items.mobile.highlights.crossPlatform": "تجربة متسقة عبر أنظمة الجوال الأساسية.",
    "services.items.mobile.highlights.release": "جاهزية واضحة للإصدار والإطلاق.",
    "services.items.mobile.imageAlt": "معاينة مرئية لخدمة تطوير تطبيقات الجوال",
    "services.items.mobile.seo.description":
      "خدمات تطوير تطبيقات الجوال للشركات التي تحتاج حلولًا موثوقة وقابلة للتوسع.",
    "services.items.mobile.seo.keywords": "تطوير تطبيقات الجوال، HDS، خدمات برمجية، حلول رقمية",
    "services.items.mobile.seo.title": "تطوير تطبيقات الجوال من HDS",
    "services.items.mobile.shortDescription":
      "تطوير تطبيقات جوال أصلية وعابرة للأنظمة بأداء فائق وتكامل سلس مع الأنظمة الخلفية.",
    "services.items.mobile.subtitle": "تطوير تطبيقات الجوال بمستوى إنتاجي واضح وقابل للنمو.",
    "services.items.mobile.title": "تطوير تطبيقات الجوال",
    "services.items.web.benefits.conversion": "تحسين التحويل وإنجاز المهام من خلال رحلات أوضح.",
    "services.items.web.benefits.integration": "ربط المنتج بالواجهات والتحليلات والأنظمة الداخلية.",
    "services.items.web.benefits.maintainability": "تقليل تكلفة الصيانة المستقبلية بمعمارية نظيفة.",
    "services.items.web.cta.description":
      "تساعدك HDS في تحديد النطاق والمعمارية وخطة التسليم المناسبة لخدمة تطوير الويب.",
    "services.items.web.cta.title": "هل تريد تنفيذ تطوير الويب بثقة؟",
    "services.items.web.deliverables.api":
      "طبقة تكامل جاهزة للنمو مع الواجهات الخلفية وأنظمة المحتوى.",
    "services.items.web.deliverables.frontend":
      "تطبيق واجهة إنتاجي بمكونات قابلة لإعادة الاستخدام.",
    "services.items.web.deliverables.testing": "اختبارات وتوثيق وجاهزية نشر وتسليم.",
    "services.items.web.faq.cms.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.web.faq.cms.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.web.faq.timeline.answer":
      "نوضح التفاصيل أثناء الاكتشاف ونبني خطة تنفيذ مناسبة للنطاق والأهداف.",
    "services.items.web.faq.timeline.question": "ما الذي يجب معرفته قبل البدء؟",
    "services.items.web.fullDescription":
      "تساعد HDS الفرق على تنفيذ تطوير الويب من خلال تخطيط واضح ومعمارية قابلة للتوسع وتجربة مستخدم مصقولة وتسليم جاهز للإنتاج.",
    "services.items.web.highlights.accessibility":
      "واجهات سهلة الوصول ومتجاوبة مع مختلف المستخدمين.",
    "services.items.web.highlights.architecture": "معمارية مخططة للنمو والملكية طويلة المدى.",
    "services.items.web.highlights.performance": "أداء سريع وتجربة مستقرة عبر الأجهزة.",
    "services.items.web.imageAlt": "معاينة مرئية لخدمة تطوير الويب",
    "services.items.web.seo.description":
      "خدمات تطوير الويب للشركات التي تحتاج حلولًا موثوقة وقابلة للتوسع.",
    "services.items.web.seo.keywords": "تطوير الويب، HDS، خدمات برمجية، حلول رقمية",
    "services.items.web.seo.title": "تطوير الويب من HDS",
    "services.items.web.shortDescription":
      "بناء منصات ويب متكاملة وسريعة الأداء تناسب مسارات أعمالك وتوفر تجربة مستخدم متميزة.",
    "services.items.web.subtitle": "تطوير الويب بمستوى إنتاجي واضح وقابل للنمو.",
    "services.items.web.title": "تطوير الويب",
    "services.listing.cta.description":
      "شاركنا تحدي الأعمال وسنساعدك في تحديد النطاق والمعمارية ومسار التسليم المناسب.",
    "services.listing.cta.title": "هل تحتاج خطة خدمات مناسبة لأهدافك؟",
    "services.listing.faq.description":
      "إجابات مختصرة للفرق التي تريد بدء خدمة واحدة أو دمج أكثر من مسار.",
    "services.listing.faq.eyebrow": "الأسئلة الشائعة",
    "services.listing.faq.mix.answer":
      "نعم. يمكن دمج الويب والجوال والتصميم والسحابة والاستشارات ضمن خارطة طريق واحدة.",
    "services.listing.faq.mix.question": "هل يمكن دمج أكثر من خدمة؟",
    "services.listing.faq.start.answer":
      "نبدأ عادة بالاكتشاف ثم نوصي بأصغر مزيج خدمات يمكنه تحقيق الهدف بأمان.",
    "services.listing.faq.start.question": "أي خدمة نبدأ بها؟",
    "services.listing.faq.support.answer":
      "نعم. يمكن لـ HDS دعم الإصدارات والمراقبة والتحسين وتطوير المنتج بعد الإطلاق.",
    "services.listing.faq.support.question": "هل تستمرون بعد الإطلاق؟",
    "services.listing.faq.title": "كيف تعمل الخدمات في HDS.",
    "services.listing.hero.badge": "خدمات HDS",
    "services.listing.hero.imageAlt": "معاينة لواجهات خدمات برمجية وسحابية مؤسسية",
    "services.listing.hero.primary": "ابدأ مشروعك",
    "services.listing.hero.secondary": "شاهد العملية",
    "services.listing.hero.subtitle":
      "تجمع HDS بين التفكير المنتج والتصميم والهندسة والسحابة وانضباط التسليم في فريق واحد مسؤول.",
    "services.listing.hero.title": "خدمات رقمية تحول الاستراتيجية إلى برمجيات موثوقة.",
    "services.listing.process.description":
      "كل مشروع يسير بإيقاع واضح: اكتشاف، تصميم، بناء، إطلاق، ثم تحسين.",
    "services.listing.process.eyebrow": "عملية التسليم",
    "services.listing.process.title": "نموذج تسليم واحد يتكيف مع كل خدمة.",
    "services.listing.technologies.description":
      "يجمع الكتالوج بين الواجهات والخلفيات والجوال والتصميم والسحابة والأتمتة والإطلاق.",
    "services.listing.technologies.eyebrow": "التغطية التقنية",
    "services.listing.technologies.title": "أساس تقني حديث لكل خدمة.",
    "services.notFound.action": "العودة إلى الخدمات",
    "services.notFound.description": "الخدمة المطلوبة غير موجودة أو ربما تم نقلها.",
    "services.notFound.title": "الخدمة غير موجودة.",
    "services.process.build.description":
      "تنفيذ مرحلي مع مراجعات وتحقق واختبارات ووضوح مستمر في التقدم.",
    "services.process.build.title": "البناء",
    "services.process.design.description":
      "تشكيل الرحلات والحالات وحدود النظام وأولويات التسليم من خلال نماذج عملية.",
    "services.process.design.title": "التصميم",
    "services.process.discover.description":
      "توضيح الأهداف والمستخدمين وسير العمل والقيود والتكاملات ومخاطر الإطلاق قبل التنفيذ.",
    "services.process.discover.title": "الاكتشاف",
    "services.process.launch.description":
      "تجهيز النشر والتحليلات والتوثيق والمراقبة وخطة التحسين بعد الإطلاق.",
    "services.process.launch.title": "الإطلاق",
    "navigation.contact": "تواصل معنا",
    "seo.contact.title": "تواصل مع HDS",
    "seo.contact.description":
      "تحدث مع HDS حول منتج أو منصة أو مبادرة تحول رقمي. يرد فريقنا بخطوة عملية واضحة.",
    "seo.contact.keywords":
      "تواصل مع HDS, استفسار تطوير برمجيات, استشارة منتج رقمي, شريك تقني مؤسسي",
    "contact.breadcrumb.label": "مسار التنقل",
    "contact.breadcrumb.home": "الرئيسية",
    "contact.breadcrumb.contact": "تواصل معنا",
    "contact.hero.badge": "ابدأ المحادثة",
    "contact.hero.title": "لنرسم المسار البرمجي الأنسب لعملك.",
    "contact.hero.subtitle":
      "شارك ما تبنيه أو ما يحتاج إلى توسع أو ما يعيق التقدم. سنساعدك على تحويله إلى خطة تقنية واضحة.",
    "contact.hero.primary": "أرسل استفسارًا",
    "contact.hero.secondary": "راسل فريق المبيعات",
    "contact.methods.eyebrow": "قنوات التواصل",
    "contact.methods.title": "تواصل مع الفريق الصحيح من أول رسالة.",
    "contact.methods.description":
      "سواء كنت تحتاج منتجًا جديدًا أو دعمًا تقنيًا أو نقاشًا استراتيجيًا، يصل طلبك إلى قناة HDS المناسبة.",
    "contact.methods.sales.title": "استفسارات المشاريع",
    "contact.methods.sales.description":
      "ناقش المنتجات والمنصات والتحديثات التقنية أو شراكات الهندسة طويلة المدى.",
    "contact.methods.sales.action": "تواصل مع المبيعات",
    "contact.methods.support.title": "دعم العملاء",
    "contact.methods.support.description":
      "احصل على مساعدة في المشاريع النشطة أو أسئلة التسليم أو المتابعة التشغيلية.",
    "contact.methods.support.action": "تواصل مع الدعم",
    "contact.methods.email.title": "البريد العام",
    "contact.methods.email.description":
      "أرسل أسئلة الشركة أو ملاحظات الشراكة أو السياق الأولي قبل مكالمة الاكتشاف.",
    "contact.methods.email.action": "إرسال بريد",
    "contact.methods.phone.title": "هاتف المكتب",
    "contact.methods.phone.description":
      "تحدث مع مكتب إقليمي للتنسيق العاجل أو طلبات الاستشارة المجدولة.",
    "contact.methods.phone.action": "اتصل بالمكتب",
    "contact.offices.eyebrow": "حضور إقليمي",
    "contact.offices.title": "مكاتب جاهزة للتسليم الإقليمي والعالمي.",
    "contact.offices.description":
      "تعمل HDS عبر أسواق استراتيجية مع ممارسات تسليم موزعة ونوافذ تواصل واضحة.",
    "contact.map.eyebrow": "نظرة على المواقع",
    "contact.map.title": "طبقة مكاتب جاهزة للربط الحي مستقبلًا.",
    "contact.map.description":
      "إحداثيات المكاتب تأتي اليوم من Company Domain ويمكنها لاحقًا تشغيل Google Maps أو Mapbox أو محدد مواقع مخصص دون تغيير مكونات الصفحة.",
    "contact.map.action": "افتح الخريطة",
    "contact.form.eyebrow": "نموذج التواصل",
    "contact.form.title": "أخبرنا بالنتيجة التي تحتاجها.",
    "contact.form.description":
      "كلما شاركت سياقًا أوضح، استطعنا اقتراح الفريق والجدول ونهج التسليم الأنسب بسرعة أكبر.",
    "contact.form.fields.fullName": "الاسم الكامل",
    "contact.form.fields.company": "الشركة",
    "contact.form.fields.email": "البريد الإلكتروني",
    "contact.form.fields.phone": "الهاتف",
    "contact.form.fields.country": "الدولة",
    "contact.form.fields.industry": "القطاع",
    "contact.form.fields.service": "الخدمة",
    "contact.form.fields.budget": "نطاق الميزانية",
    "contact.form.fields.timeline": "الجدول الزمني",
    "contact.form.fields.message": "رسالة المشروع",
    "contact.form.fields.newsletterOptIn":
      "أرسلوا لي من حين لآخر رؤى HDS حول استراتيجية المنتجات والهندسة والتحول الرقمي.",
    "contact.form.placeholders.fullName": "اسمك",
    "contact.form.placeholders.company": "الشركة أو المؤسسة",
    "contact.form.placeholders.email": "you@company.com",
    "contact.form.placeholders.phone": "+20 100 000 0000",
    "contact.form.placeholders.country": "اختر الدولة",
    "contact.form.placeholders.industry": "اختر القطاع",
    "contact.form.placeholders.service": "اختر الخدمة",
    "contact.form.placeholders.budget": "اختر الميزانية",
    "contact.form.placeholders.timeline": "اختر الجدول الزمني",
    "contact.form.placeholders.message":
      "صف المنتج أو التحدي أو الأهداف أو المستخدمين أو التكاملات أو الجدول الزمني الذي تفكر فيه.",
    "contact.form.actions.submit": "إرسال الاستفسار",
    "contact.form.actions.retry": "حاول مرة أخرى",
    "contact.form.status.successTitle": "تم استلام الاستفسار",
    "contact.form.status.successDescription":
      "شكرًا لك. سيراجع فريق HDS طلبك ويرد بخطوة عملية تالية.",
    "contact.form.status.errorTitle": "فشل الإرسال",
    "contact.form.status.errorDescription":
      "تعذر إرسال استفسارك الآن. يرجى مراجعة الاتصال والمحاولة مرة أخرى.",
    "contact.repository.submissionFailed": "تعذر إرسال استفسارك الآن.",
    "contact.form.errors.required": "هذا الحقل مطلوب.",
    "contact.form.errors.email": "أدخل بريدًا إلكترونيًا صحيحًا.",
    "contact.form.errors.phone": "أدخل رقم هاتف صحيحًا.",
    "contact.form.errors.maxLength": "هذه القيمة طويلة جدًا.",
    "contact.form.errors.maxMessage": "يرجى إبقاء الرسالة أقل من 1200 حرف.",
    "contact.options.country.egypt": "مصر",
    "contact.options.country.uae": "الإمارات العربية المتحدة",
    "contact.options.country.saudiArabia": "المملكة العربية السعودية",
    "contact.options.country.usa": "الولايات المتحدة",
    "contact.options.country.germany": "ألمانيا",
    "contact.options.country.other": "أخرى",
    "contact.options.industry.healthcare": "الرعاية الصحية",
    "contact.options.industry.fintech": "التقنيات المالية",
    "contact.options.industry.ecommerce": "التجارة الإلكترونية",
    "contact.options.industry.logistics": "الخدمات اللوجستية",
    "contact.options.industry.education": "التعليم",
    "contact.options.industry.realEstate": "العقارات",
    "contact.options.industry.manufacturing": "التصنيع",
    "contact.options.industry.saas": "SaaS",
    "contact.options.industry.other": "أخرى",
    "contact.options.service.webDevelopment": "تطوير الويب",
    "contact.options.service.mobileDevelopment": "تطوير تطبيقات الجوال",
    "contact.options.service.uiUxDesign": "تصميم UI/UX",
    "contact.options.service.cloudSolutions": "حلول السحابة",
    "contact.options.service.productStrategy": "استراتيجية المنتج",
    "contact.options.service.notSure": "لست متأكدًا بعد",
    "contact.options.budget.under5k": "أقل من 5 آلاف دولار",
    "contact.options.budget.from5kTo10k": "5 آلاف - 10 آلاف دولار",
    "contact.options.budget.from10kTo25k": "10 آلاف - 25 ألف دولار",
    "contact.options.budget.over25k": "أكثر من 25 ألف دولار",
    "contact.options.budget.notSure": "لست متأكدًا بعد",
    "contact.options.timeline.asap": "في أقرب وقت ممكن",
    "contact.options.timeline.oneToThree": "1-3 أشهر",
    "contact.options.timeline.threeToSix": "3-6 أشهر",
    "contact.options.timeline.sixPlus": "أكثر من 6 أشهر",
    "contact.options.timeline.notSure": "لست متأكدًا بعد",
    "contact.faq.eyebrow": "أسئلة التواصل",
    "contact.faq.title": "بعض التفاصيل قبل أن نتحدث.",
    "contact.faq.description": "تساعد هذه الإجابات في ضبط التوقعات قبل مكالمة الاكتشاف الأولى.",
    "contact.faq.responseTime.question": "ما سرعة رد HDS؟",
    "contact.faq.responseTime.answer":
      "تتلقى معظم الاستفسارات المؤهلة ردًا خلال يوم عمل واحد، مع توجيه الطلبات التشغيلية العاجلة بسرعة أكبر.",
    "contact.faq.nda.question": "هل يمكن مناقشة المشروع تحت اتفاقية سرية؟",
    "contact.faq.nda.answer":
      "نعم. يمكننا توقيع اتفاقية سرية قبل مراجعة أي معلومات أعمال أو تقنية أو منتج حساسة.",
    "contact.faq.handover.question": "هل يمكن لـ HDS العمل على منتج أو قاعدة كود موجودة؟",
    "contact.faq.handover.answer":
      "نعم. يمكننا تدقيق الأنظمة الحالية أو تثبيت التسليم أو تحديث المعمارية أو توسيع خارطة طريق منتج نشط.",
    "contact.cta.title": "تفضل البدء من طبيعة العمل نفسه؟",
    "contact.cta.description":
      "استكشف الخدمات التي يمكن لـ HDS تجميعها حول منتجك، ثم أرسل للفريق السياق الدقيق الذي تريد مناقشته.",
    "contact.cta.primary": "ابدأ استفسارًا",
    "contact.cta.secondary": "عرض الخدمات",
  },
};
