import { Injectable } from '@angular/core';
import axios from 'axios';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  async getTasks(): Promise<Task[]> {
    const response = await axios.get<Task[]>(this.apiUrl);
    return response.data;
  }

  async addTask(title: string): Promise<Task> {
    const response = await axios.post<Task>(this.apiUrl, { title });
    return response.data;
  }

  async updateTask(id: number, completed: boolean): Promise<Task> {
    const response = await axios.patch<Task>(`${this.apiUrl}/${id}`, { completed });
    return response.data;
  }

  async deleteTask(id: number): Promise<void> {
    await axios.delete(`${this.apiUrl}/${id}`);
  }
}
