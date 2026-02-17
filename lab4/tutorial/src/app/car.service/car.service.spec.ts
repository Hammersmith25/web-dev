import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarService } from './car.service';

describe('CarService', () => {
  let component: CarService;
  let fixture: ComponentFixture<CarService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
