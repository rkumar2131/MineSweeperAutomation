package com.ravi.minesweeper.apptest.launch;

import org.apache.log4j.Logger;
import org.junit.Assert;

import com.ravi.minesweeper.apptest.webinterface.WebAppDriver;
import com.ravi.minesweeper.apptest.webinterface.selenium.SeleniumWebAppDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class LaunchTest {
	private static Logger LOGGER = Logger.getLogger(LaunchTest.class);
	private WebAppDriver webAppDriver = SeleniumWebAppDriver.getInstance();
	
	@Given("^I open \"([^\"]*)\" and type \"([^\"]*)\"$")
	public void I_Open(final String browser, final String url){
		LOGGER.debug("I am going to "+ url +" on  "+ browser);
		webAppDriver.openBrowser(browser);
		webAppDriver.navigate("file:///"+System.getProperty("user.dir")+"\\minesweeper\\minecore.html");
	}
	
	@Then("^I should be \"([^\"]*)\" to launch minesweeper$")
	public void I_should_be(String expectedResult){
		LOGGER.debug("Login - "+ expectedResult);
		Assert.assertEquals(expectedResult, webAppDriver.isElementPresent("divBoard")? "successfull": "failed");
	}
}
