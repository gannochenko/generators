import React, { FunctionComponent } from 'react';

import { CodeContainerContainer, CodeKey, Wrapper } from './style';
import { Props } from './type';
import { Container } from '../../../Container';

export const CodeContainer: FunctionComponent<Props> = ({
    children,
    bgColor,
    wide,
    codeKeyColor,
    blockKey,
}) => {
    return (
        <CodeContainerContainer wide={wide} bgColor={bgColor}>
            <Container>
                <Wrapper bgColor={bgColor}>
                    {!!blockKey && (
                        <CodeKey color={codeKeyColor}>{blockKey}</CodeKey>
                    )}
                    {children}
                </Wrapper>
            </Container>
        </CodeContainerContainer>
    );
};
