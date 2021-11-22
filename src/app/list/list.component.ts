import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allData: Object | undefined;

  constructor(private todoService : TodoService)
{}

  ngOnInit(): void {
  }

  public getlatestdata()
  {
    this.todoService.getdata().subscribe((Response)=>{

      this.allData=Response
    })

  }
  public deleteTask(data.id)
  {
      alert("Are you sure want to delete task")
        this.todoService.deletedata(id);
  }
  public editTask(data:any)
  {
    this.todoService.editdata(id:any, data)).subscribe((Response)=>{

      console.log("todo added succesfully"); 
   
        
  }
}

