/**
 * Created by monifrancesca on 2/5/16.
 */

/*
 X When the page loads, have a button on the DOM that says 'generate'.

 X Upon clicking on that button, append a new container onto the DOM.

 X That container should have two buttons, one that reads 'delete', the other that reads 'change'.

 X Additionally, there should be text that provides a number.

 X The number should be the number of times the 'generate' button has been clicked.

 X The delete button should delete JUST the container that the button is in.

 X The change button should change the background-color of the container to red.

 X The default or 'normal' state of the background-color should be yellow.

 X Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.


 */
var counter = 0;

$(document).ready(function() {
    $('.generate').on('click', appendDom);
    $('div .delete').on('click', deleteFromDom);
    $('div .change').on('click', changeColor);



});

function appendDom() {
    counter++;
    $('div .delete').append('<button class="btn btn-default">Delete</button>');
    $('div .change').append('<button class="btn btn-default yellow">Change</button>');
    $('div .message').append('<div class="generate-counter">The "Generate" button has been clicked ' + counter + ' time(s)</div>');
    //console.log("button is clicked");
}


function deleteFromDom() {
    $('div .delete').remove();
}

function changeColor() {
    $('div .change').toggleClass('red', '.yellow');
}