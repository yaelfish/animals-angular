import { Injectable } from '@angular/core';
import { Animal } from './Entities/animal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public initData(): Animal[] {
    const rawAnimal: any[] = [{
      "name": "Helen Grant",
      "age": 1,
      "type": "Rabbits"
    },
    {
      "name": "Victoria Bennett",
      "age": 0,
      "type": "Rabbits"
    },
    {
      "name": "Julian Casey",
      "age": 16,
      "type": "Pigs and Hogs"
    },
    {
      "name": "Stella Griffith",
      "age": 10,
      "type": "Donkey"
    },
    {
      "name": "Lida Price",
      "age": 9,
      "type": "Hedgehogs"
    },
    {
      "name": "Blake Long",
      "age": 5,
      "type": "Ducks"
    },
    {
      "name": "Isabel Ramirez",
      "age": 3,
      "type": "Geckos"
    },
    {
      "name": "Claudia Weaver",
      "age": 2,
      "type": "Pigeons"
    },
    {
      "name": "Noah Mullins",
      "age": 10,
      "type": "Guinea Fowl"
    },
    {
      "name": "Lewis Torres",
      "age": 2,
      "type": "Cows"
    },
    {
      "name": "Allie Valdez",
      "age": 19,
      "type": "Burro"
    },
    {
      "name": "Harry Diaz",
      "age": 6,
      "type": "Burro"
    },
    {
      "name": "Seth Gibson",
      "age": 5,
      "type": "Sheep"
    },
    {
      "name": "Lida Mendez",
      "age": 8,
      "type": "Goats"
    },
    {
      "name": "Gordon Buchanan",
      "age": 16,
      "type": "Ducks"
    },
    {
      "name": "Bradley Henderson",
      "age": 17,
      "type": "Skinks"
    },
    {
      "name": "Tyler Maldonado",
      "age": 16,
      "type": "Rabbits"
    },
    {
      "name": "Clarence Stanley",
      "age": 6,
      "type": "Peafowl"
    },
    {
      "name": "Steven Rhodes",
      "age": 14,
      "type": "Rats"
    },
    {
      "name": "Dorothy Banks",
      "age": 18,
      "type": "Hedgehogs"
    },
    {
      "name": "Phillip Morris",
      "age": 5,
      "type": "Turtles"
    },
    {
      "name": "Clarence Garner",
      "age": 1,
      "type": "Pigeons"
    },
    {
      "name": "Charles Powell",
      "age": 0,
      "type": "Iguanas"
    },
    {
      "name": "Catherine Bradley",
      "age": 15,
      "type": "Mule"
    },
    {
      "name": "Katie George",
      "age": 10,
      "type": "Sheep"
    }
      ,
    {
      "name": "Sophia Walker",
      "age": 16,
      "type": "Horses"
    }
    ];

    const animal: Animal[] = [];

    for (let i = 0; i < rawAnimal.length; i++) {
      rawAnimal[i] = new Animal(rawAnimal[i].name, rawAnimal[i].age, rawAnimal[i].type);
      animal.push(rawAnimal[i]);
    }
    return animal;
  }
}
