import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  constructor() { }
  arr:string[]=["+","-","/","*"];
  generateRandomNumber(){
    return Math.floor(Math.random()*9+1);
  }
  generateRandomNumberWithRange( rangeStart:number,rangeEnd:number){
    return Math.floor(Math.random()*rangeEnd+rangeStart);
  }
  generateRandomOperator(){
    return this.arr[Math.floor(Math.random()*3)];
  }

}
