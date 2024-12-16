import React from "react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { Github, Globe } from "lucide-react";

const projectsData = [
  {
    title: "Job Portal",
    status: "Under development",
    description:
      "This is one stop solution for both recruiter as well as candidate to find the best job and best candidate respectively.",
    techstack:
      "React.js, Express.js, MongoDB, Tailwind CSS, Shadcn, JWT, Bcrypt, Axios, React-Router-Dom, React-Toastify",
    image: "jobportal.png",
  },
  {
    title: "Short Me",
    status: "Completed",
    description:
      "Developed a smart and user-friendly custom Chrome extension to streamline the process of URL shortening.",
    techstack: "HTML, Bootstrap, Javascript, MongoDB, Express.js",
    image: "shortme.png",
    github: "https://github.com/AvadhKanaiya/shortme",
    live: "https://shortme-documentation.vercel.app/",
  },
  {
    title: "Coinadge Picker",
    status: "Completed",
    description:
      "A basic multiplayer coin picker game where you can play with your friends and family. You can change your name and also you can change the color of your character",
    techstack: "HTML, CSS, Javascript, Firebase",
    image: "coinadgepicker.png",
    github: "https://github.com/AvadhKanaiya/Multiplayer-Coin-Picker",
    live: "https://coinagepicker.netlify.app/",
  },
  {
    title: "Git Details",
    status: "Completed",
    description:
      "Developed a user friendly platform to get the details of any github user. You can get the details of any user by just entering the name or initials of the user.",
    techstack: "React.js, Tailwind CSS, Shadcn, Firebase, GitHub API",
    image: "gitdetails.png",
    github: "https://github.com/AvadhKanaiya/GitDetails",
    live: "https://gitdetails.vercel.app/",
  },
  {
    title: "Socio Holic",
    status: "Completed",
    description:
      "Developed social media website where you can post, like and comment on the posts. You can also follow and unfollow the users.",
    techstack:
      "React.js, React-Router, Tailwind CSS, Material UI, MongoDB, Express.js",
    image: "socioholic.png",
    github: "https://github.com/AvadhKanaiya/social_media_app",
  },
  {
    title: "Hotel Booking System",
    status: "Completed",
    description:
      "Developed an online hotel room booking system where admin can manage the rooms and users can book the rooms.",
    techstack: "HTML, CSS, Bootstrap, Javascript, PHP, MySQL",
    image: "hotelbookingsystem.png",
    github: "https://github.com/AvadhKanaiya/Online_Hotel_Booking_System",
  },
];

function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 mb-10">
      <h2 className="text-3xl font-bold text-center mt-10 mb-12 font-heading">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techstack.split(",").map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-primary/5">
                      {tech.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 gap-4">
              {project.github && (
                <Button variant="outline" className="flex-1" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.live && (
                <Button className="flex-1" asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
