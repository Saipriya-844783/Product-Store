package com.productstore.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.productstore.pages.Categorypage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Categorystep {
	WebDriver driver;
	public Categorypage productcategory;// Creating Object for category Pages

//@TC_05_category
//To launch the browser
	@Given("^For launching the Chrome application$")
	public void for_launching_the_chrome_application() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
		driver = new ChromeDriver();
		productcategory = new Categorypage(driver);
		driver.get("https://www.demoblaze.com");
		driver.manage().window().maximize();

	}

//Navigate to login page
	@When("^Clicking on category to navigate phone Page$")
	public void clicking_on_category_to_navigate_phone_Page() {
		// Write code here that turns the phrase above into concrete actions
		productcategory.click();

	}

//To click on category
	@Then("^The user clicking on category")
	public void the_user_clicking_on_category() throws InterruptedException, IOException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(4000);
		productcategory.clickproduct();
		Thread.sleep(4000);
		productcategory.screenShot("src/test/resources/screenshot/phone.png");
	}


//To close the browser
	@Then("^Click on close button$")
	public void click_on_close_Button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		productcategory.closebrowser();
	}

}
