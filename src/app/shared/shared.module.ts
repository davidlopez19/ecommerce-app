import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, AuthenticationComponent, NotFoundComponent, PreferencesComponent],
  exports: [SharedComponent, AuthenticationComponent, NotFoundComponent, PreferencesComponent]
})
export class SharedModule { }
