import React from "react";
import { Badge } from "./components/ui/badge";
import ShineBorder from "./components/ui/shine-border";

const educationData = [
  {
    qualification: "Bachelor Of Technology in Computer Engineering",
    university: "CHARUSAT",
    CGPA: 8.2,
    Journey: "2022 - 2025",
    Acheivment: "Upcoming..",
  },
  {
    qualification: "Diploma in Computer Engineering",
    university: "GTU",
    CGPA: 9.36,
    Journey: "2018 - 2022",
    Acheivment: "I got certified for achieving 7th rank in my college 🌟",
  },
  {
    qualification: "SSC - class 10",
    university: "MODI SCHOOL",
    CGPA: "87%",
    Journey: 2018,
    Acheivment: "I got awarded for my grades in class 10 🌟",
  },
];

const Education = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-12">
        {educationData.map((qualification, index) => (
          <div
            className="mb-16 hover:scale-95 transition-all duration-300"
            key={index}
          >
            <p className="font-heading text-lg sm:text-xl border-b-2">
              Qualification:{" "}
              <span className="font-sans text-md">
                {qualification.qualification}
              </span>
            </p>
            <p className="font-heading text-lg sm:text-xl py-2">
              University:{" "}
              <span className="font-sans text-md">
                {qualification.university}
              </span>
            </p>
            <Badge className="font-sans py-2 mt-2 font-extrabold dark:text-blue-500 underline">
              CGPA / Percentage: {qualification.CGPA}
            </Badge>
            <Badge className="font-sans py-2 mt-2 ml-3 font-bold">
              Journey: {qualification.Journey}
            </Badge>
            <ShineBorder
              className="mt-3 p-3 sm:p-5 h-auto"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              borderWidth={2}
            >
              <p className="font-heading text-sm sm:text-md md:text-lg">
                Achievements: {qualification.Acheivment}
              </p>
            </ShineBorder>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
