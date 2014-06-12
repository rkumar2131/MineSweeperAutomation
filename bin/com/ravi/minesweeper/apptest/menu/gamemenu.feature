Feature: Menus available for Player

Before start playing MineSweeper
As a Intermediate player
I want to validate Intermediate menu item is selected

@intermediatemenu
Scenario Outline: Validating intermediate menu checked
Given When Execute scenario is "<RunOrSkip>"
Given "Browser" opened with minesweeper app
Then Intermediate menu in game menu should be present
|	Intermediate	|
And "<Verification_Object>" should be present

Examples:
|	Verification_Object		|	RunOrSkip	| 
|	images/checked.gif		|	RUN			|

