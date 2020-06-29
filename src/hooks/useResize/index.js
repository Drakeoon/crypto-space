import { useState, useEffect } from "react";

const useResize = (elementRef) => {
  const [elementClass, setElClass] = useState("");

  useEffect(() => {
    if (!elementRef.clientWidth) {
      return;
    }

    if ("ResizeObserver" in window) {
      const breakpoints = { SM: 384, MD: 576, LG: 768, XL: 960 };

      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          Object.entries(breakpoints).forEach(([breakpoint, minWidth]) => {
            setElClass((elClass) => `${elClass}`.replace(breakpoint, ""));

            if (entry.contentRect.width >= minWidth) {
              setElClass((elClass) => `${elClass} ${breakpoint}`);
            }
          });
        });
      });

      observer.observe(elementRef);
    }
  }, [elementRef.clientWidth]);

  return elementClass.trim();
};

export default useResize;
