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
</asp:Content>

<%-- A marcação no elemento Content a seguir será colocada na TitleArea da página --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- A marcação e o script no elemento Content a seguir serão colocados no <corpo> da página --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div>
        <p id="message">
            <!-- O seguinte conteúdo será substituído pelo nome de usuário quando você executar o aplicativo. Consulte App.js -->
            initializing...
        </p>
    </div>

</asp:Content>
