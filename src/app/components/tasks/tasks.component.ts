import { Task } from '../../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',

  templateUrl: './../tasks/tasks.component.html',

  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[]=[]
  nameTask:string='';
  constructor() { }


  ngOnInit(): void {
  }

  saveTask(){
      console.log(this.nameTask);
      const Task:Task={
        name: this.nameTask,
        state:false
      }

      this.listTasks.push(Task);

      this.nameTask=''
  }

  updateTask(task:Task, i:number){
    this.listTasks[i].state=!task.state;
  }

  deleteTask(i:number){
    console.log(i);
    this.listTasks.splice(i,1);
  }

}
