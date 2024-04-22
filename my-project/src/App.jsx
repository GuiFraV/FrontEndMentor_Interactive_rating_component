import { useState } from "react";
import BulleButton from "./components/BulleButton";
import star from "../public/Star-removebg-preview.png";
import how from "../public/How.png";
import paiement from "../public/payment_Two Color.png";
import thank from "../public/Thank.png";

export default function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [showCommentedPart, setShowCommentedPart] = useState(false);

  const prevent = (e) => {
    e.preventDefault();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCommentedPart(true);
  };

  return (
    <div className="bg-veryDarkBlue h-screen w-screen flex items-center justify-center">
      <div className="relative w-[416px] h-[412px] bg-[radial-gradient(ellipse_at_center,_#232A34_0%,_#181E27_100%)] rounded-[30px]">
        {showCommentedPart ? (
          <div className="h-full w-full flex flex-col justify-evenly items-center">
            <img
              src={paiement}
              alt="paiement"
              width={162}
              height={108}
              className=""
            />
            <p className="text-orange flex justify-center align-center w-[193px] h-[32px] rounded-[22.5px] bg-darkblue">
              You selected {selectedRating} out of 5
            </p>
            <img src={thank} alt="paiement" width={162} height={108} className="" />
            <p className="text-lightGrey text-center w-[365px]">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        ) : (
          <>
            <div className="absolute left-[32.31px] top-[31.69px] w-[48.47px] h-[47.54px] border-darkblue border-2 rounded-full flex justify-center items-center">
              <img src={star} alt="Une jolie étoile" width={16.91} height={15.85} />
            </div>
            <img
              src={how}
              alt="Une jolie étoile"
              width={200.93}
              height={35}
              className="absolute left-[32.31px] top-[108px]"
            />
            <p className="absolute text-lightGrey w-[345.3px] h-[72px] left-[32.31px] top-[158px]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <form onClick={prevent}className="w-[344.31px] flex flex-col justify-center absolute top-[253.54px] left-[32.31px]">
              <div className="flex justify-between h-[50.51px] mb-8">
                {[1, 2, 3, 4, 5].map((numero) => (
                  <BulleButton
                    key={numero}
                    numero={numero}
                    selected={selectedRating === numero}
                    onClick={() => setSelectedRating(numero)}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-orange duration-500 text-white py-2 px-4 rounded-[22.5px] h-[45px] w-[341px] hover:bg-white hover:text-orange"
              >
                SUBMIT
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
