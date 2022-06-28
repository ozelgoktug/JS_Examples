function ornek1ViewModel() {

    isim = ko.observable("");

    soyisim = ko.observable("");

    tamisim = ko.computed(function () {

         return isim() + " " + soyisim();

    });

}
function personelViewModel() {
    isim = "Göktuğ";
    soyisim = "Özel";
    dogumTarihi = "06.01.1989";

}