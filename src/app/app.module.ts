import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentModule } from './common/common.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgOtpInputModule } from 'ng-otp-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonComponentModule,
        BrowserAnimationsModule,
        NgxIntlTelInputModule,
        NgOtpInputModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
