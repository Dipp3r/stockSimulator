import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login,Product } from '../shared/models/records';
import { product, sample_login } from 'src/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(): Login[]{
    return sample_login;
  }

  insertUser(data:any): Observable<any>{
    console.log("DATA RECIEVED: ------------",data);
    return this.http.post('http://localhost:3000/login',data);
  }

  getDataById(id:number):Login[]{
    return this.getData().filter(user=> user.mobile == id);
  }
  getAllProduct(): Product[]{
    return product;
  }
}
