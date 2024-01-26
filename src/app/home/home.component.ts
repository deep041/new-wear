import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    products: any;

    constructor() { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.products = [
            {
                category: 'Classic',
                products: [
                    {
                        name: 'Classic T-Shirt | Let\'s do it',
                        price: 500,
                        img: '../../../assets/product1.png',
                        color: ['Black', 'Teal', 'Red']
                    },
                    {
                        name: 'Classic T-Shirt | Om',
                        price: 500,
                        img: '../../../assets/product2.png',
                        color: ['Black', 'White', 'Teal']
                    },
                    {
                        name: 'Classic T-Shirt | Just keep moving forward',
                        price: 500,
                        img: '../../../assets/product3.png',
                        color: ['Black', 'White']
                    },
                    {
                        name: 'Classic T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product1.png',
                        color: ['Teal', 'Red']
                    },
                    {
                        name: 'Classic T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product2.png',
                        color: ['Black', 'White', 'Teal', 'Red']
                    },
                    {
                        name: 'Classic T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product3.png',
                        color: ['Black']
                    },
                ]
            },
            {
                category: 'Unisex Oversized',
                products: [
                    {
                        name: 'Unisex Oversized Standard T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product1.png',
                        color: ['Red']
                    },
                    {
                        name: 'Unisex Oversized Standard T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product2.png',
                        color: ['White', 'Teal']
                    },
                    {
                        name: 'Unisex Oversized Standard T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product3.png',
                        color: ['Teal', 'Red']
                    },
                    {
                        name: 'Unisex Oversized Standard T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product1.png',
                        color: ['Black']
                    },
                    {
                        name: 'Unisex Oversized Standard T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product2.png',
                        color: ['Black', 'White', 'Teal', 'Red']
                    },
                    {
                        name: 'Unisex Oversized Standard T-Shirt Black L',
                        price: 500,
                        img: '../../../assets/product3.png',
                        color: ['Black', 'White', 'Teal']
                    },
                ]
            }
        ];
    }

}
