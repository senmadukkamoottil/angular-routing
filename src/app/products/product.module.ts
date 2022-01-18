import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products', 
        children: [
          {path: ':id', component: ProductDetailComponent},
          {
            path: ':id/edit', 
            component: ProductEditComponent,
            children: [
              {path: 'info', component: ProductEditInfoComponent},
              {path: 'tags', component: ProductEditTagsComponent}
            ]
          },
          {path: '', component: ProductListComponent},
        ]
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
