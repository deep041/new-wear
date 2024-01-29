import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryISO, SearchCountryField } from "ngx-intl-tel-input";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    separateDialCode = false;
    SearchCountryField = SearchCountryField;
    TooltipLabel = 'TooltipLabel';
    CountryISO = CountryISO;
    preferredCountries: CountryISO[] = [
        CountryISO.UnitedStates,
        CountryISO.UnitedKingdom
    ];

    loginForm!: FormGroup;
    page: number = 1;

    constructor() { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.loginForm = new FormGroup({
            mobile: new FormControl(''),
            otp: new FormControl('')
        })
    }

    onOtpChange(event: any) {
        console.log('event', event);
    }

    login() {
        if (this.page === 1) {
            this.page = 2;
        }

        console.log(this.loginForm.value);
    }
}
