import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories.service';
import { UpdatedItemService } from '../updated-item.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public categories:any = []

  // categories$
  constructor(private _categoriesService: CategoriesService, public updatedServices: UpdatedItemService) { 

  }

  save(product:any){
    this.updatedServices=product
    
  }

  ngOnInit() {

    this.categories =this._categoriesService.getCategories()
  }

}
