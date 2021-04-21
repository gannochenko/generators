import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react';
import { PageLoadProgress } from '@gannochenko/ui';

import { PageProgressPropsType } from './type';
import { Container, Bar } from './style';

export const PageProgress: FunctionComponent<PageProgressPropsType> = observer(
    ({ state }) => (
        <PageLoadProgress loading={state.applicationLoading}>
            {({ progress, shown, fading }) => (
                <Container>
                    {shown && <Bar progress={progress} fading={fading} />}
                </Container>
            )}
        </PageLoadProgress>
    ),
);
