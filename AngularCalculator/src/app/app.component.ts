import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Calculator';

  num1 = 0;
  num2 = 0;
  result = 0;


  getNum1(string1: string){
    this.num1 = parseInt(string1);
    console.log(this.num1);
  }

  getNum2(string2: string){
    this.num2 = parseInt(string2);
    console.log(this.num2);
  }

  addNum(){
    this.result = this.num1 + this.num2;
  }

  subtractNum(){
    this.result = this.num1 - this.num2;
  }

  multiplyNum(){
    this.result = this.num1 * this.num2;
  }

  divideNum(){
    this.result = this.num1 / this.num2;
  }
}
