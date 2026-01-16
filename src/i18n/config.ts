export const languages = {
  fr: {
    code: 'fr',
    name: 'Français',
    domain: 'obsolescence-humaine.com',
    bookTitle: "L'obsolescence humaine programmée"
  },
  en: {
    code: 'en',
    name: 'English',
    domain: 'human-obsolescence.com',
    bookTitle: 'Planned Human Obsolescence'
  }
} as const;

export type Lang = keyof typeof languages;

// Parts structure for table of contents
export const parts = {
  fr: [
    { id: 'part-1', title: 'PARTIE I : LA RUPTURE IA', chapters: ['chapitre-1', 'chapitre-2'] },
    { id: 'part-2', title: 'PARTIE II : LE RISQUE ÉCONOMIQUE', chapters: ['chapitre-3', 'chapitre-4', 'chapitre-5'] },
    { id: 'part-3', title: 'PARTIE III : LE RISQUE EXISTENTIEL', chapters: ['chapitre-6', 'chapitre-7', 'chapitre-8', 'chapitre-9'] },
    { id: 'part-4', title: 'PARTIE IV : L\'HORIZON DES ÉVÉNEMENTS', chapters: ['chapitre-10', 'chapitre-11'] }
  ],
  en: [
    { id: 'part-1', title: 'PART I: THE AI DISCONTINUITY', chapters: ['chapter-1', 'chapter-2'] },
    { id: 'part-2', title: 'PART II: THE ECONOMIC RISK', chapters: ['chapter-3', 'chapter-4', 'chapter-5'] },
    { id: 'part-3', title: 'PART III: THE EXISTENTIAL RISK', chapters: ['chapter-6', 'chapter-7', 'chapter-8', 'chapter-9'] },
    { id: 'part-4', title: 'PART IV: THE EVENT HORIZON', chapters: ['chapter-10', 'chapter-11'] }
  ]
} as const;

export const chapters = {
  fr: [
    { slug: 'introduction', title: 'Introduction', subtitle: 'Le crépuscule des humains?', file: 'INTRODUCTION' },
    { slug: 'chapitre-1', title: 'Chapitre 1', file: 'CHAPITRE 1', part: 'part-1' },
    { slug: 'chapitre-2', title: 'Chapitre 2', file: 'CHAPITRE 2', part: 'part-1' },
    { slug: 'chapitre-3', title: 'Chapitre 3', file: 'CHAPITRE 3', part: 'part-2' },
    { slug: 'chapitre-4', title: 'Chapitre 4', file: 'CHAPITRE 4', part: 'part-2' },
    { slug: 'chapitre-5', title: 'Chapitre 5', file: 'CHAPITRE 5', part: 'part-2' },
    { slug: 'chapitre-6', title: 'Chapitre 6', file: 'CHAPITRE 6', part: 'part-3' },
    { slug: 'chapitre-7', title: 'Chapitre 7', file: 'CHAPITRE 7', part: 'part-3' },
    { slug: 'chapitre-8', title: 'Chapitre 8', file: 'CHAPITRE 8', part: 'part-3' },
    { slug: 'chapitre-9', title: 'Chapitre 9', file: 'CHAPITRE 9', part: 'part-3' },
    { slug: 'chapitre-10', title: 'Chapitre 10', file: 'CHAPITRE 10', part: 'part-4' },
    { slug: 'chapitre-11', title: 'Chapitre 11', file: 'CHAPITRE 11', part: 'part-4' },
    { slug: 'conclusion', title: 'Conclusion', subtitle: 'Pour la joie', file: 'CONCLUSION' },
    { slug: 'ressources', title: 'Ressources', file: 'RESSOURCES' }
  ],
  en: [
    { slug: 'introduction', title: 'Introduction', subtitle: 'Sunsetting Humans?', file: 'INTRODUCTION' },
    { slug: 'chapter-1', title: 'Chapter 1', file: 'CHAPTER 1', part: 'part-1' },
    { slug: 'chapter-2', title: 'Chapter 2', file: 'CHAPTER 2', part: 'part-1' },
    { slug: 'chapter-3', title: 'Chapter 3', file: 'CHAPTER 3', part: 'part-2' },
    { slug: 'chapter-4', title: 'Chapter 4', file: 'CHAPTER 4', part: 'part-2' },
    { slug: 'chapter-5', title: 'Chapter 5', file: 'CHAPTER 5', part: 'part-2' },
    { slug: 'chapter-6', title: 'Chapter 6', file: 'CHAPTER 6', part: 'part-3' },
    { slug: 'chapter-7', title: 'Chapter 7', file: 'CHAPTER 7', part: 'part-3' },
    { slug: 'chapter-8', title: 'Chapter 8', file: 'CHAPTER 8', part: 'part-3' },
    { slug: 'chapter-9', title: 'Chapter 9', file: 'CHAPTER 9', part: 'part-3' },
    { slug: 'chapter-10', title: 'Chapter 10', file: 'CHAPTER 10', part: 'part-4' },
    { slug: 'chapter-11', title: 'Chapter 11', file: 'CHAPTER 11', part: 'part-4' },
    { slug: 'conclusion', title: 'Conclusion', subtitle: 'For Joy', file: 'CONCLUSION' },
    { slug: 'resources', title: 'Resources', file: 'RESOURCES' }
  ]
} as const;

export const ui = {
  fr: {
    'nav.previous': 'Chapitre précédent',
    'nav.next': 'Chapitre suivant',
    'nav.toc': 'Table des matières',
    'nav.about': 'À propos de l\'auteur',
    'nav.originalDrawings': 'Dessins originaux',
    'theme.toggle': 'Changer le thème',
    'menu.open': 'Ouvrir le menu',
    'menu.close': 'Fermer le menu',
    'gallery.title': 'Dessins originaux',
    'gallery.description': 'Par Mahigan Lepage, tous droits réservés',
    'illustration.caption': 'Dessin original par Mahigan Lepage • Mise en couleur par IA',
    'intro.author': 'Par Mahigan Lepage, Ph. D.'
  },
  en: {
    'nav.previous': 'Previous chapter',
    'nav.next': 'Next chapter',
    'nav.toc': 'Table of contents',
    'nav.about': 'About the author',
    'nav.originalDrawings': 'Original drawings',
    'theme.toggle': 'Toggle theme',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'gallery.title': 'Original Drawings',
    'gallery.description': 'By Mahigan Lepage, all rights reserved',
    'illustration.caption': 'Original drawing by Mahigan Lepage • AI Coloring',
    'intro.author': 'By Mahigan Lepage, Ph.D.'
  }
} as const;

export function t(lang: Lang, key: keyof typeof ui.fr): string {
  return ui[lang][key];
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

export function getChapterBySlug(lang: Lang, slug: string) {
  return chapters[lang].find(c => c.slug === slug);
}

export function getChapterIndex(lang: Lang, slug: string): number {
  return chapters[lang].findIndex(c => c.slug === slug);
}

export function getAdjacentChapters(lang: Lang, slug: string) {
  const index = getChapterIndex(lang, slug);
  const chapterList = chapters[lang];

  return {
    prev: index > 0 ? chapterList[index - 1] : null,
    next: index < chapterList.length - 1 ? chapterList[index + 1] : null
  };
}

// Map French slugs to English slugs for language switching
export const slugMapping: Record<string, string> = {
  'introduction': 'introduction',
  'chapitre-1': 'chapter-1',
  'chapitre-2': 'chapter-2',
  'chapitre-3': 'chapter-3',
  'chapitre-4': 'chapter-4',
  'chapitre-5': 'chapter-5',
  'chapitre-6': 'chapter-6',
  'chapitre-7': 'chapter-7',
  'chapitre-8': 'chapter-8',
  'chapitre-9': 'chapter-9',
  'chapitre-10': 'chapter-10',
  'chapitre-11': 'chapter-11',
  'conclusion': 'conclusion',
  'ressources': 'resources',
  'a-propos': 'about',
  'dessins-originaux': 'original-drawings'
};

export function getAlternateSlug(fromLang: Lang, slug: string): string {
  if (fromLang === 'fr') {
    return slugMapping[slug] || slug;
  }
  // Reverse lookup for en -> fr
  const entry = Object.entries(slugMapping).find(([_, en]) => en === slug);
  return entry ? entry[0] : slug;
}
