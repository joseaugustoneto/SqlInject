import { Connection, EntityRepository, Repository } from "typeorm";
import Usuario from "./usuarios.domain";

@EntityRepository(Usuario)
export default class UsuarioRepository extends Repository<Usuario> {
  async buscaUsuarioPorEmailSenha(email: string, senha: string): Promise<Usuario[]> {
    const query = `select * from usuarios where email = "${email}" and senha = "${senha}"`;

    return this.query(query);
  }

  async buscarUsuariosPorNome(q: string): Promise<Usuario[]> {
    const query = `select * from usuarios where nome like "%${q}%"`;

    return await this.query(query);
  }
}

export const UsuarioRepositoryProvider = {
  provide: 'UsuarioRepository',
  useFactory: (connection: Connection) => connection.getCustomRepository(UsuarioRepository),
  inject: [Connection],
};
