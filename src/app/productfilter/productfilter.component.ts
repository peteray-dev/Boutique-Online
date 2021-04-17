import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent implements OnInit {
categories: any[] = [];
  constructor(private allCategories: CategoriesService) { }

  ngOnInit() {this.categories = this.allCategories.getCategories();
  }

}

//  categories: any[] = [];
// this.categories = this.allproduct.getAllCategories();


