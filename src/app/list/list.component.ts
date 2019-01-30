import {Component} from '@angular/core';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

import {ListService} from './list.service';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

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
    if (this.tasks === null) this.tasks = [];
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
    this.listService.saveList(this.tasks);
  }

  /**
   * Toggle task status
   * @param {number} taskId
   */
  changeTaskStatus(taskId: number): void {
    const currentTask = this.tasks.find(task => task.id === taskId);
    currentTask.done = !currentTask.done;

    this.listService.saveList(this.tasks);
  }

  /**
   * Delete task by id
   * @param {number} taskId
   */
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.listService.saveList(this.tasks);
  }

  /**
   * Download report in csv format
   */
  getCsv(): void {
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
