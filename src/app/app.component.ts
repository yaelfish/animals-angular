import { Component } from '@angular/core';
import { Animal } from './Entities/animal';
import { DataService } from './data.service';
// import { AnimalRowComponent } from './animal-row/animal-row.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataService){
    this.animals = dataService.initData();
  }

  public animals: Animal[] = [];

  
}
