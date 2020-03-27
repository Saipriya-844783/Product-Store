package com.productstore.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Categorypage {
	WebDriver driver;
	// category locators
	By Phone = By.xpath("/html/body/div[5]/div/div[1]/div/a[2]");
	By Product = By.xpath("/html/body/div[5]/div/div[2]/div/div[6]/div/div/h4/a");

	public Categorypage(WebDriver driver) {
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
//To click on category

	public void click() {
		driver.findElement(Phone).click();

	}

//To select the product
	public void clickproduct() throws InterruptedException {
		Thread.sleep(3000);
		driver.findElement(Product).click();
		Thread.sleep(3000);
	}
// To Take Screenshot
		public void screenShot(String path) throws IOException {
			File Sshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(Sshot, new File(path));
		}

//To close the browser
	public void closebrowser()

	{
		driver.close();
	}
}
