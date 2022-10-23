// P

// write a program that, given a word, compute the scrabble score for that word
// case-insensitive

// A, E, I, O, U, L, N, R, S, T	1
// D, G	2
// B, C, M, P	3
// F, H, V, W, Y	4
// K	5
// J, X	8
// Q, Z	10

// E

// CABBAGE =>

// 3 points for C
// 1 point for each A (there are two)
// 3 points for B (there are two)
// 2 points for G
// 1 point for E

// 3 + 2*1 + 2*3 + 2 + 1
// => 3 + 2 + 6 + 3
// => 5 + 9
// => 14

// D

// input: string
// output: number

// A

// GET word
// split word into chars
// SET runningScore to 0
// for each char, look up score on collection table and add corresponding value to runningScore
// return running score
