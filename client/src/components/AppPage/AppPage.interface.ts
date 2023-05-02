import { ReactNode } from 'react';

interface IAppPage {
  title: string;
  shouldRedirectIfAuth?: boolean;
  children: ReactNode;
}
export default IAppPage;
