/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
*             por una pandemia
*
*   Entrada : segundos
*
*
*   Salida  : Mensaje tal como: "Hemos estado confinados A semana/s, B día/s, C hora/s, D minuto/s, E segundo/s"
*             Para 183901 segundos la salida sería: "Hemos estado confinados 0 semanas, 2 días, 3 horas, 5 minutos, 1 segundo"
*
*   Nota: Emplear una funcion
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (isNaN(n)) {
            n=prompt(mensaje)
        }else{
            i=false
            return parseInt(n)
        }
    }while(i)
}

let seg=leerDatos("Escribe los segundos confinado")

function confinamiento(s){
    let conf=[]
    //semanas
    let week=s/604800
    week=week.toFixed(0)
    conf.push(week)
    //dias
    s-=(604800*week)
    let dia=(Math.abs(s))/86400
    dia=Math.floor(dia)
    conf.push(dia)
    //horas
    s-=(86400*dia)
    let hora=(Math.abs(s))/3600
    hora=Math.floor(hora)
    conf.push(hora)
    //minutos
    s-=(3600*hora)
    let min=(Math.abs(s))/60
    min=Math.floor(min)
    conf.push(min)
    //segundos
    s-=(60*min)
    conf.push((Math.abs(s)))
    return conf
}

console.log(`Hemos estado confinados ${confinamiento(seg)[0]} semanas, ${confinamiento(seg)[1]} día/s, ${confinamiento(seg)[2]} hora/s, ${confinamiento(seg)[3]} minuto/s, ${confinamiento(seg)[4]} segundo/s `)
