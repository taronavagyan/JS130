// P

// Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all the multiples of the numbers in the set that are less than the first number.

// If the set of numbers is not given, use a default set of 3 and 5.

// static and instance methods to()

// E

// For instance, if we list all the natural numbers up to, but not including, 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.

// 20 => 78

// 10 => 3 + 6 + 9 + 5 = 23

// D

// input: first number, more numbers (optional)
// output: number
// intermediary (?) : array of numbers

// A

// GET the target number
// If not set is specified, use 3 and 5
// SET multiples to an empty array
// For each number in the set
//    Count multiples up until the target number
//    If the multiples array doesn't include that number, add it to the multiples array
// Reduce the multiples array to a sum and return

// C
