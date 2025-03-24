import { Component, OnInit } from '@angular/core';
// import { NgFor, NgModel } from '@angular/common'; // ✅ Import Angular built-in directives
import { NgFor } from '@angular/common'; // ✅ Import Angular built-in directives
import { FormsModule } from '@angular/forms'; // ✅ Required for [(ngModel)]
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: true, // ✅ Mark as standalone
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  // imports: [NgFor, NgModel, FormsModule] // ✅ Allow Angular to recognize these features
  imports: [NgFor, FormsModule] // ✅ Allow Angular to recognize these features
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

  async ngOnInit() {
    try {
      this.tasks = await this.taskService.getTasks();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  async addTask() {
    if (!this.newTaskTitle.trim()) return;
    try {
      const task = await this.taskService.addTask(this.newTaskTitle);
      this.tasks.push(task);
      this.newTaskTitle = '';
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }

  async toggleTask(task: Task) {
    try {
      // ✅ Ensure state is updated in the database
      const updatedTask = await this.taskService.updateTask(task.id, !task.completed);
      task.completed = updatedTask.completed; // ✅ Update UI after database update
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }

  async deleteTask(id: number) {
    try {
      await this.taskService.deleteTask(id);
      this.tasks = this.tasks.filter(task => task.id !== id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }
}
