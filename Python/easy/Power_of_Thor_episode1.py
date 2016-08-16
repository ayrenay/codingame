import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
# ---
# Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.

# light_x: the X position of the light of power
# light_y: the Y position of the light of power
# initial_tx: Thor's starting X position
# initial_ty: Thor's starting Y position
light_x, light_y, initial_tx, initial_ty = [int(i) for i in input().split()]

# game loop
while True:
    remaining_turns = int(input())  # The remaining amount of turns Thor can move. Do not remove this line.
    direction_x = ""
    direction_y = ""
    
    # The limits here are the max of the board --ARJG
    if light_x > initial_tx and initial_tx < 39:
        direction_x = "E"
        initial_tx+=1
    elif  light_x < initial_tx and initial_tx > 0:
        direction_x = "W"
        initial_tx+=1
    
    if light_y > initial_ty and initial_ty < 17:
        direction_y = "S"
        initial_ty+=1
    elif light_y < initial_ty and initial_ty > 0:        
        direction_y = "N"   
        initial_ty+=1
        
    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr)
    # A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction_y + direction_x)
    
    # learned: don't forget to increase counter when needed
    # questions: Why does board start in upper left corner?
