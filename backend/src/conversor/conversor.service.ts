import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversorService {
    //Comprimento
    metrosParaKm(valor:number){
        return valor/1000;        
    }
    metrosParaMl(valor:number){
        return valor/1.6;
    }

    metrosParaPes(valor:number){
        return valor*3.280;
    }
    //Massa
     quilosParaGramas(valor: number) {
        return valor * 1000;
    }

    quilosParaLibras(valor: number) {
        return valor * 2.20462;
    }

    quilosParaOncas(valor: number) {
        return valor * 35.2;
    }
    //Área
metrosQuaParaKmQua(valor: number) {
    return valor / 1_000_000;
}

metrosQuaParaAcres(valor: number) {
    return valor / 4046.86;
}

metrosQuaParaPesQua(valor: number) {
    return valor * 10.7639;
}

//Temperatura
celsParaFahrenheit(valor: number) {
    return (valor * 9/5) + 32;
}

celParaKel(valor: number) {
    return valor + 273.15;
}

fahParaCel(valor: number) {
    return (valor - 32) * 5/9;
}

//Velocidade
kmhParaMs(valor: number) {
    return valor / 3.6;
}

kmhParaMph(valor: number) {
    return valor * 0.621371;
}

nosParaKmh(valor: number) {
    return valor * 1.852;
}
}
