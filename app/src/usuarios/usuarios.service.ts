import { Injectable } from '@nestjs/common';
import UsuarioRepository from './usuario.repository';
import Usuario from './usuarios.domain';

@Injectable()
export class UsuariosService {

  constructor(private usuarioRepository: UsuarioRepository) { }

  async login(email: string, senha: string): Promise<string> {
    const result = await this.usuarioRepository.buscaUsuarioPorEmailSenha(email, senha);

    if (!result.length) {
      return 'Usuário não existe';
    }

    return 'Usuário autenticado';
  }

  async buscaUsuarios(q: string): Promise<Usuario[]> {
    return await this.usuarioRepository.buscarUsuariosPorNome(q);
  }
}