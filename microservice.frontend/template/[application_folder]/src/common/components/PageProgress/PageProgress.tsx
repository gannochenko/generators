import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { PageLoadProgress } from '@gannochenko/ui';

import { PageProgressPropsType } from './type';
import { Container, Bar } from './style';
import { ObjectLiteral } from '../../../type';

export const PageProgressComponent: FunctionComponent<PageProgressPropsType> = ({
    state,
}) => (
    <PageLoadProgress state={state} observeGlobalLock>
        {({ progress, shown, fading }) => (
            <Container>
                {shown && <Bar progress={progress} fading={fading} />}
            </Container>
        )}
    </PageLoadProgress>
);

export const PageProgress = connect((state: ObjectLiteral) => ({ state }))(
    PageProgressComponent,
);
