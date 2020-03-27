package com.productstore.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Signup {
	WebDriver driver;
	// signup locators
	By Sign = By.xpath("/html/body/nav/div[1]/ul/li[8]/a");
	By Username = By.xpath("/html/body/div[2]/div/div/div[2]/form/div[1]/input");
	By Password = By.xpath("/html/body/div[2]/div/div/div[2]/form/div[2]/input");
	By Signup = By.xpath("/html/body/div[2]/div/div/div[3]/button[2]");

	public Signup(WebDriver driver) {
		this.driver = driver;
	}

//To launch the browser
	public void browserLaunch(String browser, String url) {
		try {
//To launch firefox Browser
			if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver", "src//test//resources//driver//geckodriver.exe");
				driver = new FirefoxDriver();
			}
//To launch Chrome Browser
			else if (browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
				driver = new ChromeDriver();
			}
//to launch InternetExolorer
			else if (browser.equalsIgnoreCase("Internet Explore")) {
				System.setProperty("webdriver.ie.driver", "src//test//resources//driver//IEDriverServer.exe");
				driver = new InternetExplorerDriver();
			}
//to maximize the window
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.get(url);

		} catch (WebDriverException e) {
			System.out.println("Browser could not be launched");
		}
	}

//Methods for signup pages and signup details
	public void signUpPage() {
		driver.findElement(Sign).click();

	}

	public void signUpDetails(String username, String password) throws IOException {
		driver.findElement(Username).sendKeys(username);
		driver.findElement(Password).sendKeys(password);
		driver.findElement(Signup).click();

	}

	// getting signup and closing the browser
	public void signUpClick() {
		Alert a = driver.switchTo().alert();
		a.accept();

		driver.close();
	}
}
