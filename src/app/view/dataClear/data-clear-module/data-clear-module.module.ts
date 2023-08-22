import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataClearComponent } from '../data-clear/data-clear.component';
import { DataClearModuleRoutingModule } from './date-clear-module-routing.module';

@NgModule({
  declarations: [DataClearComponent],
  imports: [CommonModule, DataClearModuleRoutingModule],
})
export class DataClearModuleModule {}
