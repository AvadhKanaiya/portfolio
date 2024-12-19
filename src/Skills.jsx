import React from "react";
import IconCloud from "./components/ui/icon-cloud";

const skillsData = [
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

const Skills = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-12">
      <h2 className="text-3xl font-bold text-center mt-2 mb-12 font-heading">
        Skills
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <IconCloud iconSlugs={skillsData} maxSpee />
      </div>
    </div>
  );
};

export default Skills;
