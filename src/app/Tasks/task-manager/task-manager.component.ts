import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from '../../services/task';
import { Signal } from '@angular/core'; 
import { ChartComponent } from '../task-chart/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { TaskStore } from '../../StateManagement/task.store';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChartModule, ChartComponent], 
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  taskForm!: FormGroup;
  tasks$!: Observable<Task[]>;
  taskCount$!: Observable<number>;
  taskStatusSignal!: Signal<any>;

  constructor(
    private fb: FormBuilder,
    private taskStore: TaskStore
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.taskStatusSignal = this.taskStore.taskStatusSignal; 
    this.tasks$ = this.taskStore.tasks$;
    this.taskCount$ = this.taskStore.taskCount$;
  }

  onAddTask(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: this.generateId(),
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: false
      };

      this.taskStore.addTask(newTask);
      this.taskForm.reset();
    }
  }

  onRemoveTask(taskId: string): void {
    this.taskStore.removeTask(taskId);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(7);
  }

  onToggleStatus(task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };
    this.taskStore.updateTask(updatedTask);
  }
}
