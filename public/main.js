$( document ).ready(function() {
  console.log('hello, earth!');

  let world = $("#world");
  let sea = $("#message");

  $(document).on('keypress', function(e){
        console.log(e.which);
        switch (e.which) {
            case 8:
                console.log('backspace pressed');
                break;
            case 9:
                console.log('tab pressed');
                break;
            case 16:
                console.log('shift pressed');
                break;
            case 32:
                world.css("stroke","black");
                sea.css("background-color","white");
            case 97:
                console.log("a");
                world.css("stroke","blue");
                break;
            case 115:
                console.log("s");
                world.css("stroke","green");
                break;
            case 100:
                console.log("d");
                world.css("stroke","purple");
                break;
            case 102:
                console.log("f");
                world.css("stroke","red");
                break;
            case 106:
                console.log("j");
                sea.css("background-color","lightBlue");
                break;
            case 107:
                console.log("k");
                sea.css("background-color","lightGrey");
                break;
            case 108:
                console.log("l");
                sea.css("background-color","pink");
                break;
            case 59:
                console.log(";");
                sea.css("background-color","maroon");
                break;
        }
    });
})
