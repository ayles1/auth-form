import { AppRoutes } from '@/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ActivationPage from '@/pages/ActivationPage';
import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import UploadPage from '@/pages/UploadPage';

import Activation from '@/components/activation/Activation';
import ErrorNotFound from '@/components/error/ErrorNotFound';
import Layout from '@/components/layout/Layout';
import AppPage from '@/components/page/AppPage';
import PrivatePage from '@/components/private/PrivatePage';



import '@/styles/global.scss';
import '@/styles/reset.scss';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoutes.index} element={<Layout/>}>
                    <Route
                        path={AppRoutes.index}
                        element={
                            <PrivatePage>
                                <AppPage title={'Home page'}>
                                    <Home/>
                                </AppPage>
                            </PrivatePage>
                        }
                    />

                    <Route
                        path={AppRoutes.register}
                        element={
                            <AppPage shouldRedirectIfAuth title={'Sign up'}>
                                <RegisterPage/>
                            </AppPage>
                        }
                    />

                    <Route path={AppRoutes.activate}
                           element={
                               <AppPage title={'Account activation'}>
                                   <ActivationPage/>
                               </AppPage>
                           }>
                        <Route path={AppRoutes.activateRequest} element={
                            <AppPage title={'Activating...'}>
                                <Activation/>
                            </AppPage>
                        }/>
                    </Route>
                    <Route
                        path={AppRoutes.login}
                        element={
                            <AppPage shouldRedirectIfAuth title={'Login'}>
                                <LoginPage/>
                            </AppPage>
                        }
                    />
                    <Route path={AppRoutes.upload} element={<UploadPage/>}/>
                    <Route
                        path={AppRoutes.error}
                        element={
                            <AppPage title={'Error'}>
                                <ErrorNotFound/>
                            </AppPage>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;