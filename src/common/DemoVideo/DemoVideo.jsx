import React, { useRef, useEffect } from 'react';
import { Player } from 'video-react';
import { VideoWrapper } from './DemoVideo.style';
import 'video-react/dist/video-react.css';
import useVideoStore from '~/store/useVideoStore';

const DemoVideo = ({ src = 'test.mp4' }) => {
  const collectVideo = useVideoStore((state) => state.collectVideo);
  const stopOtherPlayers = useVideoStore((state) => state.stopOtherPlayers);
  const removeVideo = useVideoStore((state) => state.removeVideo);
  const playerRef = useRef();

  useEffect(() => {
    collectVideo(playerRef.current);

    return () => {
      removeVideo(playerRef.current);
    };
  }, []);

  return (
    <VideoWrapper>
      <Player
        onPlay={() => stopOtherPlayers(playerRef.current)}
        ref={playerRef}
      >
        <source src={src} />
      </Player>
    </VideoWrapper>
  );
};

export default DemoVideo;
