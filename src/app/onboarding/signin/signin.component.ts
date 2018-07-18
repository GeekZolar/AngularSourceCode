import { Component} from '@angular/core';
import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'Signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../onboarding.component.scss']
})

export class SigninComponent {
  message: string;

  constructor(public userAuthService: AuthService) {
    this.message = '';
    }

  signin(username: string, password: string): boolean {
    this.message = '';
    
    if (!this.userAuthService.signin(username, password)) {

      this.message = 'Incorrect Credentials.';

      setTimeout(
        function() {
          this.message = '';
        }
        .bind(this), 10000);
    }
    return false;
  }

  signout(): boolean {
    this.userAuthService.signout();
    return false;
  }

 
}
