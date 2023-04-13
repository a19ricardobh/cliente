const $d=document,
    $main=$d.querySelector("main"),
    $links=$d.querySelector(".links"),
    $loader=$d.querySelector(".loader")

    let pokeAPI="https://pokeapi.co/api/v2/pokemon"

//con scroll infinito
let nPaginas=0,
    paginaActual=1
const limite=20

function showLoader(){
    $loader.classList.remove("hide")
}
function hideLoader(){
    $loader.classList.add("hide")
}
function showPokemons(pokemons) {
    hideLoader()
    let $template=""
    pokemons.forEach(pokemon => {
        if (pokemon.sprites){
            $template+=`
                        <figure>
                            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                            <figcaption>${pokemon.name}</figcaption>
                        </figure>
                    `
        }else{
            $template+=`<figure>
                            <figcaption>
                            Error ${pokemon.status}: ${pokemon.statusText}
                            </figcaption>
                        </figure>`
        }
    });
    $main.innerHTML+=$template
}

async function getPokemons(url){
    try{
        let res=await fetch(url),
            json=await res.json()
            //console.log(json)
            if (!res.ok) throw {status:res.status,statusText:res.statusText}

            nPaginas=parseInt(json.count/limite)+1
            const pokemons=[]
            for (i=0;i<json.results.length;i++){
                try {
                    let resp=await fetch(json.results[i].url),
                    pokemon=await resp.json()
                    if (!res.ok) throw {status:res.status,statusText:res.statusText}
                    pokemons.push(pokemon)
                } catch (err) {
                    console.log(err)
                    let mensaje=err.statusText || "ocurrio un error"
                    pokemons.push({status:err.status,statusText:err.statusText})
                }
                
            }
            showPokemons(pokemons)
    }catch(error){
        console.log(error)
    }
}
function hayMasPokemons(pagina,totalPaginas) {
    return totalPaginas===0||pagina<totalPaginas
}

$d.addEventListener("DOMContentLoaded",e=>getPokemons(pokeAPI))

window.addEventListener("scroll",()=>{
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement
    if (scrollTop+clientHeight>=scrollHeight-5 && hayMasPokemons(paginaActual,nPaginas)){
        paginaActual++
        getPokemons(`${pokeAPI}?offset=${(paginaActual-1)*limite}&limit=${limite}`)
    }
} )