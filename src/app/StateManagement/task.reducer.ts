import { createReducer, on } from '@ngrx/store';
import { addTask, updateTask, deleteTask, loadTasks } from './task.actions';
import { Task } from '../services/task';

export const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(loadTasks, (state) => state),
  on(addTask, (state, { task }) => [...state, task]),
  on(updateTask, (state, { task }) => state.map(t => t.id === task.id ? task : t)),
  on(deleteTask, (state, { taskId }) => state.filter(task => task.id !== taskId))
);
