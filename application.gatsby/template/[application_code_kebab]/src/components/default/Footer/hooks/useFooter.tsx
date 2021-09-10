export const useFooter = () => {
    let gALink = process.env.GA_LINK;
    let deploymentLink = process.env.DEPLOYMENT_LINK;

    return {
        showGALinkLink: !!gALink,
        gALink,
        showDeploymentLink: !!deploymentLink,
        deploymentLink,
    };
};
