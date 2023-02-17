package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import support.Utils;

public class HomePage extends Utils {
    static WebDriver driver;
    public HomePage(WebDriver driver){
        this.driver = driver;
    }
    public static void accessApplication(){
        driver.get("http://qazando.com.br/curso.html");
        waitElementBePresent(By.id("btn-ver-cursos"), 10);
        Assert.assertEquals("Não acessou a aplicação!", true, driver.findElement(By.id("btn-ver-cursos")).isDisplayed());
    }
    public void scrollDown() {
        // Executa um comando JavaScript para rolar a página até o final
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        // Aguarda um tempo para que a rolagem da página termine
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    public void inputEmailValid(){
        WebElement emailInput = driver.findElement(By.id("email"));
        emailInput.sendKeys("charles@yahoo.com");
    }
    public void clickGetDiscount(){
        driver.findElement(By.cssSelector(".form-content h3")).click();
        waitElementBePresent(By.cssSelector("form #button"), 10);
        driver.findElement(By.cssSelector("form #button")).click();
    }
    public void checkCouponDiscount() {
        String texto_cupom = driver.findElement(By.cssSelector("#cupom span")).getText();
        Assert.assertEquals("O cupom está errado","QAZANDO15OFF", texto_cupom);
    }
}
