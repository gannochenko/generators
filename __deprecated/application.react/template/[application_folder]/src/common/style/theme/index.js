import { createTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

export const theme = createTheme({
    palette,
    typography,
    overrides,
    shape: {
        borderRadius: 2,
    },
});
