function submitForm(submit,isFormvalid){
    if(isFormvalid){
     console.log("Fields Validated Successfully :)");
     console.log(submit);
    }
    else{
     console.log("Form Validated is Not Successfully :)");
     console.log(submit);
    }
 }
 
 function formValidation(){
         email="sece@sece.ac.in";
         password="12345678";
         if (email ==="sece@sece.a.in" && password === "12345678"){
             return true;
         }
         else{
             return false;
         }
 }
 submitForm("welcome boopathi",formValidation());