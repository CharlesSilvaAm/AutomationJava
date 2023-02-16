package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class discountstep {

    WebDriver driver = new ChromeDriver();

    @Given("^que estou no site da qazando$")
    public void access_site_qazando() {
        driver.get("http://qazando.com.br/curso.html");
    }
    @When("^eu preencho meu e-mail$")
    public void preencho_email() {
        driver.findElement(By.id("email")).sendKeys("charlesclash1990@gmail.com");
    }
    @When("^seleciono em ganhar cupom$")
    public void ganhar_cupom() {
        driver.findElement(By.cssSelector("form [id=\"button\"]")).click();
    }
    @Then("^eu vejo o codigo de desconto$")
    public void codigo_desconto() {
        System.out.println("Passou 4");
    }

}
