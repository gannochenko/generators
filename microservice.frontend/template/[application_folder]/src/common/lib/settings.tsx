import React from 'react';
import { Settings } from '@bucket-of-bolts/util';

export const createSettings = () => new Settings();
export const SettingsContext = React.createContext(null);
export const withSettings = Component => {
    const WithSettings = props => (
        <SettingsContext.Consumer>
            {value => <Component {...props} settings={value}/>}
        </SettingsContext.Consumer>
    );

    const wrappedComponentName = Component.displayName
        || Component.name
        || 'Component';

    WithSettings.displayName = `withSettings(${wrappedComponentName})`;
    return WithSettings;
};
