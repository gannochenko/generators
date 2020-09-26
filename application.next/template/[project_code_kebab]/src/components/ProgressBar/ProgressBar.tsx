import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PageLoadProgress } from '../PageLoadProgress';
import { ProgressBarRoot, Bar } from './style';

let activeRequests = 0;

export const ProgressBar = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const handleStart = (url: string) =>
            url !== router.pathname && setLoading(true);
        const handleComplete = (url: string) =>
            url === router.pathname && setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const originalFetch = window.fetch;
            window.fetch = async function (...args) {
                if (activeRequests === 0) {
                    setLoading(true);
                }

                activeRequests += 1;

                try {
                    const response = await originalFetch(...args);
                    return response;
                } catch (error) {
                    return Promise.reject(error);
                } finally {
                    activeRequests -= 1;
                    if (activeRequests === 0) {
                        setLoading(false);
                    }
                }
            };
        }
    }, []);

    return (
        <PageLoadProgress loading={loading}>
            {({ progress, shown, fading }) => (
                <ProgressBarRoot>
                    {shown && <Bar progress={progress} fading={fading} />}
                </ProgressBarRoot>
            )}
        </PageLoadProgress>
    );
};
