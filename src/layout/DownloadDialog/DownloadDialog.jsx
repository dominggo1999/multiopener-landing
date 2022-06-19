import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  MessageTitle,
  DialogPortal,
  DialogOverlay,
  Message,
  Buttons,
} from './DownloadDialog.style';
import Btn from '~/common/Button';
import useThemeStore from '~/store/useThemeStore';

const DownloadDialog = () => {
  // Since using portal than dialog content out from app wrapper dark class
  // Need to apply dark class again here
  const theme = useThemeStore((state) => state.theme);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Btn.Primary>
          Download
        </Btn.Primary>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <Message className={theme}>
            <MessageTitle>
              Important
            </MessageTitle>
            <p>Vestibulum ullamcorper mattis dolor ac mattis. Ut ut lacus risus. Donec aliquam placerat porttitor. Aenean sagittis finibus massa.</p>
            <p>Vestibulum ullamcorper mattis dolor ac mattis. Ut ut lacus risus. Donec aliquam placerat porttitor. Aenean sagittis finibus massa. <Link to="/documentation">Check how to install here</Link></p>
            <Buttons>
              <Btn.Primary
                download="multi-search.ico"
                href="/favicons/favicon.ico"
                as="a"
                className="download-button"
              >
                Download
              </Btn.Primary>
              <DialogClose asChild>
                <Btn.Primary>
                  Cancel
                </Btn.Primary>
              </DialogClose>
            </Buttons>
          </Message>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default DownloadDialog;
