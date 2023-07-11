import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientsComponent, CreateClientComponent, ListClientComponent, DetailsClientComponent, UpdateClientComponent],
  exports: [ClientsComponent, CreateClientComponent, ListClientComponent, DetailsClientComponent, UpdateClientComponent]
})
export class ClientsModule { }
