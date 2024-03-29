import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Home, Catalog, CatalogElement, NotFound } from './pages';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<Home />} />
                    <Route
                        path="catalog/:slug"
                        element={<CatalogElement />}
                    />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
