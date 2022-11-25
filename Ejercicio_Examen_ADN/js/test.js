const t="AAGGGGTC"
const adn = Array.from(t);
let solucion=[]
let inicio=0,fin=0
//incluir cadenas en array solucion
for (let i=0;i<adn.length;i++){
	if (adn[i]==adn[i+1]){
    	fin++
    }else{
		fin++
    	seccion = adn.slice(inicio,fin);
		solucion.push(seccion)
		inicio=fin
    }
}

//console.log(solucion)
let c=0,s=[]
solucion.forEach(e=>{
	if (c<e.length){
		c=e.length
		s=e
	}
})

solucion.splice(solucion.indexOf(s),1)
//console.log(solucion)
console.log(`La secuencia más larga corresponde al aminoácido ${s[0]}`)
console.log(`La secuencia se produce a partir de la ${adn.indexOf(s[0])+1} posición del ADN del virus`)
console.log(`La longitud de la secuencia de aminoácido más larga es ${c}`)
console.log(`El ADN del virus desactivado es ${solucion.toString()}`)