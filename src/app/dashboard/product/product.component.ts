import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnDestroy {

  id: string ; 
  qty: number = 0 ;
  productsList : Array<any>;
  product : any  = null ;
  
  itemsSubscription : Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    

    this.itemsSubscription = this.store.select('items').pipe(
        filter ( itemsList => itemsList.items != null) 
      ).subscribe(
        itemsList => {
            const { items } = itemsList;
            this.productsList = items;

            this.route.paramMap.subscribe(params => {
              this.id = params.get("id");
              this.getDataProduct();
            });


        }
    );

  }

  ngOnDestroy(){
    this.itemsSubscription.unsubscribe();
  }

  rest(){
    
    if(this.qty > 0){
      this.qty--;
    }
    
  }

  add(){ 
    if(this.qty < 10){
      this.qty++;
    }
  }

  getDataProduct(){
    
    this.productsList.map(
      product => {
            
        const {productId } = product;

        if( productId == this.id){
          this.product = product;
        }
        
      }
    );

  }

  addProduct(){

    if( this.qty == 0 ){      
      return;
    }

    let array = [];
  
    const obproduct = {
      "id": "4645694505100",
      "variantId": "32346524450956",
      "productId": "4591541944460",
      "sku": null,
      "fulfillment": {
        "quantity": "1",
        "service": "manual",
        "status": null
      },
      "name": "Camisa manga larga",
      "requiresShipping": "true",
      "quantity": `${this.qty}`,
      "price": "250.00",
      "discount": "0.00",
      "tax": null,
      "taxable": "false",
      "vendor": "ecarttest",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0341/3498/2796/products/camisa.jpg?v=1582591220",
      "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
    }

  
    

    


    this.productsList.map( resp => 
       {
        array.push(resp);
       }
    );

    array.push(obproduct);
    
    this.store.dispatch( actions.setItems( { items: array }) );

  }


  



}
