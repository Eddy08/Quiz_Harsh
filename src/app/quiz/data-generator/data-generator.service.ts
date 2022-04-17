import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  constructor() { }
  arr:string[]=["+","-","%","*"];
  generateRandomNumber(){
    return Math.floor(Math.random()*9+1);
  }
  generateRandomNumberWithRange( range:number){
    return Math.floor(Math.random()*range+1);
  }
  generateRandomOperator(){
    return this.arr[Math.floor(Math.random()*3)];
  }

}
