import { Component, OnInit, Input, Output } from '@angular/core';
import { Animal } from '../Entities/animal';

@Component({
  selector: 'animal-row',
  templateUrl: './animal-row.component.html',
  styleUrls: ['./animal-row.component.css']
})
export class AnimalRowComponent implements OnInit {

  @Input() animalData;
  @Input() index: number;
  @Input() animalsArray: Animal[];
  constructor() { 
   
  }

  ngOnInit() {}

  deleteRow(event){
    // Delete row from HTML
    event.path[1].remove();
    // Delete row from Data array
    this.animalsArray.splice(this.index, 1);
  }
}
