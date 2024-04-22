import { useState } from "react";
import CommentedPart from "./components/CommentedPart";
import UncommentedPart from "./components/UncommentedPart";

export default function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [showCommentedPart, setShowCommentedPart] = useState(false);

  const prevent = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCommentedPart(true);
  };

  return (
    <div className="bg-veryDarkBlue h-screen w-screen flex items-center justify-center">
      <div className="relative w-[416px] h-[412px] bg-[radial-gradient(ellipse_at_center,_#232A34_0%,_#181E27_100%)] rounded-[30px]">
        {showCommentedPart ? (
          <CommentedPart selectedRating={selectedRating} />
        ) : (
          <UncommentedPart
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            handleSubmit={handleSubmit}
            prevent={prevent}
          />
        )}
      </div>
    </div>
  );
}
