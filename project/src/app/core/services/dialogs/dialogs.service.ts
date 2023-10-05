import {
  ComponentType
} from '@angular/cdk/portal';

import {
  Injectable
} from '@angular/core';

import {
  MatDialog,
  MatDialogConfig
} from '@angular/material/dialog';

import {
  firstValueFrom,
} from 'rxjs';

import {
  DialogWidth
} from './enums';

/** Configuracion por defecto */
const DEFAULT_STYLE: MatDialogConfig ={
  width: '100%',
  maxWidth: DialogWidth.SMALL
}

@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  /**
   * Constructor del diálogo
   * @param dialog MatDialog
   */
  constructor(
    private dialog: MatDialog
  ) { }
  /**
   * Abrir un diálogo. Puedes generar un componente
   * @param component componente para el diálogo
   * @param data data para el diálogo
   * @param style Configuracion del dialogo
   */
  open(component: ComponentType<unknown>, data: {[key: string]: any} = {}, style: MatDialogConfig = DEFAULT_STYLE): Promise<unknown> {
    // Referencia del componente
    const ref = this.dialog.open(component, { ...style, data });
    // Retornar el resultado
    return firstValueFrom(ref.afterClosed());
  }
  /**
   * Cerrar todos los diálogos
   */
  closeAll() {
    this.dialog.closeAll();
  }
}
