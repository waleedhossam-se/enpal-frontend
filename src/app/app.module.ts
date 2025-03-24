import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule (Required for API Calls)
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule  // ✅ Added this for API requests
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
