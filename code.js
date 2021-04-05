$(document).ready(
    function () {
        $("#firstTextBox").on("change", textBoxWasChanged);
        $("#secondTextBox").on("keypress", textBoxHadKeypress);
    }
);

function textBoxWasChanged() {
    // Generate a random number so we can see the change
    var randomProof = Math.random();
    $("#output").text(`First text box was changed. Here's a random number to prove it: ${randomProof}`);
}

// Include event parameter to get information about the event
// that triggered this function to run
function textBoxHadKeypress(event) {
    // Get the key that pressed from the event
    var character = event.key;
    $("#output").text(`Second text box heard a keypress. Here's the key that was typed: ${character}`);
}