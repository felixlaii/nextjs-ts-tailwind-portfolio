export const ProjectsData: {
  image: string;
  name: string;
  url: string;
  description: string;
  category: "school" | "professional";
  technology: string[];
  href: string;
}[] = [
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174707/logo_qh1koz.svg",
    name: "Richmond West Dental",
    url: "https://github.com/felixlaii/richmond-dental-nextjs",
    description:
      "Downtown Toronto dental office. Application deployed on Digital Ocean and built with Nextjs, TypeScript and TailwindCSS.",
    category: "professional",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg",
    ],
    href: "/richmond-west-dental"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365211/pink_purple_zkqi27.png",
    name: "MIX6IX Bartending & Co",
    url: "https://mix6ixtoronto.com",
    description:
      "Bartending service for private events. Custom code injections through Square Space.",
    category: "professional",
    technology: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698363684/squarespace_logo_icon_181252_o3zs5v.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    href: "/mix6ix"
  },

  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362504/Screenshot_2023-10-26_at_7.21.40_PM_kewmlp.png",
    name: "Blush & Letters Co",
    url: "https://blushnletters.com/",
    description:
      "Modern Calligraphy and design. A website done through Square Space with custom code injections to bring client's vision to life.",
    category: "professional",
    technology: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698363684/squarespace_logo_icon_181252_o3zs5v.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    href: "/blushnletters"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174855/stpatrick-logo_bd3mth.png",
    name: "St Patrick S.S",
    url: "",
    description: "Secondary School based in Vancouver.",
    category: "professional",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    ],
    href: "/st-patrick"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174362/pawfinder-static_pvnjkw.png",
    name: "PawFinder",
    url: "https://github.com/felixlaii/pawfinder",
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
    href: "/pawfinder"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362163/InStock-Logo_ewqhfc.svg",
    name: "inStock",
    url: "https://github.com/felixlaii/instock",
    description:
      "A stock inventory management website. A hackathon hosted by BrainStation. 5 Software Engineers working together to deliver final product.",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    ],
    href:"/instock"
  },
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
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698531550/weather-static_mjvjn6.png",
    name: "Weather App",
    url: "https://github.com/felixlaii/weather-app.github.io",
    description: "Weather application with search. Data pulled from API.",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    ],
    href: "/weather-app"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698532305/pokemon-static_agigqy.png",
    name: "Pokemon Search",
    url: "https://github.com/felixlaii/pokemon-search-app.github.io",
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
    href:"/pokemon-search"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698532351/connect-four-static_xiozcc.png",
    name: "Connect Four",
    url: "https://github.com/felixlaii/connect-four.github.io",
    description:
      "Play connect four with a friend when you need a quick break! A great way to re-energize with a strategy game. ",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    ],
    href:"/connect-four"
  },
];
