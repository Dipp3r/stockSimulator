import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';
import { Product } from 'src/app/shared/models/records';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  status = "loss";
  src = '';
  products: Product[]=[];
  constructor(private productService:AppServiceService){
    this.products = productService.getAllProduct();
  }
  getStatus(message:string):string{
    this.src = "../../assets/images/" + message + ".svg";
    return this.src;
  }
}
