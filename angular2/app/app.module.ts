import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent} from '../app/header/header.component';
import { LoaderComponent} from '../app/loader/loader.component';
import { UsersComponent} from '../app/users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent, 
    LoaderComponent,
    UsersComponent       
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }