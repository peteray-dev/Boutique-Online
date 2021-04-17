import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UpdatedItemService {
  
  constructor() { }

  getAllProduct(){
    return[
      {id: 1, title:"Saponified wine" , price: "NGN 500", category:'Casual', imageurl:"/assets/images/lady-top.jpeg"},
      {id: 2, title:"Classic Suit" , price: "NGN 80", category:'Men Wear', imageurl:"/assets/images/wear-rack.jpeg"},
      {id: 3, title:"Batik casual" , price: "NGN 50000 ", category:'ladies wear', imageurl:"/assets/images/wear-show.jpeg"},
      {id: 4, title:"masked dress" , price: "NGN 1000", category:'Children wear', imageurl:"/assets/images/shirt.jpeg"},
      {id: 5, title:"Traditional wears" , price: "NGN 50000 ", category:'ladies wear', imageurl:"/assets/images/shirt-rack.jpeg"},
      {id: 6, title:"casual" , price: "NGN 1000", category:'Children wear', imageurl:"/assets/images/gown.jpeg"}

    ]
  }
  
}
