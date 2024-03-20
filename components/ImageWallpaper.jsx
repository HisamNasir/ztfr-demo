
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
            
              useEffect(() => {
                const video = document.getElementById('background-video');
            
                const handleVideoEnd = () => {
                  setVideoFinished(true);
                };
            
                const handleVideoPlaying = () => {
                  dispatch(setDominantColor('#000'));
                };
            
                video.addEventListener('ended', handleVideoEnd);
                video.addEventListener('playing', handleVideoPlaying);
                video.playbackRate = 5;
            
                return () => {
                  video.removeEventListener('ended', handleVideoEnd);
                  video.removeEventListener('playing', handleVideoPlaying);
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
                  }, 500);
            
                  return () => clearInterval(intervalId);
                }
              }, [dispatch, currentImageIndex, videoFinished]);
            
            
              useEffect(() => {
                if (videoFinished) {
                  const intervalId = setInterval(() => {
                    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
                    if (colorIndex === colors.length - 1) {
                      dispatch(incrementImageIndex());
                      setVideoFinished(false);
                    }
                    if (colorIndex < colors.length) {
                      dispatch(setDominantColor(colors[colorIndex]));
                    }
                    if (colorIndex === colors.length - 1) {
                      setColorIndex(0);
                    }
                  }, 500); 
            
                  return () => clearInterval(intervalId);
                }
              }, [dispatch, colorIndex, videoFinished, colors]);
            
              useEffect(() => {
                dispatch(setDominantColor(colors[colorIndex]));
              }, [dispatch]);
            
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
                        <div className="w-screen h-screen" style={{ backgroundColor: colors[colorIndex] }}></div>
                      )}
                    </>
                  )}
                </div>
              );
            };
            
            export default ImageWallpaper;
            