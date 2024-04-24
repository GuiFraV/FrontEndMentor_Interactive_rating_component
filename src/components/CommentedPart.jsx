import React, { useState } from "react";
import paiement from "/payment_Two Color.png";


const CommentedPart = ({ selectedRating , handleBackToUncommented}) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  
  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <img src={paiement} alt="paiement" width={162} height={108} className="" />
      <p className="text-orange flex justify-center items-center w-[193px] h-[32px] rounded-[22.5px] bg-darkblue">
        You selected {selectedRating} out of 5
      </p>
  
      <button 
        className="hover:bg-orange duration-500 py-2 px-4 rounded-full h-[45px] lg:w-[341px] xs:w-[279px]"
        onClick={handleBackToUncommented}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}  
      >
        <h1 className=" text-white lg:text-3xl font-bold xs:text-2xl">
          {isHovered ? "Go Back!" : " Thank You!"}
        </h1>
      </button>

      <p className="text-lightGrey text-center lg:text-base lg:w-[365px] xs:text-sm xs:w-[279px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default CommentedPart;
