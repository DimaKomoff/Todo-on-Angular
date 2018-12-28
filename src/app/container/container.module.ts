import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './main/todo-list/todo-item/todo-item.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './main/todo-list/todo-list.component';
import { ContainerComponent } from './container.component';
import { InputComponent } from './footer/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

const MAIN_COMPONENTS = [
  ContainerComponent,
  HeaderComponent,
  MainComponent,
  FooterComponent,
  TodoListComponent,
  TodoItemComponent,
  InputComponent
];

@NgModule({
  declarations: [MAIN_COMPONENTS],
  exports: [MAIN_COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContainerModule { }
