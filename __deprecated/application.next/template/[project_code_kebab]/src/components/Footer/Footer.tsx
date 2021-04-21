import { FunctionComponent } from 'react';

import { FooterRoot, Copyright, Links } from './style';
import { FooterPropsType } from './type';
import { Container } from '../Container';
import { Link } from '../Link';
import { meta } from '../../meta';

export const Footer: FunctionComponent<FooterPropsType> = ({
   ...restProps
}) => {
    return (
        <FooterRoot {...restProps}>
            <Container contentAlign="center">
                <Copyright>
                    &copy; then &mdash; now &laquo;{meta.application.name}&raquo;
                </Copyright>
                <Links variant="body2">
                    <Link href="/cookie-policy">Cookie policy</Link>
                </Links>
            </Container>
        </FooterRoot>
    );
};
