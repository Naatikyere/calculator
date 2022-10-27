const number = document.querySelectorAll('[data-number]');
const delect = document.querySelector('[data-delect]');
const input = document.querySelector('[data-input-result]');
const result = document.querySelector('[data-final-answer]');
const clear = document.querySelector('[data-clear-all]');
const equal_to = document.querySelector('[data-equal-to]');



class calculator{
    constructor(input,result){
        this.input = input;
        this.result = result;
    } //Define the operators

    // need to define some standard
    //objects
}
/* Notes
input takes in the user values and 
output gives out the final calculated
results


add event listeners to all buttons
that checks to see if the button contains
a number so it needs to deplay that 
number and adds to the properties being 
calculated.

if an operation is pressed it preforms
a special activity.

cant use keydown and up coz that would mean
i would have to name all the numbers
*/