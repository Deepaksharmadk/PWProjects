// Hold the input Field
const inputNumber = document.getElementById("input-num");

// Variable for Numbering
var input_value = inputNumber.value;
console.log(input_value);

// Decrement Function
const decrement=document.querySelector("#decrement");
decrement.addEventListener("click",function decrement() {
    input_value = --input_value;
    inputNumber.value = input_value;
});


// Incerment Function
const Increment=document.querySelector("#Increment")
Increment.addEventListener("click",function increment(){
    input_value = ++input_value;
    inputNumber.value = input_value;
})
// Reset Function
const reset=document.querySelector("#reset");
reset.addEventListener("click",function reset(){
    input_value = 0;
    inputNumber.value = input_value;
})
