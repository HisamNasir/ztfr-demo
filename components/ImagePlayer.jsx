import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementImageIndex, extractDominantColor, setDominantColor } from '../src/store/features/backgroundSlice';
import Image from 'next/image';

const ImagePlayer = ({ onImagesEnd }) => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.background.currentImageIndex);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementImageIndex());
      setImageIndex((prevIndex) => prevIndex + 1);
      if (imageIndex >= 59) {
        clearInterval(intervalId);
        onImagesEnd(); // Notify parent component when all images are displayed
      }
    }, 500); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [dispatch, currentImageIndex, onImagesEnd, imageIndex]);

  useEffect(() => {
    // Extract dominant color when component mounts or image index changes
    dispatch(extractDominantColor(`/media/images/${currentImageIndex + 1}.png`));
  }, [dispatch, currentImageIndex]);

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
