import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './product';


const urlBase = environment.baseUrl.concat("/products");

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items = [] as any;
  product : any;

  constructor(
    private http: HttpClient
  ) {}

  getProducts() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let httpOptions = {
      headers: headers
    };

    return this.http.get<Array<Product>>(urlBase, httpOptions)
      .pipe(map(data => {
        return data;
      }));

  }

  getProductById(id: string) {
    let url = urlBase.concat("/").concat(id);
    return this.http.get(url)
      .pipe(map(data => {
        return data;
    }));
  }

  getProductsByFilter(filter: string){
    let url = urlBase.concat("?").concat(filter).concat("=true");
    return this.http.get(url)
    .pipe(map(data => {
      return data;
    }));
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
