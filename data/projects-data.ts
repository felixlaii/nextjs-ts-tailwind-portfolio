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
  carousel?: string | string[];
  videoCarousel?: string | string[];
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
    longDescription: `
      The application was built completely from scratch with Next.js, TypeScript, and TailwindCSS and deployed on DigitalOcean.\n
      The client wanted a complete redesign and overhaul of their website, and me and another fellow engineer were happy to complete this task!
      The application features 3 forms, and information is sent via email and creates a PDF with appropriate information.
      All forms have conditional formatting, including a drawn signature pad (patient and parent), and parent signature only appears if the patient is under 18 years old!
      Emails are handled through 3rd party SendGrid.
      The entire project took around 3 months to complete, but it was so satisfying when the client finally saw the final website.\n
      In addition, this was my first time using Next.js, TypeScript, and Tailwind CSS; it was a challenge, and I wanted to apply what I have learned to this application, and I am pleased with the results and the technology I have learned on the way.`,
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
    longDescription: `MIX6IX Bartending & Co was established in 2017. In 2020, the founder, Sharon, reached out to me seeking a rebrand of their website. Eager to collaborate and bring their vision to life, I gladly accepted the opportunity. Despite their preference for the SquareSpace platform, I was determined to infuse their site with a fresh, contemporary feel. \n

      To achieve the desired cool and dark aesthetic, I embarked on a creative brainstorming process. Implementing custom JavaScript, CSS3, and HTML code, I enhanced various aspects of their website. Leveraging JavaScript, I crafted interactive elements to engage visitors and improve user experience. Through meticulous CSS3 styling, I curated a visually striking design that perfectly encapsulated MIX6IX's brand identity. Additionally, I optimized the HTML structure to ensure seamless functionality and accessibility.
      
      The result was a revamped website that not only met Sharon's expectations but exceeded them. The fusion of custom code and creative design elements elevated MIX6IX's online presence, leaving a lasting impression on visitors.`,
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
    id: "solace-ink-tattoo",
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
    longDescription: `Solace Ink Tattoo, a leading GTA tattoo shop with top-notch artists, sought to establish an online presence without the hassle of managing a complex website. Understanding their needs, we opted for SquareSpace for its user-friendly management.\n

      To enhance the site, I applied custom JavaScript, HTML, and CSS3 for dynamic features and personalized design. This included creating a seamless checkout system for their online shop.
      
      The result? A visually captivating website that reflects Solace Ink Tattoo's style while offering easy navigation and a smooth shopping experience. With their online presence sorted, Johnny can focus on delivering exceptional tattoo artistry.`,
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
    longDescription: `Blush Letters & Co, led by founder Vivian, sought to elevate their online presence with essential features like booking forms, contact forms, and a blog.

      Understanding their needs, we crafted a bespoke solution that integrated these elements seamlessly into their website. Leveraging custom JavaScript, HTML, and CSS3, we developed user-friendly forms for clients to book appointments and get in touch, while also implementing a dynamic blog section to showcase their expertise and offerings.
      
      The result? A polished website that not only reflects Blush Letters & Co's aesthetic but also empowers Vivian to engage with her audience effectively and efficiently.`,
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
    longDescription: `Embarking on a journey to revitalize their online presence, St. Patrick Secondary School in Vancouver entrusted us with their project. With a vision to modernize their website and enhance user experience, WordPress emerged as the platform of choice for its versatility and ease of use.

      Currently a work in progress, our team is diligently crafting a tailored solution to meet St. Patrick's unique needs. From intuitive navigation to dynamic content management, the WordPress framework lays the foundation for a seamless online experience.
      
      Stay tuned as we continue to transform St. Patrick Secondary School's digital footprint, ensuring it reflects their commitment to excellence and innovation in education.`,
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
    carousel:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1711836914/Screenshot_2024-03-30_at_6.15.04_PM_gaveum.png",

    videoCarousel:
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1710642802/Screen_Recording_2024-03-16_at_10.07.15_PM_v6rdwe.mov",
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
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1712101206/rest-api-icon_euhh23.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1712101145/icons8-json-web-token-48_v5f1xh.png",
    ],
    deployedUrl:
      "https://www.loom.com/share/758b305574b8414eaf8a1b09ac707a0f?sid=6f26adf1-3bff-46ce-ad6c-305caa851d6d",
    githubUrl: "https://github.com/felixlaii/pawfinder",
    longDescription: `An application I created as my CapStone for BrainStation Software Engineering bootcamp.\n 
      This website retrieves information from the PetFinder API. It compiles adoption agency information into one convenient location. You have the ability to sign up and save adoption preferences such as breed and age. \n
      User information is saved using mysql and jwt for user authentication. This application has a front-end (react) and a back-end (nodejs) that communicated back and forth to ensure client user information is stored securely and to retrieve accurate information based on your pet preferences.`,
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
    longDescription: `At BrainStation, I had the privilege of collaborating on a group project with four other talented software engineers. Together, we embarked on a mission to develop a sophisticated stock management system designed to update stock availability in real-time.

      This endeavor proved to be an invaluable learning experience as we navigated the complexities of teamwork and communication. Working alongside fellow engineers who brought diverse coding styles and perspectives to the table, we were challenged to adapt and grow in our ability to collaborate effectively.
      
      The project encompassed both front-end and back-end development, leveraging the power of React for the user interface and Node.js for the server-side logic. This multifaceted approach allowed us to build a robust and dynamic application capable of meeting the demands of modern stock management.
      
      Through this collaborative effort, we not only achieved our goal of delivering a functional stock management system but also gained invaluable insights into the importance of teamwork, communication, and adaptability in software engineering`,
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
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1712101206/rest-api-icon_euhh23.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    githubUrl: "https://github.com/felixlaii/nextjs-weather",
    deployedUrl: "https://nextjs-weather-sandy.vercel.app/",
    longDescription: `Introducing our innovative weather search application, powered by data sourced from the Open Weather API. This dynamic platform provides users with comprehensive weather forecasts, effortlessly breaking down weekly projections into easily accessible expandable sections for detailed insights.

      With coverage spanning across cities and countries worldwide, our application ensures that users can access weather information for any location with just a few clicks. Whether you're planning a trip abroad or simply staying informed about local weather conditions, our app has you covered.
      
      Stay ahead of the forecast and make informed decisions with our intuitive weather search application. Explore weather trends, anticipate changes, and plan your activities with confidence, all from the convenience of your device.`,
    carousel:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827917/Screenshot_2023-12-05_at_8.58.03_PM_viu9vu.png",

    videoCarousel:
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836508/Screen_Recording_2024-03-30_at_6.07.49_PM_coyti8.mov",
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
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1712101206/rest-api-icon_euhh23.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg",
    ],
    githubUrl: "https://github.com/felixlaii/pokemon-search-app.github.io",
    deployedUrl: "https://felixlaii.github.io/pokemon-search-app.github.io/",
    longDescription: `Embark on a nostalgic journey with our Pokémon search application, powered by data sourced from the Poke API. Delve into the world of Pokémon like never before, as our application provides comprehensive details about your favorite creatures.

      Discover everything you need to know about each Pokémon, from its basic stats to its unique abilities. With our app, you can even explore both the normal and shiny versions of each Pokémon, adding an extra layer of excitement to your search.
      
      Built with React and leveraging the power of MaterialUI for its sleek and user-friendly components, our Pokémon search application offers an immersive experience that Pokémon fans of all ages will love. Whether you're reliving your childhood memories or discovering new favorites, our app is your ultimate companion in the Pokémon universe. Catch 'em all with ease and style!`,
    carousel: [
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827996/Screenshot_2023-12-05_at_8.59.34_PM_wdzbyx.png",
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1701827996/Screenshot_2023-12-05_at_8.59.45_PM_tjr6qn.png",
    ],
    videoCarousel:
      "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1711836580/Screen_Recording_2024-03-30_at_6.08.56_PM_s3vp86.mov",
  },
];
