import { Injectable } from '@angular/core';
import { RecepieComponent } from './recepie/recepie.component';


@Injectable({
  providedIn: 'root'
})
export class RecepiedataService {
  receps: RecepieComponent[] =
  [
    new RecepieComponent('Choco Musse Cake','assets/images/choco.png','Lorem Ipsum',0),
    new RecepieComponent('Choco Musse Cake','assets/images/choco.png','Lorem Ipsum',1),
    new RecepieComponent('Choco Musse Cake','assets/images/choco.png','Lorem Ipsum',2)
  ];

  addNewRecep(name: string, image: string, description: string)
  {
    this.receps.push(new RecepieComponent(name,image,description,this.receps.length));
  }

  getreceps() : RecepieComponent[]
  {
    return this.receps;
  }
}
