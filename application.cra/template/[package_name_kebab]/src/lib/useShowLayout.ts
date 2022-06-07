import { useSearchParams } from 'react-router-dom';

export const useShowLayout = () => {
    const [searchParams] = useSearchParams();
    const layout = searchParams.get('layout');

    return layout !== '0';
};
