import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Heading1,
  Heading2,
  Heading3,
  Link,
  ContentWrapper,
  Image,
} from '~/common/MarkdownMapping';
import DemoVideo from '~/common/DemoVideo/DemoVideo';

const DocumentationContent = ({ docs }) => {
  const { slug } = useParams();
  const activeContent = docs.filter((i) => i.slug === slug)[0];

  if (!activeContent) {
    return <Navigate to="/documentation/testing-123" />;
  }

  const DocumentationItem = activeContent.component;

  return (
    <ContentWrapper>
      <DocumentationItem
        components={{
          h1: Heading1,
          h2: Heading2,
          h3: Heading3,
          a: Link,
          Image,
          DemoVideo,
        }}
      />
    </ContentWrapper>
  );
};

export default DocumentationContent;
