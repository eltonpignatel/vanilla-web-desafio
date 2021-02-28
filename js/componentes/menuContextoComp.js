function menuContextoComp(){
  //Remove todos os outros
  listaMenuContextoComp = document.getElementsByClassName('menuContextoComp');

  for (var i=0;i <listaMenuContextoComp.length-1; i++){
    listaMenuContextoComp[i].remove();
  }

  document.getElementsByClassName('menuContextoComp')[0].style='position:absolute;top:'+mouseY+'px;left:'+mouseX+'px;';
  var menuContextoComp = document.getElementsByClassName('menuContextoComp')[0];

  document.addEventListener('click', retiraComponente);

  listaMenuContextoComp = document.getElementsByClassName('menuContextoComp');
  for (var i=0;i <listaMenuContextoComp.length; i++){
    listaMenuContextoComp[i].addEventListener('click',function (e){
      console.log(e.target.innerText);
      document.getElementsByClassName('menuContextoComp')[0].remove();
      document.removeEventListener('click',retiraComponente);
    });
  }
}
var retiraComponente = function(){
  document.getElementsByClassName('menuContextoComp')[0].remove();
}
