import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../services/cart/cart.service";
import { Product } from "../services/product/product";

@Component({
  selector: "app-cart-calculator",
  templateUrl: "./cart-calculator.component.html",
  styleUrls: ["./cart-calculator.component.css"],
})
export class CartCalculatorComponent implements OnInit, OnChanges {
  @Input() products: any;

  totalValue = 0;
  constructor(private cartService: CartService,
              private route: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes["products"];

    const products: Product[] = dataChanges.currentValue;
    this.totalValue = 0;
    products.forEach((product) => {
      this.totalValue += product.price;
    });
  }

  ngOnInit() {}

  closeBuy() {
    this.cartService.clearCart();
    this.products = null;
    window.alert('Muito obrigada pela preferência, é um prazer tê-lo aqui conosco! Seus itens estão sendo preparados e logo serão entregues. =D');
    this.route.navigate(['/']);
  }

  sumOfPrice(){
    return this.cartService.sumOfPrice();
  }

}
