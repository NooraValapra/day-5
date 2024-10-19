import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
item: any;
  constructor(private api:ApiService){}
  products:any =[]

  ngOnInit(){
    this.api.getData().subscribe ((data: any) => { 
      this.products=data;
    })
  }
   

}
function data(value: Object): void {
  throw new Error('Function not implemented.');
}

