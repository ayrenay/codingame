import sys
import math

# The while loop represents the game.
# Each iteration represents a turn of the game
# where you are given inputs (the heights of the mountains)
# and where you have to print an output (the index of the moutain to fire on)
# The inputs you are given are automatically updated according to your last actions.


# game loop
while True:
    mountain = -1
    old_mountain_h = -1
    for i in range(8):
        new_mountain_h = int(input())  # represents the height of one mountain.
        
        if new_mountain_h > old_mountain_h:
            old_mountain_h = new_mountain_h
            mountain = i

    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr)

    # The index of the mountain to fire on.
    print(mountain)

# learned: practiced loops
