import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementImageIndex, extractDominantColor } from '../src/store/features/backgroundSlice';
import Image from 'next/image';

const ImageWallpaper = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.background.currentImageIndex);
  const isVideoBackground = useSelector((state) => state.background.isVideoBackground); // Assuming you have a flag for video background

  useEffect(() => {
    dispatch(extractDominantColor(`/media/${currentImageIndex + 1}.png`)); // Adjust path if necessary
    const intervalId = setInterval(() => {
      dispatch(incrementImageIndex());
      dispatch(extractDominantColor(`/media/${currentImageIndex + 2}.png`)); // Adjust path if necessary
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [dispatch, currentImageIndex]);

  return (
    <div className="background-container absolute inset-0 z-0">
      {isVideoBackground ? (
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source src="/path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={`/media/${currentImageIndex + 1}.png`} // Adjust path if necessary
          alt="Wallpaper"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          onLoad={() => {
            dispatch(extractDominantColor());
          }}
        />
      )}
    </div>
  );
};

export default ImageWallpaper;
