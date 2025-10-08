
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
import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

//========= 1. root Inject  ==========
// if i remove this will give error and go to
// ERROR NullInjectorError: R3InjectorError(Standalone[_AppComponent])[TasksService -> TasksService -> TasksService]: 

// @Injectable({
//   providedIn: 'root',
// })


export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
//#endregion