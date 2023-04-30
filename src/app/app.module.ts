import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';
import { RouterModule, Routes } from '@angular/router';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'transferencias', component: TransferenciasComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    TransferenciasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
