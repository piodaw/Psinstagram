import { TestBed } from '@angular/core/testing'

import { DogService, DogAllPhotosService, RandomDogPhotoService, DogPhotoService } from 'src/app/services/dog.service'

describe('ListOfDogs', () => {
  let service: DogService;

  let dogData = jasmine.createSpyObj('DogService', ['getDogList'])

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: DogService, useValue: dogData}
      ]
    });
    service = TestBed.inject(DogService);
  });

  it('should get dog list', () => {
    service.getDogList();
    expect(dogData.getDogList).toHaveBeenCalled();
  })
});

describe('GetAllPhotosService', () => {
  let service: DogAllPhotosService;

  let dogAllPhotos = jasmine.createSpyObj('DogAllPhotosService', ['getDogAllPhotos'])

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: DogAllPhotosService, useValue: dogAllPhotos}
      ]
    });
    service = TestBed.inject(DogAllPhotosService);
  })

  it('should get all photos of dog', () => {
    service.getDogAllPhotos('hound');
    expect(dogAllPhotos.getDogAllPhotos).toHaveBeenCalled();
  })
})

describe('GetRandomPhotoService', () => {
  let service: RandomDogPhotoService;

  let randomPhoto = jasmine.createSpyObj('RandomDogPhotoService', ['getRandomDogPhoto'])

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: RandomDogPhotoService, useValue: randomPhoto}
      ]
    });
    service = TestBed.inject(RandomDogPhotoService);
  })

  it('should get random photo of dog', () => {
    service.getRandomDogPhoto();
    expect(randomPhoto.getRandomDogPhoto).toHaveBeenCalled();
  })
})

describe('GetDogPhotoService', () => {
  let service: DogPhotoService;

  let dogPhoto = jasmine.createSpyObj('DogPhotoService', ['getDogPhoto'])

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: DogPhotoService, useValue: dogPhoto}
      ]
    });
    service = TestBed.inject(DogPhotoService);
  })

  it('should get photo of dog', () => {
    service.getDogPhoto('hound');
    expect(dogPhoto.getDogPhoto).toHaveBeenCalled();
  })
})
