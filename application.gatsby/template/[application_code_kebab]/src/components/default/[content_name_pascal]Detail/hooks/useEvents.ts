import { useEffect } from 'react';
import { eventBus } from '../../../../util/eventBus';
import { EventsEnum } from '../../../../util/events';

type UseEventsPropsType = {
    reload: () => void;
};

export const useEvents = ({ reload }: UseEventsPropsType) => {
    useEffect(() => {
        eventBus.on(EventsEnum.OBJECT_DETAIL_RELOAD, reload);

        return () => {
            eventBus.off(EventsEnum.OBJECT_DETAIL_RELOAD, reload);
        };
    }, []);
};
