var pikachu = {
    power : 5,
    counter : 5,
    hp : 100
};

var zapdos = {
    power: 8,
    counter: 8,
    hp: 120
};

var articuno = {
    power: 20,
    counter: 20,
    hp: 150
};

var moltres = {
    power: 25,
    counter: 25,
    hp: 180
};

$("#pikachu-hp").text(pikachu.hp);

$("#zapdos-hp").text(zapdos.hp);

$("#articuno-hp").text(articuno.hp);

$("#moltres-hp").text(moltres.hp);

$(".active").click(function() {
    var gameStart = false;
    return function() {
        if(!gameStart) {
            gameStart = true;
            $("#your-character").append($(this));
            $(this).removeClass("active");
            $("#enemies").append($("#players"));
        }
    }
})

