import React, { FC } from 'react';
import { Router } from '@reach/router';
import { CodePage } from '../../clientPages/code';

const Docs: FC = () => {
    return (
        <Router basepath="/docs">
            <CodePage path="/code" />
        </Router>
    );
};

export default Docs;
