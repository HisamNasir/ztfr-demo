import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementImageIndex,
  extractDominantColor,
} from "../src/store/features/backgroundSlice";

const useImageChange = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector(
    (state) => state.background.currentImageIndex
  );
  const videoFinished = useSelector((state) => state.background.videoFinished);

  useEffect(() => {
    const handleImageChange = () => {
      if (currentImageIndex === 59) {
        // Handle image change logic here
      } else {
        dispatch(incrementImageIndex());
        dispatch(
          extractDominantColor(`/media/images/${currentImageIndex + 2}.png`)
        );
      }
    };

    if (videoFinished) {
      const intervalId = setInterval(handleImageChange, 500); // Change image every 5 seconds
      return () => clearInterval(intervalId);
    }
  }, [dispatch, currentImageIndex, videoFinished]);
};

export default useImageChange;
