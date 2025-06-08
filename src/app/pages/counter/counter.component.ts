import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush, // Con esto se desactiva Zone.js y solo funciona con Signals
})
export class CounterComponent {
  counter: number = 10;
  counterSignal = signal(10);

  // Si se desactiva zone.js y se ejecuta un signal, este actualizara el estado que
  // no usa signals

  constructor() {
    // setInterval(() => {
    //   this.counter += 1;
    //   this.counterSignal.update((currentValue) => currentValue + 1);
    //   console.log('Tick');
    // }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((currentValue) => currentValue + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((currentValue) => currentValue - value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
