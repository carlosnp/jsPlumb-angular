import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './pages/canvas/canvas.component';

const routes: Routes = [
  {
    path: '',
    component: CanvasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsplumbRoutingModule { }
