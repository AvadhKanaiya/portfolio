import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
const experienceData = [
  {
    company: "Milliard Infoworld",
    position: "Web developer intern",
    duration: "May 2023 - June 2023",
    contribution: [
      "Engineered a robust Admin Module for a Bearing company, Utilized CodeIgniter-4 (PHP framework), JavaScript, HTML, CSS,Bootstrap, MySQL, jQuery, and AJAX.",
      "Designed and implemented 3 distinct modules for different admin roles.Created Login/Signup, CMS pages, product pages,application pages, user pages, and logout functionality.",
      "Enhanced Administrative Efficiency Improved work efficiency of the administrative department.",
      "Assisted with the senior software developer of company to fulfill the whole development process and delivered end to end Admin module to the company.",
    ],
  },
];
const Experience = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <h2 className="text-3xl font-bold text-center mt-10 font-heading">
        Experience
      </h2>
      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-12">
        {experienceData.map((experience, index) => (
          <Card className="mb-12" key={index}>
            <CardHeader>
              <CardTitle className="font-heading text-xl">
                {experience.company}
              </CardTitle>
              <CardDescription className="font-sans text-md">
                {experience.position}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-heading text-md font-bold">Contribution:</p>
              <ul className="list-disc p-5">
                {experience.contribution.map((contribution, index) => (
                  <li className="font-sans mb-2" key={index}>
                    {contribution}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Badge className="font-sans text-md">
                <span className="font-heading px-2">Duration:</span>
                {experience.duration}{" "}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
