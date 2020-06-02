import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConexionesService } from './conexiones.service';
import { FincasComponent } from './fincas/fincas.component';
import { PostFincaComponent } from './post-finca/post-finca.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, FincasComponent, PostFincaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConexionesService]
})
export class AppModule { }
