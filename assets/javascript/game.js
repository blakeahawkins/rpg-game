var pikachu = {
    power: 5,
    counter: 5,
    hp: 100
} = $("#pikachu");
var zapdos = {
    power: 8,
    counter: 8,
    hp: 120
} = $("#zapdos");
var articuno = {
    power: 20,
    counter: 20,
    hp: 150
} = $("#articuno");
var moltres = {
    power: 25,
    counter: 25,
    hp: 180
} = $("#moltres");

pikachu.hp = $("#pikachu-hp");
zapdos.hp = $("#zapdos-hp");
articuno.hp = $("#articuno-hp");
moltres.hp = $("#moltres-hp");

if($("#your-character").is(":empty")) {
    $("#pikachu").on("click", function() {
        $("#pikachu").appendTo($("#your-character"))
    })
}