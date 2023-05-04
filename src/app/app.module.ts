import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';
import { RouterModule, Routes } from '@angular/router';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'transferencias', component: TransferenciasComponent},
  {path: 'usuarios/crear', component: CrearComponent},
  {path: 'usuarios/crear/:id', component: CrearComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    TransferenciasComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
