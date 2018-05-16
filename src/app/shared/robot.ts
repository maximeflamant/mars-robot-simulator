import { table } from './table';

export class Robot {
    public x: number;
    public y: number;
    public direction: string;

    constructor() { }

    /**
    * @param x This is the x value of robot
    * @param y This is the y value of robot
    * @param direciton This is the direction of robot
    * @returns void.
    * @description sets the position of the robot.
    */
    public place(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    /**
    * @param
    * @returns void.
    * @description move the robot based on the direction if the move was valid.
    */
    public move(): void {
        switch (this.direction) {
            case 'north':
                ++this.y;
                break;
            case 'east':
                ++this.x;
                break;
            case 'south':
                --this.y;
                break;
            case 'west':
                --this.x;
                break;
            default:
        }
    }

    /**
    * @param direction left/right
    * @returns void.
    * @description changes the direction of robot.
    */
    public turn(direction: string) {
        if (this.direction === 'north') {
            this.direction = direction === 'left' ? 'west' : 'east';
        }
        else if (this.direction === 'west') {
            this.direction = direction === 'left' ? 'south' : 'north';
        }

        else if (this.direction === 'south') {
            this.direction = direction === 'left' ? 'east' : 'west';
        }

        else if (this.direction === 'east') {
            this.direction = direction === 'left' ? 'north' : 'south';
        }
    }

    /**
    * @param
    * @returns position of the robot.
    * @description returns the position of robot.
    */
    public toString() {
        return this.x + ' ' + this.y + ' ' + this.direction;
    }
} 