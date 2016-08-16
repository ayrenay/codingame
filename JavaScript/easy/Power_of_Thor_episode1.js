/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    var direction_x = "";
    var direction_y = "";
    
    // The limits here are the max of the board --ARJG
    if (lightX > initialTX && initialTX < 39)
        {
        direction_x = "E";
        initialTX++;
        }
    else if  (lightX < initialTX && initialTX > 0)
        {
        direction_x = "W";
        initialTX++;
        }
    
    if (lightY > initialTY && initialTY < 17)
        {
        direction_y = "S";
        initialTY++;
        }
    else if (lightY < initialTY && initialTY > 0)
        {
        direction_y = "N"; 
        initialTY++;
        }
        
    // Write an action using print
    // To debug: print("Debug messages...", file=sys.stderr)
    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction_y + direction_x);
}

/* 
learned: 
- readline.split looks pretty similar to python
- looked up syntax for if/else (http://www.w3schools.com/js/js_if_else.asp)
- javascript increments like c# (++)
- logical comparison operators: && and ||
*/
