// const scroll = document.querySelector("body");
// scroll.addEventListener("onScroll",()=>{

// })
var project = setInterval(projectDone, 10)
var cities = setInterval(happyCities, 10)
var service = setInterval(vehicle, 10)
var rodeside = setInterval(clients, 10)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function projectDone() {
    count1++;
    document.querySelector("#number1").innerHTML = count1;

    if (count1 == 500) {
        clearInterval(project)
    }
}

function happyCities() {
    count2++;
    document.querySelector("#number2").innerHTML = count2;

    if (count2 == 180) {
        clearInterval(cities)
    }
}

function vehicle() {
    count3++;
    document.querySelector("#number3").innerHTML = count3;

    if (count3 == 1300) {
        clearInterval(service)
    }
}

function clients() {
    count4++;
    document.querySelector("#number4").innerHTML = count4;

    if (count4 == 1500) {
        clearInterval(rodeside)
    }
}

