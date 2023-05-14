import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login,Product } from '../shared/models/records';
import { product, sample_login } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(): Login[]{
    return sample_login;
  }

  getDataById(id:number):Login[]{
    return this.getData().filter(user=> user.mobile == id);
  }
  getAllProduct(): Product[]{
    return product;
  }
}
