import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

surface_n = int(input())  # the number of points used to draw the surface of Mars.
for i in range(surface_n):
    # land_x: X coordinate of a surface point. (0 to 6999)
    # land_y: Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
    land_x, land_y = [int(j) for j in input().split()]

output = [0,0]

# game loop
while True:
    # h_speed: the horizontal speed (in m/s), can be negative.
    # v_speed: the vertical speed (in m/s), can be negative.
    # fuel: the quantity of remaining fuel in liters.
    # rotate: the rotation angle in degrees (-90 to 90).
    # power: the thrust power (0 to 4).
    x, y, h_speed, v_speed, fuel, rotate, power = [int(i) for i in input().split()]

        
    if abs(v_speed) > 40:
        if power < 4:
            output[1] = power+1


    # 2 integers: rotate power. rotate is the desired rotation angle (should be 0 for level 1), power is the desired thrust power (0 to 4).
    print("{0} {1}".format(output[0],output[1]))
    

# learned
## Assigning value with a loop (this was in the given code)
## Practiced '.format'...it goes inside parens, right next to string in question
##
## I actually ended up getting the right answer when I removed a condition for 
## testing. Meaning: I probably haven't fully comprehended this one and will
## have to spend quite a bit of time tweaking it at the next level. On the bright
## side - this one was actually the easiest so far :)
