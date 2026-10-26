/* Generated from the live site by the migration scripts, then edited by hand where noted. Edit content in /cms; this is the built-in fallback and the seed source. */
import { images } from "./images.ts";
import type { PageContent } from "../types";
import { home } from "./content/home.ts";
import { withPageExtras } from "./content/page-extras.ts";

const migratedPages = {
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/home.ts
 "home": home,
 "services": {
  "design": "refresh",
  "hero": {
   "eyebrow": "Protect Your Property Today!",
   "heading": "Expert Wildlife Removal Services in Central Florida",
   "image": images.prowildliferemovalBannerImage,
   "ctas": [
    {
     "label": "(727) 594-7705",
     "href": "tel:+17275947705",
     "style": "outline"
    }
   ],
   "style": {
    "bg": "white",
    "image": images.prowildliferemovalBannerImage,
    "heading": "white",
    "align": "center"
   }
  },
  "sections": [
   {
    "_type": "splitSection",
    "eyebrow": "Florida's Wildlife Experts",
    "heading": "Central Florida's Trusted Wildlife Removal Experts",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Wildlife intrusions can cause significant property damage and health risks. At Pro Wildlife Removal, we provide trusted Wildlife Removal in Central Florida, offering safe, expert solutions for homes and businesses. With our deep knowledge of Central Florida’s unique wildlife and expert removal techniques, we tailor our services to meet your specific needs. Don’t let nuisance wildlife disrupt your life—Pro Wildlife Removal is here to help.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "h3",
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Call For Your Free Estimate",
        "marks": []
       }
      ]
     }
    ],
    "image": images.ratRemovalImage2,
    "ctas": [
     {
      "label": "(727) 594-7705",
      "href": "tel:+17275947705",
      "style": "outline"
     }
    ],
    "imageSide": "left",
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate"
    },
    "_key": "s0"
   },
   {
    "_type": "splitSection",
    "eyebrow": "Our Story",
    "heading": "Your Neighbor and Wildlife Expert in Tampa FL",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Pro Wildlife Removal was born out of a passion for helping our community feel safe and secure from Tampa wildlife problems. With decades of experience and deep roots in Tampa, we’ve made it our mission to protect homes and businesses from the challenges of nuisance wildlife. We’re not just a wildlife removal company—we’re active members of the Tampa community, participating in local events and supporting conservation efforts to ensure harmony between people and wildlife.. Our work is driven by three core values: Integrity, Reliability, and Compassion.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "h3",
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Call For Your Free Estimate",
        "marks": []
       }
      ]
     }
    ],
    "image": images.prowildremovalTeamImage,
    "ctas": [
     {
      "label": "(727) 594-7705",
      "href": "tel:+17275947705",
      "style": "outline"
     }
    ],
    "imageSide": "right",
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate"
    },
    "_key": "s1"
   },
   {
    "_type": "proseSection",
    "eyebrow": "Our Services",
    "heading": "Comprehensive Wildlife Solutions",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "As the top experts in Tampa wildlife removal, we offer a full range of services to address the unique challenges of wildlife intrusions in Central Florida. Whether it’s your home or business, we provide personalized solutions to protect your property and restore your peace of mind.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "navy",
     "heading": "white",
     "text": "white",
     "align": "center"
    },
    "_key": "s2"
   },
   {
    "_type": "servicesSection",
    "heading": "Explore Our Wildlife Removal Services",
    "_key": "s3"
   },
   {
    "_type": "cardsSection",
    "eyebrow": "Our Expertise",
    "heading": "Central Florida Wildlife We Specialize In",
    "intro": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Our Florida wildlife experts specialize in professionally and efficiently handling a wide variety of wildlife intrusions. Each animal brings unique challenges, and our team is equipped with the expertise and tools to resolve any issue. Whether it’s raccoons in your attic, snakes in your yard, or bats in your office, we’re here to restore safety and peace of mind. Here’s a closer look at the wildlife we manage:",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "variant": "photo",
    "columns": 3,
    "cards": [
     {
      "title": "Squirrels",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Squirrels can cause significant damage by chewing through wires, insulation, and wood. We safely remove them from attics and other spaces, sealing entry points to prevent their return.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.squirrelsImage,
      "href": "/services/squirrel-removal/"
     },
     {
      "title": "Rats",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Rats and rodents are unwanted pests that pose serious health risks and can quickly infest a property. Our Tampa-based ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "rat removal and control",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": " team uses advanced exclusion methods to eliminate infestations and protect your home or business. Trust our experts to provide long-term solutions to rodent problems in Central Florida.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/services/rat-removal/"
         }
        ]
       }
      ],
      "image": images.ratsImage,
      "href": "/services/rat-removal/"
     },
     {
      "title": "Armadillos",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Known for digging up yards and gardens, armadillos can wreak havoc on your landscaping. We trap them under Florida's rules and seal the entry points they use under structures.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.armadilosImage,
      "href": "/services/armadillo-removal/"
     },
     {
      "title": "Raccoons",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Raccoons are notorious for breaking into attics and causing messes. Our team safely removes these clever creatures and helps secure your property against future invasions.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.raccoonsImage,
      "href": "/services/raccoon-removal/"
     },
     {
      "title": "Opossums",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "These nocturnal animals often seek shelter under porches or in crawl spaces. We specialize in removing opossums and ensuring your property is secure from further intrusion.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.opossumsImage,
      "href": "/services/opossum-removal/"
     },
     {
      "title": "Bees",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Bee infestations can be dangerous if left unaddressed. Our experts handle bee removal carefully, ensuring safety for you and preservation for the pollinators when possible.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.beesImage,
      "href": "/services/bee-removal/"
     },
     {
      "title": "Bats",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Bats often roost in attics and pose health risks due to guano buildup. We remove them safely and provide exclusion services to prevent reentry.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.batsImage,
      "href": "/services/bat-removal/"
     },
     {
      "title": "Snakes",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Whether venomous or non-venomous, snakes can be alarming and finding one on your property calls for a snake removal professional. Our team is trained to identify and safely remove snakes from your property, offering peace of mind.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.snakesImage,
      "href": "/services/snake-removal/"
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate",
     "link": "white",
     "align": "center"
    },
    "_key": "s4"
   },
   {
    "_type": "cardsSection",
    "eyebrow": "How We Work",
    "heading": "Our Professional Wildlife Removal Process",
    "variant": "plain",
    "columns": 3,
    "cards": [
     {
      "title": "In-Depth Property Inspection",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We thoroughly inspect your property to identify signs of activity, entry points, and the extent of the infestation. This allows us to create a customized removal plan.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Targeted Trapping & Safe Removal",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Using bait stations, snap traps, and live traps, we implement targeted trapping methods without relying on harmful chemicals.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Exclusion & Sealing of Entry Points",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We seal off all potential access points using durable materials like heavy-gauge steel mesh and weather-resistant sealants to prevent re-entry and future infestations.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Inspection Findings",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We show you where droppings, urine stains and damaged insulation are, so you know what the animals left behind.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Follow-Up Visits & Preventive Recommendations",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We conduct follow-up inspections to confirm complete eradication and provide guidance on preventing future issues.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "align": "center"
    },
    "_key": "s5"
   },
   {
    "_type": "cardsSection",
    "eyebrow": "Areas We Serve",
    "heading": "Our Central Florida Service Areas",
    "intro": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Pro Wildlife Removal proudly serves residential and commercial customers in a wide range of locations across Central Florida, ensuring that private and commercial properties remain free from nuisance wildlife. Our service areas include:",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "variant": "plain",
    "columns": 3,
    "cards": [
     {
      "title": "Pinellas County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Including ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "St. Petersburg",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Clearwater",
          "marks": [
           "l1"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Pinellas Park",
          "marks": [
           "l2"
          ]
         },
         {
          "_type": "span",
          "text": ", and Largo.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/pinellas-county/st-petersburg/"
         },
         {
          "_type": "link",
          "_key": "l1",
          "href": "https://www.google.com/url?q=https://prowildliferemoval.net/service-areas/pinellas-county/clearwater/"
         },
         {
          "_type": "link",
          "_key": "l2",
          "href": "/service-areas/pinellas-county/pinellas-park/"
         }
        ]
       }
      ],
      "href": "/service-areas/pinellas-county/"
     },
     {
      "title": "Hernando County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Including ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Spring Hill",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Brooksville",
          "marks": [
           "l1"
          ]
         },
         {
          "_type": "span",
          "text": ", and Weeki Wachee.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/hernando-county/spring-hill/"
         },
         {
          "_type": "link",
          "_key": "l1",
          "href": "/service-areas/hernando-county/brooksville/"
         }
        ]
       }
      ],
      "href": "/service-areas/hernando-county/"
     },
     {
      "title": "Polk County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Including Lakeland, Winter Haven, and Bartow.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "href": "/service-areas/polk-county/"
     },
     {
      "title": "Pasco County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Serving ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "New Port Richey",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Dade City",
          "marks": [
           "l1"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Land O’Lakes",
          "marks": [
           "l2"
          ]
         },
         {
          "_type": "span",
          "text": ", and Wesley Chapel.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/pasco-county/new-port-richey/"
         },
         {
          "_type": "link",
          "_key": "l1",
          "href": "/service-areas/pasco-county/dade-city/"
         },
         {
          "_type": "link",
          "_key": "l2",
          "href": "/service-areas/pasco-county/land-o-lakes/"
         }
        ]
       }
      ],
      "href": "/service-areas/pasco-county/"
     },
     {
      "title": "Citrus County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Serving Crystal River, Inverness, and Homosassa.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "href": "/service-areas/citrus-county/"
     },
     {
      "title": "Hillsborough County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Covering ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Tampa",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", Brandon, Riverview, and Plant City.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/hillsborough-county/tampa/"
         }
        ]
       }
      ],
      "href": "/service-areas/hillsborough-county/"
     },
     {
      "title": "Sumter County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Covering ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "The Villages",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", Wildwood, and Bushnell.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/the-villages/"
         }
        ]
       }
      ],
      "href": "/service-areas/the-villages/"
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate",
     "align": "center"
    },
    "_key": "s6"
   },
   {
    "_type": "splitSection",
    "heading": "Contact Us",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [
       {
        "_type": "link",
        "_key": "l0",
        "href": "tel:7275947705"
       }
      ],
      "children": [
       {
        "_type": "span",
        "text": "Phone Number: (727) 594-7705",
        "marks": [
         "l0"
        ]
       }
      ]
     }
    ],
    "image": images.tampaBayMap2,
    "ctas": [
     {
      "label": "(727) 594-7705",
      "href": "tel:+17275947705",
      "style": "outline"
     }
    ],
    "imageSide": "right",
    "style": {
     "bg": "ice",
     "heading": "charcoal"
    },
    "_key": "s7"
   },
   {
    "_type": "cardsSection",
    "eyebrow": "Effective Solutions",
    "heading": "Why Choose Pro Wildlife Removal?",
    "intro": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "When it comes to protecting your property from wildlife intrusions, you need a team you can trust. Choose Pro Wildlife Removal for experienced, local wildlife control in Central Florida. With decades of experience, local knowledge, and a customer-first approach, we deliver humane, effective solutions tailored to your needs:",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "variant": "plain",
    "columns": 3,
    "cards": [
     {
      "title": "Decades of Experience",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We handle wildlife issues across Central Florida, and each plan is tailored to your home.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Local Expertise",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "As a team based in Tampa, we’re not just wildlife removal professionals. We understand the local environment and wildlife challenges better than anyone.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Florida rules, every job",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Pro Wildlife Removal follows Florida's wildlife rules on every job, from FWC's bat maternity season to its trapping and release rules.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Comprehensive Services",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "From the inspection to live trapping and exclusion, we handle each step of the wildlife removal process.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Easy Scheduling",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Wildlife issues can’t wait. Call us and we’ll find a visit time that works for you, then see the job through carefully.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Client-Centric Strategy",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Your peace of mind is our priority. We treat every property as if it were our own, with a focus on integrity, transparency, and compassion.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate",
     "align": "center"
    },
    "_key": "s8"
   },
   {
    "_type": "reviewsSection",
    "heading": "See Why Central Florida Loves Us",
    "style": {
     "bg": "ice"
    },
    "_key": "s9"
   },
   {
    "_type": "faqSection",
    "heading": "Frequently Asked Questions (FAQ)",
    "items": [
     {
      "question": "What types of wildlife do you remove?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We specialize in professional wildlife removal for raccoons, squirrels, rats, mice, bats, opossums, snakes, and more. Whether you have a wildlife infestation in your attic or animals invading your property, we offer safe wildlife removal solutions.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "Do you offer same-day wildlife removal services?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Same-day appointments are often available. If an animal is inside your living space, call us right away.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "How do I know if I have a wildlife problem?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Signs of a wildlife infestation include:",
          "marks": []
         }
        ],
        "markDefs": []
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Scratching noises in walls, ceilings, or attics",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Droppings or urine stains in or around your home",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Chewed wires, insulation, or structural damage",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Foul odors from hidden nests or dead animals",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Sightings of rodents or wildlife inside or near your property",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "If you notice any of these signs, it’s time to schedule wildlife removal before the problem worsens.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "Do you provide exclusion services to prevent future infestations?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Yes! Our wildlife exclusion services help keep animals out of your home. We seal entry points, reinforce weak spots, and provide long-term rodent control and wildlife prevention solutions.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "Is your wildlife removal service safe for pets and children?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Absolutely. We use safe wildlife removal methods that do not involve harmful poisons or toxic chemicals. Our approach is eco-friendly and pet-friendly, ensuring the safety of your family while effectively removing unwanted animals.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "What areas do you serve?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We provide wildlife control services in Central Florida, covering residential and commercial properties. If you need raccoon removal, rodent control, or bat exclusion, contact us to confirm service availability in your location.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "How much does wildlife removal cost?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "The cost of professional wildlife removal services depends on factors such as:",
          "marks": []
         }
        ],
        "markDefs": []
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "The type of animal causing the issue",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "The severity of the wildlife infestation",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "How much exclusion work is needed",
          "marks": []
         }
        ],
        "markDefs": [],
        "listItem": "bullet",
        "level": 1
       },
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We offer free wildlife removal estimates to provide a transparent price based on your situation.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "Do you offer attic cleanup?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "[PLACEHOLDER: ask the client: do you do attic cleanup after removal (droppings, insulation, sanitizing)?]",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "align": "center"
    },
    "_key": "s10"
   },
   {
    "_type": "ctaSection",
    "heading": "Get Your Free Wildlife Removal Quote",
    "text": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Don’t wait for nuisance animal problems to escalate—Pro Wildlife Removal is your trusted partner for wildlife removal in Central Florida. With decades of experience and local expertise, we provide reliable wildlife control solutions to protect your home or business from wild animals.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "_key": "s11"
   }
  ],
  "seo": {
   "title": "Professional Wildlife Removal Services | Pro Wildlife Removal",
   "description": "Pro Wildlife Removal provides professional and expert wildlife removal services in Central Florida. Safely remove nuisance animals from your home or business."
  }
 },
 "serviceArea": {
  "design": "refresh",
  "hero": {
   "heading": "Pro Wildlife Removal Areas We Serve",
   "image": images.prowildliferemovalBannerImage,
   "ctas": [
    {
     "label": "(727) 594-7705",
     "href": "tel:+17275947705",
     "style": "outline"
    }
   ],
   "style": {
    "bg": "white",
    "image": images.prowildliferemovalBannerImage,
    "heading": "white",
    "align": "center"
   }
  },
  "sections": [
   {
    "_type": "splitSection",
    "eyebrow": "Expert Rat Control",
    "heading": "Trusted Wildlife Control in Central Florida for Over 15 Years",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "At Pro Wildlife Removal, we specialize in providing expert and humane wildlife removal in Central Florida. With over 15 years of experience, we’ve assisted Central Florida homeowners and businesses in resolving even very challenging animal intrusions. Whether it’s raccoons invading your attic or snakes in your garden, our team offers safe, effective, and long-lasting solutions. Restore peace of mind and protect your property today—contact us for a free wildlife inspection!",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "image": images.ratRemovalImage2,
    "ctas": [
     {
      "label": "(727) 594-7705",
      "href": "tel:+17275947705",
      "style": "outline"
     }
    ],
    "imageSide": "right",
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate"
    },
    "_key": "s0"
   },
   {
    "_type": "cardsSection",
    "heading": "Pro Wildlife Removal Central Florida",
    "intro": [
     {
      "_type": "block",
      "style": "h3",
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Contact Us",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [
       {
        "_type": "link",
        "_key": "l0",
        "href": "tel:7275947705"
       }
      ],
      "children": [
       {
        "_type": "span",
        "text": "Phone Number: (727) 594-7705",
        "marks": [
         "l0"
        ]
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "At Pro Wildlife Removal, we’re proud to serve a wide range of communities across Central Florida, offering exceptional wildlife control solutions, timely and efficiently. Whether you’re dealing with raccoons, bats, snakes, or rats, our team has the expertise to handle your unique wildlife challenge.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "variant": "plain",
    "columns": 3,
    "cards": [
     {
      "title": "Pinellas County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Including ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "St. Petersburg",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Clearwater",
          "marks": [
           "l1"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Pinellas Park",
          "marks": [
           "l2"
          ]
         },
         {
          "_type": "span",
          "text": ", and Largo.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/pinellas-county/st-petersburg/"
         },
         {
          "_type": "link",
          "_key": "l1",
          "href": "https://www.google.com/url?q=https://prowildliferemoval.net/service-areas/pinellas-county/clearwater/"
         },
         {
          "_type": "link",
          "_key": "l2",
          "href": "/service-areas/pinellas-county/pinellas-park/"
         }
        ]
       }
      ],
      "href": "/service-areas/pinellas-county/pinellas-park/"
     },
     {
      "title": "Hernando County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Including ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Spring Hill",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Brooksville",
          "marks": [
           "l1"
          ]
         },
         {
          "_type": "span",
          "text": ", and Weeki Wachee.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/hernando-county/spring-hill/"
         },
         {
          "_type": "link",
          "_key": "l1",
          "href": "/service-areas/hernando-county/brooksville/"
         }
        ]
       }
      ],
      "href": "/service-areas/hernando-county/"
     },
     {
      "title": "Polk County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Including Lakeland, Winter Haven, and Bartow.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "href": "/service-areas/polk-county/"
     },
     {
      "title": "Pasco County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Serving ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "New Port Richey",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Dade City",
          "marks": [
           "l1"
          ]
         },
         {
          "_type": "span",
          "text": ", ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Land O’Lakes",
          "marks": [
           "l2"
          ]
         },
         {
          "_type": "span",
          "text": ", and Wesley Chapel.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/pasco-county/new-port-richey/"
         },
         {
          "_type": "link",
          "_key": "l1",
          "href": "/service-areas/pasco-county/dade-city/"
         },
         {
          "_type": "link",
          "_key": "l2",
          "href": "/service-areas/pasco-county/land-o-lakes/"
         }
        ]
       }
      ],
      "href": "/service-areas/pasco-county/"
     },
     {
      "title": "Citrus County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Serving Crystal River, Inverness, and Homosassa.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Hillsborough County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Covering ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "Tampa",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", Brandon, Riverview, and Plant City.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/hillsborough-county/tampa/"
         }
        ]
       }
      ],
      "href": "/service-areas/hillsborough-county/"
     },
     {
      "title": "Sumter County",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Covering ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "The Villages",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", Wildwood, and Bushnell.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/service-areas/the-villages/"
         }
        ]
       }
      ],
      "href": "/service-areas/the-villages/"
     }
    ],
    "image": images.tampaBayFlMapLarge1,
    "style": {
     "bg": "ice",
     "heading": "charcoal",
     "text": "slate",
     "align": "center",
     "headingAbove": true
    },
    "_key": "s1"
   },
   {
    "_type": "cardsSection",
    "eyebrow": "Our Services",
    "heading": "Common Wildlife Problems in Central Florida",
    "intro": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "If you live in Florida, then you know that Central Florida’s warm climate and diverse environment make it a hotspot for various wildlife intrusions. We specialize in addressing these common challenges to protect your home or business.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "variant": "photo",
    "columns": 3,
    "cards": [
     {
      "title": "Rats in Walls and Crawl Spaces",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Rats are a persistent problem in Central Florida, often nesting and reproducing in homes. These rodents can chew through wiring, contaminate food, and spread diseases. Our ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "rat removal services in Central Florida",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": " include trapping, removal, and sealing entry points to keep rats out for good.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/services/rat-removal/"
         }
        ]
       }
      ],
      "image": images.ratsImage,
      "href": "/services/raccoon-removal/"
     },
     {
      "title": "Raccoons in Attics",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Raccoons often invade attics in search of shelter and warmth. These animals can cause significant damage to insulation, wiring, and structures. Our team offers safe ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "raccoon removal",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": " and prevention services to ensure your property is secure.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/services/raccoon-removal/"
         }
        ]
       }
      ],
      "image": images.raccoonsImage,
      "href": "/services/rat-removal/"
     },
     {
      "title": "Bats Colonizing",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Bats are commonly found in Central Florida’s residential and commercial spaces, posing health risks due to guano and potential disease transmission. We provide effective ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "bat removal services",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": " and exclusion methods to keep your property bat-free.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/services/bat-removal/"
         }
        ]
       }
      ],
      "image": images.batsImage,
      "href": "/services/bat-removal/"
     },
     {
      "title": "Squirrels Chewing Wires",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Squirrels can enter homes through small gaps, often chewing wires and creating fire hazards. Our wildlife exclusion services include sealing entry points to protect against these persistent intruders. Learn about our ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "squirrel removal services",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ".",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/services/squirrel-removal/"
         }
        ]
       }
      ],
      "image": images.squirrelsImage,
      "href": "/services/squirrel-removal/"
     },
     {
      "title": "Snakes in Gardens and Yards",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Florida’s warm weather attracts various snake species, some of which can be dangerous. We specialize in ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "snake removal in Florida",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": ", with snakes safely captured and removed from the house.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/services/snake-removal/"
         }
        ]
       }
      ],
      "image": images.snakesImage,
      "href": "/services/snake-removal/"
     },
     {
      "title": "Other Wildlife Intrusions",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "From opossums under porches to armadillos digging holes in the yard, Central Florida properties face a wide range of wildlife challenges. Our comprehensive ",
          "marks": []
         },
         {
          "_type": "span",
          "text": "wildlife removal services",
          "marks": [
           "l0"
          ]
         },
         {
          "_type": "span",
          "text": " address these issues efficiently and effectively.",
          "marks": []
         }
        ],
        "markDefs": [
         {
          "_type": "link",
          "_key": "l0",
          "href": "/services/"
         }
        ]
       }
      ],
      "image": images.opossumsImage,
      "href": "/services/bee-removal/"
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate",
     "link": "white",
     "align": "center"
    },
    "_key": "s2"
   },
   {
    "_type": "cardsSection",
    "heading": "What Makes Pro Wildlife Removal Different?",
    "variant": "plain",
    "columns": 3,
    "cards": [
     {
      "title": "Done by Florida’s Rules",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "From raccoons in attics to snakes in gardens, we provide expert care while following state and local regulations. Count on us for professional, effective solutions that prioritize your safety.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Local Experts in Central Florida",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Serving Central Florida communities, including Tampa, St. Petersburg, and Clearwater, we understand the region’s unique wildlife challenges. As your local neighbors, we deliver effective solutions to protect your home and peace of mind.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Reliable Service",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Wildlife problems need attention. Same-day appointments are often available, so your home can feel safe again with as little disruption as possible.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Free Quotes and On-Site Assessments",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We value transparency and convenience. Our free quotes and detailed on-site assessments identify entry points, nesting areas, and risks. This ensures a customized plan for effective removal and long-term prevention.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Comprehensive Solutions for Wildlife Removal",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "From removal and exclusion to prevention, we handle every aspect of wildlife intrusions. Our services cover removal and sealing entry points.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate",
     "align": "center"
    },
    "_key": "s3"
   },
   {
    "_type": "cardsSection",
    "eyebrow": "How We Work",
    "heading": "Our Comprehensive Wildlife Removal Process",
    "intro": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "At Pro Wildlife Removal, we follow a proven process to ensure effective and lasting results for every wildlife issue. From the initial inspection to long-term prevention, our method is designed to provide you with peace of mind and a wildlife-free property.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "variant": "plain",
    "columns": 3,
    "cards": [
     {
      "title": "Comprehensive Inspection",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Our process begins with a detailed wildlife inspection to identify the type of wildlife, entry points, and areas of activity. This step ensures we fully understand the problem and can provide comprehensive wildlife assessments tailored to your property’s needs.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Customized Removal Plan",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Following the inspection, we develop a custom wildlife removal plan designed to address your specific situation. Our technicians use safe removal methods that follow state and local wildlife rules, so the work is done properly.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "title": "Removal, Exclusion, & Cleanup",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We specialize in Tampa wildlife removal and wildlife exclusion services, which involve removing nuisance wildlife while securing your property to prevent re-entry. We will seal entry points and install barriers to ensure lasting protection.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate",
     "align": "center"
    },
    "_key": "s4"
   },
   {
    "_type": "reviewsSection",
    "heading": "What Our Clients Say",
    "intro": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "See why Central Florida chooses Pro Wildlife Removal for their wildlife removal needs in Central Florida.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "white"
    },
    "_key": "s5"
   },
   {
    "_type": "locationsSection",
    "heading": "All Service Areas",
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "text": "slate"
    },
    "_key": "s6"
   },
   {
    "_type": "faqSection",
    "heading": "Frequently Asked Questions (FAQ)",
    "items": [
     {
      "question": "What areas do you serve?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "We provide professional wildlife removal in Central Florida, including Tampa, St. Petersburg, Clearwater, Pinellas Park, and surrounding communities in Hillsborough, Pinellas, Pasco, Hernando, and Polk counties. Contact us to confirm service in your specific area.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "How quickly can you remove wildlife from my property?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Urgent problems, like an animal loose in the house, get priority on our schedule.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "What types of wildlife do you remove?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Our wildlife technicians handle a wide variety of animals, including raccoons, bats, snakes, squirrels, rats, and more. We also provide wildlife exclusion services to prevent future infestations.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "How do I know if I have wildlife in my home?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Common signs of wildlife include scratching noises in walls or ceilings, droppings, unpleasant odors, chewed wires, or visible damage to entry points. Schedule a wildlife inspection in Central Florida with our team to confirm and address the issue.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "Are your methods safe for my family and pets?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Yes, all our wildlife removal methods are safe and adhere to local regulations. Our focus is on protecting your property and loved ones while effectively resolving wildlife issues.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     },
     {
      "question": "Do you offer follow-up services to prevent future issues?",
      "answer": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Absolutely. Our services include wildlife follow-up services and exclusion techniques, such as sealing entry points, to ensure your property remains wildlife-free in the long term.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ]
     }
    ],
    "style": {
     "bg": "white",
     "heading": "charcoal",
     "align": "center"
    },
    "_key": "s7"
   },
   {
    "_type": "ctaSection",
    "heading": "Schedule Your Wildlife Inspection in Central Florida Today",
    "text": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Don’t let wildlife take over your property—Pro Wildlife Removal is here to help. We provide reliable, professional wildlife removal in Central Florida, ensuring your home or business stays safe and secure. Contact us today to schedule your inspection and take the first step toward a wildlife-free property!",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "_key": "s8"
   }
  ],
  "seo": {
   "title": "Service Areas in Central Florida | Pro Wildlife Removal",
   "description": "Pro Wildlife Removal provides professional wildlife removal services across Central Florida. Find expert animal removal services near you. Call us today!"
  }
 },
 "about": {
  "design": "classic",
  "hero": {
   "heading": "About Pro Wildlife Removal",
   "text": [
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "We are an experienced team of experts, specialists, and professionals with in-depth knowledge in the field of ",
       "marks": []
      },
      {
       "_type": "span",
       "text": "wildlife management",
       "marks": [
        "l0"
       ]
      },
      {
       "_type": "span",
       "text": ". With extensive experience in dealing with all types of nuisance species in Florida, Pro Wildlife can help with whatever animal issue you run into. Our technicians bring specialized equipment for inspection, trapping and exclusion. From raccoons, opossums, squirrels, and snakes to honeybees and bats, we have the ",
       "marks": []
      },
      {
       "_type": "span",
       "text": "wildlife removal services",
       "marks": [
        "l1"
       ]
      },
      {
       "_type": "span",
       "text": " you need to get the job done right.",
       "marks": []
      }
     ],
     "markDefs": [
      {
       "_type": "link",
       "_key": "l0",
       "href": "/how-we-work/"
      },
      {
       "_type": "link",
       "_key": "l1",
       "href": "/services/"
      }
     ]
    }
   ],
   "image": images.joshHoldingRaccon,
   "ctas": [
    {
     "label": "727-594-7705",
     "href": "tel:+17275947705",
     "style": "outline"
    }
   ],
   "style": {
    "bg": "beige",
    "heading": "grey",
    "text": "grey",
    "link": "red",
    "divider": "navy",
    "frame": "navy",
    "headingAbove": true
   }
  },
  "sections": [
   {
    "_type": "splitSection",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Pro Wildlife Removal",
        "marks": [
         "l0"
        ]
       },
       {
        "_type": "span",
        "text": " manages wildlife in an efficient and responsible way. We are proud to offer many specialized services and features to our clientele:",
        "marks": []
       }
      ],
      "markDefs": [
       {
        "_type": "link",
        "_key": "l0",
        "href": "/"
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "In-depth expertise in wildlife management, removal, and damage control.",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Professional equipment and knowledge of modern industry-related techniques",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Entry points sealed after removal",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Simple booking by phone",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Wildlife Management practices that are respectful of wildlife and continue the promotion of live trapping",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Dedicated team that is passionate about animals and helping people live side by side with wildlife",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "We serve with a smile on our faces",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "If you live in one of the ",
        "marks": []
       },
       {
        "_type": "span",
        "text": "eight Central Florida counties we serve",
        "marks": [
         "l0"
        ]
       },
       {
        "_type": "span",
        "text": ", we can help with wildlife problems. We cover these areas:",
        "marks": []
       }
      ],
      "markDefs": [
       {
        "_type": "link",
        "_key": "l0",
        "href": "/service-areas/"
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Trinity",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Odessa",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Land o Lakes",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "New Port Richey",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Dunedin",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Dade City",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Safety Harbor",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Clearwater",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Palm Harbor",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Spring Hill",
        "marks": []
       }
      ]
     },
     {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "level": 1,
      "markDefs": [],
      "children": [
       {
        "_type": "span",
        "text": "Hudson",
        "marks": []
       }
      ]
     }
    ],
    "image": images.ourInspectionProcess,
    "imageSide": "left",
    "style": {
     "bg": "blue",
     "text": "beige",
     "link": "white",
     "frame": "white"
    },
    "_key": "s0"
   },
   {
    "_type": "reviewsSection",
    "heading": "Testimonies That Prove Our Excellence",
    "style": {
     "bg": "beige",
     "heading": "navy",
     "divider": "blue",
     "align": "center"
    },
    "_key": "s1"
   },
   {
    "_type": "ctaSection",
    "heading": "Pest Problem? Leave It To Us.",
    "text": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Whatever wildlife-related problem you might have, you should leave it in our hands. ",
        "marks": []
       },
       {
        "_type": "span",
        "text": "Contact us",
        "marks": [
         "strong",
         "l0"
        ]
       },
       {
        "_type": "span",
        "text": " or give us a quick call at ",
        "marks": []
       },
       {
        "_type": "span",
        "text": "727-594-7705 ",
        "marks": [
         "strong",
         "l1"
        ]
       },
       {
        "_type": "span",
        "text": "and we’ll do everything we can to help you.",
        "marks": []
       }
      ],
      "markDefs": [
       {
        "_type": "link",
        "_key": "l0",
        "href": "/contact-us/"
       },
       {
        "_type": "link",
        "_key": "l1",
        "href": "tel:7275947705"
       }
      ]
     }
    ],
    "_key": "s2"
   }
  ],
  "seo": {
   "title": "Wildlife Removal Company Profile | Pro Wildlife Removal",
   "description": "Pro Wildlife Removal is a local wildlife removal service in Tampa FL. We provide animal removal: opossums, squirrels, snakes and etc. Call us when an animal problem can’t wait."
  }
 },
 "howWeWork": {
  "design": "classic",
  "hero": {
   "heading": "Pro Wildlife Removal Service Process",
   "text": [
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "Pro Wildlife Removal brings the right tools for inspection, trapping and exclusion. Our technicians do this work every day. Call us to talk it through.",
       "marks": []
      }
     ],
     "markDefs": []
    },
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "Pro Wildlife Removal Services is only a phone call away.",
       "marks": []
      }
     ],
     "markDefs": []
    }
   ],
   "image": images.proWildlifeRemovalServiceProcess,
   "ctas": [
    {
     "label": "727-594-7705",
     "href": "tel:+17275947705",
     "style": "outline"
    }
   ],
   "style": {
    "bg": "beige",
    "heading": "grey",
    "text": "grey",
    "divider": "navy",
    "frame": "navy",
    "headingAbove": true
   }
  },
  "sections": [
   {
    "_type": "proseSection",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "From your first call, we make an initial assessment from your description to prepare the necessary equipment and assign the right people for the job.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "That first conversation helps us plan the visit.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Same-day appointments are often available. If not, we’ll book the next open visit that suits you.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Our step-by-step process for all our services keeps the work clear and consistent for all of your inspection, trapping, exclusion, clean-up, monthly population control, and decontamination needs.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "grey",
     "text": "grey",
     "divider": "navy",
     "frame": "navy",
     "headingAbove": true
    },
    "_key": "s0"
   },
   {
    "_type": "splitSection",
    "heading": "Pro Wildlife Removal Inspection Process",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "A thorough inspection and situation assessment is a critical part of dealing with any animal issue safely and efficiently. One of our technicians will come out at the scheduled time in a labeled truck, dressed in a professional uniform, and begin inspecting your property.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "This includes the interior, exterior, the yard, the attic, any detached structures, etc. to ensure that nothing is missed. Once our evaluation of the situation is complete, we will devise a plan of action and begin resolving the issue.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "image": images.joshHoldingRaccon,
    "imageSide": "left",
    "style": {
     "bg": "blue",
     "heading": "beige",
     "text": "beige",
     "divider": "navy",
     "frame": "white",
     "headingAbove": true
    },
    "_key": "s1"
   },
   {
    "_type": "cardsSection",
    "heading": "Pro Wildlife Removal Services",
    "variant": "photo",
    "columns": 2,
    "cards": [
     {
      "title": "Attic and Crawlspace Inspection",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Animals living in an attic or crawlspace leave signs: droppings and urine, gnawed wiring and HVAC lines, flattened insulation. Our inspection looks for those signs, the damage and every entry point, and we show you what we find before any work starts.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.atticRestoration2
     },
     {
      "title": "Pro Wildlife Removal Honeycomb Removal",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Honeycomb removal may seem like a very frightening and dangerous task, and it is if you don’t get the help that you need. Failure to remove a honeycomb correctly can result in significant infestation of other hungry insects looking for a free meal. Untended honeycomb will also rot and decay, causing odor and moisture damage. Our honeycomb removal service takes out the comb as well as the bees, so it doesn't rot inside the wall.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.honeycombRemoval
     },
     {
      "title": "Pro Wildlife Removal Exclusion",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Our homes can be victims to unwanted animal visitors, and no one wants to be pestered with these creatures for they can also serve as a threat to the you and your family’s safety and welfare. Pro Wildlife Removal Exclusion Service closes the openings these animals use to get in, using heavy-duty materials.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.exclusion
     },
     {
      "title": "Pro Wildlife Removal Population Control",
      "text": [
       {
        "_type": "block",
        "style": "normal",
        "children": [
         {
          "_type": "span",
          "text": "Monthly population control services can be an effective way to prevent future re-infestation of your home or commercial property. Pro Wildlife Removal offers population management programs for virtually every species of animal found in Florida. Inquire today to find out if this is the right option for you.",
          "marks": []
         }
        ],
        "markDefs": []
       }
      ],
      "image": images.homeRepairs
     }
    ],
    "style": {
     "bg": "navy",
     "heading": "beige",
     "text": "beige",
     "divider": "blue",
     "headingAbove": true
    },
    "_key": "s2"
   },
   {
    "_type": "proseSection",
    "heading": "Other Related Services",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Each animal case is unique to itself and a customized solution catered to you is the only effective way to resolve it. We offer many services including: exclusion, bee removal, all trapping services, urgent animal removal, etc. Call today with all of your animal service needs.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "navy",
     "text": "grey",
     "link": "white",
     "divider": "blue"
    },
    "_key": "s3"
   },
   {
    "_type": "reviewsSection",
    "heading": "Another Happy Customer",
    "style": {
     "bg": "blue",
     "heading": "beige",
     "divider": "navy",
     "align": "center"
    },
    "_key": "s4"
   },
   {
    "_type": "ctaSection",
    "heading": "Pest Problem? Leave It To Us.",
    "text": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Whatever wildlife-related problem you might have, you should leave it in our hands. Give us a quick call at ",
        "marks": []
       },
       {
        "_type": "span",
        "text": " (727-594-7705",
        "marks": [
         "strong",
         "l0"
        ]
       },
       {
        "_type": "span",
        "text": ") and we’ll do everything we can to help you.",
        "marks": []
       }
      ],
      "markDefs": [
       {
        "_type": "link",
        "_key": "l0",
        "href": "tel:727-594-7705"
       }
      ]
     }
    ],
    "_key": "s5"
   }
  ],
  "seo": {
   "title": "How We Work | Why Hire Our Experts | Pro Wildlife Removal",
   "description": "Pro Wildlife Removal brings the right tools for inspection, trapping and exclusion. Our technicians do this work every day. Call us to talk it through."
  }
 },
 "contact": {
  "design": "classic",
  "hero": {
   "heading": "Contact Pro Wildlife Removal",
   "text": [
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "When you get a critter intrusion, you can call us to help resolve it!",
       "marks": []
      }
     ],
     "markDefs": []
    },
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "Contact us at ",
       "marks": []
      },
      {
       "_type": "span",
       "text": "(727) 594-7705",
       "marks": [
        "strong"
       ]
      }
     ],
     "markDefs": []
    }
   ],
   "image": images.needHelpReachOutToUs,
   "ctas": [
    {
     "label": "727-594-7705",
     "href": "tel:+17275947705",
     "style": "outline"
    }
   ],
   "style": {
    "bg": "beige",
    "heading": "grey",
    "text": "grey",
    "link": "white",
    "divider": "navy",
    "frame": "navy",
    "headingAbove": true
   }
  },
  "sections": [
   {
    "_type": "contactSection",
    "style": {
     "bg": "beige",
     "heading": "navy",
     "text": "grey",
     "divider": "blue"
    },
    "_key": "s1"
   },
   {
    "_type": "reviewsSection",
    "heading": "Customer Reviews",
    "style": {
     "bg": "navy",
     "heading": "beige",
     "align": "center"
    },
    "_key": "s2"
   }
  ],
  "seo": {
   "title": "Contact Us | Wildlife Removal Support | Pro Wildlife Removal",
   "description": "Contact Pro Wildlife Removal for wildlife control services across Central Florida. Call (727) 594-7705 or email us for safe, professional animal removal."
  }
 },
 "privacy": {
  "design": "classic",
  "hero": {
   "heading": "Welcome to our Privacy Policy",
   "style": {
    "bg": "beige",
    "heading": "slate",
    "text": "grey",
    "link": "white",
    "divider": "navy"
   }
  },
  "sections": [
   {
    "_type": "proseSection",
    "heading": "Your privacy is critically important to us.",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Pro Wildlife Removal serves Central Florida of Florida. You can reach us at:",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "727-594-7705",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "It is Pro Wildlife Removal’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to https://prowildliferemoval.net/ (hereinafter, “us”, “we”, or “https://prowildliferemoval.net/”). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "This Privacy Policy, together with the ",
        "marks": []
       },
       {
        "_type": "span",
        "text": "Terms and conditions",
        "marks": [
         "l0"
        ]
       },
       {
        "_type": "span",
        "text": " posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.",
        "marks": []
       }
      ],
      "markDefs": [
       {
        "_type": "link",
        "_key": "l0",
        "href": "/terms-of-service/"
       }
      ]
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "slate",
     "text": "grey",
     "link": "white",
     "divider": "navy"
    },
    "_key": "s0"
   },
   {
    "_type": "proseSection",
    "heading": "Website Visitors",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Like most website operators, Pro Wildlife Removal collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Pro Wildlife Removal’s purpose in collecting non-personally identifying information is to better understand how Pro Wildlife Removal’s visitors use its website.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "From time to time, Pro Wildlife Removal may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. Pro Wildlife Removal also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://prowildliferemoval.net/ blog posts. Pro Wildlife Removal only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "slate",
     "text": "grey",
     "link": "white",
     "divider": "navy"
    },
    "_key": "s1"
   },
   {
    "_type": "proseSection",
    "heading": "Gathering of Personally-Identifying Information",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Certain visitors to Pro Wildlife Removal’s websites choose to interact with Pro Wildlife Removal in ways that require Pro Wildlife Removal to gather personally-identifying information. The amount and type of information that Pro Wildlife Removal gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://prowildliferemoval.net/ to provide a username and email address.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "slate",
     "text": "grey",
     "link": "white",
     "divider": "navy"
    },
    "_key": "s2"
   },
   {
    "_type": "proseSection",
    "heading": "Security",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "slate",
     "text": "grey",
     "link": "white",
     "divider": "navy"
    },
    "_key": "s3"
   },
   {
    "_type": "proseSection",
    "heading": "Links To External Sites",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "slate",
     "text": "grey",
     "link": "white",
     "divider": "navy"
    },
    "_key": "s4"
   },
   {
    "_type": "proseSection",
    "heading": "Cookies",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "To enrich and perfect your online experience, Pro Wildlife Removal uses “Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.\nA cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Pro Wildlife Removal uses cookies to help Pro Wildlife Removal identify and track visitors, their usage of https://prowildliferemoval.net/, and their website access preferences. Pro Wildlife Removal visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Pro Wildlife Removal’s websites, with the drawback that certain features of Pro Wildlife Removal’s websites may not function properly without the aid of cookies.\nBy continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Pro Wildlife Removal’s use of cookies.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "beige",
     "heading": "slate",
     "text": "grey",
     "link": "white",
     "divider": "navy"
    },
    "_key": "s5"
   }
  ],
  "seo": {
   "title": "Privacy Policy | Pro Wildlife Removal",
   "description": "Learn about Pro Wildlife Removal's privacy policy and how we protect your data during wildlife control services across Florida. Call our wildlife removal experts!"
  }
 },
 "terms": {
  "design": "classic",
  "hero": {
   "heading": "Pro Wildlife Removal: Terms of Service",
   "text": [
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the https://prowildliferemoval.net/ website (the “Service”) operated by Pro Wildlife Removal (“us”, “we”, or “our”).",
       "marks": []
      }
     ],
     "markDefs": []
    },
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.",
       "marks": []
      }
     ],
     "markDefs": []
    },
    {
     "_type": "block",
     "style": "normal",
     "children": [
      {
       "_type": "span",
       "text": "By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.",
       "marks": []
      }
     ],
     "markDefs": []
    }
   ],
   "style": {
    "bg": "navy",
    "heading": "beige",
    "text": "beige",
    "divider": "blue"
   }
  },
  "sections": [
   {
    "_type": "proseSection",
    "heading": "Links To Other Web Sites",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Our Service may contain links to third-party web sites or services that are not owned or controlled by Pro Wildlife Removal.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Pro Wildlife Removal has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Pro Wildlife Removal shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "navy",
     "heading": "beige",
     "text": "beige",
     "divider": "blue"
    },
    "_key": "s0"
   },
   {
    "_type": "proseSection",
    "heading": "Governing Law",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "These Terms shall be governed and construed in accordance with the laws of Florida, United States, without regard to its conflict of law provisions.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "navy",
     "heading": "beige",
     "text": "beige",
     "divider": "blue"
    },
    "_key": "s1"
   },
   {
    "_type": "proseSection",
    "heading": "Changes",
    "body": [
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
        "marks": []
       }
      ],
      "markDefs": []
     },
     {
      "_type": "block",
      "style": "normal",
      "children": [
       {
        "_type": "span",
        "text": "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.",
        "marks": []
       }
      ],
      "markDefs": []
     }
    ],
    "style": {
     "bg": "navy",
     "heading": "beige",
     "text": "beige",
     "divider": "blue"
    },
    "_key": "s2"
   }
  ],
  "seo": {
   "title": "Terms of Service | Pro Wildlife Removal",
   "description": "Pro Wildlife Removal terms of services for site users. We reserve the right to preserve any information we provide our users. Call our support for questions!"
  }
 },
 "sitemap": {
  "design": "classic",
  "hero": {
   "heading": "Sitemap"
  },
  "sections": [],
  "seo": {
   "title": "Sitemap for Pro Wildlife Removal | Pro Wildlife Removal",
   "description": "Explore Pro Wildlife Removal's sitemap to easily navigate our website and find the wildlife removal services you need in Central Florida."
  }
 },
 "blog": {
  "design": "classic",
  "hero": {
   "heading": "Our Blog"
  },
  "sections": [],
  "seo": {
   "title": "Blog | Wildlife Removal Insights | Pro Wildlife Removal",
   "description": "Stay updated with the latest wildlife removal tips and advice. Read Pro Wildlife Removal's blog for expert insights on animal removal and control."
  }
 }
} satisfies Record<string, PageContent>;

export const fallbackPages = Object.fromEntries(
  Object.entries(migratedPages).map(([k, v]) => [k, withPageExtras(k, v)]),
) as typeof migratedPages;

export type PageKey = keyof typeof fallbackPages;
