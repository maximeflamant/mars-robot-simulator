# MarsRobotUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Description
- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table and is prevented from falling to destruction.

### Instruction
Commands:

```
PLACE X,Y,F
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
The origin (0,0) can be considered to be the SOUTH WEST most corner.
The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, 
in any order, including another PLACE command. The application should discard all commands in the sequence until 
a valid PLACE command has been executed.
```
```
MOVE
MOVE will move the toy robot one unit forward in the direction it is currently facing.
```
```
LEFT, RIGHT
LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
```
```
REPORT
REPORT will announce the X,Y and F of the robot.
```