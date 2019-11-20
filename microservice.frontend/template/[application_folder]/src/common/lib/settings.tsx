import React from 'react';
import { Settings } from 'ew-internals';

export const createSettings = () => new Settings();
export const Context = React.createContext(null);
export const withSettings = Component => {
    const WithSettings = props => (
        <Context.Consumer>
            {value => <Component {...props} settings={value}/>}
        </Context.Consumer>
    );

    const wrappedComponentName = Component.displayName
        || Component.name
        || 'Component';

    WithSettings.displayName = `withSettings(${wrappedComponentName})`;
    return WithSettings;
};
