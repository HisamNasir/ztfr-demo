import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementImageIndex, extractDominantColor, setDominantColor } from '../src/store/features/backgroundSlice';
import Image from 'next/image';

const ImageWallpaper = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.background.currentImageIndex);
  const [videoFinished, setVideoFinished] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#000000'];

  const handleVideoPlay = () => {
    dispatch(setDominantColor('#000')); // Set dominant color to black when video is playing
  };

  const handleImageChange = () => {
    if (currentImageIndex === 59) {
      setVideoFinished(true); // Set videoFinished to true when all images have been shown
    } else {
      dispatch(incrementImageIndex());
      dispatch(extractDominantColor(`/media/images/${currentImageIndex + 2}.png`));
    }
  };

  const handleColorChange = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

    // If all colors have been displayed, reset colorIndex and set videoFinished to false
    if (colorIndex === colors.length - 1) {
      setColorIndex(0);
      setVideoFinished(false);
    }

    // If colorIndex is less than the length of colors array, dispatch the color
    if (colorIndex < colors.length) {
      dispatch(setDominantColor(colors[colorIndex]));
    }
  };

  useEffect(() => {
    // Play video initially
    const video = document.getElementById('background-video');

    const handleVideoEnd = () => {
      setVideoFinished(true);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.playbackRate = 5;
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  useEffect(() => {
    if (videoFinished) {
      // Change image every 5 seconds
      const intervalId = setInterval(handleImageChange, 500);
      return () => clearInterval(intervalId);
    }
  }, [dispatch, currentImageIndex, videoFinished]);

  useEffect(() => {
    if (videoFinished) {
      // Change color every 5 seconds
      const intervalId = setInterval(handleColorChange, 500);
      return () => clearInterval(intervalId);
    }
  }, [dispatch, colorIndex, videoFinished, colors]);

  return (
    <div className="image-wallpaper h-screen overflow-hidden absolute -z-50">
      {!videoFinished ? (
        <video id="background-video" autoPlay muted className="w-screen h min-h-screen object-cover" onPlay={handleVideoPlay}>
          <source src="/media/video/apple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          {currentImageIndex !== 59 ? (
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
          ) : (
            <div className="w-screen h-screen" style={{ backgroundColor: colors[colorIndex] }}></div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageWallpaper;
