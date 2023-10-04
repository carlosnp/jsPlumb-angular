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

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogAlertComponent implements OnDestroy {
  /**
   * Stream para desuscribir
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Loading status
   */
  @Input()
  loading!: boolean;
  /**
   * Cerrar dialogo
   */
  @Output()
  closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
