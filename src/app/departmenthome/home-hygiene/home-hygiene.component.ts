import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-hygiene',
  templateUrl: './home-hygiene.component.html',
  styleUrls: ['./home-hygiene.component.css']
})
export class HomeHygieneComponent  implements OnInit {

  
  products: any[] = [
    {
      name: 'Ariel Liquid Topload',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/ariel liquid topload.jpg ' // Manually add image URL

    },
    {
      name: 'Ariel',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/ariel.jpg ' // Manually add image URL

    },
    {
      name: 'Harpic',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/harpic.jpg ' // Manually add image URL

    },
    {
      name: 'Liril',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/liril.jpg ' // Manually add image URL

    },
    {
      name: 'Ponvandu soap',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/p perfect.jpg ' // Manually add image URL

    },
    {
      name: 'Ponvandu Supreme Soap',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/p supreme.jpg ' // Manually add image URL

    },
    {
      name: 'Ponvandu Accel Soap',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/p vandu accel.jpg ' // Manually add image URL

    },
    {
      name: 'Rin Detergent Powder',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/rin detergent powder.jpg ' // Manually add image URL

    },
    {
      name: 'Rin Stain Matic Liquid',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/rin stain matic.jpg ' // Manually add image URL
    },
    {
      name: 'Sabena Dishward Powder',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/sabena dishwash powder.jpeg ' // Manually add image URL

    },
    {
      name: 'Surf Excel Powder',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/surf excel powder.jpg ' // Manually add image URL

    },
    {
      name: 'Top Cleaning Powder',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/top cleaning bleaching p.jpg ' // Manually add image URL

    },
    {
      name: 'Vim Bar',
      category: 'Home Hygiene',
      imageUrl: 'assets/6.Homehygiene/vimbar.jpg' // Manually add image URL

    }

  ];
 
  category6:string[]=['Home Hygiene'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // No need to load products from the backend
  }

  getProductsByCategory(category: string) {
    return this.products.filter(product => product.category === category);
  }

}
