import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useShowLayout } from '../lib/useShowLayout';

export const CatalogElement: FC = () => {
    const { slug } = useParams();
    const showLayout = useShowLayout();

    return (
        <Container maxWidth="lg">
            {showLayout && <Typography pageTitle>Catalog</Typography>}
            Hello
        </Container>
    );
};
