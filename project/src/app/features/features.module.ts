import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features/features.component';
import { ToolbarModule } from '../core/toolbar/toolbar.module';


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ToolbarModule
  ]
})
export class FeaturesModule { }
