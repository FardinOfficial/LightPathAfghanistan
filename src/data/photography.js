/**
 * Central photograph registry. All photographs are locally hosted, approved
 * Light Path Afghanistan images. Pages reference keys so assets can be
 * replaced without editing page markup.
 */
export const PHOTOGRAPHS = {
  'students-computer': {
    src: '/images/classroom-girls.jpg',
    alt: 'Girls studying together in a classroom in Afghanistan',
    caption: 'Learning together in the classroom',
    credit: 'Light Path Afghanistan',
    category: 'Education',
    width: 1600,
    height: 1600,
  },
  'community-study': {
    src: '/images/field-visit.jpg',
    alt: 'A Light Path team member speaking with community members in a rural area',
    caption: 'Listening in the community',
    credit: 'Light Path Afghanistan',
    category: 'Community',
    width: 1600,
    height: 1600,
  },
  'science-workshop': {
    src: '/images/children-books.jpg',
    alt: 'Children looking at books and learning materials with a Light Path volunteer',
    caption: 'Books and learning materials',
    credit: 'Light Path Afghanistan',
    category: 'Education',
    width: 1600,
    height: 1600,
  },
  'teacher-session': {
    src: '/images/field-conversation.jpg',
    alt: 'A Light Path team member in conversation with local residents in a rural area',
    caption: 'A field conversation',
    credit: 'Light Path Afghanistan',
    category: 'Community',
    width: 1600,
    height: 1600,
  },
  'library-shelves': {
    src: '/images/library-reading.jpg',
    alt: 'Children and young people reading together in a Light Path library',
    caption: 'Reading together in the library',
    credit: 'Light Path Afghanistan',
    category: 'Books & Libraries',
    width: 1026,
    height: 748,
  },
  'books-materials': {
    src: '/images/children-books.jpg',
    alt: 'Children looking at books and learning materials with a Light Path volunteer',
    caption: 'Books within reach',
    credit: 'Light Path Afghanistan',
    category: 'Books & Libraries',
    width: 1600,
    height: 1600,
  },
  'community-ribbon': {
    src: '/images/field-conversation.jpg',
    alt: 'A Light Path team member speaking with community members in a rural area',
    caption: 'Community engagement',
    credit: 'Light Path Afghanistan',
    category: 'Community',
    width: 1600,
    height: 1600,
  },
  'courtyard': {
    src: '/images/field-conversation.jpg',
    alt: 'A Light Path team member speaking with local residents in a rural area',
    caption: 'A community visit',
    credit: 'Light Path Afghanistan',
    category: 'Community',
    width: 1600,
    height: 1600,
  },
  'field-visit': {
    src: '/images/field-visit.jpg',
    alt: 'Light Path volunteers visiting a community and speaking with local residents',
    caption: 'Light Path in the field',
    credit: 'Light Path Afghanistan',
    category: 'Community',
    width: 1600,
    height: 1600,
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
  'library-shelves',
  'science-workshop',
  'teacher-session',
  'community-study',
]

export const GALLERY_CATEGORIES = ['All', 'Education', 'Community', 'Books & Libraries']

export const PROGRAM_PHOTO_KEYS = {
  books: 'books-materials',
  libraries: 'library-shelves',
  schools: 'courtyard',
  workshops: 'science-workshop',
  scholarships: 'books-materials',
  teachers: 'teacher-session',
}
