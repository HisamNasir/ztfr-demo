
    import React, { useEffect, useRef, useState } from 'react';
    import { setDominantColor } from '../src/store/features/backgroundSlice';
    import { useDispatch } from 'react-redux';
    const VideoPlayer = ({ onVideoEnd }) => {
      const videoRef = useRef(null);
      const [videoFinished, setVideoFinished] = useState(false);
      const dispatch = useDispatch();
    
      useEffect(() => {
        const video = videoRef.current;
    
        const handleVideoEnd = () => {
          setVideoFinished(true);
          onVideoEnd(); 
        };
    
        const handleVideoPlay = () => {
          dispatch(setDominantColor('000000')); 
        };
    
        video.addEventListener('ended', handleVideoEnd);
        video.addEventListener('play', handleVideoPlay);
        // video.playbackRate = 5;
        return () => {
          video.removeEventListener('ended', handleVideoEnd);
          video.removeEventListener('play', handleVideoPlay);
        };
      }, [onVideoEnd, dispatch]);
    
      return (
        <video ref={videoRef} autoPlay muted className="w-screen h min-h-screen object-cover">
          <source src="/media/video/apple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    };
    
    export default VideoPlayer;
    