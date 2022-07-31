import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css', '../task-style.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  onClick(task: Task){
    this.taskService.deleteTask(task.id).subscribe(res => {
      this.getTasks();
    });
  }

  onToggle(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe(res => {
      this.getTasks();
    });
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe(res => {
      this.getTasks();
    });
  }
}
