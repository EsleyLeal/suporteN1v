

<template>
  <iframe class="iframeC"
    src="https://forms.office.com/pages/responsepage.aspx?id=ygWfal5nYk2aT_HMz7cu2ZBbvZkClzlDv_JDKnxdx_JUREE0SjlQNzdVRDNOWVk4WTNHSTNWSVRIRCQlQCN0PWcu"
    width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
  <div class="container">
    <div class="redes-sociais">
      <h1>SUPORTE N1</h1>

      <a href="https://www.linkedin.com/in/esleyleal/" class="linkedin-icon" target="_blank"><i
          class="fab fa-linkedin"></i></a>
      <a href="https://github.com/EsleyLeal" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
    </div>

    <form id="activationForm">
      <label for="currentDate"><span id="currentDateValue"></span></label>
      <input type="text" id="currentDate" readonly>


      <label id="selecione-atendimento" for="serviceType">Selecione o tipo de atendimento:</label>

      <select id="serviceType" onchange="form.showFields">
        <option value="" selected>Selecione uma opção</option>
        <option value="ATIVAÇÃO DE INTERNET">ATIVAÇÃO DE INTERNET</option>
        <option value="ATIVAÇÃO DE TELEFONIA">ATIVAÇÃO DE TELEFONIA</option>
        <option value="MUDANÇA DE EQUIPAMENTO">MUDANÇA DE EQUIPAMENTO</option>
        <option value="MIGRAÇÃO">MIGRAÇÃO</option>
        <option value="TROCA DE TITULARIDADE">TROCA DE TITULARIDADE</option>
        <option value="MUDANÇA DE ENDEREÇO">MUDANÇA DE ENDEREÇO</option>
        <option value="VERIFICAÇÃO DE CTO">VERIFICAÇÃO DE CTO  ( CONECTOR )  1X8 </option>
        <option value="VERIFICAÇÃO DE CTO 1X16">VERIFICAÇÃO DE CTO  ( CONECTOR )   1X16 </option>
        <option value="VERIFICAÇÃO DE CTO ( FUSIONADO )">VERIFICAÇÃO DE CTO ( FUSIONADO ) 1X8 AMERICANO</option>
        <option value="VERIFICACAO DE CTO FUSIONADO 1x8 GRUPO">VERIFICAÇÃO DE CTO ( FUSIONADO ) 1X8 GRUPO</option>
        <option value="VERIFICAÇÃO DE CTO ( FUSIONADO ) 1x16">VERIFICAÇÃO DE CTO ( FUSIONADO ) 1X16</option>
        <option value="VERIFICAÇÃO DE CTO (FUSIONADO) 1X16 MARCA ALEATÓRIA">VERIFICAÇÃO DE CTO ( FUSIONADO ) 1x16  ALEATÓRIA</option>
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
        
        <label for="CTOAtivacao">CTO:</label>
        <input type="text" id="CTO">
        
        <label for="PATRIMONIO">PATRIMONIO:</label>
        <input type="text" id="PATRIMONIO">

        <!-- <label for="TOPOLOGIA">TOPOLOGIA:</label>
        <input type="text" id="TOPOLOGIA" value=""> -->

        <label for="TOPOLOGIA">TOPOLOGIA:</label>
        <select name="TOPOLOGIA" id="TOPOLOGIA">
          <option value="">onu + rot</option>
          <option value="">onu + wifi</option>
          <option value="">ont</option>
          <option value="">switch</option>
        </select>
        
        
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
            <button type="button" id="gerarPass" onclick="gerarSenhaAleatoria()">Gerar Senha</button>
          </div>
        </div>

        <label for="sipServer">SIPSERVER:</label>
        <input type="text" id="sipServer" value="sip:numero@172.31.2.18">

        <label for="ip">IP:</label>
        <input type="text" id="ip">

        <label for="index">INDEX:</label>
        <input type="text" id="index">
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

      <!-- Seção para VERIFICAÇÃO DE CTO 1x8-->
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
          <label for="frameCtoFusionado">FRAME:</label>
          <input type="text" id="frame">

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
        <textarea class="ForaNaPon" type="text" id="fora Na Pon"> </textarea>
      </div>

      <!-- Seção para VERIFICAÇÃO DE CTO 1x16-->
      <div id="VERIFICAÇÃO DE CTO 1X16Fields" class="customFields hidden">
        

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
          <label for="frameCtoFusionado">FRAME:</label>
          <input type="text" id="frame">

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

        <label for="foraNaPonCto">PORTA 9:</label>
        <input type="text" id="9">

        <label for="foraNaPonCto">PORTA 10:</label>
        <input type="text" id="10">

        <label for="foraNaPonCto">PORTA 11:</label>
        <input type="text" id="11">

        <label for="foraNaPonCto">PORTA 12:</label>
        <input type="text" id="12">

        <label for="foraNaPonCto">PORTA 13:</label>
        <input type="text" id="13">

        <label for="foraNaPonCto">PORTA 14:</label>
        <input type="text" id="14">

        <label for="foraNaPonCto">PORTA 15:</label>
        <input type="text" id="15">

        <label for="foraNaPonCto">PORTA 16:</label>
        <input type="text" id="16">

        <label for="foraNaPonCto">FORA NA PON:</label>
        <textarea class="ForaNaPon" type="text" id="fora Na Pon"> </textarea>
      </div>


      <!-- Seção para VERIFICAÇÃO DE CTO (FUSIONADO) 1x8 -->
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

        <label for="foraNaPonCto">FORA NA PON:</label>
        <textarea class="ForaNaPon" type="text" id="fora Na Pon"> </textarea>
      </div>
      <!-- Seção para VERIFICAÇÃO DE CTO (FUSIONADO) 1x8 GRUPO -->
      <div id="VERIFICACAO DE CTO FUSIONADO 1x8 GRUPOFields" class="customFields hidden">
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

        <label for="fibraAzulCtoFusionado">FIBRA AZUL:</label>
        <input type="text" id="fibra Azul">

        <label for="fibraLaranjaCtoFusionado">FIBRA LARANJA:</label>
        <input type="text" id="fibra laranja">

        <label for="fibraLaranjaCtoFusionado">FIBRA LARANJA:</label>
        <input type="text" id="fibra laranja">

        <label for="fibraVerdeCtoFusionado">FIBRA VERDE:</label>
        <input type="text" id="fibra Verde">

        <label for="fibraVerdeCtoFusionado">FIBRA VERDE:</label>
        <input type="text" id="fibra Verde">

        <label for="fibraMarromCtoFusionado">FIBRA MARROM:</label>
        <input type="text" id="fibra Marron">

        <label for="fibraMarromCtoFusionado">FIBRA MARROM:</label>
        <input type="text" id="fibra Marron">

        <label for="foraNaPonCto">FORA NA PON:</label>
        <textarea class="ForaNaPon" type="text" id="fora Na Pon"> </textarea>
      </div>

      <!-- Seção para VERIFICAÇÃO DE CTO (FUSIONADO) 1x16 -->
      <div id="VERIFICAÇÃO DE CTO ( FUSIONADO ) 1x16Fields" class="customFields hidden">
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

        <label for="fibraAmareloCtoFusionado">FIBRA AMARELO:</label>
        <input type="text" id="fibra Amarelo">

        <label for="fibraRoxaCtoFusionado">FIBRA ROXA:</label>
        <input type="text" id="fibra Roxa">

        <label for="fibraRosaCtoFusionado">FIBRA ROSA:</label>
        <input type="text" id="fibra Preta">

        <label for="fibraPretaCtoFusionado">FIBRA BRANCA:</label>
        <input type="text" id="fibra Preta">

        <label for="fibraBrancaCtoFusionado">FIBRA BRANCA:</label>
        <input type="text" id="fibra Preta">

        <label for="fibraBrancaCtoFusionado">FIBRA BRANCA:</label>
        <input type="text" id="fibra Preta">

        <label for="fibraBrancaCtoFusionado">FIBRA BRANCA:</label>
        <input type="text" id="fibra Preta">

        <label for="foraNaPonCto">FORA NA PON:</label>
        <textarea class="ForaNaPon" type="text" id="fora Na Pon"> </textarea>
      </div>

      <!-- Seção para VERIFICAÇÃO DE CTO (FUSIONADO) 1x16 Marca Aletória-->
      <div id="VERIFICAÇÃO DE CTO (FUSIONADO) 1X16 MARCA ALEATÓRIAFields" class="customFields hidden">
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

        <label for="foraNaPonCto">FORA NA PON:</label>
        <textarea class="ForaNaPon" type="text" id="fora Na Pon"> </textarea>
      </div>




      <div id="ocorrenciaDiv"></div>

      <div class="buttonFlex">
        <button type="button" id="gerarOcorrencia">Gerar Ocorrência</button>
        <button type="button" id="rbxhtml">RBX</button>
        <button type="button" id="copiaForm">Copiar</button>
        <button type="button" id="limpaForm">Limpar</button>
      </div>
      <div>
        <textarea v-model="rbxConteudo" cols="30" rows="10" style="height: 207px; width: 394px;"
          class="textArea"></textarea>
        <button type="button" id="tranformRBX" @click="copiarHTML">Transformar RBX</button>
      </div>
    </form>

  </div>
</template>
<script>


export default {
  data() {
    return {
      rbxConteudo: '', // Dados do textarea
    };
  },
  methods: {
    copiarHTML() {
      const htmlTransformado = `<p>${this.rbxConteudo.trim().replace(/\n/g, '</p><p>')}</p>\n`;
      this.copiarParaAreaDeTransferencia(htmlTransformado);

      // alert('Conteúdo transformado e copiado para a área de transferência!');
    },
    copiarParaAreaDeTransferencia(texto) {
      const elementoTemporario = document.createElement('textarea');
      document.body.appendChild(elementoTemporario);
      elementoTemporario.value = texto;
      elementoTemporario.select();
      document.execCommand('copy');
      document.body.removeChild(elementoTemporario);
    },
  },
};




</script>





<style scoped></style>
