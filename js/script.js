$(document).ready(function(){
    $('#myMsg').keypress(function(){
        if(event.which == 13 || event.keyCode == 13) {
            invioMessaggio();

            setTimeout(myFunction, 3000);
                function myFunction() {
                    var clone = $('.template1 .container-msg').clone();
                    
                    $('.container-chat').append(clone);
            }
        }
    })
    $('#send1').on('click',function(){
        invioMessaggio();

        setTimeout(sendRisposta, 1000);



        
    })
});

        /****************************FUNZIONI ********************************/
    function invioMessaggio() {
        var valoreInput = $('#myMsg').val();
            var clone = $('.template .container-msg').clone();
            clone.find('.messaggio').addClass('fright inviato');
            clone.find('.clone-msg').text(valoreInput);
            console.log(clone.children('.clone-msg'));
    
            var time= data();
            clone.find('.message-time').append(time);
    
    
            $('.right-conversation.active').append(clone);                   
        }           
/**************************************/
    function data() {
        var d = new Date();
        var ora = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        return ora+ ':'+m
    }


    function addZero(numero){
        if(numero < 10){
            return '0'+ numero;
        } 
        return numero;
    }
/**************************************/
    function sendRisposta() {
        var clone = $('.template .container-msg').clone();
        clone.find('.messaggio').addClass('fleft ricevuto');
        clone.find('.clone-msg').text('OK');

        var time= data();
        clone.find('.message-time').append(time);

        $('.right-conversation.active').append(clone);
}




$(document).on('click','.chat', function() {
    var name = $(this).find('.contact-name').text();
    var img = $(this).find('.getImg').attr('src');
     
    $('.avatar').find('.contactTochange').text(name);
    $('.avatar').find('.imgChanged').attr('src',img);
    $('.avatar').find('span').text(randomHours());

})


 function randomHours() {
     var hours =['12:43','11:20','6:50','5:30'];
     var randomHours = hours[Math.floor(Math.random() * hours.length)];
     return randomHours;
    
 }

