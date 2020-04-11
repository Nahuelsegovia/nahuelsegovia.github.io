const divPerfil = document.querySelector('#divPerfil')
const pintarInformacionSobreMi = document.querySelector('#pintarInformacionSobreMi')
const pintarInformacionProyectos = document.querySelector('#pintarInformacionProyectos')
const boton1 = document.querySelector('#boton1')
const boton2 = document.querySelector('#boton2')
const boton3 = document.querySelector('#boton3')
const boton4 = document.querySelector('#boton3')
let contadorBoton1 = 0; 
let contadorBoton2 = 0;

divPerfil.addEventListener('click', (e) =>{
    const informacionSobreMi = `<div class="sobreMi" id="sobreMi">
    <p>Soy Nahuel, Jr. Front-end Developer que<br>
        busca superarse día a día en programación,<br>
        inicié en este mundo siendo pre-adolescente,<br>
        siempre me sorprendío la cantidad de cosas<br>
        que se pueden hacer con tecnología, así que<br>
        mi curiosidad se despertó y desde entonces<br>
        no paro de aprender cosas nuevas.
        <br>
        <br>
        Actualmente mis skills más importantes están<br>
        del lado del front-end, por lo que uso para mis<br>
        proyectos personales: <span>Html5</span>, <span>Css3</span>, <span>Bootstrap</span>, <br>
        <span>Flexbox</span>, <span>Javascript</span> y <span>React</span>.
     </p>
</div>`

const informacionProyectos = `
<div class="proyectos" id="proyectos">
    <h2>CoronavirusAr</h2>
    <div class="imagenProyectos">
        <img src="./images/coronavirusAr.png" alt="Proyecto Coronavirus Ar">
    </div>
    <p>Coronavirusar es una webApp que realiza peticiones a la API de
        CovidVizualizer y muestra los datos de los infectados por Coronavirus
        en Argentina.
        <br>
        <br>
        La aplicación utiliza el objeto XMLHttpRequest para conectarse
        con la API y pinta los datos en pantalla con un div hecho con Bootstrap 4
    </p>
</div>
`


    switch (e.target.id) {
        case 'boton1':
        pintarInformacionSobreMi.innerHTML = informacionSobreMi;
        const sobreMi = document.querySelector('#sobreMi');
        contadorBoton1++;
        if(contadorBoton1 == 2){
            sobreMi.style.display = 'none'
            contadorBoton1 = 0;
        }
        break;
        
        case 'boton2':
        pintarInformacionProyectos.innerHTML = informacionProyectos;
        const proyectos = document.querySelector('#proyectos')
        contadorBoton2++;
        if(contadorBoton2 == 2){
            proyectos.style.display = 'none'
            contadorBoton2 = 0;
        }
        window.scroll({
            top: 500,
            behavior: 'smooth'
          });
        break;

        case 'boton3':
            window.open('https://github.com/nahuelsegovia', '_blank');
        break;

        case 'boton4':
            window.open('https://medium.com/@d0tlab', '_blank');
        default:
            break;
    }
})