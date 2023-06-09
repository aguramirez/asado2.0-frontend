import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  usuarios: Usuario[] | undefined;

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  delete(usuario: Usuario): void{
    this.usuarioService.delete(usuario.id).subscribe(
      response => {
        this.usuarios = this.usuarios?.filter(usu => usu !== usuario)
      }
    )
  }
  
}
