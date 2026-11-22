/**
 * `status: documented` items are described in the co-founder's February 2024
 * interview and the official archive.
 * `status: focus` items are named on the official website, but delivery dates,
 * eligibility and outcomes are not independently verified. They are presented
 * as areas of focus only, never as completed projects.
 */
export const PROGRAMS = [
  {
    id: 'books',
    name: 'Books and learning materials',
    shortName: 'Books',
    status: 'documented',
    region: 'Paktia, Paktika, Khost and Logar',
    description: 'Light Path began by distributing storybooks to children in Loya Paktia so they could read beyond the classroom.',
    detail: 'Co-founder Abdul Wasi Wahdat reported that the team had distributed more than 2,000 storybooks by the time of his February 2024 interview. He described book distribution as the organization’s first activity after meeting rural communities and asking what resources they needed.',
    serves: 'Children and young people in underserved communities',
    topic: 'Learning materials',
  },
  {
    id: 'libraries',
    name: 'Community libraries',
    shortName: 'Libraries',
    status: 'documented',
    region: 'Paktika province',
    description: 'Light Path established a library in Paktika where children could read, study and talk about what they learned.',
    detail: 'In February 2024, Wahdat reported that the library held more than 1,000 books on a range of subjects. Volunteers attended the opening with co-founder Kamran Rayan. On a later visit, Wahdat recalled children using the space to read and discuss what they were learning.',
    serves: 'Children and young readers in Paktika',
    topic: 'Partnerships',
  },
  {
    id: 'schools',
    name: 'Access to school',
    shortName: 'School access',
    status: 'documented',
    region: 'Omna district, Paktika',
    description: 'Light Path reported opening a school for a community in Omna district and providing its students with books and stationery.',
    detail: 'Local contacts directed Light Path to a community in Omna district where families were settling after moving seasonally. Wahdat said the team surveyed local needs, opened a school, and provided books and stationery.',
    serves: 'Families and school-age children in Omna district',
    topic: 'Partnerships',
  },
  {
    id: 'workshops',
    name: 'Educational workshops',
    shortName: 'Workshops',
    status: 'focus',
    region: 'Area of work',
    description: 'Light Path lists educational workshops among the learning opportunities it discusses with communities.',
    detail: 'Workshops are one of the areas Light Path shares with visitors. Contact the team to ask about current sessions, topics and how to take part.',
    serves: 'Learners and educators',
    topic: 'Educational workshops',
  },
  {
    id: 'scholarships',
    name: 'Scholarship guidance',
    shortName: 'Scholarships',
    status: 'focus',
    region: 'Area of work',
    description: 'Light Path shares guidance about scholarships and further study with students who ask about it.',
    detail: 'Students can contact Light Path to ask about scholarship guidance, current opportunities and eligibility.',
    serves: 'Students seeking further education',
    topic: 'Student and scholarship inquiries',
  },
  {
    id: 'teachers',
    name: 'Teacher and learning support',
    shortName: 'Teacher support',
    status: 'focus',
    region: 'Area of work',
    description: 'Light Path discusses teacher training and learning support with educators working in underserved communities.',
    detail: 'Educators can ask the team about current training opportunities and the support Light Path offers.',
    serves: 'Teachers and educators',
    topic: 'Teacher support',
  },
]

export const DOCUMENTED_PROGRAMS = PROGRAMS.filter((program) => program.status === 'documented')
export const FOCUS_PROGRAMS = PROGRAMS.filter((program) => program.status === 'focus')
