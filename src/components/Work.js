import React from "react";
import WorkContent from "./WorkContent";
import { useContext } from "react";
import { context } from "./Navbar/Navbar";
import Require from "./Require";
const Work = () => {
  const mode = useContext(context);
  return (
    <div div id="work" className="pt-24">
      <div
        className={`" comic  text-center text-7xl font-bold my-11 mobile:text-5xl smallMobile:text-5xl "  ${
          mode === "dark" ? "text-white" : "text-black"
        }`}
      >
        Work Experience
      </div>
      <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-56 rounded-lg shadow tablet:mx-16 largeTablet:mx-11 mobile:mx-5 smallMobile:mx-5 medium:mx-16 laptop:mx-24">
        <WorkContent
          companyName={"Successive Technology"}
          content={
            "Developed user interface for PMS application using ReactJS, Material UI, and API handling, ensuring a seamless and visually appealing user experience.."
          }
          time={"24-07-2023 To 27-10-2023"}
          from={"WFO"}
          require={<Require />}
        />
      </div>
    </div>
  );
};

export default Work;
