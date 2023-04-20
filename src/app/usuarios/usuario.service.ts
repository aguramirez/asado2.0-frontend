import { Injectable } from '@angular/core';
import { USUARIOS } from './usuarios.json';
import { Usuario } from './usuario';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarios(): Observable<Usuario[]>{
    return of(USUARIOS)
  }
}
