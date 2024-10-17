
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {
 
  products: any[] = [

    {
      name: 'Abirami Vanasapati',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o1.jpg'
    },

    {
      name: 'Dinesh Pure Ghee',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o2.jpg'
    },

    {
      name: 'Roobini Palmolein Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o3.jpeg'
    },

    {
      name: 'VVR Coconut Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o4.jpg'
    },

    {
      name: 'Gold Winner Sunflower oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o5.jpg'
    },

    {
      name: 'Sikaram Groundnut Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o6.jpg'
    },

    {
      name: 'Shiny Palmolein Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o7.jpg'
    },

    {
      name: 'Iyarkai Gingelly Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o8.jpg'
    },

    {
      name: 'Idhayam Gingelly Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o9.jpg'
    },

    {
      name: 'Mr.Gold Groundnut Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o10.jpg'
    },

    {
      name: 'Mr.Gold Sunflower Oil',
      category: 'Oil',
      imageUrl: 'assets/1.oil/o11.jpg'
    }

  ];
  category1:string[]=['Oil'];

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
