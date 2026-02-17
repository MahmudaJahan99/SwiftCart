### 1. What is the difference between null and undefined?

|              null             |               undefined               |
|-------------------------------|---------------------------------------|
| A variable that is declared   | A value that is intentionally         |
| but not assigned a value.     | assigned null.                        |
|-------------------------------|---------------------------------------|
| Empty value.                  | Not defined yet (can be any value     |
|                               | when assigned)                        |
|-------------------------------|---------------------------------------|
| let x = null;                 | let y;                                |
|-------------------------------|---------------------------------------|
| console.log(typeof x)         | console.log(typeof y)                 |
| //object                      | //undefined                            |
|-------------------------------|---------------------------------------|

### 2. What is the use of the map() function in JavaScript? How is it different from forEach()?

|              map()            |               forEach()               |
|-------------------------------|---------------------------------------|
| map() is used to modify an    | forEach() doesn't modify an array.    |
| array.                        |                                       |
|-------------------------------|---------------------------------------|
| Returns a new array.          | Doesn't return anything.              |
|-------------------------------|---------------------------------------|
| arr.map(let x => x*2)         | arr.forEach(let x => console.log (x)) |
|-------------------------------|---------------------------------------|

### 3. What is the difference between == and ===?

|             ==                |               ===                     |
|-------------------------------|---------------------------------------|
| Loose Equality                | Strict Equality                       |
|-------------------------------|---------------------------------------|
| Performs type coercion.       | Doesn't perform type coercion.        |
|-------------------------------|---------------------------------------|
| 5 == "5"                      | 5 === "5"                             |
| //true                        | //false                               |
|-------------------------------|---------------------------------------|

### 4. What is the significance of async/await in fetching API data?
async/await makes handling asynchronous operations easier and it also improves code readability. It is better at handling error handling with try...catch...finally.

### 5. Explain the concept of Scope in JavaScript (Global, Function, Block).

Global Scope --> Accessible from anywhere in the code.
Function Scope --> Accessible from only within the function where it's declared/initialized.
Block Scope --> Accessible inside the {} where it's declared/initialized.
