package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import runner.RunCucumberTest;

public class discountstep extends RunCucumberTest {
    HomePage homepage = new HomePage(driver);
    @Given("^que estou no site da qazando$")
    public void access_site_qazando() {
        homepage.accessApplication();
    }
    @When("^eu preencho meu e-mail$")
    public void preencho_email() {
        homepage.scrollDown();
        homepage.inputEmailValid();
    }
    @When("^seleciono em ganhar cupom$")
    public void ganhar_cupom() {
        homepage.clickGetDiscount();
    }
    @Then("^eu vejo o codigo de desconto$")
    public void codigo_desconto() {
        homepage.checkCouponDiscount();
    }
}