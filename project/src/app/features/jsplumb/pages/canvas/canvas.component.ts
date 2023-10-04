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
    const ref$ = this.dialog.open(JsplumbModalComponent, { id, name }, );
    ref$.then( result => console.log('Dialog', result));
  }
  fillFromJson() {
    const json = `{"nodes":[{"id":"Step_0 id: b46a17","top":177,"left":146},{"id":"Step_1 id: efd2ce","top":302,"left":130},{"id":"Step id_2eb091","top":41,"left":158}],"connections":[{"uuids":["Step_0 id: b46a17_bottom","Step_1 id: efd2ce_top"]},{"uuids":["Step id_2eb091_bottom","Step_0 id: b46a17_top"]}]}`;
    const data = JSON.parse(json);
    this.nodes = data.nodes;
    this.connections = data.connections;
  }
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
