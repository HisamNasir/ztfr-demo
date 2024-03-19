import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementImageIndex,extractDominantColor } from '../src/store/features/backgroundSlice';
const ImageWallpaper = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.background.currentImageIndex);

  useEffect(() => {
    dispatch(extractDominantColor(`/media/images/${currentImageIndex + 1}.png`)); // Adjust path if necessary
    const intervalId = setInterval(() => {
      dispatch(incrementImageIndex());
      dispatch(extractDominantColor(`/media/images/${currentImageIndex + 2}.png`)); // Adjust path if necessary
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [dispatch, currentImageIndex]);

  return (
    <div
      className="image-wallpaper absolute -z-50 "
    >
      <img
        src={`/media/images/${currentImageIndex + 1}.png`} 
        alt="Wallpaper"
        width={1920}
        height={1080}
        className=' h-screen object-cover'
        onLoad={() => {
          dispatch(extractDominantColor());
        }}
      />
    </div>
  );
};

export default ImageWallpaper;
