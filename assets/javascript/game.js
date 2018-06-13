$(document).ready(function(){

    $("#restart").hide();

    var pikachu = {
        power : 5,
        counter : 15,
        hp : 100
    };
    $("#pikachu").attr("data-power", pikachu.power).attr("data-counter", pikachu.counter).attr("data-hp", pikachu.hp);

    var zapdos = {
        power: 20,
        counter: 10,
        hp: 120
    };
    $("#zapdos").attr("data-power", zapdos.power).attr("data-counter", zapdos.counter).attr("data-hp", zapdos.hp);

    var articuno = {
        power: 10,
        counter: 10,
        hp: 150
    };
    $("#articuno").attr("data-power", articuno.power).attr("data-counter", articuno.counter).attr("data-hp", articuno.hp);

    var moltres = {
        power: 25,
        counter: 5,
        hp: 180
    };
    $("#moltres").attr("data-power", moltres.power).attr("data-counter", moltres.counter).attr("data-hp", moltres.hp);

    

    function setHPText() {
        
        $("#pikachu-hp").text("Starting HP: " + pikachu.hp);

        $("#zapdos-hp").text("Starting HP: " + zapdos.hp);

        $("#articuno-hp").text("Starting HP: " + articuno.hp);

        $("#moltres-hp").text("Starting HP: " + moltres.hp);
    }
    setHPText();

    var gameStart = false;
    var defending = false;
    var gameOver = false;
    var myHP;
    var myPower;
    var myCounter;
    var defendingHP;
    var defendingPower;
    var defendingCounter;

    $(document).on("click", ".active", function() {
        if(!gameStart && !gameOver) {
            gameStart = true;
            $("#your-character").append($(this));
            $(this).removeClass("active");
            $(this).addClass("yourCharacter");
            myHP = $(this).attr("data-hp");
            myPower = $(this).attr("data-power");
            myCounter = $(this).attr("data-counter");
            $("#enemies").append($("#players"));
        }
        else if (!defending && !gameOver) {
            defending = true;
            $("#defender").append($(this));
            $(this).removeClass("active");
            $(this).addClass("active-enemy");
            defendingHP = $(this).attr("data-hp");
            defendingPower = $(this).attr("data-power");
            defendingCounter = $(this).attr("data-counter");
            $("#defender-hp").text("Defender's Remaining HP: " + defendingHP);
        }
    });

    $("#attackButton").on("click", function() {
        if(defending = true) {
            myHP -= defendingPower;
            defendingHP -= myPower;
            myPower = parseInt(myCounter) + parseInt(myPower);
            $("#your-hp").text("Your Remaining HP: " + myHP);
            $("#defender-hp").text("Defender's Remaining HP: " + defendingHP);
            if(myHP <= 0) {
                $(".container").append("<h4>You have been defeated! Restart to play again!</h4>");
                $("#restart").show().on("click", function() {
                    location.reload();
                });
                gameOver = true;
            }else if(defendingHP <= 0) {
                $(".active-enemy").remove();
                defending = false;
            }
        }
    })

})