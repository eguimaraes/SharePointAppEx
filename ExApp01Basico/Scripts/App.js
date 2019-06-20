﻿



ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage()
{
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();

    // Este código é executado quando o DOM estiver pronto e criar um objeto de contexto necessário para usar o modelo de objeto do SharePoint
    $(document).ready(function () {
        getUserName();
    });

    // Esta função prepara, carrega e, em seguida, executa uma consulta do SharePoint para obter as informações dos usuários atuais
    function getUserName() {
        context.load(user);
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }

    // Esta função é executada se a chamada acima for bem-sucedida
    // Ella substitui o conteúdo do elemento 'message' pelo nome de usuário
    function onGetUserNameSuccess() {
        $('#message').text('Hello ' + user.get_title());
    }

    // Esta função é executada se a chamada acima falhar
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }
}

function controles(dado) {
    var controlesFrame = document.getElementById("controlesFrame");
    var tabela = document.getElementById("tabela");
    var linha = document.createElement("tr");
    tabela.appendChild(linha);

    for (i = 0; i < dado.length; i++) {
    var celula = document.createElement("td");
    celula.innerHTML = dado[i];
    linha.appendChild(celula);
    }
}


function get_grids() {





}

function get_dados(list) {
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();
    var web = context.get_web();
    var lista = web.get_lists().getByTitle(list);
    var listItens = lista.getItems("");
    context.load(user);
    context.load(web);
    context.load(lista);
    context.load(listItens);


    context.executeQueryAsync(onGetGetListSuccess, onGetGetListFail);
        
    function onGetGetListSuccess() {

        var listEnumerator = listItens.getEnumerator();

        while (listEnumerator.moveNext()) {
          var item = listEnumerator.get_current();
            var id = item.get_id();
            var title = item.get_item('Title');
            var valor = item.get_item('Valor');
            var dado = [title, valor];
            controles(dado);

        }
       



    }

   
    function onGetGetListFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }




}

function set_dados(list,title,valor) {

    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();
    var web = context.get_web();
    var lista = web.get_lists().getByTitle(list);
    var itemCreateInfo = new SP.ListItemCreationInformation();
    var item = lista.addItem(itemCreateInfo);
    item.set_item('Title', title);
    item.set_item('Valor', valor);

    item.update();
    



    context.load(user);
    context.load(web);
    context.load(lista);
    context.load(item);
  
    

    context.executeQueryAsync(onGetGetListSuccess, onGetGetListFail);

    function onGetGetListSuccess() {
        
        
        get_dados(list);
        

    
    }


    function onGetGetListFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }




}


function rpt_dados() {

    lista = document.getElementById("lista").value;
    prefix = document.getElementById("prefix").value;
    valor = lista;
   
    

    for (i = 0; i < nr.value; i++) {

        

        set_dados(lista, prefix + i, valor + i);



    }

}

function get_dados_Ext(url, list) { }
