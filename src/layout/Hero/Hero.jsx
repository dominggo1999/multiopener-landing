import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '~/common/Button';
import {
  HeroWrapper,
  HeroText,
  Title,
  Description,
  Buttons,
} from './Hero.style';
import DemoVideo from '~/common/DemoVideo/DemoVideo';
import DownloadDialog from '../DownloadDialog/DownloadDialog';

const Hero = () => {
  return (
    <HeroWrapper as="main">
      <HeroText>
        <Title>
          <span>A better way to</span>
          <span> stream with friends</span>
        </Title>
        <Description>
          Higher quality, lower latency, creator focused video calls. Ping is the best way to bring your guests into OBS.
        </Description>
        <Buttons>
          <DownloadDialog />
          <Link to="/documentation/use-cases">
            <Btn.Secondary>
              Documentation
            </Btn.Secondary>
          </Link>
        </Buttons>
      </HeroText>
      <DemoVideo />
    </HeroWrapper>
  );
};

export default Hero;
