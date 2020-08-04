import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { SpacePicture } from '../Models/space-picture';
import { map } from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class SpacePictureService {

  constructor(private http: HttpClient) { }

  getspacePictureData () : Observable<SpacePicture[]>{
   
    return this.http.get ("https://api.nasa.gov/planetary/apod?api_key=YBiDoWtIamwnSahlvKB61boa99Wcu0A2PZlwWOmz")
    .pipe(map((data : any) => {
      let spacePictures : SpacePicture [] = [];
      console.log(data)
        spacePictures.push (
          new SpacePicture (
            data.copyright,
            data.date,
            data.url,
            data.title,
            data.version,
            data.explanation,
          )
        );
      return spacePictures;
    }))
  }
}
