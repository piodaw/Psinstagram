import { Component, OnInit } from '@angular/core'

import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons'
import { DogService, SelectedDogService } from 'src/app/services/dog.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DogService]
})
export class NavbarComponent implements OnInit {
  title = 'Psintagram';
  faHouse = faHouse;
  faCompass = faCompass;
  faHeart = faHeart;
  faMagnifyingGlass = faMagnifyingGlass;
  dogList: any;
  data?: string;

  constructor(
    private dogService: DogService,
    private selectedDogService: SelectedDogService
  ) {}

  ngOnInit() {
    this.dogService.getDogList().subscribe((data: any) => {
      this.dogList = data.message;
    });

    this.selectedDogService.data$.subscribe((data: any) => ((res: any) => this.data = res))
  }

  newData(dog: string) {
    this.selectedDogService.changeData(dog)
  }
}
