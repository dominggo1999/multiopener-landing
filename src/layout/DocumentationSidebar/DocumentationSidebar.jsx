import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AiOutlineArrowDown as ArrowDown,
  AiOutlineArrowUp as ArrowUp,
} from 'react-icons/ai';
import {
  SidebarWrapper,
  NavItem,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './DocumentationSidebar.style';
import useDocsNav from '~/hooks/useDocsNav';

const DocumentationSidebar = ({ docs }) => {
  const [open, setOpen] = useDocsNav();
  const { slug } = useParams();

  return (
    <Collapsible
      asChild
      open={open}
      onOpenChange={setOpen}
    >
      <>
        <CollapsibleTrigger>
          Documentation
          <span>
            {open ? <ArrowUp /> : <ArrowDown />}
          </span>
        </CollapsibleTrigger>

        {
          open && (
            <CollapsibleContent>
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
            </CollapsibleContent>
          )
        }
      </>
    </Collapsible>
  );
};

export default DocumentationSidebar;
