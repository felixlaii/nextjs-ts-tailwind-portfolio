export const ProjectsData: {
  image: string;
  name: string;
  description: string;
  category: "school" | "professional";
  technology: string[];
  githubUrl?: string;
  deployedUrl?: string;
  id: string;
  longDescription: string;
  carousel?: string[];
}[] = [
  {
    id: "richmond-west-dental",
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174707/logo_qh1koz.svg",
    name: "Richmond West Dental",
    description:
      "Downtown Toronto dental office. Application deployed on Digital Ocean and built with Nextjs, TypeScript and TailwindCSS.",
    longDescription: "A dental office located Downtown Toronto. The application was built completely from scratch with Nextjs, TypeScript and TailwindCSS and deployed on DigitalOcean. The application features 3 forms, and information is sent via email and creates a PDF with appropriate information. Emails are handled through 3rd party SendGrid.",
      category: "professional",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg",
    ],
    githubUrl: "https://github.com/felixlaii/richmond-dental-nextjs",
    deployedUrl: "https://richmondwestdental.com",
    carousel: ["https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701826259/Screenshot_2023-12-05_at_8.29.34_PM_qv7fly.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701826259/Screenshot_2023-12-05_at_8.29.46_PM_cca8ik.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701826258/Screenshot_2023-12-05_at_8.29.58_PM_i0w7lk.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701826259/Screenshot_2023-12-05_at_8.30.38_PM_g94jza.png"  ]
  },
  {
    id: "mix6ix",
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365211/pink_purple_zkqi27.png",
    name: "MIX6IX Bartending Co",
    description:
      "Bartending service for private events. Custom code injections through Square Space.",
    category: "professional",
    technology: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698363684/squarespace_logo_icon_181252_o3zs5v.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    deployedUrl: "https://mix6ixtoronto.com",
    longDescription: "MIX6IX Bartending & Co was established in 2017. Their team is composed of enthusiastic, dynamic, and skilled hospitality experts who are dedicated to crafting unforgettable cocktail experiences for their patrons. bartending company based in the Greater Toronto Area, and is committed to providing personalized and exceptional service.",
    carousel: ["https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820513/Screenshot_2023-12-05_at_6.54.37_PM_acgqzs.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.46_PM_wyhlok.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.53_PM_sj3vu1.png" ]

  },

  {
    id: "blushnletters",
    image: "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1700947081/Screenshot_2023-11-25_at_4.17.29_PM_z9qhlk.png",    name: "Blush & Letters Co",
    description:
      "Modern Calligraphy and design. A website done through Square Space with custom code injections to bring client's vision to life.",
    category: "professional",
    technology: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698363684/squarespace_logo_icon_181252_o3zs5v.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    deployedUrl: "https://blushnletters.com/",
    longDescription: "Their goal is to help add the fine details to your life events and memories through custom calligraphy and design. | Based in Toronto, Canada. Available worldwide.",
    carousel: ["https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820513/Screenshot_2023-12-05_at_6.54.37_PM_acgqzs.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.46_PM_wyhlok.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.53_PM_sj3vu1.png" ]

  },
  {
    id: "st-patrick",
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174855/stpatrick-logo_bd3mth.png",
    name: "St Patrick S.S",
    description: "Secondary School based in Vancouver.",
    category: "professional",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    ],
    longDescription: "",
    carousel: ["https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820513/Screenshot_2023-12-05_at_6.54.37_PM_acgqzs.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.46_PM_wyhlok.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.53_PM_sj3vu1.png" ]

  },
  {
    id: "pawfinder",
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174362/pawfinder-static_pvnjkw.png",
    name: "PawFinder",
    description:
      "An application that compiles all adoption agency information into one convenient location. Ability to sign up and save adoption preferences such as breed and age.",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    ],
    githubUrl: "https://github.com/felixlaii/pawfinder",
    longDescription: "An application that retrieves information from Pet Finder API. It compiles adoption agency information into one convenient location. You have the ability to sign up and save adoption preferences such as breed and age. User Information is saved using MySQL and JWT for user authentication. This was my final project at BrainStation.",
    carousel: ["https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820513/Screenshot_2023-12-05_at_6.54.37_PM_acgqzs.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.46_PM_wyhlok.png", "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.53_PM_sj3vu1.png" ]
  },
  {
    id: "instock",
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362163/InStock-Logo_ewqhfc.svg",
    name: "inStock",
    description:
      "A stock inventory management website. A group project by BrainStation. 5 Software Engineers working together to deliver final product.",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    ],
    githubUrl: "https://github.com/felixlaii/instock",
    longDescription: "This was a group project at BrainStation, working with 4 other software engineers. It manages stock and updates stock availability in realtime."
  },
  {
    id: "weather-app",
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698531550/weather-static_mjvjn6.png",
    name: "Weather App",
    description: "Weather application with search. Data pulled from API.",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    ],
    githubUrl: "https://github.com/felixlaii/nextjs-weather",
    deployedUrl: "https://nextjs-weather-sandy.vercel.app/",
    longDescription: "A weather search application where information is retrieved from Open Weather API. It breaks down weekly forecast with expandable sections with more detailed information."
  },
  {
    id: "pokemon-search",
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698532305/pokemon-static_agigqy.png",
    name: "Pokemon Search",
    description:
      "Are you feeling nostalgic? Search through the list of pokemon and get their images, attacks and stats. Search up to 1000 different Pokemon. All information compiled through PokeAPI!",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg",
    ],
    githubUrl: "https://github.com/felixlaii/pokemon-search-app.github.io",
    deployedUrl: "https://felixlaii.github.io/pokemon-search-app.github.io/",
    longDescription: "A Pokemon search application where information is retrieved from Poke API. It provides detailed information about selected Pokemon, it provides the normal version and shiny version of the Pokemon."
  },
  // {
  //   id: "connect-four",
  //   image:
  //     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698532351/connect-four-static_xiozcc.png",
  //   name: "Connect Four",
  //   description:
  //     "Play connect four with a friend when you need a quick break! A great way to re-energize with a strategy game. ",
  //   category: "school",
  //   technology: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  //   ],
  //   githubUrl: "https://github.com/felixlaii/connect-four.github.io",
  //   deployedUrl: "https://felixlaii.github.io/connect-four.github.io/",
  //   longDescription: "Connect Four game created with React, and TypeScript. I created this application while I was trying to learn TypeScript, and its a great way to re-energize yourself with strategy game."
  // },
];

// export const PROJECTS_PAGE = [
//   { name: "Richmond West Dental", href: "/experience/richmond-west-dental" },
//   { name: "MIX6IX Bartending Co.", href: "/experience#mix6ix" },
//   { name: "Blush N Letters", href: "/experience#blush-n-letters" },
//   { name: "Saint Patrick Secondary School", href: "/experience#st-patrick" },
//   { name: "PawFinder", href: "/experience#pawfinder" },
//   { name: "inStock", href: "/experience#instock" },
//   { name: "Weather App", href: "/experience#weather-app" },
//   { name: "Pokemon Search", href: "/experience#pokemon-search" },
//   { name: "Connect Four", href: "/experience#connect-four" },
// ];

// {
//   image:
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362108/BrainFlix-logo_bhkddt.svg",
//   name: "BrainFlix",
//   url: "https://github.com/felixlaii/felix-lai-brainflix",
//   description: "A Youtube/Netflix Clone. Ability to upload using back-end.",
//   category: "school",
//   technology: [
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//   ],
// },
// {
//   image:
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365085/Screenshot_2023-10-26_at_8.04.40_PM_k1owj4.png",
//   name: "Bandsite",
//   url: "https://github.com/felixlaii/bandsite",
//   description:
//     "A website for Bees Knees with functioning comments with backend.",
//   category: "school",
//   technology: [
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
//   ],
// },
// {
//   image:
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365068/Screenshot_2023-10-26_at_8.04.22_PM_tcwjjy.png",
//   name: "Travelsite",
//   url: "https://github.com/felixlaii/travelsite",
//   description:
//     "A static webpage. One of the first projects ever done in BrainStation",
//   category: "school",
//   technology: [
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
//   ],
// },
// {
//   image:
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362235/pokemon-logo-black-transparent_xdmglm.png",
//   name: "Memory Game",
//   url: "https://github.com/felixlaii/pokemon-memory-game",
//   description:
//     "A memory game created during our first Hackathon with 2 other software engineers using the Pokemon API.",
//   category: "school",
//   technology: [
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698363684/squarespace_logo_icon_181252_o3zs5v.png",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//   ],
// },
