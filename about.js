function setLang(l){
 document.documentElement.lang=l;
 document.querySelectorAll("[data-bn]").forEach(function(e){
  if(!e.dataset.en)e.dataset.en=e.textContent;
  e.textContent=l==="bn"?e.dataset.bn:e.dataset.en;
 });
 document.getElementById("bn").setAttribute("aria-pressed",l==="bn");
 document.getElementById("en").setAttribute("aria-pressed",l==="en");
 try{localStorage.setItem("lang",l)}catch(e){}
}
document.getElementById("bn").onclick=function(){setLang("bn")};
document.getElementById("en").onclick=function(){setLang("en")};
document.getElementById("f").onsubmit=function(e){
 e.preventDefault();
 var b="Name: "+n.value+"\nContact: "+c.value+"\n\n"+m.value;
 location.href="mailto:hello@imaginexcreation.com?subject="+encodeURIComponent("Message from imaginexcreation.com")+"&body="+encodeURIComponent(b);
};
document.getElementById("y").textContent=new Date().getFullYear();
var s="bn";try{s=localStorage.getItem("lang")||"bn"}catch(e){}
setLang(s);

if(matchMedia("(hover:hover)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
 function tilt(el,t,k){
  el.addEventListener("pointermove",function(e){var r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.setProperty("--ry",x*k+"deg");t.style.setProperty("--rx",-y*k+"deg")});
  el.addEventListener("pointerleave",function(){t.style.removeProperty("--ry");t.style.removeProperty("--rx")});
 }
 document.querySelectorAll(".cols div").forEach(function(el){tilt(el,el,14)});
 
}
