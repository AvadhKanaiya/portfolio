import React from "react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
const projectsData = [
  {
    title: "Job Portal",
    status: "Under development",
    description:
      "This is one stop solution for both recruiter as well as candidate to find the best job and best candidate respectively.",
    techstack:
      "React.js, Express.js, MongoDB, Tailwind CSS, Shadcn, JWT, Bcrypt, Axios, React-Router-Dom, React-Toastify",
    // github: "#",
    // live: "#",
  },
  {
    title: "Short Me",
    status: "Completed",
    description:
      "Developed a smart and user-friendly custom Chrome extension to streamline the process of URL shortening.",
    techstack: "HTML, Bootstrap, Javascript, MongoDB, Express.js ",
    github: "https://github.com/AvadhKanaiya/shortme",
    live: "https://shortme-documentation.vercel.app/",
  },
  {
    title: "Coinadge Picker",
    status: "Completed",
    description:
      "A basic multiplayer coin picker game where you can play with your friends and family. You can change your name and also you can change the color of your character",
    techstack: "HTML, CSS, Javascript, Firebase",
    github: "https://github.com/AvadhKanaiya/Multiplayer-Coin-Picker",
    live: "https://coinagepicker.netlify.app/",
  },
  {
    title: "Face Link",
    status: "Completed",
    description:
      "Developed a basic video calling website leveraging WebRTC for real-time communication, enabling high-quality audio and video calls directly in the browser",
    techstack: "React.js, Express.js, WebRTC, WebScoket",
    github: "https://github.com/AvadhKanaiya/FaceLink",
    // live: "#",
  },
  {
    title: "Git Details",
    status: "Completed",
    description:
      "Developed a user friendly platform to get the details of any github user. You can get the details of any user by just entering the name or initials of the user.",
    techstack: "React.js, Tailwind CSS, Shadcn, Firebase, GitHub API",
    github: "https://github.com/AvadhKanaiya/GitDetails",
    live: "https://gitdetails.vercel.app/",
  },
];
const Projects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-12">
        {projectsData.map((project, index) => (
          <div className="mb-14 p-5 border rounded-md" key={index}>
            <div className="flex gap-x-5">
              <p className="font-heading font-bold text-lg sm:text-xl underline">
                Title: {project.title}
              </p>
              <Badge>Status: {project.status}</Badge>
            </div>
            <p className="font-heading mt-3">
              <span className="underline font-bold"> Description:</span>{" "}
              <span className="font-heading">{project.description}</span>
            </p>
            <p className="font-heading mt-3">
              <span className="underline font-bold"> Tech Stack:</span>{" "}
              <span className="font-heading">{project.techstack}</span>
            </p>
            <div className="mt-3 gap-x-2 flex">
              {project.github ? (
                <Button>
                  <a href={project.github} target="_blank">
                    GITHUB
                  </a>
                </Button>
              ) : (
                <Button variant="link" disabled>
                  Upcoming GITHUB..
                </Button>
              )}
              {project.live ? (
                <Button>
                  <a href={project.live} target="_blank">
                    Live
                  </a>
                </Button>
              ) : (
                <Button variant="link" disabled>
                  Upcoming Live..
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
