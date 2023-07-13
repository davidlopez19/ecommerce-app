import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { MenubarModule } from 'primeng/menubar';
import { ShoppingModule } from './shopping/shopping.module';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';
import { FormsModule } from '@angular/forms';
import { BaseService } from './services/shared/base-api.service';
import { AuthenticationService } from './services/shared/authentication.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './services/shared/localStorage.service';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    MenubarModule,
    ShoppingModule,
    ProductsModule,
    ClientsModule,
    FormsModule,
    HttpClientModule,
    CardModule
  ],
  providers: [BaseService, AuthenticationService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
