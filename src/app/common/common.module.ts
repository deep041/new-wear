import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const components = [
    HeaderComponent,
    ProductComponent,
    CartComponent        
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ...components
    ]
})
export class CommonComponentModule { }
