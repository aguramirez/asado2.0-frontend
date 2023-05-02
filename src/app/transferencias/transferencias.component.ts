import { Component } from '@angular/core';
import { TransferenciasService } from './transferencias.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html'
})
export class TransferenciasComponent {

  transferencias: string | undefined;

  constructor(private transferenciaService: TransferenciasService){}

  ngOnInit(){
    this.transferenciaService.getTransferencias().subscribe(
      transferencia => this.transferencias = transferencia
    );
  }
}
