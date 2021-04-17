import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  constructor() { }

  getAll(){
    return[
      {id: 1, title:"top-Casual" , price: "NGN 500", category:'casual', imageurl:"/assets/images/lady-top.jpeg"},
      {id: 2, title:"Classic Suit" , price: "NGN 80000", category:'Men Wear', imageurl:"/assets/images/wear-rack.jpeg"},
      {id: 3, title:"Batik casual" , price: "NGN 5000 ", category:'ladies wear', imageurl:"/assets/images/wear-show.jpeg"},
      {id: 4, title:"masked dress" , price: "NGN 1000", category:'Children wear', imageurl:"/assets/images/shirt.jpeg"},
      {id: 5, title:"Traditional wears" , price: "NGN 5000 ", category:'ladies wear', imageurl:"/assets/images/shirt-rack.jpeg"},
      {id: 6, title:"casual" , price: "NGN 1000", category:'Children wear', imageurl:"/assets/images/gown.jpeg"},
      {id: 7, title:"Batik casual" , price: "NGN 8000 ", category:'ladies wear', imageurl:"/assets/images/wear-show.jpeg"},
      {id: 8, title:"masked dress" , price: "NGN 1000", category:'Children wear', imageurl:"/assets/images/shirt.jpeg"},
      {id: 9, title:"Traditional Complete Wears" , price: "NGN 50000 ", category:'ladies wear', imageurl:"/assets/images/shirt-rack.jpeg"},
      {id: 10, title:"Tops" , price: "NGN 1000", category:'Children wear', imageurl:"/assets/images/gown.jpeg"},
      {id: 11, title:"Chink Shirt" , price: "NGN 4000", category:'Children wear', imageurl:"/assets/images/ladywearrack.jpeg"},
      {id: 12, title:"Jean" , price: "NGN 9000 ", category:'ladies wear', imageurl:"/assets/images/lady-top.jpeg"},
      {id: 13, title:"Boxers" , price: "NGN 1000", category:'Children wear', imageurl:"/assets/images/wear-rack.jpeg"}

    ]
  }

  getAllCategories(){
    return[
      {id: 1, name: 'casual'},
      {id: 2, name: 'Men Wear'},
      {id: 3, name: 'ladies wear'},
      {id: 4, name: 'Children wear'}

    ]
  }
}
