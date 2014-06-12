package com.ravi.minesweeper.apptest.webinterface.selenium;

import static com.ravi.minesweeper.apptest.util.ObjectRepository.getElementProperty;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.ravi.minesweeper.apptest.webinterface.WebAppDriver;

public class SeleniumWebAppDriver implements WebAppDriver {
	private static Logger LOGGER = Logger.getLogger(SeleniumWebAppDriver.class);
	private static final String LOG4J_FILE_PATH = System.getProperty("user.dir")+"//src//main//resources//META-INF//log4j.xml";
	private static SeleniumWebAppDriver webAppDriver;
	private static WebDriver driver = null;
	
	private SeleniumWebAppDriver() {
	}

	public static SeleniumWebAppDriver getInstance() {
		if (webAppDriver == null) {
			webAppDriver = new SeleniumWebAppDriver();
			DOMConfigurator.configure(LOG4J_FILE_PATH);
		}
		return webAppDriver;
	}

	@Override
	public void openBrowser(String browser) {
		LOGGER.debug("Opening Browser " + browser);
		driver = new SeleniumDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Override
	public void navigate(String url) {
		LOGGER.debug("Naviating to " + url);
		driver.get(url);
	}

	@Override
	public boolean isElementPresent(String element) {
		if (driver.findElements(By.xpath(getElementProperty(element, "xpath")))
				.size() > 0)
			return true;
		return false;
	}

	@Override
	public void type(String text, String element) {
		LOGGER.debug("Typing in " + text);
		driver.findElement(By.xpath(getElementProperty(element,"xpath")))
				.sendKeys(text);
	}
	
	@Override
	public void click(String element) {
		LOGGER.debug("Clicking on " + element);
		driver.findElement(By.xpath(getElementProperty(element,"xpath"))).click();
	}
	
	@Override
	public WebElement getWebElement(String element){
		return driver.findElement(By.xpath(getElementProperty(element,"xpath")));
	}

}
