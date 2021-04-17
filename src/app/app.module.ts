import { UpdatedItemService } from './updated-item.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
// import {AngularFontAwesomeModule} from 'angular-font-awesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesService } from './categories.service';
import { FooterComponent } from './footer/footer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AllproductsService } from './allproducts.service';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { ModalComponent } from './modal/modal.component';
import { ModalloginComponent } from './modallogin/modallogin.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddproductComponent,
    ProductsComponent,
    FooterComponent,
    DeliveryComponent,
    AllproductsComponent,
    ProductfilterComponent,
    ModalComponent,
    ModalloginComponent,
    ContactComponent,

   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    // AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      
      {path: 'products/:id', component: ProductsComponent },
      {path: 'products', component: ProductsComponent },
      {path: 'add-product', component: AddproductComponent },
      {path: 'all-product', component: AllproductsComponent },
      {path: 'contact', component: ContactComponent }


    ])
    
  ],
  providers: [CategoriesService, UpdatedItemService, AllproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
