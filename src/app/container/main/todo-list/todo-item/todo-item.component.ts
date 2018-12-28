import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Output() deleteTask = new EventEmitter<Task>();

  @Input()
  name;

  @Input()
  index;


  delete() {
    this.deleteTask.emit(
      this.index
    );
  }
}
