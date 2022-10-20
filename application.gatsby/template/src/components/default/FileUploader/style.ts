import styled from '@emotion/styled';
import {
    absoluteCover,
    marginProps,
    muiColor,
    muiSpacing,
    muiTypography,
    reset,
} from '@gannochenko/ui.emotion';

import { FileUploaderRootPropsType } from './type';
import { borderRadius, transition } from '../../../style';
import { Button } from '@mui/material';

export const FileUploaderRoot = styled.div<FileUploaderRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const FileUploaderFiles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${muiSpacing(2)};
    max-height: ${muiSpacing(62)};
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
`;

export const FileUploaderActions = styled.div`
    margin-top: ${muiSpacing(3)};
`;

export const FileUploaderActionButtons = styled.div`
    margin-top: ${muiSpacing(2)};
`;

export const FileSelectorButton = styled.button`
    width: ${muiSpacing(30)};
    height: ${muiSpacing(30)};
    padding: ${muiSpacing(2)};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${borderRadius()};
    border: 1px solid ${muiColor('primary.main')};
    ${muiTypography('h1')};
    color: ${muiColor('primary.main')};
    background-color: ${muiColor('background.default')};
    &:hover {
        color: ${muiColor('primary.dark')};
        border-color: ${muiColor('primary.dark')};
    }
    &:disabled {
        color: ${muiColor('grey.400')};
        border-color: ${muiColor('grey.400')};
        cursor: default;
    }
    ${transition({ color: true, 'border-color': true })};
`;

export const DragDropZoneIndicator = styled.div`
    ${absoluteCover()};
    border: 1px solid ${muiColor('primary.main')};
    background-color: ${muiColor('primary.light')};
    opacity: 0.6;
    ${borderRadius()};
`;

export const CloseDialogButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    width: ${muiSpacing(10)};
    height: ${muiSpacing(10)};
    padding: 0;
    min-width: 0;
    box-shadow: none !important;
`;
