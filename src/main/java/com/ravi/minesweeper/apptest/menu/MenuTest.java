package com.ravi.minesweeper.apptest.menu;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;

import com.ravi.minesweeper.apptest.launch.LaunchTest;
import com.ravi.minesweeper.apptest.webinterface.WebAppDriver;
import com.ravi.minesweeper.apptest.webinterface.selenium.SeleniumWebAppDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class MenuTest {
	private static Logger LOGGER = Logger.getLogger(LaunchTest.class);
	private WebAppDriver webAppDriver = SeleniumWebAppDriver.getInstance();
	
	
	@Given("^\"([^\"]*)\" opened with minesweeper app$")
	public void Browser_Opened(final String browser){
		webAppDriver.openBrowser(browser);
	}
		
	@Then("^Intermediate menu in game menu should be present$")
	public void Intermediate_menu(DataTable dataTable){
		List<String> menus= dataTable.asList(String.class);
		for(String menu : menus){
			LOGGER.debug("Menu Item " + menu);
			Assert.assertTrue("Element not found in Menu " + menu, webAppDriver.isElementPresent(menu));
		}
	}
	
	@And("^\"([^\"]*)\" should be present$")
	public void Should_be_present(String webElement){
		LOGGER.debug("Web Element " + webElement + "should be present");
		webAppDriver.getWebElement("intermediate_image").getAttribute("src").contains("webElement");
	}
}
