package com.ravi.minesweeper.apptest;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:output"},
		glue = {"com.ravi.minesweeper.apptest" })
public class TestRunner {
	

}
