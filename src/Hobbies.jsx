import * as React from "react";
import { Spotify } from "react-spotify-embed";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { cn } from "@/lib/utils";

export function Hobbies() {
  const hobbiesData = [
    {
      title: "Music",
      bgColor: "bg-green-500",

      content: {
        type: "spotify",
        link: "https://open.spotify.com/track/32VAw8DL9ixX5XSW2VLcZ4?si=b297134f4cfe44a0",
      },
      description:
        "Passionate about exploring various music genres, with a focus on Indie-Pop, Punjabi, and Love songs.",
      imageHeight: "h-[300px]",
      textMargin: "-mt-5",
    },
    {
      title: "Typing",
      bgColor: "bg-rose-400",

      content: {
        type: "image",
        src: "hobbie2.png",
        alt: "Typing Hobby",
        link: "https://monkeytype.com/profile/Avadh_kanaiya",
      },
      description:
        "Enjoy challenging myself with fast and accurate typing to improve efficiency and productivity.",
      imageHeight: "h-[230px]",
      textMargin: "mt-12",
    },
    {
      title: "Coding",
      bgColor: "bg-violet-500",

      content: {
        type: "image",
        src: "hobbie3.png",
        alt: "Coding Hobby",
        link: "https://github.com/AvadhKanaiya",
      },
      description:
        "Dedicated to coding and building end-to-end software solutions to enhance my technical proficiency.",
      imageHeight: "h-[230px]",
      textMargin: "mt-12",
    },
    {
      title: "Workout",
      bgColor: "bg-blue-500",

      content: {
        type: "image",
        src: "hobbie4.png",
        alt: "Workout Hobby",
        link: "https://open.spotify.com/playlist/1LIowjORrNqFFyXYqK0JvE?si=e1c57173f3674498",
      },
      description:
        "Committed to fitness, consistently working out to improve strength, health, and overall well-being.",
      imageHeight: "h-[230px]",
      textMargin: "mt-12",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mb-3">
      {hobbiesData.map((hobby, index) => (
        <Card
          key={index}
          className={cn(
            "w-full",
            hobby.bgColor,
            "hover:scale-105",
            `hover:shadow-xl`,
            "transition-all duration-300"
          )}
        >
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-white">
              {hobby.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {hobby.content.type === "spotify" ? (
              <Spotify
                link={hobby.content.link}
                className={`w-full ${hobby.imageHeight}`}
              />
            ) : (
              <a
                href={hobby.content.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={hobby.content.src}
                  alt={hobby.content.alt}
                  className={`w-full ${hobby.imageHeight} rounded-lg cursor-pointer`}
                />
              </a>
            )}
            <p
              className={`font-heading text-center text-white ${hobby.textMargin}`}
            >
              {hobby.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
