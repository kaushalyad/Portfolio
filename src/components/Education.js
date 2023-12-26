import React from "react";
import WorkContent from "./WorkContent";
const Education = () => {
  return (
    <div id="education" className="pt-24">
      <div>
        <p className="comic text-white text-center text-7xl font-bold mobile:text-5xl smallMobile:text-5xl">
          My Education
        </p>
      </div>
      <div className="my-20">
        <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 tablet:mx-16 rounded-lg shadow medium:mx-16 mobile:mx-5 smallMobile:mx-5  largeTablet:mx-16 laptop:m-24">
          <WorkContent
            companyName={"Motilal Nehru Institute Of Technology "}
            content={"Bachelor of Technology"}
            time={"2019-2023"}
            from={"Allahabad(UP)"}
          />
        </div>
        <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 tablet:mx-16 rounded-lg shadow mt-10  medium:mx-16 mobile:mx-5 smallMobile:mx-5 largeTablet:mx-16 laptop:m-24">
          <WorkContent
            companyName={"S.G.S.M.S.M.N.N Janta College Khajedih"}
            content={"Physics Chemistry Mathematics"}
            time={"2015-2017"}
            from={"Madhubani(Bihar)"}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
