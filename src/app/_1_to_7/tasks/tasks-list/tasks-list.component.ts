//#region Class #2
// import { Component, signal } from '@angular/core';
// import { TaskItemComponent } from './task-item/task-item.component';

// @Component({
//   selector: 'app-tasks-list',
//   standalone: true,
//   templateUrl: './tasks-list.component.html',
//   styleUrl: './tasks-list.component.css',
//   imports: [TaskItemComponent],
// })
// export class TasksListComponent {
//   selectedFilter = signal<string>('all');
//   tasks = [];

//   onChangeTasksFilter(filter: string) {
//     this.selectedFilter.set(filter);
//   }
// }

//#endregion

//#region 6. Using The Alternative Dependency Injection Syntax
import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService);
  selectedFilter = signal<string>('all');
  tasks = this.tasksService.allTasks;

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}

//#endregion