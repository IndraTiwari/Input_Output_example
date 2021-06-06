import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // msgFromParent variable have value which is to be send to child
  msgFromParent: string = "Hi this msg is from parent for child";
  constructor() { }
  displayChildMsg: string;
  ngOnInit(): void {
  }

  getChildVal(data){
   this.displayChildMsg = data;
  }

}
