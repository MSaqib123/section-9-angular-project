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
//   // this TasksService only injected in   Task and its child components
//   // so this will not work in App Component 
//   // BUG this is drop back of   Element injector
//   // BUG this does not changes Multiple instance of same Component
  
//   providers: [TasksService]
// })
// export class TasksComponent {}

//#endregion


//#region 12. Injecting Services Into Services
import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
})
export class TasksComponent {}

//#endregion