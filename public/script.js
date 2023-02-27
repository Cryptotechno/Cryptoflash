

let counter = 0;

function upvote() {
    counter = counter + 1;

    document.getElementById("votes").innerHTML = "Liked" + counter + "traders";
}

function downvote() {
    counter = counter - 1;

    document.getElementById("votes").innerHTML = "Liked " + counter + " traders";
}

let counter1 = 0;

function upvote1() {
    counter1 = counter1 + 1;

    document.getElementById("votes1").innerHTML = "Liked " + counter1 + " traders";
}

function downvote1() {
    counter1 = counter1 - 1;

    document.getElementById("votes1").innerHTML = "Liked " + counter1 + " traders";
}

let counter2 = 0;

function upvote2() {
    counter2 = counter2 + 1;

    document.getElementById("votes2").innerHTML = "Liked " + counter2 + " traders";
}

function downvote2() {
    counter2 = counter2 - 1;

    document.getElementById("votes2").innerHTML = "Liked " + counter2 + " traders";
}

let counter3 = 0;

function upvote3() {
    counter3 = counter3 + 1;

    document.getElementById("votes3").innerHTML = "Liked " + counter3 + " traders";
}

function downvote3() {
    counter3 = counter3 - 1;

    document.getElementById("votes3").innerHTML = "Liked " + counter3 + " traders";
}

let counter4 = 0;

function upvote4() {
    counter4 = counter4 + 1;

    document.getElementById("votes4").innerHTML = "Liked " + counter4 + " traders";
}

function downvote4() {
    counter4 = counter4 - 1;

    document.getElementById("votes4").innerHTML = "Liked " + counter4 + " traders";
}

let counter5 = 0;

function upvote5() {
    counter5 = counter5 + 1;

    document.getElementById("votes5").innerHTML = "Liked " + counter5 + " traders";
}

function downvote5() {
    counter5 = counter5 - 1;

    document.getElementById("votes5").innerHTML = "Liked " + counter5 + " traders";

}



// after page load
$(function () {
    // initialize tooltips for all elements on the page that have the data-toggle="tooltip" attribute
    $('[data-toggle="tooltip"]').tooltip();
});




