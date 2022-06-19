import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const DocumentationContent = ({ docs }) => {
  const { slug } = useParams();
  const activeContent = docs.filter((i) => i.slug === slug)[0];

  if (!activeContent) {
    return <Navigate to="/documentation/testing-123" />;
  }

  const DocumentationItem = activeContent.component;

  return (
    <div>
      <DocumentationItem />
    </div>
  );
};

export default DocumentationContent;
