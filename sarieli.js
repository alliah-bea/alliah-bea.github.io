 // Original JavaScript code by Chirp Internet: chirpinternet.eu
    // Please acknowledge use of this code by including this header.

    var homebg = document.getElementById("homebg");
    var fadeComplete = function(e) { homebg.appendChild(arr[0]); };
    var arr = homebg.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);
