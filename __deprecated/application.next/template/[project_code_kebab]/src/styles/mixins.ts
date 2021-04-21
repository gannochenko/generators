import { ScalarType } from '../type';

type AlignmentType =
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'middle'
    | 'flex-start'
    | 'flex-end'
    | 'center';

const trans = (what: string, duration?: ScalarType) => {
    if (!duration || duration <= 0) {
        return '';
    }
    return `transition: ${what} ${duration} ease;`;
};

export const foregroundColor = (
    color = 'inherit',
    hoverColor?: string,
    transitionTime?: ScalarType,
) => `
    color: ${color};
    &:active, &:visited, &:hover {
        color: ${color};
    }
    ${color !== hoverColor ? `&:hover { color: ${hoverColor}; }` : ''}
    ${trans('color', transitionTime)}
`;

export const backgroundColor = (
    color = 'inherit',
    hoverColor?: string,
    focusColor?: string,
    transitionTime?: ScalarType,
) => `
    background-color: ${color};
    &:hover {
      background-color: ${hoverColor || color};
    }
    &:focus {
      background-color: ${focusColor || color};
    }

    ${trans('background-color', transitionTime)}
`;

export const backgroundCover = (image?: string) => `
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    
    ${image ? `background-image: url(${image});` : ''}
`;

export const gap = (verticalGap?: ScalarType, horizontalGap?: ScalarType) => {
    return `
        & > * {
            ${
                verticalGap !== undefined
                    ? `margin-bottom: ${verticalGap};`
                    : ''
            };
            ${
                horizontalGap !== undefined
                    ? `margin-right: ${horizontalGap};`
                    : ''
            }
        }
    
        ${verticalGap !== undefined ? `margin-bottom: -${verticalGap};` : ''}
        ${horizontalGap !== undefined ? `margin-right: -${horizontalGap};` : ''}
    `;
};

const j = (how?: AlignmentType) => {
    if (how === 'start' || how === 'left' || how === 'top') {
        return 'flex-start';
    }
    if (how === 'end' || how === 'right' || how === 'bottom') {
        return 'flex-end';
    }
    if (how === 'middle') {
        return 'center';
    }
    return how;
};

export const align = (
    y?: AlignmentType,
    x?: AlignmentType,
    direction = 'row',
) => {
    x = j(x);
    y = j(y);
    if (direction === 'column' || direction === 'col') {
        return `
            display: flex;
            flex-direction: column;
            ${y !== undefined ? `justify-content: ${y};` : ''}
            ${x !== undefined ? `align-items: ${x};` : ''}
        `;
    }

    return `
        display: flex;
        flex-direction: row;
        ${x !== undefined ? `justify-content: ${x};` : ''}
        ${y !== undefined ? `align-items: ${y};` : ''}
    `;
};
