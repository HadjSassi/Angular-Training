import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-signin',
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

  isAuth : boolean = false;

  constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.isAuth = this.authService.isAuth;
    }

    onSignin(){
       this.authService.signIn();
       this.isAuth = this.authService.isAuth;
    }

    onSignOut(){
       this.authService.signOut();
       this.isAuth = this.authService.isAuth;
    }

}
