import { CanDeactivate } from '@angular/router';

export interface HasDirtyChecking {
  hasUnsavedChanges(): boolean;
}

export class PreventUnsavedChangesGuardService implements CanDeactivate<HasDirtyChecking> {

  canDeactivate(component: HasDirtyChecking): boolean {
    if (component.hasUnsavedChanges())
      return confirm("There's no saved data for this form. Are you sure want to exit?");

    return true;
  }
}