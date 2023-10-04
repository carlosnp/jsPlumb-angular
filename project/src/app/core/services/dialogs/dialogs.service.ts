import {
  ComponentType
} from '@angular/cdk/portal';

import {
  Injectable
} from '@angular/core';

import {
  MatDialog
} from '@angular/material/dialog';

import {
  firstValueFrom,
} from 'rxjs';

import {
  DialogWidth
} from './enums';

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
   * de diálogo con el comando `npm run create-dialog`
   * @param component componente para el diálogo
   * @param data data para el diálogo
   * @param width tamaño del dialogo
   */
  open(component: ComponentType<unknown>, data: {[key: string]: any} = {}, width: DialogWidth | number = DialogWidth.SMALL): Promise<unknown> {
    // Referencia del componente
    const ref = this.dialog.open(component, { width: '100%', maxWidth: width, data });
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
