import type { Project } from "./types";
import { unpublishedLine } from "./types";

const API =
  "https://search.worldbank.org/api/v2/projects?format=json&id=P180266";
const PAGE =
  "https://projects.worldbank.org/en/projects-operations/project-detail/P180266";

/** Grant slice only. The IBRD loan on the same project is not this amount. */
export const RODRIGUES_AIRPORT_GRANT: Project = {
  id: "mu-wb-p180266-grant",
  title: "Rodrigues Airport Project — World Bank grant (P180266)",
  summary:
    "World Bank investment project for Rodrigues Airport, board approval 29 September 2023. The Projects API publishes a grant of USD 16,000,000 and an IBRD loan of USD 184,000,000 (total commitment USD 200,000,000). This record keeps the grant. The loan is not added to the registry sum. Borrower: Republic of Mauritius. API status: Active. Closing date on the API: 30 June 2029.",
  kind: "multilateral_project",
  sector: "transport",
  instrument: "grant",
  climateObjective: null,
  hazards: [],
  status: "under_implementation",
  country: "Mauritius",
  countryCode: "MU",
  geographyScope: "site",
  geographyNote:
    "Rodrigues Airport. No map pin: the API fields used here name the project and do not publish a works coordinate.",
  adminUnit: "Rodrigues",
  district: "Rodrigues",
  lat: null,
  lng: null,
  showOnMap: false,
  funders: ["World Bank"],
  implementingEntities: ["Republic of Mauritius"],
  currency: "USD",
  amountLabel: "World Bank grant",
  amount: 16_000_000,
  amountNote:
    "World Bank Projects API field grantamt for P180266. The same response publishes ibrdcommamt USD 184,000,000. That loan is not this amount.",
  cofinancing: null,
  cofinancingNote:
    "The IBRD loan of USD 184,000,000 is published on the same API record. It is not recorded as co-financing and it is not a grant.",
  totalValue: 200_000_000,
  totalValueNote:
    "API total commitment USD 200,000,000, which is the grant plus the IBRD loan. The registry amount is the grant.",
  disbursed: null,
  disbursedNote:
    "No disbursement figure was copied from the API fields used for this record.",
  declaredExpenditure: null,
  declaredExpenditureNote:
    "No source reviewed for this record states one expenditure figure.",
  mauritiusShare: 16_000_000,
  mauritiusShareNote:
    "The grant names the Republic of Mauritius as borrower. The loan is excluded from this share.",
  usd: null,
  perDiems: unpublishedLine("Per diems", "USD"),
  overheads: unpublishedLine("Overheads", "USD"),
  sharedExpenditure: [],
  outsideAgreed: [],
  discrepancies: [],
  excludeFromSum: false,
  reporting: {
    reportName: "World Bank Projects API",
    identifier: "P180266",
    sourceUrl: API,
    cycle: "project_record",
    fields: ["committed", "disbursed", "status", "end"],
  },
  startDate: "2023-09-29",
  startYear: 2023,
  endYear: 2029,
  publishedResults: [],
  sources: [
    {
      title: "World Bank Projects API, P180266",
      url: API,
      publisher: "World Bank",
      asOf: "2026-10-05",
      notes:
        "grantamt 16,000,000; ibrdcommamt 184,000,000; curr_total_commitment 200 (millions); boardapprovaldate 2023-09-29; status Active; closing date 30 June 2029.",
    },
    {
      title: "Rodrigues Airport Project page",
      url: PAGE,
      publisher: "World Bank",
      asOf: "2026-10-05",
      notes:
        "Project page names P180266. The grant and loan figures on this record are the API fields.",
    },
  ],
  lastReviewed: "2026-10-05",
  confidence: "official_register",
};
