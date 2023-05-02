import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private urlEndPoint: string = 'http://localhost:8080/asado/transferencias'

  constructor(private http: HttpClient) { }

  getTransferencias(): Observable<string>{

    return this.http.get<string>(this.urlEndPoint);
  }
}
