import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "cplusplus",
  "php",
  "mysql",
  "mongodb",
  "firebase",
  "laravel",
  "codeigniter",
  "jquery",
  "nodedotjs",
  "express",
  "react",
  "css3",
  "tailwindcss",
  "bootstrap",
  "git",
  "github",
  "postman",
  "javascript",
];

export default function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
