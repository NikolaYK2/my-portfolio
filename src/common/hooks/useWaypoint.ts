import {useState} from "react";

export const useWaypoint = () => {
  const [visible, setVisible] = useState(false);

  const waypointHandler = () => {
    setVisible(true)
  }

  return {visible, waypointHandler}
};
