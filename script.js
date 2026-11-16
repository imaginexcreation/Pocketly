var lang="bn",inc=12500,exp=8200,due=4300;
function f(n){return"৳ "+n.toLocaleString(lang==="bn"?"bn-BD":"en-US")}
function draw(){
 document.getElementById("inc").textContent=f(inc);
 document.getElementById("exp").textContent=f(exp);
 document.getElementById("pro").textContent=f(inc-exp);
 document.getElementById("due").textContent=f(due);
}
function setLang(l){
 lang=l;document.documentElement.lang=l;
 document.querySelectorAll("[data-bn]").forEach(function(e){
  if(!e.dataset.en)e.dataset.en=e.textContent;
  e.textContent=l==="bn"?e.dataset.bn:e.dataset.en;
 });
 document.getElementById("bn").setAttribute("aria-pressed",l==="bn");
 document.getElementById("en").setAttribute("aria-pressed",l==="en");
 try{localStorage.setItem("lang",l)}catch(e){}
 draw();
}
document.getElementById("bn").onclick=function(){setLang("bn")};
document.getElementById("en").onclick=function(){setLang("en")};
document.getElementById("rec").onclick=function(){inc+=1000;due=Math.max(0,due-1000);draw()};
document.getElementById("pay").onclick=function(){exp+=400;draw()};
document.getElementById("y").textContent=new Date().getFullYear();
var s="bn";try{s=localStorage.getItem("lang")||"bn"}catch(e){}
setLang(s);

if(matchMedia("(hover:hover)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
 function tilt(el,t,k){
  el.addEventListener("pointermove",function(e){var r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.setProperty("--ry",x*k+"deg");t.style.setProperty("--rx",-y*k+"deg")});
  el.addEventListener("pointerleave",function(){t.style.removeProperty("--ry");t.style.removeProperty("--rx")});
 }
 document.querySelectorAll(".scr,.vis,.scene,.receipt,.both li").forEach(function(el){tilt(el,el,14)});
 var st=document.querySelector(".stage"),rg=document.querySelector(".rig");if(st&&rg){tilt(st,rg,22)}
}
