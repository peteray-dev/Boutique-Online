
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllproductsService } from '../allproducts.service';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {
  products: any[] = [];
  
  filteredCategories: any[] = [];
  category: any = [];
  constructor(
    route: ActivatedRoute,
    private allproduct: AllproductsService,
    // private cartServive: ShoppingcartService
    
  ) {
    route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
    });
  }

  ngOnInit() {
    this.products = this.allproduct.getAll();
    

    this.filteredCategories = this.category
      ? this.allproduct.getAll().filter((p) => p.category === this.category)
      : this.products;
  }

  // addToCart(product:any){


  // }
}
