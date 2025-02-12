import React from "react";

const MacbookComponent = ({ imageUrl }:{imageUrl:string}) => {
  return (
    <div className="p-[4%_6%] mx-auto max-w-[800px]">
      {/* Screen */}
      <div className="bg-black rounded-[3%_3%_0.5%_0.5%_/_5%] mx-auto relative w-[80%]">
        {/* Screen Border */}
        <div
          className="before:border-[2px] before:border-[#cacacc] before:rounded-[3%_3%_0.5%_0.5%_/_5%] before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.8),inset_0_0_1px_2px_rgba(255,255,255,0.3)] before:content-[''] before:block before:pt-[67%]"
        ></div>
        {/* Screen Top Line */}
        <div
          className="after:content-[''] after:border-t-[2px] after:border-t-[rgba(255,255,255,0.15)] after:absolute after:bottom-[0.75%] after:left-[0.5%] after:pt-[1%] after:w-[99%]"
        ></div>
        {/* Viewport */}
        <div
          className="absolute bottom-0 left-0 right-0 top-0 m-[4.3%_3.2%] bg-[#333] transition-all duration-3000 ease-in-out bg-[length:100%_auto] bg-[position:0_0] overflow-hidden cursor-pointer hover:bg-[position:0_100%]"
          style={{
            backgroundImage: `url('${imageUrl}')`, // Use the prop here
          }}
        >
          {/* Viewport Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_at_right_bottom,transparent_75%,rgba(255,255,255,0.05)_75%,transparent)]"
          ></div>
        </div>
      </div>

      {/* Base */}
      <div className="relative w-full">
        <div
          className="before:content-[''] before:block before:pt-[3.3%] before:bg-gradient-to-b before:from-[#eaeced] before:via-[#edeef0_55%] before:via-[#fff_55%] before:via-[#8a8b8f_56%] before:via-[#999ba0_61%] before:via-[#4B4B4F_84%] before:via-[#262627_89%] before:to-[rgba(0,0,0,0.01)_98%] before:rounded-[0_0_10%_10%_/_0_0_50%_50%]"
        ></div>
        <div
          className="after:content-[''] after:absolute after:top-0 after:w-full after:h-[53%] after:bg-gradient-to-r after:from-[rgba(0,0,0,0.5)] after:via-[rgba(255,255,255,0.8)_0.5%] after:via-[rgba(0,0,0,0.4)_3.3%] after:via-[transparent_15%] after:via-[rgba(255,255,255,0.8)_50%] after:via-[transparent_85%] after:via-[rgba(0,0,0,0.4)_96.7%] after:via-[rgba(255,255,255,0.8)_99.5%] after:to-[rgba(0,0,0,0.5)]"
        ></div>
      </div>

      {/* Notch */}
      <div className="bg-[#ddd] rounded-[0_0_7%_7%_/_0_0_95%_95%] shadow-[-5px_-1px_3px_rgba(0,0,0,0.2)_inset,5px_-1px_3px_rgba(0,0,0,0.2)_inset] mx-auto mt-[-3.5%] relative w-[14%] z-[2]">
        <div className="before:content-[''] before:block before:pt-[10%]"></div>
      </div>
    </div>
  );
};

export default MacbookComponent;

