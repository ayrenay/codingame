/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (var i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    var landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    var landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

var rotate_out = 0;
var power_out = 0;

// game loop
while (true) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]);
    var Y = parseInt(inputs[1]);
    var hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    var vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    var fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    var rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    var power = parseInt(inputs[6]); // the thrust power (0 to 4).
    
    if (Math.abs(vSpeed) > 40)
    {
        if (power < 4)
        {
            power +=1;
        }
    }

    // 2 integers: rotate power. rotate is the desired rotation angle (should be 0 for level 1), power is the desired thrust power (0 to 4).
    print(rotate,power);
}

/*
learned:

Did this in Python3 first

Tried a different way of printing here; I think it's more efficient since I didn't
use any extra variables.

Realize that the approach here is getting to and maintaining the upper limit for 
the landing speed (didn't actually realize that when I solved it in Python). I 
also noted that Fuel is an input - this is not an approach optimized for that.

I'm sure it will come up in one of the future episodes for this puzzle.
*/
