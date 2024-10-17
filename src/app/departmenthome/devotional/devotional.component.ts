import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devotional',
  templateUrl: './devotional.component.html',
  styleUrls: ['./devotional.component.css']
})
export class DevotionalComponent implements OnInit {

  products: any[] = [
    {
      name: 'Cycle Sugantha Mallika Bathi',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d1.jpg' // Manually add image URL

    },
    {
      name: 'Lia Prime Rose Bathi',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d2.jpg' // Manually add image URL

    },
    {
      name: 'Cycle Pure Agarbathi',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d3.jpg' // Manually add image URL

    },
    {
      name: 'Lia Samtrupti',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d4.jpg' // Manually add image URL

    },
    {
      name: 'Lia Jas Bathi',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d5.jpg' // Manually add image URL

    },
    {
      name: 'Lia Pineapple Twirl Bathi',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d6.jpg' // Manually add image URL

    },
    {
      name: 'Dhana Deepam Oil',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/dhana deepam.jpg' // Manually add image URL

    },
    {
      name: 'Iswaryam Deepam Oil',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/ishwariyam.jpg' // Manually add image URL

    },
    {
      name: 'Maha Deepam Oil',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d7.jpg' // Manually add image URL

    },
    {
      name: 'Castor Oil',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d8.jpg' // Manually add image URL

    },
    {
      name: 'Subam Panja Deepa Oil',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d9.jpg' // Manually add image URL

    },
    {
      name: 'Winner Deepam Oil',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d10.jpg' // Manually add image URL

    },
    {
      name: 'Vel Deepam Oil',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d11.jpg' // Manually add image URL

    },
    {
      name: 'Nayam Paneer',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d12.jpg' // Manually add image URL

    },
    {
      name: 'CTC Karpooram',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d13.jpg' // Manually add image URL

    },
    {
      name: 'Jeyavilas Instant Sambirani',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d14.jpg' // Manually add image URL

    },
    {
      name: 'Sivasakthi Vilas vibuthi',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/d15.jpg' // Manually add image URL

    },
    {
      name: 'Fight Matchsticks',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/fight matchsticks.jpg' // Manually add image URL

    },
    {
      name: 'Siva Karpooram',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/camphor(karpooram).jpg' // Manually add image URL

    },
    {
      name: 'Crown Kungumam',
      category: 'Devotional',
      imageUrl: 'assets/7.Devotional/crown kunkum.jpg' // Manually add image URL

    }
  ];
 
  category7:string[]=['Devotional'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // No need to load products from the backend
  }

  getProductsByCategory(category: string) {
    return this.products.filter(product => product.category === category);
  }



}
