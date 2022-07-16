import { NgModule } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddDirectionComponent } from './add-direction/add-direction.component';
import { AppComponent } from './app.component';
import { Carousel04Component } from './carousel04/carousel04.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListDirectionComponent } from './list-direction/list-direction.component';
import { MenuComponent } from './menu/menu.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  // {path:'',component:MenuComponent,children: [
  //   {path:'directions',component:ListDirectionComponent},
  //   {path:'direction',component:AddDirectionComponent}
  // ]},

  {
    path: '', component: Carousel04Component
  },
  { path: 'Product', component: ProductPageComponent },
  { path: 'Category', component: CategoryPageComponent },
  {
    path: 'Cart', component: CartPageComponent
  },
  {
    path: 'Checkout', component: CheckoutComponent
  },
  {
    path: 'Contact', component: ContactComponent
  },

  { path:'add',
    component:EditComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
