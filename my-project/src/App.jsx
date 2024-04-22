import { useState } from "react"

import BulleButton from "./components/BulleButton"

import star from "../public/Star-removebg-preview.png"
import how from "../public/How.png"


export default function App() {

  const [selectedRating, setSelectedRating] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted rating:', selectedRating)
  }


  return (
    <div className="bg-veryDarkBlue h-screen w-screen flex items-center justify-center">
      <div className="relative w-[416px] h-[412px] bg-[radial-gradient(ellipse_at_center,_#232A34_0%,_#181E27_100%)] rounded-[30px]">
        <div className="absolute left-[32.31px] top-[31.69px] w-[48.47px] h-[47.54px] border-darkblue border-2 rounded-full flex justify-center items-center">
          <img 
            src={star}
            alt="Une jolie étoile"
            width={16.91}
            height={15.85}
          />
        </div>
          <img 
            src={how}
            alt="Une jolie étoile"
            width={200.93}
            height={35}
            className="absolute left-[32.31px] top-[108px]"
          />
          <p className="absolute text-lightGrey w-[345.3px] h-[72px] left-[32.31px] top-[158px]">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>

        <form onSubmit={handleSubmit} className="w-[344.31px] flex flex-col justify-center absolute top-[253.54px] left-[32.31px]">
          <div className="flex justify-between h-[50.51px] mb-8">
           {[1, 2, 3, 4, 5].map((numero) => (
            <BulleButton
              key={numero}
              numero={numero}
              selected={selectedRating === numero}
              onClick={setSelectedRating}
            />
          ))}
          </div>

        <button type="submit" className="bg-orange duration-500 text-white py-2 px-4 rounded-[22.5px] h-[45px] w-[341px] hover:bg-white hover:text-orange">
          SUBMIT
        </button>

        </form>

      </div>
    </div>
  )
}