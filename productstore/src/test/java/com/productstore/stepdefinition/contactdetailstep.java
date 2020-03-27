package com.productstore.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.productstore.pages.Contactdetails;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class contactdetailstep {

	WebDriver driver;
	public Contactdetails productcontact;// Creating Object for contactdetails Pages

//@TC_02 contact
//To launch the browser	

	@Given("^User launch the Chrome application$")
	public void user_launch_the_chrome_application() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
		driver = new ChromeDriver();
		productcontact = new Contactdetails(driver);
		driver.get("https://www.demoblaze.com");
		driver.manage().window().maximize();

	}

	// Navigate to contact page
	@When("^Clicking on contact to navigate contact Page$")
	public void clicking_on_contact_to_navigate_contact_Page() {
		// Write code here that turns the phrase above into concrete actions
		productcontact.contactdetailsPage();

	}

	// To fill the details
	@Then("^The user filling contactdetails using email as \\\"([^\\\"]*)\\\" and name as \\\"([^\\\"]*)\\\" and message as \\\"([^\\\"]*)\" details$")
	public void the_user_filling_contactdetails_using_email_as_and_name_as_message_as_details(String email, String name,
			String message) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(4000);
		productcontact.contactDetails(email, name, message);
		Thread.sleep(4000);
		
	}

	// To close the browser
	@Then("^Clicking on close button$")
	public void click_on_close_Button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		productcontact.browserClick();
	}

}
