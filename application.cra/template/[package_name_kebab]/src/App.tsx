import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from './components/Layout';
import { ScrollTop } from './components/ScrollTop';
import { useShowLayout } from './lib/useShowLayout';

export const App: FC = () => {
    const showLayout = useShowLayout();
    return (
        <>
            <ScrollTop />
            {showLayout && (
                <Layout>
                    <Outlet />
                </Layout>
            )}
            {!showLayout && <Outlet />}
        </>
    );
};
