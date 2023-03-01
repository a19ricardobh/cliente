/*

   Dado el siguiente código asíncrono, genera las versiones síncronas empleando callbacks, promesas y promesas con async-await

*/

/* function doble(num,callback) {
  setTimeout(() => callback(`Doble ${num}:${2 * num}`,2*num),Math.random() * 2000);
} */

/* function doble(num,callback) {
  setTimeout(() => callback(num,2*num),Math.random() * 2000);
}

doble(4,(numero,resultado)=>{
  console.log(`Doble de ${numero}:${resultado}`)
  doble(2,(numero,resultado)=>{
    console.log(`Doble de ${numero}:${resultado}`)
  })
});
//doble(2); */ 

/*Con promesas, hecho por nosotros */
/* function doble(num) {
  return new Promise((resolve, reject) => {
    if (num == 0) {
      reject("No hay mensaje 1");
    }
    setTimeout(() => resolve(num), Math.random() * 2000);
  });
}

doble(4)
  .then((num) => {
    console.log(`Doble de ${num}:${2*num}`)
    return doble(2); 
  })
  .then((num) => {
    console.log(`Doble de ${num}:${2*num}`)
  })
  .catch((msg) => {
    console.log(msg)
  }) */

/* Con promesas, hecho por Julian*/
/*   function doble(num) {
    return new Promise((resolve, reject) => {
      if (num == 0) {
        reject("No hay doble");
      }
      setTimeout(() => resolve({
        numero: num,
        resultado:2*num
      }), Math.random() * 2000);
    });
  }
  
  doble(4)
    .then((obj) => {
      console.log(`Doble de ${obj.numero}:${obj.resultado}`)
      return doble(2); 
    })
    .then((obj) => {
      console.log(`Doble de ${obj.numero}:${obj.resultado}`)
    })
    .catch((msg) => {
      console.log(msg)
    })   */

/**Con promesas, y funcion asincrona */    
function doble(num) {
  return new Promise((resolve, reject) => {
    if (num == 0) {
      reject("No hay doble");
    }
    setTimeout(() => resolve({
      numero: num,
      resultado:2*num
    }), Math.random() * 2000);
  });
}

async function ejecutar(){
  try {
    let resultado= await doble(4)
    console.log(`Doble de ${resultado.numero}:${resultado.resultado}`)
    resultado=await doble(2)
    console.log(`Doble de ${resultado.numero}:${resultado.resultado}`)
  } catch (error) {
    console.log(error)
  }
}

ejecutar()