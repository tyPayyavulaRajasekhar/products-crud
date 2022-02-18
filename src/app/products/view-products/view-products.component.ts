import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
      console.log(this.products);
    })
  }

}
