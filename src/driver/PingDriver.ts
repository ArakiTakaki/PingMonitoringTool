import { ERROR } from '../constants/errors';
// import clear from 'clear';
import ping from "ping";
import { GLOBAL_CONFIG } from '../constants/config';

export type PingReturnProps = [number, string, string];
export type PingDriverOptions = {
  accessURL: string,
  barString?: string,
};
export const PingDriver =  async (option: PingDriverOptions): Promise<PingReturnProps> => {
  const { time } = await ping.promise.probe(option.accessURL)
  if (time === 'unknown')  throw ERROR.UNKNOWN_SERVER_EXCEPTION(option.accessURL);
  const state = GLOBAL_CONFIG.PING_ALERT_NUM.filter(value => value.NUM < time)[0];
  return [time, state.TAG, state.COLOR];
};