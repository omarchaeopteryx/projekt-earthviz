$( document ).ready(function() {
  console.log('hello, earth!');

  let world = $("#world");
  let sea = $("#message");

  $(document).on('keypress', function(e){
        console.log(e.which); // <- Debugging.
        switch (e.which) {
            // Accounting for edge cases.
            case 8:
                console.log('backspace pressed');
                break;
            case 9:
                console.log('tab pressed');
                break;
            case 16:
                console.log('shift pressed');
                break;
            // Left hand: changing the land colors.
            case 32:
                e.preventDefault();
                world.css("stroke","black");
                sea.css("background-color","white");
            case 97:
                console.log("a");
                world.css("stroke","red");
                break;
            case 115:
                console.log("s");
                world.css("stroke","orange");
                break;
            case 100:
                console.log("d");
                world.css("stroke","yellow");
                break;
            case 102:
                console.log("f");
                world.css("stroke","lightGreen");
                break;
            case 103:
                console.log("g");
                world.css("stroke","white");
                break;

            case 113:
                console.log("q");
                world.css("stroke","blue");
                break;
            case 119:
                console.log("w");
                world.css("stroke","purple");
                break;
            case 101:
                console.log("e");
                world.css("stroke","violet");
                break;
            case 114:
                console.log("r");
                world.css("stroke","darkGrey");
                break;
            case 116:
                console.log("t");
                world.css("stroke","lightGrey");
                break;

            // Right hand: changing the sea colors.
            case 104:
                console.log("h");
                sea.css("background-color","white");
                break;
            case 106:
                console.log("j");
                sea.css("background-color","lightGreen");
                break;
            case 107:
                console.log("k");
                sea.css("background-color","lightYellow");
                break;
            case 108:
                console.log("l");
                sea.css("background-color","orange");
                break;
            case 59:
                console.log(";");
                sea.css("background-color","pink");
                break;

            case 121:
                console.log("y");
                sea.css("background-color","lightGrey");
                break;
            case 117:
                console.log("u");
                sea.css("background-color","grey");
                break;
            case 105:
                console.log("i");
                sea.css("background-color","lightBlue");
                break;
            case 111:
                console.log("o");
                sea.css("background-color","darkBlue");
                break;
            case 112:
                console.log("ph");
                sea.css("background-color","black");
                break;
        }
    });
})
