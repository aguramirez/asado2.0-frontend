import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private urlEndPoint: string = 'http://localhost:8080/asado/transferencias'

  constructor() { }
}
