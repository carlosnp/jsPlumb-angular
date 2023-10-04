import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';

import {
  Subject
} from 'rxjs';

import {
  DialogWidth
} from '../../enums';

import {
  DialogType
} from '../../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnDestroy {
  /**
   * Stream para desuscribir
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Tipos de dialogo
   */
  types = DialogType;
  /**
   * Tamaños de dialogo
   */
  widths = DialogWidth;
  /**
   * Dialog title
   */
  @Input()
  title!: string;
  /**
   * Tipo del modal
   */
  @Input()
  type: DialogType = DialogType.ALERT;
  /**
   * Loading para el dialogo tipo ALERT
   */
  @Input()
  loading!: boolean;
  /**
   * Close event
   */
  @Output()
  closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   * Cerrar el dialogo
   */
  close(confirm: boolean) {
    this.closeDialog.emit(confirm);
  }
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
