import store from '@/store';
import { AppRoutes } from '@/types';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ActivationPage from '@/pages/ActivationPage/ActivationPage';
import Home from '@/pages/Home/Home';
import LoginPage from '@/pages/LoginPage/LoginPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import UploadPage from '@/pages/UploadPage/UploadPage';
import UserProfilePage from '@/pages/UserProfilePage/UserProfilePage';

import Activation from '@/components/Activation/Activation';
import AppPage from '@/components/AppPage/AppPage';
import ErrorNotFound from '@/components/ErrorNotFound/ErrorNotFound';
import Layout from '@/components/Layout/Layout';
import PrivatePage from '@/components/PrivatePage/PrivatePage';

import '@/styles/index.scss';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.index} element={<Layout />}>
            <Route
              path={AppRoutes.index}
              element={
                <PrivatePage>
                  <AppPage title='Home page'>
                    <Home />
                  </AppPage>
                </PrivatePage>
              }
            />

            <Route
              path={AppRoutes.register}
              element={
                <AppPage shouldRedirectIfAuth title='Sign up'>
                  <RegisterPage />
                </AppPage>
              }
            />

            <Route
              path={AppRoutes.activate}
              element={
                <AppPage title='Account activation'>
                  <ActivationPage />
                </AppPage>
              }
            >
              <Route
                path={AppRoutes.activateRequest}
                element={
                  <AppPage title='Activating...'>
                    <Activation />
                  </AppPage>
                }
              />
            </Route>
            <Route
              path={AppRoutes.login}
              element={
                <AppPage shouldRedirectIfAuth title='Login'>
                  <LoginPage />
                </AppPage>
              }
            />
            <Route path={AppRoutes.upload} element={<UploadPage />} />
            <Route
              path={AppRoutes.profile}
              element={
                <PrivatePage>
                  <AppPage title='My profile'>
                    <UserProfilePage />
                  </AppPage>
                </PrivatePage>
              }
            />
            <Route
              path={AppRoutes.error}
              element={
                <AppPage title='Error'>
                  <ErrorNotFound />
                </AppPage>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
