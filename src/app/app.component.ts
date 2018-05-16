import { Component } from '@angular/core';

@Component({
  selector: 'mrs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * public memebers
   */
  public title = 'Mars Robot Simulator';
  public posX: number;
  public posY: number;
  public direction: string;
  public error: string;

  /**
   * @param $event Payload from event emitter
   * @returns void.
   * @description sets error value.
   */
  public log($event) {
    this.error = $event;
  }

  /**
    * @param $event Payload from event emitter
    * @returns void.
    * @description sets the x,y & direction values.
    */
  public updateRobot($event) {
    if ($event.robot) {
      this.posX = $event.robot.x;
      this.posY = $event.robot.y;
      this.direction = $event.robot.direction;
    }
  }
}
