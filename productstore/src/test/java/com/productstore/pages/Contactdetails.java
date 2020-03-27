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

public class Contactdetails {
	WebDriver driver;
	// contact locators
	By Contact = By.xpath("/html/body/nav/div[1]/ul/li[2]/a");
	By Email = By.xpath("/html/body/div[1]/div/div/div[2]/form/div[1]/input");
	By Name = By.xpath("/html/body/div[1]/div/div/div[2]/form/div[2]/input");
	By Message = By.xpath("/html/body/div[1]/div/div/div[2]/form/div[3]/textarea");
	By Send = By.xpath("/html/body/div[1]/div/div/div[3]/button[2]");

	public Contactdetails(WebDriver driver) {
		this.driver = driver;
	}

//To launch the browser
	public void browserLaunch(String browser, String url)//
	{
		try {
			// To launch firefox Browser
			if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver", "src//test//resources//driver//geckodriver.exe");
				driver = new FirefoxDriver();
			}
			// To launch Chrome Browser
			else if (browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
				driver = new ChromeDriver();
			}
			// to launch InternetExolorer
			else if (browser.equalsIgnoreCase("Internet Explore")) {
				System.setProperty("webdriver.ie.driver", "src//test//resources//driver//IEDriverServer.exe");
				driver = new InternetExplorerDriver();
			}
			// to maximize the window
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.get(url);

		} catch (WebDriverException e) {
			System.out.println("Browser could not be launched");
		}
	}

//Methods for contact details
	public void contactdetailsPage() {
		driver.findElement(Contact).click();

	}

//To fill the contact details
	public void contactDetails(String email, String name, String message) throws InterruptedException, IOException {
		Thread.sleep(4000);
		driver.findElement(Email).sendKeys(email);
		driver.findElement(Name).sendKeys(name);
		driver.findElement(Message).sendKeys(message);
		driver.findElement(Send).click();
		Thread.sleep(5000);
		Thread.sleep(5000);
		Alert a = driver.switchTo().alert();
		a.accept();
		Thread.sleep(5000);
	}


//To close the brwoser
	public void browserClick() {
		driver.close();
	}
}
