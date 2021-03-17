import React, { forwardRef, FC } from 'react';
import { Grid } from '@material-ui/core';

import { BuildingListPropsType } from './type';
import {
    <%- content_name_pascal %>ListRoot,
    <%- content_name_pascal %>CardImage,
    <%- content_name_pascal %>Card,
    <%- content_name_pascal %>CardTitle,
} from './style';
import { use<%- content_name_pascal %>List } from './hooks/use<%- content_name_pascal %>List';

export const Content_name_pascalList: FC<BuildingListPropsType> = forwardRef(
    function BuildingList(props, ref) {
        const { rootProps, data } = use<%- content_name_pascal %>List(ref, props);

        return (
            <<%- content_name_pascal %>ListRoot {...rootProps}>
                <Grid container spacing={3}>
                    {data.map((building) => {
                        const buildingData = building.node.frontmatter;
                        let headerImage =
                            buildingData.headerImage === undefined ||
                            buildingData.headerImage === ''
                                ? 0
                                : parseInt(buildingData.headerImage, 10);
                        if (Number.isNaN(headerImage)) {
                            headerImage = 0;
                        }

                        const picture = buildingData.images[headerImage].image;
                        return (
                            <Grid
                                item
                                md={4}
                                sm={6}
                                xs={12}
                                key={buildingData.path}
                            >
                                <<%- content_name_pascal %>Card to={buildingData.path}>
                                    <<%- content_name_pascal %>CardImage
                                        sizes={picture.childImageSharp.fluid}
                                    />
                                    <<%- content_name_pascal %>CardTitle>
                                        {buildingData.shortTitle}
                                    </<%- content_name_pascal %>CardTitle>
                                </<%- content_name_pascal %>Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </<%- content_name_pascal %>ListRoot>
        );
    },
);

<%- content_name_pascal %>List.defaultProps = {};
