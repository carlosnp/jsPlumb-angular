import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsplumbRoutingModule } from './jsplumb-routing.module';
import { CanvasComponent } from './pages/canvas/canvas.component';


@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    JsplumbRoutingModule
  ]
})
export class JsplumbModule { }
