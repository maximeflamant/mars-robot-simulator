import { environment } from "../../environments/environment";

export class Table {
    constructor(public width: number, public height: number) {

    }
    /**
     * @param x horizontal position of robot
     * @param y vertical position of robot
     * @returns true or false
     * @description returns if the robot is out of bounds or not.
     */
    public isOutOfBounds(x: number, y: number) {
        return (x < 0)
            || (x > this.width - 1)
            || (y < 0)
            || (y > this.height - 1);
    }
}

export const table = new Table(environment.MAX_WIDTH, environment.MAX_HEIGHT);
