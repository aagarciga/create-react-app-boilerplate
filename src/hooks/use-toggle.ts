import { useCallback, useState } from "react";

/**
 * Basically, what this hook does is that, it takes a parameter with value true or false 
 * and toggles that value to opposite. It's useful when we want to take some action into 
 * it's opposite action, for example: show and hide modal, show more/show less text, 
 * open/close side menu.
 * 
 * @param initialState 
 * @returns Array
 * 
 * @example
 * () => {
 *  const [isToggled, toggle] = useToggle();
 * 
 *  return (
 *      <button onClick={toggle}>{isToggled ? 'Toggled' : 'Click to Toggle'}</button>
 *  )
 * }
 */
const useToggle = (initialState: boolean = false): [boolean, any] => {
    const [state, setState] = useState<boolean>(initialState);

    const toggleHandler = useCallback(
        (): void => {
            setState(state => !state);
        },
        [],
    );

    return [state, toggleHandler];
}

export default useToggle;