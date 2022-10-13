import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, } from '@angular/router'

import { DogPhotoService } from 'src/app/services/dog.service'

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private dogPhotoService: DogPhotoService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug']
      this.slugLink = this.slug!.split('-')
      this.getDogPhoto(this.slugLink!)
    })

    this.slugName = this.slugLink![0]
    // let array: string[] = []
    // for (let i = 1; i < this.slugLink!.length; i++) {
    //   array.push(this.slugLink![i])
    // }
    // this.subName = array
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
