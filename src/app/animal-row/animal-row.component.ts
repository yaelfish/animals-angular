import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../Entities/animal';

@Component({
  selector: 'animal-row',
  templateUrl: './animal-row.component.html',
  styleUrls: ['./animal-row.component.css']
})
export class AnimalRowComponent implements OnInit {

  @Input() animalData;
  
  @Input() index: number;

  constructor() { 
   
  }

  ngOnInit() {}
}
