import { exec } from 'child_process';
import { ERROR } from './errors';
import clear from 'clear';
import { GLOBAL_CONFIG } from './config';

const stringBar = (barLength: number, barString: string = '-', maxLength?: number) => {
  let str = '';
  for (let i = 0; i < barLength && i < (maxLength || Infinity); i++) {
    str += barString;
  }
  return `${str}`;
}

// 
const pingBarString = (option: {
  accessURL: string,
  barString?: string,
}) => {
  return new Promise((resolve, reject) => {
    exec(`ping ${option.accessURL} -n 1`, (err, stdout) => {
      // validation
      if (err != null) {
        reject(err);
        return;
      }
      const strMsArray = stdout.match(/(\d)+ms/);
      if (strMsArray == null) {
        reject(ERROR.MATCH_NOT_HOUND_EXCEPTION(stdout));
        return;
      }

      const mills = Number(strMsArray[0].replace('ms', ''));
      if (Number.isNaN(mills)) {
        reject(ERROR.IS_NAN_EXCEPTION(strMsArray[0]));
        return;
      }

      const srtMills = `_____${mills.toString()}`.slice(-4);
      // view logick
      resolve(`${srtMills}ms | ${stringBar(mills, GLOBAL_CONFIG.PING_BAR_STRING, 100)}`);
      return;
    });
  })
};

const main = () => {
  const loop = async () => {
    const pingBar = await pingBarString({
      accessURL: GLOBAL_CONFIG.ACCESS_URL,
      barString: GLOBAL_CONFIG.PING_BAR_STRING,
    });
    clear({fullClear: true});
    console.log(`NOW PING - ${GLOBAL_CONFIG.ACCESS_URL}`)
    console.log(pingBar, '\n');
    setTimeout(loop, 1000);
  }
  loop();
};

main();