const productos=[
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

let carrito=[]  // {id:productoID,cantidad:N}

const $d=document,
      $lista=$d.querySelector("#lista-productos"),
      $tabla=$d.querySelector("tbody"),
      $pie=$d.querySelector("tfoot"),
      $tProducto=$d.querySelector("#template-producto").content,
      $tProdCarrito=$d.querySelector("#template-producto-carrito").content,
      $tProdFooter=$d.querySelector("#template-footer-carrito").content

productos.forEach(element => {
    let $clon = $tProducto.cloneNode(true)
    const $nombre=$clon.querySelector("h5")
    $nombre.innerHTML = element.title
    const $precio=$clon.querySelector("p")
    $precio.innerHTML = element.precio+" Eur" 
    const $img=$clon.querySelector("img")
    $img.setAttribute("src",element.thumbnailUrl)
    const $a=$clon.querySelector("a")
    $a.dataset.productoId=element.id
    $lista.append($clon)
});

function renderCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.querySelector("tbody").innerHTML=""
    document.querySelector("tfoot").innerHTML=""
    if (carrito.length==0){
        document.querySelector("tfoot").innerHTML="Carrito vacío - comience a comprar!"
    }else{
        
        let sumaC=0
        let sumaP=0
        carrito.forEach((producto,indice) => {
            const $clon=$tProdCarrito.cloneNode(true)
            const tds=$clon.querySelectorAll("td")
            tds[0].textContent=indice+1
            tds[1].textContent=productos[producto.productoId-1].title
            tds[2].textContent=producto.cantidad
            sumaC +=producto.cantidad
            tds[4].textContent=productos[producto.productoId-1].precio*producto.cantidad
            sumaP +=productos[producto.productoId-1].precio*producto.cantidad
            const boton=$clon.querySelectorAll(".btn")
            boton[0].dataset.pId=indice
            boton[1].dataset.pId=indice
            document.querySelector("tbody").appendChild($clon)
        });
        const $clon2=$tProdFooter.cloneNode(true)
        const tds2=$clon2.querySelectorAll("td") 
        tds2[0].textContent=sumaC
        tds2[2].querySelector("span").textContent=sumaP
        document.querySelector("tfoot").appendChild($clon2)
    }
}

$lista.addEventListener("click",e=>{
    e.preventDefault()
    if (e.target.dataset.productoId!=null) {
        const producto=carrito.find(producto=>producto.productoId==e.target.dataset.productoId)
        if (!producto) {
            carrito.push({
                productoId:e.target.dataset.productoId,
                cantidad:1
            })
        } else {
            producto.cantidad++
        }
        //console.log(carrito)
        renderCarrito()
    }
})

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

$pie.addEventListener("click", e=>{
    e.preventDefault()
    if (e.target.id=="vaciar-carrito"){
        carrito=[]
        renderCarrito()
    }
})

//carga inicial de los elementos del carrito
$d.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito") != null) {
      carrito = JSON.parse(localStorage.getItem("carrito"));
      renderCarrito();
    } else {
      carrito = [];
    }
});


