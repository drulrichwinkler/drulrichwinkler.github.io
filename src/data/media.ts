// Vorlesungsvideos und Folien. Stand 07.11.2026, Titel per YouTube-oEmbed geprüft.
// Bewusst keine eingebetteten Player: Die Seite lädt nichts von Dritten (siehe Datenschutz).

export const channel = 'https://www.youtube.com/@Dr.UlrichWinkler-q1m';
export const slidesProfile = 'https://slides.com/uliwinkler';

export const playlists = [
  {
    lang: 'Deutsch',
    langEn: 'German',
    title: 'DHSN VSIT-50 auf Deutsch',
    url: 'https://www.youtube.com/playlist?list=PLJ5znsmE-8fc',
    videos: [
      { title: 'Transactional Outbox', id: 'tuQNzcY2WxY' },
      { title: 'Redis', id: 'cZ03x2uOS0s' },
      { title: 'Distributed Databases', id: 'WXb6WwNT5Q8' },
    ],
  },
  {
    lang: 'Englisch',
    langEn: 'English',
    title: 'DHSN VSIT-50',
    url: 'https://www.youtube.com/playlist?list=PLS8wLDyTXo68',
    videos: [{ title: 'Dual Write & Two-Phase Commit', id: 'Rv2Ez2QWVFw' }],
  },
];

export const pageText = {
  de: {
    title: 'Vorlesungsvideos',
    intro:
      'Ausgewählte Vorlesungen aus dem Modul Verteilte Systeme und IoT (VSIT-50) an der Dualen Hochschule Sachsen, als Video auf YouTube. Die Folien stehen auf Slides.com unter der Lizenz CC BY-NC-SA 4.0.',
    playlist: 'Playlist',
    language: 'Sprache',
    channel: 'Alle Videos auf YouTube',
    slides: 'Folien auf Slides.com',
    external: 'Die Links führen zu YouTube bzw. Slides.com; dort gelten deren Datenschutzbestimmungen.',
  },
  en: {
    title: 'Lecture videos',
    intro:
      'Selected lectures from the course Distributed Systems and IoT (VSIT-50) at the Duale Hochschule Sachsen, available as videos on YouTube. The slides are on Slides.com under CC BY-NC-SA 4.0.',
    playlist: 'Playlist',
    language: 'Language',
    channel: 'All videos on YouTube',
    slides: 'Slides on Slides.com',
    external: 'These links lead to YouTube and Slides.com, whose privacy policies apply.',
  },
} as const;
