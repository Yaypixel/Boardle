function random(max) {
    let i = Math.floor(Math.random() * max);
    if (i === 0) {
        return max;
    }
    else {
    return i;
    }
}



let d1 = random(6)
let d2 = random(6)

let d1s = false
let d2s = false

let i = 0
let x = 0

let d1f = false
let d2f = false

var canvas = $("#can")[0]
var c = canvas.getContext("2d")

var dice = $("#dice1")[0]
var player = $("#player")[0]


var pos = canvas.getBoundingClientRect()

resetC()

function resetC() {

    c.clearRect(0, 0, canvas.width, canvas.height)

    i = 0
    x = 0

    while (i <= 6) {
        c.beginPath()
        c.rect(x, 0,50,50)
        c.stroke()
        i++
        x = x + 50
    }

}



function reset() {
    if (d1s === true) {
        d1 = d1
        d2 = random(6)
    }
    else if (d2s === true) {
        d2 = d2
        d1 = random(6)
    }
    else {
    d1 = random(6)
    d2 = random(6)
    }
}


$(document).ready(function() {
    $("#dice").hover(function() {
        $(this).css("color", "black");
    },
    function () {
        $(this).hide();
    });
    $("#clickboi").click(function() {
        reset()
        $("#dice1").attr("src", `Assets/${d1}.png`);
        $("#dice2").attr("src", `Assets/${d2}.png`);
    });
    $(".roll").hover(function() {
        $(this).css("transform", "scale(1.2)")
    },
    function (){
        $(this).css("transform", "scale(1)")
    });
    $("#dice1").click(function() {
        $("#text").empty();
        $("#text").append($(`<p>Number Selected ${d1}</p>`))
        $(this).css("border", "5px solid #00FF00")
        $("#dice2").css("border", "")
        resetC()
        c.fillText("P", ((Math.round(canvas.width/6) * d1) - 30), 30)
        d2s = false
        d1s = true
    });
    $("#dice2").click(function() {
        $("#text").empty();
        $("#text").append($(`<p>Number Selected ${d2}</p>`))
        $(this).css("border", "5px solid #00FF00")
        $("#dice1").css("border", "")
        resetC()
        c.fillText("P", ((Math.round(canvas.width/6) * d2) - 30), 30)
        d1s = false
        d2s = true
    })
})
