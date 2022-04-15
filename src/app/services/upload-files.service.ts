import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private baseUrl = 'http://localhost:8080/api/uploadFile';
  private imageDroite1 = 'http://localhost:8080/consultation/addimage1D';
  private imageDroite2 = 'http://localhost:8080/consultation/addimage2D';
  private imageDroite3 = 'http://localhost:8080/consultation/addimage3D';
  private imageDroite4 ='http://localhost:8080/consultation/addimage4D';
  private imageDroite5 = 'http://localhost:8080/consultation/addimage5D';

  constructor(private http: HttpClient) { }
   upload1(id : number , file : File): Observable<any> {
       const formData: FormData = new FormData();
     formData.append('image1', file);
    return this.http.put(`${this.imageDroite1}/${id}`, formData);
  }
  upload2(id : number , file : File): Observable<any> {
    const formData: FormData = new FormData();
  formData.append('image2', file);
 return this.http.put(`${this.imageDroite2}/${id}`, formData);
}
upload3( id : number ,file : File): Observable<any> {
  const formData: FormData = new FormData();
formData.append('image3', file);
return this.http.put(`${this.imageDroite3}/${id}`, formData);
}
upload4( id : number ,file : File): Observable<any> {
  const formData: FormData = new FormData();
formData.append('image4', file);
return this.http.put(`${this.imageDroite4}/${id}`, formData);
}
upload5( id : number ,file : File): Observable<any> {
  const formData: FormData = new FormData();
formData.append('image5', file);
return this.http.put(`${this.imageDroite5}/${id}`, formData);
}
/* upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST',`${this.baseUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }*/

 /* getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}*/
}