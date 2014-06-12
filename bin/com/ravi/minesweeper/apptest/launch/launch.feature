Feature: Launch MineSweeper application for playing

To have fun by playing minesweeper
As a computer games ninja
I want to launch minesweeper web version application

@launch
Scenario Outline: Launch MineSweeper application for playing
Given When Execute scenario is "<RunOrSkip>"
Given I open "Browser" and type "appurl" 
Then I should be "<Expected_Result>" to launch minesweeper

Examples:
|	Expected_Result	|	RunOrSkip	|   
|	successfull		|	RUN			|