import { Component, OnInit } from '@angular/core'
import { RandomDogPhotoService, DogPhotoService, SelectedDogService } from 'src/app/services/dog.service'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Psintagram';
  randomImage?: string;
  dogPhoto?: string[];
  breed?: string;
  likes?: number;
  faHeart = faHeart;
  faComment = faComment;
  likeClick: any;
  clicked: boolean = false;
  iconClass = '';
  selectedDog?: string[];

  constructor(
    private randomDogPhotoService: RandomDogPhotoService,
    private dogPhotoService: DogPhotoService,
    private selectedDogService: SelectedDogService
  ) { }

  ngOnInit() {
    this.randomDogPhotoService.getRandomDogPhoto().subscribe((data: any) => {
      this.randomImage = data.message;
      this.breed = this.randomImage?.split('/')[4];
    });

    this.likes = Math.floor(Math.random() * 1000);

    this.likeClick = () => {
      if (!this.clicked) {
        this.clicked = true;
        this.likes = this.likes! + 1;
        this.iconClass = 'clicked'
        this.faHeart = solidHeart
      }
    }

    this.selectedDogService.data$.subscribe((data: any) => {
      if (data !== 'select') {
        this.selectedDog = data.split(',')
        console.log(this.selectedDog)
      }
      this.getDogPhoto(this.selectedDog!.filter((item: string) => item !== ''));
      this.dogPhoto = [];
    })
  }

  getDogPhoto(dog: string[]) {
    if (dog.length > 1) {
      for (let i = 1; i < dog.length; i++) {
        this.dogPhotoService.getDogPhoto(dog[0] + '/' + dog[i]).subscribe((data: any) => {
          this.dogPhoto?.push(data.message);
        });
      }
    } else {
      this.dogPhotoService.getDogPhoto(dog[0]).subscribe((data: any) => {
        this.dogPhoto = [data.message];
      })
    }
  }
}
