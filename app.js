/**
 * Created by monifrancesca on 2/5/16.
 */

/*
 X When the page loads, have a button on the DOM that says 'generate'.

 X Upon clicking on that button, append a new container onto the DOM.

 X That container should have two buttons, one that reads 'delete', the other that reads 'change'.

 X Additionally, there should be text that provides a number.
 X The number should be the number of times the 'generate' button has been clicked.

 The delete button should delete JUST the container that the button is in.

 The change button should change the background-color of the container to red.

 The default or 'normal' state of the background-color should be yellow.

 Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.


 */
var counter = 0;

$(document).ready(function() {
    $('#generate').on('click', appendDom);
});


function appendDom() {
    counter++;
    $('.button-container').append('<button class="btn btn-default" id="delete">Delete</button><button class="btn btn-default" id="change">Change</button>');
    $('.button-container').append('<div id="generate-counter">The "Generate" button has been clicked ' + counter + ' times.</div>');
}


