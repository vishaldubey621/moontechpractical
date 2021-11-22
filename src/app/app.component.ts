import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practical';
  minDate : any
  
  public status = ['Active' , 'Closed' , 'Pending'];
  

  public todolist : FormGroup = new FormGroup ({

    title: new FormControl ('',[Validators.required]),
    assignDate :  new FormControl (4),
    dueDate :  new FormControl (),
    status :  new FormControl (),
});
  
constructor(private todoService : TodoService)
{}


  //function for disable past date
  public pastdatdisable()
  {
    var date :any = new Date();
    var todayDate : any = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    if (todayDate < 10)
    {
      todayDate = '0' + todayDate; 
    }

    if (month < 10)
    {
      month = '0' + month; 
    }
    this.minDate = year + "-" + month + "-" + todayDate
  }
  public onSubmit()
  {
    this.todoService.addtodo(this.todolist.value).subscribe((Response)=>{

      console.log("todo added succesfully");
      
    })

  }
}
