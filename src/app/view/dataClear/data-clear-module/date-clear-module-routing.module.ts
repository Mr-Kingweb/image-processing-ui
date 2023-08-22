import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataClearComponent } from '../data-clear/data-clear.component';

const routes: Routes = [
  { path: 'index', component: DataClearComponent, data: { reload: true } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataClearModuleRoutingModule {}
