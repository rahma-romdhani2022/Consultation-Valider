import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  selectedFiles: FileList;
  progressInfos = [];
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFilesService) { }

  ngOnInit() {
   // this.fileInfos = this.uploadService.getFiles();
  }

  selectFiles(event) {
    this.progressInfos = [];

    const files = event.target.files;
    let isImage = true;

    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
      event.srcElement.percentage = null;
    }
  }

 /* upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
         // this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }*/

 /* uploadFiles() {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }*/
  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    for (let i = 0; i < this.selectedFiles.length; i++) {
      if(i==0){
    this.uploadService.upload1(1 , file).subscribe(
      event => {
     
      });}
      if(i==1){
        this.uploadService.upload2(1 , file).subscribe(
          event => {
         
          });}
          if(i==2){
            this.uploadService.upload3(1 , file).subscribe(
              event => {
             
              });}
              if(i==3){
                this.uploadService.upload4(1 , file).subscribe(
                  event => {
                 
                  });}
                  if(i==4){
                    this.uploadService.upload5(1 , file).subscribe(
                      event => {
                     
                      });}}
  }

  uploadFiles() {
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
   /* //  for (let i = 0; i < this.selectedFiles.length; i++) {
   //if(i==0){

      this.uploadService.upload_D1( 1 ,this.selectedFiles[0]).subscribe(data=>{
        this.message = 'Done pour les image 1 ';}
      );
    //  if(i==0){
      
      this.uploadService.upload_D2( 1 ,this.selectedFiles[1]).subscribe(data=>{
        this.message = 'Done pour les image2 ';});
   //  if(i==1){
      
      this.uploadService.upload_D3(1 ,this.selectedFiles[2]).subscribe(data=>{
        this.message = 'Done pour les image 3';});
   // if(i==3){
        
     /* this.uploadService.upload_D4(1 , this.selectedFiles[3]).subscribe(data=>{
        this.message = 'Done pour les image 4 ';});*/
      //if(i==4){
       
     /* this.uploadService.upload_D5(1 , this.selectedFiles[4]).subscribe(data=>{
        this.message = 'Done pour les image 5 ';});*/
  
     // this.message = 'Done pour les images ';
 // }
}
}