import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementImageIndex, extractDominantColor, setDominantColor } from '../src/store/features/backgroundSlice';
import Image from 'next/image';

const ImageWallpaper = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.background.currentImageIndex);
  const dominantColor = useSelector((state) => state.background.dominantColor);
  const [videoFinished, setVideoFinished] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#000000'];

  useEffect(() => {
    // Play video initially
    const video = document.getElementById('background-video');

    const handleVideoEnd = () => {
      setVideoFinished(true);
      dispatch(setDominantColor('#000')); // Set dominant color to black when video finishes
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [dispatch]);

  useEffect(() => {
    if (videoFinished) {
      const intervalId = setInterval(() => {
        if (currentImageIndex === 59) {
          setColorIndex((prevIndex) => (prevIndex + 1) % 7);
        } else {
          dispatch(incrementImageIndex());
          dispatch(extractDominantColor(`/media/images/${currentImageIndex + 2}.png`));
        }
      }, 500); // Change image every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [dispatch, currentImageIndex, videoFinished]);


  useEffect(() => {
    if (videoFinished) {
      const intervalId = setInterval(() => {
        // Increment colorIndex to display the next color
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

        // If all colors have been displayed, reset colorIndex and increment imageIndex
        if (colorIndex === colors.length - 1) {
          dispatch(incrementImageIndex());
          setVideoFinished(false); // Reset the videoFinished process
        }

        // If colorIndex is less than the length of colors array, dispatch the color
        if (colorIndex < colors.length) {
          dispatch(setDominantColor(colors[colorIndex]));
        }

        // If colorIndex reaches the end of the colors array, reset it
        if (colorIndex === colors.length - 1) {
          setColorIndex(0);
        }
      }, 500); // Change color every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [dispatch, colorIndex, videoFinished, colors]);

  return (
    <div className="image-wallpaper h-screen overflow-hidden absolute -z-50">
      {!videoFinished ? (
        <video id="background-video" autoPlay muted className="w-screen h min-h-screen object-cover">
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
            <div
              className="w-screen h-screen"
              style={{ backgroundColor: dominantColor || colors[colorIndex] }}
              onLoad={() => {
                dispatch(setDominantColor(dominantColor || colors[colorIndex]));
              }}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageWallpaper;
