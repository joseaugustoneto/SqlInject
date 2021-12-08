import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Usuario from './usuarios/usuarios.domain';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'mcn',
      password: 'qwe123',
      database: 'MCN_TESTE_SEGURANCA',
      entities: [Usuario],
      synchronize: false,
      keepConnectionAlive: true,
      connectTimeout: 100000,
      acquireTimeout: 100000,
    }),
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

