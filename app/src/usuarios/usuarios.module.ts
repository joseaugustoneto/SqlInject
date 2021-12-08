import { Module } from '@nestjs/common';
import { UsuarioRepositoryProvider } from './usuario.repository';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuarioRepositoryProvider]
})
export class UsuariosModule { }
