import { Component } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  public usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router,
    private activatedRoute: ActivatedRoute){}

    ngOnInit(){
      this.cargarUsuario();
    }

  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
      }
    })
  }


  create(): void{
    this.usuarioService.create(this.usuario).subscribe(
      respuesta => this.router.navigate(['/usuarios'])
    )
  }

  update(): void{
    this.usuarioService.update(this.usuario)
    .subscribe( usuario => this.router.navigate(['/usuarios']));
  }
}
