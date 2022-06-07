import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import * as snippets from '../snippets';

export const Catalog: FC = () => {
    return (
        <Container maxWidth="lg">
            <>
                <Typography pageTitle>Catalog</Typography>
                <Box marginTop={2}>
                    {Object.keys(snippets).map((component) => (
                        <Box key={component} marginBottom={5}>
                            <RouterLink to={`/catalog/${component}`}>
                                {component}
                            </RouterLink>
                        </Box>
                    ))}
                </Box>
            </>
        </Container>
    );
};
