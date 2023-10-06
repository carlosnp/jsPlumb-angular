import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Material */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
/** Rutas */
import { JsplumbRoutingModule } from './jsplumb-routing.module';
/** Core */
import { DialogsModule } from 'src/app/core';
/** Componentes */
import { CanvasComponent } from './pages/canvas/canvas.component';
import { JsplumbModalComponent } from './components/jsplumb-modal/jsplumb-modal.component';
/** Servicios */
import { JsplumbNodeService } from './jsplumb-node.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';


@NgModule({
  declarations: [
    CanvasComponent,
    JsplumbModalComponent,
    ToolbarComponent,
    ToolboxComponent,
  ],
  imports: [
    CommonModule,
    JsplumbRoutingModule,
    DialogsModule,
    // Material
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    JsplumbNodeService
  ]
})
export class JsplumbModule { }
