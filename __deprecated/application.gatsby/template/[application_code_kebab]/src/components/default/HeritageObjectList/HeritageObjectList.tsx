import React, { forwardRef } from 'react';
import { Grid, Pagination } from '@mui/material';
import { HeritageObjectListPropsType } from './type';
import { HeritageObjectListRoot } from './style';
import {
    HeritageObjectListItem,
    HeritageObjectListItemImage,
    HeritageObjectListItemName,
    HeritageObjectListNext,
} from './style';
import { useHeritageObjectList } from './hooks/useHeritageObjectList';
import { Categories } from '../Categories';

export const HeritageObjectList = forwardRef<
    HTMLDivElement,
    HeritageObjectListPropsType
>(function HeritageObjectList(props, ref) {
    const { rootProps, data, paginationProps, nextPageProps } =
        useHeritageObjectList(ref, props);

    return (
        <HeritageObjectListRoot {...rootProps}>
            <Categories marginBottom={5} />
            <Grid container spacing={3}>
                {data.map((item) => {
                    const { slug, name, image, path } = item;

                    return (
                        <Grid item md={4} sm={6} xs={12} key={slug}>
                            <HeritageObjectListItem to={path}>
                                {!!image && (
                                    <HeritageObjectListItemImage
                                        image={image}
                                        alt={name}
                                    />
                                )}
                                <HeritageObjectListItemName>
                                    {name}
                                </HeritageObjectListItemName>
                            </HeritageObjectListItem>
                        </Grid>
                    );
                })}
                <Grid item md={4} sm={6} xs={12}>
                    <HeritageObjectListNext {...nextPageProps} />
                </Grid>
            </Grid>
            <br />
            <Pagination {...paginationProps} />
        </HeritageObjectListRoot>
    );
});
