import {
  __Directions__,
  LEFT_REGEX,
  MOVE_REGEX,
  PLACE_REGEX,
  REPORT_REGEX,
  RIGHT_REGEX,
  Status
} from '../shared/whitelist';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Robot } from '../shared/robot';
import { table } from '../shared/table';

@Component({
  selector: 'mr-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent {

  constructor() {
    this.robot = new Robot();
  }
  /** private members */
  private isPlaced: boolean = false;

  /**
   * @param direction This is robot direction parameter
   * @returns void.
   * @description performs validation direction. exsists & in the whitlist.
   */
  private isValidDirection(direction: any): any {
    return direction && __Directions__.indexOf(direction) > -1;
  }

  /**
   * @param cmd This is the user cmd parameter
   * @returns Status.
   * @description performs validation on the command and rotates, moves and tell us position.
   */
  private navigate(cmd): Status {
    if (cmd.match(MOVE_REGEX)) {
      const status = this.validateRobotMove();
      if (status !== Status.VALID_MOVE) {
        return status;
      }
      this.robot.move();
    }
    else if (cmd.match(LEFT_REGEX)) {
      this.robot.turn('left');
    }
    else if (cmd.match(RIGHT_REGEX)) {
      this.robot.turn('right');
    }
    else if (cmd.match(REPORT_REGEX)) {
      this.report = this.robot.toString();
    }
    else {
      return Status.INVALID_CMD;
    }
    return Status.VALID_MOVE;
  }

  /**
   * @param status Robot Sattus
   * @returns void.
   * @description Calls notify error or updateRobotInfo based Robot status
   */
  private notifyHost(status): void {
    if (status !== Status.VALID_MOVE) {
      this.notifyError(status);
      return;
    }
    this.updateRobotInfo();
  }

  /**
   * @param cmd This is the user cmd parameter
   * @returns Status.
   * @description performs validation on the command and places the robot.
   */
  private place(cmd: string): Status {
    const args = cmd.split(/(?:\s+|,\s*)/i).slice(1);
    if (args.length !== 3) {
      return Status.INVALID_CMD;
    }
    const x = parseInt(args[0]);
    const y = parseInt(args[1]);
    const direction = args[2].toLowerCase();

    if (table.isOutOfBounds(x, y)) {
      return Status.OUT_OF_BOUNDS;
    }
    if (!this.isValidDirection(direction)) {
      return Status.INVALID_DIRECTION;
    }
    this.robot.place(x, y, direction);
    this.isPlaced = true;
    return Status.VALID_MOVE;
  }

  /**
   * @param 
   * @returns Status.
   * @description performs validation on move command.
   */
  private validateRobotMove(): Status {
    let posX = this.robot.x;
    let posY = this.robot.y;
    let status = Status.VALID_MOVE;
    switch (this.robot.direction) {
      case 'north':
        if (table.isOutOfBounds(posX, ++posY)) {
          status = Status.INVALID_MOVE;
        }
        break;
      case 'east':
        if (table.isOutOfBounds(++posX, posY)) {
          status = Status.INVALID_MOVE;
        }
        break;
      case 'south':
        if (table.isOutOfBounds(posX, --posY)) {
          status = Status.INVALID_MOVE;
        }
        break;
      case 'west':
        if (table.isOutOfBounds(--posX, posY)) {
          status = Status.INVALID_MOVE;
        }
        break;
      default:
    }
    return status;
  }

  /** public members */
  @Output() errorLog = new EventEmitter();
  @Output() updateRobot = new EventEmitter();
  public history: string[] = [];
  public robot: Robot;
  public report: string;
  /**
  * @param cmd This is the user cmd parameter
  * @returns void.
  * @description performs validation on the command and places, move, turns left or right and reports position of the robot.
  */
  public execute(cmd: string): void {
    let response = Status.VALID_MOVE;
    if (cmd.match(PLACE_REGEX)) {
      response = this.place(cmd);
    } else if (this.isPlaced) {
      response = this.navigate(cmd);
    } else {
      response = Status.PLACE_ROBOT;
    }
    this.history.push(cmd);
    this.notifyHost(response);
  }

  /**
   * @param e Error parameters
   * @returns void.
   * @description @OUTPUT event- Emits error events with coresponding error code.
   */
  public notifyError(e: Status) {
    this.errorLog.emit(e);
  }

  /**
    * @param 
    * @returns void.
    * @description @OUTPUT event- Emits updateRobot event Robot as payload.
    */
  public updateRobotInfo() {
    this.errorLog.emit("");
    this.updateRobot.emit({ robot: this.robot });
  }
}
