import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConexionesService {

  constructor(protected http: HttpClient) { }
 private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
   //   Authorization: "my-auth-token"
    })
  };

  getTest(){
    return this.http.get('https://us-central1-klok-reservas.cloudfunctions.net/api/test', this.httpOptions);
  }
   postTest(finca){
    return this.http.post('https://us-central1-klok-reservas.cloudfunctions.net/api/test',finca, this.httpOptions);
  }
}