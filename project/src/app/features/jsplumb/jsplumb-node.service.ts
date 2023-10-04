import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef
} from '@angular/core';

import * as JsPlumb from 'jsplumb';

import {
  NodeComponent
} from './components/node/node.component';

import {
  NodeModel
} from './models';

@Injectable({
  providedIn: 'root'
})
export class JsplumbNodeService {
  /**
   *
   */
  private rootViewContainer: any;
  /**
   *
   */
  jsPlumbInstance = JsPlumb.jsPlumb.getInstance();
  /**
   * Constructor
   * @param factoryResolver
   */
  constructor(private factoryResolver: ComponentFactoryResolver) { }
  /**
   *
   * @param viewContainerRef
   */
  public setRootViewContainerRef(viewContainerRef: any) {
    this.rootViewContainer = viewContainerRef;
  }
  /**
   * Agregar nodo dinamico
   * @param node
   */
  public addDynamicNode(node: NodeModel) {
    const factory = this.factoryResolver.resolveComponentFactory(NodeComponent);
    console.log('\nFactory',factory);
    console.log('\nrootViewContaine', this.rootViewContainer)
    const component = factory.create(this.rootViewContainer.parentInjector);
    console.log('\nComponent',component);
    (<any>component.instance).node = node;
    (<any>component.instance).jsPlumbInstance = this.jsPlumbInstance;
    this.rootViewContainer.insert(component.hostView);
    console.log("in NodeService.." , component.instance );
  }
  /**
   * Agregar conexion
   * @param connection
   */
  addConnection(connection: { uuids: any; }) {
    this.jsPlumbInstance.connect({ uuids: connection.uuids });
  }
  /**
   * Limpiar
   */
  public clear() {
    this.rootViewContainer.clear();
  }
}
