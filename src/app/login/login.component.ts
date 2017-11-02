import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  login(): void {
    console.log(this.username);
    console.log(this.password);
  }

}
