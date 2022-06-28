

$(document).ready(function () {

 
  
    //butona basıldığında en yakın child'daki th ve tr'lerin
    //içeriğini alert olarak yazdıran fonksiyon.
    $("#FindClosestTr").on('click',function(){
        var currentRow=$(this).closest("tr");
        currentRow.index();
        var th=currentRow.find("th").text();
        var tr0=currentRow.find("td:eq(0)").text();
        var tr1=currentRow.find("td:eq(1)").text();
        var tr2=currentRow.find("td:eq(2)").text();
        var data="\nid: "+th+"\n Ad Soyad: "+tr0+"\n DT: "+tr1+"\n Eposta: "+tr2+"\n Index of TR row: "+currentRow.index();
        
        alert(data);
   });
   

    // for(var i = 0; i<5; i++)
    // tabloyaEkle("Deneme","Text","email",true);
    document.getElementById("MyTable").rows[1].cells[1].innerHTML 
        =  `<p style='color: blue' >${document.getElementById("MyTable").rows[1].cells[1].innerHTML} (Colorized with JS)</p>`; 
   
        // aşağıda metin eklerken html sayfasında oluşturduğum custom bir class'ı da tanımladım
    document.getElementById("MyTable").rows[2].cells[2].innerHTML  
        =  `<p class='make-color-red' >${document.getElementById("MyTable").rows[2].cells[2].innerHTML} (Colorized with JS)</p>`; 
      
    var TableCell01 = document.getElementById("MyTable").rows[0].cells[1];
        TableCell01.style.color = 'orange';
        TableCell01.innerHTML = `${TableCell01.innerHTML} (Colorized by JS)`;
        // JQUERY alternatif kullanım
        $('#MyTable tr').eq(2).find('td').eq(2).css('background-color', 'orange');
        // JQUERY alternatif kullanım
        $('#MyTable tr:eq(1) > td:eq(0)').css('background-color', 'yellow');
        // JQUERY alternatif kullanım
        $('#MyTable tr:eq(1)').find('td:eq(1)').css('background-color', 'red');
        // JQUERY alternatif kullanım
        $('#MyTable').find('tr').eq(3).css('background-color', '#c7ccf0');
        // JQUERY alternatif kullanım
        $('#MyTable tr').eq(1).find('td').eq(1).css('background-color', 'green');

      

    $('#btn').click(function(){
   
        console.log("Ekle butonu için click event'i çalıştı.")
        //aşağıda 3 farklı senaryo ile inputtan valeu bilgilerini aldık.
        let checkBox = document.getElementById('checkBox1').checked;
        var  name_surname = document.getElementById("nameSurname").value;
        var year_of_birth = document.querySelector('#yearOfBirth').value;
        const email = $('#eMail').val();
        console.log("Tabloya eklenecek: "+name_surname , " " , year_of_birth , " " , email)
        
        tabloyaEkle(name_surname,year_of_birth,email,checkBox);
    });

    
    function tabloyaEkle(name_surname, year_of_birth, email,IsChecked) {
      
        console.log("Tabloya ekleme fonksiyonu (tabloyaEkle) çalıştı"); 
        if (IsChecked == true && name_surname!="" && year_of_birth!="" && email!=""){

            var table = document.getElementById("MyTable");
            var trs = table.getElementsByTagName('tr') //tüm trleri seçtik
            var row = table.insertRow(trs.length); //tr lerin en altındaki elemandan itibaren satır ekliyor.
        
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            // cell1.innerHTML = ` <b> ${trs.length-1} </b>` ;
            
            const thTag = document.createElement("th"); //th tag elementi oluşturuldu
            thTag.innerHTML=trs.length-1 ; //innerHTML olarak gerekli id numarası içine yazıldı
            thTag.setAttribute("scope","row"); // Bootstrap5 table'larında olduğu gibi ilk hücreye scope="row"  attiribute'u eklendi
            cell1.replaceWith(thTag); //yukarıda oluşturulan row td olarak oluşturuldu ve yukarıdaki thTag elementi ile değiştirildi

            cell2.innerHTML = name_surname;
            cell3.innerHTML = year_of_birth;
            cell4.innerHTML = email;

            console.log("Tabloya Eklendi: " + name_surname , " " , year_of_birth , " " , email)

            $("#modaltext").text("");
            $('#modalHeader').text("İşlem Bilgisi").attr("style","color:green;")
            $("#modaltext").append("Aşağıdaki bilgiler forma başarıyla eklenmşitir.")
                .append(`<li><b>Ad Soyad:</b> ${name_surname} </li>`)
                .append(`<li><b>Doğum Yılı:</b> ${year_of_birth} </li>`)
                .append(`<li><b>Eposta:</b> ${email} </li>`);
            $('#modalButton').attr("class","btn btn-success");
            var modal=  $('#myModal');
            modal.modal('toggle');
           
        }
        else {
            $("#modaltext").text("");
            $('#modalHeader').text("Form Uyarısı!").attr("style","color:red;")
          var modal=  $('#myModal');
        if(!IsChecked)
        {$("#modaltext").append("<li>Bilgilerin doğruluğunu kabul ediniz.</li>");   }  
        if(name_surname=="")
        {$("#modaltext").append("<li>Ad ve Soyad boş geçilemez.</li>"); }   
        if(year_of_birth=="")
        {$("#modaltext").append("<li>Doğum Yılı boş geçilemez.</li>");}    
        if(email=="")
        {$("#modaltext").append("<li>Eposta bölümü boş geçilemez.</li>"); }   
        $('#modalButton').attr("class","btn btn-danger").text("Kapat");

        modal.modal('toggle');
        console.log("Checkbox status: ",IsChecked, "name_surname: ",name_surname, "year_of_birth: ",year_of_birth, "email: ",email)
            
        }
    } 

        let formIsOpen = true;
        $("#btnToggleForm").click(function(){
            if(formIsOpen)
            {
                $('#form1').slideDown(400);
                document.querySelector('#btnToggleForm').innerText='Formu Kapat';
            }
         else
         {
            $('#form1').slideUp(400);
            document.querySelector('#btnToggleForm').innerText='Formu Aç';
        }
            
          formIsOpen=!formIsOpen;
        });

        

        $('#btnAppendElement').click(function(){
            appendElements();
        });
     
        function appendElements() {
            var line = "<hr>";
            var txt1 = " <a href='http://google.com.tr' target='_blank'>Link</a>"; // Create text with HTML
            var btn1 = $("<a></a>").text("Buton").addClass("btn btn-warning").attr("href", "https://www.google.com.tr").attr("target","_blank"); // Create text with jQuery
              var th1 = $("<th scope='row'></th>").text("TH Tag Deneme");  // Create text with jQuery
          
            var txt2 = document.createElement("p");
            txt2.innerHTML = "Text.";         // Create text with DOM
           
            $("#container1").append(line, txt1, txt2, btn1, th1 ,line);   // Append new elements
          }  


});
