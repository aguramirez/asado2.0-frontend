import { Injectable } from '@angular/core';
import { USUARIOS } from './usuarios.json';
import { Usuario } from './usuario';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string = 'http://localhost:8080/asado/usuarios'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    //return of(USUARIOS)

    return this.http.get<Usuario[]>(this.urlEndPoint);
  }
}
