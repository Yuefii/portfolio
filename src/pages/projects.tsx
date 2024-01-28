import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import React from "react";

const projects = () => {
  return (
    <>
      <div className="bg-white top-24 relative shadow-md rounded-xl max-w-2xl mx-4 md:mx-auto lg:px-0 ">
        <div className=" lg:p-6 p-4 max-md:p-5 ">
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default projects;
