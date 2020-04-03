import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas 
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
