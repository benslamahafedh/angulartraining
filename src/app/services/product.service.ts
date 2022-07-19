
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]=[
    {
      id:1,
      name:'hela',
      price:"35",
      image:'assets/img/product/1.jpg',
      gender: "women"
    },
    {
      id:2,
      name:'balsem',
      price:"89",
      image:'assets/img/product/2.jpg',
      gender: "women"
    },
    {
      id:9,
      name:'emna',
      price:"82",
      image:'assets/img/product/3.jpg',
      gender: "women",
    },
    {
      id:15,
      name:'hafedh',
      price:"86",
      image:'assets/img/product/4.jpg',
      gender: "women",
    },
    {
      id:15,
      name:'dhiea',
      price:"82",
      image:'assets/img/product/5.jpg',
      gender: "women",
    },
    {
      id:15,
      name:'cosa',
      price:"82.6",
      image:'assets/img/product/6.jpg',
      gender: "women",
    },
    {
      id:15,
      name:'hell',
      price:"89",
      image:'assets/img/product/7.jpg',
      gender: "women",
    },
    {
      id:1,
      name:'all',
      price:"80",
      image:'assets/img/product/8.jpg',
      gender: "women",
    },
    {
      id:15,
      name:'maze',
      price:"86",
      image:'assets/img/product/9.jpg',
      gender: "men",
    },
  ]
  constructor() { }
  onGetgender(gender:string){
    return this.products.filter(it=>(
      it.gender.toString()== gender
      ))
      
  }
  onGet(){
    return this.products
  }
  onAdd(product: Product){
    this.products.push(product)
  }
  onEdit(product:Product,id:number,image:string,name:string,price:string,gender:string){
    this.products.forEach(product => {
      if(product.id === id){
        product.image= image;
        product.name=name;
        product.price=price;
        product.gender=gender
      }
    });
  }
  onDelete(id:number){
let product=this.products.find( x=>x.id===id);
let index=this.products.indexOf(product!,0);
this.products.splice(index,1);
  }

}