export const ProjectsData: {
  image: string;
  name: string;
  url: string;
  description: string;
  category: "school" | "professional"
}[] = [
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174362/pawfinder-static_pvnjkw.png",
    name: "pawfinder",
    url: "https://github.com/felixlaii/pawfinder",
    description:
      "An application that compiles all adoption agency information into one convenient location. Login and save your pet preferences. Adopt and save a pet today! Ability to sign up and save adoption preferences such as breed and age.",
      category: "school"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174707/logo_qh1koz.svg",
    name: "richmond west dental",
    url: "https://richmondwestdental.com",
    description: "Downtown Toronto dental office. Application deployed on Digital Ocean and built with Nextjs, TypeScript and TailwindCSS.",
    category: "professional"
  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698182572/MIX6IX2022_fb6fpb.png",
    name: "mix6ix bartending & co",
    url: "https://mix6ixtoronto.com",
    description: "Bartending service for private events. Custom code injections through Square Space.",
    category: "professional"

  },
  {
    image:
      "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174855/stpatrick-logo_bd3mth.png",
    name: "St Patrick Secondary School",
    url: "",
    description: "Secondary School based in Vancouver.",
    category: "professional"

  },
];
