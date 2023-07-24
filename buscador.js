const llaveAcceso="QiZ_IrXShlj0-Wu1uhLLiCQxGnavmOBh8FBeUNtrMy8"
const formBusqueda= document.querySelector("form")
const inputBusqueda= document.getElementById("entrada")
const resulBusqueda= document.querySelector(".resultados")
const mostrarMas= document.getElementById("mostrarMas")
let inputDato=""
let pag=1;
async function buscarImagen(){
    inputDato=inputBusqueda.value;
    const url =`https://api.unsplash.com/search/photos?page=${pag}&query=${inputDato}&client_id=${llaveAcceso}`
    const respuesta= await fetch(url)
    const dato =await respuesta.json()
    const resultados = dato.results
    if(pag===1){
    resulBusqueda.innerHTML=""   
    }
    resultados.map((resultados) =>{
        const imagenes= document.createElement("div")
        imagenes.classList.add("resultado")
        const imagen=document.createElement("img")
        imagen.src=resultados.urls.small
        imagen.alt=resultados.alt_description
        const linkImagen=document.createElement("a")
        linkImagen.href=resultados.links.html 
        linkImagen.target="_blank"
       
        imagenes.appendChild(imagen);
        imagenes.appendChild(linkImagen);
        resulBusqueda.appendChild(imagenes);
    })
pag++
if (pag>1){
    mostrarMas.style.display="block"
}
}
formBusqueda.addEventListener("submit", (event)=>{
    event.preventDefault()
    pag=1;
    buscarImagen()
})
mostrarMas.addEventListener("click", ()=>{
    buscarImagen()
})