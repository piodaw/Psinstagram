import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private url = 'https://dog.ceo/api/breeds/list/all';

  constructor(private httpClient: HttpClient) {}

  getDogList() {
    return this.httpClient.get(this.url);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SelectedDogService {
  private data = new BehaviorSubject('select')
  data$ = this.data.asObservable();

  changeData(data: string) {
    this.data.next(data)
  }
}

@Injectable({
  providedIn: 'root'
})
export class RandomDogPhotoService {
  private url = 'https://dog.ceo/api/breeds/image/random';

  constructor(private httpClient: HttpClient) {}

  getRandomDogPhoto() {
    return this.httpClient.get(this.url);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DogPhotoService {
  private url = 'https://dog.ceo/api/breed/';

  constructor(private httpClient: HttpClient) {}

  getDogPhoto(breed: string) {
    return this.httpClient.get(this.url + breed + '/images/random');
  }
}

@Injectable({
  providedIn: 'root'
})
export class DogAllPhotosService {
  private url = 'https://dog.ceo/api/breed/';

  constructor(private httpClient: HttpClient) {}

  getDogAllPhotos(breed: string) {
    return this.httpClient.get(this.url + breed + '/images');
  }
}
