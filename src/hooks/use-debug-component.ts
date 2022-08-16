import { useEffect, useRef } from "react";

type ChangesRecord = {
    from?: unknown,
    to?: unknown
};

const useDebugComponent = <T extends Object>(name: string, props: T): void => {
    const previousProps = useRef<T>();

    // Alex: use map instead.
    useEffect(() => {
        if (previousProps.current) {
            const allKeys = Object.keys({ ...(previousProps.current as Object), ...props });

            // Alex: using maps: const changes = new Map<string, {[key: string]: any}>
            const changesObj: ChangesRecord = {};
            allKeys.forEach(key => {
                if (previousProps.current &&
                    previousProps.current[key as keyof typeof props] !== props[key as keyof typeof props]) {
                    changesObj[key as keyof typeof changesObj] = {
                        from: previousProps.current[key as keyof typeof props],
                        to: props[key as keyof typeof props]
                    }
                }
            });
            if (Object.keys(changesObj).length) {
                console.log("Debug Component props for: ", name);
                console.table(changesObj);
            }
        }

        previousProps.current = props;
    });

}

export default useDebugComponent;