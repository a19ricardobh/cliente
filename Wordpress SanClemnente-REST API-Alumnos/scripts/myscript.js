const $d=document,
    $w=window,
    $site=$d.querySelector("#site"),
    $posts=$d.querySelector("#posts"),
    $loader=$d.querySelector(".loader"),
    $template=$d.querySelector("#post-template").content,
    $fragment=$d.createDocumentFragment(),
    DOMAIN="https://www.iessanclemente.net",
    SITE=`${DOMAIN}/wp-json`,
    API_WP=`${SITE}/wp/v2`,
    POSTS=`${API_WP}/posts?_embed`,
    PAGES=`${API_WP}/pages`,
    CATEGORIES=`${API_WP}/categories`

let page=1,
    perPage=3

function getSiteData(){
    fetch(`${SITE}`)
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>{
        $site.innerHTML=`
            <h3>Sitio web</h3>
            <h2>
                <a href="${json.url}" target="_blank">${json.name}</a>
            </h2>
            <p>${json.description}</p>
            <p>${json.timezone_string}</p>
        `
    })
    .catch(error=>{})
}

function getPosts() {
    $loader.style.display="block"
    fetch(`${POSTS}&page=${page}&per_page=${perPage}`)
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>{
        console.log(json)
    })
    .catch(error=>{
        console.log(error)
    })
}

$d.addEventListener("DOMContentLoaded",e=>{
    getSiteData()
    getPosts()
})

