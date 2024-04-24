import React from "react";
import star from "/icon-star.svg";
import BulleButton from "./BulleButton";

const UncommentedPart = ({ selectedRating, setSelectedRating, handleSubmit, prevent }) => {
  return (
    <>
      <div className="absolute left-[32.31px] top-[31.69px] w-[48.47px] h-[47.54px] bg-darkblue rounded-full flex justify-center items-center">
        <img src={star} alt="Une jolie étoile" width={16.91} height={15.85} />
      </div>

      <h1 className="w-[236.93px] h-[35px] text-white absolute left-[32.31px] top-[108px] lg:text-3xl font-bold xs:text-2xl">How did we do ?</h1>

      <p className="absolute text-lightGrey lg:w-[345.3px] lg:text-base h-[72px] left-[32.31px] top-[158px] xs:text-sm xs:w-[279px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form
        onClick={prevent}
        className="w-[344.31px] flex flex-col justify-center absolute top-[253.54px] lg:left-[32.31px] xs:left-6"
      >
        <div className="flex justify-between h-[50.51px] mb-8 lg:w-[344.31px] xs:w-[281px]">
          {[1, 2, 3, 4, 5].map((numero) => (
            <BulleButton
              key={numero}
              numero={numero}
              selected={selectedRating === numero}
              onClick={setSelectedRating}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-orange duration-500 text-white py-2 px-4 rounded-[22.5px] h-[45px] lg:w-[341px] hover:bg-white hover:text-orange xs:w-[279px]"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default UncommentedPart;
