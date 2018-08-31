## Callbacks

Design Pattern

They are just functions that we use in response to an event.


```js
var list = [1, 2, 3, 4, 5];
```

### Imperative Coding
You, as the coder, are tellling the computer _HOW_ to do what you want it to do.

```js
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
```

### Declarative Coding
You, as the coder, telling the computer _WHAT_ you want it to do.
Giving a computer a command to follow through.

```js
list.forEach(function(item) {
    console.log(item);
});

setTimeout(function() {
    console.log("Kaboom");
}, 10000);

list.forEach(function(item) {
    console.log(item);
});

list.forEach(function(item) {
    console.log(item * 2);
});

```

### Pseudocode

backwards()
backwards(list, callback)
return the list, reversed (aka backwards), or whatever I decide to tell the callback to do

I need a list of something
Given the list, I will do the following to reverse it:

I can take the last element of the list, and make it the first element of a new list

** see .js files for demonstrations

## Challenge

Re-implement filter or reduce

###
Callback functions are simply functions used as an argument in another function.
