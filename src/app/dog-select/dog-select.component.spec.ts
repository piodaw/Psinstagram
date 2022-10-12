import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogSelectComponent } from './dog-select.component';

describe('DogSelectComponent', () => {
  let component: DogSelectComponent;
  let fixture: ComponentFixture<DogSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
