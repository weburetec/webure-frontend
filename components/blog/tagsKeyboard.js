import React from "react";

const TagsKeywords = () => {
  return (
    <div className="px-2 lg:px-6 mb-4">
      <div className="relative w-full md:w-[388px] h-[138px] -mt-28 p-4 border-2 border-[#C9C5C5] rounded-md">
        <div className="absolute">
          <div className="flex flex-wrap font-bold gap-2">
            <div className="h-[40px] w-[calc(50%-8px)] bg-[#578EF5] rounded-[10px] bg-opacity-40 text-[#3E6EC3] text-center p-2 hover:bg-gray-100 cursor-pointer duration-200">
              Wireframe
            </div>
            <div className="h-[40px] w-[calc(50%-8px)] bg-[#FDFF99] rounded-[10px] bg-opacity-40 text-[#61614a] text-center p-2 hover:bg-gray-100 cursor-pointer duration-200">
              Design Prototype
            </div>
            <div className="h-[40px] w-[calc(30%-8px)] bg-[#4CE364] rounded-[10px] bg-opacity-40 text-[#43A552] text-center p-2 hover:bg-gray-100 cursor-pointer duration-200">
              Design
            </div>
            <div className="h-[40px] w-[calc(40%-8px)] bg-[#FF5A5A] rounded-[10px] bg-opacity-40 text-[#BE5151] text-center p-2 hover:bg-gray-100 cursor-pointer duration-200">
              Colorography
            </div>
            <div className="h-[40px] w-[calc(30%-8px)] bg-[#22215B] rounded-[10px] bg-opacity-40 text-[#22215B] text-center p-2 hover:bg-gray-100 cursor-pointer duration-200">
              Images
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsKeywords;
