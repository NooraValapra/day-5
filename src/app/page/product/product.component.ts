import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(private route:ActivatedRoute, private api:ApiService){}
id:any
item:any;

  ngOnInit(){

    this.id  =this.route.snapshot.paramMap.get('id')

    this.api.getDataById(this.id).subscribe((data:any)=>{
      this.item=data
    })

  }

}
