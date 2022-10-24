// P

// Given an octal input string, your program should produce a decimal output.
// Treat invalid input as octal 0.

// The rightmost digit gets multiplied by 80 = 1
// The next digit gets multiplied by 81 = 8
// The digit after that gets multiplied by 82 = 64
// The digit after that gets multiplied by 83 = 512
// ...
// The n*th* digit gets multiplied by 8n-1.
// All of these values are then summed.

// E

// 233 # octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155

// 155 # octal
// = 1*8^2 + 5*8^1 + 5*8^0
// = 1*64  + 5*8   + 5*1
// = 64   + 40    + 5
// = 109

// D

// input: number
// output: number

// A

// GET octal number
// convert number to string and reverse
// SET sum to 0
// SET power to 0
// Iterate through the numbers in the string
// Add the current number * 8 ^ power to sum
// Increment power by 1
// Return sum
