import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { DogSelectComponent } from './dog-select.component';

describe('DogSelectComponent', () => {
  let component: DogSelectComponent;
  let fixture: ComponentFixture<DogSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogSelectComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain('Wybierz odmianę rasy');
  });
});
