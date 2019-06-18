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
