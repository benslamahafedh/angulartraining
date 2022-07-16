import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm }   from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  header!:string;
  constructor(private router:Router,private route:ActivatedRoute,private productService:ProductService){}

  ngOnInit(): void {
    this.id = +!this.route.snapshot.paramMap.get('id')
    this.header =this.id === 0 ? 'Add product':'Edit product'
  }
  onSubmit(form:NgForm){
    let product :Product = { 
      id:form.value.id,
      name: form.value.name,
    
      image:form.value.image,
      price: form.value.price,
    }
this.productService.onAdd(product);
this.router.navigateByUrl('');
  }
}
