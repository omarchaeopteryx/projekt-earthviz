$( document ).ready(function() {
  console.log('hello world!');

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
            case 97:
                console.log("a");
                break;
            case 115:
                console.log("s");
                break;
            case 100:
                console.log("d");
                break;
            case 102:
                console.log("f");
                break;
            case 106:
                console.log("j");
                break;
            case 107:
                console.log("k");
                break;
            case 108:
                console.log("l");
                break;
            case 59:
                console.log(";");
                break;
        }
    });
})
