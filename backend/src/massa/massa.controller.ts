import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('massa')
export class MassaController {
    constructor(private readonly service: ConversorService) {}

    @Get('kg-para-gramas/:valor')
    getGramas(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.quilosParaGramas(v),
            unidade: 'g'
        };
    }
}