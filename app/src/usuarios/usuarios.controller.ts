import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import Usuario from './usuarios.domain';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) { }

  @Post('/login')
  login(@Body() body: any): Promise<String> {
    return this.usuarioService.login(body.email, body.senha);
  }

  @Get('')
  async getUsuarios(@Res() res: Response, @Query() query: any): Promise<void> {
    console.log('query', query);
    const usuarios = await this.usuarioService.buscaUsuarios(query.q);

    const listaUsuarios = this.criaListaUsuarios(usuarios);

    const html = `<html>
      <body>
        <span name="statusMessage" style="color: red; display: none">Teste</span>
        <br />
        <form>
          <span>Resultados da busca: ${query.q || ""}</span><br/><br/>
          <label>Busca</label><input name="q" type="text" />
          <button type="submit">Buscar</button>
          <br />
        </form>
        ${listaUsuarios}
      </body>
    </html>`;

    res.cookie('token', '2AEEEF66F0C4F48EB45335911608F00F004BF42E6230A34B43CD4C0FA6199AA0');

    res.send(html);
  }

  criaListaUsuarios(usuarios: Usuario[]) {
    const itens = [];
    if (usuarios.length) {
      itens.push('<table>');
      itens.push('<tr>');
      itens.push('<th>Id</th>');
      itens.push('<th>Nome</th>');
      itens.push('<th>Email</th>');
      itens.push('<tr>');

      usuarios.forEach(usuario => {
        itens.push(`<tr>`);
        itens.push(`<td>${usuario.id}</td>`);
        itens.push(`<td>${usuario.nome}</td>`);
        itens.push(`<td>${usuario.email}</td>`);
        itens.push('<tr>');
      });

      itens.push('</table>');

      return itens.join('');
    }

    return '';
  }
}
