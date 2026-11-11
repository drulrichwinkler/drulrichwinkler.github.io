// Alle persönlichen Angaben an einer Stelle.
// Quelle: Lebenslauf der Bewerbungsunterlagen
// (~/ownCloud/Archiv/Arbeit/_Bewerbung_/sources/gemeinsam/Lebenslauf.typ, Stand 9.10.2026).
// Nichts ergänzen, was dort nicht belegt ist. Leere Felder werden nicht angezeigt.

export type Lang = 'de' | 'en';

export const contact = {
  name: 'Dr. Ulrich Winkler',
  email: 'uli.winkler@gmail.com',
  researchgate: 'https://www.researchgate.net/profile/Ulrich-Winkler-2',
  github: 'https://github.com/drulrichwinkler',
  linkedin: '', // TODO: LinkedIn-Profil-URL eintragen
};

// Impressum (§ 5 DDG) – Anschrift laut Lebenslauf
export const address = {
  street: 'Julie-Salinger-Weg 2',
  city: '01099 Dresden',
  country: 'Deutschland',
};

export const text = {
  de: {
    htmlLang: 'de',
    title: 'Dr. Ulrich Winkler – Informatiker & Dozent',
    description:
      'Dr. Ulrich Winkler, promovierter Informatiker und Softwarearchitekt, Lehrbeauftragter an der Dualen Hochschule Sachsen in Dresden.',
    role: 'Informatiker und Softwarearchitekt · Lehrbeauftragter an der Dualen Hochschule Sachsen',
    intro: [
      'Ich bin promovierter Informatiker und Softwarearchitekt mit rund zwanzig Jahren Berufserfahrung in Forschung und industrieller Softwareentwicklung. Ich arbeite an verteilten und cloudnativen Systemen und an KI-gestützter Softwareentwicklung; meine Forschung befasst sich mit der modellbasierten Analyse von Verfügbarkeit und Resilienz.',
      'Seit 2024 unterrichte ich an der Dualen Hochschule Sachsen, Staatliche Studienakademie Dresden, im Studiengang Informationstechnik. In meinen Lehrveranstaltungen entwickeln die Studierenden lauffähige Systeme als Prüfungsleistung.',
    ],
    teachingTitle: 'Lehre',
    teaching: [
      'Verteilte Systeme und IoT',
      'Systemnahe Programmierung',
      'LLM Engineering – Moderne Technologien der Informationstechnik',
      'Betreuung von Bachelorarbeiten im Studiengang Informationstechnik',
    ],
    cvTitle: 'Werdegang',
    cv: [
      { when: 'seit 2024', what: 'Lehrbeauftragter, Duale Hochschule Sachsen, Dresden' },
      { when: 'seit 2024', what: 'Research Engineer im GenAI-Team, Lexware AG, Freiburg' },
      { when: 'seit 2022', what: 'Geschäftsführer, Dr. Winkler GmbH, Dresden' },
      { when: '2012 – 2022', what: 'Freiberuflicher IT-Architekt und Lead Developer, Deutschland und Schweiz' },
      { when: '2015 – 2019', what: 'Mitgründer und IT-Architekt, Skolar, Dresden (2019 an die Untis GmbH verkauft)' },
      { when: '2008 – 2012', what: 'Research Associate, SAP Research, Belfast (UK)' },
      { when: '2006 – 2008', what: 'Software Engineer, Forschung und Entwicklung, COMARCH AG, Dresden' },
    ],
    eduTitle: 'Ausbildung',
    edu: [
      { when: '2015', what: 'Ph.D., Queen’s University Belfast – A Framework for Process-Centric Business Continuity Management' },
      { when: '2007', what: 'Diplom-Informatiker, Technische Universität Dresden' },
    ],
    researchTitle: 'Forschung',
    research:
      '20 Veröffentlichungen – Buchbeiträge, begutachtete Konferenz- und Workshopbeiträge, Demonstrationen und Poster – sowie drei erteilte US-Patente.',
    contactTitle: 'Kontakt',
    contactText: 'Am besten erreichen Sie mich per E-Mail.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    switchLabel: 'English',
  },
  en: {
    htmlLang: 'en',
    title: 'Dr. Ulrich Winkler – Computer Scientist & Lecturer',
    description:
      'Dr. Ulrich Winkler, computer scientist and software architect, lecturer at the Duale Hochschule Sachsen in Dresden.',
    role: 'Computer Scientist and Software Architect · Lecturer at Duale Hochschule Sachsen',
    intro: [
      'I am a computer scientist (PhD) and software architect with about twenty years of experience in research and industrial software development. I work on distributed and cloud-native systems and on AI-assisted software development; my research focuses on model-based analysis of availability and resilience.',
      'Since 2024 I have been teaching in the Information Technology programme at the Duale Hochschule Sachsen (Dresden campus). In my courses, students build working systems as their assessment.',
    ],
    teachingTitle: 'Teaching',
    teaching: [
      'Distributed Systems and IoT',
      'Systems Programming',
      'LLM Engineering – Modern Technologies in Information Technology',
      'Supervision of bachelor’s theses in Information Technology',
    ],
    cvTitle: 'Career',
    cv: [
      { when: 'since 2024', what: 'Lecturer, Duale Hochschule Sachsen, Dresden' },
      { when: 'since 2024', what: 'Research Engineer, GenAI team, Lexware AG, Freiburg' },
      { when: 'since 2022', what: 'Managing Director, Dr. Winkler GmbH, Dresden' },
      { when: '2012 – 2022', what: 'Freelance IT architect and lead developer, Germany and Switzerland' },
      { when: '2015 – 2019', what: 'Co-founder and IT architect, Skolar, Dresden (acquired by Untis GmbH in 2019)' },
      { when: '2008 – 2012', what: 'Research Associate, SAP Research, Belfast (UK)' },
      { when: '2006 – 2008', what: 'Software Engineer, Research & Development, COMARCH AG, Dresden' },
    ],
    eduTitle: 'Education',
    edu: [
      { when: '2015', what: 'PhD, Queen’s University Belfast – A Framework for Process-Centric Business Continuity Management' },
      { when: '2007', what: 'Diplom (equivalent to MSc) in Computer Science, Technische Universität Dresden' },
    ],
    researchTitle: 'Research',
    research:
      '20 publications – book chapters, peer-reviewed conference and workshop papers, demos and posters – and three granted US patents.',
    contactTitle: 'Contact',
    contactText: 'Email is the best way to reach me.',
    imprint: 'Legal notice (German)',
    privacy: 'Privacy (German)',
    switchLabel: 'Deutsch',
  },
} as const;
