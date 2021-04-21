import React, { useContext } from 'react';

import { State } from './state';
import { Nullable } from '../../type';

type NullableState = Nullable<State>;

export type StatePropsType = {
    state: State;
};

export const StateContext = React.createContext<NullableState>(null);

export const StateProvider = StateContext.Provider;

export const useGlobalState = () => useContext<NullableState>(StateContext);
