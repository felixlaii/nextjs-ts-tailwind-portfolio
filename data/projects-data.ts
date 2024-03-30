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
  videoCarousel?: string[];
  index: number;
}[] = [
  {
    id: "richmond-west-dental",
    index: 1,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174707/logo_qh1koz.svg",
    name: "Richmond West Dental",
    description:
      "Downtown Toronto dental office. Their staff are so nice and professional, and they are there to listen and help with whatever oral questions you have, book for your next appointment!",
    longDescription:
      "A dental office located Downtown Toronto. The application was built completely from scratch with Nextjs, TypeScript and TailwindCSS and deployed on DigitalOcean. The application features 3 forms, and information is sent via email and creates a PDF with appropriate information. Emails are handled through 3rd party SendGrid. There are animation effects to wow any online client! ",
    category: "professional",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg",
    ],
    githubUrl: "https://github.com/felixlaii/richmond-dental-nextjs",
    deployedUrl: "https://richmondwestdental.com",
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702160916/Screenshot_2023-12-09_at_5.27.08_PM_vluz4h.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702160915/Screenshot_2023-12-09_at_5.27.20_PM_bohl41.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702160916/Screenshot_2023-12-09_at_5.27.29_PM_bpy7k7.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702160917/Screenshot_2023-12-09_at_5.27.37_PM_twgcfx.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702160916/Screenshot_2023-12-09_at_5.27.44_PM_bjapxg.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702160915/Screenshot_2023-12-09_at_5.28.03_PM_cbeguq.png",
    ],
    videoCarousel: [
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711145519/Screen_Recording_2024-03-22_at_6.11.04_PM_bqn7zc.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711666503/Screen_Recording_2024-03-28_at_6.50.38_PM_lcnp10.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711145519/Screen_Recording_2024-03-22_at_6.11.04_PM_bqn7zc.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711666502/Screen_Recording_2024-03-28_at_6.53.28_PM_jmjkhh.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711666528/Screen_Recording_2024-03-28_at_6.55.00_PM_wz1ut3.mov",
    ],
  },
  {
    id: "mix6ix",
    index: 2,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365211/pink_purple_zkqi27.png",
    name: "MIX6IX Bartending Co",
    description:
      "Bartending service for private events. If you want to elevate your event, these bartenders are professional and can definitely create an unbelievable experience for your guests!",
    category: "professional",
    technology: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698363684/squarespace_logo_icon_181252_o3zs5v.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    deployedUrl: "https://mix6ixtoronto.com",
    longDescription:
      "MIX6IX Bartending & Co was established in 2017. Their team is composed of enthusiastic, dynamic, and skilled hospitality experts who are dedicated to crafting unforgettable cocktail experiences for their patrons. bartending company based in the Greater Toronto Area, and is committed to providing personalized and exceptional service. They have always hosted their website on SquareSpace but wanted a more elevated online presence. I injected custom JavaScript, HTML5 and CSS3 to update their website and the client was more than happy with the outcome!",
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161302/Screenshot_2023-12-09_at_5.34.16_PM_eye2nb.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161303/Screenshot_2023-12-09_at_5.34.24_PM_apk2gs.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161303/Screenshot_2023-12-09_at_5.34.32_PM_w0btuk.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161303/Screenshot_2023-12-09_at_5.34.41_PM_hsslku.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161303/Screenshot_2023-12-09_at_5.34.50_PM_b26noe.png",
    ],
    videoCarousel: [
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711678360/Screen_Recording_2024-03-28_at_10.11.13_PM_pkirqv.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711678450/Screen_Recording_2024-03-28_at_10.12.36_PM_neu8l8.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711678592/Screen_Recording_2024-03-28_at_10.15.28_PM_lbp2uu.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711678605/Screen_Recording_2024-03-28_at_10.14.49_PM_htzyz5.mov",
    ],
  },
  {
    id: "solace",
    index: 3,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1708738446/solace-ink-logo_psepx0.png",
    name: "Solace Ink Tattoo",
    description:
      "Tattoo Shop with contact form and an online payment system. Book with your favourite artist and/or explore their Instagram!",
    category: "professional",
    technology: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698363684/squarespace_logo_icon_181252_o3zs5v.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    deployedUrl: "https://www.solaceinktattoo.com/",
    longDescription:
      "Solace Ink Tattoo has exceptional tattoo artists that creates various different styles of tattoos. They bring your vision to life and transforms your body into a work of art! They wanted to create an online presence for their clients to view and book their artists and wanted a minimal vibe. This website is also hosted on SquareSpace but I definitely injected custom code (JavaScript, HTML5 and CSS3) to elevate their website.",
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1708738565/Screenshot_2024-02-23_at_8.35.00_PM_jsmq14.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1708738565/Screenshot_2024-02-23_at_8.35.12_PM_l6xva0.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1708738565/Screenshot_2024-02-23_at_8.35.21_PM_ixrklm.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1708738566/Screenshot_2024-02-23_at_8.35.40_PM_hapafi.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1708738638/Screenshot_2024-02-23_at_8.37.14_PM_vc5gez.png",
    ],
    videoCarousel: [
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836065/Screen_Recording_2024-03-30_at_5.58.28_PM_km8dpy.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836079/Screen_Recording_2024-03-30_at_6.00.08_PM_drqbgs.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836027/Screen_Recording_2024-03-30_at_5.59.18_PM_atlju0.mov",
    ],
  },
  {
    id: "blushnletters",
    index: 4,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1700947081/Screenshot_2023-11-25_at_4.17.29_PM_z9qhlk.png",
    name: "Blush & Letters Co",
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
    longDescription:
      "Their goal is to help add the fine details to your life events and memories through custom calligraphy and design. | Based in Toronto, Canada. Available worldwide. The client wanted to give their website a small revamp and I simply injected code into their existing application to elevate the experience!",
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161414/Screenshot_2023-12-09_at_5.36.12_PM_kiydck.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161413/Screenshot_2023-12-09_at_5.36.26_PM_wgjpzj.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161413/Screenshot_2023-12-09_at_5.36.19_PM_zehoqr.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161414/Screenshot_2023-12-09_at_5.36.32_PM_gxhi8y.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1702161413/Screenshot_2023-12-09_at_5.36.37_PM_gi9mxz.png",
    ],
    videoCarousel: [
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836278/Screen_Recording_2024-03-30_at_6.03.17_PM_qrebpr.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836293/Screen_Recording_2024-03-30_at_6.03.46_PM_szjccm.mov",
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836423/Screen_Recording_2024-03-30_at_6.06.14_PM_c5i7ek.mov",
    ],
  },
  {
    id: "st-patrick",
    index: 5,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174855/stpatrick-logo_bd3mth.png",
    name: "St Patrick S.S",
    description: "Secondary School based in Vancouver. Currently in progress!",
    category: "professional",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    ],
    longDescription:
      "When the client reached out to me and expressed concern over their website that hasn't been updated for 20 years, we got to work immediately thinking of ways to refresh and attract potential parents. This website is still under progress and cannot wait for the final results! Stay tuned!",
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820513/Screenshot_2023-12-05_at_6.54.37_PM_acgqzs.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.46_PM_wyhlok.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701820512/Screenshot_2023-12-05_at_6.54.53_PM_sj3vu1.png",
    ],
  },
  {
    id: "ChatGPT",
    index: 6,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1710642871/Screenshot_2024-03-16_at_10.32.52_PM_mjzbf8.png",
    name: "ChatGPT Clone",
    description:
      "This is a simple chat application built with Next.js and integrated with the OpenAI API for generating responses. It allows users to interact with an AI assistant and view the conversation history.",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1710642500/openai_jituka.svg",
    ],
    githubUrl: "https://github.com/felixlaii/nextjs-openai",
    longDescription:
      "I decided to take a stab at AI by creating a ChatBot (ChatGPT clone) by using the OpenAI API. It was definitely a challenge and I have learned a lot in the process. My API documentation reading skills needed to be dusted off and I finally was able to get responses from the API and I was over the moon. After watching many YouTube videos and googling answers, I couldn't be more proud of the outcome!",
    videoCarousel: [
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1710642802/Screen_Recording_2024-03-16_at_10.07.15_PM_v6rdwe.mov",
    ],
  },
  {
    id: "pawfinder",
    index: 7,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174362/pawfinder-static_pvnjkw.png",
    name: "PawFinder",
    description:
      "An application that compiles all adoption agency information into one convenient location. Ability to sign up and save adoption preferences such as breed and age.",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    ],
    githubUrl: "https://github.com/felixlaii/pawfinder",
    longDescription:
      "An application that retrieves information from Pet Finder API. I've always wanted to adopt a dog but I found the process to be very lengthy and tedious with so many adoption agencies. This application compiles adoption agency information into one convenient location. You have the ability to sign up and save adoption preferences such as breed and age. User Information is saved using MySQL and JWT for user authentication. This was my final project at BrainStation. This application has a front-end (React) and a back-end (NodeJs) that communicates back and forth to ensure client user information is stored securely and to retrieve accurate information based on your pet preferences.",
  },
  {
    id: "instock",
    index: 8,
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
    longDescription:
      "This was a group project at BrainStation, working with 4 other software engineers. It manages stock and updates stock availability in realtime. This was a huge learning experience as fellow engineers have their own way of coding, and this helped us all learn how to communicate with each other. This application also has a front-end (React) and a back-end (Nodejs).",
  },
  {
    id: "weather-app",
    index: 9,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698531550/weather-static_mjvjn6.png",
    name: "Weather App",
    description:
      "A Weather search application. All Data pulled from Open Weather API. It has information on all cities and countries around the world!",
    category: "school",
    technology: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    githubUrl: "https://github.com/felixlaii/nextjs-weather",
    deployedUrl: "https://nextjs-weather-sandy.vercel.app/",
    longDescription:
      "A weather search application where information is retrieved from Open Weather API. It breaks down weekly forecast with expandable sections with more detailed information. This has weather information for all cities and countries around the world!",
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827917/Screenshot_2023-12-05_at_8.58.03_PM_viu9vu.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827917/Screenshot_2023-12-05_at_8.58.15_PM_des1ty.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827917/Screenshot_2023-12-05_at_8.58.21_PM_q5awdd.png",
    ],
  },
  {
    id: "pokemon-search",
    index: 10,
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698532305/pokemon-static_agigqy.png",
    name: "Pokemon Search",
    description:
      "Search through the list of pokemon and get their images, attacks and stats. Search up to 1000 different Pokemon!",
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
    longDescription:
      "Are you feeling nostalgic? A Pokemon search application where information is retrieved from Poke API. It provides detailed information about selected Pokemon, it provides the normal version and shiny version of the Pokemon. This application was created with React and uses MaterialUI for the components and it was definitely a great experience learning this package!",
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827996/Screenshot_2023-12-05_at_8.59.34_PM_wdzbyx.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827996/Screenshot_2023-12-05_at_8.59.45_PM_tjr6qn.png",
    ],
  },
];
