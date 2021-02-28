var Level2Display;

function tabelaComp(){
  /*var componente;
  componente = new AppML('bloco'+this.bloco, 'data/dados.json');
  componente.controller = 'tabelaCompController';
  componente.run('bloco'+this.bloco,'tabelaComp');*/
}

function expandirTabela(obj){
  var tabela = obj.parentNode.parentNode.parentNode.parentNode.parentNode;
  Level2Display = window.getComputedStyle(tabela.getElementsByClassName('level2')[0],null).display;

  if (Level2Display === 'table-row') {
    Level2Display = 'none';
  } else {
    Level2Display = 'table-row';
  }
  var linhas = tabela.getElementsByClassName('level2');
  for(var i = 0; i < linhas.length; i++){
    linhas.item(i).style.display = Level2Display;
  }
}

function expandirSecao(obj){

  console.log(obj);
}

var tabelaCompController = function($appml) {
  console.log($appml.message);
}
