import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { profileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , LoginComponent , SignupComponent , profileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angualr19Pro';
}
