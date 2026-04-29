import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('temperatura')
export class TemperaturaController {
    constructor(private readonly service: ConversorService) {}

    @Get('c-para-f/:valor')
    cToF(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.celsParaFah(v),
            unidade: '°F'
        };
    }

    @Get('c-para-k/:valor')
    cToK(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.celParaKel(v),
            unidade: 'K'
        };
    }

    @Get('f-para-c/:valor')
    fToC(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.fahParaCel(v),
            unidade: '°C'
        };
    }
}