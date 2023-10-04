import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { NodeModel } from '../../models';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements AfterViewInit{
  /**
   * Nodo
   */
  @Input()
  node?: NodeModel;
  /**
   * Intancia
   */
  @Input()
  jsPlumbInstance: any;
  /**
   * Despues de cargar la pantalla
   */
  ngAfterViewInit() {
    const exampleDropOptions = {
      tolerance: 'touch',
      hoverClass: 'dropHover',
      activeClass: 'dragActive'
    };
    let Endpoint1 = {
      endpoint: ['Dot', { radius: 7 }],
      paintStyle: { fill: '#99cb3a' },
      isSource: true,
      scope: 'jsPlumb_DefaultScope',
      connectorStyle: { stroke: '#99cb3a', strokeWidth: 3 },
      connector: ['Bezier', { curviness: 63 }],
      maxConnections: 30,
      isTarget: false,
      connectorOverlays: [['Arrow', { location: 1 }]],
      dropOptions: exampleDropOptions
    };
    let Endpoint2 = {
      endpoint: ['Dot', { radius: 4 }],
      paintStyle: { fill: '#ffcb3a' },
      isSource: false,
      scope: 'jsPlumb_DefaultScope',
      maxConnections: 1,
      isTarget: true,
      dropOptions: exampleDropOptions
    };
    const { id } = this.node ? this.node : {id: "NaN"};
    this.jsPlumbInstance.addEndpoint(id, { anchor: 'Bottom', uuid: id + '_bottom' }, Endpoint1);
    this.jsPlumbInstance.addEndpoint(id, { anchor: 'Top', uuid: id + '_top' }, Endpoint2);
    this.jsPlumbInstance.draggable(id);
  }
}
