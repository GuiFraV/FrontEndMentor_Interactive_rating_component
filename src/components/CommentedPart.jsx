import React from "react";
import paiement from "/payment_Two Color.png";


const CommentedPart = ({ selectedRating }) => {
  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <img src={paiement} alt="paiement" width={162} height={108} className="" />
      <p className="text-orange flex justify-center align-center w-[193px] h-[32px] rounded-[22.5px] bg-darkblue">
        You selected {selectedRating} out of 5
      </p>
  
      <h1 className=" text-white text-3xl font-bold">Thank You !</h1>

      <p className="text-lightGrey text-center w-[365px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default CommentedPart;
