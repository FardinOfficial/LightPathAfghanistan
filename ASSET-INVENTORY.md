# Asset inventory

Photographs are stored locally under `public/images/` and referenced through the
central registry in `src/data/photography.js`. No unstable third-party image
hotlinks are used. The official film remains YouTube-hosted and loads only on request.

## Official Light Path Afghanistan photographs (local)

| Local file | Original source | Used for | Status |
| --- | --- | --- | --- |
| `images/students-computer-classroom.webp` | [Official homepage — Quality Education for All](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/186fac58-5266-430d-a8b3-66b60ca174e3.webp) | Home hero + photo feature, gallery | Official site image |
| `images/community-study-session.webp` | [Official homepage — Empowering Communities](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/37128dae-4eb3-4d25-8f68-067dcad6bf7b.webp) | Get Involved, gallery | Official site image |
| `images/science-workshop.webp` | [Official homepage — Inclusivity and Equality](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/a4cb71c1-a749-4a4d-bb84-66682bae2d5d.webp) | About full-width section, Team shared purpose, gallery | Official site image |
| `images/teacher-training-session.webp` | [Official homepage — Teacher Training Initiatives](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/ac015c8b-8b3b-49e8-a123-c8d03faef1f3.webp) | Teacher support program, gallery | Official site image |
| `images/library-bookshelves.jpg` | [Official archive crop](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/15e19108-eaaa-41af-866f-b1a99c8bd6ba.jpg) | About intro, Libraries program, gallery | Official archive detail |
| `images/library-opening-banner.jpg` | [Official archive crop](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/9f622c33-3516-442e-a3b2-74f891441947.jpg) | About, Impact, gallery | Official archive detail |
| `images/books-and-materials.jpg` | [Official archive crop](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/36d8f110-67e8-40f9-9a15-f2abbd3e59fe.jpg) | Books program, gallery | Official archive detail |
| `images/ribbon-community-gathering.jpg` | [Official archive crop](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/1537f129-43ea-441f-ac71-ae514984e48d.jpg) | Team hero, gallery | Official archive detail |
| `images/courtyard-architecture.jpg` | [Official site hero image](https://s3.amazonaws.com/media-prod.butternut.ai/website_images/678650f335bcb42d31237a1a/f54808ca-7671-4543-973f-9c269aeee02a.jpg) | School-access program, gallery | Official site image, location unspecified |
| `images/education-film-poster.jpg` | [Official YouTube thumbnail](https://i.ytimg.com/vi/pXfRE-IXG1c/hqdefault.jpg) | Gallery film feature | Official video artwork |
| `images/logo-emblem.jpg`, `images/logo-wordmark.jpg` | Official site artwork | Reference / favicon source | Official branding |

## Team photographs — pending

`public/images/team/` is ready. Six photographs are expected with these exact
base names (any of `.jpg`, `.jpeg`, `.png`, `.webp`):

1. `01-kamran-khan-rayan`
2. `02-sliman-ghazanfer`
3. `03-nasib-ullah-tarhan`
4. `04-ismatullah-khan-pazhwak`
5. `05-abdul-wasi-wahdat`
6. `06-fardin-khan`

Until each file is supplied, the Team page shows a typographic initials placeholder.
No stock or generated portrait is used.

## Fonts

Self-hosted DM Sans and Playfair Display (SIL Open Font License) in `public/fonts/`.

## Excluded deliberately

- The legacy site's "3.2x / 85% / 97%" figures and named testimonials are template placeholders and are not reproduced.
- The "Founder Name 1 / Founder Name 2" stock portraits are not reproduced.
- No AI-generated documentary photographs or invented organizational events.

## Hero and footer assignments

Each page hero uses a different locally hosted photograph through `PageIntro`'s
`photo` prop (or a dedicated hero on Home and Team):

| Page | Hero photograph |
| --- | --- |
| Home | Students in a computer classroom |
| About | Traditional courtyard architecture |
| Our Team | Students in a hands-on learning session |
| Programs | Educator leading a classroom session |
| Program detail | Program-specific photograph |
| Impact | Library bookshelves (students reading) |
| Gallery | Books and learning materials |
| Get Involved | Community study session |
| Contact | Community gathering ribbon |
| Not Found | Books and learning materials |

The global footer uses the students-in-a-classroom photograph with a dark
gradient, a clip-path reveal and a subtle scroll parallax. All heroes carry
tone-aware overlays and responsive `object-position` values.

## Internal review notes (not for publication)

- Several official archive images are branded social graphics with a baked-in Light Path footer, social icons and a green gradient (`library-bookshelves.jpg`, `library-opening-banner.jpg`, `courtyard-architecture.jpg`, `ribbon-community-gathering.jpg`, `books-and-materials.jpg`). They are reproduced as the organization published them and are captioned as archive material.
- `library-opening-banner.jpg` contains a legacy `...@gmail.com` address baked into the banner. It is no longer used in a hero and appears only as a labelled gallery archive item. Request a clean, current version from Light Path before featuring it more prominently.
- `books-and-materials.jpg` shows a partner organization's signage (Etihad Charity Organization). This is preserved as part of the authentic photograph.
- `favicon.png` are derived from the official emblem, and `images/social-cover.jpg` is cropped from the official classroom photograph. Both are local, not hotlinked.
- Image dimensions in `src/data/photography.js` were corrected to match the files actually in `public/images/` (library images are 1026×748, not the earlier thin-crop values).
