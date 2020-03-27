package com.productstore.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/main/resources/feature/product.feature",
plugin = { "pretty", "html:reports/cucumber-html-report" ,"json:reports/cucumber-html-report/jsonreport",
"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},

tags= {"@TC_01_Login,@TC_02_contact,@TC_03_Order,@TC_04_signup,@TC_05_category"},
glue = {"com.productstore.stepdefinition"},
monochrome = true
)

public class productstoreRunner {
	/*@AfterClass
 public static void teardown() {
    Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
      Reporter.setSystemInfo("user", System.getProperty("user.name"));
      Reporter.setSystemInfo("", "Mac OSX");
      Reporter.setTestRunnerOutput("Sample test runner output message");

*/

}
