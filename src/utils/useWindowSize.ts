import { useEffect, useState } from "react";

export type WindowSizeData = {
    width: number | undefined;
    height: number | undefined;
}

/**
 * The `useWindowSize` custom hook in TypeScript allows you to track and retrieve the current width and
 * height of the browser window.
 * @returns The `useWindowSize` custom hook is returning an object containing the current width and
 * height of the window. The object has the following structure: `{ width: number, height: number }`.
 */
export const useWindowSize = () => {
    const [windowsSize, setWindowsSize] = useState<WindowSizeData>({ width: undefined, height: undefined });

    useEffect(() => {
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return removeEventListener('reset', handleResize);
    }, []);
    // Handler to call on window resize
    const handleResize = () => {
        // Set window width/height to state
        setWindowsSize({ width: window.innerWidth, height: innerHeight });
    }

    return windowsSize;
}

export const MOBILE_MAX_WIDTH = 600;
/* The `useMobileScreen` function is a custom hook that utilizes the `useWindowSize` hook to determine
if the current window width is less than or equal to a predefined constant `MOBILE_MAX_WIDTH`.
Here's a breakdown of what it does: */
export const useMobileScreen = () => {
    const { width } = useWindowSize();
    if (width) {
        return width <= MOBILE_MAX_WIDTH;
    }
}