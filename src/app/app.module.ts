import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { LoggerService } from 'utils';

// The Angular Material module (which is imported in the Core module) must be imported after Angular's BrowserModule, as the import
// order matters for NgModules.

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,  // import HttpClientModule after BrowserModule
    SharedModule
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

  constructor(private logger: LoggerService) {

    this.logger.info('App Module initialised');
  }

}

/*

//
// Utils lib
//

import { UtilsModule } from 'utils';
import { LoggerService } from 'utils';
import { ConsoleLoggerService } from 'utils';

    UtilsModule

  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService }
  ],

  constructor(private logger: LoggerService) {}

*/

/*

// import { AppRoutingModule } from './app-routing.module';
// AppRoutingModule,

// import { StaticInjectorService } from '@app/core';

Injector

  constructor(public injector: Injector) {

    StaticInjectorService.setInjector(injector);
  }

*/
