import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask, deleteTask, loadTasks, updateTask } from './task.actions';
import { Task } from '../services/task';
import { selectTaskCount, selectTasks, selectTaskStatusDistribution } from './task.selectors';

@Injectable({
  providedIn: 'root'
})
export class TaskStore {
  tasks$: Observable<Task[]>;
  taskCount$: Observable<number>;
  taskStatusSignal = signal<any>(null); 

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectTasks);
    this.taskCount$ = this.store.select(selectTaskCount);
    this.store.select(selectTaskStatusDistribution).subscribe(statusData => {
      this.taskStatusSignal.set(statusData);
    });
  }

  loadTasks() {
    this.store.dispatch(loadTasks());
  }

  addTask(task: Task) {
    this.store.dispatch(addTask({ task }));
  }

  updateTask(task: Task) {
    this.store.dispatch(updateTask({ task }));
  }

  removeTask(taskId: string) {
    this.store.dispatch(deleteTask({ taskId }));
  }
}
