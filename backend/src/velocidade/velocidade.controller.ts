import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('velocidade')
export class VelocidadeController {
    constructor(private readonly service: ConversorService) {}

    @Get('kmh-para-ms/:valor')
    kmhToMs(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.kmhParaMs(v),
            unidade: 'm/s'
        };
    }

    @Get('kmh-para-mph/:valor')
    kmhToMph(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.kmhParaMph(v),
            unidade: 'mph'
        };
    }

    @Get('nos-para-kmh/:valor')
    nosToKmh(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.nosParaKmh(v),
            unidade: 'km/h'
        };
    }
}