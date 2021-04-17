import { Injectable } from '@angular/core';
import { UpdatedItemService } from './updated-item.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private updatedProduct: UpdatedItemService) {  }

  getCategories(){
    return[
      {id: 1, name: 'wine'},
      {id: 2, name: 'men wear'},
      {id: 3, name: 'ladies wear'},
      {id: 4, name: 'children wear'}

    ]
  }

  get(){
    return this.updatedProduct.getAllProduct()
  }
}
