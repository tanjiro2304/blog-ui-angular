import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
  declarations: [
    AppComponent,
    CardComponent,
    ServerComponent,
    HeaderComponent,
    UserComponentComponent,
    SimpleCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
