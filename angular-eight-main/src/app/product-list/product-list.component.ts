import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any;

  TYPE_VEGAN = "isVegan";
  TYPE_VEGETARIAN = "isVegetarian";
  TYPE_GLUTEN_FREE = "isGlutenFree";
  
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProductByFilter(filter: string) {
    this.products = this.productService.getProductsByFilter(filter);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }
}