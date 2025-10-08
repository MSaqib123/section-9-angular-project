//#region Class #8
// import { Component } from '@angular/core';
// import { NewTaskComponent } from './new-task/new-task.component';
// import { TasksListComponent } from './tasks-list/tasks-list.component';
// import { TasksService } from './tasks.service';

// @Component({
//   selector: 'app-tasks',
//   standalone: true,
//   templateUrl: './tasks.component.html',
//   imports: [NewTaskComponent, TasksListComponent],
//   //======== Element Injector =======
//   providers: [TasksService]
// })
// export class TasksComponent {}

//#endregion


//#region 10. Providing Services via the Element Injector
import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  //======== Element Injector =======
  providers: [TasksService]
})
export class TasksComponent {}

//#endregion