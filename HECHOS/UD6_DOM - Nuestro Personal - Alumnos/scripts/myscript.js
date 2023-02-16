// Datos del Personal
const personal = [
  {
    id: 0,
    nombre: "Sara Alonso",
    trabajo: "Diseñadora UX",
    foto:
      "./persona-1.jpeg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Qui deleniti incidunt alias porro. Dolores possimus dolorum saepe beatae alias repudiandae.",
  },
  {
    id: 1,
    nombre: "Ana Lopez",
    trabajo: "Desarrolladora Web",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    nombre: "Rosa Martinez",
    trabajo: "Desarrolladora Web",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    nombre: "Pedro Rodriguez",
    trabajo: "Becario",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    nombre: "Marcos Alonso",
    trabajo: "El Jefe",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const $d=document,
    $nombre=$d.querySelector("#nombre"),
    $trabajo=$d.querySelector("#trabajo"),
    $info=$d.querySelector("#info"),
    $foto=$d.querySelector("#persona-img"),
    $empleado=$d.querySelector(".empleado"),
    $mas=$d.querySelector(".next-btn")

function render(persona){
    $foto.setAttribute("src",persona.foto)
    $nombre.innerHTML=persona.nombre
    $trabajo.innerHTML=persona.trabajo
    $info.innerHTML=persona.text
}

$d.addEventListener("DOMContentLoaded",(e)=>{
  render(personal[0])
})

  let i=0
  $empleado.addEventListener("click", (e)=>{
   e.preventDefault()
   if (e.target.classList.contains("fa-chevron-right")||e.target.classList.contains("next-btn")) {
      if (i==personal.length-1) 
        i=0
      else
        i++
   }
   if (e.target.classList.contains("fa-chevron-left")||e.target.classList.contains("prev-btn")) {
      if (i<1)
        i=personal.length-1
      else 
         i--
   }
   if (e.target.classList.contains("random-btn")) {
      let aleatorio
      do{
        aleatorio=Math.floor(Math.random() * ((personal.length-1) - 0) + 0)
      }while(i==aleatorio)
      i=aleatorio
   }
   render(personal[i])
  }) 