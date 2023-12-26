import React from "react";

const WorkContent = (props) => {
  return (
    <>
      <div className="flex px-6 justify-between pt-3">
        <div className="text-white text-2xl medium:text-lg tablet:text-sm mobile:text-sm smallMobile:text-sm">
          {props.companyName}
          <span className="text-slate-300 mobile:text-xs smallMobile:text-xs">{props.require}</span>
        </div>
        <div className="text-white text-sm medium:text-[8px] tablet:text-sm mobile:text-[6px] smallMobile:text-[6px]">{props.time}</div>
      </div>
      <div className="flex justify-between">
        <div className="mt-2 text-slate-300 text-lg px-6 medium:text-sm tablet:text-xs mobile:text-xs smallMobile:text-xs ">{props.content}</div>
        <div>
          <p className="text-slate-300 px-6 mt-2 tablet:text-sm">~{props.from}</p>
        </div>
      </div>
    </>
  );
};

export default WorkContent;
