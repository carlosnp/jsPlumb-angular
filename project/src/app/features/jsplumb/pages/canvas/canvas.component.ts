import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy
} from '@angular/core';

import {
  Subject
} from 'rxjs';

import {
  DialogsService
} from 'src/app/core/services';

import {
  JsplumbModalComponent
} from '../../components/jsplumb-modal/jsplumb-modal.component';

import {
  JsplumbNodeService
} from '../../jsplumb-node.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements OnDestroy{
  /**
   * Stream para desuscribir
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Nodos
   */
  nodes = [];
  /**
   * Conexiones
   */
  connections = [];
  /**
   * Constructor
   * @param dialog
   */
  constructor(
    private dialog: DialogsService,
    private nodeService: JsplumbNodeService
  ) {}
  /**
   * Delete entity
   * @param id entity id
   * @param name entity name
   */
  openDialog(id: string, name: string) {
    const ref$ = this.dialog.open(JsplumbModalComponent, { id, name }, { maxWidth: 650 });
    ref$.then( result => console.log('Dialog', result));
  }
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
