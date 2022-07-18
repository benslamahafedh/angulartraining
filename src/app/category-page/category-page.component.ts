import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  products!: Product[]

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.onGet()
  }
onDelete(id:string){
  this.productService.onDelete(id);
}
}
