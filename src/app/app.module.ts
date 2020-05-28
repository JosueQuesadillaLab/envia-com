import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from './../environments/environment.prod';

//redux
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BestSellersComponent } from './dashboard/best-sellers/best-sellers.component';
import { BannerHomeComponent } from './dashboard/banner-home/banner-home.component';
import { ProductComponent } from './dashboard/product/product.component';
import { CartComponent } from './shared/cart/cart.component';
import { PromotionsComponent } from './dashboard/promotions/promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    BestSellersComponent,
    BannerHomeComponent,
    ProductComponent,
    CartComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot( appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
