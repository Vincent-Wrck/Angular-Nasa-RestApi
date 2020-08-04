import { Component, OnInit } from '@angular/core';
import { SpacePictureService } from 'src/app/Services/space-picture.service';
import { SpacePicture } from 'src/app/Models/space-picture';

@Component({
  selector: 'app-space-picture',
  templateUrl: './space-picture.component.html',
  styleUrls: ['./space-picture.component.css']
})
export class SpacePictureComponent implements OnInit {
  title : any;
  spacePictures : SpacePicture[];
  constructor(private spacePictureService : SpacePictureService) { }
  
  // ngOnInit en amont de l'affichage
  ngOnInit() {
    this.getspacePictures();
    if (1===1) {
      console.log(1===1)
    }
  }

  getspacePictures() {
    this.spacePictureService.getspacePictureData ()
    .subscribe ((result : SpacePicture [])=> {
      this.spacePictures = result
      console.log(result);
    });
  }
}
