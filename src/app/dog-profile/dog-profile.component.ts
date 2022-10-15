import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DogAllPhotosService, DogPhotoService, SelectedDogService } from 'src/app/services/dog.service'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {
  breed?: string;
  private sub: any;
  slugLink?: string[];
  dogPhoto?: string[];
  allPhotos?: string[];
  faTableCellsLarge = faTableCellsLarge;
  slug?: string;
  slugName?: string;
  dogName?: string[];
  wiki?: string;
  posts?: number;
  follows?: number;
  followers?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dogPhotoService: DogPhotoService,
    private dogAllPhotos: DogAllPhotosService,
    private selectedDogService: SelectedDogService,
    private redirect: Router
    ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug']
      this.slugName = this.slug?.split('-').join(' ')
      this.wiki = this.slug?.split('-').join('_')
      this.slugLink = [this.slug!.split('-').join('/')]
      if (!this.dogPhoto?.length) {
        this.dogName = this.slugLink
        this.getDogPhoto(this.dogName!)
      }
    })

    this.selectedDogService.data$.subscribe((data: any) => {
      if (data !== 'select') {
        this.dogName = data.split(',').filter((item: string) => item !== '');
        if (this.dogName!.length > 2) {
          this.redirect.navigate(['dogs/select', this.dogName?.join('-')]).then(() => {
            window.location.reload();
          })
        } else if (window.location.href.includes('dogs')) {
          this.getDogPhoto(this.dogName!);
          this.redirect.navigate(['dogs', this.dogName!.join('-')])
            .catch((err) => console.log(err))
        }
      }
    })
    this.follows = Math.floor(Math.random() * 1000)
    this.followers = Math.floor(Math.random() * 10000)
  }

  getDogPhoto(dog: string[]) {
    if (dog.length > 1) {
      for (let i = 1; i < dog.length; i++) {
        this.dogPhotoService.getDogPhoto(dog.join('/')).subscribe((data: any) => {
          this.dogPhoto = data.message;
        });
        this.dogAllPhotos.getDogAllPhotos(dog.join('/')).subscribe((data: any) => {
          this.allPhotos = data.message;
          this.posts = this.allPhotos!.length;
        })
      }
    } else {
      this.dogPhotoService.getDogPhoto(dog[0]).subscribe((data: any) => {
        this.dogPhoto = data.message;
      })
      this.dogAllPhotos.getDogAllPhotos(dog[0]).subscribe((data: any) => {
        this.allPhotos = data.message;
        this.posts = this.allPhotos!.length;
      })
    }
  }
}
