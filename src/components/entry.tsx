import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useLoopPing } from '../hooks/usePing';
import { GLOBAL_CONFIG } from '../constants/config';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'inline-block',
    transitionProperty: 'transform, background-color',
    transformOrigin: 'left',
    width: '10px',
    height: '20px',
  },
  ms: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    fontSize: 15,
    fontWeight: 'bold',
    zIndex: 10,
  },
  text: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 10,
  }
});
const Sample: React.SFC<{}> = () => {
  const ping = useLoopPing({
    accessURL: GLOBAL_CONFIG.ACCESS_URL,
    interval: GLOBAL_CONFIG.INTERVAL_MILLS,
  });

  return (
    <div className={css(styles.root)}>
      <div 
        style={{
          transitionDuration: `${GLOBAL_CONFIG.INTERVAL_MILLS}ms`,
          transitionTimingFunction: 'linear',
          transform: `scaleX(${ping.time / 10})`,
          backgroundColor: ping.color,
        }}
        className={css(styles.bar)} 
      >
      </div>
      <div 
        className={css(styles.ms)} 
      >
        {ping.time}
      </div>
      <div className={css(styles.text)}>
        {ping.state}
      </div>
    </div>
  );
};

export default Sample;
