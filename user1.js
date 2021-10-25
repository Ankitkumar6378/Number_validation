
     function A(fld) {
        var error = "";
        var illegalChars = /\W/; // allow letters, numbers, and underscores
     
        if (fld.value == "") {
            error = "You didn't enter a username.\n";
            alert(error);
            return false;
     
        } else if ((fld.value.length < 5) || (fld.value.length > 15)) {

            error = "The username is the wrong length.\n";
            alert(error);
            return false;
     
        } else if (illegalChars.test(fld.value)) {
            error = "The username contains illegal characters.\n";
            alert(error);
            return false;
     
        } else {
            B(password);
        }
        
    }