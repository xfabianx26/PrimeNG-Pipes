import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'fabian';
  public nameUpper: string = 'FABIAN';
  public fullName: string = 'Fabian AnDRES';

  public customDate: Date = new Date();

}
