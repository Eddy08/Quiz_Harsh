export class Question{
    
    private _questionNumber!: number;
    public get questionNumber(): number {
        return this._questionNumber;
    }
    public set questionNumber(value: number) {
        this._questionNumber = value;
    }
    private _submittedAnswer!: number;
    public get submittedAnswer(): number {
        return this._submittedAnswer;
    }
    public set submittedAnswer(value: number) {
        this._submittedAnswer = value;
    }
    private _correctAnswer!: number;
    public get correctAnswer(): number {
        return this._correctAnswer;
    }
    public set correctAnswer(value: number) {
        this._correctAnswer = value;
    }
    private _question!: string;
    public get question(): string {
        return this._question;
    }
    public set question(value: string) {
        this._question = value;
    }
constructor(questionNumber: number,question:string,submittedAnswer: number,correctAnswer: number,isCorrect:boolean){
    this._questionNumber=questionNumber;
    this._question=question;
    this._submittedAnswer=submittedAnswer;
    this._correctAnswer=correctAnswer;
    this.isCorrect=isCorrect;
}
    private _isCorrect!: boolean;
    public get isCorrect(): boolean {
        return this._isCorrect;
    }
    public set isCorrect(value: boolean) {
        this._isCorrect = value;
    }

    
}