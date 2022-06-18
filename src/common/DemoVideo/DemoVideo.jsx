import React from 'react';
import { Player } from 'video-react';
import { VideoWrapper } from './DemoVideo.style';
import 'video-react/dist/video-react.css';

const DemoVideo = ({ src = 'test.mp4' }) => {
  return (
    <VideoWrapper>
      <Player>
        <source src={src} />
      </Player>
    </VideoWrapper>
  );
};

export default DemoVideo;
