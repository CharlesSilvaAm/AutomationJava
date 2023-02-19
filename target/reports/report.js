$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language pt"
    }
  ],
  "line": 4,
  "name": "Receber desconto da qazando",
  "description": "Eu como usuario da qazando\r\nquero receber um cupom de desconto\r\npara comprar um curso com um valor reduzido",
  "id": "receber-desconto-da-qazando",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Visualizar codigo de desconto",
  "description": "",
  "id": "receber-desconto-da-qazando;visualizar-codigo-de-desconto",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Desconto"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou no site da qazando",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "eu preencho meu e-mail",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "seleciono em ganhar cupom",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "eu vejo o codigo de desconto",
  "keyword": "Then "
});
formatter.match({
  "location": "discountstep.access_site_qazando()"
});
formatter.result({
  "duration": 12228826200,
  "status": "passed"
});
formatter.match({
  "location": "discountstep.preencho_email()"
});
formatter.result({
  "duration": 1077189600,
  "status": "passed"
});
formatter.match({
  "location": "discountstep.ganhar_cupom()"
});
formatter.result({
  "duration": 284825200,
  "status": "passed"
});
formatter.match({
  "location": "discountstep.codigo_desconto()"
});
formatter.result({
  "duration": 42997600,
  "status": "passed"
});
});