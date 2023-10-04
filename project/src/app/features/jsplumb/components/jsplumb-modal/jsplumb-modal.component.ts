import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy
} from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import {
  BehaviorSubject,
  Subject
} from 'rxjs';

import {
  DialogType
} from 'src/app/core';

@Component({
  selector: 'app-jsplumb-modal',
  templateUrl: './jsplumb-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsplumbModalComponent implements OnDestroy{
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Estado de loading
   */
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  /**
   * Tipos de dialogo
   */
  type = DialogType.ALERT;
  /**
   * Constructor del componente
   */
  constructor(
    public dialogRef: MatDialogRef<JsplumbModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string, name: string }
  ) { }
  /**
   * Cerrar el dialogo emitiendo valores
   */
  close(confirm: boolean) {
    if (this.loading$.getValue()) { return; }
    if (confirm) {
      this.dialogRef.close(true)
    }
    else { this.dialogRef.close(); }
  }
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
