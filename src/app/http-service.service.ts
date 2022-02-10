import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient, private router: Router) { }


  sendData(ata:string){
    let data={data:ata}
    return this.http.post("http://localhost:3000/api/process",data)


  }
}
