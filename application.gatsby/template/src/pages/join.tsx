import React, { FC, useMemo } from 'react';
import { useLocation } from '@reach/router';

import { Container, PageOffset, Join } from '../components';
import { PageLayout } from '../components/default/PageLayout';

type JoinPagePropsType = Record<string, string>;

const JoinPage: FC<JoinPagePropsType> = () => {
    const location = useLocation();
    const [token, email] = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);

        return [
            searchParams.get('token') ?? '',
            searchParams.get('email') ?? '',
        ];
    }, [location]);

    return (
        <PageLayout title="Присоединиться">
            <Container>
                <Join token={token} email={email} />
            </Container>
            <PageOffset />
        </PageLayout>
    );
};

export default JoinPage;
