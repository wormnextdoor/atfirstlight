function sendToPage(){
    var input = document.getElementById("search").value;
     //alert("text");
     //location.href = "file";
    if (input == "zinnia"){
        alert("can you hear me?");
        return false;
    }
    else if (input == "remember"){
        location.href = "message.html";
        return false;
    }
        else if (input == "below"){
        alert("ha ha, very funny.");
        return false;
    }
        else if (input == "at first light"){
        location.href = "afl.html";
          return false;
    }
    else {
        alert('invalid input.');
    }
        }
