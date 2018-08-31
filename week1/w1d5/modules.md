## Modules

the require keyword is used to refer to a another file and use it in the current file you are working with.

```js
// file foo.js
var circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

foo.js is invoking the module circle.js and applying it to a variable called circle. When we call circle the file is called, and whatever is inside of it will run.

```js
// circle.js
const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;
```

Here the module circle.js is exporting two functions named area and circumference. Functions and objects can be added to the root of a module by specifying properties on the exports object (special object used for modules).

Variables within the local scope of a module will be private (not callable outside of this module).

The variable PI is private to circle.js - although it is still used when the module is called, it stays within the scope of the circle.js file.

### Vocab

*API - Application Programming Interface

- what you actually see and use
- made from someone else's framework
- allows you to talk to an already existing program and implement that stuff into YOUR code
- how programs talk to each other
- the platform that codes and talks to code

- allows stuff to talk to other stuff
  - stuff: people maybe?
  - stuff: programs maybe?



