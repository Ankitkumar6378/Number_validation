function special(fld)
{
    var err=/\W/;
     if (err.test(fld.value)) {
        error = "This contains illegal characters.\n";
        alert(error);
        return false;
     }
     else
         alert("thank you for submit!!!");
   
      
    
}