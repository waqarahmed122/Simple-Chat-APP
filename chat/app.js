function getjawab(){
 var input_text= document.getElementById('input_text');
 if ((input_text.value=="hey") || (input_text.value=="Hi")||(input_text.value=="hello")){
 
   swal("Hi Buddy");
 }

 else if(input_text.value=="Assalamualikum"){
   swal("Walikumsalam");
 }
 else if((input_text.value=="how are you")||(input_text.value=="kesy hain ap")){
   swal("Alhamdulliah");
 }
 else {
    swal("Arry Bhai!", "Khna kia chahty ho!", "success");
    }
    

  }