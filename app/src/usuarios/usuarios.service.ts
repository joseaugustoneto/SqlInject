import { Injectable } from '@nestjs/common';
import UsuarioRepository from './usuario.repository';

@Injectable()
export class UsuariosService {

  constructor(private usuarioRepository: UsuarioRepository) { }

  async login(email: string, senha: string): Promise<string> {
    const result = await this.usuarioRepository.buscaUsuario(email, senha);

    if (!result.length) {
      return 'Usuário não existe';
    }

    return 'Usuário autenticado';
  }
}