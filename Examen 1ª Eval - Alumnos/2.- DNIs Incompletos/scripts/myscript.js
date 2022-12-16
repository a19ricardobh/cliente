// Funcion que comprueba si la letra del DNI corresponde con la letra indicada
function isNIF(DNI, letra) {
    const clave="TRWAGMYFPDXBNJZSQVHLCKE"
    if (clave[DNI%23]==letra){
        return true
    }else{
        return false
    }
}

// Funcion que busca las posiciones en que se encuentra la letra "letra" en la cadena cad
function buscarPosiciones(cad, letra) {
    let posiciones=[]
    let arr=cad.split("")
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]==letra){
            posiciones.push(index)
        } 
    }
    return posiciones
}

// Funcion que devuelve un array con los NIFs posibles
//NIF_Incompleto="?2345678C"  [82345678C]
//NIF_Incompleto="?2345678A"  []
//NIF_Incompleto="?2345?78C"  [12345178C,22345578C,32345978C,72345278C,82345678C]
function buscarNIFIncompletos(indice,pos,texto) {
    let nifs=[]
    if (indice==1){ //en caso de que sea uno
        let casos=9
        while (casos>=0) {
            let aux=texto.split("")
            let texto_aux=""
            aux[pos[indice-1]]=casos.toString()
            for (let i = 0; i < aux.length; i++) {
                texto_aux=texto_aux.concat(aux[i])   
            }
            
            if (isNIF(texto_aux.slice(0,8),texto_aux[8])){
                nifs.push(texto_aux)
            }

            casos--
        }
    }else{ //cuando son mas, recursiva
        let casos=9
        while (casos>=0) {
            let aux=texto.split("")
            let texto_aux=""
            aux[pos[indice-1]]=casos.toString()
            for (let i = 0; i < aux.length; i++) {
                texto_aux=texto_aux.concat(aux[i])   
            }
            casos--
            pos.pop()
            return buscarNIFIncompletos(indice-1,pos,texto_aux)
 
        }
    }
    return nifs
}

// Resto del código....

let NIF_Incompleto="?2345?78C"

const arrayPosiciones=buscarPosiciones(NIF_Incompleto,"?")

//veces que se repite
let r=arrayPosiciones.length

if (r==0){
    console.log("No existen NIFs correctos")
}else{
    const resultado=buscarNIFIncompletos(r,arrayPosiciones,NIF_Incompleto)
    console.log(resultado)
}

