const $d=document,
    $main=$d.querySelector("main"),
    $links=$d.querySelector(".links")

    let pokeAPI="https://pokeapi.co/api/v2/pokemon"

async function cargarPokemons(url){
    try{
        $main.innerHTML=`<img class="loader" src="assets/loader.svg" alt="cargando....">`
        let res=await fetch(url),
            json=await res.json(),
            $template="",
            $prevLink,
            $nextLink
            //console.log(json)

            if (!res.ok) throw {status:res.status,statusText:res.statusText}
            for (i=0;i<json.results.length;i++){
                try {
                    let resp=await fetch(json.results[i].url),
                    pokemon=await resp.json()
                    //console.log(pokemon)
                    $template+=`
                        <figure>
                            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                            <figcaption>${pokemon.name}</figcaption>
                        </figure>
                    `
                } catch (err) {
                    console.log(err)
                }
                
            }
            $main.innerHTML=$template
            $prevLink=json.previous?`<a href="${json.previous}">⬅️</a>`:""
            $nextLink=json.next?`<a href="${json.next}">➡️</a>`:""
            $links.innerHTML=$prevLink+" "+$nextLink
    }catch(error){
        console.log(error)
    }
}

$d.addEventListener("DOMContentLoaded",e=>cargarPokemons(pokeAPI))

$d.addEventListener("click",e=>{
    if (e.target.matches(".links a")){
        e.preventDefault()
        cargarPokemons(e.target.getAttribute("href"))
    }
})