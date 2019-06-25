<%-- As 4 linhas a seguir são diretivas de ASP.NET necessárias ao usar componentes do SharePoint --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- A marcação e o script no elemento Content a seguir serão colocados no <cabeçalho> da página --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Adicionar estilos de CSS ao arquivo a seguir -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

    <!-- Adicionar seu JavaScript ao arquivo a seguir -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script type="text/javascript" src="../Scripts/Controle.js"></script>
</asp:Content>

<%-- A marcação no elemento Content a seguir será colocada na TitleArea da página --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
  Primeiro Exemplo de APP criando e recuperando Itens de Lista
</asp:Content>

<%-- A marcação e o script no elemento Content a seguir serão colocados no <corpo> da página --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div>
        <div id="messageFrame">
           
           Carregando os Dados
        </div>

         <div id="controlesFrame">
           <span>Numero</span> <input type="text" id="nr" /><br />
            <span>Prefixo</span> <input type="text" id="prefix" /><br />
            <span>Lista</span> <input type="text" id="lista" /><br />
            <div id="btn" class="btn" onclick="rpt_dados()">Criar - JAVSCRIPT</div><br />
            <div id="btnRest"class="btn" onclick="rpt_dadosREST()">Criar - REST</div><br />
            
        </div>

         <div id="dadosFrame">
           
            <table id="tabela">
               
                <tr><td>Nome</td><td>Valor</td></tr>


            </table>
        </div>
    </div>

</asp:Content>
