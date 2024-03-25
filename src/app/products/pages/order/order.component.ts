import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'linterna verde',
      canFly: true,
      color: Color.green
    }
  ]


  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value
  }
}
