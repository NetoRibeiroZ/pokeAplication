import { Component, OnInit } from '@angular/core';
import { Poke } from 'src/assets/modules/poke.model';

@Component({
  selector: 'app-main-poke',
  templateUrl: './main-poke.component.html',
  styleUrls: ['./main-poke.component.css'],
})
export class MainPokeComponent implements OnInit {
  poke: Poke = {
    id: 20,
    name: 'pikachu',
    link: 'www.pikachu.com',
    image: 'www.pikachu.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
