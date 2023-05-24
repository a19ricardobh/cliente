/* const productos=[
    {
        "precio": 500,
        "id": 1,
        "title": "Café",
        "thumbnailUrl": "https://picsum.photos/id/0/600"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Pizza",
        "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Agua",
        "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mango",
        "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Chela",
        "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
]

let carrito=[]  // {id:productoID,cantidad:N} */

const $d=document,
      $lista=$d.querySelector("#lista-productos"),
      $tabla=$d.querySelector("tbody"),
      $pie=$d.querySelector("tfoot"),
      $tProducto=$d.querySelector("#template-producto").content,
      $tProdCarrito=$d.querySelector("#template-producto-carrito").content,
      $tProdFooter=$d.querySelector("#template-footer-carrito").content

let productos=[]

function ajax(params) {
    let {url,method,fsuccess,ferror,data}=params
    const opciones={
        method: method || "GET",
        headers: {"Content-type": "application/json; charset=utf-8" },
        body:JSON.stringify(data)
    }
    fetch(url,opciones)
    .then(respuesta=>(respuesta.ok)?respuesta.json():Promise.reject(respuesta))
    .then(json =>fsuccess(json))
    .catch(error=>ferror({status:error.status,statusText:error.statusText || "Ocurrió un error"}))
}
    

function renderCarrito(){
    /* localStorage.setItem("carrito", JSON.stringify(carrito));
    //sessionStorage */
    document.querySelector("tbody").innerHTML=""
    document.querySelector("tfoot").innerHTML=""

    ajax({url:`http://localhost:3000/carrito`,
        method:"GET",
        fsuccess:(carrito)=>{
            //console.log(carrito)
            if (carrito.length==0){
                document.querySelector("tfoot").innerHTML="Carrito vacío - comience a comprar!"
            }else{
                
                let sumaC=0
                let sumaP=0
                carrito.forEach((producto) => {
                    //console.log(producto)
                    const $clon=$tProdCarrito.cloneNode(true)
                    const tds=$clon.querySelectorAll("td")
                    tds[0].textContent=producto.id
                    tds[1].textContent=productos[producto.productoId-1].title
                    tds[2].textContent=producto.cantidad
                    sumaC +=producto.cantidad
                    tds[4].textContent=productos[producto.productoId-1].precio*producto.cantidad
                    sumaP +=productos[producto.productoId-1].precio*producto.cantidad
                    const boton=$clon.querySelectorAll(".btn")
                    boton[0].dataset.pId=producto.id
                    boton[1].dataset.pId=producto.id
                    document.querySelector("tbody").appendChild($clon)
                });
                const $clon2=$tProdFooter.cloneNode(true)
                const tds2=$clon2.querySelectorAll("td") 
                tds2[0].textContent=sumaC
                tds2[2].querySelector("span").textContent=sumaP
                document.querySelector("tfoot").appendChild($clon2)
            }
        
        },
        ferror:(error)=>console.log(error)
    }) 
}

//comienza el codigo de ejecucion.
//listar los productos
ajax({url:`http://localhost:3000/productos`,
        method:"GET",
        fsuccess:(datos)=>{
            
            productos=datos
            //console.log(productos)
            datos.forEach(element => {
                let $clon = $tProducto.cloneNode(true)
                const $nombre=$clon.querySelector("h5")
                $nombre.innerHTML = element.title
                const $precio=$clon.querySelector("p")
                $precio.innerHTML = element.precio+" Eur" 
                const $img=$clon.querySelector("img")
                $img.setAttribute("src",element.thumbnailUrl)
                const $a=$clon.querySelector("a")
                $a.dataset.productoId=element.id
                $lista.appendChild($clon)
            });
        },
        ferror:(error)=>console.log(error)
    }) 


//cuando se pulsa un boton de la lista de productos, se añade al carrito
$lista.addEventListener("click",e=>{
    e.preventDefault()
    if (e.target.dataset.productoId!=null) {
        //console.log(e.target.dataset.productoId)
        // const producto=carrito.find(producto=>producto.productoId==e.target.dataset.productoId)
        ajax({url:`http://localhost:3000/carrito/`,
        method:"GET",
        fsuccess:(carrito)=>{
            
            const producto=carrito.find(producto=>producto.productoId==e.target.dataset.productoId)
            if (!producto) {
                ajax({url:`http://localhost:3000/carrito`,
                    method:"POST",
                    fsuccess:(datos)=>{
                        //e.preventDefault()
                        //renderCarrito() 
                    },
                    ferror:(error)=>console.log(error),
                    data:{
                            "productoId": parseInt(e.target.dataset.productoId),
                            "cantidad": 1
                        }
                }) 
            } else {
                
                let uds=producto.cantidad+1
                
                    ajax({url:`http://localhost:3000/carrito/${producto.id}`,
                    method:"PATCH",
                    fsuccess:(datos)=>{
                        console.log(datos)
                        
                        //renderCarrito() 
                    },
                    ferror:(error)=>console.log(error),
                    data:{
                            "cantidad":uds
                        }
                }) 
            }
        },
        ferror:(error)=>console.log(error)
        }) 
        renderCarrito() 
    }
})

//si se pulsa el boton de + o - dentro del carrito, se actualizan los datos del carrito
$tabla.addEventListener("click", e=>{
    e.preventDefault()
    //console.log(e.target.classList.contains("btn"))
    if (e.target.classList.contains("btn")){
        if (e.target.classList.contains("btn-info")){
            carrito[e.target.dataset.pId].cantidad++
            renderCarrito()
        }
        if (e.target.classList.contains("btn-danger")){
            carrito[e.target.dataset.pId].cantidad--
            if (carrito[e.target.dataset.pId].cantidad==0){
                carrito.splice(e.target.dataset.pId,1)
            }
            renderCarrito()
        }
    }
})

//si se pulsa el boton de vaciar carrito se vacia el array
$pie.addEventListener("click", e=>{
    e.preventDefault()
    if (e.target.id=="vaciar-carrito"){
        carrito=[]
        renderCarrito()
    }
})

//carga inicial de los elementos del carrito
$d.addEventListener("DOMContentLoaded", () => {
    renderCarrito();
});


