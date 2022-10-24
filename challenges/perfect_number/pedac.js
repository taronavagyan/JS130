// P

// Write a program that can tell whether a number is perfect, abundant, or deficient.

// The Aliquot sum is the sum of a number's positive divisors.

// Perfect = equal Aliquot sum
// Abundant = greater Aliquot sum
// Deficient = lesser Aliquot sum

// Prime numbers always deficient
// negative number input throws error

// E

// 6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// 28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
// 15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
// 24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
// Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.

// D

// input: number
// output: string

// A

// GIVEN a number
// Get all divisors
// Compare sum of divisors to num and return string based on Aliquot conditions
