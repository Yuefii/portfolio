import React from "react";
import ListProject from "./ListProject";

const projects = [
  {
    imgLink: "/projects/project_1.png",
    title: "Build Portfolio with NextJs",
    subT: "This website is designed quite simply, aiming to display your personal portfolio.",
    website: "https://yuefii.my.id/",
    github: "https://github.com/Yuefii",
  },
  {
    imgLink: "/projects/project_1.png",
    title: "Build Portfolio with NextJs",
    subT: "This website is designed quite simply, aiming to display your personal portfolio.",
    website: "https://yuefii.my.id/",
    github: "https://github.com/Yuefii",
  },
];

const Projects = () => {
  return (
    <>
      <div className="mx-4">
        <div className="flex my-4 items-center gap-x-2 font-semibold">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700 text-lg font-semibold">Project</h1>
        </div>
        {projects.map((item, index) => (
          <div key={index}>
            <ListProject item={item}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
