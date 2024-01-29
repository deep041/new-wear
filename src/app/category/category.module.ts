import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CommonComponentModule } from '../common/common.module';


@NgModule({
    declarations: [
        CategoryComponent
    ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        CommonComponentModule
    ]
})
export class CategoryModule { }
