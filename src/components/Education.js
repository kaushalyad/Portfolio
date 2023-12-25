import React from "react";
import WorkContent from "./WorkContent";
const Education = () => {
  return (
    <div>
      <div>
        <p className="text-white text-center text-7xl font-bold">
          My Education
        </p>
      </div>
      <div className="mt-20">
        <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-56 rounded-lg shadow">
          <WorkContent
            companyName={"Motilal Nehru Institute Of Technology "}
            content={"Bachelor of Technology"}
            time={"2019-2023"}
            from={"Allahabad(UP)"}
          />
        </div>
        <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-56 rounded-lg shadow mt-10">
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
