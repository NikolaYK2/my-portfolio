import {useState} from "react";

export const useWaypoint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const waypointHandlerEnter = () => {
    setIsVisible(true)
  }
  const waypointHandlerLeave = () => {
    setIsVisible(false)
  }

  return {isVisible, waypointHandlerEnter, waypointHandlerLeave}
};
