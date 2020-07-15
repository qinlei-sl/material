import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component'; 
import { TableFilterComponent } from './table-filter/table-filter.component';

const routes: Routes = [
  { path: '', component: MaterialComponent },
  { path: 'filter', component: TableFilterComponent },
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
