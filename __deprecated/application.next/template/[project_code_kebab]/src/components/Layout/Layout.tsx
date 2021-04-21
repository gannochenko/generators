import { FunctionComponent } from 'react';
import { Body, LayoutRoot, Overflow } from './style';
import { LayoutPropsType } from './type';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ProgressBar } from '../ProgressBar';

export const Layout: FunctionComponent<LayoutPropsType> = ({ children }) => {
    return (
        <LayoutRoot>
            <ProgressBar />
            <Header />
            <Body>
                <Overflow>{children}</Overflow>
            </Body>
            <Footer />
        </LayoutRoot>
    );
};

export default Layout;
