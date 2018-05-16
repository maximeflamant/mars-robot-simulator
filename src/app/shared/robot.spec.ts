import { Robot } from './robot';

describe('Robot', () => {
    let robot: Robot = new Robot();

    it('should create', () => {
        expect(robot).toBeTruthy();
    });

    describe('#place', () => {
        it('should set X,Y,Direction properties', () => {
            robot.place(1, 1, 'north');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).toBe('north');
        });
    });

    describe('#move', () => {
        it('should move robot to 1,2,north', () => {
            robot.place(1, 1, 'north');
            robot.move();
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(2);
            expect(robot.direction).toBe('north');
        });
    });

    describe('#left', () => {
        it('should face west', () => {
            robot.place(1, 1, 'north');
            robot.turn('left');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).toBe('west');
        });

        it('should face west -- sad path', () => {
            robot.place(1, 1, 'north');
            robot.turn('left');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).not.toBe('south');
        });

        it('should face south', () => {
            robot.place(1, 1, 'west');
            robot.turn('left');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).toBe('south');
        });

        it('should face south -- sad path', () => {
            robot.place(1, 1, 'west');
            robot.turn('left');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).not.toBe('east');
        });
    });

    describe('#right', () => {
        it('should face east', () => {
            robot.place(1, 1, 'north');
            robot.turn('right');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).toBe('east');
        });

        it('should face east -- sad path', () => {
            robot.place(1, 1, 'north');
            robot.turn('right');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).not.toBe('south');
        });

        it('should face north', () => {
            robot.place(1, 1, 'west');
            robot.turn('right');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).toBe('north');
        });

        it('should face north -- sad path', () => {
            robot.place(1, 1, 'west');
            robot.turn('right');
            expect(robot.x).toBe(1);
            expect(robot.y).toBe(1);
            expect(robot.direction).not.toBe('east');
        });
    });
});
