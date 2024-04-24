import { useEffect, useRef, useState } from "react";
import CommentedPart from "./components/CommentedPart";
import UncommentedPart from "./components/UncommentedPart";
import { gsap } from 'gsap';

export default function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [showCommentedPart, setShowCommentedPart] = useState(false);

  const commentedPartRef = useRef(null);
  const uncommentedPartRef = useRef(null);

  const prevent = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedRating !== null){
      setShowCommentedPart(true);
    }
  };

  const handleBackToUncommented = () => {
    setShowCommentedPart(false);
  };

  const handleTransition = () => {
    if(showCommentedPart){
      gsap.fromTo(
        commentedPartRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5}
      );
      gsap.to(uncommentedPartRef.current, { opacity: 0, y: 50, duration: 0.5});
    } else {
      gsap.fromTo(
        uncommentedPartRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5}
      );
      gsap.to(commentedPartRef.current, {opacity: 0, y: -50, duration: 0.5});
    }
  }

  useEffect(() => {
    handleTransition();
  }, [showCommentedPart]);


  return (
    <div className="bg-veryDarkBlue h-screen w-screen flex items-center justify-center">
      <div className="relative lg:w-[416px] h-[412px] bg-[radial-gradient(ellipse_at_center,_#232A34_0%,_#181E27_100%)] rounded-[30px] xs:w-[327px]">
        {showCommentedPart ? (
          <div ref={commentedPartRef} className="h-full w-full ">
            <CommentedPart 
              selectedRating={selectedRating} 
              handleBackToUncommented={handleBackToUncommented}  
            />
          </div>
        ) : (
          <div ref={uncommentedPartRef} className="h-full w-full">
            <UncommentedPart
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              handleSubmit={handleSubmit}
              prevent={prevent}
            />
          </div>
        )}
      </div>
      
      <footer className="text-lightGrey absolute lg:bottom-10 xs:bottom-2">
          By 
        <a 
          className="text-white hover:text-darkblue hover:underline hover:transition-500" 
          href="https://github.com/GuiFraV/FrontEndMentor_Interactive_rating_component" 
          target="_blank"
        >
          GuiFraV
        </a>
      </footer>
    </div>

  );
}
