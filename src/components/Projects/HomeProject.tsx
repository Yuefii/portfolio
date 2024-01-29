import React from "react";
import ListProject from "./ListProject";
import { ProjectsList } from "@/helper/projectsList";

const HomeProject = () => {
  return (
    <>
      <div className="mx-4">
        <div className="flex my-4 items-center gap-x-2 font-semibold">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700 text-2xl font-semibold">Project</h1>
        </div>
        {ProjectsList.slice(1).map((item, index) => (
          <div key={index}>
            <ListProject item={item}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeProject;
