import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

road = int(input())  # the length of the road before the gap.
gap = int(input())  # the length of the gap.
platform = int(input())  # the length of the landing platform. 
max_speed = False

# game loop
while True:
    speed = int(input())  # the motorbike's speed.
    coord_x = int(input())  # the position on the road of the motorbike.
    action = ""
    
    if max_speed == False and speed < gap + 1:
        action = "SPEED"
        if speed + 1 >= gap + 1:
            max_speed = True
    elif max_speed == True or speed >= gap+1:
        if speed > gap + 1:           
            action = "SLOW"
            max_speed = True
        elif road - 1 > coord_x:
            action = "WAIT"
        elif road - 1 == coord_x:
            action = "JUMP"
        elif road < coord_x:
            action = "SLOW"
    else:
        print(str(coord_x)+'|'+str(road)+'|'+str(max_speed)+'|'+str(gap))
    

    # A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
    print(action)
    
    # Learned: Don't try to code for all the possibilities...just KISS
    # NTS: Used hint (Instructions)
    #
    # Also learned: I was wondering if I should have used '==' instead of 'is'
    #               Apparently, '==' is for testing equality (I knew that), and
    #               'is' tests to see if two objects point to the same thing in
    #               memory. That is pretty different. As one source puts it,
    #               "it may be the case that x == y [evaluates to True], but
    #               x [is] y [evaluates to False]".
    #               Based on this, I changed the 'is' to '==' and retested.
    #
    #               Reference: http://www.informit.com/articles/article.aspx?p=459269&seqNum=10
