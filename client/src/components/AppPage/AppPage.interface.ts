import { ReactNode } from 'react';


export default interface IAppPage {
  title: string;
  shouldRedirectIfAuth?: boolean;
  children: ReactNode;
}