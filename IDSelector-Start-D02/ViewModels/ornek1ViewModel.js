var obje = {

    isim : ko.observable("Göktuğ"),
    soyisim : ko.observable("Özel"),
    dogumTarihi : ko.observable("06.01.1989"),
    checkbox : ko.observable(false),
    textbox : ko.observable('')

};


obje.tamisim = ko.computed(function () {

    return obje.isim() + " " + obje.soyisim();
    
});



ko.applyBindings(obje);


// function personelViewModel() {
//     isim = ko.observable("Göktuğ");
//     soyisim = ko.observable("Özel");
//     dogumTarihi = ko.observable("06.01.1989");
//     checkbox = ko.observable(false);
//     this.textbox = ko.observable('');
//     this.tamisim3 = ko.computed(function () {

//         return isim() + " " + soyisim() + ` ${dogumTarihi()}`;

//    });
// }
// ko.applyBindings(new personelViewModel());


$('.btn').click(function(){
$('#yazdir').text("deneme");
});