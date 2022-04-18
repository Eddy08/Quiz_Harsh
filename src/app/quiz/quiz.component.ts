import { Component, OnInit } from '@angular/core';
import { DataGeneratorService } from './data-generator/data-generator.service';
import { Question } from './Question';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  started:boolean=false;
  question:any;

  ques:number=0;
  leftOperand:number=NaN;
  rightOperand:number=NaN;
  Operator:string="🤕";
  isNaN:Function=Number.isNaN
  arr:any[]=[];
  quesLimit:number=10;
  numberStart:number=1;
  numberEnd:number=10;
  constructor(private generator:DataGeneratorService) { }

  ngOnInit(): void {
   
  }
  nextQuestion(){
    this.leftOperand=this.generator.generateRandomNumberWithRange(this.numberStart,this.numberEnd);
    this.rightOperand=this.generator.generateRandomNumberWithRange(this.numberStart,this.numberEnd);
    this.Operator=this.generator.generateRandomOperator();
  }
  firstQuestion(){
    this.nextQuestion();
    
  }
  storeAnswer(questionNumber:number,leftOp:number,rightOp:number,Operator:string,submittedAnswer:number){
   let correctAnswer=NaN;
    switch (Operator) {
      case '/':
        correctAnswer=leftOp/rightOp;
        break;
      case '+':
        correctAnswer=leftOp+rightOp;
        break;
      case '-':
        correctAnswer=leftOp-rightOp;
        break;
      case '*':
        correctAnswer=leftOp*rightOp;
       break;
      
    }
    console.log("correct ans",correctAnswer);
    console.log("submitted ans",submittedAnswer);
  let isCorrect:boolean=false;
    if(correctAnswer===submittedAnswer) isCorrect=true;
    let q=new Question(this.ques,this.leftOperand+this.Operator+this.rightOperand,submittedAnswer,correctAnswer,isCorrect);
    this.arr.push(q)
  }

}
