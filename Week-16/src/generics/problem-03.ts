// Problem Statement:
// Write a function mergeObjects that merges two objects and returns a new object with all properties.

export function mergeObjects<T extends object, U extends object> (arg1: T, arg2: U): T & U{
   
    return {
        ...arg1, 
        ...arg2
    }


}
///// ngl didnt understand this, this was AI