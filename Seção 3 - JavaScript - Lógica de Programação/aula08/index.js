const data = new Date('2021-04-24 16:54:48.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //0-11 - mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - domingo, 6 - sábado
console.log(data.toString());

console.log(Date.now());
const data02 = new Date(1704939194655);
console.log(data02.toString());