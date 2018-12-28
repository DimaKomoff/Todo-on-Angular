import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/shared/services/actions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})



export class InputComponent implements OnInit {
  inputValue: string;
  constructor(private actionService: ActionsService) { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }


  addNewTodo(inputValue: string): void {
    this.actionService.addTodo(inputValue);
    this.inputValue = '';
  }
}
