package com.productstore.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.productstore.pages.Placeanorderpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class placeanorderstep {
	WebDriver driver;
	public Placeanorderpage productorder;// Creating Object for place an order Pages

//@TC_03_order
	// To launch the browser
	@Given("^To launch the Google chrome application$")
	public void to_launch_the_Google_chrome_application() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
		driver = new ChromeDriver();
		productorder = new Placeanorderpage(driver);
		driver.get("https://www.demoblaze.com");
		driver.manage().window().maximize();
	}

//Navigate to product page
	@When("^To click on product to navigate product Page$")
	public void to_click_on_product_to_navigate_product_Page() {
		// Write code here that turns the phrase above into concrete actions
		productorder.selectproduct();

	}

//To fill the details
	@Then("^The user filling the name as \"([^\"]*)\" country as \"([^\"]*)\" city as \"([^\"]*)\" creditcard as \"([^\"]*)\" month as \"([^\"]*)\" year as \"([^\"]*)\" details")
	public void the_user_filling_the_name_as_country_as_city_as_creditcard_as_month_as_year_as_details(String name,
			String country, String city, String creditcard, String month, String year)
			throws InterruptedException, IOException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		productorder.add();
		Thread.sleep(2000);
		productorder.Order(name, country, city, creditcard, month, year);
		Thread.sleep(2000);

	}

//To close the browser
	@Then("^To close the product browser button$")
	public void to_close_the_product_browser_Button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		productorder.closebrowser();
	}

}
