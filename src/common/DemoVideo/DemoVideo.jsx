import React, {
  useRef, useEffect, useState, useMemo,
} from 'react';
import { useParams } from 'react-router-dom';
import Plyr from 'plyr-react';
import { VideoWrapper } from './DemoVideo.style';
import useVideoStore from '~/store/useVideoStore';
import 'plyr-react/plyr.css';

const DemoVideo = ({ src = 'test.mp4' }) => {
  const collectVideo = useVideoStore((state) => state.collectVideo);
  const stopOtherPlayers = useVideoStore((state) => state.stopOtherPlayers);
  const removeVideo = useVideoStore((state) => state.removeVideo);
  const wrapperRef = useRef();
  const { slug } = useParams();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!rendered) {
      setRendered(true);
    }

    const videoPlayer = wrapperRef.current?.querySelector('video');
    if (rendered && videoPlayer) {
      collectVideo(videoPlayer);

      videoPlayer.addEventListener('play', () => {
        stopOtherPlayers(videoPlayer);
      });

      return () => {
        removeVideo(videoPlayer);
      };
    }
  }, [rendered]);

  return useMemo(() => {
    return (
      <VideoWrapper
        slug={slug}
        ref={wrapperRef}
      >
        <Plyr
          source={{
            type: 'video',
            title: 'Demo video',
            sources: [
              {
                src,
                type: 'video/mp4',
              },
            ],
          }}
          options={{
            ratio: '1366:738',
          }}
        />
      </VideoWrapper>
    );
  }, [rendered]);
};

export default DemoVideo;
