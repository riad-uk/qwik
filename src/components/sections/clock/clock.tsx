import { component$, useStore, useStyles$, useClientEffect$ } from '@builder.io/qwik';

import styles from './clock.scss?inline';

interface ClockStore {
  hour: number;
  minute: number;
  second: number;
}
export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore<ClockStore>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useClientEffect$(({ track }) => {
    // here we tell useClientEffect to track the store object above and when ever it changes this will get called again
    track(store);
    updateClock(store);
    // every 1 second the updateClock function is called to update store (the state) above.
    const tmrId = setTimeout(() => updateClock(store), 1000);
    return () => clearTimeout(tmrId);
  });

  return (
    <div class="clock">
      <div class="twelve"></div>
      <div class="three"></div>
      <div class="six"></div>
      <div class="nine"></div>
      <div class="hour" style={{ transform: `rotate(${store.hour}deg)` }}></div>
      <div class="minute" style={{ transform: `rotate(${store.minute}deg)` }}></div>
      <div class="second" style={{ transform: `rotate(${store.second}deg)` }}></div>
    </div>
  );
});

export function updateClock(store: ClockStore) {
  const now = new Date();
  store.second = now.getSeconds() * (360 / 60);
  store.minute = now.getMinutes() * (360 / 60);
  store.hour = now.getHours() * (360 / 12);
}
