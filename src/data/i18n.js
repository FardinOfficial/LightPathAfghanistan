/**
 * Translation architecture
 * ------------------------
 * English is the published default. Dari (`fa`) and Pashto (`ps`) dictionaries
 * are intentionally empty: no machine-translated text is published as approved
 * organizational copy. Add approved translations to `dictionaries.fa` / `.ps`
 * using the same dotted keys and the UI switches automatically.
 *
 * `t()` always falls back to English for any missing key, so a partially
 * translated locale can be enabled safely.
 */
export const DEFAULT_LOCALE = 'en'
export const LOCALES = [
  { code: 'en', label: 'English', dir: 'ltr', native: 'English' },
  { code: 'fa', label: 'Dari', dir: 'rtl', native: 'دری' },
  { code: 'ps', label: 'Pashto', dir: 'rtl', native: 'پښتو' },
]

export const directionFor = (locale) =>
  LOCALES.find((item) => item.code === locale)?.dir || 'ltr'

const en = {
  common: {
    pashtoName: 'د رڼا لار افغانستان',
    brandMessage: 'Bringing light and education to every corner of Afghanistan.',
    mission: 'Explore our mission',
    programs: 'Discover our programs',
    support: 'Support our mission',
    involved: 'Get involved',
    contact: 'Contact us',
    viewAll: 'View all',
    readMore: 'Read more',
    learnMore: 'Learn more',
    backToTop: 'Back to top',
    skip: 'Skip to content',
  },

  nav: {
    home: 'Home',
    about: 'About',
    team: 'Our Team',
    programs: 'Programs',
    impact: 'Impact',
    gallery: 'From the Field',
    getInvolved: 'Get Involved',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    cta: 'Get Involved',
  },

  footer: {
    lead: 'Bring learning closer.',
    leadBody: 'Every conversation can open a door to new educational opportunities.',
    leadButton: 'Contact Light Path',
    explore: 'Explore',
    programs: 'Programs',
    connect: 'Connect',
    location: 'Kabul, Afghanistan',
    rights: 'Light Path Afghanistan. All rights reserved.',
  },

  home: {
    heroEyebrow: 'Light Path Afghanistan',
    heroLines: ['Every Child', 'Deserves a', 'Brighter Future.'],
    heroAccent: 2,
    heroBody: 'Bringing education, knowledge, and opportunities to communities across Afghanistan. Together, we can illuminate a path toward a better future.',
    heroPrimary: 'Discover Our Mission',
    heroSecondary: 'Support Our Mission',
    heroScroll: 'Scroll to explore',
    heroCaption: 'Khost valley · Archival landscape via Wikimedia Commons',

    introEyebrow: 'Who we are',
    introLines: ['Education Is Where', 'Every Brighter Future', 'Begins.'],
    introAccent: 2,
    introBody: 'Light Path Afghanistan is a non-governmental, non-profit educational organization working to expand access to quality learning in remote and underserved communities. We begin by listening — to families, local leaders and young people — then work alongside them to put books, resources and places to learn within reach.',
    introSecondary: 'We focus especially on Loya Paktia, while our early work reached communities across Paktia, Paktika, Khost and Logar.',
    introLink: 'Read our story',

    missionEyebrow: 'Mission & vision',
    missionTitle: 'A path built with communities, not for them.',
    missionLabel: 'Our mission',
    missionHeading: 'Expand access to learning.',
    missionBody: 'Bring books, learning resources and places to study within reach of children and young people in underserved Afghan communities — regardless of gender or where they live.',
    visionLabel: 'Our vision',
    visionHeading: 'A fair chance for every learner.',
    visionBody: 'We envision a future where every Afghan has the opportunity to learn, grow and contribute positively to their community.',

    focusEyebrow: 'Our focus',
    focusTitle: 'Four commitments. One shared path.',
    focusBody: 'Our work is guided by what communities tell us they need most.',
    focusItems: [
      { title: 'Quality Education', body: 'Supporting learning opportunities that are relevant, accessible and grounded in the needs of each community.' },
      { title: 'Empowering Communities', body: 'Working with families and local leaders so education becomes a shared, lasting priority.' },
      { title: 'Youth Development', body: 'Creating space for children and young people to learn, grow and imagine what comes next.' },
      { title: 'Inclusive Learning', body: 'Advocating for equal opportunities, including for girls and learners in remote areas.' },
    ],

    programsEyebrow: 'Educational programs',
    programsTitle: 'Learning, made local.',
    programsBody: 'From storybooks to community libraries and school access, our early work grew out of direct conversations with communities.',
    programsLink: 'Explore all programs',

    storyEyebrow: 'Our story',
    storyTitle: 'It began with listening.',
    storyBody: 'Co-founder Abdul Wasi Wahdat dates Light Path’s beginnings to 2021, when he and Kamran Rayan were university students visiting rural communities and asking what would help children learn.',

    impactEyebrow: 'Impact',
    impactTitle: 'Small beginnings, real change.',
    impactBody: 'The figures below come from a February 2024 interview with co-founder Abdul Wasi Wahdat. They describe the organization’s early work and are published with that source.',
    impactSource: 'Source: co-founder interview, February 2024',
    impactLink: 'Read the field account',

    galleryEyebrow: 'From the archive',
    galleryTitle: 'Inside the work.',
    galleryBody: 'Details from the Light Path archive and landscapes from the regions where we work.',
    galleryLink: 'Explore the archive',

    ctaTitle: 'Be Part of the Change.',
    ctaBody: 'Every contribution, idea, and effort can help create new educational opportunities.',
    ctaButton: 'Get Involved',
  },

  about: {
    heroEyebrow: 'About Light Path',
    heroLines: ['Rooted in Afghan', 'communities.'],
    heroAccent: 1,
    heroBody: 'A non-governmental, non-profit educational organization dedicated to expanding access to learning across Afghanistan, with special attention to underserved communities.',

    introEyebrow: 'Our beginning',
    introTitle: 'The first step was a conversation.',
    introBody: 'Light Path Afghanistan traces its beginnings to 2021. Co-founders Kamran Rayan and Abdul Wasi Wahdat were university students when they began visiting rural communities, speaking with families and local leaders about what would help their children learn. Those conversations shaped the organization’s first work.',
    introLink: 'Read the co-founder interview',

    storyEyebrow: 'Our journey',
    storyTitle: 'From an idea to a registered organization.',
    milestones: [
      { year: '2021', title: 'The founding idea', body: 'According to Wahdat’s published account, he and Kamran Rayan began organizing while at university, starting with visits and conversations in rural communities.' },
      { year: '2024', title: 'Early work documented', body: 'In February 2024, Wahdat described storybook distributions, a community library in Paktika and a school in Omna district.' },
      { year: '1403', title: 'Officially registered', body: 'Afghanistan’s NGO Directorate lists Light Path Afghanistan Organization as active under registration number 6106, for education and social services, based in Kabul.' },
    ],
    sourceLink: 'View the NGO registry listing',

    missionEyebrow: 'Our mission',
    missionTitle: 'Education within reach.',
    missionBody: 'Expand access to quality education and learning opportunities throughout Afghanistan, particularly in remote and underserved communities.',
    visionEyebrow: 'Our vision',
    visionTitle: 'A future where everyone can learn.',
    visionBody: 'A future where every Afghan has the opportunity to learn, grow and contribute positively to their community.',

    valuesEyebrow: 'What we value',
    valuesTitle: 'The principles behind the work.',
    values: [
      'Education for everyone',
      'Empowerment through knowledge',
      'Equal learning opportunities',
      'Community development',
      'Youth leadership',
      'Inclusivity',
      'Collaboration',
      'Long-term positive impact',
    ],

    approachEyebrow: 'Our approach',
    approachTitle: 'Listen. Learn. Act together.',
    approachBody: 'The published account of our early work describes a clear sequence: reach out to communities, visit in person, meet local leaders and survey what learners need before deciding how to help.',
    approachSteps: [
      { title: 'Reach out', body: 'Start with conversations and calls to communities.' },
      { title: 'Visit and listen', body: 'Meet families and local leaders on the ground.' },
      { title: 'Respond together', body: 'Choose practical support based on what people say they need.' },
    ],

    regionsEyebrow: 'Geographic focus',
    regionsTitle: 'Loya Paktia and beyond.',
    regionsBody: 'Our early work was concentrated in Loya Paktia and included the following areas, as described in the co-founder’s published interview.',
    regionsNote: 'Logar is also named in the co-founder’s account of early storybook distribution.',

    teamEyebrow: 'Leadership',
    teamTitle: 'The people behind the path.',
    teamBody: 'Light Path Afghanistan is guided by its co-founders and supported by a team working across coordination and community activities.',
    team: [
      { name: 'Kamran Rayan', role: 'Co-founder & Director', source: 'Listed as director in the Afghanistan NGO Directorate registry.' },
      { name: 'Abdul Wasi Wahdat', role: 'Co-founder', source: 'Co-founder interviewed about the organization’s early work in February 2024.' },
    ],
  },

  programs: {
    heroEyebrow: 'Our programs',
    heroLines: ['Learning', 'within reach.'],
    heroAccent: 1,
    heroBody: 'Books children can take home. Libraries they can return to. Schools closer to where they live.',
    documentedEyebrow: 'Documented work',
    documentedTitle: 'What the early record shows.',
    documentedBody: 'These initiatives are described in the co-founder’s February 2024 interview and in the organization’s public archive.',
    focusEyebrow: 'Areas of focus',
    focusTitle: 'Topics people ask us about.',
    focusBody: 'The areas below reflect topics Light Path shares with visitors. Contact the team for current availability, eligibility and dates.',
    studentEyebrow: 'For students',
    studentTitle: 'Looking for education guidance?',
    studentBody: 'Ask Light Path which education or scholarship guidance is currently available.',
    studentLink: 'Ask about student support',
  },

  impact: {
    heroEyebrow: 'Our impact',
    heroLines: ['A place', 'to learn.'],
    heroAccent: 1,
    heroBody: 'The early work of Light Path Afghanistan, as described by co-founder Abdul Wasi Wahdat in February 2024.',

    recordEyebrow: 'February 2024 · Co-founder’s account',
    recordTitle: 'The early record.',
    recordBody: 'The following figures were reported in a published interview. They describe early activity and are not presented as current organizational totals.',
    statOne: 'Storybooks distributed',
    statOneNote: 'Across districts in Paktia, Paktika, Khost and Logar.',
    statTwo: 'Books in the Paktika library',
    statTwoNote: 'Spanning several subjects, according to Abdul Wasi Wahdat.',
    sourceLink: 'Source for both figures',

    storyEyebrow: 'Stories from the field',
    storyTitle: 'What a library made possible.',
    storyBody: 'On a return visit, Wahdat described finding children reading and discussing what they had learned. The library gave them a place to do that together. The same interview records early storybook distributions and the opening of a school in Omna district.',

    timelineEyebrow: 'Early milestones',
    timelineTitle: 'From conversations to classrooms.',
  },

  gallery: {
    heroEyebrow: 'Photo & film archive',
    heroLines: ['Learning', 'in pictures.'],
    heroAccent: 1,
    heroBody: 'Details from the Light Path archive, landscapes from the region and an official Pashto film.',
    filterLabel: 'Filter photographs',
    photoCount: 'photographs shown',
    openPhoto: 'View photograph',
    close: 'Close photograph',
    previous: 'Previous photograph',
    next: 'Next photograph',
    videoEyebrow: 'Official video · Pashto',
    videoTitle: 'Why education matters',
    videoBody: 'Light Path Afghanistan on the importance communities place on education.',
    videoWatch: 'Watch on YouTube',
    videoChannel: 'Visit the official channel',
    videoLoad: 'Load video',
  },

  involved: {
    heroEyebrow: 'Get involved',
    heroLines: ['Make room', 'for learning.'],
    heroAccent: 1,
    heroBody: 'Share your time, skills or resources with communities working to expand access to education.',
    optionsEyebrow: 'Ways to contribute',
    optionsTitle: 'Find the path that fits you.',
    optionsBody: 'Every inquiry starts a conversation. Choose an area below and tell us how you would like to help.',

    processEyebrow: 'How it works',
    processTitle: 'A simple first step.',
    processBody: 'We keep things direct and transparent at every stage.',
    processSteps: [
      { title: 'Reach out', body: 'Send a short message using the contact form and tell us what interests you.' },
      { title: 'Have a conversation', body: 'Discuss your skills, resources or questions with the team.' },
      { title: 'Move forward together', body: 'Agree on a practical next step that fits current needs.' },
    ],

    faqEyebrow: 'Frequently asked questions',
    faqTitle: 'Before you get in touch',
    faqs: [
      { q: 'Can I volunteer as an educator?', a: 'Tell the team about your teaching experience, availability and the communities or subjects you can support.' },
      { q: 'Can I offer books or classroom supplies?', a: 'Contact the team first to discuss the materials, language, age group and delivery arrangements.' },
      { q: 'How can I ask about scholarships?', a: 'Choose “Student and scholarship inquiries” on the contact page to ask about available guidance.' },
      { q: 'Can I make a financial contribution?', a: 'Light Path does not list a payment method on this website. Use the contact form to ask the team about current support needs.' },
    ],
  },

  contact: {
    heroEyebrow: 'Contact',
    heroLines: ['Let’s', 'talk.'],
    heroAccent: 1,
    heroBody: 'Reach out about volunteering, partnerships, learning materials or education guidance.',

    infoEyebrow: 'Contact details',
    infoTitle: 'Start a conversation.',
    infoLocation: 'Location',
    infoPhone: 'Phone',
    infoEmail: 'Email',
    infoSocial: 'Follow',

    formEyebrow: 'Write to us',
    formTitle: 'Send a message.',
    formBody: 'This form prepares a message in your own email application. Review and send it there — Light Path receives it only after you send it.',
    formName: 'Your name',
    formEmail: 'Email address',
    formTopic: 'Topic',
    formMessage: 'Message',
    formSubmit: 'Open email draft',
    formSuccess: 'Your email draft is ready in your email application. Review it there and send it when you are ready.',
    formSuccessLink: 'Open the draft again',
    formError: 'Please complete the required fields before continuing.',

    mapEyebrow: 'Where we are',
    mapTitle: 'Kabul, Afghanistan',
    mapBody: 'Light Path Afghanistan is registered in Kabul and works with communities across the country, with an early focus on Loya Paktia.',

    faqEyebrow: 'Questions',
    faqTitle: 'Good to know',
    faqs: [
      { q: 'When will I hear back?', a: 'Response times are not published. Your message is delivered when you send the draft in your email application.' },
      { q: 'Which email should I use?', a: 'Write to contact@lightpathafg.org, the address published on Light Path’s appointment page.' },
      { q: 'Can I ask about current programs?', a: 'Yes. Choose the topic that best matches your question and include detail in your message.' },
    ],
  },

  notFound: {
    eyebrow: '404 · Page not found',
    lines: ['This path', 'ends here.'],
    accent: 1,
    body: 'The page may have moved. Use the links below to continue exploring Light Path Afghanistan.',
    home: 'Back to home',
    contact: 'Contact us',
  },
}

/** Dari and Pashto begin empty; approved translations are added here. */
const fa = {}
const ps = {
  common: {
    pashtoName: 'د رڼا لار افغانستان',
  },
}

export const dictionaries = { en, fa, ps }

function lookup(dictionary, path) {
  return path.split('.').reduce((value, key) => {
    if (value && typeof value === 'object' && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key]
    }
    return undefined
  }, dictionary)
}

/**
 * Translate a dotted key for `locale`, falling back to English.
 * @param {string} locale
 * @param {string} path
 * @param {Record<string, string|number>} [vars]
 */
export function translate(locale, path, vars) {
  const value = lookup(dictionaries[locale] || {}, path) ?? lookup(en, path) ?? path
  if (typeof value !== 'string' || !vars) return value
  return value.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match,
  )
}

export const t = (path, vars) => translate(DEFAULT_LOCALE, path, vars)
