export const enum Status {
    VALID_MOVE = 'Entered a Valid Command',
    INVALID_CMD = 'Please Enter A valid command',
    INVALID_DIRECTION = 'Robot Direction is Invalid.',
    INVALID_MOVE = 'Cannot move, Robot is at the edge.',
    OUT_OF_BOUNDS = 'Robot is placed out of bounds.',
    PLACE_ROBOT = 'Please Place Robot using:  PLACE X, Y, F'
}


export const __Directions__: string[] = [
    'east',
    'north',
    'south',
    'west'
]

export const PLACE_REGEX = /^\s*place\s+\w+(?:,?\s*|\s+)\w+(?:,?\s*|\s+)\w+\s*$/i;
export const MOVE_REGEX = /^move\s*$/i;
export const LEFT_REGEX = /^left\s*$/i;
export const RIGHT_REGEX = /^right\s*$/i;
export const REPORT_REGEX = /^report\s*$/i;
