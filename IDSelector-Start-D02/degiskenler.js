
$(document).ready(function(){
  
   $('tr:first').css('color','red');
   $('tr:last').css('background-color','brown');
   
});
var trd = document.querySelector('tr');
trd.style.backgroundColor='orange';
 //// ALTERNATİF:
var trd2 = document.getElementsByTagName('tr');
trd2[2].style.color='orange';
    //// ALTERNATİF:
trd2[3].querySelector('th').style.color='black';
  //// ALTERNATİF:
 var den = trd2[3].getElementsByTagName('td')[1];
den.style.color='green';
den.style.fontWeight="bold";



//-------------------------------------------

// var marka, model;
// marka='Nike';
// model ='Air'
// var numara;
// // numara = prompt("Numara giriniz:","34");
// console.log(marka+' '+model+' '+ numara+' numara ayakkabı');


//------------------------------------------

// var people = new Array();

// for(var i = 0; i<2; i++)
// {
//     var person = {
//         name:prompt("Name:"),
//         surname:prompt("Surname:"),
//         age:prompt("Age:"),
//     };
// people.push(person);
// }
// console.log(people);

//-----------------------------------------


// var year_born = prompt("Yaşınızı giriniz:");

// calculatedAge = getAge(year_born);
// alert("Merhaba, " + "sen " + calculatedAge + " yaşındasın");

// function getAge(birthYear){
// 	var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     age = (new Date().getFullYear()) - birthYear;
//     return age;
// }

//--------------------------------------------