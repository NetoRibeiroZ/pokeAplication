import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPokeComponent } from './main-poke.component';

describe('MainPokeComponent', () => {
  let component: MainPokeComponent;
  let fixture: ComponentFixture<MainPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
