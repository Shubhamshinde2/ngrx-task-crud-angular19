import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManagerComponent } from "./Tasks/task-manager/task-manager.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-manager';
}
