import React, { forwardRef, FC } from 'react';
import { Grid } from '@material-ui/core';

import { <%- content_name_pascal %>ListPropsType } from './type';
import {
    <%- content_name_pascal %>ListRoot,
    <%- content_name_pascal %>CardImage,
    <%- content_name_pascal %>Card,
    <%- content_name_pascal %>CardTitle,
} from './style';
import { use<%- content_name_pascal %>List } from './hooks/use<%- content_name_pascal %>List';
import { fillTemplate, <%- content_name_snake_uc %>_DETAIL } from '../../pathTemplates';

export const <%- content_name_pascal %>List: FC<<%- content_name_pascal %>ListPropsType> = forwardRef(
    function <%- content_name_pascal %>List(props, ref) {
        const { rootProps, data } = use<%- content_name_pascal %>List(ref, props);

        return (
            <<%- content_name_pascal %>ListRoot {...rootProps}>
                <Grid container spacing={3}>
                    {data.map((item) => {
                        const itemData = item.node.frontmatter;
                        let headerImage =
                            itemData.headerImage === undefined ||
                            itemData.headerImage === ''
                                ? 0
                                : parseInt(itemData.headerImage, 10);
                        if (Number.isNaN(headerImage)) {
                            headerImage = 0;
                        }

                        const { slug, images, shortTitle } = itemData;

                        const path = fillTemplate(<%- content_name_snake_uc %>_DETAIL, { slug });

                        const picture = images[headerImage].image;
                        return (
                            <Grid
                                item
                                md={4}
                                sm={6}
                                xs={12}
                                key={slug}
                            >
                                <<%- content_name_pascal %>Card to={path}>
                                    <<%- content_name_pascal %>CardImage
                                        sizes={picture.childImageSharp.fluid}
                                    />
                                    <<%- content_name_pascal %>CardTitle>
                                        {shortTitle}
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
