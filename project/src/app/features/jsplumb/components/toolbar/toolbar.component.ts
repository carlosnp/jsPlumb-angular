import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';

import {
  Subject
} from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnDestroy{
  /**
   * Stream para desuscribir
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Avercar
   */
  @Output()
  zoomIn: EventEmitter<void> = new EventEmitter<void>;
  /**
   * Alejar
   */
  @Output()
  zoomOut: EventEmitter<void> = new EventEmitter<void>;
  /**
   * copiar
   */
  @Output()
  copy: EventEmitter<void> = new EventEmitter<void>;
  /**
   * Editar
   */
  @Output()
  edit: EventEmitter<void> = new EventEmitter<void>;
  /**
   * Eliminar
   */
  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>;
  /**
   * Guardar
   */
  @Output()
  save: EventEmitter<void> = new EventEmitter<void>;
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
