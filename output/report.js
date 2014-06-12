$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/ravi/minesweeper/apptest/launch/launch.feature");
formatter.feature({
  "id": "launch-minesweeper-application-for-playing",
  "description": "\r\nTo have fun by playing minesweeper\r\nAs a computer games ninja\r\nI want to launch minesweeper web version application",
  "name": "Launch MineSweeper application for playing",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 9031350382,
  "status": "passed"
});
formatter.scenario({
  "id": "launch-minesweeper-application-for-playing;launch-minesweeper-application-for-playing;;2",
  "tags": [
    {
      "name": "@launch",
      "line": 7
    }
  ],
  "description": "",
  "name": "Launch MineSweeper application for playing",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "When Execute scenario is \"RUN\"",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I open \"Browser\" and type \"appurl\"",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I should be \"successfull\" to launch minesweeper",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "RUN",
      "offset": 26
    }
  ],
  "location": "GenericStepDefs.When_Execute_scenario_is(String)"
});
formatter.result({
  "duration": 922615379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Browser",
      "offset": 8
    },
    {
      "val": "appurl",
      "offset": 27
    }
  ],
  "location": "LaunchTest.I_Open(String,String)"
});
formatter.result({
  "duration": 500936621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfull",
      "offset": 13
    }
  ],
  "location": "LaunchTest.I_should_be(String)"
});
formatter.result({
  "duration": 195607420,
  "status": "passed"
});
formatter.embedding("image/jpeg", "embedded0.jpg");
formatter.after({
  "duration": 335785138,
  "status": "passed"
});
formatter.uri("com/ravi/minesweeper/apptest/menu/gamemenu.feature");
formatter.feature({
  "id": "menus-available-for-player",
  "description": "\r\nBefore start playing MineSweeper\r\nAs a Intermediate player\r\nI want to validate Intermediate menu item is selected",
  "name": "Menus available for Player",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 17748676,
  "status": "passed"
});
formatter.scenario({
  "id": "menus-available-for-player;validating-intermediate-menu-checked;;2",
  "tags": [
    {
      "name": "@intermediatemenu",
      "line": 7
    }
  ],
  "description": "",
  "name": "Validating intermediate menu checked",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "When Execute scenario is \"RUN\"",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "\"Browser\" opened with minesweeper app",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "Intermediate menu in game menu should be present",
  "keyword": "Then ",
  "line": 11,
  "rows": [
    {
      "cells": [
        "Intermediate"
      ],
      "line": 12
    }
  ]
});
formatter.step({
  "name": "\"images/checked.gif\" should be present",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "RUN",
      "offset": 26
    }
  ],
  "location": "GenericStepDefs.When_Execute_scenario_is(String)"
});
formatter.result({
  "duration": 138308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Browser",
      "offset": 1
    }
  ],
  "location": "MenuTest.Browser_Opened(String)"
});
formatter.result({
  "duration": 32603137,
  "status": "passed"
});
formatter.match({
  "location": "MenuTest.Intermediate_menu(DataTable)"
});
formatter.result({
  "duration": 27635057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "images/checked.gif",
      "offset": 1
    }
  ],
  "location": "MenuTest.Should_be_present(String)"
});
formatter.result({
  "duration": 77658958,
  "status": "passed"
});
formatter.embedding("image/jpeg", "embedded1.jpg");
formatter.after({
  "duration": 296497988,
  "status": "passed"
});
});