import React from "react";

const TextCard = ({ Title, Text, index }) => {
  return (
    <>
      <div className="ml-[220px] flex flex-col  gap-3">
        <h1 className="text-2xl font-semibold ">
          <div className="flex flex-row gap-3">
            <p
              className=" 
              bg-[#11A38A]
                rounded-full 
                p-5
                aspect-square 
                flex items-center 
                justify-center w-1 h-1 text-m"
            >
              {index}
            </p>
            <p>{Title}</p>
          </div>
        </h1>
        <ul className="list-disc">{Text}</ul>
      </div>
    </>
  );
};

export default TextCard;
