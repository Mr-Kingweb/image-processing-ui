import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataClearModuleModule } from './view/dataClear/data-clear-module/data-clear-module.module';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/joker' },
  // 数据清洗管理
  {
    path: 'joker',
    // loadChildren: () =>
    //   import(
    //     './view/dataClear/data-clear-module/data-clear-module.module'
    //   ).then((m) => m.DataClearModuleModule),
    component: DataClearModuleModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
