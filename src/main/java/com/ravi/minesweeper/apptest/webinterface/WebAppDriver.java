package com.ravi.minesweeper.apptest.webinterface;

import org.openqa.selenium.WebElement;

public interface WebAppDriver {
	void click(String element);
	void openBrowser(String browser);
	void navigate(String url);
	boolean isElementPresent(String element);
	void type(String content, String element);
	WebElement getWebElement(String element);
}
