import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        loadChildren: () => import('./home/home.module').then(h => h.HomeModule) 
    },
    { 
        path: 'category', 
        loadChildren: () => import('./category/category.module').then(c => c.CategoryModule) 
    },
    {
        path: 'cart',
        component: CartComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
