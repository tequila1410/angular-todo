import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /**
   * Array of tasks
   * @type {string[]}
   */
  tasks: string[] = ['Убрать в комнате', 'Посрать', 'Поспать'];

  taskValue: any;

  @ViewChild('newTaskInput') newTaskInput;

  constructor() { }

  ngOnInit() {
  }

  addNewTask() {
    this.tasks.push(this.taskValue);
    this.taskValue = null;
  }

}
