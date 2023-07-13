import { EventEmitter, Injectable } from '@angular/core';
import { BaseService } from './base-api.service';
import { UserModel } from 'src/app/models/user/user-model';
import { LocalStorageService } from './localStorage.service';
import { AuthenticationResponseModel } from 'src/app/models/user/authentication-response-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  emmiter: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _baseService: BaseService<AuthenticationResponseModel>,
    private _localStorageService: LocalStorageService
  ) {
  }

  public login(userModel: UserModel): Observable<boolean> {
    this._baseService.post("api/Authenticate", userModel, false).subscribe(result => {
      this._localStorageService.set("token", result.token);
      return this.emmiter.next(true);
    })
    return this.emmiter;
  }
}
