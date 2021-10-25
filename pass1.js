function B(fld) {
    var error = "";
    var filter =/^(?=.{8,20}$)(?![.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![.])$/  ////Regular expression

   if (fld.value == "") {
        error = "You didn't enter password .\n";
        alert(error);
		return false;
 
    } else if (!filter.test(fld.value)) {
        error = "Enter valid password\n";
        alert(error);
		return false;
    
    
    }
    else
           alert("thank you for submit");
}