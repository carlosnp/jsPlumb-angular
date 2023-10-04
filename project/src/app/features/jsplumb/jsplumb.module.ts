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
import { NodeComponent } from './components/node/node.component';
import { NodesContainerComponent } from './components/nodes-container/nodes-container.component';
/** Servicios */
import { JsplumbNodeService } from './jsplumb-node.service';


@NgModule({
  declarations: [
    CanvasComponent,
    JsplumbModalComponent,
    NodeComponent,
    NodesContainerComponent
  ],
  imports: [
    CommonModule,
    JsplumbRoutingModule,
    DialogsModule,
    MatButtonModule
  ],
  providers: [
    JsplumbNodeService
  ]
})
export class JsplumbModule { }
