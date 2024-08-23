AOS.init();

const dataDoEvento = new Date('nov 24, 2024 00:00:00');
const timeStempDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(()=>{
    const agora = new Date();
    const timeStempAtual = agora.getTime();

    const distanciaAteOEvento = timeStempDoEvento - timeStempAtual;

    const diasEmMs = 1000 * 60 * 60 *24
    const horaEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs)
    const minutosAteOEvento = Math.floor((distanciaAteOEvento %horaEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`


    if (diasAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);

