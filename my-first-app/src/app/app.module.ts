import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './entrega-1/mi-primer-componente/mi-primer-componente.component';
import { MenuComponent } from './entrega-1/menu/menu.component';
import { ContentComponent } from './entrega-1/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
