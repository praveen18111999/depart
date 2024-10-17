import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-millet',
  templateUrl: './millet.component.html',
  styleUrls: ['./millet.component.css']
})
export class MilletComponent implements OnInit {

  products: any[] = [
    {
      name: 'Anil Cholam Dosai Maavu',
      category: 'Millet/Grains',
      imageUrl: 'assets/2.grains/g1.jpg' // Manually add image URL
    }
   ,   {
    name: 'Anil Kambu Dosai Maavu',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g2.jpg' // Manually add image URL
  }
  ,   {
    name: 'Anil Raagi Semiya',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g3.jpg' // Manually add image URL
  }
  ,   {
    name: 'Anil Roasted Semiya',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g4.jpg' // Manually add image URL
  }
  ,   {
    name: 'Anil Moong Dal',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g5.jpg' // Manually add image URL
  }
  ,   {
    name: 'Anil Urad Dal',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g6.jpg' // Manually add image URL
  }
  ,   {
    name: 'KK Uruttu Ulunthu',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g7.jpg' // Manually add image URL
  }
  
  ,   {
    name: 'Aahirvaad Aataa',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g9.jpg' // Manually add image URL
  }
  ,   {
    name: 'Naryana Gram Flour',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g10.jpg' // Manually add image URL
  }
  ,   {
    name: 'Ganesh Rice Flour',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g11.jpg' // Manually add image URL
  }
  ,   {
    name: 'Golden Eagle Porikadalai',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g12.jpg' // Manually add image URL
  }
  ,   {
    name: 'IPMega kadugu',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g13.jpg' // Manually add image URL
  }
  ,   {
    name: 'IPMega Vendhayam',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g14.jpg' // Manually add image URL
  }
  ,   {
    name: 'Savorit Semiya (wheat)',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g15.jpg' // Manually add image URL
  }
  ,   {
    name: '3 Bell Semiya',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g16.jpg' // Manually add image URL
  }
  ,   {
    name: 'IPMega Porikadalai',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g17.jpg' // Manually add image URL
  }
  ,   {
    name: 'IPMega Siruparuppu',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g18.jpg' // Manually add image URL
  }
  ,   {
    name: 'IPMega Thovaramparuppu',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g19.jpg' // Manually add image URL
  }
  ,   {
    name: 'Garlic',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g20.jpg' // Manually add image URL
  }
  
  ,   {
    name: 'ChickPea',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g23.jpg' // Manually add image URL
  }
  ,   {
    name: '',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g24.jpg' // Manually add image URL
  }
  
  ,   {
    name: 'Mocha Payiru',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g25.jpg' // Manually add image URL
  }
  ,   {
    name: 'Meal Maker / Soya Chunks',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g26.jpg' // Manually add image URL
  }
  ,   {
    name: 'Star Vendhayam',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g27.jpg' // Manually add image URL
  }
  ,   {
    name: 'Subam Baking Soda',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g28.jpg' // Manually add image URL
  }
  ,   {
    name: 'Sunda Vathal',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g29.jpg' // Manually add image URL
  }
  ,   {
    name: 'Thatta Payiru',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g30.jpg' // Manually add image URL
  }
  ,   {
    name: 'Achu Vellam',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g21.jpg' // Manually add image URL
  }
  
  ,   {
    name: 'Manda Vellam',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g31.jpg' // Manually add image URL
  }
  ,   {
    name: 'Aval',
    category: 'Millet/Grains',
    imageUrl: 'assets/2.grains/g32.jpg' // Manually add image URL
  }
 
  ];

  category2: string[] = ['Millet/Grains'];

  constructor() {}

  ngOnInit() {
    // No need to load products from the backend
  }

  getProductsByCategory(category: string) {
    return this.products.filter(product => product.category === category);
  }
}
