import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('comprimento')
export class ComprimentoController {
    constructor(private readonly service: ConversorService) {}

    @Get('metros-para-km/:valor')
    getKm(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.metrosParaKm(v),
            unidade: 'km'
        };
    }

    @Get('metros-para-milhas/:valor')
    getMilhas(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.metrosParaMilhas(v),
            unidade: 'milhas'
        };
    }

    @Get('metros-para-pes/:valor')
    getPes(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.metrosParaPes(v),
            unidade: 'pés'
        };
    }
}