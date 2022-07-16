import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListDirectionComponent } from './list-direction/list-direction.component';
import { AddDirectionComponent } from './add-direction/add-direction.component';
import { FooterComponent } from './footer/footer.component';
import { Carousel04Component } from './carousel04/carousel04.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { AddComponent } from './category-page/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListDirectionComponent,
    AddDirectionComponent,
    FooterComponent,
    Carousel04Component,
    HomeComponent,
    ProductPageComponent,
    CategoryPageComponent,
    CartPageComponent,
    CheckoutComponent,
    ContactComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
