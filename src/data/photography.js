/**
 * Central photograph registry. Every photograph used on the site is listed
 * here with its local path, alt text and provenance. Pages reference images
 * by key so assets can be replaced without editing page markup.
 */
export const PHOTOGRAPHS = {
  'students-computer': {
    src: '/images/students-computer-classroom.webp',
    alt: 'Students sitting together at computers in a classroom',
    caption: 'Quality education in practice',
    credit: 'Published on the official Light Path Afghanistan website',
    category: 'Education',
    width: 970,
    height: 644,
  },
  'community-study': {
    src: '/images/community-study-session.webp',
    alt: 'Young people gathered for a community learning session',
    caption: 'Learning together as a community',
    credit: 'Published on the official Light Path Afghanistan website',
    category: 'Community',
    width: 540,
    height: 397,
  },
  'science-workshop': {
    src: '/images/science-workshop.webp',
    alt: 'Students working together around a science experiment',
    caption: 'A hands-on learning session',
    credit: 'Published on the official Light Path Afghanistan website',
    category: 'Education',
    width: 900,
    height: 600,
  },
  'teacher-session': {
    src: '/images/teacher-training-session.webp',
    alt: 'An educator leading a session with adult learners in a classroom',
    caption: 'Educators learning together',
    credit: 'Published on the official Light Path Afghanistan website',
    category: 'Education',
    width: 610,
    height: 406,
  },
  'library-shelves': {
    src: '/images/library-bookshelves.jpg',
    alt: 'Children reading together in front of green bookshelves in the Light Path library',
    caption: 'Reading together in the library',
    credit: 'Light Path Afghanistan photo archive',
    category: 'Books & Libraries',
    width: 1026,
    height: 748,
  },
  'library-banner': {
    src: '/images/library-opening-banner.jpg',
    alt: 'A banner with the Light Path emblem and Pashto lettering beside library shelves',
    caption: 'At the library opening',
    credit: 'Light Path Afghanistan photo archive',
    category: 'Community',
    width: 1026,
    height: 748,
  },
  'books-materials': {
    src: '/images/books-and-materials.jpg',
    alt: 'Books and packaged learning supplies displayed with a Light Path sign',
    caption: 'Books and learning materials',
    credit: 'Light Path Afghanistan photo archive',
    category: 'Books & Libraries',
    width: 600,
    height: 437,
  },
  'community-ribbon': {
    src: '/images/ribbon-community-gathering.jpg',
    alt: 'Hands gathered around a decorated ribbon at a community event',
    caption: 'A community gathering',
    credit: 'Light Path Afghanistan photo archive',
    category: 'Community',
    width: 1026,
    height: 748,
  },
  'courtyard': {
    src: '/images/courtyard-architecture.jpg',
    alt: 'Children gathered outside a traditional earthen building during a Light Path community visit',
    caption: 'A community visit',
    credit: 'Published on the official Light Path Afghanistan website',
    category: 'Community',
    width: 1026,
    height: 748,
  },
  'film-poster': {
    src: '/images/education-film-poster.jpg',
    alt: 'Thumbnail artwork for the official Pashto film about education',
    caption: 'Why education matters — official film',
    credit: 'Official YouTube thumbnail',
    category: 'Film',
    width: 480,
    height: 360,
  },
}

export const getPhoto = (key) => PHOTOGRAPHS[key]

export const GALLERY_KEYS = [
  'students-computer',
  'community-study',
  'science-workshop',
  'teacher-session',
  'library-shelves',
  'library-banner',
  'books-materials',
  'community-ribbon',
  'courtyard',
]

export const GALLERY_CATEGORIES = ['All', 'Education', 'Community', 'Books & Libraries', 'Places']

export const PROGRAM_PHOTO_KEYS = {
  books: 'books-materials',
  libraries: 'library-shelves',
  schools: 'courtyard',
  workshops: 'science-workshop',
  scholarships: 'books-materials',
  teachers: 'teacher-session',
}
