import React, { FC } from 'react';
import { Router } from '@reach/router';
import { SampleClientPage } from '../../clientPages/SampleClientPage';

const Docs: FC = () => {
    return (
        <Router basepath="/app">
            <SampleClientPage path="/code" />
        </Router>
    );
};

export default Docs;
