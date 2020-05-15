let palo = ['♦', '♥', '♣', '♠']
let valor = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];



var pal = Math.floor(Math.random() * palo.length);
var val = Math.floor(Math.random() * valor.length);

window.onload = function(){
    console.log('has recargado la web de nuevo')
    console.log(valor[val])
    console.log(palo[pal])
};


document.querySelector('.numero').innerHTML = valor[val]
document.querySelector('.porra').innerHTML = palo[pal]
document.querySelector('.ummpatas').innerHTML = palo[pal]

var nu = document.getElementsByClassName("numero");
var he = document.getElementsByClassName("porra");
var pi = document.getElementsByClassName("ummpatas");

if (palo[pal] =='♦' || palo[pal] =='♥'){
    nu[0].style.color = "red";
    he[0].style.color = "red";
    pi[0].style.color = "red";
}


































