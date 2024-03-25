import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //¡18n Select
  public name: string = 'Fabian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient():void{
    this.name = 'Michell';
    this.gender = 'female';
  }


  //¡18Plural
  public clients: string[] = ['faibian','mono','juan','michell','marta','carmen','jose','indacanguris']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'no tenemos un cliente esperando.',
    '=2': 'no tenemos 2 personas esperando.',
    'other':' tenemos # clientes esperando.'
  }

  deleteCliente():void{
    this.clients.shift()
  }

  //keyvalue pipe
  public person = {
    name: 'fabian',
    age: 36,
    address: 'colombia'
  }

  //async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa.')
    },3500)
  })

}
