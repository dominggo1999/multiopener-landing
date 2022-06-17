import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import Btn from '~/common/Button';
import {
  HeroWrapper,
  HeroText,
  HeroVideo,
  Title,
  Description,
  Buttons,
} from './Hero.style';
import 'video-react/dist/video-react.css';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText>
        <Title>
          <span>A better way to</span>
          <span> stream with friends</span>
        </Title>
        <Description>
          Higher quality, lower latency, creator focused video calls. Ping is the best way to bring your guests into OBS.
        </Description>
        <Buttons>
          <Btn.Primary>
            Download
          </Btn.Primary>
          <Link to="/documentation">
            <Btn.Secondary>
              Documentation
            </Btn.Secondary>
          </Link>
        </Buttons>
      </HeroText>
      <HeroVideo>
        <Player>
          <source src="test.mp4" />
        </Player>
      </HeroVideo>
    </HeroWrapper>
  );
};

export default Hero;
