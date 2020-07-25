import React, { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react';

import { CustomWindow, SplashScreenPropsType } from './type';

declare const window: CustomWindow;

export const SplashScreen: FunctionComponent<SplashScreenPropsType> = observer(
    ({ state }) => {
        useEffect(() => {
            if (
                window.splash &&
                !window.splashProgressBarUnlocked &&
                state.applicationReady
            ) {
                window.splash.dismiss();
                window.splashProgressBarUnlocked = true;
            }
        }, [window, state.applicationReady]);

        return null;
    },
);
