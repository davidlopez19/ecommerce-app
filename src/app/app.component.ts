import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] | undefined;
  title = 'ecommerce-app';

  constructor() {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-file',
        url: 'login',
        target: "_self"
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Crear',
            icon: 'pi pi-fw pi-align-left',
            url: 'products-create',
            target: "_self"
          },
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-align-right',
            url: 'products-list',
            target: "_self"
          }
        ]
      },
      {
        label: 'Compras',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Crear',
            icon: 'pi pi-fw pi-user-plus',
            target: "_self",
            url: "shopping-create"
          },
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-user-minus',
            target: "_self",
            url: "shopping-list"
          },
        ]
      },
      {
        label: 'Clients',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Crear',
            icon: 'pi pi-fw pi-calendar-plus',
            target: "_self",
            url: 'clients-create'
          },
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-calendar-minus',
            target: "_self",
            url: 'clients-list'
          }
        ]
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        target: "_self"
      }
    ];
  }

}
