import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-personal-care',
  templateUrl: './personal-care.component.html',
  styleUrls: ['./personal-care.component.css']
})
export class PersonalCareComponent  implements OnInit  {

  products: any[] = [
    {
      name: 'Chandrika Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/chandrika.jpg ' // Manually add image URL

    },
    {
      name: 'Colgate',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/colgate.jpg ' // Manually add image URL

    },
    {
      name: 'Dettol Cool Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/dettol cool.jpg ' // Manually add image URL
    },
    {
      name: 'Gillete',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/gillete.jpg ' // Manually add image URL

    },
    {
      name: 'Hamam Neem Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/hamam neem.jpg ' // Manually add image URL

    },
    {
      name: 'Himalaya Anti Dandruff Shampoo',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/hm anti dandruff.jpg ' // Manually add image URL

    },
    {
      name: 'Himalaya Anti Hairfall Shampoo',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/hm anti hairfall.jpg ' // Manually add image URL

    },
    {
      name: 'Jhonsons Baby Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/jhonsons.jpg ' // Manually add image URL

    },
    {
      name: 'Lux Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/lux pink(rose).jpg ' // Manually add image URL

    },
    {
      name: 'Lux Jasmine & Vitamin Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/lux vitamin.jpg ' // Manually add image URL

    },
    {
      name: 'Mysore Sandal Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/m sandal.jpg ' // Manually add image URL

    },
    {
      name: 'Nature Power Beauty Soap',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/power lime.jpg ' // Manually add image URL

    }
    ,
    {
      name: 'Nature Power Papaya Aura',
      category: 'Personal Care',
      imageUrl: 'assets/5.Personal care/papaya aura.jpg ' // Manually add image URL

    }


  ];
 
  category5:string[]=['Personal Care'];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    // No need to load products from the backend
  }

  getProductsByCategory(category: string) {
    return this.products.filter(product => product.category === category);
  }



}
