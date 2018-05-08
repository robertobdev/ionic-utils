import { NgModule, ModuleWithProviders } from '@angular/core';
import { UtilsProvider } from './providers/utils-provider';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [],
  exports: []
})
export class IonicUtilsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicUtilsModule,
      providers: [UtilsProvider]
    };
  }
}