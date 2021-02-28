var listaEscolherCampos = [];
var listaCamposEscolhidos = [];

function seletorCamposComp(){
  console.log(getId('listaCamposEscolhidos'));
  preencheListas();
}

function selecionarCampo(obj){
  if (obj.getAttribute('selected') != null){
    obj.removeAttribute('selected');
  } else {
    obj.setAttribute('selected', '');
  }
}

function preencheEscolherCampos(){
  preencheListas();

  var elementosLista = document.getElementById(getId('listaCamposEscolhidos')).getElementsByTagName('li');
  for(var i=0;i<elementosLista.length;i++){
    if(elementosLista[i].getAttribute('selected') != null){
      listaCamposEscolhidos.splice(listaCamposEscolhidos.indexOf(elementosLista[i].innerText),1);
      listaEscolherCampos.push(elementosLista.item(i).innerText);

      elementosLista[i].removeAttribute('selected');
      document.getElementById(getId('listaEscolherCampos')).appendChild(elementosLista[i]);
      i--;
    }
  }
  exibeListas();
}

function preencheCamposEscolhidos(){
  preencheListas();

  var elementosLista = document.getElementById(getId('listaEscolherCampos')).getElementsByTagName('li');
  for(var i=0;i<elementosLista.length;i++){
    if(elementosLista.item(i).getAttribute('selected') != null){
      listaEscolherCampos.splice(listaEscolherCampos.indexOf(elementosLista[i].innerText),1);
      listaCamposEscolhidos.push(elementosLista.item(i).innerText);

      elementosLista[i].removeAttribute('selected');
      document.getElementById(getId('listaCamposEscolhidos')).appendChild(elementosLista[i]);
      i--;
    }
  }
  exibeListas();
}

function preencheListas(){
  listaEscolherCampos = [];
  listaCamposEscolhidos = [];

  var elementosLista = document.getElementById(getId('listaCamposEscolhidos')).getElementsByTagName('li');
  for(var i=0;i<elementosLista.length;i++){
    listaCamposEscolhidos.push(elementosLista.item(i).innerText);
  }

  var elementosLista = document.getElementById(getId('listaEscolherCampos')).getElementsByTagName('li');
  for(var i=0;i<elementosLista.length;i++){
    listaEscolherCampos.push(elementosLista.item(i).innerText);
  }
  exibeListas();
}

function exibeListas(){
  console.log('-----------------------');
  console.log('listaCamposEscolhidos:');
  console.log(listaCamposEscolhidos);
  console.log('listaEscolherCampos:');
  console.log(listaEscolherCampos);
}

function getId(descricaoId){
  return this.bloco+'-'+descricaoId;
}
