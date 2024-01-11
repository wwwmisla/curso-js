function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getMesTexto(mesNumero) {
    let mesTexto;

    switch (mesNumero) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;
    }
}

const data = new Date();

function setDiaSemanaAno() {
    const diaSemana = data.getDay();
    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
    const diaSemanaNumero = data.getDate();
    const mesNumero = data.getMonth();
    const mesTexto = getMesTexto(mesNumero);
    const ano = data.getFullYear();

    return `${diaSemanaTexto}, ${diaSemanaNumero} de ${mesTexto} de ${ano}`;
}

function setHorario() {
    const hora = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();
    const ms = data.getMilliseconds();

    return `${hora}:${min}:${sec}:${ms}`
}

console.log(setDiaSemanaAno(), setHorario());