import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component'; // ✅ Import standalone component

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Mark as standalone
  imports: [TaskListComponent], // ✅ Use TaskListComponent directly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enpal-frontend';
}
