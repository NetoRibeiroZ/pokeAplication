import { POKES } from './../../mock.pokes';
import { Component } from '@angular/core';
import { Poke } from 'src/assets/modules/poke.model';

@Component({
  selector: 'app-main-poke',
  templateUrl: './main-poke.component.html',
  styleUrls: ['./main-poke.component.css'],
})
export class MainPokeComponent {
  poke: Poke = {
    id: 20,
    name: 'pikachu',
    link: 'www.pikachu.com',
    image: 'www.pikachu.com',
  };
  pokin = POKES;
}
