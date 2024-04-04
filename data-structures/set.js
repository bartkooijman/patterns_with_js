/*
Similar to WeakMap and Map, WeakSet and Set are both data structures in JavaScript that are used to 
store collections of values. Here are the main differences between WeakSet and Set:

Value Types:
============
Set: Can store any type of values, including primitive values and object references.
WeakSet: Can only store object references. It cannot contain primitive values.

Memory Management:
==================
Set: Holds strong references to its values. If a value is present in a Set, it won't be garbage collected as long as the Set itself exists.
WeakSet: Holds weak references to its values. If there are no other references to a value, it may be garbage collected.

Iterability:
============
Set: Allows you to iterate over its values using methods like values(), keys(), and entries().
WeakSet: Does not provide methods for directly iterating over its values. It also doesn't have a size property.

API Differences:
================
Set: Provides a set of methods for adding, deleting, and checking the existence of values, such as add(), delete(), and has().
WeakSet: Has a more limited API compared to Set. It mainly includes add(), delete(), and has().

In summary, use Set when you need a collection of values and want to maintain strong references to those values. 
Use WeakSet when you want to associate additional data with objects without preventing those objects from being garbage collected. 
Keep in mind that the choice between Set and WeakSet depends on your specific use case and memory management requirements.
*/

// Set example
let set = new Set();
let value1 = { name: 'Alice' };
set.add(value1);
console.log(set.has(value1)); // Output: true

// WeakSet example
let weakSet = new WeakSet();
let value2 = { name: 'Bob' };
weakSet.add(value2);
console.log(weakSet.has(value2)); // Output: true

const anotherSet = new Set([1, 2, 3, 4, 5, 5, 5]);
console.log(anotherSet); // Set(5) { 1, 2, 3, 4, 5 }
console.log(anotherSet.size); // 5
