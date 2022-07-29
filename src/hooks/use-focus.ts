import { useState } from "react";

const useFocus = (initialValue = false, id = ""): [
    (value: boolean) => void,
    {
        autoFocus: boolean,
        key: string,
        onFocus: () => void,
        onBlur: () => void
    }] => {
    const [focus, setFocus] = useState(initialValue);
    return [
        (value = true) => setFocus(value),
        {
            autoFocus: focus,
            key: `${id}${focus}`,
            onFocus: () => setFocus(true),
            onBlur: () => setFocus(false)
        }
    ];
}

export default useFocus;