export class UI {
  addProduct(product) {
    const $template=document.querySelector("#template-producto").content,
          $lista=document.querySelector("#product-list")

    const $clon=$template.cloneNode(true)
    $clon.querySelector(".nome").textContent=product.nombre
    $clon.querySelector(".precio").innerHTML=product.precio
    $clon.querySelector(".ano").innerHTML=product.ano 
    $lista.appendChild($clon)
  }

  resetForm() {
    document.querySelector("#product-form").reset()
  }

  deleteProduct($element) {
    if ($element.name==="delete"){
      $element.parentElement.parentElement.remove()
    }

    
  }

  showMessage(message, cssClass) {
    const $ms=document.createElement("p")
    $ms.append(message)
    $ms.setAttribute("class",cssClass)
    document.querySelector(".container").appendChild($ms)
    setTimeout(()=>document.querySelector(".success").remove(),2000)
  }
}
