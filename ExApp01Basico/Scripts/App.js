'use strict';

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

function controles() {
    var controlesFrame = document.getElementById("controlesFrame");
    





}


function get_grids() { }

function get_dados(list) {

    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();
    var web = context.get_web();
    var lista = web.get_lists().getByTitle(list);
    var listItens = lista.getItems("");
    context.load(user);
    context.load(web);
    context.load(lista);
    context.load(listItens);


    context.executeQueryAsync(onGetGetListSuccess, onGetGetListSuccess);
        
    function onGetGetListSuccess() {

       var listEnumerator = collList.getEnumerator();

        while (listEnumerator.moveNext()) {
          var item = listEnumerator.get_current();
          item.get
        }
       



    }

    // Esta função é executada se a chamada acima falhar
    function onGetGetListSuccess(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }




}

function get_dados_Ext(url, list) { }
