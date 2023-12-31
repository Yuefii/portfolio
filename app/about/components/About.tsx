import { AboutList } from "../constants/AboutList";

const About = () => {
  return (
    <>
      {AboutList.map((AL, index) => (
        <div key={index} className="px-2">
          <p className="p-2 text-md text-justify text-slate-600 dark:text-slate-300">
            {AL.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default About;
