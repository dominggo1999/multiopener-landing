import React from 'react';
import HowToInstall from '~/docs/HowToInstall.mdx';
import Sidebar from '~/layout/Sidebar/Sidebar';
import { DocumentationWrapper } from './Documentation.style';

const Documentation = () => {
  return (
    <DocumentationWrapper>
      <Sidebar />
      <HowToInstall />
    </DocumentationWrapper>
  );
};

export default Documentation;
