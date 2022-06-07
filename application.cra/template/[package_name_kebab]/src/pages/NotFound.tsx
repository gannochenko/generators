import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => (
    <Container maxWidth="lg">
        <Typography pageTitle>Page not found</Typography>
        <Link to="/">Back home</Link>
    </Container>
);
