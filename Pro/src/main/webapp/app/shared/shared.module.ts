import { NgModule } from '@angular/core';
import { ProSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [ProSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [ProSharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective]
})
export class ProSharedModule {}
