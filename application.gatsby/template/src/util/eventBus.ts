type EventBusCallbackType = (event: CustomEvent<unknown>) => void;

export const eventBus = {
    on: (eventName: string, fn: EventBusCallbackType) => {
        document.addEventListener(
            eventName,
            fn as EventListenerOrEventListenerObject,
        );
    },
    off: (eventName: string, fn: EventBusCallbackType) => {
        document.removeEventListener(
            eventName,
            fn as EventListenerOrEventListenerObject,
        );
    },
    dispatch: (eventName: string, data?: unknown) => {
        document.dispatchEvent(new CustomEvent(eventName, { detail: data }));
    },
};
