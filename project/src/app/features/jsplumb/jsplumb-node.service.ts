import {
  ComponentFactoryResolver,
  ElementRef,
  Injectable,
  ViewContainerRef
} from '@angular/core';

import {
  NodeModel
} from './models';

import { ready, newInstance } from "@jsplumb/browser-ui"

@Injectable({
  providedIn: 'root'
})
export class JsplumbNodeService {
  /**
   * Constructor
   * @param factoryResolver
   */
  constructor() { }
}
