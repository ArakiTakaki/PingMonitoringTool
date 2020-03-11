
export const ERROR = {
  MATCH_NOT_HOUND_EXCEPTION: (trace: string) => new Error(`Mtch not hound exception ${trace}`),
  UNKNOWN_SERVER_EXCEPTION: (trace: string) => new Error(`Server is UNKNOWN Exception. \n server addr => ${trace}`),
  IS_NAN_EXCEPTION:  (trace: string) => new Error(`is NAN Exception ${trace}`),
};