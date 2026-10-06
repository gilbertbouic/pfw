export type Lang = "en" | "fr";

const en = {
  skipToContent: "Skip to content",
  lang: {
    groupLabel: "Language",
    en: "EN",
    fr: "FR",
  },
  mkweli: {
    product: "A Mkweli product",
  },
  common: {
    notPublished: "Not published",
    notReported: "Not reported",
    source: "Source",
    sources: "Sources",
    lastReviewed: "Last reviewed {date}",
    asOf: "as of {date}",
    cover: "cover {date}",
  },
  labels: {
    status: {
      approved: "Approved",
      under_implementation: "Under implementation",
      completed: "Completed",
      unknown: "Unknown",
    },
    objective: {
      adaptation: "Adaptation",
      mitigation: "Mitigation",
      cross_cutting: "Cross-cutting",
    },
    kind: {
      multilateral_project: "Multilateral project",
      readiness: "Readiness / NAP",
      grant_programme: "Grant programme",
    },
    geography: {
      site: "Named sites",
      national: "National / multi-island",
      multi_country: "Multi-country",
      unknown: "Unknown",
    },
    hazard: {
      flood: "Flood",
      cyclone: "Cyclone",
      coastal: "Coastal / sea-level",
      drought: "Drought",
      heat: "Heat",
      biodiversity: "Biodiversity / ecosystems",
      energy_transition: "Energy transition",
      multi: "Multi-hazard",
    },
    sector: {
      climate: "Climate",
      transport: "Transport",
      health: "Health",
      social: "Social",
      other: "Other",
    },
    recordInstrument: {
      grant: "Grant",
      loan: "Loan",
      mixed: "Mixed",
      technical_assistance: "Technical assistance",
      unknown: "Not stated as grant or loan",
    },
    confidence: {
      official_register: "Official funder register",
      government_document: "Government document",
      secondary_report: "Secondary public report",
    },
    reportType: {
      apr: "Annual performance report",
      ppr: "Project performance report",
      evaluation: "Evaluation",
      library: "Report library",
    },
    island: {
      mauritius: "Mauritius",
      rodrigues: "Rodrigues",
      agalega: "Agaléga",
    },
    instrument: {
      loan: "Loan",
      grantOrUnspecified: "Grant / unspecified",
      grantAndLoan: "Grant and loan",
    },
  },
  header: {
    backTo: "Back to",
    backToHub: "Back to mkweli.tech",
    productName: "Public Funds Watch",
    tagline: "Mauritius external public funding, each figure cited",
    browseRegistry: "Browse registry",
    toggleMenu: "Toggle menu",
    primaryNav: "Primary",
    nav: {
      home: "Home",
      registry: "Registry",
      landscape: "Landscape",
      places: "Places",
      reports: "Reports",
      sources: "Sources",
      about: "About",
      getInvolved: "Get involved",
    },
  },
  footer: {
    blurb:
      "An independent public ledger of external public funding for Mauritius, including climate finance. Every figure is copied from a cited document or labelled Not published.",
    explore: "Explore",
    projectRegistry: "Project registry",
    fundingLandscape: "Funding landscape",
    places: "Places",
    donorReports: "Donor reports",
    sources: "Sources",
    aboutProduct: "About the product",
    problemSolution: "Problem & solution",
    getInvolved: "Get involved",
    ledger: "Ledger",
    lastReviewed: "Last reviewed {date}",
    unknownAmounts: 'Unknown amounts shown as "Not published"',
    sourcedOnly: "Sourced records only",
    copyright: "© {year} Public Funds Watch. All rights reserved.",
    disclaimer: "Not an official government or funder reporting system.",
  },
  sourceBanner: {
    title: "Sourced ledger",
    body: "Independent compilation of public documents. Not an official government or funder portal. Last reviewed {date}.",
    sourcesLink: "Sources →",
  },
  contactForm: {
    interests: {
      pilot: "Pilot / government partnership",
      funding: "Funding / donor support",
      csoMedia: "Civil society / media",
      tech: "Technical contribution",
      research: "Research / data",
      press: "Press enquiry",
      other: "Other",
    },
    sentTitle: "Message sent",
    sentBody:
      "Thank you. We will reply to the address you provided. For urgent matters you can also email {email}.",
    name: "Name",
    email: "Email",
    organisation: "Organisation",
    locality: "Country / locality",
    interest: "Interest",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@organisation.org",
    orgPlaceholder: "Ministry, CSO, media, company...",
    localityPlaceholder: "e.g. Mauritius - Port Louis",
    messagePlaceholder:
      "How would you like to get involved? Include timeline if relevant.",
    selectOne: "Select one...",
    disclaimer:
      "This form is for partnership, pilot, press, and technical enquiries.",
    disclaimerStrong:
      "Do not use it for confidential integrity or whistleblower reports",
    disclaimerTail: "- a separate safe channel is planned. Messages go to {email}.",
    sending: "Sending...",
    send: "Send message",
    orEmail: "Or email support@mkweli.tech →",
    subject: "Public Funds Watch - Get involved",
    fallbackName: "Name",
    fallbackOrg: "Organisation",
    fallbackEmail: "Email",
    fallbackInterest: "Interest",
  },
  projectCard: {
    geography: "Geography",
    mauritiusShare: "Mauritius share",
    sourceOne: "{count} source",
    sourceOther: "{count} sources",
    viewRecord: "View record and sources →",
  },
  projectFilters: {
    search: "Search",
    searchPlaceholder: "Title, funder, place...",
    status: "Status",
    allStatuses: "All statuses",
    geography: "Geography",
    allGeographies: "All geographies",
    hazard: "Hazard",
    allHazards: "All hazards",
    objective: "Objective",
    allObjectives: "All objectives",
    funder: "Funder",
    allFunders: "All funders",
    sector: "Sector",
    allSectors: "All sectors",
    instrument: "Instrument",
    allInstruments: "All instruments",
  },
  worksSchematic: {
    mauritiusTitle: "Mauritius - named localities",
    rodriguesTitle: "Rodrigues - named localities",
    agalegaOff: "Agaléga (off this figure):",
    siteSpendNotReported: "Site-level spend not reported.",
    pinTitle: "{name} - site-level spend not reported",
    caption:
      "Schematic outline for orientation only - not a surveyed coastline. Dots are approximate localities named in public reports.",
  },
  glance: {
    ledgerLine: "Sourced ledger. Not an official portal. Reviewed {date}.",
    notOneTotal: "These four figures are not added together.",
    record: "Record",
    donor: "Donor",
    year: "Year",
    amount: "Mauritius amount",
    notPublished: "Not published",
    olderLabel: "Older completed project",
    diffTitle: "Since {date}",
    doNotInvent: "We do not invent a figure.",
    sources: "Sources",
    quoteMissing: "A verbatim sentence and a page were not recorded for this figure.",
    openSource: "Open the document",
    close: "Close",
    added: "Added",
    removed: "Left the main list",
    offList: "Shown here, off the main list",
    conversion: "Conversion pinned",
    groups: {
      un: "UN",
      world_bank: "World Bank",
      government_mauritius: "Government of Mauritius",
      ngo_red_cross: "NGO / Red Cross",
      other: "Other publisher",
    },
  },
  home: {
    sourcesReviewed: "Public sources · last reviewed {date}",
    heroTitle: "What public documents say about",
    heroTitleAccent: "external public funding in Mauritius",
    heroLead:
      "Donor-funded projects with a published Mauritius amount of at least USD 100,000. A still-open project over USD 5 million stays even if it started before 5 October 2016.",
    coverageTitle: "What this registry includes",
    coveragePoints: [
      "Mauritius only. A row needs a published Mauritius amount of at least USD 100,000.",
      "A new row is a donor-funded grant of at least USD 100,000 with a start or approval on or after 5 October 2016, from the UN, a named foreign government, the World Bank, the Asian Development Bank, the African Development Bank, the Red Cross, or a Mauritian body the source calls an NGO. A still-open project over USD 5 million can be older.",
      "Loans are not added as grants. Where one project publishes both a grant and a loan, only the grant is in the registry amount.",
      "Per diems, overheads, and expenditure stay “Not published” unless the source states the figure. Shared money is counted once in the registry total.",
    ],
    openRegistry: "Open the sourced registry",
    fundingLandscape: "Funding landscape",
    readSeparately: "Read the numbers separately",
    notOneTotal:
      "Need, tagged spend, and donor projects are not one total.",
    fmcpNote:
      "The ministry FMCP presentation also lists {amount} of international support from 2017 onwards, and says 8.4% of the NDC requirement has been mobilized. {amount} is about 1.8% of USD 6.5 billion - that 8.4% line is published as-is and not reconciled here.",
    agencyTable: "Agency table",
    registryEyebrow: "Registry",
    registryTitle:
      "{count} sourced records. Mauritius amounts only where a document publishes them.",
    registryLead:
      '{count} records have a published Mauritius-attributed amount. Multi-country GCF programmes are listed with programme totals and "Mauritius share: not published."',
    fullRegistry: "Full registry →",
    tableRecord: "Record",
    tableGeography: "Geography",
    tableMauritiusAmount: "Mauritius amount",
    whatThisIs: "What this site is",
    briefingTitle: "A public briefing, not a live government dashboard.",
    briefingBody:
      "Public Funds Watch is also a proposed transparency platform (community evidence, integrity channel, council consoles). Those modules are not live. The pages here publish only what we could verify in public documents as of {date}.",
    howWeCite: "How we cite",
    aboutProduct: "About the product",
    weDoNotInvent: "We do not invent",
    doNotInvent: [
      "Disbursement or expenditure when the source is silent",
      "Mauritius splits of regional programmes",
      "Local drainage or shelter projects without a public record",
      '"Delayed" status without a named document',
    ],
    machineReadable: "Machine-readable copy of the current ledger:",
  },
  headlines: {
    "ndc-need": {
      label: "NDC implementation need (to 2030)",
      measures:
        "Mauritius's own estimate of financial needs to implement the updated 2021 NDC - not money already received.",
      detail:
        "USD 4.5 billion adaptation and USD 2.0 billion mitigation. Unconditional USD 2.3 billion (35%, government and private sector); conditional USD 4.2 billion (65%, international sources).",
    },
    "ccdr-need": {
      label: "CCDR additional investment (25 years, NPV)",
      measures:
        "World Bank modelled investment need - a different question from the NDC USD 6.5 billion to 2030. Do not add the two figures.",
      detail:
        "World Bank Country Climate and Development Report: additional investment over the next 25 years in net present value terms, with an estimated annual gap of USD 213 million. About USD 1.4 billion is required through 2030.",
    },
    "appendix-h": {
      label: "Climate-tagged budget (FY 2025/26)",
      measures:
        "Government climate-budget tagging of selected votes for one fiscal year - not international climate finance received, and not comparable to the UNDRR DRR/CCA tagging exercise.",
      detail:
        "Adaptation Rs 5.589 billion, mitigation Rs 1.012 billion, mixed Rs 0.100 billion across six ministries and two special funds (Climate and Sustainability Fund and Projects Development Fund). About 2.9% of appropriated expenditure including those funds. CSF itself is tagged at Rs 3.473 billion.",
    },
    "fmcp-received": {
      label: "International support listed (from 2017)",
      measures:
        "A ministry-compiled list of approved international support, not a complete national climate-finance account.",
      detail:
        'Ministry of Environment FMCP presentation: grants and loans from named agencies from 2017 onwards (GCF 38.51, GEF 37.35, Adaptation Fund 4.44, AFD 9.20, EU 13.15, GCCA+ 2.26, Abu Dhabi Fund 10.00 loan, AfDB 2.44 loan, and smaller lines). The same slide states "8.4% of the requirement has been mobilized." USD 118.05 million is about 1.8% of the NDC USD 6.5 billion - the 8.4% line is not explained by that total.',
    },
  },
  about: {
    eyebrow: "About",
    title: "A public ledger of donor-funded projects",
    description:
      "Donor-funded projects in Mauritius with a published amount of at least USD 100,000. Climate finance is one sector.",
    rulesTitle: "What is included",
    rules: [
      "A Mauritius amount the source prints, of at least USD 100,000. USD 100,000 is included.",
      "The same floor covers the UN, a named foreign government, World Bank grants, Asian Development Bank grants, African Development Bank grants, Red Cross projects, and a Mauritian body the source calls an NGO.",
      "A still-open project over USD 5 million stays even if it started before 5 October 2016.",
      "No published Mauritius amount: named on Sources, no project page.",
      "A figure the source does not print stays “Not published.”",
    ],
    openLedger: "The ledger",
    proposed:
      "Community evidence, the integrity vault, and government consoles are proposed, not live.",
  },
  getInvolved: {
    eyebrow: "Get involved",
    title: "Build the climate finance accountability layer with us",
    description:
      "Whether you represent a ministry, council, donor, CSO, newsroom, or technical partner - use the form below or email support@mkweli.tech.",
    paths: [
      {
        title: "Government & local councils",
        body: "Co-design a country pack, select pilot localities, and define data-sharing and response SLAs.",
      },
      {
        title: "Donors & climate funds",
        body: "Support the 12-month reference pilot envelope or multi-country product build as a digital public good.",
      },
      {
        title: "Civil society & media",
        body: "Shape citizen reporting categories, verification workflows, and open-data usability for watchdogs.",
      },
      {
        title: "Technologists & researchers",
        body: "Contribute to schemas, open-source public core, hazard layers, and independent analysis of published data.",
      },
    ],
    formTitle: "Contact form",
    formLead: "We read every message. Typical response within a few working days.",
    directContact: "Direct contact",
    preferEmail:
      "Prefer email? Include organisation, country/locality, interest area, and timeline.",
    project: "Project",
    site: "Site:",
    repository: "Repository:",
    publicRepo: "(public)",
    transparency: "Transparency note",
    transparencyBody:
      "Project and budget records on this site are compiled from cited public documents. They are not a live government feed. See {sources}. The USD 550,000 Year-1 envelope mentioned in concept notes is a proposed Public Funds Watch pilot cost, not a Mauritius climate-finance statistic.",
    sourcesWord: "sources",
  },
  landscape: {
    eyebrow: "Landscape",
    title:
      "Channels of climate money - and what each number actually measures",
    description:
      "Public climate-finance figures for Mauritius come from different systems. This page lists those channels without adding them into a single total.",
    needTitle: "Need versus spend versus support received",
    needLead:
      "The NDC, the World Bank CCDR, the national budget tag, and the ministry's FMCP table answer different questions. Mixing them produces a number no source published.",
    fmcpTitle: "International support listed by the ministry (from 2017)",
    fmcpLead:
      "Copied from the Ministry of Environment FMCP-3 presentation. The slide total is USD 118.05 million. The same slide says 8.4% of the NDC requirement has been mobilized; 118.05 / 6,500 is about 1.8%. We do not choose between those two statements.",
    agency: "Agency",
    usdMillion: "USD million",
    instrument: "Instrument",
    totalAsListed: "Total as listed",
    fmcpSourceNote:
      "Source: {link}. Agency lines are not always the same as a single project in the registry (for example GCF 38.51 vs FP033 grant 28.21).",
    fmcpSourceLink: "Mauritius FMCP-3 presentation",
    domesticTitle: "Domestic instruments",
    privateTitle: "Private lending (not public expenditure)",
    integrityTitle: "Tracking and integrity - published findings",
    integrityLead:
      "These are survey and research claims, cited as such. They are not legal findings.",
    footerNote:
      "Project-level records live in the {registry}. Citation rules are on {sources}.",
    registryWord: "registry",
    sourcesWord: "Sources",
    domesticNotes: {
      ccr: {
        title: "Corporate Climate Responsibility levy",
        body: "A 2% levy on chargeable income for companies with turnover above Rs 50 million, effective from the year of assessment commencing 1 July 2024. Proceeds are intended for the Climate and Sustainability Fund.",
      },
      csf: {
        title: "Climate and Sustainability Fund earmark (FY 2024/25)",
        body: "The 2024-25 Budget Speech earmarked Rs 3.2 billion under the Climate and Sustainability Fund for projects to address climate change, and stated that adaptation and mitigation would require some Rs 300 billion.",
      },
      undrr: {
        title: "UNDRR DRR + CCA budget tagging (pilot)",
        body: "A combined disaster-risk-reduction and climate-change-adaptation tagging exercise for 2023-24 and 2024-25 estimated unweighted principal and significant expenditure at MUR 38.927 billion (15.1% of Vote expenditure, 5.2% of GDP). This uses a wider definition than Appendix H and is not an update of the same series.",
      },
    },
    integrityNotes: {
      tm: {
        title: "Transparency Mauritius survey (2025)",
        body: "An online survey of 25 public, finance, academic and NGO climate actors (15 June-10 September 2025) found that 84% identified corruption as the main threat to climate-finance delivery. Transparency Mauritius reported that none of the respondents listed transparency, accountability, disclosure or anti-corruption among the essential elements of climate finance.",
      },
      conversation: {
        title: "Independent research on tracking gaps",
        body: "A June 2026 analysis in The Conversation reports no legal convictions or formal corruption indictments linked to climate finance in Mauritius, and argues that tracking and reporting of funds once they enter the system remain weak. It discusses a flood-drainage implementation case as mismanagement, not as a conviction.",
      },
      taxonomy: {
        title: "National green taxonomy (in development)",
        body: "UNDP Mauritius, with the British High Commission, is supporting a National Green Taxonomy and Guidelines for Climate Change Reporting. A stakeholder workshop was held on 14-15 October 2025.",
      },
    },
    privateNotes: {
      absa: {
        title: "Absa Mauritius green-loan target",
        body: "Absa Mauritius stated it intends to increase green loans to MUR 30 billion by 2030, from MUR 8 billion at the end of the previous year. This is a bank lending target, not public climate expenditure.",
      },
    },
  },
  map: {
    eyebrow: "Places",
    title: "Where public reports name a place",
    lead:
      "A schematic of Mauritius and Rodrigues - not a world map - with localities named in CEB, UNDP, GCF or Adaptation Fund documents. Site-level spend is almost never published, so those lines say {notReported}. {caveat}",
    notReportedStrong: "not reported",
    pinCaveat:
      "Approximate locality for a place named in a public report - not a surveyed works polygon.",
    registryList: "Registry list",
    onMapCount: "{count} places on the island figures · no tile server",
    namedTitle: "Named in reports",
    namedLead:
      "Works or activity reported at these places. A batch grant (for example USD 7.5 million for 14 MW of batteries) is not divided across substations.",
    colPlace: "Place",
    colIsland: "Island",
    colSpend: "Site-level spend",
    colSource: "Source",
    offMapFrame: " · off map frame",
    offThisFrame: "Off this map frame: {names}.",
    noSiteTitle: "Site-level spend not reported",
    noSiteLead:
      "These ledger records have no named works site in the documents reviewed. Money may still have been approved or disbursed to an implementer - see the project page.",
    notReportedAtSite: "Not reported at site",
    linkedRecords: "Linked records:",
  },
  reports: {
    eyebrow: "Reports",
    title: "What funders have published",
    description:
      "Disbursements are often gated on reports. For these Mauritius-linked GCF projects the public library is annual performance reports, not a quarterly calendar. We list documents that are on GCF, AF or UNDP pages - we do not invent due dates.",
    colReport: "Report",
    colType: "Type",
    colPeriod: "Period",
    colProject: "Project",
    noneTitle: "No public report listed",
    noneLead:
      "These ledger records had no APR, PPR or evaluation on the funder pages reviewed.",
    notOnFunderSite: "Not published on the funder site reviewed",
  },
  sources: {
    eyebrow: "Sources & methods",
    title: "Every public number on this site has a URL",
    description:
      "This is an independent compilation, last reviewed on the date in the banner. It is not an official government, GCF, or Adaptation Fund reporting system.",
    rulesTitle: "Rules",
    rules: [
      "A money figure appears only if a cited public document contains that figure (or an official table from which it is copied).",
      'If a funder has not published disbursement or expenditure, the field is "Not published" - never zero, never estimated.',
      "Multi-country programmes keep programme totals and state that the Mauritius share is unpublished unless a document splits it (the Adaptation Fund coral component is the current exception).",
      "Need (NDC, CCDR), tagged domestic spend (Appendix H), and international support received (FMCP, funder pages) are not added together.",
      "Status is taken from the funder or UNDP page (under implementation, completed) or left unknown. We do not mark projects delayed for illustration.",
      'Named works sites are shown on a Mauritius/Rodrigues schematic (not a world map). Dots are approximate localities from CEB, UNDP, GCF or Adaptation Fund reports, not surveyed works polygons. Site-level spend is "Not reported" unless a document publishes a figure for that site. Batch grants are not divided across substations.',
      'Donor reports are APRs, PPRs and evaluations linked from GCF or Adaptation Fund pages. GCF public reporting for these projects is annual. We do not add a quarterly "next tranche" calendar unless a cited document states that cycle.',
      "A currency other than USD is tested with the European Central Bank reference rate for the document date, pinned via Frankfurter. The original currency stays the cited amount. The rate is not refreshed on each page view.",
      "A main-list row is a donor-funded project with a published Mauritius amount of at least USD 100,000. Red Cross projects and Mauritian NGO grants use that same rule when a public source states a Mauritius figure. A project that started before 5 October 2016 stays off the main list, unless it is still open and that amount is over USD 5 million. A row with no published Mauritius amount is named on this page and has no project page. An existing climate record with no published start date stays when its published amount is at least USD 100,000.",
    ],
    headlineFigures: "Headline figures",
    registryRecords: "Registry records",
    openDownloads: "Open downloads",
    csvNote:
      "The CSV includes a source_urls column so a download stays verifiable offline.",
    olderTitle: "Older than 10 years",
    olderLead:
      "A project that started before 5 October 2016 stays off the main list, unless it is still open and the published Mauritius amount is over USD 5 million. It is named here.",
    skippedTitle: "Reviewed and not added",
    skippedLead:
      "These pages were opened for this pass. A class with no qualifying public grant is named here. A blank field is not filled with a loan or an estimate.",
    jsonLink: "JSON - /data/projects.json",
    csvLink: "CSV - /data/projects.csv",
    corrections: "Ledger last reviewed {date}. Corrections: {email}.",
  },
  problemSolution: {
    eyebrow: "Problem & Solution",
    title:
      "Climate finance without accountability fails the people who need it most",
    description:
      "Rising hazards and larger portfolios mean little if communities cannot see projects, track money, or safely report failures. The modules below describe the product being built. Only the sourced public ledger is live.",
    problemEyebrow: "The problem",
    problemTitle: "Delivery fails for universal reasons",
    problemLead:
      "From SIDS to large economies, adaptation and mitigation portfolios share the same governance gaps. Mauritius faces frequent floods and cyclones while mobilizing domestic and international climate finance - making transparent, community-checked delivery urgent.",
    failureMode: "Failure mode",
    citizenImpact: "Citizen impact",
    failures: [
      {
        mode: "Fragmented reporting",
        impact: "No single source of truth for projects, budgets, and status.",
      },
      {
        mode: "Weak budget-to-site traceability",
        impact: "Money disappears between approval and community-visible works.",
      },
      {
        mode: "Limited local authority visibility",
        impact: "Delays and mis-prioritization at the places most at risk.",
      },
      {
        mode: "Unsafe or absent integrity channels",
        impact: "Corruption and greenwashing go unreported.",
      },
      {
        mode: "Closed data",
        impact: "Media and NGOs cannot audit independently.",
      },
      {
        mode: "Language & connectivity barriers",
        impact: "Excluded communities cannot participate in oversight.",
      },
    ],
    tocEyebrow: "Theory of change",
    tocIf: "If",
    tocIfBody:
      "governments and partners publish climate projects and budget flows, communities can submit field evidence, and whistleblowers can report integrity risks safely -",
    tocAnd: "and",
    tocAndBody: "local and national actors act under clear SLAs -",
    tocThen: "then",
    tocThenBody:
      "delays and misuse are detected earlier, trust rises, and adaptation resources reach vulnerable communities more fairly.",
    solutionEyebrow: "The solution",
    solutionTitle: "Modular platform, two security zones",
    solutionLead:
      "Public Funds Watch is designed as pluggable modules on a multi-tenant core. Public transparency data is open by default. Integrity reports would live in a separate vault with no identity join keys to the public zone. Community evidence, the integrity channel, and government consoles are not operating on this site.",
    modules: [
      {
        id: "M1",
        name: "Project registry",
        detail:
          "Master records for climate projects: actors, locations, lifecycle status, documents, and public change logs.",
      },
      {
        id: "M2",
        name: "Budget & fund flows",
        detail:
          "Source → instrument → appropriation → disbursement → expenditure → remaining, with co-financing fields.",
      },
      {
        id: "M3",
        name: "Map & milestones",
        detail:
          "MapLibre/OSM explorer with filters by hazard, status, funder, and admin unit; plan vs actual milestones.",
      },
      {
        id: "M4",
        name: "Community evidence",
        detail:
          "Guided reports for delay, quality, non-delivery, exclusion, environmental harm, and greenwashing signals.",
      },
      {
        id: "M5",
        name: "Integrity safe channel",
        detail:
          "Anonymous intake, case codes, encrypted attachments, handler workflow - hard-isolated from public identity data.",
      },
      {
        id: "M6",
        name: "Government ops consoles",
        detail:
          "Local and national dashboards for portfolio health, inboxes, SLAs, and controlled contributor updates.",
      },
      {
        id: "M7",
        name: "Open data & API",
        detail:
          "REST/CSV/GeoJSON exports, data dictionary, open license for public datasets.",
      },
      {
        id: "M8+",
        name: "Scorecards & green integrity",
        detail:
          "Delay alerts, monthly public scorecards, and checklist-based anti-greenwashing scores.",
      },
    ],
    howTitle: "How it works",
    howLead:
      "Intended loop from funding decision to community verification and public accountability - a product design, not a description of live workflows.",
    flow: [
      "Fund approved / project listed",
      "Budget chain & milestones published",
      "Citizens submit geotagged field evidence",
      "Issues flagged and escalated under SLAs",
      "Officials respond; status updated publicly",
      "Scorecards & open data for independent audit",
    ],
    nowTitle: "What you can use now",
    nowItems: {
      narrative: "Public narrative site (mission, problem, solution)",
      registry: "Demo project registry",
      map: "map",
      openData: ", and open CSV/JSON",
      plan: "Product build plan and Mauritius research pack in the repo",
    },
    nextTitle: "What comes next",
    nextItems: [
      "Community evidence form (delivery issues)",
      "Official data-sharing and live council updates",
      "Integrity vault & council consoles after legal/security gates",
    ],
    cta: "Ready to pilot, fund, or co-design a country pack?",
    getInvolved: "Get involved",
  },
  projects: {
    eyebrow: "Public registry",
    title: "Sourced public-funding records",
    lead:
      'Only records with at least one public URL. Regional programme totals are not treated as Mauritius receipts. Amounts that funders have not published are shown as "Not published."',
    openMap: "Open map",
    downloadCsv: "Download CSV",
    recordsShown: "Records shown",
    attributedSum: "Listed USD, shared money once",
    withAmount: "With a Mauritius amount",
    multiCountry: "Multi-country programmes",
    sumNote:
      "The USD sum adds Mauritius amounts a source assigns to Mauritius. A euro amount is included at the European Central Bank reference rate pinned on the record. Shared money is counted once. Regional programme totals without a Mauritius line are omitted. The 2012 Adaptation Fund coastal programme is older than 10 years and is not in this sum.",
    noMatch: "No records match these filters. Clear a filter and try again.",
    alsoAvailable: "Also available as",
    jsonApi: "JSON",
    sourcesAndMethods: "Sources and methods",
  },
  projectDetail: {
    allRecords: "← All records",
    publishedAmounts: "Published amounts",
    publishedAmountsLead:
      "Only lines a cited document publishes. Empty rows mean the source does not give a number, not that the amount is zero.",
    cofinancing: "Co-financing (as published)",
    totalValue: "Total value (as published)",
    disbursed: "Disbursed (as published)",
    mauritiusAttributed: "Mauritius-attributed amount",
    start: "Start",
    end: "End / estimated completion",
    whereMoney: "Where the money went",
    whereMoneyLead:
      "Disbursement to an accredited entity is not the same as expenditure at a named site. Site-level rupees or dollars are shown only when a cited report publishes them.",
    disbursedToImplementer: "Disbursed to implementer",
    namedWorksSites: "Named works sites",
    placeOne: "{count} place in public reports",
    placeOther: "{count} places in public reports",
    siteLevelSpend: "Site-level spend:",
    noNamedSite:
      "No named works site was found in the documents reviewed for this record.",
    openMap: "Open spend geography map →",
    donorReports: "Donor reports",
    donorReportsLead:
      "Public performance reports linked from the funder. GCF reporting for these projects is annual (APR), not a quarterly calendar unless a document says so. A missing year means it was not on the funder site we reviewed - not that we marked it overdue.",
    noReports:
      "No public APR, PPR or evaluation was listed on the funder pages reviewed for this record.",
    allReports: "All published reports →",
    resultsTitle: "Results stated by sources",
    sourcesTitle: "Sources",
    confidence: "Confidence: {label} · Last reviewed {date}",
    geography: "Geography",
    showPlaces: "Show named places →",
    notPinned:
      "No named works site in the documents reviewed - not pinned.",
    hazards: "Hazards",
    funders: "Funders",
    implementing: "Implementing entities",
    declaredExpenditure: "Declared expenditure",
    usdEquivalent: "USD equivalent for the threshold test",
    rateSource: "Rate source",
    perDiems: "Per diems",
    overheads: "Overheads",
    sharedExpenditure: "Shared expenditure:",
    outsideAgreed: "Outside the agreed budget:",
    discrepancy: "Published figures differ:",
    reportingProfile: "Reporting profile",
    staleAnnual:
      "The last review of this annual report is more than 12 months before 5 October 2026. This line does not invent a filing deadline.",
    startUnpublished:
      "The start date is not published in the sources reviewed for this record, so the 10-year test cannot be applied. The record stays because it was already on the climate list.",
  },
  gate: {
    label: "Opening",
    enter: "Enter",
  },
};

const fr: typeof en = {
  skipToContent: "Aller au contenu",
  lang: {
    groupLabel: "Langue",
    en: "EN",
    fr: "FR",
  },
  mkweli: {
    product: "Un produit Mkweli",
  },
  common: {
    notPublished: "Non publié",
    notReported: "Non communiqué",
    source: "Source",
    sources: "Sources",
    lastReviewed: "Dernière revue le {date}",
    asOf: "en date du {date}",
    cover: "couverture {date}",
  },
  labels: {
    status: {
      approved: "Approuvé",
      under_implementation: "En cours de mise en oeuvre",
      completed: "Achevé",
      unknown: "Inconnu",
    },
    objective: {
      adaptation: "Adaptation",
      mitigation: "Atténuation",
      cross_cutting: "Transversal",
    },
    kind: {
      multilateral_project: "Projet multilatéral",
      readiness: "Préparation / PAN",
      grant_programme: "Programme de subvention",
    },
    geography: {
      site: "Sites nommés",
      national: "National / multi-îles",
      multi_country: "Multi-pays",
      unknown: "Inconnu",
    },
    hazard: {
      flood: "Inondation",
      cyclone: "Cyclone",
      coastal: "Côtier / niveau de la mer",
      drought: "Sécheresse",
      heat: "Chaleur",
      biodiversity: "Biodiversité / écosystèmes",
      energy_transition: "Transition énergétique",
      multi: "Multi-aléas",
    },
    sector: {
      climate: "Climat",
      transport: "Transport",
      health: "Santé",
      social: "Social",
      other: "Autre",
    },
    recordInstrument: {
      grant: "Don",
      loan: "Prêt",
      mixed: "Mixte",
      technical_assistance: "Assistance technique",
      unknown: "Non indiqué comme don ou prêt",
    },
    confidence: {
      official_register: "Registre officiel du bailleur",
      government_document: "Document gouvernemental",
      secondary_report: "Rapport public secondaire",
    },
    reportType: {
      apr: "Rapport annuel de performance",
      ppr: "Rapport de performance du projet",
      evaluation: "Évaluation",
      library: "Bibliothèque de rapports",
    },
    island: {
      mauritius: "Maurice",
      rodrigues: "Rodrigues",
      agalega: "Agaléga",
    },
    instrument: {
      loan: "Prêt",
      grantOrUnspecified: "Don / non précisé",
      grantAndLoan: "Don et prêt",
    },
  },
  header: {
    backTo: "Retour vers",
    backToHub: "Retour vers mkweli.tech",
    productName: "Public Funds Watch",
    tagline: "Financement public extérieur de Maurice, chaque chiffre cité",
    browseRegistry: "Parcourir le registre",
    toggleMenu: "Ouvrir le menu",
    primaryNav: "Principal",
    nav: {
      home: "Accueil",
      registry: "Registre",
      landscape: "Paysage",
      places: "Lieux",
      reports: "Rapports",
      sources: "Sources",
      about: "À propos",
      getInvolved: "Participer",
    },
  },
  footer: {
    blurb:
      "Un registre public indépendant du financement public extérieur de Maurice, y compris la finance climatique. Chaque chiffre est copié d'un document cité ou marqué Non publié.",
    explore: "Explorer",
    projectRegistry: "Registre des projets",
    fundingLandscape: "Paysage du financement",
    places: "Lieux",
    donorReports: "Rapports des bailleurs",
    sources: "Sources",
    aboutProduct: "À propos du produit",
    problemSolution: "Problème et solution",
    getInvolved: "Participer",
    ledger: "Registre",
    lastReviewed: "Dernière revue le {date}",
    unknownAmounts: 'Les montants inconnus s\'affichent comme "Non publié"',
    sourcedOnly: "Fiches sourcées uniquement",
    copyright: "© {year} Public Funds Watch. Tous droits réservés.",
    disclaimer:
      "Ceci n'est pas un système officiel de notification d'un gouvernement ou d'un bailleur.",
  },
  sourceBanner: {
    title: "Registre sourcé",
    body: "Compilation indépendante de documents publics. Ceci n'est pas un portail officiel d'un gouvernement ou d'un bailleur. Dernière revue le {date}.",
    sourcesLink: "Sources →",
  },
  contactForm: {
    interests: {
      pilot: "Pilote / partenariat gouvernemental",
      funding: "Financement / soutien d'un bailleur",
      csoMedia: "Société civile / médias",
      tech: "Contribution technique",
      research: "Recherche / données",
      press: "Demande de presse",
      other: "Autre",
    },
    sentTitle: "Message envoyé",
    sentBody:
      "Merci. Nous répondrons à l'adresse que vous avez indiquée. Pour une urgence, vous pouvez aussi écrire à {email}.",
    name: "Nom",
    email: "E-mail",
    organisation: "Organisation",
    locality: "Pays / localité",
    interest: "Intérêt",
    message: "Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "vous@organisation.org",
    orgPlaceholder: "Ministère, OSC, média, entreprise...",
    localityPlaceholder: "ex. Maurice - Port-Louis",
    messagePlaceholder:
      "Comment souhaitez-vous participer ? Indiquez un calendrier si c'est utile.",
    selectOne: "Choisir...",
    disclaimer:
      "Ce formulaire sert aux demandes de partenariat, de pilote, de presse et d'appui technique.",
    disclaimerStrong:
      "Ne l'utilisez pas pour des signalements confidentiels d'intégrité ou de lanceur d'alerte",
    disclaimerTail:
      "- un canal sécurisé distinct est prévu. Les messages vont à {email}.",
    sending: "Envoi...",
    send: "Envoyer le message",
    orEmail: "Ou écrire à support@mkweli.tech →",
    subject: "Public Funds Watch - Participer",
    fallbackName: "Nom",
    fallbackOrg: "Organisation",
    fallbackEmail: "E-mail",
    fallbackInterest: "Intérêt",
  },
  projectCard: {
    geography: "Géographie",
    mauritiusShare: "Part Maurice",
    sourceOne: "{count} source",
    sourceOther: "{count} sources",
    viewRecord: "Voir la fiche et les sources →",
  },
  projectFilters: {
    search: "Recherche",
    searchPlaceholder: "Titre, bailleur, lieu...",
    status: "Statut",
    allStatuses: "Tous les statuts",
    geography: "Géographie",
    allGeographies: "Toutes les géographies",
    hazard: "Aléa",
    allHazards: "Tous les aléas",
    objective: "Objectif",
    allObjectives: "Tous les objectifs",
    funder: "Bailleur",
    allFunders: "Tous les bailleurs",
    sector: "Secteur",
    allSectors: "Tous les secteurs",
    instrument: "Instrument",
    allInstruments: "Tous les instruments",
  },
  worksSchematic: {
    mauritiusTitle: "Maurice - localités nommées",
    rodriguesTitle: "Rodrigues - localités nommées",
    agalegaOff: "Agaléga (hors de cette figure) :",
    siteSpendNotReported: "Dépense au site non communiquée.",
    pinTitle: "{name} - dépense au site non communiquée",
    caption:
      "Contour schématique pour l'orientation seulement - pas un trait de côte levé. Les points sont des localités approximatives nommées dans des rapports publics.",
  },
  glance: {
    ledgerLine: "Registre sourcé. Pas un portail officiel. Revu le {date}.",
    notOneTotal: "Ces quatre chiffres ne s'additionnent pas.",
    record: "Fiche",
    donor: "Bailleur",
    year: "Année",
    amount: "Montant Maurice",
    notPublished: "Non publié",
    olderLabel: "Projet ancien achevé",
    diffTitle: "Depuis le {date}",
    doNotInvent: "Nous n'inventons pas un chiffre.",
    sources: "Sources",
    quoteMissing: "Une phrase exacte et une page n'ont pas été relevées pour ce chiffre.",
    openSource: "Ouvrir le document",
    close: "Fermer",
    added: "Ajouté",
    removed: "Sorti de la liste principale",
    offList: "Affiché ici, hors liste principale",
    conversion: "Conversion figée",
    groups: {
      un: "ONU",
      world_bank: "Banque mondiale",
      government_mauritius: "Gouvernement de Maurice",
      ngo_red_cross: "ONG / Croix-Rouge",
      other: "Autre éditeur",
    },
  },
  home: {
    sourcesReviewed: "Sources publiques · dernière revue le {date}",
    heroTitle: "Ce que disent les documents publics sur",
    heroTitleAccent: "le financement public extérieur à Maurice",
    heroLead:
      "Projets financés par un bailleur avec un montant Maurice publié d'au moins 100 000 USD. Un projet encore ouvert de plus de 5 millions USD reste même s'il a commencé avant le 5 octobre 2016.",
    coverageTitle: "Ce que ce registre inclut",
    coveragePoints: [
      "Maurice seulement. Une fiche exige un montant Maurice publié d'au moins 100 000 USD.",
      "Une nouvelle fiche est un don d'un bailleur d'au moins 100 000 USD dont le début ou l'approbation est le 5 octobre 2016 ou après, venant de l'ONU, d'un gouvernement étranger nommé, de la Banque mondiale, de la Banque asiatique de développement, de la Banque africaine de développement, de la Croix-Rouge, ou d'un organisme mauricien que la source appelle une ONG. Un projet encore ouvert de plus de 5 millions USD peut être plus ancien.",
      "Les prêts ne sont pas ajoutés comme des dons. Lorsqu'un projet publie un don et un prêt, seul le don entre dans le montant du registre.",
      "Les per diem, les frais généraux et les dépenses restent « Non publié » tant que la source n'énonce pas le chiffre. L'argent partagé n'est compté qu'une fois dans le total du registre.",
    ],
    openRegistry: "Ouvrir le registre sourcé",
    fundingLandscape: "Paysage du financement",
    readSeparately: "Lire les chiffres séparément",
    notOneTotal:
      "Le besoin, les dépenses étiquetées et les projets des bailleurs ne forment pas un total unique.",
    fmcpNote:
      "La présentation FMCP du ministère liste aussi {amount} d'appui international depuis 2017, et indique que 8,4 % du besoin CDN a été mobilisé. {amount} représente environ 1,8 % de 6,5 milliards USD - la ligne de 8,4 % est reprise telle quelle et n'est pas réconciliée ici.",
    agencyTable: "Tableau des agences",
    registryEyebrow: "Registre",
    registryTitle:
      "{count} fiches sourcées. Montants Maurice uniquement lorsqu'un document les publie.",
    registryLead:
      '{count} fiches ont un montant attribué à Maurice publié. Les programmes GCF multi-pays sont listés avec les totaux de programme et "Part Maurice : non publié."',
    fullRegistry: "Registre complet →",
    tableRecord: "Fiche",
    tableGeography: "Géographie",
    tableMauritiusAmount: "Montant Maurice",
    whatThisIs: "Ce qu'est ce site",
    briefingTitle:
      "Un briefing public, pas un tableau de bord gouvernemental en direct.",
    briefingBody:
      "Public Funds Watch est aussi une plateforme de transparence proposée (preuves citoyennes, canal d'intégrité, consoles des conseils). Ces modules ne sont pas en service. Les pages ici ne publient que ce que nous avons pu vérifier dans des documents publics au {date}.",
    howWeCite: "Comment nous citons",
    aboutProduct: "À propos du produit",
    weDoNotInvent: "Nous n'inventons pas",
    doNotInvent: [
      "Un décaissement ou une dépense lorsque la source est silencieuse",
      "Une ventilation Maurice des programmes régionaux",
      "Des projets locaux de drainage ou d'abris sans trace publique",
      'Un statut "en retard" sans document nommé',
    ],
    machineReadable: "Copie lisible par machine du registre actuel :",
  },
  headlines: {
    "ndc-need": {
      label: "Besoin de mise en oeuvre de la CDN (jusqu'en 2030)",
      measures:
        "Estimation par Maurice de ses besoins financiers pour mettre en oeuvre la CDN actualisée de 2021 - pas de l'argent déjà reçu.",
      detail:
        "4,5 milliards USD pour l'adaptation et 2,0 milliards USD pour l'atténuation. Part inconditionnelle : 2,3 milliards USD (35 %, État et secteur privé) ; part conditionnelle : 4,2 milliards USD (65 %, sources internationales).",
    },
    "ccdr-need": {
      label: "Investissement additionnel CCDR (25 ans, VAN)",
      measures:
        "Besoin d'investissement modélisé par la Banque mondiale - une question différente des 6,5 milliards USD de la CDN jusqu'en 2030. Ne pas additionner les deux chiffres.",
      detail:
        "Rapport pays sur le climat et le développement de la Banque mondiale : investissement additionnel sur les 25 prochaines années en valeur actuelle nette, avec un écart annuel estimé à 213 millions USD. Environ 1,4 milliard USD est requis d'ici 2030.",
    },
    "appendix-h": {
      label: "Budget étiqueté climat (exercice 2025/26)",
      measures:
        "Étiquetage climat du budget national sur des votes choisis pour un exercice - pas la finance climatique internationale reçue, et non comparable à l'exercice d'étiquetage RRC/ACC de l'UNDRR.",
      detail:
        "Adaptation : 5,589 milliards Rs ; atténuation : 1,012 milliard Rs ; mixte : 0,100 milliard Rs, répartis entre six ministères et deux fonds spéciaux (Climate and Sustainability Fund et Projects Development Fund). Environ 2,9 % des dépenses votées y compris ces fonds. Le CSF lui-même est étiqueté à 3,473 milliards Rs.",
    },
    "fmcp-received": {
      label: "Appui international listé (depuis 2017)",
      measures:
        "Liste d'appui international approuvé compilée par le ministère, pas un compte national complet de finance climatique.",
      detail:
        "Présentation FMCP du ministère de l'Environnement : dons et prêts d'agences nommées depuis 2017 (GCF 38,51 ; GEF 37,35 ; Adaptation Fund 4,44 ; AFD 9,20 ; UE 13,15 ; GCCA+ 2,26 ; Abu Dhabi Fund 10,00 en prêt ; BAD 2,44 en prêt ; et des lignes plus petites). La même diapositive indique \"8,4 % du besoin a été mobilisé\". 118,05 millions USD représentent environ 1,8 % des 6,5 milliards USD de la CDN - la ligne de 8,4 % n'est pas expliquée par ce total.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Un registre public des projets financés par des bailleurs",
    description:
      "Projets financés par un bailleur à Maurice avec un montant publié d'au moins 100 000 USD. La finance climatique est un secteur.",
    rulesTitle: "Ce qui est inclus",
    rules: [
      "Un montant Maurice imprimé par la source, d'au moins 100 000 USD. 100 000 USD est inclus.",
      "Le même seuil couvre l'ONU, un gouvernement étranger nommé, les dons de la Banque mondiale, les dons de la Banque asiatique de développement, les dons de la Banque africaine de développement, les projets de la Croix-Rouge, et un organisme mauricien que la source appelle une ONG.",
      "Un projet encore ouvert de plus de 5 millions USD reste même s'il a commencé avant le 5 octobre 2016.",
      "Pas de montant Maurice publié : nommé sur Sources, pas de page projet.",
      "Un chiffre que la source n'imprime pas reste « Non publié ».",
    ],
    openLedger: "Le registre",
    proposed:
      "Les preuves citoyennes, le coffre d'intégrité et les consoles gouvernementales sont proposés, pas en service.",
  },
  getInvolved: {
    eyebrow: "Participer",
    title: "Construire avec nous la couche de redevabilité de la finance climatique",
    description:
      "Que vous représentiez un ministère, un conseil, un bailleur, une OSC, une rédaction ou un partenaire technique - utilisez le formulaire ci-dessous ou écrivez à support@mkweli.tech.",
    paths: [
      {
        title: "Gouvernement et conseils locaux",
        body: "Co-concevoir un pack pays, choisir les localités pilotes, et définir les SLA de partage de données et de réponse.",
      },
      {
        title: "Bailleurs et fonds climat",
        body: "Soutenir l'enveloppe du pilote de référence de 12 mois ou la construction multi-pays du produit comme bien public numérique.",
      },
      {
        title: "Société civile et médias",
        body: "Façonner les catégories de signalement citoyen, les circuits de vérification, et l'usage des données ouvertes pour les vigies.",
      },
      {
        title: "Technologues et chercheurs",
        body: "Contribuer aux schémas, au noyau public open source, aux couches d'aléas, et à l'analyse indépendante des données publiées.",
      },
    ],
    formTitle: "Formulaire de contact",
    formLead:
      "Nous lisons chaque message. Réponse typique sous quelques jours ouvrables.",
    directContact: "Contact direct",
    preferEmail:
      "Vous préférez l'e-mail ? Indiquez l'organisation, le pays/la localité, le domaine d'intérêt et le calendrier.",
    project: "Projet",
    site: "Site :",
    repository: "Dépôt :",
    publicRepo: "(public)",
    transparency: "Note de transparence",
    transparencyBody:
      "Les fiches de projets et de budgets sur ce site sont compilées à partir de documents publics cités. Ce n'est pas un flux gouvernemental en direct. Voir {sources}. L'enveloppe de 550 000 USD pour l'année 1 mentionnée dans les notes de concept est un coût proposé du pilote Public Funds Watch, pas une statistique de finance climatique de Maurice.",
    sourcesWord: "sources",
  },
  landscape: {
    eyebrow: "Paysage",
    title:
      "Canaux de l'argent climat - et ce que mesure réellement chaque chiffre",
    description:
      "Les chiffres publics de finance climatique pour Maurice viennent de systèmes différents. Cette page les liste sans les additionner en un total unique.",
    needTitle: "Besoin, dépense et appui reçu",
    needLead:
      "La CDN, le CCDR de la Banque mondiale, l'étiquetage du budget national et le tableau FMCP du ministère répondent à des questions différentes. Les mélanger produit un chiffre qu'aucune source n'a publié.",
    fmcpTitle: "Appui international listé par le ministère (depuis 2017)",
    fmcpLead:
      "Repris de la présentation FMCP-3 du ministère de l'Environnement. Le total de la diapositive est 118,05 millions USD. La même diapositive indique que 8,4 % du besoin CDN a été mobilisé ; 118,05 / 6 500 vaut environ 1,8 %. Nous ne choisissons pas entre ces deux énoncés.",
    agency: "Agence",
    usdMillion: "Millions USD",
    instrument: "Instrument",
    totalAsListed: "Total tel que listé",
    fmcpSourceNote:
      "Source : {link}. Les lignes d'agences ne correspondent pas toujours à un seul projet du registre (par exemple GCF 38,51 contre le don FP033 de 28,21).",
    fmcpSourceLink: "Présentation FMCP-3 de Maurice",
    domesticTitle: "Instruments nationaux",
    privateTitle: "Prêts privés (pas de la dépense publique)",
    integrityTitle: "Suivi et intégrité - constats publiés",
    integrityLead:
      "Ce sont des constats d'enquête et de recherche, cités comme tels. Ce ne sont pas des conclusions juridiques.",
    footerNote:
      "Les fiches au niveau projet sont dans le {registry}. Les règles de citation sont sur {sources}.",
    registryWord: "registre",
    sourcesWord: "Sources",
    domesticNotes: {
      ccr: {
        title: "Prélèvement Corporate Climate Responsibility",
        body: "Un prélèvement de 2 % sur le revenu imposable des sociétés dont le chiffre d'affaires dépasse 50 millions Rs, en vigueur à partir de l'année d'évaluation commençant le 1er juillet 2024. Le produit est destiné au Climate and Sustainability Fund.",
      },
      csf: {
        title: "Affectation au Climate and Sustainability Fund (exercice 2024/25)",
        body: "Le discours du budget 2024-25 a affecté 3,2 milliards Rs au Climate and Sustainability Fund pour des projets face au changement climatique, et a indiqué que l'adaptation et l'atténuation exigeraient quelque 300 milliards Rs.",
      },
      undrr: {
        title: "Étiquetage budgétaire RRC + ACC de l'UNDRR (pilote)",
        body: "Un exercice combiné d'étiquetage réduction des risques de catastrophe et adaptation au changement climatique pour 2023-24 et 2024-25 a estimé la dépense principale et significative non pondérée à 38,927 milliards MUR (15,1 % de la dépense des votes, 5,2 % du PIB). La définition est plus large que l'annexe H et ce n'est pas une mise à jour de la même série.",
      },
    },
    integrityNotes: {
      tm: {
        title: "Enquête Transparency Mauritius (2025)",
        body: "Une enquête en ligne auprès de 25 acteurs climat des secteurs public, financier, académique et ONG (15 juin-10 septembre 2025) a trouvé que 84 % identifient la corruption comme la principale menace pour la livraison de la finance climatique. Transparency Mauritius a indiqué qu'aucun répondant n'avait listé la transparence, la redevabilité, la divulgation ou la lutte anticorruption parmi les éléments essentiels de la finance climatique.",
      },
      conversation: {
        title: "Recherche indépendante sur les lacunes de suivi",
        body: "Une analyse de juin 2026 dans The Conversation ne signale aucune condamnation pénale ni mise en accusation formelle liée à la finance climatique à Maurice, et soutient que le suivi et le reporting des fonds une fois entrés dans le système restent faibles. Elle discute un cas de mise en oeuvre de drainage contre les inondations comme une mauvaise gestion, pas comme une condamnation.",
      },
      taxonomy: {
        title: "Taxonomie verte nationale (en élaboration)",
        body: "Le PNUD Maurice, avec le British High Commission, appuie une taxonomie verte nationale et des lignes directrices pour le reporting climat. Un atelier des parties prenantes s'est tenu les 14-15 octobre 2025.",
      },
    },
    privateNotes: {
      absa: {
        title: "Cible de prêts verts d'Absa Mauritius",
        body: "Absa Mauritius a indiqué vouloir porter les prêts verts à 30 milliards MUR d'ici 2030, contre 8 milliards MUR à la fin de l'année précédente. C'est une cible de crédit bancaire, pas de la dépense climatique publique.",
      },
    },
  },
  map: {
    eyebrow: "Lieux",
    title: "Où les rapports publics nomment un lieu",
    lead:
      "Un schéma de Maurice et de Rodrigues - pas une carte du monde - avec des localités nommées dans des documents CEB, PNUD, GCF ou Adaptation Fund. La dépense au site n'est presque jamais publiée, donc ces lignes indiquent {notReported}. {caveat}",
    notReportedStrong: "non communiqué",
    pinCaveat:
      "Localité approximative d'un lieu nommé dans un rapport public - pas un polygone d'ouvrage levé.",
    registryList: "Liste du registre",
    onMapCount: "{count} lieux sur les figures des îles · pas de serveur de tuiles",
    namedTitle: "Nommés dans les rapports",
    namedLead:
      "Ouvrages ou activité rapportés à ces lieux. Une subvention groupée (par exemple 7,5 millions USD pour 14 MW de batteries) n'est pas répartie entre sous-stations.",
    colPlace: "Lieu",
    colIsland: "Île",
    colSpend: "Dépense au site",
    colSource: "Source",
    offMapFrame: " · hors cadre de la carte",
    offThisFrame: "Hors de ce cadre de carte : {names}.",
    noSiteTitle: "Dépense au site non communiquée",
    noSiteLead:
      "Ces fiches du registre n'ont pas de site d'ouvrage nommé dans les documents examinés. De l'argent peut quand même avoir été approuvé ou décaissé à un opérateur - voir la page du projet.",
    notReportedAtSite: "Non communiqué au site",
    linkedRecords: "Fiches liées :",
  },
  reports: {
    eyebrow: "Rapports",
    title: "Ce que les bailleurs ont publié",
    description:
      "Les décaissements sont souvent conditionnés à des rapports. Pour ces projets GCF liés à Maurice, la bibliothèque publique est faite de rapports annuels de performance, pas d'un calendrier trimestriel. Nous listons les documents présents sur les pages GCF, AF ou PNUD - nous n'inventons pas d'échéances.",
    colReport: "Rapport",
    colType: "Type",
    colPeriod: "Période",
    colProject: "Projet",
    noneTitle: "Aucun rapport public listé",
    noneLead:
      "Ces fiches du registre n'avaient pas d'APR, de PPR ni d'évaluation sur les pages bailleur examinées.",
    notOnFunderSite: "Non publié sur le site du bailleur examiné",
  },
  sources: {
    eyebrow: "Sources et méthodes",
    title: "Chaque chiffre public sur ce site a une URL",
    description:
      "Ceci est une compilation indépendante, revue à la date indiquée dans le bandeau. Ce n'est pas un système officiel de notification d'un gouvernement, du GCF ou de l'Adaptation Fund.",
    rulesTitle: "Règles",
    rules: [
      "Un montant n'apparaît que si un document public cité contient ce chiffre (ou un tableau officiel dont il est copié).",
      'Si un bailleur n\'a pas publié de décaissement ou de dépense, le champ est "Non publié" - jamais zéro, jamais estimé.',
      "Les programmes multi-pays gardent les totaux de programme et indiquent que la part Maurice n'est pas publiée, sauf si un document la ventile (la composante corail du Adaptation Fund est l'exception actuelle).",
      "Le besoin (CDN, CCDR), la dépense nationale étiquetée (annexe H) et l'appui international reçu (FMCP, pages bailleurs) ne sont pas additionnés.",
      "Le statut est pris sur la page du bailleur ou du PNUD (en cours de mise en oeuvre, achevé) ou laissé inconnu. Nous ne marquons pas de projets en retard pour l'illustration.",
      'Les sites d\'ouvrages nommés apparaissent sur un schéma Maurice/Rodrigues (pas une carte du monde). Les points sont des localités approximatives tirées de rapports CEB, PNUD, GCF ou Adaptation Fund, pas des polygones d\'ouvrages levés. La dépense au site est "Non communiqué" sauf si un document publie un chiffre pour ce site. Les subventions groupées ne sont pas réparties entre sous-stations.',
      'Les rapports des bailleurs sont des APR, PPR et évaluations liés depuis les pages GCF ou Adaptation Fund. Le reporting public GCF pour ces projets est annuel. Nous n\'ajoutons pas de calendrier trimestriel de "prochaine tranche" sauf si un document cité indique ce cycle.',
      "Une devise autre que le USD est testée avec le taux de référence de la Banque centrale européenne à la date du document, figé via Frankfurter. La devise d'origine reste le montant cité. Le taux n'est pas rafraîchi à chaque consultation.",
      "Une fiche de la liste principale est un projet financé par un bailleur avec un montant Maurice publié d'au moins 100 000 USD. Les projets de la Croix-Rouge et les dons d'ONG mauriciennes suivent la même règle lorsqu'une source publique énonce un chiffre pour Maurice. Un projet commencé avant le 5 octobre 2016 reste hors de la liste principale, sauf s'il est encore ouvert et que ce montant dépasse 5 millions USD. Une fiche sans montant Maurice publié est nommée sur cette page et n'a pas de page projet. Une fiche climat déjà présente sans date de début publiée reste si son montant publié est d'au moins 100 000 USD.",
    ],
    headlineFigures: "Chiffres d'accroche",
    registryRecords: "Fiches du registre",
    openDownloads: "Téléchargements ouverts",
    csvNote:
      "Le CSV inclut une colonne source_urls pour qu'un téléchargement reste vérifiable hors ligne.",
    olderTitle: "Plus de 10 ans",
    olderLead:
      "Un projet commencé avant le 5 octobre 2016 reste hors de la liste principale, sauf s'il est encore ouvert et que le montant Maurice publié dépasse 5 millions USD. Il est nommé ici.",
    skippedTitle: "Examiné et non ajouté",
    skippedLead:
      "Ces pages ont été ouvertes pour cette passe. Une catégorie sans don public qui atteint le seuil est nommée ici. Un champ vide n'est pas rempli avec un prêt ou une estimation.",
    jsonLink: "JSON - /data/projects.json",
    csvLink: "CSV - /data/projects.csv",
    corrections: "Registre revu le {date}. Corrections : {email}.",
  },
  problemSolution: {
    eyebrow: "Problème et solution",
    title:
      "Une finance climatique sans redevabilité échoue auprès de ceux qui en ont le plus besoin",
    description:
      "Des aléas plus fréquents et des portefeuilles plus grands ne servent à rien si les communautés ne peuvent pas voir les projets, suivre l'argent, ou signaler les échecs en sécurité. Les modules ci-dessous décrivent le produit en construction. Seul le registre public sourcé est en service.",
    problemEyebrow: "Le problème",
    problemTitle: "La livraison échoue pour des raisons universelles",
    problemLead:
      "Des PEID aux grandes économies, les portefeuilles d'adaptation et d'atténuation partagent les mêmes lacunes de gouvernance. Maurice fait face à des inondations et cyclones fréquents tout en mobilisant de la finance climatique nationale et internationale - ce qui rend urgente une livraison transparente, contrôlée par les communautés.",
    failureMode: "Mode d'échec",
    citizenImpact: "Impact pour les citoyens",
    failures: [
      {
        mode: "Reporting fragmenté",
        impact: "Pas de source unique de vérité pour les projets, les budgets et le statut.",
      },
      {
        mode: "Faible traçabilité budget-site",
        impact: "L'argent disparaît entre l'approbation et les ouvrages visibles par la communauté.",
      },
      {
        mode: "Visibilité limitée des autorités locales",
        impact: "Retards et mauvais ciblage aux endroits les plus exposés.",
      },
      {
        mode: "Canaux d'intégrité absents ou non sûrs",
        impact: "La corruption et l'écoblanchiment ne sont pas signalés.",
      },
      {
        mode: "Données fermées",
        impact: "Médias et ONG ne peuvent pas auditer de façon indépendante.",
      },
      {
        mode: "Barrières de langue et de connectivité",
        impact: "Les communautés exclues ne peuvent pas participer au contrôle.",
      },
    ],
    tocEyebrow: "Théorie du changement",
    tocIf: "Si",
    tocIfBody:
      "les gouvernements et les partenaires publient les projets climatiques et les flux budgétaires, si les communautés peuvent transmettre des preuves de terrain, et si les lanceurs d'alerte peuvent signaler des risques d'intégrité en sécurité -",
    tocAnd: "et si",
    tocAndBody: "les acteurs locaux et nationaux agissent selon des SLA clairs -",
    tocThen: "alors",
    tocThenBody:
      "les retards et les détournements sont détectés plus tôt, la confiance augmente, et les ressources d'adaptation atteignent plus équitablement les communautés vulnérables.",
    solutionEyebrow: "La solution",
    solutionTitle: "Plateforme modulaire, deux zones de sécurité",
    solutionLead:
      "Public Funds Watch est conçu comme des modules branchables sur un noyau multi-locataire. Les données de transparence publique sont ouvertes par défaut. Les signalements d'intégrité vivraient dans un coffre séparé, sans clé de jointure d'identité vers la zone publique. Les preuves citoyennes, le canal d'intégrité et les consoles gouvernementales ne fonctionnent pas sur ce site.",
    modules: [
      {
        id: "M1",
        name: "Registre des projets",
        detail:
          "Fiches maîtresses des projets climat : acteurs, lieux, statut de cycle de vie, documents, et journaux publics de changements.",
      },
      {
        id: "M2",
        name: "Budget et flux de fonds",
        detail:
          "Source → instrument → affectation → décaissement → dépense → reste, avec champs de cofinancement.",
      },
      {
        id: "M3",
        name: "Carte et jalons",
        detail:
          "Explorateur MapLibre/OSM avec filtres par aléa, statut, bailleur et unité administrative ; jalons prévus contre réalisés.",
      },
      {
        id: "M4",
        name: "Preuves citoyennes",
        detail:
          "Signalements guidés pour retard, qualité, non-livraison, exclusion, dommage environnemental et signaux d'écoblanchiment.",
      },
      {
        id: "M5",
        name: "Canal sûr d'intégrité",
        detail:
          "Entrée anonyme, codes de dossier, pièces jointes chiffrées, circuit de traitement - isolé des données d'identité publiques.",
      },
      {
        id: "M6",
        name: "Consoles d'exploitation gouvernementales",
        detail:
          "Tableaux de bord locaux et nationaux pour la santé du portefeuille, boîtes de réception, SLA, et mises à jour contrôlées des contributeurs.",
      },
      {
        id: "M7",
        name: "Données ouvertes et API",
        detail:
          "Exports REST/CSV/GeoJSON, dictionnaire de données, licence ouverte pour les jeux publics.",
      },
      {
        id: "M8+",
        name: "Tableaux de bord et intégrité verte",
        detail:
          "Alertes de retard, tableaux publics mensuels, et scores anti-écoblanchiment par liste de contrôle.",
      },
    ],
    howTitle: "Comment cela fonctionne",
    howLead:
      "Boucle prévue, de la décision de financement à la vérification citoyenne et à la redevabilité publique - un dessin de produit, pas une description de circuits en service.",
    flow: [
      "Fonds approuvé / projet listé",
      "Chaîne budgétaire et jalons publiés",
      "Les citoyens transmettent des preuves de terrain géolocalisées",
      "Les problèmes sont signalés et escaladés selon des SLA",
      "Les officiels répondent ; le statut est mis à jour publiquement",
      "Tableaux de bord et données ouvertes pour l'audit indépendant",
    ],
    nowTitle: "Ce que vous pouvez utiliser maintenant",
    nowItems: {
      narrative: "Site narratif public (mission, problème, solution)",
      registry: "Registre de projets de démonstration",
      map: "carte",
      openData: ", et CSV/JSON ouverts",
      plan: "Plan de construction du produit et dossier de recherche Maurice dans le dépôt",
    },
    nextTitle: "Ce qui vient ensuite",
    nextItems: [
      "Formulaire de preuves citoyennes (problèmes de livraison)",
      "Partage officiel de données et mises à jour en direct des conseils",
      "Coffre d'intégrité et consoles des conseils après les portes juridiques et de sécurité",
    ],
    cta: "Prêt à piloter, financer ou co-concevoir un pack pays ?",
    getInvolved: "Participer",
  },
  projects: {
    eyebrow: "Registre public",
    title: "Fiches sourcées de financement public",
    lead:
      'Uniquement des fiches avec au moins une URL publique. Les totaux de programmes régionaux ne sont pas traités comme des recettes de Maurice. Les montants que les bailleurs n\'ont pas publiés s\'affichent comme "Non publié."',
    openMap: "Ouvrir la carte",
    downloadCsv: "Télécharger le CSV",
    recordsShown: "Fiches affichées",
    attributedSum: "USD listés, argent partagé une fois",
    withAmount: "Avec un montant Maurice",
    multiCountry: "Programmes multi-pays",
    sumNote:
      "La somme USD ajoute les montants Maurice qu'une source assigne à Maurice. Un montant en euros est inclus au taux de référence de la Banque centrale européenne figé sur la fiche. L'argent partagé n'est compté qu'une fois. Les totaux de programmes régionaux sans ligne Maurice sont omis. Le programme côtier du Fonds d'adaptation de 2012 a plus de 10 ans et n'est pas dans cette somme.",
    noMatch:
      "Aucune fiche ne correspond à ces filtres. Effacez un filtre et réessayez.",
    alsoAvailable: "Aussi disponible en",
    jsonApi: "JSON",
    sourcesAndMethods: "Sources et méthodes",
  },
  projectDetail: {
    allRecords: "← Toutes les fiches",
    publishedAmounts: "Montants publiés",
    publishedAmountsLead:
      "Uniquement les lignes qu'un document cité publie. Une ligne vide signifie que la source ne donne pas de chiffre, pas que le montant est zéro.",
    cofinancing: "Cofinancement (tel que publié)",
    totalValue: "Valeur totale (telle que publiée)",
    disbursed: "Décaissé (tel que publié)",
    mauritiusAttributed: "Montant attribué à Maurice",
    start: "Début",
    end: "Fin / achèvement estimé",
    whereMoney: "Où est allé l'argent",
    whereMoneyLead:
      "Un décaissement vers une entité accréditée n'est pas la même chose qu'une dépense sur un site nommé. Les roupies ou dollars au niveau du site n'apparaissent que lorsqu'un rapport cité les publie.",
    disbursedToImplementer: "Décaissé à l'opérateur",
    namedWorksSites: "Sites d'ouvrages nommés",
    placeOne: "{count} lieu dans les rapports publics",
    placeOther: "{count} lieux dans les rapports publics",
    siteLevelSpend: "Dépense au site :",
    noNamedSite:
      "Aucun site d'ouvrage nommé n'a été trouvé dans les documents examinés pour cette fiche.",
    openMap: "Ouvrir la carte de géographie des dépenses →",
    donorReports: "Rapports des bailleurs",
    donorReportsLead:
      "Rapports de performance publics liés depuis le bailleur. Le reporting GCF pour ces projets est annuel (APR), pas un calendrier trimestriel, sauf si un document le dit. Une année manquante signifie qu'elle n'était pas sur le site du bailleur que nous avons examiné - pas que nous l'avons marquée en retard.",
    noReports:
      "Aucun APR, PPR ou évaluation public n'était listé sur les pages bailleur examinées pour cette fiche.",
    allReports: "Tous les rapports publiés →",
    resultsTitle: "Résultats énoncés par les sources",
    sourcesTitle: "Sources",
    confidence: "Confiance : {label} · Dernière revue le {date}",
    geography: "Géographie",
    showPlaces: "Voir les lieux nommés →",
    notPinned:
      "Aucun site d'ouvrage nommé dans les documents examinés - pas d'épingle.",
    hazards: "Aléas",
    funders: "Bailleurs",
    implementing: "Entités de mise en oeuvre",
    declaredExpenditure: "Dépense déclarée",
    usdEquivalent: "Équivalent USD pour le test de seuil",
    rateSource: "Source du taux",
    perDiems: "Per diem",
    overheads: "Frais généraux",
    sharedExpenditure: "Dépense partagée :",
    outsideAgreed: "Hors du budget convenu :",
    discrepancy: "Les chiffres publiés diffèrent :",
    reportingProfile: "Profil de reporting",
    staleAnnual:
      "La dernière revue de ce rapport annuel date de plus de 12 mois avant le 5 octobre 2026. Cette ligne n'invente pas de date limite de dépôt.",
    startUnpublished:
      "La date de début n'est pas publiée dans les sources examinées pour cette fiche, donc le test des 10 ans ne peut pas être appliqué. La fiche reste parce qu'elle était déjà sur la liste climat.",
  },
  gate: {
    label: "Ouverture",
    enter: "Entrer",
  },
};

export const dictionaries = { en, fr };

export type Dictionary = typeof en;

export type HeadlineId = keyof Dictionary["headlines"];
