package com.productstore.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Placeanorderpage {
	WebDriver driver;
	// order locators
	By Product = By.xpath("/html/body/div[5]/div/div[2]/div/div[5]/div/div/h4/a");
	By Acart = By.xpath("/html/body/div[5]/div/div[2]/div[2]/div/a");
	By Clickcart = By.xpath("/html/body/nav/div/div/ul/li[4]/a");
	By Place = By.xpath("/html/body/div[6]/div/div[2]/button");
	By Name = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input");
	By Country = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input");
	By City = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[3]/input");
	By Creditcard = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[4]/input");
	By Month = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[5]/input");
	By Year = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[6]/input");
	By Purchase = By.xpath("/html/body/div[3]/div/div/div[3]/button[2]");
	By Ok = By.xpath("/html/body/div[10]/div[7]/div/button");

	public Placeanorderpage(WebDriver driver) {
		this.driver = driver;
	}

//To launch the bowser
	public void browserLaunch(String browser, String url) {
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

	// To select product
	public void selectproduct() {
		driver.findElement(Product).click();

	}

//To add to cart
	public void add() throws InterruptedException {
		driver.findElement(Acart).click();
		Thread.sleep(3000);
		Alert a = driver.switchTo().alert();
		a.accept();
		driver.findElement(Clickcart).click();
		Thread.sleep(3000);
		driver.findElement(Place).click();
		Thread.sleep(3000);
	}

//To place an order
	public void Order(String name, String country, String city, String creditcard, String month, String year)
			throws InterruptedException, IOException {
		driver.findElement(Name).sendKeys(name);
		driver.findElement(Country).sendKeys(country);
		driver.findElement(City).sendKeys(city);
		driver.findElement(Creditcard).sendKeys(creditcard);
		driver.findElement(Month).sendKeys(month);
		driver.findElement(Year).sendKeys(year);
		Thread.sleep(4000);
		driver.findElement(Purchase).click();
		Thread.sleep(3000);
		screenShot("src/test/resources/screenshot/order.png");
		driver.findElement(Ok).click();
		Thread.sleep(2000);
	}

	// To Take Screenshot
	public void screenShot(String path) throws IOException {
		File Sshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(Sshot, new File(path));
	}

//To close the browser
	public void closebrowser() {
		driver.close();

	}

}
