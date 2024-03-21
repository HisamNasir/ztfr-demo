import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementImageIndex,
  extractDominantColor,
} from "../src/store/features/backgroundSlice";
import Image from "next/image";

const ImagePlayer = ({ onImagesEnd }) => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector(
    (state) => state.background.currentImageIndex
  );

  useEffect(() => {
    const handleImageChange = () => {
      if (currentImageIndex === 59) {
        onImagesEnd();
      } else {
        dispatch(incrementImageIndex());
        dispatch(
          extractDominantColor(`/media/images/${currentImageIndex + 2}.png`)
        );
      }
    };

    const intervalId = setInterval(handleImageChange, 500); // Change image every 5 seconds
    return () => clearInterval(intervalId);
  }, [dispatch, currentImageIndex, onImagesEnd]);

  return (
    <Image
      src={`/media/images/${currentImageIndex + 1}.png`}
      alt="Wallpaper"
      width={1920}
      height={1080}
      className="w-screen h min-h-screen object-cover"
      onLoad={() => {
        dispatch(extractDominantColor());
      }}
    />
  );
};

export default ImagePlayer;
