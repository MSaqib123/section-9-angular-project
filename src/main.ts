//============================================
//=========== _1_to_7 ================
//============================================
//#region 

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

//#endregion




//============================================
//=========== _8_to_13 ================
//============================================
//#region 9. There Are Multiple Ways Of Providing a Service

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TasksService } from './app/_8_to_13/tasks/tasks.service';

bootstrapApplication(AppComponent,{
  // this does not allow  Tree shaking
  // this will be used everytime , means this is not good for performance way
  providers: [TasksService]
})
  .catch((err) => console.error(err));
//#endregion
