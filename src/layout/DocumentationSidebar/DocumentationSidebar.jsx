import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SidebarWrapper, NavItem } from './DocumentationSidebar.style';

const DocumentationSidebar = ({ docs }) => {
  const { slug } = useParams();

  return (
    <SidebarWrapper>
      {
        docs?.length > 0 && docs.map((i) => {
          return (
            <NavItem
              className={i.slug === slug && 'active'}
              key={i.slug}
            >
              <Link to={`/documentation/${i.slug}`}>
                {i.title}
              </Link>
            </NavItem>
          );
        })
      }
    </SidebarWrapper>
  );
};

export default DocumentationSidebar;
