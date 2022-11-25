let n=8 //numero de fichas
let filas=0
let control=true
//primera fila 
let fichasCuspide=1
let fichasBase=1
let fichasRestantes=n

function imprimir(n,filas,fichasCuspide,fichasBase){
    console.log(`Con ${n} fichas de dominó Blanca puede crear una pirámide de altura ${filas} con 
    ${fichasBase} fichas en la base y ${fichasCuspide} fichas en la cúspide`)
}

function calculoPiramide(n,filas,fc) {
    fichasCuspide=fc    
    return n-fichasBase
}

while(control){
    if(fichasRestantes==0){
        imprimir(n,filas,fichasCuspide,fichasBase-1)
        control=false
    }else if (fichasRestantes>0){
        fichasRestantes=calculoPiramide(fichasRestantes,filas,fichasCuspide)   
        fichasBase++
        filas++
    }else {
        filas=0
        fichasRestantes=n
        fichasCuspide++
        fichasBase=fichasCuspide
        calculoPiramide(n,filas,fichasCuspide)
    }
}



