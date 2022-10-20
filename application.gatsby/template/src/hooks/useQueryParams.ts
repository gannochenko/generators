import { useLocation } from '@reach/router';

export const useQueryParams = () => {
    // https://reach.tech/router/api/useLocation
    const location = useLocation();
    return new URL(location.href).searchParams;
};
