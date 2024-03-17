import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementImageIndex } from '../src/store/features/backgroundSlice';

const ImageWallpaper = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.background.currentImageIndex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementImageIndex());
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <img
      className="image-wallpaper absolute object-cover"
      src={`/media/${currentImageIndex + 1}.png`} // Adjust path if necessary
      alt="Wallpaper"
      style={{
        width: "100%", // Ensure the image takes the full width
        height: "100%", // Ensure the image takes the full height
        objectFit: "cover", // Ensure the image covers the entire area
      }}
    />
  );
};

export default ImageWallpaper;