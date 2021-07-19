import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type MainHeaderPropsType = HTMLAttributes<HTMLDivElement> & {
    backgroundImage: any; // todo: tighten
} & MarginPropsType;

export type MainHeaderRootPropsType = StylePropsType & {
    backgroundImage: any;
};
