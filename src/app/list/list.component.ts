import {Component, OnInit, ViewChild} from '@angular/core';
import {ListService} from './list.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {Task} from '../shared/task.model';

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
  tasks: Task[] = [];

  /**
   * New task text value
   * @type string
   */
  taskValue: string;

  /**
   * Value for filter pipe
   * @type {string}
   */
  searchText: string;

  constructor(private listService: ListService) {
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

    this.tasks.push(new Task(newId, this.taskValue, false));
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
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getCsv() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'TODO list',
      useBom: true,
      noDownload: false,
      headers: ['ID', 'Task', 'Done'],
      nullToEmptyString: true,
    };
    const s = new Angular5Csv(JSON.stringify(this.tasks), 'TODO list Report', options);
  }

}
