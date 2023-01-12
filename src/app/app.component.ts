import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Training';
  idNum: number = 4;

  todoTitle: string = '';
  isAddOperation: boolean = true;
  btnValStr: string = 'Add';
  selTodoId: number = -1;

  todoArr: any = [
    {
      id: 0,
      todoTitle: 'buy Phone',
    },
    {
      id: 1,
      todoTitle: 'buy Cloths',
    },
    {
      id: 2,
      todoTitle: 'buy Sweets',
    },
    {
      id: 3,
      todoTitle: 'buy Books',
    },
  ];

  ngOnint() {}

  addEditTodo() {
    if (this.isAddOperation) {
      this.todoArr.push({
        todoTitle: this.todoTitle,
        id: this.idNum++,
      });
    } else {
      for (let i = 0; i < this.todoArr.length; i++) {
        if (this.selTodoId === this.todoArr[i]['id']) {
          this.todoArr[i]['todoTitle'] = this.todoTitle;
          break;
        }
      }
    }
    this.isAddOperation = true;
    this.todoTitle = '';
  }

  deleteTodo(todoId: number) {
    const tempArr = [];

    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i]['id'] != todoId) {
        tempArr.push(this.todoArr[i]);
      }
    }
    this.todoArr = tempArr;
  }

  editTodo(todoId: number) {
    this.btnValStr = 'Edit';
    this.isAddOperation = false;
    this.selTodoId = todoId;
    for (let i = 0; i < this.todoArr.length; i++) {
      if (todoId === this.todoArr[i]['id']) {
        console.log(this.todoArr[i]['todoTitle']);
        this.todoTitle = this.todoArr[i]['todoTitle'];
      }
    }
  }
}
