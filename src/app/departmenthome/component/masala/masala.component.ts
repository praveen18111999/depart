import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masala',
  templateUrl: './masala.component.html',
  styleUrls: ['./masala.component.css']
})
export class MasalaComponent implements OnInit {

  products: any[] = [
    {
      name: 'Sakthi Aniseed Powder ',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m1.png' // Manually add image URL
    },
    {
      name: 'Sakthi Biriyani Masala ',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m2.png' // Manually add image URL

    },
    {
      name: 'Sakthi Channa Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m3.png' // Manually add image URL

    },
    ,
    {
      name: 'Sakthi Chicken Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m4.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Chilli Chutney Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m5.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Chicken 65 Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m6.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Chilly Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m7.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Coriander Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m8.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Cumin Powder ',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m9.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Curry Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m10.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Dhall Rice Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m11.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Egg Kuruma Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m12.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Fish Curry Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m13.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Fish Fry Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m14.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Garam Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m15.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Garlic Rice Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m16.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Mixed Masala Powder ',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m17.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Lemon Rice Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m18.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Mutton Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m19.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Pepper Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m20.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Puliyogare Rice Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m21.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Sambar Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m24.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Rasam Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m23.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Turmeric Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m25.png' // Manually add image URL

    }
    ,
    {
      name: 'Sakthi Vathal Kulambu Powder',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m26.png' // Manually add image URL

    }
    ,
    {
      name: 'Bay leaf',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m27.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Cardamon',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m28.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Clove',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m29.jpg' // Manually add image URL

    }
    ,
    {
      name: ' Rajam Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m30.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Mary Chicken 65 Masala',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m22.jpg' // Manually add image URL

    }
    ,
    {
      name: 'LG Perunkaayam',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m31.jpg' // Manually add image URL

    }
    ,
    {
      name: 'kaayam',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m32.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Jaathikaai',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m33.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Kal Paasi',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m34.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Kasa Kasaa',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m35.jpg' // Manually add image URL

    }
    ,
    {
      name: 'kesary Powder (Yellow)',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m36.jpg' // Manually add image URL

    }
    ,
    {
      name: 'kesary Powder (Red)',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m37.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Pattai',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m38.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Red Chilli / Vathal',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m39.jpg' // Manually add image URL

    }
    ,
    {
      name: 'Sombu',
      category: 'Masala',
      imageUrl: 'assets/3.Masala/m40.jpg' // Manually add image URL

    }
   
  
    // Add as many products as needed
  ];

  category3: string[] = ['Masala'];

  constructor() { }

  ngOnInit() {
    // No need to load products from the backend
  }

  getProductsByCategory(category: string) {
    return this.products.filter(product => product.category === category);
  }
}
