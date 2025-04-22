import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '../services/task';
export const selectTasks = createFeatureSelector<Task[]>('tasks');
export const selectTaskCount = createSelector(
  selectTasks,
  (tasks) => tasks.length
);

export const selectTaskStatusDistribution = createSelector(
  selectTasks,
  (tasks) => {
    const completed = tasks.filter(task => task.completed).length;
    const pending = tasks.length - completed;

    return {
      labels: ['Completed', 'Pending'],
      datasets: [
        {
          data: [completed, pending],
          backgroundColor: ['#4caf50', '#f44336'] 
        }
      ]
    };
  }
);
