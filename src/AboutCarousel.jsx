import * as React from "react";
import { Card, CardContent } from "./components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

const aboutData = {
  chapter1: {
    button: "Chapter - 1",
    title: "Intro",
    description:
      "Hi, I'm Avadh Kanaiya, a software engineer and a lifelong learner. My journey into technology began with curiosity and grew into a passion for web development.",
  },
  chapter2: {
    button: "Chapter - 2",
    title: "Childhood",
    description:
      "From a young age, I was always involved in co-curricular activities like debates, presentations, and team projects. These experiences helped me improve my communication skills and taught me the value of teamwork. I've always strived for perfection, and this mindset helped me perform well in my studies.",
  },
  chapter3: {
    button: "Chapter - 3",
    title: "Diploma Days",
    description:
      "After finishing school, I realized that my interest in technology was more than just a passing curiosity. So, I decided to pursue a diploma in Computer Engineering. I explored subjects like Databases, Operating Systems, and Computer Networks, and worked with web technologies like HTML, CSS, JavaScript, and PHP. One of the projects I'm most proud of is an e-commerce platform for pharmacies that I built with friends—it sparked my love for web development.",
  },
  chapter4: {
    button: "Chapter - 4",
    title: "Experience",
    description:
      "My first on-site internship gave me invaluable hands-on experience. I independently developed an admin panel for a bearing company using JavaScript, CodeIgniter, and MySQL, learning the importance of discipline and timely project delivery along the way.",
  },
  chapter5: {
    button: "Chapter - 5",
    title: "B.Tech Days",
    description:
      "Currently, I'm in the final year of my B.Tech in Computer Engineering. These years have been transformative, as I delved into the MERN stack and discovered my love for creating modular, scalable websites. Building projects with this tech stack has solidified my expertise and reinforced my passion for web development.",
  },
  chapter6: {
    button: "Chapter - 6",
    title: "Upcoming",
    description:
      "As I look forward to starting my professional journey in January 2025, I'm more excited than ever to keep learning, building, and growing. This is just the beginning of my story. Happy coding, everyone!",
  },
};

export function AboutCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="horizontal"
      className="w-full mt-12 mb-5 relative"
    >
      <CarouselContent className="-mt-1">
        {Object.values(aboutData).map((chapter, index) => (
          <CarouselItem key={index} className="pt-1 w-full">
            <div className="p-1">
              <Card className="w-full h-72 sm:h-72 md:h-64 lg:h-72 xl:h-80">
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 h-full">
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading mb-3">
                    {chapter.button}: {chapter.title}
                  </span>
                  <p className="text-sm font-sans sm:text-base md:text-lg text-center">
                    {chapter.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation buttons visible only on md screens and larger */}
      <div className="hidden md:block">
        <CarouselPrevious/>
        <CarouselNext />
      </div>
    </Carousel>
  );
}
