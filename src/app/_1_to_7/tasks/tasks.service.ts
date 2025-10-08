//#region 3. Creating a Service
// import { Injectable, signal } from "@angular/core";
// import { Task } from "./task.model";

// @Injectable({
//     providedIn:'root'
// })
// export class TasksService{
//     tasks = signal<Task[]>([]);

//     addTask(taskData:{title:string; description:string}){
//         const newTask:Task = {
//             ...taskData,
//             id:Math.random().toString(),
//             status:'OPEN'
//         }
//         this.tasks.update((oldTasks)=> [...oldTasks,newTask] )
//     }
// }
//#endregion

//#region 6. Using The Alternative Dependency Injection Syntax
// import { Injectable, signal } from "@angular/core";
// import { Task } from "./task.model";

// @Injectable({
//     providedIn:'root'
// })
// export class TasksService{

//     private tasks = signal<Task[]>([]);
//     allTasks = this.tasks.asReadonly();

//     addTask(taskData:{title:string; description:string}){
//         const newTask:Task = {
//             ...taskData,
//             id:Math.random().toString(),
//             status:'OPEN'
//         }
//         this.tasks.update((oldTasks)=> [...oldTasks,newTask] )
//     }
// }
//#endregion

//#region 7. Outsourcing & Reusing Logic with Services
import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
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
