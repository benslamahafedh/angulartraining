import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListDirectionComponent } from './list-direction/list-direction.component';
import { FooterComponent } from './footer/footer.component';
import { Carousel04Component } from './carousel04/carousel04.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { RadioPipe } from './radio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListDirectionComponent,
    FooterComponent,
    Carousel04Component,
    HomeComponent,
    ProductPageComponent,
    CategoryPageComponent,
    CartPageComponent,
    CheckoutComponent,
    ContactComponent,
    EditComponent,
    FilterPipe,
    RadioPipe,
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
