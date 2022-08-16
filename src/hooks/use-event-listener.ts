import { useEffect, useRef } from "react";

type EventHandler = (e: Event) => void;

const useEventListener = (eventName: string, handler: EventHandler, element: HTMLElement | Window = window) => {
    const savedHandler = useRef<(e: Event) => void>();
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const isSuported = element && element.addEventListener;
        if (!isSuported) {
        }

        const eventListener: EventHandler = (event) => savedHandler.current!(event);
        element.addEventListener(eventName, eventListener);
        return () => {
            element.removeEventListener(eventName, eventListener);
        }
    }, [eventName, element]);
}

export default useEventListener;