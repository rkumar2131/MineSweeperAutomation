package com.ravi.cucumberjvm.appdemo.webinterface;

import org.junit.Assert;
import org.junit.Test;

import com.ravi.minesweeper.apptest.webinterface.selenium.WebDriverEnum;

public class WebDriverEnumTest {

	@Test
	public void testGetWebDriverEnum_FireFoxDriver(){
		Assert.assertEquals(WebDriverEnum.FIREFOX, WebDriverEnum.getWebDriverEnum("Mozilla"));
	}
	
	@Test
	public void testGetWebDriverEnum_ChromeDriver(){
		Assert.assertEquals(WebDriverEnum.CHROME, WebDriverEnum.getWebDriverEnum("Chrome"));
	}
}
