# About
- Created a simple background changer application using React 

## Concepts Used
 - <b>Props:</b> mechanism of passing data from one component to the other component.  
 - <b>useState hook:</b> to render the changes in UI when multiple changes occcur to variable 

## Problem Faced
Encountered an issue with event handlers in React, specifically related to the `onClick` attribute on buttons.

### Problem Description
In React, event handlers like `onClick` expect a function as their value. The difference between using an arrow function and directly passing a function call as the value for `onClick` has been discovered to have significant implications on the behavior of the event handling.

#### Arrow Function Approach
When using the arrow function approach (`onClick={() => setColor("green")}`), the function is only invoked when the button is clicked. This is the correct way to set up an event handler in React when you want a function to be called in response to the button click.

#### Direct Function Call Approach
However, when passing (`onClick={setColor("green")}`),it is directly passed as the value for the onClick event handler, instead of passing function reference. This will typically result in an error, 

### Solution
To resolve this issue, ensure that event handlers are set up correctly by using arrow functions or by passing a reference to the function instead of directly invoking it.



