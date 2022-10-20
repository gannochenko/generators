import React, { FC } from 'react';

import { Container, PageOffset } from '../components';
import { PageLayout } from '../components/default/PageLayout';

type SampleClientPagePropsType = {
    path: string;
};

export const SampleClientPage: FC<SampleClientPagePropsType> = () => {
    return (
        <PageLayout
            title="Sample Client Page"
            keywords="one, two"
            description="Sample Client Page description"
        >
            <Container>
                Hello
            </Container>
            <PageOffset />
        </PageLayout>
    );
};
