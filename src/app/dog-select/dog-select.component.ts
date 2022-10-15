import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

import { DogPhotoService, SelectedDogService } from 'src/app/services/dog.service'

@Component({
  selector: 'app-dog-select',
  templateUrl: './dog-select.component.html',
  styleUrls: ['./dog-select.component.css']
})
export class DogSelectComponent implements OnInit {
  private sub: any
  slug?: string
  slugLink?: string[]
  dogPhoto?: string[]
  slugName?: string;
  subName?: string[];
  dogLink?: string[];
  faHeart = faHeart;
  faComment = faComment;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dogPhotoService: DogPhotoService,
    private selectedDogService: SelectedDogService,
    private redirect: Router
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug']
      this.slugLink = this.slug!.split('-')
      this.getDogPhoto(this.slugLink!)
    })

    if (this.slugLink) {
      this.slugName = this.slugLink![0]
    }

    this.selectedDogService.data$.subscribe((data: any) => {
      if (data !== 'select') {
        this.dogLink = data.split(',').filter((item: string) => item !== '');
        if (this.dogLink!.length > 2) {
          this.redirect.navigate(['dogs/select', this.dogLink!.join('-')]).then(() => {
            window.location.reload();
          })
        } else {
          this.redirect.navigate(['dogs', this.dogLink!.join('-')])
            .catch((err) => console.log(err))
        }
      }
    })
  }

  getDogPhoto(dog: string[]) {
    let array: string[] = []
    for (let i = 1; i < dog.length; i++) {
      this.dogPhotoService.getDogPhoto(dog[0] + '/' + dog[i]).subscribe((data: any) => {
        array.push(data.message)
      })
    }
    this.dogPhoto = array
    this.subName = this.dogPhoto
    console.log(this.subName)
  }

}
