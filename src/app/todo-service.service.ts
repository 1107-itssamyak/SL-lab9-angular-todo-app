import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class TodoServiceService {
  public todolist = [
    {"sno":1,"Task":"Morning Walk"},
    {"sno":2,"Task":"Gym "},
    {"sno":3,"Task":"Attand Class"},
    {"sno":4,"Task":"Lunch at 9am"},
  ]
  getlist(){
    return this.todolist
  }
  constructor() { }
}
