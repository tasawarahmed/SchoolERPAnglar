import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../task-style.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((res) => (this.showAddTask = res));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    //We are using service to do this simple task because we need to get that value at multiple places
    this.uiService.toggleAddTask();
  }
}
