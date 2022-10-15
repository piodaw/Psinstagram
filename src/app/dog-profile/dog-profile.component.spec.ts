import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DogProfileComponent } from './dog-profile.component';

describe('DogProfileComponent', () => {
  let component: DogProfileComponent;
  let fixture: ComponentFixture<DogProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogProfileComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a image', () => {
    const image = fixture.nativeElement.querySelector('img');
    expect(image).toBeTruthy();
  });
});
