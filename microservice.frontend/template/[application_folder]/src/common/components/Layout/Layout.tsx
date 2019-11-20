import React, { FunctionComponent } from 'react';
import { VerticalTriplet } from 'ew-internals-ui';

import {
    Top,
    Footer,
    Logo,
    Header,
    Title,
    Central,
} from './style';
import { LayoutProperties } from './type';

export const Layout: FunctionComponent<LayoutProperties> = ({
                                                                children,
                                                                title = 'Untitled page',
                                                            }) => (
    <VerticalTriplet
        top={
            <Top>
                <Central>
                    <Logo to="/">
                        <div>L</div>
                    </Logo>
                </Central>
            </Top>
        }
        bottom={
            <Footer>
                <Central>
                    &copy; 2019 &laquo;
                    <
                    %- applicationName %>&raquo; team
                </Central>
            </Footer>
        }
    >
        <Central>
            <Header>
                <Title>{title}</Title>
            </Header>
            {children}
        </Central>
    </VerticalTriplet>
);
