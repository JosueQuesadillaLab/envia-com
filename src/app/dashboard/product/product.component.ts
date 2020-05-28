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
  itemsProducts : Array<any>;
  sending: boolean = false;
  flagValidation = false;
  
  itemsSubscription : Subscription = new Subscription();
  rutaSubscription : Subscription = new Subscription();


  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    

    this.itemsSubscription = this.store.select('products').pipe(
        filter ( itemsList => itemsList.products != null) 
      ).subscribe(
        itemsList => {
            const { products } = itemsList;
            this.productsList = products;
            this.rutaSubscription = this.route.paramMap.subscribe(params => {
              this.id = params.get("id");
              this.getDataProduct();
            });
        }
    );



    this.store.select('items').pipe(
      filter ( items => items.items != null)
    ).subscribe(
      resp => {  
        const { items }  = resp;
        this.itemsProducts = items;
      }
    );



  }

  ngOnDestroy(){
    this.itemsSubscription.unsubscribe();
    this.rutaSubscription.unsubscribe();
  }

  rest(){
    if(this.qty > 0){
      this.qty--;
      this.flagValidation = false;
    }
  }

  add(){ 
    if(this.qty < 10){
      this.qty++;
      this.flagValidation = false;
    }
  }

  getDataProduct(){
    
    this.productsList.map(
      product => {
            
        const {productId } = product;

        if( productId == this.id){
          this.product = product;
          console.log(this.product);
        }
        
      }
    );

  }

  addProduct(){

    if( this.qty == 0 ){  
      this.flagValidation = true;
      return;
    }

    this.sending = true;

    let array = [];
  
    const obproduct = {
      'id': `${this.product.id}`,
      'variantId': '32346524450956',
      'productId': `${this.product.productId}`,
      'sku': `${this.product.sku}`,
      'fulfillment': {
        'quantity': '1',
        'service': 'manual',
        'status': null
      },
      'name': `${this.product.name}`,
      'requiresShipping': 'true',
      'quantity': `${this.qty}`,
      'price': `${this.product.price}`,
      'discount': '0.00',
      'tax': null,
      'taxable': 'false',
      'vendor': 'ecarttest',
      'imageUrl': `${this.product.imageUrl}`,
      'ecartapiUrl': 'https://eshop-deve.herokuapp.com/api/v2/products/4591541944460'
    }



    this.itemsProducts.map( resp => 
       {
        array.push(resp);
       }
    );

    array.push(obproduct);
    
    this.store.dispatch( actions.setItems( { items: array }) );
    this.store.dispatch( actions.openCart());

    this.sending = false; 
    this.qty = 0;
    
    

  }


  



}
