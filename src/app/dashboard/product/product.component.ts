import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id: string ; 
  qty: number = 0 ;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
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

}
