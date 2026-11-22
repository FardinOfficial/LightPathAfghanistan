/**
 * Team roster.
 *
 * `photoBase` is the path WITHOUT an extension. TeamPortrait tries .jpg,
 * .jpeg, .png and .webp so the photographs can be supplied in any common
 * format using these exact base names in `public/images/team/`.
 *
 * Roles and biographies are limited to details supplied by the organization or
 * published in verifiable sources. See ORGANIZATION-SOURCES.md for evidence.
 */
export const TEAM = [
  {
    id: 'kamran-khan-rayan',
    uploadOrder: 1,
    name: 'Kamran Khan Rayan',
    role: 'Co-founder',
    group: 'leadership',
    photoBase: '/images/team/01-kamran-khan-rayan',
    bio: 'Kamran Rayan co-founded Light Path Afghanistan with Abdul Wasi Wahdat in 2021. They began by visiting rural communities and asking families and local leaders what would help children learn.',
    social: [],
  },
  {
    id: 'sliman-ghazanfer',
    uploadOrder: 2,
    name: 'Sliman Ghazanfer',
    role: 'Team member',
    group: 'team',
    photoBase: '/images/team/02-sliman-ghazanfer',
    bio: null,
    social: [],
  },
  {
    id: 'nasib-ullah-tarhan',
    uploadOrder: 3,
    name: 'Nasib Ullah Tarhan',
    role: 'Team member',
    group: 'team',
    photoBase: '/images/team/03-nasib-ullah-tarhan',
    bio: null,
    social: [],
  },
  {
    id: 'ismatullah-khan-pazhwak',
    uploadOrder: 4,
    name: 'Ismatullah Khan Pazhwak',
    role: 'Team member',
    group: 'team',
    photoBase: '/images/team/04-ismatullah-khan-pazhwak',
    bio: null,
    social: [],
  },
  {
    id: 'abdul-wasi-wahdat',
    uploadOrder: 5,
    name: 'Abdul Wasi Wahdat',
    role: 'Co-founder',
    group: 'leadership',
    photoBase: '/images/team/05-abdul-wasi-wahdat',
    bio: 'Abdul Wasi Wahdat co-founded Light Path Afghanistan in 2021. In a February 2024 interview, he described the organization’s early book distributions, community library and school access work.',
    social: [],
  },
  {
    id: 'fardin-khan',
    uploadOrder: 6,
    name: 'Fardin Khan',
    role: 'Team member',
    group: 'team',
    photoBase: '/images/team/06-fardin-khan',
    bio: null,
    social: [],
  },
]

export const LEADERSHIP = TEAM.filter((member) => member.group === 'leadership')
export const TEAM_MEMBERS = [
  TEAM.find((member) => member.id === 'ismatullah-khan-pazhwak'),
  TEAM.find((member) => member.id === 'sliman-ghazanfer'),
  TEAM.find((member) => member.id === 'nasib-ullah-tarhan'),
  TEAM.find((member) => member.id === 'fardin-khan'),
]

export const TEAM_SOURCES = {
  interview: 'https://eir.news/2024/02/interview-expanding-access-to-education-in-afghanistan/',
  registry: 'https://ngo.gov.af/publication/Home/National_ngos/326',
}
