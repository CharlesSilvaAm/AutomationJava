$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language pt"
    }
  ],
  "line": 3,
  "name": "Receber desconto da qazando",
  "description": "  Eu como usuario da qazando\r\n  quero receber um cupom de desconto\r\n  para comprar um curso com um valor reduzido",
  "id": "receber-desconto-da-qazando",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Visualizar codigo de desconto",
  "description": "",
  "id": "receber-desconto-da-qazando;visualizar-codigo-de-desconto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "que estou no site da qazando",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "eu preencho meu e-mail",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "seleciono em ganhar cupom",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "eu vejo o codigo de desconto",
  "keyword": "Then "
});
formatter.match({
  "location": "discountstep.access_site_qazando()"
});
formatter.result({
  "duration": 3933416600,
  "status": "passed"
});
formatter.match({
  "location": "discountstep.preencho_email()"
});
formatter.result({
  "duration": 1252264500,
  "status": "passed"
});
formatter.match({
  "location": "discountstep.ganhar_cupom()"
});
formatter.result({
  "duration": 310295100,
  "status": "passed"
});
formatter.match({
  "location": "discountstep.codigo_desconto()"
});
formatter.result({
  "duration": 32154200,
  "status": "passed"
});
});