import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let productIdFromRoute = String(routeParams.get('productId'));
    this.product = this.productService.getProductById(productIdFromRoute).subscribe(
      success => {
        this.product = success;
      }, error => {
        console.error("Error: " + error);
        window.alert("Erro na busca dos produtos");
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

}