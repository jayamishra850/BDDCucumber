package stepDefinitions;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinitionMap {
	
	WebDriver driver;

	@Given("^user is on Login Page$")
	public void user_is_Present_on_Login_Page()
	{
		System.setProperty("webdriver.chrome.driver", "D:\\Softwares\\frameworks\\Selenium Practice\\chromedriver_win32\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("https://www.facebook.com/");
	}
	
	@When("^title of login page is Facebook$")
	public void title_of_login_page_is_Free_CRM() 
	{
	   String title= driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("Facebook – log in or sign up", title);
	}
	
	@Then("^user enter username and password$")
	public void user_enters_username_and_password(DataTable credentials) 
	{
	  for(Map<String, String> data: credentials.asMaps(String.class, String.class))
	  {
		driver.findElement(By.name("email")).sendKeys(data.get("username"));
	  driver.findElement(By.name("pass")).sendKeys(data.get("password"));
	  }
	}

	@Then("^user click on login button$")
	public void user_clicks_on_login_button() 
	{
		driver.findElement(By.xpath("//input[contains(@value,'Log In')]")).click();
	}

	@Then("^user on home page$")
	public void user_is_on_home_page()
	{
		String title1= driver.getTitle();
		   System.out.println(title1);
		   Assert.assertEquals("Facebook", title1);
	}
}

