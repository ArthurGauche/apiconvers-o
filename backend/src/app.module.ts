import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { MassaController } from './massa/massa.controller';
import { AreaController } from './area/area.controller';
import { TemperaturaController } from './temperatura/temperatura.controller';
import { VelocidadeController } from './velocidade/velocidade.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, MassaController, AreaController, TemperaturaController, VelocidadeController],
  providers: [AppService, ConversorService],
})
export class AppModule {}
