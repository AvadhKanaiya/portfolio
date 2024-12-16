import React from "react";
import { Card, CardHeader, CardTitle } from "./components/ui/card";
import { cn } from "./lib/utils";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

const skillsData = [
  "C++",
  "JavaScript",
  "PHP",
  "MYSQL",
  "MongoDB",
  "Firebase",
  "Laravel",
  "Codeigniter",
  "JQuery",
  "Node.js",
  "Express.js",
  "React.js",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "Github",
  "Postman",
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-12">
      <h2 className="text-3xl font-bold text-center mt-2 mb-12 font-heading">
        Skills
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skillsData.map((skill, index) => (
          <Button variant="outline" key={index}>
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
