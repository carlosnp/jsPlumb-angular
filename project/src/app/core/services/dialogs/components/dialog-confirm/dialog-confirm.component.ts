import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy
} from '@angular/core';

import {
  Subject
} from 'rxjs';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogConfirmComponent implements OnDestroy{
  /**
   * Stream para desuscribir
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Component on destroy
   */
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
