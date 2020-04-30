import {Component, Input, OnInit} from '@angular/core';

// Part C: Child component = second component that displays the result of the query
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Part C: Use @Input in the child to receive data from its parent for display
  @Input() responseData: [];
  constructor() { }

  ngOnInit(): void {
  }

}
