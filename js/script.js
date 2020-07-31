$(document).ready(function(){
    $('#myMsg').keypress(function(){
        if(event.which == 13 || event.keyCode == 13) {
            invioMessaggio();

            setTimeout(sendRisposta, 1000);
           
        }
    })
    $('#send1').on('click',function(){
        invioMessaggio();

        setTimeout(sendRisposta, 1000);      
    })
});


$(document).on('click','.chat', function() {
    var name = $(this).find('.contact-name').text();
    var img = $(this).find('.getImg').attr('src');
     
    $('.avatar').find('.contactTochange').text(name);
    $('.avatar').find('.imgChanged').attr('src',img);
    $('.avatar').find('span').text(randomHours());

});

$(document).on('click' ,'.chat', function(){
    var currentChat = $(this).index();                  
    var activeChat = $('.right-conversation').eq(currentChat);
    
    
    $('.right-conversation.active').removeClass('active');      
    $(activeChat).addClass('active');                               
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
        clone.find('.clone-msg').text(randomAnswer());

        var time= data();
        clone.find('.message-time').append(time);

        $('.right-conversation.active').append(clone);
}


 function randomHours() {
     var hours =['12:43','11:20','6:50','5:30'];
     var randomHours = hours[Math.floor(Math.random() * hours.length)];
     return randomHours;    
 }

 function randomAnswer() {
    var answers =['Ok','Ci vediamo dopo!','Buongiorn','Piacere mio'];
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    return randomAnswer;    
}



  // filtro contatti


      $('#search-chat').keyup(
        function () {
    
        
        var stringaFiltro = $(this).val().toLowerCase();
    
        
        $('.chat').each(
          function () {
          var stringaNome = $(this).find('.contact-name').text().toLowerCase();
    
            if(stringaNome.includes(stringaFiltro)){
              $(this).show();
            } else {
              $(this).hide();
            }
    
        });
      });