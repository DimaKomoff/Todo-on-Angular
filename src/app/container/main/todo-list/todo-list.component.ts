import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Task } from 'src/app/shared/interfaces/task';
import { ActionsService } from 'src/app/shared/services/actions.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  key = 'data';
  tasks: Task[];

  constructor(private storageService: StorageService,
    private actionsService: ActionsService) { }

  ngOnInit() {
    this.actionsService.actionForTodo
      .subscribe((todoValue: string) => {
        this.tasks.push({
          name: todoValue
        });
        this.storageService.setData(this.key, this.tasks);
      });
    const dataFromStorage = this.storageService.getData(this.key);
    if (!dataFromStorage) {
      const tasks = [
        { name: 'Make a cofee' },
        { name: 'Start learning Angular' }
      ];
      this.storageService.setData(this.key, tasks);
      this.tasks = tasks;
      return;
    }
    this.tasks = dataFromStorage;
  }

  ngOnDestroy() {
    this.storageService.setData(this.key, this.tasks);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.storageService.setData(this.key, this.tasks);
    if ( this.tasks.length < 1 ) { this.storageService.storage.clear(); }
  }

}
