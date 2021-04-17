import { Component, OnInit } from '@angular/core';
import { UpdatedItemService } from '../updated-item.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public products:any=[]
  // fileredProducts:any=[]
  constructor(private _updatedwears: UpdatedItemService) {  }



  filter(query:string){
    console.log(query);
    
  }
  ngOnInit(){

    this.products = this._updatedwears.getAllProduct()
    // this.fileredProducts = this.products
  }

}
