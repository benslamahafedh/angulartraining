import { Component, OnChanges, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  products!: Product[]
  public searchText!: Product['name'];
  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.onGet()
  }
onDelete(id:number){
  this.productService.onDelete(id);
}
onGetGender(gender:string){
  this.products=this.productService.onGetgender(gender)
}
}
