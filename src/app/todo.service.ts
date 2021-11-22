import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  public addtodo(data: any)
  {
    return this.http.post('http://localhost:3000/todo',data);
  }
  public getdata()
  {
    return this.http.get('http://localhost:3000/todo'); 
  }

  public deletedata(id :any)
  {
    return this.http.delete('http://localhost:3000/todo'+ id )
  }
  public editdata(id :any,data : any)
  {
    return this.http.post ('http://localhost:3000/todo'+ '/list' +id,JSON.stringify(data) )
  }
}
