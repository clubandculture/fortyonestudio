/**
 * ─────────────────────────────────────────────
 *  FORTY-ONE STUDIO — PROJECT DATA
 * ─────────────────────────────────────────────
 *
 *  All project content lives here.
 *  To add a project: add a new entry below,
 *  then add a card to work.html.
 *
 *  URL format: work/project.html?p=your-slug
 *
 *  FEATURED MEDIA — set `type` to:
 *    'image'  → uses `src` (path or URL)
 *    'video'  → uses `src` (path to .mp4)
 *    'embed'  → uses `embedSrc` (Vimeo/YouTube iframe URL)
 *
 *  GALLERY — each item needs:
 *    type:    'image' | 'video' | 'embed'
 *    src:     file path or URL
 *    alt:     alt text / caption
 *    layout:  'wide' (full width) | 'normal' (half width)
 *    ratio:   'video' (16:9) | 'square' (1:1) | 'portrait' (3:4)
 * ─────────────────────────────────────────────
 */

const PROJECTS = {

  'brand-campaign-film-series': {
    title: 'adidas x JFF',
    service: 'Content & Production',
    client: 'World Soccer Shop',
    year: '2026',
    region: 'North America & Caribbean',
    heroDesc: 'A brand film series that centered the voices and visual identity of three distinct communities across the Caribbean.',
    overview: [
      'World Soccer Shop set out to connect the Jamaican diaspora to the Bob Marley and Jamaica Football Federation collections through a culture-forward campaign built to drive sales.',
    ],
    deliverables: ['Brand Film', 'Community Content', 'Photography'],
    link: '',
    featured: {
      type: 'image',
      src: 'https://placehold.co/1920x1080/1C1916/1C1916',
      caption: '',
    },
    gallery: [
      { type: 'image', src: 'https://placehold.co/1400x788/1A1816/1A1816', alt: 'Film still', layout: 'wide',   ratio: 'video'   },
      { type: 'image', src: 'https://placehold.co/700x700/181614/181614',   alt: 'BTS',        layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/700x700/161412/161412',   alt: 'BTS',        layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/560x745/141210/141210',   alt: 'Portrait',   layout: 'normal', ratio: 'portrait'},
      { type: 'image', src: 'https://placehold.co/560x745/131110/131110',   alt: 'Portrait',   layout: 'normal', ratio: 'portrait'},
    ],
  },

  'regional-market-strategy': {
    title: 'Regional Market Strategy',
    service: 'Strategy & Consulting',
    client: '[Client Name]',
    year: '2024',
    region: 'CONCACAF',
    heroDesc: 'Brand positioning developed for a major partner entering three new CONCACAF markets.',
    overview: [
      'Entering a new market isn\'t a media buy problem — it\'s a positioning problem. When a major partner sought to expand into three CONCACAF markets simultaneously, the challenge wasn\'t awareness. It was relevance.',
      'We conducted deep audience research across each market, mapping the cultural, linguistic, and competitive distinctions that would determine whether the brand was welcomed or ignored. The output was a differentiated positioning framework for each territory — distinct strategies operating under a coherent regional identity.',
      'The engagement gave the partner a foundation to enter these markets with credibility, not just presence.',
    ],
    deliverables: ['Market Research', 'Brand Positioning', 'Go-to-Market Strategy'],
    link: '',
    featured: {
      type: 'image',
      src: 'https://placehold.co/1920x1080/181614/181614',
      caption: '',
    },
    gallery: [
      { type: 'image', src: 'https://placehold.co/1400x788/181614/181614', alt: 'Strategy presentation', layout: 'wide',   ratio: 'video'   },
      { type: 'image', src: 'https://placehold.co/700x700/161412/161412',  alt: 'Research',              layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/700x700/141210/141210',  alt: 'Research',              layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/560x745/131110/131110',  alt: 'Field work',            layout: 'normal', ratio: 'portrait'},
      { type: 'image', src: 'https://placehold.co/560x745/121008/121008',  alt: 'Field work',            layout: 'normal', ratio: 'portrait'},
    ],
  },

  'fan-experience-activation': {
    title: 'Fan Experience Activation',
    service: 'Experiential & Events',
    client: '[Client Name]',
    year: '2024',
    region: 'Caribbean',
    heroDesc: 'A large-scale fan activation built from the inside out for Caribbean football communities.',
    overview: [
      'Most fan activations are designed around the brand. This one was designed around the fans. Working with Caribbean football communities across multiple markets, we developed a large-scale activation that felt genuinely native to the spaces, sounds, and social fabric of each community.',
      'The activation drew on local artists, community figures, and grassroots organizers as co-creators — not just participants. Programming, aesthetics, and logistics were all built with cultural accuracy as the primary constraint.',
      'The result was an event that attendees described as theirs — a meaningful shift from how brand activations are typically received in these communities.',
    ],
    deliverables: ['Event Production', 'Creative Direction', 'Community Programming'],
    link: '',
    featured: {
      type: 'image',
      src: 'https://placehold.co/1920x1080/141618/141618',
      caption: '',
    },
    gallery: [
      { type: 'image', src: 'https://placehold.co/1400x788/141618/141618', alt: 'Event',      layout: 'wide',   ratio: 'video'   },
      { type: 'image', src: 'https://placehold.co/700x700/131416/131416',  alt: 'Crowd',      layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/700x700/121315/121315',  alt: 'Detail',     layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/560x745/111214/111214',  alt: 'Performer',  layout: 'normal', ratio: 'portrait'},
      { type: 'image', src: 'https://placehold.co/560x745/101113/101113',  alt: 'Performer',  layout: 'normal', ratio: 'portrait'},
    ],
  },

  'documentary-production': {
    title: 'Documentary Production',
    service: 'Content & Production',
    client: '[Client Name]',
    year: '2023',
    region: 'Central America',
    heroDesc: 'A short documentary series following community stories across Central America.',
    overview: [
      'Documentary work demands a different kind of access. You can\'t manufacture the moments that make these films worth watching — you have to earn the trust that makes them possible.',
      'This short documentary series was built around communities across Central America whose relationship with football is generational, cultural, and deeply tied to identity. Each episode focused on a single story, told over a sustained production period that allowed the subjects to be themselves rather than perform for camera.',
      'The series documented lives with honesty and care, and in doing so, created content with a shelf life that brand campaigns rarely achieve.',
    ],
    deliverables: ['Documentary Series', 'Long-form Video', 'Photography'],
    link: '',
    featured: {
      type: 'image',
      src: 'https://placehold.co/1920x1080/1A1614/1A1614',
      caption: '',
    },
    gallery: [
      { type: 'image', src: 'https://placehold.co/1400x788/1A1614/1A1614', alt: 'Documentary still', layout: 'wide',   ratio: 'video'   },
      { type: 'image', src: 'https://placehold.co/700x700/181412/181412',  alt: 'Subject portrait',  layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/700x700/161210/161210',  alt: 'Subject portrait',  layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/560x745/14100E/14100E',  alt: 'Location',          layout: 'normal', ratio: 'portrait'},
      { type: 'image', src: 'https://placehold.co/560x745/130F0D/130F0D',  alt: 'Location',          layout: 'normal', ratio: 'portrait'},
    ],
  },

  'launch-event-production': {
    title: 'Launch Event Production',
    service: 'Experiential & Events',
    client: '[Client Name]',
    year: '2023',
    region: 'North America',
    heroDesc: 'A brand launch event designed for a specific community — not at it.',
    overview: [
      'A launch event is only as credible as the room it fills. When the brief called for a brand introduction to a specific community, the question we asked first wasn\'t logistical — it was: does this community want to be in the room?',
      'We built the event to answer that question in the affirmative. Working from the inside of the community outward, we developed a launch experience whose guest list, talent, aesthetics, and programme were all shaped by people with genuine skin in the game.',
      'The event created the kind of goodwill that advertising budgets rarely can — an introduction that felt earned rather than purchased.',
    ],
    deliverables: ['Event Production', 'Creative Direction', 'Talent Curation'],
    link: '',
    featured: {
      type: 'image',
      src: 'https://placehold.co/1920x1080/151618/151618',
      caption: '',
    },
    gallery: [
      { type: 'image', src: 'https://placehold.co/1400x788/151618/151618', alt: 'Event space', layout: 'wide',   ratio: 'video'   },
      { type: 'image', src: 'https://placehold.co/700x700/141517/141517',  alt: 'Attendees',   layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/700x700/131416/131416',  alt: 'Detail',      layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/560x745/121315/121315',  alt: 'Speaker',     layout: 'normal', ratio: 'portrait'},
      { type: 'image', src: 'https://placehold.co/560x745/111214/111214',  alt: 'Speaker',     layout: 'normal', ratio: 'portrait'},
    ],
  },

  'social-content-campaign': {
    title: 'Social Content Campaign',
    service: 'Content & Production',
    client: '[Client Name]',
    year: '2023',
    region: 'North America',
    heroDesc: 'A multi-platform social content series built for North American football audiences, led by creators from within those communities.',
    overview: [
      'Social content fails communities when it treats them as an audience to be reached rather than a culture to be understood. For this multi-platform series, we started by identifying the creators already operating inside North American football communities — people whose followings existed because they were trusted, not just talented.',
      'The campaign was built around these voices, with Forty-One Studio providing the strategic framework, production support, and distribution architecture. The creators shaped the content; we shaped the conditions that made it possible.',
      'The series outperformed platform benchmarks on engagement across every market it ran in — a result that came from the approach, not the budget.',
    ],
    deliverables: ['Social Content', 'Creator Strategy', 'Multi-platform Distribution'],
    link: '',
    featured: {
      type: 'image',
      src: 'https://placehold.co/1920x1080/1A1816/1A1816',
      caption: '',
    },
    gallery: [
      { type: 'image', src: 'https://placehold.co/1400x788/1A1816/1A1816', alt: 'Campaign content',  layout: 'wide',   ratio: 'video'   },
      { type: 'image', src: 'https://placehold.co/700x700/181614/181614',  alt: 'Creator content',  layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/700x700/161412/161412',  alt: 'Creator content',  layout: 'normal', ratio: 'square'  },
      { type: 'image', src: 'https://placehold.co/560x745/141210/141210',  alt: 'Behind the scenes',layout: 'normal', ratio: 'portrait'},
      { type: 'image', src: 'https://placehold.co/560x745/13110F/13110F',  alt: 'Behind the scenes',layout: 'normal', ratio: 'portrait'},
    ],
  },

};
