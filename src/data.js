// All site content lives here. Edit this file to update the portfolio.

const w = (n) => `/work/s${String(n).padStart(2, '0')}.jpg`

export const profile = {
  name: 'Vishal Singh',
  role: 'Graphic Designer',
  years: 5,
  email: 'vishusinghone9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vishal-singh6',
  location: 'Bengaluru, India',
  current: 'Zepto',
  photo: '/work/vishal.jpeg',
  quote:
    'I can surprise others with my design thinking and the strong ability to make others curious.',
  driveUrl: 'https://drive.google.com/drive/folders/1KLpI0tK7Awh3IFPac37vJNFS9cvJUNfS',
  resumeUrl: 'https://drive.google.com/file/d/1gr9UfxLrp9JMeM5MGbbD3Vl5J0k7dtbU/view?usp=sharing',
}

export const verbs = ['logos', 'swag kits', 'posters', 'certificates', 'carousels', 'standees', 'campaigns']

export const skills = [
  'Brand identity',
  'Logo design',
  'Print & swag',
  'Social media',
  'Event campaigns',
  'Certificates',
  'Carousels',
  'Motion & video',
  'Infographics',
  'Packaging',
  'Storyboarding',
  'Emailers',
]

// Experience, from his resume (LinkedIn profile export). Leave `type` empty to hide the pill.
export const experience = [
  {
    role: 'Graphic Designer',
    org: 'Zepto',
    type: 'Full-time',
    dates: 'May 2026 – Present',
    place: 'Bengaluru',
    points: [],
  },
  {
    role: 'Graphic Designer',
    org: 'Meesho',
    type: 'Full-time',
    dates: 'Jul 2022 – Apr 2026',
    place: '',
    points: [
      '2,500+ assets across social, presentations, videos and brochures.',
      '5+ campaigns, including "First Time in India" and "11 Days Reset and Recharge", with logos and posts.',
      'Custom standees, awards and kits at scale: a Welcome Kit for 500+ colleagues and a Panchayat Quarterly Awards Kit for 150 recipients.',
    ],
  },
  {
    role: 'Graphic Designer / Video Editor',
    org: 'PetMojo',
    type: 'Freelance',
    dates: 'Aug 2022 – Feb 2023',
    place: 'Gurugram',
    points: [
      '200+ social posts, carousels and stories, plus 100+ ads.',
      '5+ product brochures and graphics.',
    ],
  },
  {
    role: 'Graphic Designer',
    org: 'Scaler',
    type: '',
    dates: 'Feb 2022 – Jul 2022',
    place: 'Remote',
    points: [
      '500+ blog graphics and ad creatives in varied layouts.',
      'Worked with marketing on briefs and ran multi-layer proofing before delivery.',
    ],
  },
  {
    role: 'Graphic Designer',
    org: 'The Language Network',
    type: 'Freelance',
    dates: 'Nov 2021 – Apr 2022',
    place: 'Remote',
    points: [
      '500+ social posts and carousels, 200+ stories and 50+ ads.',
      'Brochures and graphics for 50+ campaigns and activities.',
    ],
  },
]

export const education = [
  { school: 'DAV College, Kanpur', degree: 'MA, Political Science and Government', years: '2020 – 2022' },
  { school: 'CSJM Kanpur University', degree: 'BA, Political Science and Government', years: '2017 – 2020' },
]

export const highlights = [
  { n: '5+', label: 'years designing' },
  { n: '2,500+', label: 'assets shipped' },
  { n: '5+', label: 'brand campaigns' },
]

export const categories = ['All', 'Branding', 'Print & Swag', 'Social', 'Certificates', 'Motion']

export const projects = [
  // ---------- Top projects ----------
  {
    id: 'pod',
    title: 'POD Premier League',
    kind: 'Logo',
    cat: 'Branding',
    featured: true,
    color: '#5B1A4A',
    blurb: 'A stadium-lit badge for an internal cricket league. Trophy, floodlights and a ribbon wordmark carry the brand purple and gold.',
    images: [w(8)],
  },
  {
    id: 'fempower',
    title: 'FEMPOWER',
    kind: 'Identity + campaign',
    cat: 'Branding',
    featured: true,
    color: '#F2A33A',
    blurb: 'Identity for the women-at-work initiative, rolled out to posters, a fireside-chat series, badges, tote bags and bottles under the line #StrongHerTogether.',
    images: [w(9), w(10)],
  },
  {
    id: 'panchayat',
    title: 'Panchayat JFM Awards',
    kind: 'Award kit',
    cat: 'Print & Swag',
    featured: true,
    color: '#FFC21A',
    blurb: 'A quarterly award kit made for 150 recipients: letter, notebook, mug, pen and hoodie, all in one box.',
    images: [w(5)],
  },
  {
    id: 'welcome-kits',
    title: 'Welcome Kits',
    kind: 'Onboarding swag',
    cat: 'Print & Swag',
    featured: true,
    color: '#BFE0FF',
    blurb: 'The first thing a new joiner opens. Made for 500+ colleagues: on-board cards, notebooks, a regional-language diary, mugs and bottles.',
    images: [w(6)],
  },
  {
    id: 'standees',
    title: 'Section Name Standees',
    kind: 'Wayfinding',
    cat: 'Print & Swag',
    featured: true,
    color: '#F4C9D6',
    blurb: 'Office sections named after famous Indian markets (Bada Bazaar, Hazrat Ganj, Crawford Market), each with its own illustrated skyline.',
    images: [w(7)],
  },
  {
    id: 'reset-recharge',
    title: "Reset 'N Recharge",
    kind: 'Campaign',
    cat: 'Social',
    featured: true,
    color: '#1E6BFF',
    blurb: 'Lockup and carousel for the "11 Days Reset and Recharge" company-wide break. The battery doubles as the R and turns green at full charge.',
    images: [w(11), w(12)],
  },

  // ---------- Other projects ----------
  {
    id: 'sup-go',
    title: 'SUP-GO Hack',
    kind: 'Hackathon identity',
    cat: 'Branding',
    color: '#E0249A',
    blurb: 'Angle brackets replace the A in HACK to signal tech, a rocket nods to the brand theme, and GO is green for growth. Applied to posters, photo frames and event decor.',
    images: [w(27), w(28), w(29), w(30), w(26)],
  },
  {
    id: 'certificates',
    title: 'Certificates @ Meesho',
    kind: 'Certificate system',
    cat: 'Certificates',
    color: '#E0249A',
    blurb: 'A family of certificates for HR All Hands, Spot Awards, Long Service Awards, team All Hands and 3P vendor recognition.',
    images: [w(20), w(17), w(18), w(19), w(21)],
  },
  {
    id: 'ed-calendar',
    title: 'Employee Delight Calendar',
    kind: 'Yearly campaign',
    cat: 'Social',
    color: '#FFB703',
    blurb: 'A month-by-month calendar of engagement days, with a creative for each one: Joyfull January, Fabulous February, Independence Day, World Photography Day and more.',
    images: [w(36), w(35), w(37), w(38), w(39), w(40), w(41)],
  },
  {
    id: 'promo',
    title: 'Promotional Posts',
    kind: 'Event posters',
    cat: 'Social',
    color: '#D61F69',
    blurb: 'Posters for Meesho Masti (an evening with Mohit Chauhan), the Talent Hunt and the Cricket League.',
    images: [w(23)],
  },
  {
    id: 'social-bee',
    title: 'Social Bee Contest',
    kind: 'Contest creative',
    cat: 'Social',
    color: '#C21FD0',
    blurb: 'A 3D-type contest post that asks employees to share their happy moments for a chance to win a gift hamper.',
    images: [w(24)],
  },
  {
    id: 'meedelight',
    title: 'MeeDelight!',
    kind: 'Launch teaser',
    cat: 'Social',
    color: '#7B2CFF',
    blurb: 'Neon teaser posts announcing the new employee rewards platform.',
    images: [w(14)],
  },
  {
    id: 'benefits',
    title: 'Benefits at Meesho',
    kind: 'Handbook + trailer',
    cat: 'Motion',
    color: '#9B2FE0',
    blurb: 'A benefits handbook and a trailer video to launch it: insurance, wellness, mantras and mission, made easy to skim.',
    images: [w(16), w(15)],
  },
  {
    id: 'talent-hunt',
    title: 'Talent Hunt',
    kind: 'Video',
    cat: 'Motion',
    color: '#FF2E88',
    blurb: 'Title card and video for the company-wide talent hunt.',
    images: [w(25)],
  },
  {
    id: 'videos',
    title: 'Taarifein & Yaariyan',
    kind: 'Videos',
    cat: 'Motion',
    color: '#3A1C71',
    blurb: 'Recap videos for the Taarifein awards (150+ nominations, 85+ winners, 2100+ Meeshoites) and the Yaariyan friendship series.',
    images: [w(44), w(45)],
    links: [
      { label: 'Watch Taarifein', url: 'https://drive.google.com/file/d/1im_3IgkiXz1-0bSwKMOXrlrcok-lUUKC/view?usp=sharing' },
      { label: 'Watch Yaariyan', url: 'https://drive.google.com/file/d/17N9ng3NLqumUubobQ9cUyHfD-sk2I26f/view?usp=drive_link' },
    ],
  },
  {
    id: 'mid-year',
    title: 'Mid-Year Feedback',
    kind: 'Guide',
    cat: 'Social',
    color: '#E33E8A',
    blurb: 'A visual how-to for giving mid-year feedback.',
    images: [w(31)],
  },
  {
    id: 'recognition',
    title: 'Recognition Posts',
    kind: 'Story series',
    cat: 'Social',
    color: '#6C2BD9',
    blurb: 'A quiz-style story series on why recognition matters, ending with an expert session.',
    images: [w(33)],
  },
  {
    id: 'birthday',
    title: 'Birthday Cards',
    kind: 'E-cards',
    cat: 'Social',
    color: '#FF5C8A',
    blurb: 'A set of playful birthday cards sent to every employee.',
    images: [w(34)],
  },
  {
    id: 'friends',
    title: 'Friends @ Work',
    kind: 'Collage',
    cat: 'Social',
    color: '#F28AB2',
    blurb: 'A polaroid-style collage celebrating friendships at the office.',
    images: [w(42)],
  },
  {
    id: 'webinars',
    title: 'Webinar Posts',
    kind: 'Series',
    cat: 'Social',
    color: '#FF2E88',
    blurb: "Speaker posts for HR All Hands, the Quarterly Summit 2.0 ('Bigger, Better, Behtar') and a health-checkup drive.",
    images: [w(46), w(47), w(48)],
  },
  {
    id: '4cs',
    title: '4Cs Blog Cover & Carousel',
    kind: 'Editorial',
    cat: 'Social',
    color: '#9DB7FF',
    blurb: 'Cover and carousel for a blog on the four Cs of employee engagement, in soft 3D illustration.',
    images: [w(50), w(49)],
  },
  {
    id: 'more',
    title: 'Odds & Ends',
    kind: 'Mixed',
    cat: 'Social',
    color: '#1C8C3C',
    blurb: 'Tax-saving explainers, a compliance leaderboard, summit countdowns and knowledge-sharing posts.',
    images: [w(51), w(52), w(53), w(54)],
  },
]

// Folders inside his shared Google Drive.
export const archive = [
  { title: 'Logo', id: '1o8RpGyGn9zX9MRoMrmTvwr1afiIo4FvG' },
  { title: 'Packaging Design Mockups', id: '1IEFH08p7LDE1KvBdMajOFvzern5-0tPQ' },
  { title: 'Social Media Posts', id: '1iOwsHzrMUEKW6R8VmkAtefegvMGsaXqw' },
  { title: 'Minimalism & Typography', id: '1thLeZ1_hexB2fHLwwD4tNYU_tC6SSezP' },
  { title: 'Animation and Videos', id: '1b8cYyH7phiPSJiyPCSnKpc7NwX3wwrox' },
  { title: 'Webinar Creatives', id: '1EfaOy8qLMajoWH4MmiWrO3NaX3fpw46M' },
  { title: 'Infographics', id: '1oV5UFejbb1Ghkz0EjEtpGLLNzhGUUWQQ' },
  { title: 'Story Boarding', id: '1GwcymjEpUXA9dExcSoCI06QpGBMiaGBB' },
  { title: 'Brochure', id: '1rsFm_qtojJZf1RpFVo59afxuuDyfMCx-' },
  { title: 'Banners', id: '1zm5Ru-Uk6fVv2sWAcK53YkiiJWeQ-JAM' },
  { title: 'Landing Page Design', id: '1LJ1tNfmC_O1MvuZN9wSNBOgG0dNLYvj9' },
  { title: 'Emailer Design', id: '1bnEZMX8NrVSDjeDZrgfeigx457qwAheZ' },
  { title: 'Extra', id: '1uwWZdw-1I6oOdB2DbGnkqSqMgiNdqCXb' },
].map((f) => ({ ...f, url: `https://drive.google.com/drive/folders/${f.id}` }))

// Draggable stickers in the hero, cropped from slides with CSS backgrounds.
export const stickers = [
  // x / y are % of the sticker board; w is width in px (scaled down on phones).
  { label: 'POD', src: w(8), size: '300%', pos: '72% 50%', w: 170, ratio: 1, x: 6, y: 2, r: -8 },
  { label: 'FEMPOWER', src: w(9), size: '190%', pos: '96% 88%', w: 200, ratio: 1.25, x: 56, y: 0, r: 6 },
  { label: 'SUP-GO Hack', src: w(27), size: '155%', pos: '50% 42%', w: 260, ratio: 1.6, x: 20, y: 38, r: 4 },
  { label: 'Social Bee', src: w(24), size: '220%', pos: '90% 50%', w: 160, ratio: 1, x: 66, y: 50, r: -5 },
  { label: "Reset 'N Recharge", src: w(11), size: '125%', pos: '50% 35%', w: 240, ratio: 1.6, x: 2, y: 72, r: -3 },
]
