import { Component, OnInit, Input,Output , EventEmitter } from '@angular/core';;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @Input will receives value from parent
@Input() msgFromParent;

//@Output will emit or send data to parent
@Output() valfromChild: EventEmitter<string> = new EventEmitter();

msgFromChild: string = "Hi this msg if from child for parent";
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    // is emitting data to parent
   this.valfromChild.emit(this.msgFromChild);
  }

}
