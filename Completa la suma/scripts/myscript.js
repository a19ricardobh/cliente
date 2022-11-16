function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
   
}

function creaArray(cadena){
    let p,a
    const arr=[]
    
    "0123456789".split("").forEach(digito=>{
       p=cadena.replace("-",digito)
       //console.log(p.includes("-"))
       if (p.includes("-")){
           "0123456789".split("").forEach(d2=>{
                a=p.replace("-",d2)
                arr.push(a)
                })
        }else{
            arr.push(p)
        } 
           
    })
    return arr
}
//crear array para usar con mas de un "-"
let arr=[]
function creaArray2(cadena){
    let p
    "0123456789".split("").forEach(digito=>{
        p=cadena.replace("-",digito)
        if (p.includes("-")){
            return creaArray2(p)
        }else{
            arr.push(p)
        }       
    })
    return arr
}
//let numeros=leerDatos("Introduzca tres numeros separados por espacio")
let numeros="87- 2-1 1-6-"
//console.log(numeros)
//console.log(numeros.split(" "))
const array=numeros.split(" ")

const arrS1=creaArray2(array[0])
arr=[]
const arrS2=creaArray2(array[1])
arr=[]
const arrSuma=creaArray2(array[2])

console.log(arrSuma)

 arrS1.forEach(e1 => {
    arrS2.forEach(e2=>{
        //console.log(parseInt(e1)+parseInt(e2))
        let encontrado=arrSuma.find(e=>parseInt(e)==parseInt(e1)+parseInt(e2))
        if (encontrado){
            console.log(`suma correcta ${e1}+${e2}=${encontrado}`)
        }
    })
 });