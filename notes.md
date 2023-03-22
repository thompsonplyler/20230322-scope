# Scope

## SWBATs

- Describe scope in JavaScript
- Explain execution context
  - Explain the global execution context
  - Explain function execution context
- Explain the difference between types of scope
  - global scope
  - function scope
  - block scope
  - module scope
- Explain the scope chain

## Exercises / Examples

- [context.js](./context.js)
- [varWarning.js](./varWarning.js)
- [nest.js](./nest.js)
- [Group Scope Exercise](https://replit.com/join/enopxkuvrz-thompsonplyler)

## Vocabulary

<details><summary>scope</summary> Scope is the range of variables and expressions that the JavaScript engine has at any given point during code's execution</details>
<details><summary>execution context</summary> The execution context is the environment in JavaScript where code is handled. Everything in JS happens inside the execution context.</details>
<details><summary>global execution context</summary>The global execution context is the top level context that contains globally accessible variables and expressions.</details>
<details><summary>function execution context</summary>The function execution context refers to the variables and expressions that are available within the execution of a function; this includes the global execution context.</details>
<details><summary>lexical scope</summary>the place in which an item was created</details>
<details><summary>block scope</summary>Items defined in curly braces `{}` have a block scope</details>
<details><summary>global scope</summary>Items defined and accessible globally are in the global scope.</details>
<details><summary>function scope</summary>Items defined and accessible only within a function are in their function scope</details>
<details><summary>scope chain</summary>The different variables and expressions that code gains access to as JavaScript passes through the execution stack.</details>
<details><summary>module scope</summary>This more advanced scope refers to the way that JavaScript ES6 modules, when loaded, reserve space in scope for their variables and expressions.</details>
