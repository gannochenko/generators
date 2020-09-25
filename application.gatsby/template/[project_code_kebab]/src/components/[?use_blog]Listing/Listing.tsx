import React, { useCallback, FunctionComponent } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';

import { Copy } from './style';
import { ListingPropsType } from './type';
import { listingBashTheme, listingDefaultTheme } from './prism-theme';
import { CodeContainer } from './components/CodeContainer';

export const Listing: FunctionComponent<ListingPropsType> = ({ children }) => {
    const { props } = children;

    const className = props.className || '';
    const linesCount = (props.children || '').split('\n').length;

    const matches = className.match(/language-(?<lang>.*)/);
    const { groups: { lang = 'js' } = {} } = matches || {};

    const theme = lang === 'bash' ? listingBashTheme : listingDefaultTheme;
    const wide = lang === 'bash' || linesCount > 30;
    const keyColor = theme.styles[3].style.color;
    const { bashRoot } = props;

    let blockKey = '';
    if (lang === 'bash') {
        blockKey = '$';
        if (bashRoot) {
            blockKey = '#';
        }
    }

    const onCopyClick = useCallback(() => {
        copy(props.children);
    }, []);

    return (
        <CodeContainer
            bgColor={theme.plain.backgroundColor!}
            wide={wide}
            codeKeyColor={keyColor!}
            blockKey={blockKey}
        >
            <Copy onClick={onCopyClick} />
            <Highlight
                {...defaultProps}
                theme={theme}
                code={props.children}
                language={lang}
            >
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                }) => (
                    <pre className={`${className} line-numbers`} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })} key={i}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} key={key} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </CodeContainer>
    );
};
