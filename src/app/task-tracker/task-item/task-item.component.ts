import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css', '../task-style.css']
})
export class TaskItemComponent implements OnInit {
  @Output() btnClick: EventEmitter<Task> = new EventEmitter();
  @Output() btnToggleReminder: EventEmitter<Task> = new EventEmitter();

  @Input() task : Task = {
    id: 0,
    text: '',
    day: '',
    reminder: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.btnClick.emit(task);
  }

  onToggle(task: Task){
    this.btnToggleReminder.emit(task);
  }


}
