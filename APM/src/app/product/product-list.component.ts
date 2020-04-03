
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
   
    pageTitle : string = "Product List "; 
    imageWidth:number = 50;
    imageMargin:number= 2;
    showImage:boolean = false;     
    filterProduct : IProduct[];    
    _listFilter :string;
    _errorMessage : string;
    constructor(private productService : ProductService)
    {      
      //this.listFilter = 'cart'
    }

    public get listFilter() : string {
      return this._listFilter;
    }
    public set listFilter(value : string) {
      this._listFilter = value;
      this.filterProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    
    
    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter(product => product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }
    onRatingClicked(message : string):void
    {
      this.pageTitle = this.pageTitle +  message;
    }
    products : IProduct[];
    toggleImage() : void
    {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {

      this.productService.getProducts().subscribe(
        {
          next: products => {
            this.products = products;
            this.filterProduct = this.products; 
          },
          error: err => {this._errorMessage =err}          
        }
      );

      //or 
      // this.productService.getProducts().subscribe(
      //   {
      //     next(products)  {this.products = this.products},
      //     error( err)  {this._errorMessage =err}          
      //   }
      // );

      this.filterProduct = this.products;
    }
}