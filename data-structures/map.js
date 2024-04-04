/*
In JavaScript, both Map and WeakMap are data structures that allow you to store key-value pairs. However, there are some key differences between them:

Key Types:
==========
Map: Keys can be of any data type, including objects, primitive values (like strings, numbers, etc.), and functions.
WeakMap: Keys must be objects. Primitive values cannot be used as keys.

Memory Management:
==================
Map: Holds strong references to its keys, which means even if the keys are not used elsewhere in your code, they won't be 
garbage collected as long as the Map itself exists.
WeakMap: Holds weak references to its keys, meaning that if there are no other references to a key, it may be garbage collected.

Iterability:
============
Map: Allows you to iterate over its keys, values, or entries using methods like keys(), values(), and entries().
WeakMap: Does not provide methods for directly iterating over its keys, values, or entries. This is because the keys are 
weakly held, and there is no guarantee that they will still exist during iteration.

Size Property:
==============
Map: Has a size property that reflects the number of key-value pairs in the map.
WeakMap: Does not have a size property, and there is no direct way to determine the number of key-value pairs.

API Differences:
================
Map: Provides a more extensive set of methods compared to WeakMap. Some examples include set(), get(), has(), delete(), and others.
WeakMap: Has a more limited API. It mainly includes set(), get(), has(), and delete().

In general, you might choose Map when you need a collection of key-value pairs with more flexible use cases, and WeakMap when you 
want to associate additional data with objects without preventing those objects from being garbage collected.
*/

const map = new Map([
  ["country", "Chile"],
  ["name", "Tom"],
]);
console.log(map.get("country")); // Chile

const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "hello");
console.log(weakMap.get(obj)); // hello
