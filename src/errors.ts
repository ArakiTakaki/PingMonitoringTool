
export const ERROR = {
  MATCH_NOT_HOUND_EXCEPTION: (trace: string) => new Error(`Mtch not hound exception ${trace}`),
  IS_NAN_EXCEPTION:  (trace: string) => new Error(`is NAN Exception ${trace}`),
};