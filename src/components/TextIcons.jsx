import React from "react";

const TextIcons = ({ Header, Image }) => {
  return (
    <>
      <div className="text-white flex justify-center  ">
        <div className="mt-[4px]">{Image}</div>
        {Header}
      </div>
    </>
  );
};

export default TextIcons;
