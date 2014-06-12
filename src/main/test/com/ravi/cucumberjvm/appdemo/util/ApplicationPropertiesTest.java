package com.ravi.cucumberjvm.appdemo.util;

import org.junit.Assert;
import org.junit.Test;

import com.ravi.minesweeper.apptest.util.ApplicationProperties;

public class ApplicationPropertiesTest {
	@Test
	public void testGetProperty_WhenPropertyExists(){
		Assert.assertNotNull(ApplicationProperties.getProperty("appurl"));
	}
	@Test
	public void testGetProperty_WhenPropertyNotExists(){
		Assert.assertNull(ApplicationProperties.getProperty("junk"));
	}
}
