import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css', '../task-style.css'],
})
export class AddTaskComponent implements OnInit {
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((res) => (this.showAddTask = res));
  }

  ngOnInit(): void {}

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
    }

    const newTask: Task = {
      id: 0,
      day: this.day,
      text: this.text,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.day = this.text = '';
    this.reminder = false;
  }
}
