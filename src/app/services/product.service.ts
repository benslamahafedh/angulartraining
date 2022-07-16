
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]=[
    {
      id:2,
      name:'hela',
      price:35,
      image:'assets/img/product/1.jpg'
    },
    {
      id:8,
      name:'balsem',
      price:89,
      image:'assets/img/product/2.jpg'
    },
    {
      id:9,
      name:'emna',
      price:82,
      image:'assets/img/product/3.jpg'
    },
    {
      id:10,
      name:'hafedh',
      price:86,
      image:'assets/img/product/4.jpg'
    },
    {
      id:11,
      name:'dhiea',
      price:82,
      image:'assets/img/product/5.jpg'
    },
    {
      id:12,
      name:'cosa',
      price:82.6,
      image:'assets/img/product/6.jpg'
    },
    {
      id:13,
      name:'hell',
      price:89,
      image:'assets/img/product/7.jpg'
    },
    {
      id:14,
      name:'all',
      price:80,
      image:'assets/img/product/8.jpg'
    },
    {
      id:15,
      name:'maze',
      price:86,
      image:'assets/img/product/9.jpg'
    },
  ]
  constructor() { }

  onGet(){
    return this.products
  }
  onAdd(product: Product){
    this.products.push(product)
  }
  onDelete(id:number){
let product=this.products.find( x=>x.id===id);
let index=this.products.indexOf(product!,0);
this.products.splice(index,1);
  }

}