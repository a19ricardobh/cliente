const   $d=document,
        $formulario=$d.querySelector("#libro-form"),
        $titulo=$d.querySelector("#titulo"),
        $autor=$d.querySelector("#autor"),
        $isbn=$d.querySelector("#isbn"),
        $lista=$d.querySelector("#lista-libros")

const libros=[]

function render(libros){
    $lista.innerHTML=""
    
    libros.forEach(element => {
        let linea=$d.createElement("tr")
        let pos1=$d.createElement("td")
        //pos.setAttribute("id",element.titulo)
        pos1.append(element.titulo)
        linea.appendChild(pos1)
        let pos2=$d.createElement("td")
        //pos.setAttribute("id",element.autor)
        pos2.append(element.autor)
        linea.appendChild(pos2)
        let pos3=$d.createElement("td")
        //pos.setAttribute("id",element.titulo)
        pos3.append(element.isbn)
        linea.appendChild(pos3)
        $lista.appendChild(linea)  
    }) 
}

function validar(){
    let rdo=0
    if ($titulo.value==""){
        rdo=1
    }
    if ($autor.value==""){
        rdo=1
    }
    if ($isbn.value==""){
        rdo=1
    }
    libros.forEach(el => {
        //console.log(el.isbn)
        //console.log($isbn.value)
        if(el.isbn==$isbn.value){
            rdo=2
        }
    })
    return rdo
}


$formulario.addEventListener("click",e=>{
    e.preventDefault()
    if (e.target.type=="submit"){
        //console.log($titulo.value)
        if(validar()==0){
            libros.push({
                titulo: $titulo.value,
                autor: $autor.value,
                isbn: $isbn.value
            })
        }else{
            if(validar()==1){
                alert("Revise los campos. Todos deben estar cubiertos")
            }else{
                alert("El ISBN ya existe")
            }
        }    
        render(libros)
    }
})

