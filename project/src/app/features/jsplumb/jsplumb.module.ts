import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Material */
import { MatButtonModule } from '@angular/material/button';
/** Rutas */
import { JsplumbRoutingModule } from './jsplumb-routing.module';
/** Core */
import { DialogsModule } from 'src/app/core';
/** Componentes */
import { CanvasComponent } from './pages/canvas/canvas.component';
import { JsplumbModalComponent } from './components/jsplumb-modal/jsplumb-modal.component';

@NgModule({
  declarations: [
    CanvasComponent,
    JsplumbModalComponent
  ],
  imports: [
    CommonModule,
    JsplumbRoutingModule,
    DialogsModule,
    MatButtonModule
  ]
})
export class JsplumbModule { }
