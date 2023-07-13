import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/shared/base-api.service';
import { AuthenticationService } from '../services/shared/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  declarations: [SharedComponent, AuthenticationComponent, NotFoundComponent, PreferencesComponent],
  exports: [SharedComponent, AuthenticationComponent, NotFoundComponent, PreferencesComponent],
  providers: [HttpClient, BaseService, AuthenticationService],
})
export class SharedModule { }
