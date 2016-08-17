/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526
var result = null;
temps_split = [];

if (temps.length === 0)
{
    print('0');
}
else if (String(temps).indexOf(' ') === -1)
{
    print(temps);
}
else
{
    temps_split = temps.split(' ');
    result = temps_split[0];
    for(var i=0; i<n; i++)
    {
        if(Math.abs(Number(temps_split[i])) < Math.abs(Number(result)))
        {
            result = temps_split[i];
        }    
        else if (Math.abs(Number(temps_split[i])) === Math.abs(Number(result)))
        {
            result = String(Math.max(Number(temps_split[i]),Number(result)));
        }    
    }
    
    print(result);
}




/*
learned: 
- Should you always just use '===' for comparison?
- practiced 'for' loop syntax
- Type conversion
- Math functions
- There's a lot of stuff I don't understand about arrays in JS...such as:
    you should apparently not use array.length; what I have here might only
    work with single digit responses
*/
