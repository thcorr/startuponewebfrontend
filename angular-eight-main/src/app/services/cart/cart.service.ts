import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlBase = environment.baseUrl.concat("/carts");

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [] as any;

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: any) {
    this.items.push(product);
  }

  getAllCarts(){
    return this.http.get(urlBase);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  sumOfPrice() {
    return this.items.reduce((sum: number, { price }: any) => sum + price, 0)
  }
  
}