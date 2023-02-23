import { Producto } from "./Producto.js";
import { UI } from "./UI.js";

const   $d=document,
        $form=$d.querySelector("#product-form"),
        $producto=$d.querySelector("#producto"),
        $precio=$d.querySelector("#precio"),
        $ano=$d.querySelector("#ano"),
        $lista=$d.querySelector("#product-list")

//console.log($form)
//console.log(new Producto("Taza",20,2018))



$form.addEventListener("submit",e=>{
    e.preventDefault()      
    const prod=new Producto($producto.value,$precio.value,$ano.value)
    const ui=new UI()
    ui.addProduct(prod)
    ui.resetForm()
    ui.showMessage("Produccto añadido con exuito","success")
})

$lista.addEventListener("click",e=>{
    const ui=new UI()
    ui.deleteProduct(e.target)
})