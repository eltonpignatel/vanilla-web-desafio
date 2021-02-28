var bloco = 0;
var componentes = [];
var mouseX;
var mouseY;
var novoScript = true;

function incluirBloco(){
  this.bloco++;
  var div = document.createElement('div');
  div.setAttribute('id','bloco'+this.bloco);
  div.setAttribute('class','bloco');
  document.getElementById('root').appendChild(div);
}

function incluirComponente(nomeComponente){
  incluirBloco();
  if(this.componentes.length == 0){
    incluirComponenteStyle(nomeComponente);
    incluirComponenteScript(nomeComponente);
  }else{
    for (var i=0; i < componentes.length; i++){
      if(componentes[i].nome == nomeComponente){
        novoScript = false;
        break;
      }else if (i === componentes.length-1) {
        incluirComponenteStyle(nomeComponente);
        incluirComponenteScript(nomeComponente);
      }
    }
  }

  var componente;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      conteudoComponente = this.responseText;
    }
  };
  xhttp.open('GET', 'js/componentes/'+nomeComponente+'.html', false);
  xhttp.setRequestHeader("Cache-Control", "no-cache");
  xhttp.send();

  var shadowElements = document.createElement('div');
  shadowElements.innerHTML = conteudoComponente;
  var all = shadowElements.getElementsByTagName('*');
  for(var i = 0; i < all.length; i++){
    if ( all[i].id != '' ) {
      all[i].id = this.bloco+'-'+all[i].id;
    }
  }
  document.getElementById('bloco'+this.bloco).appendChild(all[0]);

  var componente;
  componente = new AppML('bloco'+this.bloco, 'data/dados.json');
  //componente.controller = 'controller';
  componente.run('bloco'+this.bloco,nomeComponente);

  componentes[componentes.length] = {nome:nomeComponente,bloco:this.bloco};
  if (!novoScript){onInit()};

}

function incluirComponenteStyle(nomeComponente){
  var componenteStyle = document.createElement('link');
  componenteStyle.href = 'js/componentes/'+nomeComponente+'.css';
  componenteStyle.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(componenteStyle);
}

function incluirComponenteScript(nomeComponente) {
  var componenteScript = document.createElement('script');
  componenteScript.src = 'js/componentes/'+nomeComponente+'.js';

  componenteScript.onreadystatechange = callback;
  componenteScript.onload = callback;

  document.getElementsByTagName('head')[0].append(componenteScript);
}

//Gambiarra para funcionar a função do outro arquivo de script
function callback(){
  onInit();
}
function controller(){
window[this.componentes[componentes.length-1].nome+'Controller']();
}
function onInit(){
  window[this.componentes[componentes.length-1].nome]();
}

function getPositions(ev) {
if (ev == null) { ev = window.event }
   mouseX = ev.clientX;
   mouseY = ev.clientY;
}

function reload(){
  location.reload();
}
