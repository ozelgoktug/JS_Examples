
function Friend(name){
    this.name = ko.observable(name);
    this.knowJS=ko.observable(false);
    this.txtEk=ko.observable('');
   
    this.removeItem=function(){
        obj.friends.remove(this);
        if(obj.friends().length<5)
        $('#lenghtWarnText').text("");
    };
    this.duzenle=function(){
        //observable yazdırmak
        console.log(this.name(), this.txtEk()); 
        //observable değişkene başka bir observable atamak
        this.name(this.txtEk());
         //obj.friends()[2].name= this.txtEk ;
   
    };
}

obj = {
    friends: ko.observableArray([
        new Friend('Bahar'),
        new Friend('Göktuğ'),
        new Friend('Haşmet'),]),

    name1: ko.observable(''),
 
}

obj.addFriend=function(){

    obj.friends.push(new Friend($('#textt').val()))
    $('ul').find('li').last().find('span').attr("style","color:"+$('.form-select').val());
   
    if(obj.friends().length==5)
    $('#lenghtWarnText').text(`(Maksimum ${obj.friends().length} kişi eklenebilir.)`);
   

    console.log("asdasd ", obj.friends().length==5);
    
}
 
ko.applyBindings(obj);



 