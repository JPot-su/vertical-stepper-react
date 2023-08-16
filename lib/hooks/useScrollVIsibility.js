import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useScrollVisibility(ref, successOnScrollEnable) {
    const [isScrolled, setIsScrolled] = useState(false);

    const [isTop, setIsTop] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    const getElRectAndWindowHeight = useCallback(function (el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return { rect, windowHeight };
    }, [])

    const [_successOnScrollEnable, _setSuccessOnScrollEnable] = useState();

    useEffect(() => {
        _setSuccessOnScrollEnable(successOnScrollEnable);

        if (successOnScrollEnable) {
            function handleClick() {
                if (!_successOnScrollEnable) {
                    _setSuccessOnScrollEnable(true);
                }
            }

            window.addEventListener("click", handleClick);
            return () => window.removeEventListener("click", handleClick);
        }
    }, [successOnScrollEnable, _successOnScrollEnable])

    const handleScroll = useCallback(function () {
        if (isScrolled) return;

        if (isTop && isBottom) {
            setIsScrolled(true);
            return;
        }

        const el = ref.current;
        const { rect, windowHeight } = getElRectAndWindowHeight(el);

        if (rect.height < windowHeight) {
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                setIsTop(true);
                setIsBottom(true);
            }
        } else {
            if (el && !isTop && rect.top <= 0) {
                setIsTop(true);
            }
            if (el && !isBottom && rect.bottom <= windowHeight) {
                setIsBottom(true);
            }
        }
    }, [isTop, isBottom, isScrolled])

    useEffect(() => {
        if (_successOnScrollEnable && !isScrolled) {
            handleScroll();

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        };
    }, [ref, isScrolled, handleScroll, _successOnScrollEnable])

    return isScrolled;
}