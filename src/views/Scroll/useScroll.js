import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState({
        x: 0,
        y: 0
    });

    const onScroll = event => {
        setScrollPosition({ x: window.scrollX, y: window.scrollY });
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onscroll);
    }, []);

    return scrollPosition;
}