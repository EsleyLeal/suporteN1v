
<template>
  <div class="container">
  <div class="redes-sociais">
    <h1>SUPORTE N1</h1> 
    <a href="https://www.linkedin.com/in/esleyleal/" class="linkedin-icon" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/EsleyLeal" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
  </div>
  
  <form id="activationForm">
  <label for="currentDate"><span id="currentDateValue"></span></label>
    <input type="text" id="currentDate" readonly>


    <label for="serviceType">Selecione o tipo de atendimento:</label>
    
    <select id="serviceType" onchange="form.showFields">
      <option value="ATIVAÇÃO DE INTERNET">ATIVAÇÃO DE INTERNET</option>
      <option value="ATIVAÇÃO DE TELEFONIA">ATIVAÇÃO DE TELEFONIA</option>
      <option value="VERIFICAÇÃO DE CTO">VERIFICAÇÃO DE CTO</option>
      <option value="VERIFICAÇÃO DE CTO ( FUSIONADO )">VERIFICAÇÃO DE CTO ( FUSIONADO )</option>
      <option value="MUDANÇA DE EQUIPAMENTO">MUDANÇA DE EQUIPAMENTO</option>
      <option value="MIGRAÇÃO">MIGRAÇÃO</option>
      <option value="TROCA DE TITULARIDADE">TROCA DE TITULARIDADE</option>
      <option value="MUDANÇA DE ENDEREÇO">MUDANÇA DE ENDEREÇO</option>
    </select>


    <!-- Seção para ATIVAÇÃO DE INTERNET -->
    <div id="ATIVAÇÃO DE INTERNETFields" class="customFields hidden">
      <label for="cliente">CLIENTE:</label>
      <input type="text" id="cliente">

      <label for="tecnicoAtivacao">TECNICO:</label>
      <input type="text" id="tecnico">

      <label for="codigoClienteAtivacao">CODIGO:</label>
      <input type="text" id="codigo">

      <label for="FHTT">FHTT:</label>
      <input type="text" id="FHTT">
      
      <label for="PATRIMONIO">PATRIMONIO:</label>
      <input type="text" id="PATRIMONIO">
      
      <label for="TOPOLOGIA">TOPOLOGIA:</label>
      <input type="text" id="TOPOLOGIA">

      <label for="CTOAtivacao">CTO:</label>
      <input type="text" id="CTO">

      <label for="OLTAtivacao">OLT:</label>
      <input type="text" id="OLT">

      <label for="PPPOEAtivacao">PPPOE:</label>
      <input type="text" id="PPPOE">

      <label for="SINAL_ONU">SINAL ONU:</label>
      <input type="text" id="SINAL_ONU">
    </div>

    <!-- Seção para ATIVAÇÃO DE TELEFONIA -->
<div id="ATIVAÇÃO DE TELEFONIAFields" class="customFields hidden">
  <label for="numeroAtribuido">NUMERO ATRIBUIDO:</label>
  <input type="text" id="numero Atribuido">

  <div class="senhaContainer">
      <label for="senhaSIPulse">SENHA SIPULSE:</label>
      <div class="inputWithButton">
          <input type="text" id="senha SIPulse" class="buttonGerarSenha">
          <button type="button" onclick="gerarSenhaAleatoria()">Gerar Senha</button>
      </div>
  </div>

  <label for="sipServer">SIPSERVER:</label>
  <input type="text" id="sipServer">
</div>

    <!-- Seção para VERIFICAÇÃO DE CTO -->
    <div id="VERIFICAÇÃO DE CTOFields" class="customFields hidden">
        <label for="tecnicoCto">TECNICO:</label>
        <input type="text" id="tecnico">
      
        <label for="oltCto">OLT:</label>
        <input type="text" id="olt">

        <label for="ctoCto">CTO:</label>
        <input type="text" id="cto">

        <label for="ruaCto">RUA:</label>
        <input type="text" id="rua">

        <label for="pontoReferenciaCto">PONTO DE REFERENCIA:</label>
        <input type="text" id="ponto de Referencia">

        <div class="slotPonDiv">
            <label for="slotNumeroCto">SLOT:</label>
            <input type="text" id="slot">

            <label for="slotPonCto">PON:</label>
            <input type="text" id="Pon">
        </div>

        <label for="foraNaPonCto">PORTA 1:</label>
        <input type="text" id="1">

        <label for="foraNaPonCto">PORTA 2:</label>
        <input type="text" id="2">

        <label for="foraNaPonCto">PORTA 3:</label>
        <input type="text" id="3">

        <label for="foraNaPonCto">PORTA 4:</label>
        <input type="text" id="4">

        <label for="foraNaPonCto">PORTA 5:</label>
        <input type="text" id="5">

        <label for="foraNaPonCto">PORTA 6:</label>
        <input type="text" id="6">

        <label for="foraNaPonCto">PORTA 7:</label>
        <input type="text" id="7">

        <label for="foraNaPonCto">PORTA 8:</label>
        <input type="text" id="8">

        <label for="foraNaPonCto">FORA NA PON:</label>
        <input type="text" id="fora Na Pon">
    </div>

    <!-- Seção para VERIFICAÇÃO DE CTO (FUSIONADO) -->
    <div id="VERIFICAÇÃO DE CTO ( FUSIONADO )Fields" class="customFields hidden">
        <label for="tecnicoCtoFusionado">TECNICO:</label>
        <input type="text" id="tecnico">

        <label for="oltCtoFusionado">OLT:</label>
        <input type="text" id="olt">

        <label for="ctoCtoFusionado">CTO:</label>
        <input type="text" id="cto">

        <label for="ruaCtoFusionado">RUA:</label>
        <input type="text" id="rua">

        <label for="pontoReferenciaCtoFusionado">PONTO DE REFERENCIA:</label>
        <input type="text" id="ponto de Referencia">

        <div class="slotPonDivFusionado">
            <label for="frameCtoFusionado">FRAME:</label>
            <input type="text" id="frame">
    
            <label for="slotNumeroCtoFusionado">SLOT:</label>
            <input type="text" id="slot">
    
            <label for="slotPonCtoFusionado">PON:</label>
            <input type="text" id="Pon">
        </div>
    
        <label for="fibraAzulCtoFusionado">FIBRA AZUL:</label>
        <input type="text" id="fibra Azul">
    
        <label for="fibraLaranjaCtoFusionado">FIBRA LARANJA:</label>
        <input type="text" id="fibra Laranja">
    
        <label for="fibraVerdeCtoFusionado">FIBRA VERDE:</label>
        <input type="text" id="fibra Verde">
    
        <label for="fibraMarronCtoFusionado">FIBRA MARRON:</label>
        <input type="text" id="fibra Marron">
    
        <label for="fibraCinzaCtoFusionado">FIBRA CINZA:</label>
        <input type="text" id="fibra Cinza">
    
        <label for="fibraBrancaCtoFusionado">FIBRA BRANCA:</label>
        <input type="text" id="fibra Branca">
    
        <label for="fibraVermelhaCtoFusionado">FIBRA VERMELHA:</label>
        <input type="text" id="fibra Vermelha">
    
        <label for="fibraPretaCtoFusionado">FIBRA PRETA:</label>
        <input type="text" id="fibra Preta">
    
        <label for="foraNaPonCtoFusionado">FORA NA PON:</label>
        <input type="text" id="fora Na Pon">
    </div>

    <!-- Seção para MUDANÇA DE EQUIPAMENTO -->
    <div id="MUDANÇA DE EQUIPAMENTOFields" class="customFields hidden">
        <label for="clienteMudancaEquipamento">CLIENTE:</label>
        <input type="text" id="CLIENTE">
  
        <label for="tecnicoMudancaEquipamento">TECNICO:</label>
        <input type="text" id="tecnico">
  
        <label for="codigoMudancaEquipamento">CÓDIGO:</label>
        <input type="text" id="codigo">
  
        <label for="fhttAntigo">FHTT ANTIGO:</label>
        <input type="text" id="FHTT ANTIGO">
  
        <label for="fhttNovo">FHTT NOVO:</label>
        <input type="text" id="FHTT NOVO">
  
        <label for="patrimonioMudancaEquipamento">PATRIMONIO:</label>
        <input type="text" id="PATRIMONIO">
  
        <label for="topologiaMudancaEquipamento">TOPOLOGIA:</label>
        <input type="text" id="TOPOLOGIA">
  
        <label for="localidadeMudancaEquipamento">LOCALIDADE:</label>
        <input type="text" id="LOCALIDADE">
  
        <label for="ppoeMudancaEquipamento">PPOE:</label>
        <input type="text" id="PPOE">
      </div>
      
      <!-- Seção para MIGRAÇÃO -->
    <div id="MIGRAÇÃOFields" class="customFields hidden">
        <label for="clienteMigracao">CLIENTE:</label>
        <input type="text" id="CLIENTE">
    
        <label for="tecnicoMigracao">TECNICO:</label>
        <input type="text" id="TECNICO">
    
        <label for="codigoMigracao">CÓDIGO:</label>
        <input type="text" id="CÓDIGO">
    
        <label for="fhttMigracao">FHTT:</label>
        <input type="text" id="FHTT">
    
        <label for="oltMigracao">OLT:</label>
        <input type="text" id="OLT">
    </div>
      
    <!-- Seção para TROCA DE TITULARIDADE -->
    <div id="TROCA DE TITULARIDADEFields" class="customFields hidden">
        <label for="antigoTitular">ANTIGO TITULAR:</label>
        <input type="text" id="ANTIGO TITULAR">

        <label for="pppoeTrocaTitularidade">PPPOE:</label>
        <input type="text" id="PPPOE">

        <label for="chamadoTrocaTitularidade">CHAMADO:</label>
        <input type="text" id="CHAMADO">

        <label for="abertoPorTrocaTitularidade">ABERTO POR:</label>
        <input type="text" id="ABERTO POR">

        <label for="novoTitular">NOVO TITULAR:</label>
        <input type="text" id="NOVO TITULAR">

        <label for="cpfTrocaTitularidade">CPF:</label>
        <input type="text" id="CPF">

        <label for="fhttTrocaTitularidade">FHTT:</label>
        <input type="text" id="FHTT">
    </div>

    <!-- Seção para MUDANÇA DE ENDEREÇO -->
    <div id="MUDANÇA DE ENDEREÇOFields" class="customFields hidden">
        <label for="clienteMudancaEndereco">CLIENTE:</label>
        <input type="text" id="CLIENTE">
    
        <label for="tecnicoMudancaEndereco">TECNICO:</label>
        <input type="text" id="TECNICO">
    
        <label for="fhttMudancaEndereco">FHTT:</label>
        <input type="text" id="FHTT">
    
        <label for="oltMudancaEndereco">OLT:</label>
        <input type="text" id="OLT">
    
        <label for="novaCtoMudancaEndereco">NOVA CTO:</label>
        <input type="text" id="NOVA CTO">
    </div>
  
    <div id="ocorrenciaDiv"></div>

    <div class="buttonFlex">
      <button type="button" id="gerarOcorrencia">Gerar Ocorrência</button>
      <button type="button" id="rbxhtml">RBX</button>
      <button type="button" id="copiaForm">Copiar</button>
      <button type="button" id="limpaForm">Limpar</button>
    </div>
    

    </form>
  </div>
</template>

<style scoped>

</style>
