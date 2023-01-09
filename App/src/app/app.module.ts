import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule} from '@angular/common/http'

import { ModalComponent } from './components/modal/modal.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule,FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [HttpClient,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
