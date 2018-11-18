import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from './services/utils.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UtilsService],
  declarations: []
})
export class SharedModule { }
