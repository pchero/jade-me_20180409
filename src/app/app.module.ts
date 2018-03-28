import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChatModule } from './modules/chat/chat.module';
import { LoadingModule } from './modules/loading/loading.module';
import {CommonService} from './services/common.service';
import {HttpModule} from '@angular/http';
import {Ng2Webstorage} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
