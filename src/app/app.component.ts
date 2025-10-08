//============================================
//=========== _1_to_7 ================
//============================================

//#region _1_to_7

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './_1_to_7/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'section-9-angular-project';
}

//#endregion