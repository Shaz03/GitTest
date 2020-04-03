import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle = 'Product Details';
  product: IProduct;

  constructor(private route: ActivatedRoute, private service: ProductService, private router: Router) { }

  onBack() {
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProducts().subscribe({
      next: products => {
        this.product = products.find(x => x.productId === id)
        this.pageTitle += this.product.productName
      }
    }
    )
  }

}
