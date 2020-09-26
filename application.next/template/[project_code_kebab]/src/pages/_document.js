import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';
import { theme } from '../styles/theme';
import { reset } from '../styles/reset';
import { meta } from '../meta';

const ASSETS_PATH = '/_next/static/assets';

export default class ApplicationDocument extends Document {
    static async getInitialProps(ctx) {
        const styledComponentSheet = new StyledComponentSheets();
        const materialUiSheets = new MaterialUiServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        styledComponentSheet.collectStyles(
                            materialUiSheets.collect(<App {...props} />),
                        ),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [
                    <React.Fragment key="styles">
                        {initialProps.styles}
                        {materialUiSheets.getStyleElement()}
                        {styledComponentSheet.getStyleElement()}
                    </React.Fragment>,
                ],
            };
        } finally {
            styledComponentSheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="application-name"
                        content={meta.application.name}
                    />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content={meta.application.name}
                    />
                    <meta name="description" content={meta.application.name} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta
                        name="msapplication-config"
                        content={`${ASSETS_PATH}/browserconfig.xml`}
                    />
                    <meta
                        name="msapplication-TileColor"
                        content={theme.palette.primary.main}
                    />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`${ASSETS_PATH}/apple-touch-icon.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={`${ASSETS_PATH}/favicon-32x32.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={`${ASSETS_PATH}/favicon-16x16.png`}
                    />
                    <link
                        rel="manifest"
                        href={`${ASSETS_PATH}/manifest.json`}
                    />
                    {/* <link */}
                    {/*    rel="mask-icon" */}
                    {/*    href="/static/icons/safari-pinned-tab.svg" */}
                    {/*    href={`${ASSETS_PATH}/apple-touch-icon.png`} */}
                    {/*    color="#5bbad5" */}
                    {/* /> */}
                    <link
                        rel="shortcut icon"
                        href={`${ASSETS_PATH}/favicon.ico`}
                    />

                    <meta name="twitter:card" content="summary" />
                    <meta
                        name="twitter:url"
                        content={`https://${meta.domain}`}
                    />
                    <meta
                        name="twitter:title"
                        content={meta.application.name}
                    />
                    <meta
                        name="twitter:description"
                        content={meta.application.description}
                    />
                    <meta
                        name="twitter:image"
                        content={`https://${meta.domain}${ASSETS_PATH}/android-chrome-192x192.png`}
                    />
                    <meta
                        name="twitter:creator"
                        content={meta.twitter.creator}
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={meta.application.name} />
                    <meta
                        property="og:description"
                        content={meta.application.description}
                    />
                    <meta
                        property="og:site_name"
                        content={meta.application.name}
                    />
                    <meta
                        property="og:url"
                        content={`https://${meta.domain}`}
                    />
                    <meta
                        property="og:image"
                        content={`https://${meta.domain}${ASSETS_PATH}/apple-touch-icon.png`}
                    />

                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <style dangerouslySetInnerHTML={reset(theme)} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
