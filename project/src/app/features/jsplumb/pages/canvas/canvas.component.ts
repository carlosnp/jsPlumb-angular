import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
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
export class CanvasComponent implements OnDestroy, OnInit{
  /**
   * Stream para desuscribir
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   *
   */
  @ViewChild('canvas')
  canvas!: ViewContainerRef
  /**
   * Constructor
   * @param dialog
   */
  constructor(
    private dialog: DialogsService,
    private nodeService: JsplumbNodeService
  ) {}
  ngOnInit(): void {
    console.log('canvas', this.canvas);
    if (this.canvas) {
      this.nodeService.initInstanceJsplumb(this.canvas);
    }
  }
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
   *Acercar
   */
  zoomIn() {
    console.log('Zoom in');
  }
  /**
   * Alejar
   */
  zoomOut() {
    console.log('Zoom out');
  }
  /**
   * Copiar
   */
  copy() {
    console.log('copy');
  }
  /**
   * Editar
   */
  edit() {
    console.log('edit');
  }
  /**
   * Eliminar
   */
  remove() {
    console.log('remove');
  }
  /**
   * Guardar
   */
  save() {
    console.log('save');
  }
  /**
   * Agregar caja
   */
  addBox() {
    console.log('addBox');
  }
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
