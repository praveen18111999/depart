import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.css']
})
export class RiceComponent implements OnInit {


  products: any[] = [

    {
      name: 'India Gate Basmati Rice ( Dubar )',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r1.jpeg'
    },

    {
      name: 'India Gate Basmati Rice ( Feast Rozzana )',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r2.jpg'
    },

    {
      name: 'Red Apple Nei Kichadi',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r3.jpg'
    },

    {
      name: 'Green Apple Nei Kichadi',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r4.jpg'
    },

    {
      name: 'Mehr',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r5.jpg'
    },

    {
      name: 'Nawaab Akshaya Ponni Rice',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r6.jpg'
    },

    {
      name: 'Singam HMT Rice',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r7.jpg'
    },

    {
      name: 'Adukku Malli Idly Rice',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r8.jpg'
    },

    {
      name: 'Manchuukonda Kolam Rice',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r9.jpg'
    },

    {
      name: 'Varalakshmi Nylon Sago',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r10.jpg'
    },

    {
      name: 'CZAR HMT Rice',
      category: 'Rice',
      imageUrl: 'assets/4.rice/r11.jpg'
    }

  ];
  category4:string[]=['Rice'];
category2: any;

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('http://localhost:8080/api/products').subscribe((data: any) => {
      this.products = data;
    });
  }

  category: any=[];

  getProductsByCategory(category: string) {
    return this.products.filter(products => products.category === category);
  }

}
