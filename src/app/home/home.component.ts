import { Component, OnInit } from '@angular/core';
import { UpdatedItemService } from '../updated-item.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products:any = []
  constructor(private _productList: UpdatedItemService) { }

  ngOnInit() {
    this.products= this._productList.getAllProduct()
  }

}
