import React from 'react';
import { DocumentationWrapper } from './Documentation.style';
import DocumentationSidebar from '~/layout/DocumentationSidebar/DocumentationSidebar';
import DocumentationContent from '~/layout/DocumentationContent/DocumentationContent';
import { mapMdxMeta } from '~/util/mapGlobFiles';

const mdxFiles = import.meta.globEager('../../docs/*.mdx');

const docs = mapMdxMeta(mdxFiles);

const Documentation = () => {
  return (
    <DocumentationWrapper>
      <DocumentationSidebar docs={docs} />
      <DocumentationContent docs={docs} />
    </DocumentationWrapper>
  );
};

export default Documentation;
