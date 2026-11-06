// Page content, copied from the live landing pages on Nov 6 2026.
// Keep phone numbers and tel: links exactly as the live pages have them.

const PHONE = '(727) 855-6766';
const AREAS = 'Serving Pasco, Pinellas, Hernando, Hillsborough, Citrus, and Sumter counties.';

const REVIEWS_STD = [
  { q: 'Pro Wildlife Removal did an amazing job! We had rats in our attic and they came out the same day. The technician was very knowledgeable and sealed all the entry points. Highly recommend!', n: 'John D.' },
  { q: "Trustworthy and reliable. They stand by their work and their communication is a huge plus compared to other companies I've dealt with.", n: 'Robert B.' },
  { q: 'Very professional service. The team was exactly as promised with no hidden surprises. They did a full inspection and fixed it permanently.', n: 'Melissa R.' },
  { q: 'Excellent experience from start to finish. They did a full inspection, found where they were getting in, and fixed it permanently. The cleanup was thorough too.', n: 'Amanda T.' },
];

const TRUST_STD = [
  { icon: 'star', t: '4.7 Google Rating', star: true },
  { icon: 'shield', t: 'Licensed & Insured', s: 'Florida Certified' },
  { icon: 'clock', t: 'Same-Day Service', s: 'Fast Response' },
  { icon: 'alert', t: 'Permanent Solution', s: 'Sealed For Good' },
];

const WHY_EMOJI = ['🔥', '⚕', '📈'];

export const pages = [
  {
    slug: 'rat',
    host: 'rat.prowildliferemoval.net',
    title: 'Rat Removal Tampa FL | Same-Day Service | Pro Wildlife Removal',
    description: 'Same-day rat removal in Tampa Bay & West Central Florida. Free inspection, professional trapping, and custom sealing. Licensed & insured. Call (727) 855-6766.',
    tel: 'tel:+17278556766',
    topbar: 'Serving Tampa Bay & West Central Florida — Same-Day Rat Removal',
    headerLabel: '24/7 Emergency Rat Removal',
    hero: { badge: 'Fully Licensed & Insured', h1: ['Same-Day Emergency', 'Rat Removal'], sub: 'Free inspection. Professional, permanent rat removal.', img: 'rat-hero.jpg', alt: 'Rats' },
    trust: TRUST_STD,
    inspect: {
      imgs: [['rat-inspect-1.jpg', 'Attic inspection'], ['rat-inspect-2.jpg', 'Rat trapped']],
      kicker: 'Professional Inspection', h2: 'Your Comprehensive Rat Inspection',
      p: 'We provide a complete inspection to find out exactly where rats are getting in and solve your rodent problem permanently.',
      items: ['Full attic, crawlspace & wall inspection', 'Rodent entry-point identification', 'Droppings & damage assessment', 'Detailed property assessment'],
      cta: 'Call for FREE Inspection',
    },
    signs: {
      h2: 'Signs You Have a Rat Problem', p: "If you notice any of these, don't wait — rats never leave on their own.",
      items: [['volume', 'Scratching in walls or ceilings at night'], ['circle', 'Droppings in the attic, pantry, or garage'], ['zap', 'Gnawed wires, wood, or food packaging'], ['waves', 'Grease rub marks along walls and beams'], ['layers', 'Nests of shredded insulation or paper'], ['wind', 'A musty, ammonia-like smell']],
    },
    solution: {
      h2: 'Our Complete Rat Removal Solution',
      steps: [
        ['01', 'Trapping & Removal', 'Targeted, professional-grade trapping that removes every rat in the structure — safely and thoroughly.'],
        ['02', 'Exclusion (Seal-Up)', "A rat only needs a hole the size of a quarter. We seal every entry point with rodent-proof materials — once they're out, they stay out."],
        ['03', 'Clean-Up & Restoration', 'Droppings removal, antimicrobial treatment, contaminated insulation replacement, and full sanitizing of affected areas.'],
      ],
    },
    why: {
      h2: "Why a Rat Problem Can't Wait",
      items: [['Fire hazard', 'Rats gnaw electrical wiring inside walls and attics.'], ['Health risk', 'Droppings and urine contaminate insulation and air.'], ['They multiply fast', 'One pair can become dozens in a few months.']],
    },
    reviews: REVIEWS_STD,
    urgency: { h2: "Rat Damage Gets Worse Every Day It's Ignored", p: 'Book your free inspection today.', cta: `Call ${PHONE} Now` },
    contact: { p: 'Professional rat removal is only a phone call away.', label: 'Call Us 24/7', areas: AREAS, img: 'rat-contact.jpg', alt: 'Rat Removal Service' },
  },

  {
    slug: 'bat',
    host: 'bat.prowildliferemoval.net',
    title: 'Same-Day Emergency Bat Removal | Pro Wildlife Removal',
    description: 'Same-day emergency bat removal in Tampa Bay & West Central Florida. Licensed & insured. Free inspection, permanent seal-up & guano clean-up. Call (727) 855-6766.',
    tel: 'tel:+17278556766',
    topbar: 'Serving Tampa Bay & West Central Florida — Same-Day Bat Removal',
    headerLabel: '24/7 Emergency Bat Removal',
    hero: { badge: 'Fully Licensed & Insured', h1: ['Same-Day Emergency', 'Bat Removal'], sub: 'Free inspection. Professional, permanent bat removal — humane one-way valve exclusion.', img: 'bat-hero.jpg', alt: 'Bats roosting on brick' },
    trust: TRUST_STD,
    inspect: {
      imgs: [['bat-inspect-1.jpg', 'Bat inspection']],
      kicker: 'Professional Inspection', h2: 'Your Comprehensive Bat Inspection',
      p: 'We provide a complete inspection to find out exactly where bats are getting in and solve your bat problem permanently with humane one-way valve exclusion.',
      items: ['Full attic, crawlspace & wall inspection', 'Bat entry-point identification', 'Guano & damage assessment', 'Detailed property assessment'],
      cta: 'Call for FREE Inspection',
    },
    signs: {
      h2: 'Signs You Have a Bat Problem', p: "If you notice any of these, don't wait — bats never leave on their own.",
      items: [['volume', 'Scratching, squeaking, or chirping in walls or attic at night'], ['circle', 'Guano (bat droppings) in the attic, on walls, or floors'], ['droplet', 'Stains and grease marks near roosting areas'], ['moon', 'Bats flying in and out of your home at night']],
    },
    solution: {
      h2: 'Our Complete Bat Removal Solution',
      steps: [
        ['01', 'One-Way Valve Removal', 'We install one-way exclusion valves over every active entry point. Bats exit on their own at night to feed — but the valve prevents them from re-entering. No trapping, no handling, completely humane.'],
        ['02', 'Exclusion (Seal-Up)', 'Once all bats have exited through the valves, we remove the devices and permanently seal every entry point with bat-proof materials — so they can never return.'],
        ['03', 'Clean-Up & Restoration', 'Guano removal, antimicrobial treatment, contaminated insulation replacement, and full sanitizing of affected areas.'],
      ],
    },
    why: {
      h2: "Why a Bat Problem Can't Wait",
      items: [['Health risk', 'Bat guano and urine contaminate insulation and air, and can cause histoplasmosis.'], ['Strong odor', 'Guano, urine, and oils produce a strong, musty odor that spreads through the home.'], ['Colonies grow fast', 'A few bats can become a large colony roosting in your attic within months.']],
    },
    reviews: REVIEWS_STD,
    urgency: null, // live bat page has no urgency band
    contact: { p: 'Professional bat removal is only a phone call away.', label: 'Call Us 24/7', areas: AREAS, img: 'bat-contact.jpg', alt: 'Bats roosting in attic' },
  },

  {
    slug: 'squirrel',
    host: 'squirrel.prowildliferemoval.net',
    title: 'Same-Day Emergency Squirrel Removal | Pro Wildlife Removal',
    description: 'Same-day emergency squirrel removal in Tampa Bay & West Central Florida. Licensed & insured. Free inspection, permanent seal-up & clean-up. Call (727) 855-6766.',
    tel: 'tel:+17278556766',
    topbar: 'Serving Tampa Bay & West Central Florida — Same-Day Squirrel Removal',
    headerLabel: '24/7 Emergency Squirrel Removal',
    hero: { badge: 'Fully Licensed & Insured', h1: ['Same-Day Emergency', 'Squirrel Removal'], sub: 'Free inspection. Professional, permanent squirrel removal — humane one-way door exclusion.', img: 'squirrel-hero.jpg', alt: 'Squirrel in hand' },
    trust: TRUST_STD,
    inspect: {
      imgs: [['squirrel-inspect-1.jpg', 'Squirrel exclusion'], ['squirrel-inspect-2.jpg', 'Squirrel inspection']],
      kicker: 'Professional Inspection', h2: 'Your Comprehensive Squirrel Inspection',
      p: 'We provide a complete inspection to find out exactly where squirrels are getting in and solve your squirrel problem permanently with humane one-way door exclusion.',
      items: ['Full attic, crawlspace & wall inspection', 'Squirrel entry-point identification', 'Droppings & damage assessment', 'Detailed property assessment'],
      cta: 'Call for FREE Inspection',
    },
    signs: {
      h2: 'Signs You Have a Squirrel Problem', p: "If you notice any of these, don't wait — squirrels never leave on their own.",
      items: [['volume', 'Scratching in walls or ceilings during the day'], ['circle', 'Droppings in the attic, chimney, or garage'], ['zap', 'Gnaw marks on wood, wiring & insulation'], ['layers', 'Nests made of twigs and leaves in the attic']],
    },
    solution: {
      h2: 'Our Complete Squirrel Removal Solution',
      steps: [
        ['01', 'One-Way Door Removal', 'We install one-way exclusion doors over every active entry point. Squirrels exit on their own to forage — but the door prevents them from getting back in. No trapping, no stress to the animal, completely humane.'],
        ['02', 'Exclusion (Seal-Up)', 'Once all squirrels have exited through the one-way doors, we remove the devices and permanently seal every entry point with rodent-proof materials — so another squirrel never moves in.'],
        ['03', 'Clean-Up & Restoration', 'Droppings removal, antimicrobial treatment, contaminated insulation replacement, and full sanitizing of affected areas.'],
      ],
    },
    why: {
      h2: "Why a Squirrel Problem Can't Wait",
      items: [['Fire hazard', 'Squirrels gnaw electrical wiring inside walls and attics.'], ['Health risk', 'Droppings and urine contaminate insulation and air.'], ['They multiply fast', 'Squirrels breed twice a year — a small problem becomes a big one quickly.']],
    },
    reviews: REVIEWS_STD,
    urgency: { h2: "Squirrel Damage Gets Worse Every Day It's Ignored", p: 'Book your free inspection today.', cta: `Call ${PHONE} Now` },
    contact: { p: 'Professional squirrel removal is only a phone call away.', label: 'Call Us 24/7', areas: AREAS, img: 'squirrel-contact.jpg', alt: 'Squirrel on roof' },
  },

  {
    slug: 'raccoon',
    host: 'raccoon.prowildliferemoval.net',
    title: 'Raccoon Removal Tampa FL | Pro Wildlife Removal | (727) 855-6766',
    description: 'Suspect a raccoon in your attic? Pro Wildlife Removal assesses raccoon activity, attic entry points, and removal options for your property. Call (727) 855-6766.',
    tel: 'tel:+17278556766',
    topbar: 'Serving Tampa Bay & West Central Florida — Raccoon Removal',
    headerLabel: 'Raccoon Removal Service',
    hero: { badge: 'Pro Wildlife Removal', h1: ['Raccoon in Your Attic?', 'Call Pro Wildlife Removal'], sub: 'Get help with raccoon activity, attic entry points, and removal options for your property.', note: 'Call to confirm service availability in your area.', img: 'raccoon-hero.jpg', alt: 'Raccoon safely secured in a humane trap on a residential property walkway' },
    trust: [
      { icon: 'pin', t: 'Local Raccoon Removal', s: 'Tampa Bay Area' },
      { icon: 'phone', t: 'Call to Schedule', s: 'Confirm Availability' },
      { icon: 'search', t: 'Inspection First', s: 'Identify the Animal' },
    ],
    inspect: {
      imgs: [['raccoon-inspect-1.jpg', 'Close-up of raccoon safely secured in humane trap'], ['raccoon-inspect-2.jpg', 'Two raccoons safely contained in a humane trap during removal']],
      kicker: 'Property Assessment', h2: 'Assessing Raccoon Activity in Your Attic',
      p: "We take a close look at your attic and property to assess raccoon activity, identify possible entry points, and review any visible damage. Sounds alone don't confirm raccoons, so an inspection helps determine the animal involved and the options for your property.",
      items: ['Assessment of attic activity and signs of raccoon presence', 'Review of possible entry points around the roof and structure', 'Inspection of visible damage near vents, soffits, and openings', 'Check for dependent young before any sealing is considered'],
      cta: 'Call to Schedule an Inspection',
    },
    signs: {
      h2: 'Signs You May Have a Raccoon', p: "These signs can point to raccoon activity, but an inspection helps confirm the animal — since sounds alone don't confirm raccoons.",
      items: [['volume', 'Heavy movement or thumping in the attic at night'], ['layers', 'Disturbed, matted, or displaced insulation'], ['home', 'Visible damage near roof vents, soffits, or openings'], ['alert', 'Torn screens, chewed fascia, or pulled-back vents']],
    },
    solution: {
      h2: 'Raccoon Removal & Exclusion Options', p: 'Removal and exclusion are assessed as options for your property based on what the inspection finds.',
      steps: [
        ['01', 'Assessment', "We assess the attic for raccoon activity, identify possible entry points, and review visible damage to understand what's happening on the property."],
        ['02', 'Removal Options', 'Removal is approached based on the animal and situation found. We check for dependent young before any removal or sealing is planned.'],
        ['03', 'Exclusion Options', 'Sealing entry points is considered only after animals and any dependent young are confirmed out, helping reduce the chance of re-entry.'],
      ],
    },
    why: {
      h2: 'Why an Inspection Matters', p: 'Sounds in the attic can come from several animals. An inspection helps identify the animal and the right next steps.',
      icons: ['volume', 'heart', 'home'],
      items: [["Sounds aren't conclusive", 'Raccoons, squirrels, rats, and opossums can all make noise in an attic. An inspection helps identify the actual animal.'], ['Check for dependent young', "Before sealing any entry points, it's important to confirm no dependent young are left inside the structure."], ['Entry points vary', 'Roof vents, soffits, and gaps near the roofline are common access points. An inspection locates the specific openings.']],
    },
    faq: {
      h2: 'Raccoon Removal FAQs', p: 'Common questions about suspected raccoons and how removal is assessed.',
      items: [
        ["How do I know if it's a raccoon in my attic?", "Sounds alone don't confirm raccoons — squirrels, rats, and opossums can make similar noise. An on-site inspection helps identify the animal responsible based on entry points, tracks, droppings, and the type of damage present."],
        ['How is raccoon removal assessed?', 'We assess the attic for activity, locate possible entry points, and review visible damage. Removal and exclusion are then recommended as options for the property based on what we find during the inspection.'],
        ['What does raccoon removal cost?', 'Cost depends on the inspection findings and the scope of the work involved. After the assessment, we can walk you through the options and any associated pricing before anything is done.'],
        ['How do you prevent raccoons from coming back?', 'Exclusion focuses on sealing entry points — but only after confirming the animals and any dependent young are out. Sealing too early can trap young inside, so checking for babies is an important step before any repairs are made.'],
      ],
    },
    reviews: null, // live raccoon page has no reviews block
    urgency: { h2: 'Think You Have a Raccoon in Your Attic?', p: 'Call to schedule an inspection and review your options.', cta: `Call ${PHONE} Now` },
    contact: { p: 'Local raccoon removal is only a phone call away. Call to confirm service availability in your area.', label: 'Call Us', areas: 'Call to confirm whether raccoon removal service is available in your area.', img: 'raccoon-contact.jpg', alt: 'Humane raccoon removal assessment in West Central Florida' },
  },

  {
    slug: 'wildlife',
    host: 'wildlife.prowildliferemoval.net',
    variant: 'light',
    title: 'Wildlife Removal Central Florida | Free Inspection | Pro Wildlife Removal',
    description: 'Raccoons, rats, squirrels, bats & more — removed fast, sealed out for good. Get your free inspection today.',
    tel: 'tel:+17278556766',
    topbar: 'Serving Pasco, Pinellas, Hernando, Hillsborough, Citrus, and Sumter counties',
    headerLabel: 'Free Inspection',
    hero: { badge: 'Fully Licensed & Insured', h1: ['Same-Day Emergency', 'Wildlife Removal'], sub: 'Fast removal. Sealed for good.', chips: [['clock', 'Same Day Service'], ['check', 'Free Inspection']], img: 'wildlife-hero.jpg', alt: 'Pro Wildlife Removal Trucks' },
    trust: [
      { icon: 'star', t: '4.7 Google Rating', stars: true },
      { icon: 'shield', t: 'Licensed & Insured', s: 'Florida Certified' },
      { icon: 'clock', t: 'Same Day Service', s: 'Fast Response' },
      { icon: 'award', t: 'Guaranteed Results', s: 'Complete Solution' },
    ],
    inspect: {
      imgs: [['wildlife-inspect.jpg', 'Technician Inspecting Attic']],
      kicker: 'Starting Free', h2: 'Your Comprehensive Inspection — 100% Free',
      p: "With our free inspection, we provide a complete and thorough evaluation of your property to find out exactly what's in your home.",
      items: ['Full property & attic inspection', 'Animal & entry point ID', 'Damage assessment', 'Clear plan of action'],
      cta: 'Get My FREE Inspection',
    },
    animals: { h2: ['We Remove Every Kind of', 'Florida Wildlife'], list: ['Raccoon', 'Squirrel', 'Snake', 'Bat', 'Armadillo', 'Opossum', 'Rat'] },
    solution: {
      h2: 'Our Complete Solution', iconCards: true,
      steps: [
        ['search', 'Trapping & Removal', 'Safe, humane, and thorough removal of all nuisance wildlife from your property.'],
        ['lock', 'Exclusion (Seal-Up)', 'We seal every entry point so once they are out, they stay out for good.'],
        ['sparkles', 'Clean-Up & Restoration', 'Antimicrobial treatment, attic restoration, and full sanitizing.'],
      ],
    },
    reviews: [
      REVIEWS_STD[0],
      { q: 'Very professional service. They removed a family of raccoons from under our deck humanely. The service was exactly as promised and completely stress-free.', n: 'Melissa R.' },
      { q: 'I called them for a snake in my garage and they arrived within an hour. Fast, efficient, and the service was excellent. Great local company.', n: 'Michael S.' },
      { q: 'Excellent experience from start to finish. They did a full inspection, found where the squirrels were getting in, and fixed it permanently. The cleanup was thorough too.', n: 'Amanda T.' },
      { q: 'Trustworthy and reliable. They stand by their work and their dependable service is a huge plus compared to other companies.', n: 'Robert B.' },
    ],
    urgency: { h2: "Wildlife Damage Gets Worse Every Day It's Ignored", p: 'Book your free inspection today.', cta: 'Get My FREE Inspection' },
    contact: { p: 'Professional wildlife removal is only a phone call away.', label: 'Call Us 24/7', areasHeading: 'Service Areas:', areas: 'Serving Pasco, Pinellas, Hernando, Hillsborough, Citrus, and Sumter counties', img: 'wildlife-contact.jpg', alt: 'Friendly Technician' },
  },
];

export const site = {
  phone: PHONE,
  gtm: 'GTM-K458279',
  address: '1324 Seven Springs Blvd., Suite 178, Trinity, FL 34655',
  whyEmoji: WHY_EMOJI,
};
