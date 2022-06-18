import React from 'react';
import short from 'short-uuid';
import {
  SupportedBrowserWrapper,
  SupportedBrowserHeader,
  FullWidth,
  BrowserList,
} from './SupportedBrowsers.style';
import { mapGlobFiles } from '~/util/mapGlobFiles';

const images = import.meta.globEager('../../../public/browser-logos/*.png');
const browserLogos = mapGlobFiles(images).map((i) => i.replace('/public', ''));

const SupportedBrowsers = () => {
  return (
    <FullWidth>
      <SupportedBrowserWrapper>
        <SupportedBrowserHeader>
          Supported top chromium based web browsers
        </SupportedBrowserHeader>
        <BrowserList>
          {
            browserLogos.map((i) => {
              return (
                <img
                  key={short.generate()}
                  src={i}
                  alt=""
                />
              );
            })
          }
        </BrowserList>
      </SupportedBrowserWrapper>
    </FullWidth>
  );
};

export default SupportedBrowsers;
