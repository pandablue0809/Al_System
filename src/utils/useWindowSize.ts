import { useEffect, useState } from "react";

export type WindowSizeData = {
    width: number | undefined;
    height: number | undefined;
}

//Hook
const useWindowSize = () => {
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

export default useWindowSize;