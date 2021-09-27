import React, { FC } from 'react';

import { Container, PageOffset, LiveSnippet } from '../components';
import { PageLayout } from '../components/default/PageLayout';

type CodePagePropsType = {
    path: string;
};

export const CodePage: FC<CodePagePropsType> = () => {
    return (
        <PageLayout
            title="Button"
            keywords="one, two"
            description="JS Page description"
        >
            <Container>
                <LiveSnippet />
            </Container>
            <PageOffset />
        </PageLayout>
    );
};
