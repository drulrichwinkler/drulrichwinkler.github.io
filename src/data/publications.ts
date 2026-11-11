// Quelle: ~/ownCloud/Archiv/Arbeit/_Bewerbung_/sources/gemeinsam/Publikationsliste-modern.typ
// (geprüft am 14.09.2026 gegen Crossref, OpenAlex, Semantic Scholar, Google Patents).
// Nachträge immer zuerst dort, dann hier übernehmen.

export type Pub = {
  year: string;
  authors: string; // "U. Winkler" wird auf der Seite hervorgehoben
  title: string;
  venue: string;
  doi?: string;
  note?: string;
};

export type Group = { id: string; de: string; en: string; items: Pub[] };

export const groups: Group[] = [
  {
    id: 'buch',
    de: 'Buchbeiträge',
    en: 'Book chapters',
    items: [
      {
        year: '2025',
        authors: 'U. Winkler, A. Luntovskyy',
        title: 'AI-Powered Tools to Create Accessible Websites',
        venue:
          'In: A. Luntovskyy et al. (eds.): Networks and Sustainability: Smart Grid, Data Science, and Smart Applications. Springer, LNEE 1473, pp. 161–168',
        doi: '10.1007/978-3-032-02272-1_7',
      },
      {
        year: '2024',
        authors: 'U. Winkler',
        title:
          'AI-Driven E2E Testing and Cucumber Test Generation: A GPT-Powered Approach for Improved Software Quality and Collaboration',
        venue:
          'In: A. Luntovskyy, M. Klymash, I. Melnyk, M. Beshley, A. Schill (eds.): Digital Ecosystems: Interconnecting Advanced Networks with AI Applications. Springer, LNEE 1198, pp. 415–421',
        doi: '10.1007/978-3-031-61221-3_20',
      },
      {
        year: '2012',
        authors: 'U. Winkler, W. Gilani',
        title: 'Business Continuity Management of Business Driven IT Landscapes',
        venue:
          'In: S. Reiff-Marganiec, M. Tilly (eds.): Handbook of Research on Service-Oriented Systems and Non-Functional Properties: Future Directions. IGI Global, pp. 381–399',
        doi: '10.4018/978-1-61350-432-1.ch017',
      },
      {
        year: '2011',
        authors: 'U. Winkler, W. Gilani',
        title: 'Model-Driven Framework for Business Continuity Management',
        venue:
          'In: P. Wieder, J. Butler, W. Theilmann, R. Yahyapour (eds.): Service Level Agreements for Cloud Computing. Springer, pp. 227–250',
        doi: '10.1007/978-1-4614-1614-2_14',
      },
      {
        year: '2011',
        authors: 'W. Theilmann, J. Happe, U. Winkler',
        title: 'The ERP Hosting Use Case Scenario',
        venue:
          'In: P. Wieder, J. Butler, W. Theilmann, R. Yahyapour (eds.): Service Level Agreements for Cloud Computing. Springer, pp. 295–309',
        doi: '10.1007/978-1-4614-1614-2_18',
      },
    ],
  },
  {
    id: 'konferenz',
    de: 'Begutachtete Konferenz- und Workshopbeiträge',
    en: 'Peer-reviewed conference and workshop papers',
    items: [
      {
        year: '2024',
        authors: 'A. Luntovskyy, U. Winkler',
        title: 'Advanced Software Technology Paradigms and AI Deployment',
        venue: 'IntelliSys 2024, Amsterdam. Springer, LNNS 1065, pp. 590–605',
        doi: '10.1007/978-3-031-66329-1_38',
      },
      {
        year: '2014',
        authors: 'D. Redlich, U. Winkler, T. Molka, W. Gilani',
        title:
          'Model-Driven Engineering in Practice: Integrated Performance Decision Support for Process-centric Business Impact Analysis',
        venue: 'ICPE 2014, Dublin. ACM, pp. 247–258',
        doi: '10.1145/2568088.2576797',
      },
      {
        year: '2012',
        authors: 'U. Winkler, W. Gilani, A. Marshall',
        title: 'Business Driven BCM SLA Translation for Service Oriented Systems',
        venue: 'MMB & DFT 2012, Kaiserslautern. Springer, LNCS 7201, pp. 206–220',
        doi: '10.1007/978-3-642-28540-0_15',
      },
      {
        year: '2012',
        authors: 'U. Winkler, M. Fritzsche, W. Gilani, A. Marshall',
        title: 'BOB the Builder: A Fast and Friendly Model-to-PetriNet Transformer',
        venue: 'ECMFA 2012, Kgs. Lyngby. Springer, LNCS 7394, pp. 416–427',
        doi: '10.1007/978-3-642-31491-9_31',
      },
      {
        year: '2012',
        authors: 'U. Winkler, W. Gilani, A. Guitman, A. Marshall',
        title: 'Models and Methodology for Automated Business Continuity Analysis',
        venue: 'IEEE ICECCS 2012, Paris, pp. 57–64',
        doi: '10.1109/ICECCS20050.2012.6299201',
      },
      {
        year: '2010',
        authors: 'U. Winkler, M. Fritzsche, W. Gilani, A. Marshall',
        title: 'A Model-Driven Framework for Process-Centric Business Continuity Management',
        venue: 'QUATIC 2010, Porto, pp. 248–252',
        doi: '10.1109/QUATIC.2010.46',
      },
      {
        year: '2010',
        authors: 'W. Theilmann, U. Winkler, J. Happe, I. Magrans de Abril',
        title: 'Managing On-Demand Business Applications with Hierarchical Service Level Agreements',
        venue: 'Future Internet Symposium (FIS 2010), Berlin. Springer, LNCS 6369, pp. 97–106',
        doi: '10.1007/978-3-642-15877-3_11',
      },
      {
        year: '2010',
        authors: 'C. Kotsokalis, U. Winkler',
        title: 'Translation of Service Level Agreements: A Generic Problem Definition',
        venue: 'NFPSLAM-ICSOC 2009, Stockholm. Springer, LNCS 6275, pp. 248–257',
        doi: '10.1007/978-3-642-16132-2_24',
      },
      {
        year: '2010',
        authors: 'M. Comuzzi, C. Kotsokalis, C. Rathfelder, W. Theilmann, U. Winkler, G. Zacco',
        title: 'A Framework for Multi-level SLA Management',
        venue: 'ICSOC/ServiceWave 2009 Workshops, Stockholm. Springer, LNCS 6275, pp. 187–196',
        doi: '10.1007/978-3-642-16132-2_18',
      },
      {
        year: '2005',
        authors: 'A. Luntovskyy, D. Gütter, A. Schill, U. Winkler',
        title: 'Design Particularities for Wireless Networks',
        venue: 'IEEE CriMiCo 2005, Sevastopol, pp. 955–958',
      },
      {
        year: '2005',
        authors: 'A. Luntovskyy, D. Gütter, A. Schill, U. Winkler',
        title: 'Concept of an Integrated Environment for Network Design',
        venue: 'IEEE CriMiCo 2005, Sevastopol, pp. 959–961',
      },
    ],
  },
  {
    id: 'demo',
    de: 'Demonstrationen, Poster und Werkzeugbeiträge',
    en: 'Demos, posters and tool papers',
    items: [
      {
        year: '2012',
        authors: 'U. Winkler, W. Gilani',
        title: 'ERP B3: Business Continuity Service Level Agreement Translation and Optimisation',
        venue: 'ICSOC 2011, Demo Track, Paphos. Springer, LNCS, pp. 239–240',
        doi: '10.1007/978-3-642-31875-7_29',
      },
      {
        year: '2012',
        authors: 'D. Redlich, S. Platz, T. Molka, W. Gilani, U. Winkler',
        title: 'MDE in Practice: Process-centric Performance Prediction via Simulation in Real-Time',
        venue: 'ECMFA 2012, Tools and Posters, Kgs. Lyngby, pp. 336–339',
      },
      {
        year: '2011',
        authors: 'U. Winkler, W. Gilani',
        title: 'SLA Translations with a Model-Driven Business Impact Analyses Framework',
        venue: 'ServiceWave 2011, Demo Track, Poznań. Springer, LNCS 6994, pp. 309–310',
        doi: '10.1007/978-3-642-24755-2_29',
      },
      {
        year: '2010',
        authors: 'U. Winkler, D. Playfair, W. Theilmann',
        title: 'ERP B3: Service Level Driven Management of On-Demand Business Support Systems',
        venue: 'Future Internet Symposium (FIS 2010), Demo Track, Berlin, pp. 4–6',
      },
    ],
  },
  {
    id: 'patente',
    de: 'Erteilte Patente',
    en: 'Granted patents',
    items: [
      {
        year: '2018',
        authors: 'U. Winkler, W. Gilani',
        title: 'Service level agreement translation for service oriented systems',
        venue: 'US 10,095,994 B2 (SAP SE)',
      },
      {
        year: '2017',
        authors: 'U. Winkler, R. Fritzsche, W. Gilani',
        title: 'Model to Petri-Net transformation',
        venue: 'US 9,542,165 B2 (SAP SE)',
      },
      {
        year: '2013',
        authors: 'U. Winkler, W. Gilani, D. Redlich',
        title: 'Model-based business continuity management',
        venue: 'US 8,457,996 B2 (SAP SE)',
      },
    ],
  },
  {
    id: 'dissertation',
    de: 'Dissertation',
    en: 'PhD thesis',
    items: [
      {
        year: '2015',
        authors: 'U. Winkler',
        title: 'A Framework for Process-Centric Business Continuity Management',
        venue: 'PhD thesis, Queen’s University Belfast',
      },
    ],
  },
];
