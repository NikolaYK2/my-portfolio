import {useState} from "react";

export const useWaypoint = () => {
  const [visible, setVisible] = useState(false);
  const waypointHandlerEnter = () => {
    setVisible(true)
  }
  const waypointHandlerLeave = () => {
    setVisible(false)
  }

  return {visible, waypointHandlerEnter, waypointHandlerLeave}
};
