import { UserFormComponent } from './user-form/user-form.component';
import { CanDeactivate } from '@angular/router';


export class PreventUnsavedChangesGuardService implements CanDeactivate<UserFormComponent> {

  canDeactivate(component: UserFormComponent): boolean {
    if (component.form.dirty)
      return confirm('Existem dados não salvos. Deseja mesmo sair desta tela?');

    return true;
  }
}