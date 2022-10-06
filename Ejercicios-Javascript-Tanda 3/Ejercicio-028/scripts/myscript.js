/***************************************************************************************************************
*  
*   Objetivo: MiniSudoku 3x3. Un sudoku es una cuadricula 9x9 con cuadriculas cuadradas 3x3. El Sudoku estará completo
*             cuando relleanmos cada cuadricula 3x3 con número de 1 a 9, de forma que cada fila y cada columna de la
*             cuadricula 9x9 también está formada por números de 1 a 9.
*             Crea una funcion que compruebe si la cuadricula 3x3 contiene todos y cada uno de los número del 1 al 9
*
*   Entrada : 
*
*
*   Salida  : true, false
*
*
***************************************************************************************************************/

const sudoku=[[1,2,3],[4,5,6],[7,8,9]]

/* function isSudoku(array){
    let i=1
    const encontrados=[]
    let rdo=true
    while (i<=9) {
        for (let s = 0; s < 3; s++) 
            if ((array[s].includes(i) ))
                encontrados.push(i)
        i++
    }
    
    let j=1
    while (j<=9) {
        if (!(encontrados.includes(j)))
            return false
        j++   
    }
    return rdo
}

console.log(isSudoku(sudoku)) */

let resultado=[]
for (i=0;i<sudoku.length;i++) 
    resultado=[...resultado, ...sudoku[i]]
