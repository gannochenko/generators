import React, { forwardRef, FC } from 'react';
import { Grid } from '@material-ui/core';

import { BuildingListPropsType } from './type';
import {
    BuildingListRoot,
    BuildingCardImage,
    BuildingCard,
    BuildingCardTitle,
} from './style';
import { useBuildingList } from './hooks/useBuildingList';

export const BuildingList: FC<BuildingListPropsType> = forwardRef(
    function BuildingList(props, ref) {
        const { rootProps, data } = useBuildingList(ref, props);

        return (
            <BuildingListRoot {...rootProps}>
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
                                <BuildingCard to={buildingData.path}>
                                    <BuildingCardImage
                                        sizes={picture.childImageSharp.fluid}
                                    />
                                    <BuildingCardTitle>
                                        {buildingData.shortTitle}
                                    </BuildingCardTitle>
                                </BuildingCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </BuildingListRoot>
        );
    },
);

BuildingList.defaultProps = {};
