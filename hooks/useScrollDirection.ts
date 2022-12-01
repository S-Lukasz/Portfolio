import { useState, useEffect } from "react";

const STEP_TO_CHECK = 10;

export function useScrollDirection() {

    const [scrollDirection, setScrollDirection] = useState<string>("");
    const [yOffset, setYOffset] = useState<number>(0);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
  
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > STEP_TO_CHECK || scrollY - lastScrollY < -STEP_TO_CHECK)
        ) {
          setScrollDirection(direction);
        }
  
        lastScrollY = scrollY > 0 ? scrollY : 0;
        setYOffset(scrollY);
      };
  
      window.addEventListener("scroll", updateScrollDirection);
  
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);
  
    return { scrollDirection, yOffset };
  }