import React, { FC } from 'react';

import { JoinPropsType } from './type';
import { JoinRoot } from './style';
import { useJoin } from './hooks/useJoin';

export const Join: FC<JoinPropsType> = (props) => {
    const { rootProps } = useJoin(props);

    return <JoinRoot {...rootProps}>Присоединяемся...</JoinRoot>;
};
