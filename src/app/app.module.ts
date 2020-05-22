import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceModule } from './Modules/service.module';
import LuxuryModule from './Modules/luxury.module';
import { ChatModelModule } from './Modules/chat-model.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ChatComponent } from './Components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    ChatModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
