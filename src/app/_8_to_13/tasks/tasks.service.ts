
//#region 7. Outsourcing & Reusing Logic with Services
// import { Injectable, signal } from '@angular/core';
// import { Task, TaskStatus } from './task.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class TasksService {
//   private tasks = signal<Task[]>([]);
//   allTasks = this.tasks.asReadonly();

//   addTask(taskData: { title: string; description: string }) {
//     const newTask: Task = {
//       ...taskData,
//       id: Math.random().toString(),
//       status: 'OPEN',
//     };
//     this.tasks.update((oldTasks) => [...oldTasks, newTask]);
//   }

//   updateTaskStatus(taskId: string, newStatus: TaskStatus) {
//     this.tasks.update((oldTasks) =>
//       oldTasks.map((task) =>
//         task.id === taskId ? { ...task, status: newStatus } : task
//       )
//     );
//   }
// }
//#endregion



//#region 8. Angular Has Multiple Injectors!
// import { Injectable, signal } from '@angular/core';
// import { Task, TaskStatus } from './task.model';

// //========= 1. 8. Angular Has Multiple Injectors!root Inject  ==========
// // if i remove this will give error and go to
// // ERROR NullInjectorError: R3InjectorError(Standalone[_AppComponent])[TasksService -> TasksService -> TasksService]: 

// // @Injectable({
// //   providedIn: 'root',
// // })


// export class TasksService {
//   private tasks = signal<Task[]>([]);
//   allTasks = this.tasks.asReadonly();

//   addTask(taskData: { title: string; description: string }) {
//     const newTask: Task = {
//       ...taskData,
//       id: Math.random().toString(),
//       status: 'OPEN',
//     };
//     this.tasks.update((oldTasks) => [...oldTasks, newTask]);
//   }

//   updateTaskStatus(taskId: string, newStatus: TaskStatus) {
//     this.tasks.update((oldTasks) =>
//       oldTasks.map((task) =>
//         task.id === taskId ? { ...task, status: newStatus } : task
//       )
//     );
//   }
// }
//#endregion




//#region 12. Injecting Services Into Services
import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

//========= 1. 8. Angular Has Multiple Injectors!root Inject  ==========
// if i remove this will give error and go to
// ERROR NullInjectorError: R3InjectorError(Standalone[_AppComponent])[TasksService -> TasksService -> TasksService]: 

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private loggingService = inject(LoggingService);

  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);

    this.loggingService.log("Added Task with Title " + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );

    
    this.loggingService.log("Change Task Status to " + newStatus);
  }
}
//#endregion