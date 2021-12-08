import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import Usuario from './usuarios.domain';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) { }

  @Post('/login')
  login(@Body() body: any): Promise<String> {
    return this.usuarioService.login(body.email, body.senha);
  }
}
