import { Injectable } from '@angular/core';

import {Task} from '../shared/task.model';

@Injectable()
export class ListService {

  constructor() { }

  /**
   * Save array of list to local storage
   */
  public saveList(todoList: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(todoList));
  }
}
