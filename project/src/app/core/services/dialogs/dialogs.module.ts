import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Material */
import { MatDialogModule } from '@angular/material/dialog';
/** Servicio */
import { DialogsService } from './dialogs.service';
/** Componentes */
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogAlertComponent } from './components/dialog-alert/dialog-alert.component';
import { DialogSimpleComponent } from './components/dialog-simple/dialog-simple.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    DialogComponent,
    DialogAlertComponent,
    DialogSimpleComponent,
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  providers: [
    DialogsService
  ],
  exports: [
    MatDialogModule,
    DialogComponent,
  ]
})
export class DialogsModule { }
