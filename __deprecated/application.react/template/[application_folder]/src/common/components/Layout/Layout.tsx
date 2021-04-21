import React, { FunctionComponent } from 'react';
import { TripleVerticalLayout } from '@gannochenko/ui';
import { CentralContainer } from './style';

import { LayoutProperties } from './type';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { CookiePopup } from '../CookiePopup';

export const Layout: FunctionComponent<LayoutProperties> = ({
    children,
    topPadding,
    bottomPadding,
}) => (
    <TripleVerticalLayout header={<Header />} footer={<Footer />}>
        <CentralContainer topPadding={topPadding} bottomPadding={bottomPadding}>
            {children}
        </CentralContainer>
        <CookiePopup />
    </TripleVerticalLayout>
);

Layout.defaultProps = {
    topPadding: true,
    bottomPadding: true,
};
