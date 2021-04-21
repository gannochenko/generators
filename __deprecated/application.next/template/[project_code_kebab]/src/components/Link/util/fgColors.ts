import { foregroundColor } from '../../../styles/mixins';
import { ObjectLiteralType } from '../../../type';

export const fgColors = ({
    inverse,
    theme,
}: {
    inverse?: boolean;
    theme: ObjectLiteralType;
}) => {
    if (inverse) {
        return foregroundColor(theme.palette.white, theme.palette.white);
    }

    return foregroundColor(
        theme.palette.secondary.main,
        theme.palette.secondary.dark,
        '200ms',
    );
};
