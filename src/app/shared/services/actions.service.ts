import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  actionForTodo$: Subject<string> = new Subject<string>();
  actionForTodo = this.actionForTodo$.asObservable();

  constructor() { }

  addTodo(value: string): void {
    this.actionForTodo$.next(value);
  }
}
