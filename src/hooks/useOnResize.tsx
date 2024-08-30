"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
// a very basic hooks for screen resize
const useOnResize = () => {
  const [widthScreen, setWidthScree] = useState(0);
  const [width] = useDebounce(widthScreen, 300);

  useEffect(() => {
    const onResize = () => setWidthScree(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
};

export default useOnResize;
