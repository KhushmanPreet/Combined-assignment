// Problem Statement:
// Write a function createPair that takes two arguments of any type and returns a tuple with those values.

export function createPair<T, U> (arg1: T, arg2: U) : [T, U]{
    return [arg1, arg2];
}