$(document).ready(function () {

    let isVisible= true;

    var btn = document.querySelector('#btn');

 $('#btn').click(function(){
     if(isVisible)
     {
         $('p').fadeOut(250);
     
       btn.innerText = 'Show';
    
    }
     else
    { 
         $('p').fadeIn(500);
     
         btn.innerText = 'Hide';
    }
     isVisible=!isVisible;
     $('#btn').value= 'Hide';



 });

});
