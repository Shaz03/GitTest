import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';


import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';




@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'prodcuts/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent }
    ]),
    SharedModule
  ],
  providers:[ProductService],
})
export class ProductModule { }
