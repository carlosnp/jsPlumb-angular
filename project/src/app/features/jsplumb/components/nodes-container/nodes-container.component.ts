import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {
  JsplumbNodeService
} from '../../jsplumb-node.service';

@Component({
  selector: 'app-nodes-container',
  templateUrl: './nodes-container.component.html',
  styleUrls: ['./nodes-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesContainerComponent implements OnInit, OnChanges {
  /**
   * Nodos
   */
  @Input()
  nodes = [];
  /**
   * Conexiones
   */
  @Input() connections = [];
  /**
   * Nodos
   */
  @ViewChild('nodes', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;
  /**
   * Constructor
   * @param nodeService
   */
  constructor(private nodeService: JsplumbNodeService) {}
  /**
   * Agregar nodo
   */
  addNode() {
    const node = { id: "Step id_"  + [Math.random().toString(16).slice(2, 8)] };
    this.nodeService.addDynamicNode(node);
  }
  /**
   * Guardar json
   */
  saveNodeJson(){
    //save element position on Canvas and node conections
    const container = this.viewContainerRef.element.nativeElement.parentNode;
    const nodes = Array.from(container.querySelectorAll('.node')).map((node: any) => {
      console.log('node', node)
      return {
        id: node.id,
        top: node.offsetTop,
        left: node.offsetLeft,
      }
    });
    const connections = (this.nodeService.jsPlumbInstance.getAllConnections() as any[])
        .map((conn) => ({ uuids: conn.getUuids() }));
    const json = JSON.stringify({ nodes, connections });
    console.log(json);
  }
  /**
   * OnInit
   */
  ngOnInit() {
    console.log('\nviewContainerRef', this.viewContainerRef);
    this.nodeService.setRootViewContainerRef(this.viewContainerRef);

    this.nodes.forEach(node => {
      this.nodeService.addDynamicNode(node);
    });

    setTimeout(() => {
      this.connections.forEach(connection => {
        this.nodeService.addConnection(connection);
      });
    })
  }
  /**
   *
   */
  ngOnChanges(){
    this.nodeService.setRootViewContainerRef(this.viewContainerRef);
    console.log('NodesContainerComponent call >>  nodeService.addDynamicNode')
    if (this.nodes.length > 0) {
        this.nodeService.addDynamicNode(this.nodes[this.nodes.length-1]);
    }
  }
}
