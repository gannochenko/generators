import { StatePropsType } from '../../state/context';

export type SplashScreenPropsType = StatePropsType;

export interface CustomWindow extends Window {
    splash?: {
        dismiss: () => void;
    };
    splashProgressBarUnlocked: boolean;
}
