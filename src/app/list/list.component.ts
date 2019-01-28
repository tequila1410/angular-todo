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
  tasks = [
    {id: 1, name: 'Sock', done: true},
    {id: 2, name: 'Sleep', done: false}
  ];

  taskValue: any;

  searchText: string;

  @ViewChild('newTaskInput') newTaskInput;

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!this.tasks) this.tasks = [];
  }

  ngOnInit() {
  }

  /**
   * Add new task
   */
  addNewTask(): void {
    let newId = 0;
    if (this.tasks.length > 0) {
      newId = this.tasks[this.tasks.length - 1].id + 1;
    }

    this.tasks.push({
      id: newId,
      done: false,
      name: this.taskValue
    });
    this.taskValue = '';
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  /**
   * Toggle task status
   * @param {number} taskId
   */
  toggleCheckTask(taskId: number): void {
    this.tasks.map(task => {
      if (task.id === taskId) {
        task.done = !task.done;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  /**
   * Delete task by id
   * @param {number} taskId
   */
  deleteTask(taskId: number) {
    // TODO realize task deleting
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

}
