import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public productlist: any[] = [];
  public filterCategory: any;
  searchtext: string = '';


  filteritem(category: string) {
    this.filterCategory = this.productlist.filter((a: any) => {
      return a.category === category || category === '';
    });
  }



  
}


