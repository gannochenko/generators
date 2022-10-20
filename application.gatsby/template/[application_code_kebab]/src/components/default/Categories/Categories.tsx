import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'gatsby';

import { CategoriesPropsType } from './type';
import { CategoriesRoot } from './style';
import { useCategories } from './hooks/useCategories';

export const Categories: FC<CategoriesPropsType> = (props) => {
    const { rootProps } = useCategories(props);

    return (
        <CategoriesRoot {...rootProps}>
            <Link to="/heritage/actual">
                <Button disableRipple color="secondary">
                    Существующие
                </Button>
            </Link>
            <Link to="/heritage/lost">
                <Button disableRipple color="secondary">
                    Утраченные
                </Button>
            </Link>
            <Link to="/heritage/okn">
                <Button disableRipple color="secondary">
                    Объекты культурного наследия
                </Button>
            </Link>
        </CategoriesRoot>
    );
};

Categories.defaultProps = {};
