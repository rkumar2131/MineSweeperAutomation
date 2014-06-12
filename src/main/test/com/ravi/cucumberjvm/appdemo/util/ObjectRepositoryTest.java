package com.ravi.cucumberjvm.appdemo.util;

import org.junit.Assert;
import org.junit.Test;

import com.ravi.minesweeper.apptest.util.ObjectRepository;

public class ObjectRepositoryTest {
	@Test
	public void testGetElementProperty_WhenElementPresent(){
		Assert.assertNotNull(ObjectRepository.getElementProperty("contactinfo", "xpath"));
	}
	@Test
	public void testGetElementProperty_WhenElementNotPresent(){
		Assert.assertNull(ObjectRepository.getElementProperty("junk", "xpath"));
	}
}
