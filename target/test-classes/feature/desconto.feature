# language pt

Feature: Receber desconto da qazando
    Eu como usuario da qazando
    quero receber um cupom de desconto
    para comprar um curso com um valor reduzido

    Scenario: Visualizar codigo de desconto
      Given que estou no site da qazando
      When eu preencho meu e-mail
      When seleciono em ganhar cupom
      Then eu vejo o codigo de desconto

