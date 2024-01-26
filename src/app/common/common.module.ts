import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

const components = [
    HeaderComponent,
    ProductComponent
];

@NgModule({
    declarations: [
        ...components        
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ...components
    ]
})
export class CommonComponentModule { }
