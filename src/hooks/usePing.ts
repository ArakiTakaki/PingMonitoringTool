import { PingDriver, PingReturnProps, PingDriverOptions } from "../driver/PingDriver";
import { useState, useEffect } from "react";

type IUseLoopPingOptions = PingDriverOptions & {
  interval: number;
};

export const useLoopPing = (options: IUseLoopPingOptions) => {
  const [pingPrams, setPingParams] = useState({time: 0, state: '', color: '#00F'});
  useEffect(() => {
    let id = 0;
    const loop = async () => {
      const [time, state, color] = await PingDriver({ accessURL: options.accessURL });
      setPingParams({ time: time , state: state, color: color});
      id = window.setTimeout(loop, options.interval);
      
    }
    loop();

    return () => {
      window.clearTimeout(id);
    }
  }, []);
  return pingPrams;
};
