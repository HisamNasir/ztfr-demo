import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import ImagePlayer from './ImagePlayer';
import ColorPlayer from './ColorPlayer';

const ImageWallpaper = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const [imagesFinished, setImagesFinished] = useState(false);
  const [colorsFinished, setColorsFinished] = useState(false);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const handleImagesEnd = () => {
    setImagesFinished(true);
  };

  const handleColorsEnd = () => {
    setColorsFinished(true);
    setVideoFinished(false); // Reset video playback
    setImagesFinished(false); // Reset image playback
  };
  return (
    <div className="image-wallpaper h-screen overflow-hidden absolute -z-50">
      {!videoFinished || <VideoPlayer onVideoEnd={handleVideoEnd} />}
      {videoFinished && !imagesFinished && <ImagePlayer onImagesEnd={handleImagesEnd} />}
      {videoFinished && !imagesFinished && (
        <ColorPlayer onColorsEnd={handleColorsEnd} />
      )}
    </div>
  );
};

export default ImageWallpaper;
