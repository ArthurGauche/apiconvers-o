import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('area')
export class AreaController {
    constructor(private readonly service: ConversorService) {}

    @Get('m2-para-km2/:valor')
    km2(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.metrosQuaParaKmQua(v),
            unidade: 'km²'
        };
    }

    @Get('m2-para-acres/:valor')
    acres(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service. metrosQuaParaAcres(v),
            unidade: 'acres'
        };
    }

    @Get('m2-para-pes2/:valor')
    pes2(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.metrosQuaParaPesQua(v),
            unidade: 'ft²'
        };
    }
}