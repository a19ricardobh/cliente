/***************************************************************************************************************
*  
*   Objetivo: Realizar un script que solicite una fecha a un usuario (día, mes y año) y compruebe es
*             correcta o existe. Hay que tener en cuenta que el año puede ser bisiesto, y por tanto, si es
*             bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
*
*   Entrada : dia/mes/anho
*
*
*   Salida  : La fecha dia/mes/anho (es|no es) correcta
*
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

const dia=leerDatos("Escribir el dia")
const mes=leerDatos("EScribir el mes")
const ano=leerDatos("Escribir el año")

function validaFecha(d,m,a){
    const mes31=[1,3,5,7,8,10,12]
    const mes30=[4,6,9,11]
    valida=true
    //validar mes
    if (m<1 || m>12){
        return false
    }
    //validar dia
    if (mes31.includes(m)){ //meses de 31 dias
        if (d<1 || d>31) {
            return false
        }
    } else if (mes30.includes(m)){ //meses de 30 dias
        if (d<1 || d>30) {
            return false
        }
    } else if (m==2){ //febrero
        if (a%4==0 && a%400==0) { //año bisiesto
            if (d<1 || d>29) {
                return false
            }
        }else{
            if (d<1 || d>28) {
                return false
            } 
        }
    }
    return true
}



if (validaFecha(dia,mes,ano)){
    console.log(`La fecha ${dia}/${mes}/${ano} es correcta`)
}else{
    console.log(`La fecha ${dia}/${mes}/${ano} no es correcta`)
}
