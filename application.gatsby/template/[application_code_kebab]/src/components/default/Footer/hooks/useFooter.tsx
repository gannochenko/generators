export const useFooter = () => {
    const gALink = process.env.GA_LINK;
    const deploymentLink = process.env.DEPLOYMENT_LINK;

    return {
        showGALinkLink: !!gALink,
        gALink,
        showDeploymentLink: !!deploymentLink,
        deploymentLink,
    };
};
