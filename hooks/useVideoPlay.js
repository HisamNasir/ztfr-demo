import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDominantColor } from "../src/store/features/backgroundSlice";

const useVideoPlay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleVideoPlay = () => {
      dispatch(setDominantColor("#000")); // Set dominant color to black when video is playing
    };

    const video = document.getElementById("background-video");
    video.addEventListener("playing", handleVideoPlay);

    return () => {
      video.removeEventListener("playing", handleVideoPlay);
    };
  }, [dispatch]);
};

export default useVideoPlay;
