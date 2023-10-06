import {
  ElementRef,
  Injectable,
  ViewContainerRef
} from '@angular/core';

import {
  NodeModel
} from './models';

import {
  ready,
  newInstance,
  BrowserJsPlumbInstance
} from "@jsplumb/browser-ui";

import {
  BehaviorSubject,
  Subject
} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class JsplumbNodeService {
  /**
   * Stream con la instancia de jsplum
   */
  instance$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  /**
   * Constructor
   * @param factoryResolver
   */
  constructor() { }
  /**
   * Iniciar instancia de jsplum
   * @param element
   * @returns
   */
  initInstanceJsplumb(element: ViewContainerRef) {
    /** Instancia */
    const instante = newInstance({
      container:element.element.nativeElement,
    });
    this.instance$.next(instante);
    return instante;
  }
  /**
   * Agregar un elemento a la lista
   * @param element
   */
  addEndpoint(element: ElementRef) {
    const instance = this.instance$.value;
    instance.addEndpoint(element.nativeElement, { endpoint:'Dot' });
    this.instance$.next(instance);
  }
}
