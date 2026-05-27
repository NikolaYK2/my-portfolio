import {useCallback, useEffect, useRef, useState} from "react";

type UseWaypointOptions = {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useWaypoint = <TElement extends HTMLElement = HTMLElement>(
  {rootMargin = '0px', threshold = 0, triggerOnce = true}: UseWaypointOptions = {}
) => {
  const waypointRef = useRef<TElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const waypointHandlerEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const waypointHandlerLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const target = waypointRef.current;

    if (!target) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      waypointHandlerEnter();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        waypointHandlerEnter();
        if (triggerOnce) {
          observer.disconnect();
        }
        return;
      }

      if (!triggerOnce) {
        waypointHandlerLeave();
      }
    }, {rootMargin, threshold});

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce, waypointHandlerEnter, waypointHandlerLeave]);

  return {isVisible, waypointRef, waypointHandlerEnter, waypointHandlerLeave}
};
