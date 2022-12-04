let counter = 0;

function upvote() {
 counter  = counter + 1;

 document.getElementById("votes").innerHTML = "Понравилось " +  counter + " диванным трейдерам";
}

function downvote() {
 counter  = counter - 1;

 document.getElementById("votes").innerHTML = "Понравилось " +  counter + " диванным трейдерам";
}

let counter1 = 0;

function upvote1() {
 counter1  = counter1 + 1;

 document.getElementById("votes1").innerHTML = "Понравилось " +  counter1 + " диванным трейдерам";
}

function downvote1() {
 counter1 = counter1 - 1;

 document.getElementById("votes1").innerHTML = "Понравилось " +  counter1 + " диванным трейдерам";
}

let counter2 = 0;

function upvote2() {
 counter2  = counter2 + 1;

 document.getElementById("votes2").innerHTML = "Понравилось " +  counter2 + " диванным трейдерам";
}

function downvote2() {
 counter2 = counter2 - 1;

 document.getElementById("votes2").innerHTML = "Понравилось " +  counter2 + " диванным трейдерам";
}

let counter3 = 0;

function upvote3() {
 counter3  = counter3 + 1;

 document.getElementById("votes3").innerHTML = "Понравилось " +  counter3 + " диванным трейдерам";
}

function downvote3() {
 counter3 = counter3 - 1;

 document.getElementById("votes3").innerHTML = "Понравилось " +  counter3 + " диванным трейдерам";
}

let counter4 = 0;

function upvote4() {
 counter4  = counter4 + 1;

 document.getElementById("votes4").innerHTML = "Понравилось " +  counter4 + " диванным трейдерам";
}

function downvote4() {
 counter4 = counter4 - 1;

 document.getElementById("votes4").innerHTML = "Понравилось " +  counter4 + " диванным трейдерам";
}

let counter5 = 0;

function upvote5() {
 counter5  = counter5 + 1;

 document.getElementById("votes5").innerHTML = "Понравилось " +  counter5 + " диванным трейдерам";
}

function downvote5() {
 counter5 = counter5 - 1;

 document.getElementById("votes5").innerHTML = "Понравилось " +  counter5 + " диванным трейдерам";

}


// после загрузки страницы
$(function(){
    // инициализации подсказок для всех элементов на странице, имеющих атрибут data-toggle="tooltip"
    $('[data-toggle="tooltip"]').tooltip();
});

