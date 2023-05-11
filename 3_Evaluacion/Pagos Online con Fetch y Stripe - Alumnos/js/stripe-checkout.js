import STRIPE_KEYS from "./stripe-keys.js"

const $d=document,
    $tacos=$d.querySelector("#tacos"),
    $template=$d.querySelector("#taco-template").content,
    $fragmento=$d.createDocumentFragment()

let products, prices
const moneyFormat=num=>`${num.slice(0,-2)}.${num.slice(-2)}`

let fetchOptions={
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
}

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then(responses=>Promise.all(responses.map(resp=>resp.json())))
.then(json=>{
    //console.log(json[0])
    //console.log(json[1])
    products=json[0].data
    prices=json[1].data

    prices.forEach(el=>{
        let productData=products.filter(product=>product.id==el.product)
        $template.querySelector(".taco").dataset.price=el.id
        $template.querySelector("img").src=productData[0].images[0]
        $template.querySelector("figcaption").innerHTML=`
            ${productData[0].name}
            <br>
            ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
        `
        let $clon=$d.importNode($template,true)
        $fragmento.appendChild($clon)
    })
    $tacos.appendChild($fragmento)
})
.catch(error=>{
    console.log(error)
    let mensaje=error.statusText||"Ocurrio un error"
    $tacos.innerHTML=`<p>Error ${error.status}: ${mensaje}</p>`
})

$d.addEventListener("click",e=>{
    if (e.target.matches(".taco *")){
        let priceId=e.target.parentElement.dataset.price
        Stripe(STRIPE_KEYS.public).redirectToCheckout(
            {
                lineItems:[{price:priceId,quantity:1}],
                mode:"payment",
                successUrl:"http://127.0.0.1:5500/Pagos%20Online%20con%20Fetch%20y%20Stripe%20-%20Alumnos/assets/stripe-success.html",
                cancelUrl:"http://127.0.0.1:5500/Pagos%20Online%20con%20Fetch%20y%20Stripe%20-%20Alumnos/assets/stripe-cancel.html"
            }
        ).then(res=>{
            if(res.error){
                $tacos.insertAdjacentHTML("afterend",res.error.message)
            }
        })
    }
})