import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user/user-model';
import { AuthenticationService } from 'src/app/services/shared/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  userModel: UserModel = new UserModel();


  login() {
    this.authenticationService.login(this.userModel).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl("products-list");
    });
  }
}
