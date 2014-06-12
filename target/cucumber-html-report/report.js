$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/ravi/minesweeper/apptest/launch/launch.feature");
formatter.feature({
  "id": "launch-minesweeper-application-for-playing",
  "description": "\r\nTo have fun by playing minesweeper\r\nAs a computer games ninja\r\nI want to launch minesweeper web version application",
  "name": "Launch MineSweeper application for playing",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "launch-minesweeper-application-for-playing;launch-minesweeper-application-for-playing",
  "tags": [
    {
      "name": "@launch",
      "line": 7
    }
  ],
  "description": "",
  "name": "Launch MineSweeper application for playing",
  "keyword": "Scenario Outline",
  "line": 8,
  "type": "scenario_outline"
});
formatter.step({
  "name": "When Execute scenario is \"\u003cRunOrSkip\u003e\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I open \"Browser\" and type \"appurl\"",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I should be \"\u003cExpected_Result\u003e\" to launch minesweeper",
  "keyword": "Then ",
  "line": 11
});
formatter.examples({
  "id": "launch-minesweeper-application-for-playing;launch-minesweeper-application-for-playing;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 13,
  "rows": [
    {
      "id": "launch-minesweeper-application-for-playing;launch-minesweeper-application-for-playing;;1",
      "cells": [
        "Expected_Result",
        "RunOrSkip"
      ],
      "line": 14
    },
    {
      "id": "launch-minesweeper-application-for-playing;launch-minesweeper-application-for-playing;;2",
      "cells": [
        "successfull",
        "RUN"
      ],
      "line": 15
    }
  ]
});
formatter.before({
  "duration": 12062845533,
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
  "duration": 611846940,
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
  "duration": 597075312,
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
  "duration": 138625170,
  "status": "passed"
});
formatter.embedding("image/jpeg", "embedded0.jpg");
formatter.after({
  "duration": 476054809,
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
formatter.scenarioOutline({
  "id": "menus-available-for-player;validating-intermediate-menu-checked",
  "tags": [
    {
      "name": "@intermediatemenu",
      "line": 7
    }
  ],
  "description": "",
  "name": "Validating intermediate menu checked",
  "keyword": "Scenario Outline",
  "line": 8,
  "type": "scenario_outline"
});
formatter.step({
  "name": "When Execute scenario is \"\u003cRunOrSkip\u003e\"",
  "keyword": "Given ",
  "line": 9
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
  "name": "\"\u003cVerification_Object\u003e\" should be present",
  "keyword": "And ",
  "line": 13
});
formatter.examples({
  "id": "menus-available-for-player;validating-intermediate-menu-checked;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 15,
  "rows": [
    {
      "id": "menus-available-for-player;validating-intermediate-menu-checked;;1",
      "cells": [
        "Verification_Object",
        "RunOrSkip"
      ],
      "line": 16
    },
    {
      "id": "menus-available-for-player;validating-intermediate-menu-checked;;2",
      "cells": [
        "images/checked.gif",
        "RUN"
      ],
      "line": 17
    }
  ]
});
formatter.before({
  "duration": 18095586,
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
  "duration": 365909,
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
  "duration": 43300370,
  "status": "passed"
});
formatter.match({
  "location": "MenuTest.Intermediate_menu(DataTable)"
});
formatter.result({
  "duration": 20577156,
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
  "duration": 73057547,
  "status": "passed"
});
formatter.embedding("image/jpeg", "embedded1.jpg");
formatter.after({
  "duration": 328902402,
  "status": "passed"
});
});