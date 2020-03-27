package com.productstore.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.productstore.pages.Signup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Signuppstep {
	WebDriver driver;
	public Signup productsignup; // Creating Object for signup Pages

//@TC_04_signup scenario methods 	
//To launch the browser
	@Given("^Launching the Chrome application$")
	public void launching_the_chrome_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
		driver = new ChromeDriver();
		productsignup = new Signup(driver);
		driver.get("https://www.demoblaze.com");
		driver.manage().window().maximize();

	}

//Navigate to signup page
	@When("^Clicking on signup to navigate signup Page$")
	public void clicking_on_signup_to_navigate_signup_Page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		productsignup.signUpPage();
	}

//Fill details
	@Then("^The user signup using \"([^\"]*)\" and \"([^\"]*)\" with vaild details$")
	public void the_user_signup_using_and_with_vaild_details(String username, String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(4000);
		productsignup.signUpDetails(username, password);
		Thread.sleep(4000);
	}

//To close the browser
	@Then("^Clicking on signup button$")
	public void click_on_signup_Button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(4000);
		productsignup.signUpClick();
	}

}
