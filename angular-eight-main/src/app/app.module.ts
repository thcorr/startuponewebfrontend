import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { CartCalculatorComponent } from './cart-calculator/cart-calculator.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
 
@NgModule({
 imports: [
   BrowserModule,
   HttpClientModule,
   ReactiveFormsModule,
   RouterModule.forRoot([
    { path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
  ])
 ],
 declarations: [
   AppComponent,
   TopBarComponent,
   ProductListComponent,
   ProductDetailsComponent,
   CartComponent,
   FooterBarComponent,
   CartCalculatorComponent,
   ProductNotFoundComponent
 ],
 bootstrap: [
   AppComponent
 ]
})
export class AppModule { }