## Objects

What is an object?

A structure that contains data, and the methods to act on that data

Every object has methods to get and set the data on the object

```js
var don = {
    name: "Don Burks",
    email: "don@lighthouselabs.ca",
    admin: true,
    password: "fluffybunny"
};

console.log(don.admin); //true

don.password = "rutabaga";

don.tired = true; //adds a property to the object

function() {
    console.log(this.name + " says, 'Hello'");
}

function surprise() { console.log(this); }
surprise(); // outputs console.log of this

```

* this = a reference to the object that called the function. Left of the dot is what object you are on

* variables become properties of the global object

```js
var kitchen = {
    cupboards: [ {
        shelves: [[
            "salt",
            "pepper",
            "masala",
            "montreal steak spice"
            ]
            "coffee filters",
            "paper towels",
            "ziploc bags"
            ]
        }]
}
```

# LSD

* Logic
* Syntax
* Data

## Logic

Am I telling the computer to do the operations ina logical order that will produce a successful outcome?

## Syntax

Am I using the correct methods and the correct operations that match my logic?

## Data

Do I have access to the data I expect in the format I expect?