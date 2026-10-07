import type { CoverageNote } from "./types";

/**
 * Classes and candidates reviewed for this pass that are not registry rows.
 * Each note names a page that was opened and the reason the row was not added.
 */
export const coverageNotes: CoverageNote[] = [
  {
    title: "Other Mauritius World Bank projects in the public API",
    funderClass: "World Bank",
    reason:
      "The Mauritius project list is mostly IBRD loans. The registry copies the grant. P163248 publishes a recipient-executed grant of USD 350,000 and a closing date of 31 March 2020. The API fields opened have no board approval date, so the 10-year test stays open and the row stays in this note. P131818 publishes a project cost of USD 230,000. Those fields give a project cost. P103467 (Mauritius Sugar Cogen) was approved on 26 June 2008. It is closed, and the amount is under USD 5 million. P501014 is pipeline with no board date and no commitment to copy.",
    reasonFr:
      "La liste Maurice est surtout des prêts BIRD. Le registre copie le don. P163248 publie un don de 350 000 USD et une date de clôture au 31 mars 2020. Les champs API ouverts n'ont pas de date d'approbation du conseil, donc le test des 10 ans reste ouvert et la fiche reste dans cette note. P131818 publie un coût de projet de 230 000 USD. Ces champs indiquent un coût de projet. P103467 (cogénération sucrière) a été approuvé le 26 juin 2008. Il est achevé, et le montant est sous 5 millions USD. P501014 est en préparation, sans date de conseil et sans engagement à copier.",
    url: "https://search.worldbank.org/api/v2/projects?format=json&countrycode_exact=MU",
  },
  {
    title: "African Development Bank portfolio for Mauritius",
    funderClass: "African Development Bank",
    reason:
      "No AfDB grant with a published Mauritius amount of at least USD 100,000 and an approval on or after 5 October 2016 was copied. The country strategy mid-term review says grants, mainly from the MIC technical assistance fund, are about 0.03% of commitments. ECRSP is a loan: the project page reports a USD 240 million loan approved on 22 May 2024 (P-MU-K00-009). The gas-insulated substation operation in the same review is listed as ADB-window financing of about USD 112 million. The agro-industrial feasibility grant P-MU-A00-001 was approved on 21 September 2021 for UA 100,000. That page does not print a USD amount. A supplementary grant is named on P-MU-A00-002; this review did not copy a Mauritius figure of at least USD 100,000 from that page. P-MU-HAB-001 (MauBank) is an approved finance operation.",
    reasonFr:
      "Aucun don de la BAD avec un montant Maurice publié d'au moins 100 000 USD et approuvé le 5 octobre 2016 ou après n'a été copié. La revue à mi-parcours de la stratégie pays indique que les dons, surtout du fonds d'assistance technique MIC, représentent environ 0,03 % des engagements. L'ECRSP est un prêt : la page du projet indique un prêt de 240 millions USD approuvé le 22 mai 2024 (P-MU-K00-009). Le poste GIS dans la même revue est un financement de la fenêtre BAD d'environ 112 millions USD. Le don d'étude de faisabilité agro-industrielle P-MU-A00-001 a été approuvé le 21 septembre 2021 pour 100 000 UC. Cette page n'imprime pas de montant en USD. Un don supplémentaire est nommé sur P-MU-A00-002 ; cette revue n'y a pas copié de chiffre Maurice d'au moins 100 000 USD. P-MU-HAB-001 (MauBank) est une opération financière approuvée.",
    url: "https://www.afdb.org/sites/default/files/documents/projects-and-operations/mauritius_-_country_strategy_paper_2022-2027_mid-term_review_26092025.pdf",
  },
  {
    title: "Asian Development Bank sovereign project dataset",
    funderClass: "Asian Development Bank",
    reason:
      "The public sovereign-projects dataset page, as of 27 January 2026, lists the economies it covers. Mauritius is not in that list. No Mauritius grant of at least USD 100,000 was identified from the page opened. The CSV was not used to invent a row.",
    reasonFr:
      "La page publique du jeu de données des projets souverains, en date du 27 janvier 2026, liste les économies couvertes. Maurice n'y figure pas. Aucun don Maurice d'au moins 100 000 USD n'a été identifié sur la page ouverte. Le CSV n'a pas servi à inventer une fiche.",
    url: "https://data.adb.org/dataset/adb-sovereign-projects",
  },
  {
    title: "Additional UN grants",
    funderClass: "United Nations",
    reason:
      "Climate records that publish a Mauritius amount of at least USD 100,000 stay, including GCF and Adaptation Fund lines. The UNDP page on seven new GEF Small Grants Programme projects names civil-society organisations and does not publish an individual grant of at least USD 100,000. The USD 8 million STAR figure on that page is a country allocation, not one project, and it is not added.",
    reasonFr:
      "Les fiches climat qui publient un montant Maurice d'au moins 100 000 USD restent, y compris les lignes GCF et Fonds d'adaptation. La page PNUD sur sept nouveaux projets du Programme de microfinancements du FEM nomme des organisations de la société civile et ne publie pas de don individuel d'au moins 100 000 USD. Le chiffre STAR de 8 millions USD sur cette page est une allocation pays. Il reste dans cette note.",
    url: "https://www.undp.org/mauritius-seychelles/news/seven-new-undp-gef-small-grants-projects-mark-new-chapter-community-led-environmental-action",
  },
  {
    title: "IFRC network plans for Mauritius and Seychelles",
    funderClass: "Red Cross / IFRC",
    reason:
      "The 2026 network country plan (20 February 2026), page 1, prints Mauritius funding requirements of CHF 184,000 for 2026: CHF 145,000 through the host National Society and CHF 39,000 through the IFRC. The CHF 330,000 line on that page is Seychelles. These figures are funding requirements. A registry row needs a published grant or disbursement. The 2024–2025 plan’s CHF 3 million covers Mauritius and Seychelles together. Appeal codes beginning MDRMR in the IFRC list reviewed are Mauritania.",
    reasonFr:
      "Le plan réseau 2026 (20 février 2026), page 1, imprime des besoins de financement pour Maurice de 184 000 CHF en 2026 : 145 000 CHF par la Société nationale hôte et 39 000 CHF par la FICR. La ligne de 330 000 CHF sur cette page est les Seychelles. Ces chiffres sont des besoins de financement. Une fiche du registre exige un don ou un décaissement publié. Les 3 millions CHF du plan 2024-2025 couvrent Maurice et les Seychelles ensemble. Les codes d'appel MDRMR examinés dans la liste FICR concernent la Mauritanie.",
    url: "https://go-api.ifrc.org/api/DownloadFile/93085/Mauritius%20and%20Seychelles_INP_2026",
  },
  {
    title: "OCHA Financial Tracking Service, Mauritius 2026",
    funderClass: "Humanitarian funding",
    reason:
      "Total funding reported for Mauritius in 2026 was USD 41,493 as of 15 April 2026, from the government of Saudi Arabia, for food security. That is under USD 100,000.",
    reasonFr:
      "Le financement total déclaré pour Maurice en 2026 était de 41 493 USD au 15 avril 2026, du gouvernement d'Arabie saoudite, pour la sécurité alimentaire. C'est sous 100 000 USD.",
    url: "https://fts.unocha.org/countries/142/summary/2026",
  },
  {
    title: "MOL Charitable Trust grants to Mauritian organisations, 2026",
    funderClass: "Mauritian NGO",
    reason:
      "The 2026 award list names NGOs and associations. The lines it prints in USD are about USD 15,000 to USD 22,000. None clears USD 100,000.",
    reasonFr:
      "La liste 2026 nomme des ONG et des associations. Les lignes qu'elle imprime en USD sont d'environ 15 000 à 22 000 USD. Aucune n'atteint 100 000 USD.",
    url: "https://www.mol.co.jp/en/formauritius/funding/list2026.html",
  },
  {
    title: "National Social Inclusion Foundation call for NGO applications",
    funderClass: "Mauritian NGO",
    reason:
      "The July 2025 call invites registered NGOs to apply for funding instrument F1. The page does not publish award amounts. A June 2026 news article describes National Assembly figures for NGO allocations, including lines that may exceed USD 100,000. That article is a secondary report, and the assembly paper was not opened, so those figures are not copied. Mauritius Red Cross is not given a second row.",
    reasonFr:
      "L'appel de juillet 2025 invite les ONG enregistrées à demander l'instrument de financement F1. La page ne publie pas de montants attribués. Un article de juin 2026 décrit des chiffres de l'Assemblée nationale pour des allocations aux ONG, y compris des lignes qui peuvent dépasser 100 000 USD. Cet article est un rapport secondaire, et le document de l'Assemblée n'a pas été ouvert, donc ces chiffres ne sont pas copiés. La Croix-Rouge de Maurice n'a pas une seconde fiche.",
    url: "https://www.nsif.mu/call-for-applications-under-funding-instrument-f1-partnering-with-non-government-service-providers-for-the-financial-year-2025-2026/",
  },
  {
    title: "Foreign-government and Gulf grants",
    funderClass: "Foreign government",
    reason:
      "The named list is the EU, France (AFD grants, not loans), India, Japan, the UK, the US, China, the UAE, Saudi Arabia, and Qatar. The European Commission farmer grant already on the registry stays. No additional project page with a Mauritius grant of at least USD 100,000 and a date on or after 5 October 2016 was added from this list. A newspaper total for AFD grants is not copied as a project row. The Saudi Arabia humanitarian line is the OCHA figure above.",
    reasonFr:
      "La liste nommée est l'UE, la France (dons de l'AFD, pas les prêts), l'Inde, le Japon, le Royaume-Uni, les États-Unis, la Chine, les Émirats arabes unis, l'Arabie saoudite et le Qatar. Le don agricole de la Commission européenne déjà au registre reste. Aucune page de projet supplémentaire avec un don Maurice d'au moins 100 000 USD et une date du 5 octobre 2016 ou après n'a été ajoutée depuis cette liste. Un total de presse pour les dons de l'AFD n'est pas copié comme fiche. La ligne humanitaire de l'Arabie saoudite est le chiffre OCHA ci-dessus.",
    url: "https://fts.unocha.org/countries/142/summary/2026",
  },
];
