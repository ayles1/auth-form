import { AppRoutes } from '@/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import UploadPage from '@/pages/UploadPage';

import ErrorNotFound from '@/components/error/ErrorNotFound';
import Layout from '@/components/layout/Layout';
import PrivatePage from '@/components/private/PrivatePage';

import '@/styles/global.scss';
import '@/styles/reset.scss';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoutes.index} element={<Layout />}>
                    <Route
                        path={AppRoutes.index}
                        element={
                            <PrivatePage>
                                <Home />
                            </PrivatePage>
                        }
                    />
                    <Route path={AppRoutes.signUp} element={<LoginPage />} />
                    <Route path={AppRoutes.login} element={<LoginPage />} />
                    <Route path={AppRoutes.upload} element={<UploadPage />} />
                    <Route path={AppRoutes.error} element={<ErrorNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;