import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementImageIndex, extractDominantColor, setDominantColor } from '../src/store/features/backgroundSlice';
import Image from 'next/image';

const ImageWallpaper = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.background.currentImageIndex);
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    // Play video initially
    const video = document.getElementById('background-video');

    video.addEventListener('ended', () => {
      setVideoFinished(true);
      dispatch(setDominantColor('#000'));
    });

    return () => {
      video.removeEventListener('ended', () => {
        setVideoFinished(true);
        dispatch(setDominantColor('#000')); 
      });
    };
  }, [dispatch]);

  useEffect(() => {
    if (videoFinished) {
      const intervalId = setInterval(() => {
        dispatch(incrementImageIndex());
        dispatch(extractDominantColor(`/media/images/${currentImageIndex + 2}.png`));
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [dispatch, currentImageIndex, videoFinished]);

  return (
    <div className="image-wallpaper h-screen overflow-hidden absolute -z-50">
      {!videoFinished ? (
        <video id="background-video" autoPlay muted className="w-screen h min-h-screen object-cover">
          <source src="/media/video/apple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
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
      )}
    </div>
  );
};

export default ImageWallpaper;
