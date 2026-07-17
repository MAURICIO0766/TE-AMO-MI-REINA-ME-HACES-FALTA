/*=========================================
      EFECTO PARALLAX SUAVE
=========================================*/

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;
const y=(window.innerHeight/2-e.clientY)/40;

document.body.style.backgroundPosition=`${x}px ${y}px`;

});

/*=========================================
      DESTELLOS ALEATORIOS
=========================================*/

setInterval(()=>{

const flash=document.createElement("div");

flash.style.position="fixed";
flash.style.width="4px";
flash.style.height="4px";
flash.style.borderRadius="50%";
flash.style.background="#fff";
flash.style.left=Math.random()*100+"vw";
flash.style.top=Math.random()*100+"vh";
flash.style.boxShadow="0 0 25px white";
flash.style.pointerEvents="none";
flash.style.zIndex="999";

document.body.appendChild(flash);

flash.animate([
{opacity:0,transform:"scale(0)"},
{opacity:1,transform:"scale(2)"},
{opacity:0,transform:"scale(0)"}
],{
duration:1200
});

setTimeout(()=>flash.remove(),1200);

},700);

/*=========================================
      MENSAJE FINAL EN PESTAÑA
=========================================*/

const originalTitle=document.title;

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="❤️ Vuelve mi amor ❤️";

}else{

document.title=originalTitle;

}

});

/*=========================================
      EFECTO DE CARGA
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity 1.5s";

document.body.style.opacity="1";

},100);

});

/*=========================================
      FIN DEL SCRIPT
=========================================*/

console.log("Proyecto romántico cargado correctamente ❤️");
