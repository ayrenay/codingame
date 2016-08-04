/*
  The while loop represents the game.
  Each iteration represents a turn of the game
  where you are given inputs (the heights of the mountains)
  and where you have to print an output (the index of the moutain to fire on)
  The inputs you are given are automatically updated according to your last actions.
 */


// game loop
while (true) {
        var shootMountainH = -1;
        var shootMountain = -1;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain.
        if (mountainH > shootMountainH)
            {
            shootMountainH = mountainH;
            shootMountain = i;
            }
    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(shootMountain); // The index of the mountain to fire on.
}

//learned: syntax of 'for' loop
/*
Notes:
This one was an early reminder of variable scope 
(i.e. mountain to shoot outside of 'for' loop 
because the value needs to be maintained over the 
course of the game.
*/
