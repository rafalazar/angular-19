import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  })

  capitalizedName = computed(() => this.name().toUpperCase())

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(value: number) {
    this.age.set(value);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
