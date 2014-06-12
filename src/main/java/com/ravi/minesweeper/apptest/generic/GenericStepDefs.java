package com.ravi.minesweeper.apptest.generic;

import org.apache.log4j.Logger;

import com.ravi.minesweeper.apptest.webinterface.WebAppDriver;
import com.ravi.minesweeper.apptest.webinterface.selenium.SeleniumWebAppDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class GenericStepDefs {

	private static Logger LOGGER = Logger.getLogger(GenericStepDefs.class);
	private WebAppDriver webAppDriver = SeleniumWebAppDriver.getInstance();
		
	@And("^I click on \"([^\"]*)\"$")
	public void I_Click_On(String object){
		LOGGER.debug("Clicking on " + object);
		webAppDriver.click(object);
	}
	
	@Given("^When Execute scenario is \"([^\"]*)\"$")
	public void When_Execute_scenario_is(String executeCommand){
		LOGGER.debug("Execute command" + executeCommand);
		if(executeCommand.equals("SKIP")){
			throw new PendingException("Scenario skipped as execute command is SKIP");
		}
	}
	
	@And("^I enter \"([^\"]*)\" for \"([^\"]*)\" input$")
	public void I_enter(String text, String object){
		LOGGER.debug("Entering in "+ text +" value "+ object);
		webAppDriver.type(text, object);
	}
	
}
